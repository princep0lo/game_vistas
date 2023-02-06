import React, { Component} from "react";
import player from "./css/player.module.css";

const ViewMode = (props) => {
return (
    <div className={player.viewMode}>
    <div className={player.viewButton} onClick={() => props.setViewMode(player.normal)}>
      N
    </div>
    <div className={player.viewButton} onClick={() => props.setViewMode(player.wide)}>
      W
    </div>
  </div>
)

};


export default ViewMode;