const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;



ctx.fillRect(210, 200, 15, 100)
ctx.fillRect(350, 200, 15, 100)
ctx.fillRect(260, 200, 60, 200)
ctx.arc(250, 100, 50, 0, 2 * Math.PI)
ctx.fill()

ctx.beginPath()
ctx.arc(260, 80, 10, Math.PI, 2 * Math.PI)
ctx.arc(220, 80, 10, Math.PI, 2 * Math.PI)
ctx.fillStyle = "blue"
ctx.fill()
