/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/Game/game.js
class Game {
  constructor() {
    this.boardEl = null;
    this.characterImg = null;
    this.intervalId = null;
  }
  addGameField() {
    // Создаем контейнер игрового поля
    const container = document.createElement("div");
    container.classList.add("game-container");

    // Создаем ячейки игрового поля 4 * 4
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("impactField");
      cell.dataset.index = i;

      // Добавляем ячейку в контейнер
      container.appendChild(cell);
    }

    // Добавляем игровое поле в документ
    document.body.appendChild(container);
    this.boardEl = container;

    // Создаем персонажа
    this.createCharacter();
  }
  createCharacter() {
    // Создаем элемент img для персонажа
    const img = document.createElement("img");
    // img.src = "./goblin.png";
    img.src = new URL(/* asset import */ __webpack_require__(415), __webpack_require__.b);
    img.classList.add("character");

    // Добавляем класс для скрытия персонажа
    img.classList.add("invisible");
    this.characterImg = img;

    // Добавляем персонажа к первой ячейке (условно)
    this.boardEl.querySelector(".impactField").appendChild(this.characterImg);

    // Перемещаем персонажа в случайную позицию
    this.moveCharacter();
  }
  moveCharacter() {
    const cells = Array.from(this.boardEl.querySelectorAll(".impactField"));
    let randomCell;
    do {
      const randomIndex = Math.floor(Math.random() * cells.length);
      randomCell = cells[randomIndex];
    } while (randomCell === this.characterImg.parentElement);

    // Скрываем персонажа в текущей ячейке
    this.characterImg.classList.add("invisible");

    // Перемещаем персонажа в новую ячейку
    randomCell.appendChild(this.characterImg);

    // Показываем персонажа в новой ячейке
    this.characterImg.classList.remove("invisible");
  }
  replaceField() {
    // Устанавливаем интервал для перемещения персонажа 10 секунд
    this.intervalId = setInterval(() => {
      this.moveCharacter();
    }, 2000);

    // Устанавливаем таймер на 1 минуту для остановки интервала
    setTimeout(() => {
      clearInterval(this.intervalId);
      this.showGameOverMessage();
    }, 60000); // 1 минута
  }
  showGameOverMessage() {
    alert("Игра окончена!");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


document.addEventListener("DOMContentLoaded", () => {
  const gameWidget = new Game();
  window.gameWidget = gameWidget;

  // Добавляем игровое полеs
  gameWidget.addGameField();

  // Запускаем перемещение персонажа
  gameWidget.replaceField();
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
})();

/******/ })()
;