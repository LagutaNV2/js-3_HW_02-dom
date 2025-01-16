// TODO: write code here
import Game from "../Game/game.js";
import "../Game/game.css";

document.addEventListener("DOMContentLoaded", () => {
  const gameWidget = new Game();
  window.gameWidget = gameWidget;

  // Добавляем игровое полеs
  gameWidget.addGameField();

  // Запускаем перемещение персонажа
  gameWidget.replaceField();
});
