import app from "./app.js";
import pg from "pg";

const databaseUrl = process.env.DATABASE_STRING;

if (undefined === databaseUrl) {
        throw new Error(
                "This project requires a database URL"
        )
}

export const pool = new pg.Pool({
        connectionString: databaseUrl,
})

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

