//Se llama al canvas del html
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Color de Fondo
ctx.beginPath();
ctx.fillStyle="#f16";
ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

//Triángulo
ctx.beginPath();
ctx.fillStyle="blue";
ctx.moveTo(40, 40);
ctx.lineTo(250, 40);
ctx.lineTo(171, 110);
ctx.closePath();
ctx.fill();

//Rectángulo (como tal no se esta dibujando, sino que se esta borrando esta parte del canvas)
ctx.beginPath();
ctx.clearRect(20, 10, 150, 100);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(120, 300, 100, 0, 2*matchMedia.PI);
ctx.stroke();


