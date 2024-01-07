let textCounter = 0
function changeText(){
    let textArr = [' Code'," Design Web pages",' Run Python scripts',
    " Make things work"]
    if (textCounter>=textArr.length-1){
        textCounter= 0 
    }
    else{
        textCounter++;
    }
    document.getElementById('changingText').innerHTML = textArr[textCounter]
}
setInterval(changeText,1000)

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}