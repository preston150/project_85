canvas= document.getElementById('myCanvas')
ctx= canvas.getContext("2d")

roverwidth=96
roverheight=96;

bi="mars.jpg"
ri="rover.png"

rover_x=90
rover_y=10

function add(){
backgound_imgTag=new Image();
backgound_imgTag.onload=uploadBackground;
backgound_imgTag.src = bi 

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src = ri;
}
function uploadBackground(){
ctx.drawImage(backgound_imgTag, 0,0,canvas.width,canvas.height );
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, roverwidth,roverheight );
}
window.addEventListener("keydown",kd);
function kd(e)
{ 
kp=e.keyCode;
console.log(kp);
if(kp=="37"){
left();
}

if(kp=="38"){
up();
}

if(kp=="39"){
right();
}

if(kp=="40"){
down();
}


}

function left() 
{
if (rover_x >=0) 
{
 rover_x -= 10;
uploadBackground();
uploadrover();
}    
}

function right() 
{
if (rover_x <=700) 
{
 rover_x += 10;
uploadBackground();
uploadrover();
}
}  

function up() 
{
if (rover_y >=0) 
{
 rover_y -= 10;
uploadBackground();
uploadrover();
}
}

function down() 
{
if (rover_y <=500) 
{
 rover_y += 10;
uploadBackground();
uploadrover();
}
}    