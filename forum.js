
let messages = [];

function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    messages.forEach(message => {
        messagesDiv.innerHTML += `<p><strong>${message.username}:</strong> ${message.text}</p>`;
    });
}

function postMessage() {
    const username = document.getElementById('username').value;
    const messageText = document.getElementById('message').value;

    if (username && messageText) {
        
        messages.push({ username, text: messageText });

        
        displayMessages();

        
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please enter both username and message.');
    }
}


displayMessages();
