import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currenTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('Render')
    lastRenderTime = currenTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}