const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const lineWidth = document.getElementById("line-width")

const modeBtn = document.getElementById("mode-btn-fill")


const eraser = document.getElementById("eraser-btn")
const color = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))
const reset = document.getElementById("reset-btn")

const fileInput = document.getElementById("file")

const textInput = document.getElementById("text")


canvas.width = 800
canvas.height = 800

ctx.lineCap = "round"
ctx.lineWidth = lineWidth.value

let isPainting = false
let isFilling = false

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



function onColocChange(event) {
    ctx.strokeStyle = event.target.value
    ctx.fillStyle = event.target.value

}

function onColorOptionClick(event) {
    ctx.strokeStyle = event.target.dataset.color
    ctx.fillStyle = event.target.dataset.color
    color.value = event.target.dataset.color

}



function modeBtnClick() {
    if (isFilling) {
        isFilling = false
        modeBtn.innerText = "Fill"
    } else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }

}

function onCavasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 800, 800)
    }

}

function onEraserClick() {
    ctx.strokeStyle = "white"
    modeBtn.innerText = "Draw"
}

function onResetClick() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 800, 800)
}

function onFileChange(event) {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)

    const image = new Image()
    image.src = url

    image.onload = function () {
        ctx.drawImage(image, 0, 0, 800, 800)
    }

    fileInput.value = null

}

function onDoubleClick(event) {
    const text = textInput.value


    if (text !== "") {
        ctx.save()
        ctx.lineWidth = 1
        ctx.font = "68px serif"
        ctx.strokeText(text, event.offsetX, event.offsetY)
        ctx.restore()
    }
}

canvas.addEventListener("mousemove", onMouseMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCavasClick)
canvas.addEventListener("dblclick", onDoubleClick)

lineWidth.addEventListener("change", onLineWidthChange)

eraser.addEventListener("click", onEraserClick)
reset.addEventListener("click", onResetClick)

color.addEventListener("change", onColocChange)
colorOption.forEach(color => color.addEventListener("click", onColorOptionClick))

modeBtn.addEventListener("click", modeBtnClick)

fileInput.addEventListener("change", onFileChange)