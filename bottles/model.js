import { pool } from "../db/index.js";

export async function getAllBottles() {
    const sqlQuery = "SELECT * FROM bottles ORDER BY id ASC;";
    const result = await pool.query(sqlQuery);
    const bottles = result.rows;
    return bottles;
}

// console.log(await getAllBottles())

export async function createBottle(newBottle) {
    const sqlQuery = "INSERT INTO bottles (message, timestamp) VALUES ($1, $2) RETURNING *;";
    const paramValues = [newBottle.message, newBottle.timestamp];
    const result = await pool.query(sqlQuery, paramValues);
    const createdBottle = result.rows[0];
    return createdBottle;
}

export async function deleteBottle() {
    const sqlQuery = "DELETE FROM bottles WHERE id = $1 RETURNING *;";
    const paramValues = [bottleId]
    const result = await pool.query(sqlQuery, paramValues);
    const deleted = result.rows[0]
    return deleted;
}


// function to get 3 random bottles for main feed
export async function getRandomBottles() {
    const sqlQuery = "SELECT * FROM bottles ORDER BY RANDOM() LIMIT 3;";
    const result = await pool.query(sqlQuery)
    const bottles = result.rows
    return bottles
}

console.log(await getRandomBottles())

