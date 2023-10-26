import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
  const insertedRows = await resetAllTables(
    [
      { message: "I am feeling great today!", timestamp: "2023-10-25" },
      { message: "I am loving databases!", timestamp: "2023-10-25" },
      { message: "Front end devs are cool :)", timestamp: "2023-10-25" },
    ],
    [
      { comment: "Good for you", timestamp: "2023-10-26", bottle_id: 1 },
      { comment: "Databases are fun", timestamp: "2023-10-26", bottle_id: 2 },
      { comment: "Front end devs are the best", timestamp: "2023-10-26", bottle_id: 3 },
    ]
  );
  console.log("Reset table and inserted data");
  console.log(insertedRows);
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
