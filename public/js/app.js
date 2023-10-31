import * as func from "./functions.js";

document
    .getElementById("buttonToOpenTextBox")
    .addEventListener("click", func.openTextBox);

window.addEventListener("load", async (event) => {
    await func.getBottles();
});

document
    .getElementById("buttonToSendMessageToServer")
    .addEventListener("click", async () => {
        const textboxForMessage = document.getElementById("textboxForMessage");

        func.postBottle(textboxForMessage.value);
        textboxForMessage.value = ""
    });
