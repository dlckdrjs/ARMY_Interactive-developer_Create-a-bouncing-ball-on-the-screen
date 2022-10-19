const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width")
const color = document.getElementById("color")
const colorOption = Array.from(document.getElementsByClassName("color-option"))




let isPainting = false

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value



function onMove(event) {
    if (isPainting == true) {
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



canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)
colorOption.forEach(color => color.addEventListener("click", onColorClick))
