import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const contact = JSON.parse(data);
  contact.length = 0;
  await fs.writeFile(PATH_DB, JSON.stringify(contact), "utf-8");
};

removeAllContacts();
