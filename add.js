const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 800

let mouseClick = false

const color = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#f1c40f",
    "#e67e22",
    "#e74c3c"
]

function onMouseMove(event) {
    if (mouseClick) {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.strokeStyle = color[Math.floor(Math.random() * color.length)]
        ctx.stroke()
    }
}

function onMouseDown() {
    if (mouseClick) {
        mouseClick = false
    } else {
        mouseClick = true
    }
}

function onMouseUp() {
    mouseClick = false
}

function onMouseLeave() {
    mouseClick = false
}

canvas.addEventListener("mousemove", onMouseMove)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseleave", onMouseLeave)