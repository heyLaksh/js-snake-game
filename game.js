import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outSideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currenTime) {
    if (gameOver) {
        if (confirm('You lost, Press OK to restart.')) {
            window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currenTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currenTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
	updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}