import React, { useState } from "react";
import "./style.css"; // Import your CSS file here

function Chatbot() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleClick = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div className="title">
     
      <div className=" ">
        <div
          id="chatbot"
          className={`${collapsed ? "main-card collapsed" : "main-card"}`}
        >
          <button id="chatbot_toggle" onClick={handleToggleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
            </svg>
            
          </button>
          <div className="main-title">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEX_n6SJFLKzCeMRtiMKgBk-RgalxuLEVOg&usqp=CAU"
                style={{ paddingTop: "5px", height: "2.5rem", width: "13rem" }}
                alt=""
              />
            </div>
            <span style={{ color: "black" }}>Your Plan Name</span>
          </div>
          <div className="chat-area" id="message-box">
            <h1 className=""></h1>
            <iframe
              className="streamlitbot"
              src="https://api.cyberbriefs.org/bot/"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
