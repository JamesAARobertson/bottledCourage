
const buttonToSendMessageToServer = document.getElementById("buttonToSendMessageToServer")


document.getElementById('buttonToOpenTextBox').addEventListener('click', openTextBox);

function openTextBox() {
    // Get the required elements
    const textboxForMessage = document.getElementById('textboxForMessage');
    const buttonToSendMessageToServer = document.getElementById('buttonToSendMessageToServer');
    const divForNewMessageTextbox = document.getElementById('divForNewMessageTextbox');
    const buttonToOpenTextBox = document.getElementById('buttonToOpenTextBox');
    
    // Show the textarea and adjust its attributes
    divForNewMessageTextbox.style.display = 'block';
    divForNewMessageTextbox.style.width = '100%';  // Consider using CSS for this
    
    // Show the send button
    buttonToSendMessageToServer.style.display = 'inline-block';
    
    // Remove the open text box button
    buttonToOpenTextBox.remove();
}

const PORT = 4000;
// fetch bottle
async function getBottles() {
  const responseRequest = await fetch(`http://localhost:${PORT}/api/`, {
    method: `GET`,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!responseRequest.ok) {
    console.error(`Status: ${responseRequest.status}`);
    console.error(`Text: ${await responseRequest.text()}`);
    console.error('Data not available');
    return;
  }
  const responseData = await responseRequest.json();

    const arrayOfBottleMessages = [
        responseData.payload[0]["message"],
        responseData.payload[1]["message"],
        responseData.payload[2]["message"]
    ]

    const firstBottleContainer = document.getElementById("firstBottleMessage");
    firstBottleContainer.innerHTML = arrayOfBottleMessages[0]

    const firstBottleScore = document.querySelectorAll(".bottleScore")[0];
    firstBottleScore.innerHTML = responseData.payload[0]["score"]

    const secondBottleContainer = document.getElementById("secondBottleMessage");
    secondBottleContainer.innerHTML = arrayOfBottleMessages[1]

    const secondBottleScore = document.querySelectorAll(".bottleScore")[1];
    secondBottleScore.innerHTML = responseData.payload[1]["score"]

    const thirdBottleContainer = document.getElementById("thirdBottleMessage");
    thirdBottleContainer.innerHTML = arrayOfBottleMessages[2]

    const thirdBottleScore = document.querySelectorAll(".bottleScore")[2];
    thirdBottleScore.innerHTML = responseData.payload[2]["score"]

    // console.log(responseData.payload[0]["bottle_id"])
    const arrayOfBottleIds = [
        responseData.payload[0]["bottle_id"],
        responseData.payload[1]["bottle_id"],
        responseData.payload[2]["bottle_id"]
    ] 

    const elementOfBottleIds = document.getElementById("arrayOfBottleIds")
    elementOfBottleIds.innerHTML = arrayOfBottleIds

    return arrayOfBottleIds
}





// event lister to collect bottles on page load
window.addEventListener("load", async (event) => {
    // console.log("page is fully loaded")
    await getBottles()
    // console.log(arrayOfBottleIds)
  });
// getBottles()

async function postBottle(message) {
  fetch(`http://localhost:${PORT}/api/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset= utf-8',
    },
    body: JSON.stringify({ message: message }),
  }).then((response) => {
    if (!response.ok) {
      console.error('Error posting the message to the backend');
    } else {
      console.log('Message sent successfully');
    }
  });
}

// postBottle("Hello world")

buttonToSendMessageToServer.addEventListener('click', async () => {
  // check if text area is empty
  const textboxForMessage = document.getElementById('textboxForMessage');

  postBottle(textboxForMessage.value);
});
