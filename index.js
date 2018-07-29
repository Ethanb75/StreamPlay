if (flvjs.isSupported()) {
  setTimeout(function () {
    var videoElement = document.getElementById('videoElement');
    var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: 'rtmp://localhost/live/stream1'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }, 3000)
}