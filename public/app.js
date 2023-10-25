// on hover over Message in a bottle, change color/highlight.
async function getBottle() {
    const responseRequest = await fetch("/", {
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
    console.log(responseRequest);
     console.log(responseData); 
}

getBottle();
// get Message in a bottle button by id. On click opens up input/textbox. Open's keyboard.
const submitButton = document.getElementById("send-message-button");

submitButton.addEventListener("click", function () {
    const existingInput = document.getElementById("myTextbox");

    if (!existingInput) {
    }

    const inputElement = document.createElement("input");

    // Set attributes for the input element
    inputElement.type = "text"; // Text input
    inputElement.id = "bottleMessage"; // ID for reference
    inputElement.name = "userInput"; // Name attribute

    // Add the input element to the container div
    const container = document.getElementById("textbox");
    container.appendChild(inputElement);
});
// Text box has max character limit

// add submit/send button for sending message, on click. Send button changes blue. Text box then disappears.

// confirmation message to user that bottle has been sent. Display for 2 seconds.

// randomisation of messages displayed on home screen

//
