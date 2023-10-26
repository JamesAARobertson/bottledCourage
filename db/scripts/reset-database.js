import { pool } from "../index.js";
import { resetAllTables } from "../helpers.js";

try {
    const insertedRows = await resetAllTables(
        [
                {
                        message: 'JavaScript is a sandbox of endless possibilities! 🌈',
                        timestamp: '2023-10-25',
                        score: 16
                      },
                      {
                        message: 'Async functions are like magic! 🎩 Time-travel, anyone?',
                        timestamp: '2023-10-25',
                        score: 44
                      },
                      {
                        message: "Cracked that bug! I'm like a code detective 🕵️‍♂️." ,
                        timestamp: '2023-10-25',
                        score: 96
                      },
                      {
                        message: 'APIs are the message in a bottle that the internet needed. Totally connected 🌍!',
                        timestamp: '2023-10-25',
                        score: 72
                      },
                      {
                        message: 'Debugging is like a fun treasure hunt 🗺️!' ,
                        timestamp: '2023-10-25',
                        score: 80
                      },
                      {
                        message: 'Coding is an art form where the canvas never ends 🎨!',
                        timestamp: '2023-10-25',
                        score: 73
                      },
                      {
                        message: 'Frameworks are like coding cheat codes! Speed run 🏃‍♀️.',
                        timestamp: '2023-10-25',
                        score: 48
                      },
                      {
                        message: 'New feature just went live! This is like launching a spaceship 🚀.',
                        timestamp: '2023-10-25',
                        score: 47
                      },
                      {
                        message: 'Refactoring is my therapy session for the week. So clean, so pure 💧.',
                        timestamp: '2023-10-25',
                        score: 88
                      },
                      {
                        message: "Trying out new libraries is like opening a box of chocolates 🍫. You never know what you're gonna get!",
                        timestamp: '2023-10-25',
                        score: 23
                      },
                      {
                        message: 'JavaScript, why do you have so many quirks? 🤔',
                        timestamp: '2023-10-25',
                        score: 50
                      },
                      {
                        message: "Async functions, you're like a Rubik's cube that keeps changing colors 🎨!",
                        timestamp: '2023-10-25',
                        score: 52
                      },
                      {
                        message: 'Finally fixed that bug, but at what cost? My sanity? 💆‍♂️',
                        timestamp: '2023-10-25',
                        score: 100
                      },
                      {
                        message: "APIs are like messages in a bottle that sometimes don't reach shore. Why 404, why?! 🌊",
                        timestamp: '2023-10-25',
                        score: 50
                      },
                      {
                        message: 'Debugging is like a never-ending escape room 🚪.',
                        timestamp: '2023-10-25',
                        score: 34
                      },
                      {
                        message: 'Is coding art or science? Right now, it feels like a cruel joke 🃏.',
                        timestamp: '2023-10-25',
                        score: 98
                      },
                      {
                        message: 'Frameworks, y u have so many dependencies? 😭',
                        timestamp: '2023-10-25',
                        score: 80
                      },
                      {
                        message: 'Deployed a new feature but now everything else is broken. Rolling back! 🔄',
                        timestamp: '2023-10-25',
                        score: 30
                      },
                      {
                        message: 'Refactoring is like a message in a bottle that I wish I found sooner. Cleanup on aisle 5 🧹.' ,
                        timestamp: '2023-10-25',
                        score: 91
                      },
                      {
                        message: 'Experimenting with new libraries like juggling flaming torches 🤹‍♂️.',
                        timestamp: '2023-10-25',
                        score: 18
                      }
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
