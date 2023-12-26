function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var chatMessages = document.getElementById('chatMessages');

    var message = messageInput.value;
    if (message.trim() !== '') {
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
function toggleChat() {
    var chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';

}

function closeChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = 'none';
}

// Function to toggle the chat container visibility
function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    const displayStyle = window.getComputedStyle(chatContainer).getPropertyValue('display');
    
    if (displayStyle === 'none') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}