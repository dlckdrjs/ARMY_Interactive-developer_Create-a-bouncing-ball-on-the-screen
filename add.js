const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const lineWidth = document.getElementById("line-width")

const eraser = document.getElementById("eraser-btn")
const color = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))

canvas.width = 800
canvas.height = 800

ctx.lineWidth = lineWidth.value

let isPainting = false

function onMouseMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
        return
    }
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting() {
    isPainting = true
}

function cancelPainting() {
    isPainting = false
    ctx.beginPath()
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value

}

function onEraserClick() {
    ctx.strokeStyle = "white"
}

function onColocChange(event) {
    ctx.strokeStyle = event.target.value
}

function onColorOptionClick(event) {
    ctx.strokeStyle = event.target.dataset.color
    color.value = event.target.dataset.color

}

canvas.addEventListener("mousemove", onMouseMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange)

eraser.addEventListener("click", onEraserClick)

color.addEventListener("change", onColocChange)
colorOption.forEach(color => color.addEventListener("click", onColorOptionClick))