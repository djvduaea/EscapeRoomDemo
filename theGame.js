import { worldData } from "./worldData.js";

const scrollBox = document.getElementById("scrollBox");
const inputField = document.getElementById("input");
const submitButton = document.getElementById("submitButton");

if (scrollBox) {
    scrollBox.innerHTML += `<p>${worldData.opening}</p>`; 
}

submitButton.addEventListener("click", () => {
    const parts = inputField.value.toLowerCase().trim().split(/\s+/);
    
    // Allows for 2 or more words (e.g., "look door" or "open bathroom door")
    if (parts.length < 2) {
        inputField.value = ""; 
        return;
    }

    // The first word is the verb
    const verb = parts[0];
    // Everything after the first word is joined back together as the noun
    const noun = parts.slice(1).join(" ");
    
    const roomKey = worldData.currentRoom.toLowerCase();
    const room = worldData[roomKey];
    
    // Now room[noun] will correctly find "bedroom door" or "bathroom door"
    if (room && room[noun] && room[noun][verb]) {
        let interaction = room[noun][verb];
        let outputText = "";

        if (typeof interaction === 'function') {
            outputText = interaction(); 
        } else {
            outputText = interaction;
        }

        scrollBox.insertAdjacentHTML('beforeend', `<br><p><em>${verb} ${noun}</em></p><p>${outputText}</p>`);

        const newRoomKey = worldData.currentRoom.toLowerCase();
        if (newRoomKey !== roomKey) {
            scrollBox.insertAdjacentHTML('beforeend', `<br><p>${worldData[newRoomKey].description}</p><br>`);
        }

    } else {
        scrollBox.insertAdjacentHTML('beforeend', `<br><br><p><strong><em>You can't do that.</em></strong></p><br><br>`);
    }

    scrollBox.scrollTop = scrollBox.scrollHeight;
    inputField.value = "";
});
