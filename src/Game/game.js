export default class Game {
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
    img.src = new URL("./goblin.png", import.meta.url);
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
