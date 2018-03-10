

``` html
  <div id="video_player">
    <video id="video">
    <source src="http://files.simey.me/html5-vids/trailer.mp4" type="video/mp4">
    <!-- Safari / iOS, IE9 -->

    <source src="http://files.simey.me/html5-vids/trailer.webm" type="video/webm">
    <!-- Chrome10+, Ffx4+, Opera10.6+ -->

    <source src="http://files.simey.me/html5-vids/trailer.ogv" type="video/ogg">
    <!-- Firefox3.6+ / Opera 10.5+ -->

    <div class="loading">
      I have a bad feeling about this... <br>
      ... your browser doesn't support the video format!
    </div>

    </video>
    <div id="video_controls_bar">
      <button id="playpausebtn"><i class="pg-play"></i></button>
      <input id="seekslider" type="range" min="0" max="100" value="0" step="1">
      <span id="time">
        <span id="cTimeText">00:00</span>  / <span id="dTimeText">00:00</span>
      </span>
      <button id="mutebtn"><i class="pg-max-vol"></i></button>
      <input id="volumeSlider" type="range" min="0" max="100" value="100" step=".05">
      <button id="fullscreenbtn"><i class="pg-enter-fullscrn"></i></button>
    </div>
  </div>

```
