var canvas = document.getElementById("Dug");
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext("2d");

drawBack();
drawMiner();

var MinerX=0;
var MinerY=0;
var l=false;
var Gstart=false;

window.addEventListener("keydown", function(event){
    if (event.key == "d"){
        MinerX=MinerX+5
    }
    if (event.key == "a"){
        MinerX=MinerX-5
    }
    if (event.key == "s"){
        MinerY=MinerY+5
    }
    if (event.key == "w"){
        MinerY=MinerY-5
    }
    if(!Gstart){
        Gstart = true;
        window.requestAnimationFrame(animate);
    }
});

function animate(){
    if (!Gstart) return;
    draw();
    window.requestAnimationFrame(animate);
}

function draw(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawBack();
    ctx.translate(MinerX,MinerY)
    drawMiner();
    ctx.translate(-MinerX,-MinerY)
    ctx.restore();
}

//Objects

function drawBack(){
    ctx.fillStyle = "#008000"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
}

function drawMiner() {
    ctx.fillStyle = "#804000"; 
    ctx.fillRect(0, 0, 100, 50); 
    ctx.fillStyle = "#7f4f1f"; 
    ctx.fillRect(0, 50, 100, 25); 
}