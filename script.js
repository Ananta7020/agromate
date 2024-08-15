function makeBubble() {
  var clutter = "";
  var numBubbles = window.innerWidth <= 360 ? 60 : 112; // Adjust number of bubbles based on screen width

  for (var i = 1; i <= numBubbles; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var hitrn = 0;

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

var timer = 60;
var StopWatch;

function runTimer() {
  StopWatch = setInterval(function () {
      if (timer > 0) {
          timer--;
          document.querySelector("#timerval").textContent = timer;
      } else {
          clearInterval(StopWatch);
          document.querySelector("#pbtm").style.display = 'none';
          document.querySelector("#finalScore").textContent = score;
          document.querySelector("#gameover").style.display = 'block';
      }
  }, 1000);
}

var score = 0;

function getScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function wrongScore() {
  if (score > 0) {
      score -= 10;
      document.querySelector("#scoreval").textContent = score;
  }
}

document.querySelector("#pbtm").addEventListener("click", function (e) {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === hitrn) {
      getScore();
      makeBubble();
      getNewHit();
  } else {
      wrongScore();
      makeBubble();
      getNewHit();
  }
});

document.querySelector("#restartBtn").addEventListener("click", function () {
  restartGame();
});

function restartGame() {
  score = 0;
  timer = 60;
  document.querySelector("#scoreval").textContent = score;
  document.querySelector("#timerval").textContent = timer;
  document.querySelector("#gameover").style.display = 'none';
  document.querySelector("#pbtm").style.display = 'flex';
  runTimer();
  makeBubble();
  getNewHit();
}

runTimer();
makeBubble();
getNewHit();
