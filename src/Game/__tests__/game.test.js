import Game from "../game.js";

describe("Game class", () => {
  let game;

  beforeEach(() => {
    document.body.innerHTML = ""; // очистка DOM перед каждым тестом
    game = new Game();
  });

  test("Проверка, что контейнер поля существует и поле состоит из 16 ячеек", () => {
    game.addGameField();
    const gameContainer = document.querySelector(".game-container");
    const cells = document.querySelectorAll(".impactField");
    expect(gameContainer).not.toBeNull();
    expect(cells.length).toBe(16);
  });

  test("Проверка, что персонаж был создан и находится в первой ячейке", () => {
    game.addGameField();
    const character = document.querySelector(".character");
    const firstCell = document.querySelector(".impactField");
    expect(character).not.toBeNull(); //
    expect(firstCell.contains(character)).toBe(true);
  });

  test("Проверка, что персонаж переместился", () => {
    game.addGameField();
    const initialCell = game.characterImg.parentElement;
    game.moveCharacter();
    const newCell = game.characterImg.parentElement;
    expect(newCell).not.toBe(initialCell);
  });

  test("Проверяем интервал в 1 минуту", () => {
    jest.useFakeTimers(); // моки таймеров
    game.addGameField();
    game.replaceField();у

    expect(game.intervalId).not.toBeNull();

    jest.advanceTimersByTime(60000); // Продолжаем время, как если бы прошла 1 минута

    expect(game.intervalId).toBeNull();

    global.alert = jest.fn(); // мок alert
    game.showGameOverMessage();
    expect(global.alert).toHaveBeenCalledWith("Игра окончена!");
  });

  test("Проверка, что вызывается alert с нужным сообщением", () => {
    global.alert = jest.fn(); // Мокаем alert
    game.showGameOverMessage();
    expect(global.alert).toHaveBeenCalledWith("Игра окончена!");
  });
});
