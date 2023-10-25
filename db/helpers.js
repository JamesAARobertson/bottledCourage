import { pool } from "../server.js"

/**
 *
 * @param {{ message: string; timestamp: string}[]} data
 */

export async function resetAllTables(data) {
        await pool.query(`
        DROP TABLE IF EXISTS messages;
        CREATE TABLE messages (
                id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                message VARCHAR(255) NOT NULL,
                timestamp TIMESTAMPTZ NOT NULL
        );
        `);

        const inserted = await pool.query(`

        INSERT INTO messages (
                message,
                timestamp
                ) (
                        SELECT message, timestamp
                        FROM json_populate_recordset(NULL::messages, $1::JSON)
                )
                RETURNING *;`,
                [JSON.stringify(data)]
        )

        return inserted.rows;
}