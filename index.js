function makeBubble() {
    var clutter = "";
    for(var i =1; i<=133; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timerInt = setInterval(function() {
    if (timer>0) {
        timer--;
         document.querySelector("#timervalue").textContent = timer;
    }
    else{
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
        
    },1000)
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10);   
   document.querySelector("#hitvalue").textContent = hitrn;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

var hitrn = 0;
document.querySelector("#pbtm")
addEventListener( "click",function(details) {
   var clickednum = Number(details.target.textContent);
   if(hitrn === clickednum) {
     increaseScore();
     makeBubble();
     getNewHit();
   }
});

 const popup =document.querySelector(".popup");
 const x = document.querySelector(".popup-content h1")
window.addEventListener('load' , () => {
  popup.classList.add('showPopup');
  popup.childNodes[1].classList.add('showPopup');
})

x.addEventListener("click", ()=> {
  popup.classList.remove('showPopup');
  popup.childNodes[1].classList.remove('showPopup');
  runTimer();
})


makeBubble();
getNewHit();