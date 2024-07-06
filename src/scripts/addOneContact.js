import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";
import { createFakeContact } from "../utils/createFakeContact.js";
export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const contact = JSON.parse(data);
  contact.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contact), "utf-8");
};

addOneContact();
