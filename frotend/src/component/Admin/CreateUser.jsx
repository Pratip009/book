import React, { useState, useEffect, useRef } from 'react';

export default function AdminChat() {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [replyFile, setReplyFile] = useState(null);
  const chatContainerRef = useRef(null);

  // Function to handle sending a reply to the special user
  const sendReply = () => {
    // Here you would send the reply text and/or file to the special user
    // For simplicity, I'm just updating the messages state with the reply
    const newMessage = {
      sender: 'admin',
      message: replyText,
      file: replyFile,
    };
    setMessages([...messages, newMessage]);
    setReplyText(''); // Clearing the reply text input field
    setReplyFile(null); // Clearing the reply file input field
  };

  // Automatically scroll to the bottom of the chat container when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div style={{ fontFamily: 'Nunito', maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Chat</h1>
      <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }} ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <div style={{ textAlign: msg.sender === 'admin' ? 'right' : 'left' }}>
              <div style={{ backgroundColor: msg.sender === 'admin' ? '#e6f2ff' : '#f2f2f2', padding: '10px', borderRadius: '10px', display: 'inline-block', maxWidth: '70%' }}>
                {msg.message}
                {msg.file && <img src={URL.createObjectURL(msg.file)} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '5px' }} />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Type your reply..." style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <input type="file" onChange={(e) => setReplyFile(e.target.files[0])} style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <button onClick={sendReply} style={{ padding: '10px', width: '100%', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send Reply</button>
    </div>
  );
}
