// var myVar;
// var myVar2

// function myFunction() {
//   myVar = setTimeout(showPage, 200);
// }

// function myFunction() {
//   myVar2 = setTimeout(showPage2, 1500);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block"
// }

// function showPage2() {
//   document.getElementById("myDiv").style.display = "none";
//   document.getElementById("app").style.display = "block"
// }

//Navi. bar functions
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var song = document.querySelector(".song");
var play = document.querySelector(".play");
var video = document.querySelector(".vid-container video");


//Time Display
var timeDisplay = document.querySelector(".time-display");


//Duration
var select = document.querySelectorAll(".select button");
var fakeDuration = 0;



//Playing and pausing vid and audio
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


select.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});


//song timer
song.ontimeupdate = function() {
  var currentTime = song.currentTime;
  var elapsed = fakeDuration - currentTime;
  var seconds = Math.floor(elapsed % 60);
  var minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  
//stop video and sound after time finished
  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    video.pause();
  }
};

//Sounds and select sound
var sounds = document.querySelectorAll(".sound-picker button");

sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});
