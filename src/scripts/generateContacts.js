import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
  const data = await fs.readFile(PATH_DB, "utf8");
  const contact = JSON.parse(data);
  for (let i = 0; number > i; i++) {
    contact.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(contact), "utf-8");
  }
};

generateContacts(5);
