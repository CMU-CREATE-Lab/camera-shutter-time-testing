var box;
var pos = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  box = document.querySelector(".box")
  let lastTime

  function playAnimation(time) {
    if (lastTime != null) {
      // console.log("clicked")
      const delta = time - lastTime
     // console.log('before', box.style.left);
      pos += delta * .1;
      box.style.left = `${pos}%`
      //console.log('after', box.style.left);
      if (pos >= 100) {
        pos = 0
      }
    }
  
    lastTime = time
    window.requestAnimationFrame(playAnimation)
  }
  window.requestAnimationFrame(playAnimation)
});


