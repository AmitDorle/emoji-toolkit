import React, { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("🏆");
  const [emojiColor, setEmojiColor] = useState("white");
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg] = useState(0);
  const [emojiRadius, setEmojiRadius] = useState(0);

  return (
    <div className="container">
      <div className="app-title-container">
        <h1 className="app-title">🥳 Emoji Kit</h1>
      </div>

      <div className="emoji-editor-container">
        <div>
          <div
            className="main-emoji-container"
            style={{
              backgroundColor: emojiColor,
              transform: `rotate(${emojiDeg * 3.6}deg)`,
              borderRadius: `${emojiRadius * 1.5}px`,
            }}
          >
            <div
              className="main-emoji"
              style={{ fontSize: `${emojiSize * 2}px` }}
            >
              {emoji}
            </div>
          </div>

          <div className="emoji-container">
            <div
              className="emoji-item"
              onClick={() => {
                setEmoji("🏆");
              }}
            >
              🏆
            </div>
            <div
              className="emoji-item"
              onClick={() => {
                setEmoji("🎯");
              }}
            >
              🎯
            </div>
            <div
              className="emoji-item"
              onClick={() => {
                setEmoji("👍");
              }}
            >
              👍
            </div>
            <div
              className="emoji-item"
              onClick={() => {
                setEmoji("😇");
              }}
            >
              😇
            </div>
            <div
              className="emoji-item"
              onClick={() => {
                setEmoji("🍕");
              }}
            >
              🍕
            </div>
          </div>
        </div>

        <div>
          <h2 className="editor-heading" >Change Color</h2>

          <div>
            <div className="color-container">
              <div
                className="color-container-item bg-gray"
                onClick={() => {
                  setEmojiColor("gray");
                }}
              ></div>
              <div
                className="color-container-item bg-coral"
                onClick={() => {
                  setEmojiColor("coral");
                }}
              ></div>
              <div
                className="color-container-item bg-cyan"
                onClick={() => {
                  setEmojiColor("cyan");
                }}
              ></div>
              <div
                className="color-container-item bg-dark"
                onClick={() => {
                  setEmojiColor("black");
                }}
              ></div>
              <div
                className="color-container-item bg-deepskyblue"
                onClick={() => {
                  setEmojiColor("deepskyblue");
                }}
              ></div>
            </div>
          </div>

          <div>
            <div className="color-container color-block">
              <div
                className="color-container-item bg-red"
                onClick={() => {
                  setEmojiColor("red");
                }}
              ></div>
              <div
                className="color-container-item bg-light"
                onClick={() => {
                  setEmojiColor("white");
                }}
              ></div>
              <div
                className="color-container-item bg-tomato"
                onClick={() => {
                  setEmojiColor("tomato");
                }}
              ></div>
              <div
                className="color-container-item bg-blue"
                onClick={() => {
                  setEmojiColor("blue");
                }}
              ></div>
              <div
                className="color-container-item bg-pink"
                onClick={() => {
                  setEmojiColor("pink");
                }}
              ></div>
            </div>
          </div>

          <h2 className="editor-heading" >Change Size</h2>
          <div className="size-container">
            <input
              type="range"
              className="size-slider"
              onChange={(e) => {
                setEmojiSize(e.target.value);
              }}
            />
          </div>

          <h2 className="editor-heading" >Rotate</h2>
          <div className="size-container">
            <input
              type="range"
              className="size-slider"
              onChange={(e) => {
                setEmojiDeg(e.target.value);
              }}
            />
          </div>

          <h2 className="editor-heading" >Change Radius</h2>
          <div className="size-container">
            <input
              type="range"
              className="size-slider"
              onChange={(e) => {
                setEmojiRadius(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
