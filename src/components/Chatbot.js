import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');
      
      setTimeout(() => {
        const botMessage = { text: 'This is a response from LearnBot.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  const exampleQuestions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4 ",
  ];

  return (
    <div className="chatbot-wrapper">
      <button 
        className={`chatbot-toggle-button ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Chat'}
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h2>Chat with LearnBot</h2>
            <p>We are online!</p>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-container">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Enter your message..."
              className="chatbot-input"
            />
            <button onClick={handleSend} className="chatbot-send-button">
              send
            </button>
          </div>
          <div className="chatbot-examples">
            <p>Try asking:</p>
            <ul>
              {exampleQuestions.map((question, index) => (
                <li key={index} onClick={() => setInput(question)}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
