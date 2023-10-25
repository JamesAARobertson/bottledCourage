import { pool } from "./index.js"

/**
 *
 * @param {{ message: string; timestamp: string}[]} data
 */

export async function resetAllTables(data) {
        await pool.query(`
        DROP TABLE IF EXISTS bottles;
        CREATE TABLE bottles (
                id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                message VARCHAR(255) NOT NULL,
                timestamp TIMESTAMPTZ NOT NULL
        );
        `);

        const inserted = await pool.query(`

        INSERT INTO bottles (
                message,
                timestamp
                ) (
                        SELECT message, timestamp
                        FROM json_populate_recordset(NULL::bottles, $1::JSON)
                )
                RETURNING *;`,
                [JSON.stringify(data)]
        )

        return inserted.rows;
}