var ctx = document.getElementById("canvas1").getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 300, 100);

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 300, 100);

ctx.strokeRect(200, 200, 50, 50);
ctx.moveTo(0, 0);
ctx.lineWidth = 10;
ctx.lineTo(600, 300);
ctx.strokeStyle = "pink";
ctx.stroke();

ctx.moveTo(600, 0);
ctx.lineTo(0, 300);
ctx.stroke();


var ctx = document.getElementById("canvas2").getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);


var ctx = document.getElementById("pacman").getContext("2d");
ctx.beginPath();
ctx.fillStyle = "rgb(0,0,0";
ctx.fillRect(0, 0, 600, 300);


ctx.fillStyle = "yellow";
ctx.arc(250, 250, 100, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(300, 100);
ctx.lineTo(300, 200);
ctx.fillStyle = "black"

var ctx1 = document.getElementById("heart1").getContext("2d");
ctx1.beginPath();
ctx1.moveTo(100, 100);
ctx1.quadraticCurveTo(200, 100, 300, 200);
ctx1.quadraticCurveTo(400, 100, 300, 150);
ctx1.fillStyle = "red";
ctx1.fill();

var ctx2 = document.getElementById("chatbox").getContext("2d");
ctx1.beginPath();
ctx1.moveTo(100, 100);
ctx1.quadraticCurveTo(200, 100, 300, 200);
ctx1.quadraticCurveTo(400, 100, 300, 150);
ctx1.fillStyle = "red";
ctx1.fill();


var ctx3 = document.getElementById("bubble").getContext("2d");
 
ctx3.beginPath();
ctx3.moveTo(100, 100);
ctx3.quadraticCurveTo(50, 100, 50, 150);
ctx3.quadraticCurveTo(50, 200, 100, 200);
ctx3.quadraticCurveTo(120, 210, 80, 230);
ctx3.quadraticCurveTo(120, 220, 120, 200);
ctx3.quadraticCurveTo(120, 220, 150, 250);
ctx3.stroke();