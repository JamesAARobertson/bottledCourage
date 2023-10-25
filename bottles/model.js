import { pool } from "../db/index.js";

export async function getAllBottles() {
    const sqlQuery = "SELECT * FROM bottles ORDER BY id ASC;";
    const result = await pool.query(sqlQuery);
    const bottles = result.rows;
    return bottles;
}

console.log(await getAllBottles())

export async function createBottle(newBottle) {
    const sqlQuery = "INSERT INTO bottles (message, timestamp) VALUES ($1, $2) RETURNING *;";
    const paramValues = [newBottle.message, newBottle.timestamp];
    const result = await pool.query(sqlQuery, paramValues);
    const createdBottle = result.rows[0];
    return createdBottle;
}



