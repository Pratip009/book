import React, { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [queryText, setQueryText] = useState("");
  const [queryFile, setQueryFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // Function to handle sending the query to the admin
  const sendQuery = () => {
    // Here you would send the message and file to the backend
    // For simplicity, I'm just updating the messages state with the query
    const newMessage = {
      sender: "specialUser",
      message: queryText,
      file: queryFile,
    };
    setMessages([...messages, newMessage]);
    setQueryText(""); // Clearing the text input field
    setQueryFile(null); // Clearing the file input field
  };

  // Automatically scroll to the bottom of the chat container when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "150px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Special User Chat
      </h1>
      <div
        ref={chatContainerRef}
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={{ textAlign: msg.sender === "specialUser" ? "right" : "left" }}>
              <div
                style={{
                  backgroundColor: msg.sender === "specialUser" ? "#e6f2ff" : "#f2f2f2",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "inline-block",
                  maxWidth: "70%",
                }}
              >
                {msg.message}
                {msg.file && (
                  <img
                    src={URL.createObjectURL(msg.file)}
                    alt="Uploaded"
                    style={{ maxWidth: "100%", marginTop: "5px" }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
        placeholder="Type your query..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="file"
        onChange={(e) => setQueryFile(e.target.files[0])}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={sendQuery}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send Query
      </button>
    </div>
  );
}
