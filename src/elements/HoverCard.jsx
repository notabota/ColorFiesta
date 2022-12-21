import "./HoverCard.css";

import React from "react";

export default function HoverCard(props) {
  const { name, title } = props;
  return (
    <div class="game">
      <div class="front">
        <img
          src="https://taphoammo.net/img/tai-khoan-discord-bot-level-33-owo-bot_162398.png"
          alt="game"
        />
        <h3 class="name"> {name} </h3>
        <div class="status">
          <p class="viewers">{title}</p>
        </div>
      </div>
      <div class="back">
        <div class="streaming-info">
          <p class="game-stat">
            Info1 <span> Description1 </span>
          </p>
          <p class="game-stat">
            Info2 <span> Description2 </span>
          </p>
        </div>
        <button class="btn">#Hashtag</button>
      </div>
      <div class="backgroundWrapper"></div>
    </div>
  );
}
