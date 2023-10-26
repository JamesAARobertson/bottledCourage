import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
    const insertedRows = await resetAllTables(
        [
            { message: "I am feeling great today!", timestamp: "2023-10-25" },
            { message: "I am loving databases!", timestamp: "2023-10-25" },
            { message: "Front end devs are cool :)", timestamp: "2023-10-25" },
            {
                message: "JavaScript is such a versatile language!",
                timestamp: "2023-10-25",
            },
            {
                message: "I'm diving deep into async functions today.",
                timestamp: "2023-10-25",
            },
            {
                message: "Just solved a challenging bug!",
                timestamp: "2023-10-25",
            },
            {
                message: "APIs make the world go round.",
                timestamp: "2023-10-25",
            },
            {
                message: "Debugging is like solving a puzzle.",
                timestamp: "2023-10-25",
            },
            {
                message: "Coding is both art and science.",
                timestamp: "2023-10-25",
            },
            {
                message: "Frameworks make development faster.",
                timestamp: "2023-10-25",
            },
            {
                message: "I just deployed a new feature!",
                timestamp: "2023-10-25",
            },
            {
                message: "Refactoring code is satisfying.",
                timestamp: "2023-10-25",
            },
            {
                message: "I'm experimenting with new libraries.",
                timestamp: "2023-10-25",
            },
            {
                message: "Responsive design is crucial.",
                timestamp: "2023-10-25",
            },
            {
                message: "Performance optimization is key.",
                timestamp: "2023-10-25",
            },
            {
                message: "Today, I learned about closures.",
                timestamp: "2023-10-25",
            },
            {
                message: "Promises make async tasks easier.",
                timestamp: "2023-10-25",
            },
            {
                message: "I love the flexibility of JS.",
                timestamp: "2023-10-25",
            },
            {
                message: "Web development is constantly evolving.",
                timestamp: "2023-10-25",
            },
            {
                message: "I'm diving into server-side JS.",
                timestamp: "2023-10-25",
            },
            {
                message: "New ES features are so exciting!",
                timestamp: "2023-10-25",
            },
            {
                message: "Functional programming is intriguing.",
                timestamp: "2023-10-25",
            },
            {
                message: "I just completed a coding challenge!",
                timestamp: "2023-10-25",
            },
        ],
        [
            { comment: "Good for you", timestamp: "2023-10-26", bottle_id: 1 },
            {
                comment: "Databases are fun",
                timestamp: "2023-10-26",
                bottle_id: 2,
            },
            {
                comment: "Front end devs are the best",
                timestamp: "2023-10-26",
                bottle_id: 3,
            },
        ]
    );
    console.log("Reset table and inserted data");
    console.log(insertedRows);
} catch (err) {
    console.error(err);
} finally {
    await pool.end();
}
