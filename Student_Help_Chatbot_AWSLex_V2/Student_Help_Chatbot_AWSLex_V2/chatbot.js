// ====== AWS Configuration ======

// AWS region where the Lex bot is hosted
AWS.config.region = "us-east-1"; 

// SECURITY NOTE:
// NEVER hardcode AWS Access Keys and Secret Keys in client-side JavaScript.
// These values must be rotated, stored securely (for example, in AWS Secrets Manager or environment variables),
// because of security reason can NOT pushed to GitHub. The following are placeholders ONLY.
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: "YOUR_ACCESS_KEY_ID_HERE",     // 🔒 Placeholder. DO NOT use real key in client-side code.
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY_HERE" // 🔒 Placeholder. DO NOT use real key in client-side code.
});

// Create a Lex Runtime V2 object to interact with the Lex chatbot
const lexRuntime = new AWS.LexRuntimeV2();

// Storing the bot's information
// ⚠️ These are not as sensitive as credentials, I believe still nee to protect them in production.
const botId = "QZLVWENACS";       // Bot ID from AWS Lex
const botAliasId = "FYM7NAESC1";  // Alias ID for the bot
const localeId = "en_US";         // Language/locale
const sessionId = Date.now().toString(); // Random session ID for uniqueness

// ====== Chat Functions ======

// Function to add messages to the chat window
function appendMessage(message, sender) {
  const chatBox = document.getElementById('chat-box'); // Chat display area
  const div = document.createElement('div');           // Create a new message element
  
  // Apply CSS class based on who sent the message
  div.className = sender === 'user' ? 'user-message' : 'bot-message';
  
  div.textContent = message; // Set the message text
  chatBox.appendChild(div);  // Add it to the chat window

  // Automatically scroll to the latest message smoothly
  chatBox.scrollTo({
    top: chatBox.scrollHeight,
    behavior: 'smooth'
  });
}

// Function to send a user’s typed message to Lex
function sendMessage() {
  const input = document.getElementById('user-input'); // Input text field
  const message = input.value.trim(); // Remove extra spaces

  if (!message) return; // Do nothing if the input is empty

  appendMessage(message, 'user'); // Show user's message in chat
  input.value = ""; // Clear the input box

  // Prepare parameters for AWS Lex API call
  const params = {
    botAliasId: botAliasId,
    botId: botId,
    localeId: localeId,
    sessionId: sessionId,
    text: message
  };

  // Send the message to AWS Lex and handle the bot's response
  lexRuntime.recognizeText(params, (err, data) => {
    if (err) {
      console.error(err);
      appendMessage("Error: Unable to connect to the bot.", 'bot'); // Error message
    } else {
      const messages = data.messages || []; // Get bot's reply
      if (messages.length > 0) {
        appendMessage(messages[0].content, 'bot'); // Display bot's response
      } else {
        appendMessage("Sorry, I didn’t understand that.", 'bot'); // Default fallback
      }
    }
  });
}

// Function to clear the chat history
function clearChat() {
  document.getElementById('chat-box').innerHTML = '';
}

// Function to send predefined (quick button) messages
function sendPredefined(message) {
  document.getElementById('user-input').value = message; // Fill the input box
  sendMessage(); // Send it like a normal message
}

// Allow pressing "Enter" to send messages
document.getElementById('user-input').addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
