// set global variables
var ctx; 
var fullWidth;
var height;
var pos = 0; 


// Initialize Canvas and colors
function initCanvas(){
    ctx = document.getElementById('canvas').getContext('2d');
    fullWidth = window.innerWidth;
    height = 150
    ctx.canvas.width = fullWidth;
    ctx.fillStyle = '#ff0000';
};
  
// Draw
function draw(){
    ctx.clearRect(0, 0, fullWidth, height);
    
    // Print the current time in milliseconds
    // and draw rect
    var msec = Date.now() % 1000; // last 3 digits in ms
    ctx.font = '25px serif';
    ctx.fillText('' + msec, pos-15, 125);
    ctx.fillRect(pos, 0, 7, 100);

    pos = pos + 10;
    if(pos >= fullWidth-7){
        pos = 0;
    }
    window.requestAnimationFrame(draw) 
};

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    initCanvas();

    // Looping with Request Animation Frame
    window.requestAnimationFrame(draw);
});
