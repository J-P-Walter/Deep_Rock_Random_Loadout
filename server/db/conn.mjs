import { MongoClient } from "mongodb";

const dev_db_url =
  "mongodb+srv://JpWeim:Dutchiscool1@drg.rpkfbyn.mongodb.net/?retryWrites=true&w=majority";
const connectionString = process.env.ATLAS_URI || dev_db_url;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("dwarf_info");

export default db;
