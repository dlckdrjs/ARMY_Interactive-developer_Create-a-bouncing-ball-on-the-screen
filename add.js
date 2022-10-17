const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const colors = [
    "#00a8ff",
    "#9c88ff",
    "#f1c40f",
    "#95a5a6",
    "#2ecc71",
    "#e84118",
    "#e67e22",
    "#bdc3c7",
    "#f39c12"

]

ctx.lineWidth = 2


function onClick(event) {
    ctx.beginPath()
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color
    ctx.moveTo(0, 0,)
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()
}

canvas.addEventListener("mousemove", onClick)