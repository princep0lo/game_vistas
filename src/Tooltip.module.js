import React from "react";
import player from "./css/player.module.css";

const Tooltip = (props) => {
    return (
        <div className={player.tooltip}>{props.tooltip}</div>
    )
};

export default Tooltip;