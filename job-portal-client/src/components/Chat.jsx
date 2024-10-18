import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (message.trim() !== '') {
            const userMessage = { sender: 'user', text: message };
            setChat([...chat, userMessage]);

            try {
                const response = await axios.post('http://localhost:5000/chat', { message });
                const botMessage = { sender: 'bot', text: response.data.response };
                setChat([...chat, userMessage, botMessage]);
            } catch (error) {
                console.error('Error communicating with the chatbot:', error);
            }

            setMessage('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-40 mb-20  p-4 border rounded shadow">
            <div className="chat-box mb-20 overflow-y-scroll h-64 border-b">
                {chat.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-2 my-1 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-l"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button className="p-2 bg-blue-500 text-white rounded-r" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
