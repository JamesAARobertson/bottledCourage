import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
        const insertedRows = await resetAllTables([
                {message: "I am feeling great today!", timestamp: "2023-10-25"},
                {message: "I am loving databases!", timestamp: "2023-10-25"},
                {message: "Front end devs are cool :)", timestamp: "2023-10-25"},
        ]);
        console.log("Reset table and inserted data");
        console.log(insertedRows);
} catch (err) {
        console.error(err);
} finally {
        await pool.end();
}

