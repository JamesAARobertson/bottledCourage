const bottleSendButton = document.createElement('input');
const messageInput = document.getElementById('bottle-message-textarea');
const PORT = 4000;
// fetch bottle
async function getBottle() {
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
  //console.log(responseRequest);
  console.log(await responseData.payload[0]['message']);
}

// get "Message in a bottle button" by id.
const newBottleMessage = document.getElementById('send-message-button');

// On click opens up input/textbox.
newBottleMessage.addEventListener('click', function () {
  // create textarea for user to write new message in
  newBottleInput = document.createElement('textarea');
  // create new send/submit button

  // remove "Message in a bottle" button.
  newBottleMessage.remove();

  // Set attributes for the input/textarea element
  newBottleInput.type = 'text'; // Text input
  newBottleInput.id = 'bottle-message-textarea'; // ID for reference
  newBottleInput.name = 'usertextarea'; // Name attribute
  newBottleInput.placeholder =
    'Write a message in your bottle... (Max 100 characters)'; // Placeholder text in textarea

  // Add the input element to the container div
  const messageInput = document.getElementById('textbox');
  messageInput.appendChild(newBottleInput);
});
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
let message = 'its selam , hello';
postBottle(message);
bottleSendButton.addEventListener('click', async () => {
  // check if text area is empty
  if (messageInput.value.trim() === '') {
    console.error('Bottle is empty');
  } else {
    console.log('Bottle recieved');
    postBottle(messageInput.value);
  }
});

// postBottle;
newBottleMessage.addEventListener('click', function () {
  createSendButton = document.createElement('input');

  //create send button when message input box is created
  createSendButton.type = 'button';
  createSendButton.id = 'send-button';
  createSendButton.value = 'Send';

  const container = document.getElementById('send-message-div');
  container.appendChild(createSendButton);

  const checkMessageEmpty = document.getElementById('send-button');

  // when send button is clicked...
  checkMessageEmpty.addEventListener('click', function () {
    const messageInput = document.getElementById('bottle-message-textarea');

    // check if textarea is empty?
    if (messageInput.value.trim() === '') {
      // Textarea is empty
      console.error('Bottle is empty. ꭕ');
    } else {
      // Textarea has content
      console.log('Bottle has a message. √');
    }
  });
});

// Text box has max character limit

// add submit/send button for sending message, on click. Send button changes blue. Text box then disappears.

// confirmation message to user that bottle has been sent. Display for 2(?) seconds.
