import React, { useState } from "react";
import "./App.css";

function App() {
  const [discordId, setDiscordId] = useState("");
  const [isCorrectId, setIsCorrectId] = useState(null);
  
  const myDiscordId = "625103350006022163";
  
  const checkDiscordId = () => {
    if (discordId === myDiscordId) {
      setIsCorrectId(true);
    } else {
      setIsCorrectId(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my developer portfolio!</h1>
      </header>
      
      {/* Developer Section */}
      <section className="developer-section">
        <h2>About Me</h2>
        <p>Hi, I'm x45k, a developer that likes to do Minecraft modding, Discord bots, and web development.</p>
      </section>

      {/* Discord Account Info */}
      <section className="discord-section">
        <h2>My Discord Account</h2>
        <p>Discord Username: <strong>x45k</strong></p>
        <p>Discord ID: <strong>{myDiscordId}</strong></p>
      </section>

      {/* Discord ID Checker */}
      <section className="id-checker-section">
        <h2>Discord ID Checker</h2>
        <input
          type="text"
          placeholder="Enter a Discord ID"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
        />
        <button onClick={checkDiscordId}>Check ID</button>
        
        {isCorrectId === true && <p className="success">✅ This is my Discord ID!</p>}
        {isCorrectId === false && <p className="error">❌ This is not my Discord ID.</p>}
      </section>
      
      {/* Additional Content */}
      <section className="additional-content">
        <h2>What I Do</h2>
        <p>I specialize in:</p>
        <ul>
          <li>Custom Minecraft Modding (Forge & Chattriggers)</li>
          <li>Discord Bot Development</li>
          <li>Web Development (React, Node.js, etc.)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
