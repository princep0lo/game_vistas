import React, { useState, useEffect } from "react";
import styles from "./css/app.css";
import player from "./css/player.module.css";
import gameslist from "./css/gameslist.module.css";
import PlayerModule from "./Player.module";
import ViewMode from "./ViewMode.module";
import ColorPicker from "./ColorPicker.module";
import GameTitle from "./GameTitle.module";
import Tooltip from "./Tooltip.module";
import Gallery from "./Gallery.module";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const [background, setBackground] = useState(styles.white);
  const [showButtons, setShowButtons] = useState(false);
  const [tooltip, setTooltip] = useState("");
  const [viewMode, setViewMode] = useState(player.normal);
  const [selectedGame, setSelectedGame] = useState(0);
  const [buttonState, setButtonState] = useState(null);

  const games = [
    { title: "The Elder Scrolls IV: Oblivion", imageLength: 169, shortTitle: "Oblivion" },
    { title: "Overwatch II", imageLength: 2, shortTitle: "Overwatch" },
    { title: "Microsoft Flight Simulator", imageLength: 13, shortTitle: "Flightsim" },
    { title: "Stardew Valley", imageLength: 11, shortTitle: "Stardew" },
    { title: "Horizon Zero Dawn", imageLength: 40, shortTitle: "Horizon" },
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log(event.key);
      if ((event.key === "ArrowLeft" || event.key === "a") && selectedImage > 1) {
        setSelectedImage((state) => state - 1);
      } else if (event.key === "ArrowRight" || event.key === "d") {
        selectedImage < games[selectedGame].imageLength && setSelectedImage((state) => state + 1);
      } else if (event.key === " ") {
        viewMode === player.wide ? setViewMode(player.normal) : setViewMode(player.wide);
      } else if (event.key === "ArrowDown" || event.key === "s") {
        selectedGame < games.length - 1 && setSelectedGame((state) => state + 1);
      } else if (event.key === "ArrowUp" || event.key === "w") {
        selectedGame > 0 && setSelectedGame((state) => state - 1);
      } else if (event.key === "z") {
        setSelectedImage(1);
      } else if (event.key === "x") {
        setSelectedImage(games[selectedGame].imageLength);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  useEffect(() => {
    setSelectedImage(1);
  }, [selectedGame]);

  return (
    <div className={[styles.app, background].join(" ")}>
      <div className={gameslist.titleHeader}>Other games</div>
      <div className={gameslist.list}>
        {games.map((item, index) => (
          <div
            className={gameslist.title}
            onClick={() => {
              setSelectedGame(index);
              setSelectedImage(1);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>

      <GameTitle gameTitle={games[selectedGame].title} />
      <Tooltip tooltip={tooltip} />
      <ColorPicker setBackground={setBackground} />
      <ViewMode setViewMode={setViewMode} />

      <PlayerModule viewMode={viewMode} selectedImage={selectedImage} setSelectedImage={setSelectedImage} showButtons={showButtons} setShowButtons={setShowButtons} setTooltip={setTooltip} imageLength={games[selectedGame].imageLength} shortTitle={games[selectedGame].shortTitle} buttonState={buttonState} />

      <Gallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} setTooltip={setTooltip} imageLength={games[selectedGame].imageLength} shortTitle={games[selectedGame].shortTitle} />
    </div>
  );
};
export default App;
