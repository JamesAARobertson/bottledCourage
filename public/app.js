// Defining DOM variables

const buttonToOpenTextBox = document.getElementById("buttonToOpenTextBox");
const divForNewMessageTextbox = document.getElementById(
    "divForNewMessageTextbox"
);
const buttonToSendMessageToServer = document.getElementById("buttonToSendMessageToServer")

// On click opens up input/textbox.
buttonToOpenTextBox.addEventListener("click", function () {
    // create textarea for user to write new message in
    textboxForMessage = document.createElement("textarea");
    // create new send/submit button

    // remove "Message in a bottle" button.
    buttonToOpenTextBox.remove();

    // Set attributes for the input/textarea element
    textboxForMessage.type = "text"; // Text input
    textboxForMessage.id = "textboxForMessage"; // ID for reference
    textboxForMessage.name = "usertextarea"; // Name attribute
    textboxForMessage.placeholder =
        "Write a message in your bottle... (Max 255 characters)"; // Placeholder text in textarea

    divForNewMessageTextbox.appendChild(textboxForMessage);

    buttonToSendMessageToServer.hidden = false;

});

const PORT = 4000;
// fetch bottle
async function getBottles() {
    const responseRequest = await fetch(`http://localhost:${PORT}/api/`, {
        method: `GET`,
        headers: {
            Accept: "application/json",
        },
    });

    if (!responseRequest.ok) {
        console.error(`Status: ${responseRequest.status}`);
        console.error(`Text: ${await responseRequest.text()}`);
        console.error("Data not available");
        return;
    }
    const responseData = await responseRequest.json();

    const arrayOfBottleMessages = [
        responseData.payload[0]["message"],
        responseData.payload[1]["message"],
        responseData.payload[2]["message"]
    ]

    const firstBottleContainer = document.getElementById("bottle-reply-1");
    firstBottleContainer.innerHTML = arrayOfBottleMessages[0]

    const secondBottleContainer = document.getElementById("bottle-reply-2");
    secondBottleContainer.innerHTML = arrayOfBottleMessages[1]

    const thirdBottleContainer = document.getElementById("bottle-reply-3");
    thirdBottleContainer.innerHTML = arrayOfBottleMessages[2]
}
// event lister to collect bottles on page load
window.addEventListener("load", (event) => {
    console.log("page is fully loaded")
    getBottles()
  });
// getBottles()

async function postBottle(message) {
    fetch(`http://localhost:${PORT}/api/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset= utf-8",
        },
        body: JSON.stringify({ message: message }),
    }).then((response) => {
        if (!response.ok) {
            console.error("Error posting the message to the backend");
        } else {
            console.log("Message sent successfully");
        }
    });
}

// postBottle("Hello world")

buttonToSendMessageToServer.addEventListener("click", async () => {
    // check if text area is empty
    const textboxForMessage = document.getElementById("textboxForMessage")

        postBottle(textboxForMessage.value);

});
