// Defining DOM vars

const firstUpvoteButton = document.querySelectorAll('.upvoteContainer')[0];
const secondUpvoteButton = document.querySelectorAll('.upvoteContainer')[1];
const thirdUpvoteButton = document.querySelectorAll('.upvoteContainer')[2];

const firstDownvoteButton = document.querySelectorAll('.downvoteContainer')[0];
const secondDownvoteButton = document.querySelectorAll('.downvoteContainer')[1];
const thirdDownvoteButton = document.querySelectorAll('.downvoteContainer')[2];

const firstBottleScore = document.querySelectorAll('.bottleScore')[0];
const secondBottleScore = document.querySelectorAll('.bottleScore')[1];
const thirdBottleScore = document.querySelectorAll('.bottleScore')[2];

const voteCollector = {
        firstBottle: {
                upvote: false,
                downvote: false,
        },
        secondBottle: {
                upvote: false,
                downvote: false,
        },
        thirdBottle: {
                upvote: false,
                downvote: false,
        },
        
}

// FUNCTIONS

// VOTE PHYSICALITY

function removeUpvote(button) {
        button.style.color = "black"
        button.style["font-weight"] = "normal";
        button.textContent = "⇧";
}

function addUpvote(button) {
        button.style.color = "green";
        button.style["font-weight"] = "bold";
        button.textContent = "✓";
}

function removeDownvote(button) {
        button.style.color = "black"
        button.style["font-weight"] = "normal";
        button.textContent = "⇩";
}

function addDownvote(button) {
        button.style.color = "red";
        button.style["font-weight"] = "bold";
        button.textContent = "✘";
}

// ADD REMOVE SCORE


function addScore(bottle) {
        currentScore = Number(bottle.textContent)+1
        bottle.textContent = currentScore.toString()
}

function removeScore(bottle) {
        currentScore = Number(bottle.textContent)-1
        bottle.textContent = currentScore.toString()
}




// UPVOTES

firstUpvoteButton.addEventListener("click", function () {
        if (voteCollector.firstBottle.upvote === true) {
        voteCollector.firstBottle.upvote = false;
        removeUpvote(firstUpvoteButton)
        removeScore(firstBottleScore);
        } else {
        voteCollector.firstBottle.upvote = true;
        addUpvote(firstUpvoteButton)
        addScore(firstBottleScore);
        }
})

secondUpvoteButton.addEventListener("click", function () {
        if (voteCollector.secondBottle.upvote === true) {
        voteCollector.secondBottle.upvote = false;
        removeUpvote(secondUpvoteButton)
        removeScore(secondBottleScore);
        } else {
        voteCollector.secondBottle.upvote = true;
        addUpvote(secondUpvoteButton)
        addScore(secondBottleScore);
        }
})

thirdUpvoteButton.addEventListener("click", function () {
        if (voteCollector.thirdBottle.upvote === true) {
        voteCollector.thirdBottle.upvote = false;
        removeUpvote(thirdUpvoteButton)
        removeScore(thirdBottleScore);
        } else {
        voteCollector.thirdBottle.upvote = true;
        addUpvote(thirdUpvoteButton)
        addScore(thirdBottleScore);
        }
})


// DOWNVOTES

firstDownvoteButton.addEventListener("click", function () {
        if (voteCollector.firstBottle.downvote === true) {
        voteCollector.firstBottle.downvote = false;
        removeDownvote(firstDownvoteButton)
        addScore(firstBottleScore);
        } else {
        voteCollector.firstBottle.downvote = true;
        addDownvote(firstDownvoteButton)
        removeScore(firstBottleScore);
        }
})

secondDownvoteButton.addEventListener("click", function () {
        if (voteCollector.secondBottle.downvote === true) {
        voteCollector.secondBottle.downvote = false;
        removeDownvote(secondDownvoteButton)
        addScore(secondBottleScore);
        } else {
        voteCollector.secondBottle.downvote = true;
        addDownvote(secondDownvoteButton)
        removeScore(secondBottleScore);
        }
})

thirdDownvoteButton.addEventListener("click", function () {
        if (voteCollector.thirdBottle.downvote === true) {
        voteCollector.thirdBottle.downvote = false;
        removeDownvote(thirdDownvoteButton)
        addScore(thirdBottleScore);
        } else {
        voteCollector.thirdBottle.downvote = true;
        addDownvote(thirdDownvoteButton)
        removeScore(thirdBottleScore);
        }
})