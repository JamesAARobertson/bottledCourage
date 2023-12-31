//this is a comment :) //
// Defining DOM variables
const buttonToOpenTextBox = document.getElementById("buttonToOpenTextBox");
const divForNewMessageTextbox = document.getElementById(
  'divForNewMessageTextbox'
);

const buttonToSendMessageToServer = document.getElementById("buttonToSendMessageToServer")


// On click opens up input/textbox.
buttonToOpenTextBox.addEventListener('click', function () {
  // create textarea for user to write new message in
  textboxForMessage = document.createElement('textarea');
  // create new send/submit button

  // remove "Message in a bottle" button.
  buttonToOpenTextBox.remove();

  // Set attributes for the input/textarea element
  textboxForMessage.type = 'text'; // Text input
  textboxForMessage.id = 'textboxForMessage'; // ID for reference
  textboxForMessage.name = 'usertextarea'; // Name attribute
  textboxForMessage.placeholder = 'Write a message in your bottle...'; // Placeholder text in textarea

  divForNewMessageTextbox.appendChild(textboxForMessage);
  divForNewMessageTextbox.style.width = '2%';
  //   divForNewMessageTextbox.style.height = '5%';

  buttonToSendMessageToServer.hidden = false;
  buttonToSendMessageToServer.style.display = 'inline-block';
});

const PORT = 10000;
// fetch bottle
async function getBottles() {
  const responseRequest = await fetch(`https://bottledcouragedeployment.onrender.com/api`, {
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
