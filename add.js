const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width")
const color = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))
const modeBtn = document.getElementById("mode-btn")

console.log(modeBtn)

let isPainting = false
let isFilling = false

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value



function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
        return
    }

    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting() {
    isPainting = true
}

function cancelPainting() {
    isPainting = false
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value
}

function onColorChange(event) {
    ctx.strokeStyle = event.target.value
    ctx.fillStyle = event.target.value
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color

    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    color.value = colorValue

}

function onModeBtn() {
    if (isFilling) {
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 800, 800)
    }
}



canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)
colorOption.forEach(color => color.addEventListener("click", onColorClick))
modeBtn.addEventListener("click", onModeBtn)