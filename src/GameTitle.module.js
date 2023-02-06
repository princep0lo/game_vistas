import React from "react";
import player from "./css/player.module.css";


const GameTitle = (props) => {
    return (
        <div className={player.gameTitle}>{props.gameTitle}</div>
    )
};

export default GameTitle;