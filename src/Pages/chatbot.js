import React, { useState } from 'react';


function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // Logic to send message to chatbot service
    // Update messages state with user message
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Receive response from chatbot service
    // Update messages state with chatbot response
    setMessages([...messages, { text: "Response from chatbot", sender: 'bot' }]);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <button onClick={() => sendMessage(document.querySelector('input').value)}>
        Send
      </button>
    </div>
  );
}

export default Chat;
