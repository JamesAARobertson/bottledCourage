

// Mapping buttons to bottles
const bottles = ["firstBottle", "secondBottle", "thirdBottle"];
const upvoteButtons = document.querySelectorAll(".upvoteContainer");
const downvoteButtons = document.querySelectorAll(".downvoteContainer");
const bottleScores = document.querySelectorAll(".bottleScore");

// Initialize vote collector
const voteCollector = {};
bottles.forEach((bottle) => {
    voteCollector[bottle] = {
        upvote: false,
        downvote: false,
    };
});


// GET and PATCH by ID


async function updateBottleScore(bottle_id, score) {
        const responseRequest = await fetch(`http://localhost:${PORT}/api/id?bottle_id=${bottle_id}`, {
                method: `GET`,
                headers: {
                    Accept: "application/json",
                },
            });
            const responseData = await responseRequest.json();
           // console.log(responseData.payload)

            //console.log(responseData.payload.bottle_id)

            const bottleToBeUpdated = {
                "bottle_id":responseData.payload.bottle_id,
                "message":responseData.payload.message,
                "timestamp":responseData.payload.timestamp,
                "score":score.toString()
            }

            // Now I need to implement a PATCH route, and repack all that shit


const patchRequest = await fetch(`http://localhost:${PORT}/api/update/`, {
        method: `PATCH`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
               bottleToBeUpdated
            })
    });


    // console.log(patchRequest)
    }



// Function to toggle vote
function toggleVote(
    button,
    state,
    symbol,
    color,
    scoreElement,
    computeScoreChange
) {
    state = !state;
    button.style.color = state ? color : "black";
    button.style.fontWeight = state ? "bold" : "normal";
    button.textContent = state ? symbol : symbol === "✓" ? "⇧" : "⇩";
    let currentScore = Number(scoreElement.textContent);
    const scoreChange = computeScoreChange(state); // Call computeScoreChange to get the score change based on the new state
    scoreElement.textContent = (currentScore + scoreChange).toString();

    return state;
}

// Attach event listeners to bottles
bottles.forEach((bottle, index) => {
    upvoteButtons[index].addEventListener("click", function () {
        voteCollector[bottle].upvote = toggleVote(
            this,
            voteCollector[bottle].upvote,
            "✓",
            "green",
            bottleScores[index],
            (newState) => (newState ? 1 : -1) // Function to compute score change
        );

        // Getting the bottle ID, to GET the original bottle, update the score then PATCH
        const votedBottleId = document.getElementById("arrayOfBottleIds").innerHTML.split(",")[index]
        const settledScore = bottleScores[index].innerText

        updateBottleScore(votedBottleId, settledScore)
    });

    downvoteButtons[index].addEventListener("click", function () {
        voteCollector[bottle].downvote = toggleVote(
            this,
            voteCollector[bottle].downvote,
            "✘",
            "red",
            bottleScores[index],
            (newState) => (newState ? -1 : 1) // Function to compute score change
        );

                // Getting the bottle ID, to GET the original bottle, update the score then PATCH
                const votedBottleId = document.getElementById("arrayOfBottleIds").innerHTML.split(",")[index]
                const settledScore = bottleScores[index].innerText
        
                updateBottleScore(votedBottleId, settledScore)
    });
});

