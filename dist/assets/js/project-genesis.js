"use strict";
document.addEventListener('DOMContentLoaded', function () {
    smoothScroll(300);
    nav();
    intializePlayer();
});

//smoothScroll is applied from the document ready function
function smoothScroll (duration) {
$('a[href^="#"]').on('click', function(event) {

  var target = $( $(this).attr('href') );

  if( target.length ) {
       event.preventDefault();
       $('html, body').animate({
           scrollTop: target.offset().top
        }, duration);
    }
  });

}

function nav(){
  $('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.container').toggleClass('active');
    $('.page-content').toggleClass('active');
    $('.sidebar').toggleClass('active');
  });
}


var vid, playbtn, seekSlider, cTimeText, dTimeText, mutebtn, volumeSlider, fullscreenbtn, player, fullscreen;

function intializePlayer() {
  // Set Object Ref
  "use strict";
  vid = document.getElementById('video');
  playbtn = document.getElementById('playpausebtn');
  seekSlider = document.getElementById('seekslider');
  cTimeText = document.getElementById('cTimeText');
  dTimeText = document.getElementById('dTimeText');
  mutebtn = document.getElementById('mutebtn');
  volumeSlider = document.getElementById('volumeSlider');
  fullscreenbtn = document.getElementById('fullscreenbtn');
  player = document.getElementById('video_player');
  fullscreen = false;
  // Set Event Listeners
  playbtn.addEventListener("click", playPause, false);
  seekSlider.addEventListener("input", vidSeek, false);
  vid.addEventListener("timeupdate", updateSeekTime, false);
  mutebtn.addEventListener("click", vidMute, false);
  volumeSlider.addEventListener("input", setVolume, false);
  fullscreenbtn.addEventListener("click", toggleFullscreen, false);
  window.addEventListener("keydown", keyControl, false);
}

// window.onload = intializePlayer;

function playPause() {
  'use strict';
  if (vid.paused) {
    vid.play();
    playbtn.innerHTML = '<i class="pg-pause"></i>';
    if (vid.onclick) {
      vid.play();
      playbtn.innerHTML = '<i class="pg-pause"></i>';
    }
  } else {
    vid.pause();
    playbtn.innerHTML = '<i class="pg-play"></i>';
  }
}

function vidSeek() {
  'use strict';
  var seekTo = vid.duration * (seekSlider.value / 100);
  vid.currentTime = seekTo;
}

function keyControl(e) {
  "use strict";
  var seekTo;
  switch (e.keyCode) {
  case 27:
    fullscreenbtn.innerHTML = '<i class="pg-enter-fullscrn"></i>';
    fullscreen = false;
    break;
  case 37:
    seekTo = vid.duration * (seekSlider.value / 100) - 5;
    vid.currentTime = seekTo;
    break;

  case 38:

    break;

  case 39:
    seekTo = vid.duration * (seekSlider.value / 100) + 5;
    vid.currentTime = seekTo;
    break;

  case 40:
    vid.volume = (volumeSlider.value / 100) - (10 / 100);
    break;

  }
}

function updateSeekTime() {
  'use strict';
  var newTime = vid.currentTime * (100 / vid.duration),
    cMins = Math.floor(vid.currentTime / 60),
    cSecs = Math.floor(vid.currentTime - cMins * 60),
    dMins = Math.floor(vid.duration / 60),
    dSecs = Math.floor(vid.duration - dMins * 60);
  seekSlider.value = newTime;

  if (cSecs < 10) { cSecs = "0" + cSecs; }
  if (dSecs < 10) { dSecs = "0" + dSecs; }
  if (cMins < 10) { cMins = "0" + cMins; }
  if (dMins < 10) { dMins = "0" + dMins; }
  cTimeText.innerHTML = cMins + ":" + cSecs;
  dTimeText.innerHTML = dMins + ":" + dSecs;
}
function vidMute() {
  "use strict";
  if (vid.muted) {
    vid.muted = false;
    volumeSlider.value = vid.volume * 100;

    if (volumeSlider.value >= 61 && volumeSlider.value <= 100) {
      mutebtn.innerHTML = '<i class="pg-max-vol"></i>';
    } else if (volumeSlider.value >= 36 && volumeSlider.value <= 60) {
      mutebtn.innerHTML = '<i class="pg-max-vol"></i>';
    } else if (volumeSlider.value >= 1 && volumeSlider.value <= 35) {
      mutebtn.innerHTML = '<i class="pg-min-vol"></i>';
    } else if (volumeSlider.value <= 0 && volumeSlider.value >= 0) {
      mutebtn.innerHTML = '<i class="pg-muted"></i>';
    }


  } else {
    vid.muted = true;
    mutebtn.innerHTML = '<i class="pg-muted"></i>';
    volumeSlider.value = 0;
  }
  if (vid.volume <= 0) {
    vid.muted = false;
    vid.volume = 1;
    volumeSlider.value = 100;
    mutebtn.innerHTML = '<i class="pg-max-vol"></i>';
  }
}

function setVolume() {
  "use strict";
  vid.volume = volumeSlider.value / 100;
  if (volumeSlider.value >= 61 && volumeSlider.value <= 100) {
    mutebtn.innerHTML = '<i class="pg-max-vol"></i>';
  } else if (volumeSlider.value >= 36 && volumeSlider.value <= 60) {
    mutebtn.innerHTML = '<i class="pg-med-vol"></i>';
  } else if (volumeSlider.value >= 1 && volumeSlider.value <= 35) {
    mutebtn.innerHTML = '<i class="pg-min-vol"></i>';
  } else if (volumeSlider.value <= 0 && volumeSlider.value >= 0) {
    mutebtn.innerHTML = '<i class="pg-muted"></i>';
  }
  if (vid.muted) {
    vid.muted = false;
  }

}


function toggleFullscreen() {
  if (!fullscreen) {
    if (player.requestFullScreen) {
      player.requestFullScreen();
    } else if (player.webkitRequestFullScreen) {
      player.webkitRequestFullScreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    }
    fullscreenbtn.innerHTML = '<i class="pg-leave-fullscrn"></i>';
    fullscreen = true;
  } else {
    if (document.exitFullscreen) {
      fullscreenbtn.innerHTML = '<i class="pg-enter-fullscrn"></i>';
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      fullscreenbtn.innerHTML = '<i class="pg-enter-fullscrn"></i>';
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      fullscreenbtn.innerHTML = '<i class="pg-enter-fullscrn"></i>';
      document.webkitExitFullscreen();
    }

    fullscreenbtn.innerHTML = '<i class="pg-enter-fullscrn"></i>';
    fullscreen = false;
  }
}
