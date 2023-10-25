import { pool } from "../db/index.js";

export async function getAllMessages() {
    const sqlQuery = "SELECT * FROM messages ORDER BY id ASC;";
    const result = await pool.query(sqlQuery);
    const messages = result.rows;
    return messages;
}

console.log(await getAllMessages())



