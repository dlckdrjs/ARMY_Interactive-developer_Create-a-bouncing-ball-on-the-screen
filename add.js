const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const lineWidth = document.getElementById("line-width")
const colors = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))
const mode = document.getElementById("mode")
const eraser = document.getElementById("eraser")
const reset = document.getElementById("reset")
const file = document.getElementById("file")
const text = document.getElementById("text")
const save = document.getElementById("save")

canvas.width = 500
canvas.height = 500
ctx.lineWidth = lineWidth.value
ctx.lineCap = "round"


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

function onStartPaint() {
    isPainting = true
}

function onEndPaint() {
    isPainting = false
    ctx.beginPath()

}

function onLineWidthChange(event) {
    const lineValue = event.target.value
    ctx.lineWidth = lineValue
}

function onColorChange(event) {
    const color = event.target.value
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

function colorOptionClick(event) {
    const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue
    ctx.fillStyle = colorValue
    colors.value = colorValue
}

function onModeClick() {
    if (isFilling) {
        isFilling = false
        mode.innerText = "Fill"
    } else {
        isFilling = true
        mode.innerText = "Draw"
    }
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 500, 500)
    }
}

function onEraserClick() {
    isFilling = false
    ctx.strokeStyle = "white"
    mode.innerText = "Fill"
}

function onResetClick() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 500, 500)
}

function onFlieChange(event) {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url

    image.onload = function () {
        ctx.drawImage(image, 0, 0, 500, 500)
    }
}

function onCanvasDoubleClick(event) {
    const textValue = text.value

    ctx.save()
    ctx.lineWidth = 1
    ctx.font = "50px Fira Sans"
    ctx.fillText(textValue, event.offsetX, event.offsetY)
    ctx.restore()
}

function onSaveClick() {
    const url = canvas.toDataURL()
    const a = document.createElement("a")
    a.href = url
    a.download = "myDrawingInage.png"
    a.click()
}

canvas.addEventListener("mousemove", onMouseMove)
canvas.addEventListener("mousedown", onStartPaint)
canvas.addEventListener("mouseup", onEndPaint)
canvas.addEventListener("mouseleave", onEndPaint)
canvas.addEventListener("click", onCanvasClick)
canvas.addEventListener("dblclick", onCanvasDoubleClick)

lineWidth.addEventListener("change", onLineWidthChange)
colors.addEventListener("change", onColorChange)
colorOption.forEach(color => color.addEventListener("click", colorOptionClick))
mode.addEventListener("click", onModeClick)
eraser.addEventListener("click", onEraserClick)
reset.addEventListener("click", onResetClick)
file.addEventListener("change", onFlieChange)
save.addEventListener("click", onSaveClick)