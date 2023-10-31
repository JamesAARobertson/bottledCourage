const PORT = 4000;

export function openTextBox() {
    const buttonToSendMessageToServer = document.getElementById(
        "buttonToSendMessageToServer"
    );
    const divForNewMessageTextbox = document.getElementById(
        "divForNewMessageTextbox"
    );
    const buttonToOpenTextBox = document.getElementById("buttonToOpenTextBox");

    divForNewMessageTextbox.style.display = "block";
    divForNewMessageTextbox.style.width = "100%";

    buttonToSendMessageToServer.style.display = "inline-block";

    buttonToOpenTextBox.remove();
}

export async function getBottles() {
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

    const arrayOfBottleMessages = [];
    const arrayOfBottleIds = [];

    // Get messages and push it to the web page via DOM
    for (let i = 0; i < responseData.payload.length; i++) {
        arrayOfBottleMessages.push(responseData.payload[i]["message"]);
        arrayOfBottleIds.push(responseData.payload[i]["bottle_id"]);
        
        const messageContainer = document.getElementById(
            `${ordinal(i)}BottleMessage`
        );
        messageContainer.innerHTML = arrayOfBottleMessages[i];
    
        const scoreElement = document.querySelectorAll(".bottleScore")[i];
        scoreElement.innerHTML = responseData.payload[i]["score"];
    }
    

    function ordinal(num) {
        switch (num) {
            case 0:
                return "first";
            case 1:
                return "second";
            case 2:
                return "third";
            default:
                throw new Error("Bad number of bottles");
        }
    }



    const elementOfBottleIds = document.getElementById("arrayOfBottleIds");
    elementOfBottleIds.innerHTML = arrayOfBottleIds;

    return arrayOfBottleIds;
}

export async function postBottle(message) {
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
