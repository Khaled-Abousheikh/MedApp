
var song = document.querySelector(".song");
var play = document.querySelector(".play");
// var outline = document.querySelector(".moving-outline circle");
var video = document.querySelector(".vid-container video");


//Time Display
var timeDisplay = document.querySelector(".time-display");
// var outlineLength = outline.getTotalLength();
//Duration
var timeSelect = document.querySelectorAll(".select button");
var fakeDuration = 0;

// outline.style.strokeDashoffset = outlineLength;
// outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

var vid = document.getElementById("myVideo")
var audio = document.getElementById("myAudio"); 

function playVid() { 
  vid.play();
  audio.play();  
} 

function pauseVid() { 
  vid.pause();
  audio.pause(); 
} 


timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});



song.ontimeupdate = function() {
  var currentTime = song.currentTime;
  var elapsed = fakeDuration - currentTime;
  var seconds = Math.floor(elapsed % 60);
  var minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  // var progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  // outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};