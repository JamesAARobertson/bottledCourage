import { pool } from "./index.js";

/**
 *
 * @param {{ message: string; timestamp: string}[]} data
 */

export async function resetAllTables(data, commentData) {
  await pool.query(`
        DROP TABLE IF EXISTS bottles, comments;
        CREATE TABLE bottles (
                bottle_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                message VARCHAR(255) NOT NULL,
                timestamp TIMESTAMPTZ NOT NULL

                )
                `);

  await pool.query(`
                CREATE TABLE comments (
                        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                        comment VARCHAR(255) NOT NULL,
                        timestamp TIMESTAMPTZ NOT NULL,
                        bottle_id INT NOT NULL,
                        FOREIGN KEY (bottle_id) REFERENCES bottles(bottle_id) ON DELETE CASCADE
        );
        `);

  const insertedBottles = await pool.query(
    `

        INSERT INTO bottles (
                message,
                timestamp
                ) (
                        SELECT message, timestamp
                        FROM json_populate_recordset(NULL::bottles, $1::JSON)
                )
                RETURNING *;
                `, [JSON.stringify(data)]);

  const insertedComments = await pool.query( `
        INSERT INTO comments (
                comment,
                timestamp,
                bottle_id
                ) (
                        SELECT comment, timestamp, bottle_id
                        FROM json_populate_recordset(NULL::comments, $1::JSON)
                        )
                        RETURNING *;`,
    [JSON.stringify(commentData)]
  );
  const insertedData = {
    bottles: insertedBottles.rows,
    comments: insertedComments.rows,
  };
  return insertedData;
}
