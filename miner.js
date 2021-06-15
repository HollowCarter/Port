var canvas = document.getElementById("Dug");
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext("2d");

ctx.fillStyle = "#008000"; 
ctx.fillRect(0, 0, canvas.width, canvas.height); 

drawMiner();

function drawMiner() {
    ctx.fillStyle = "#804000"; 
    ctx.fillRect(0, 0, 100, 50); 
    ctx.fillStyle = "#7f4f1f"; 
    ctx.fillRect(0, 50, 100, 25); 
}

var MinerX=0;
var l=false;
var Gstart=false;

window.addEventListener("keydown", function(event){
    if (event.key == "d"){
        l=true
    }
    if(!Gstart){
        Gstart = true;
        window.requestAnimationFrame(animate);
    }
});

window.addEventListener("onkeyup",function(event){
    if (event.key == "d"){
        l=false
    }
})

function animate(){
    if (!Gstart) return;
    if (l=true){MinerX=MinerX+1}
    draw();
    window.requestAnimationFrame(animate);
}
function draw(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.translate(MinerX,0)
    drawMiner();
    ctx.restore();
}