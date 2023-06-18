import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const VIDEO_CURENT_TIME = "videoplayer-current-time"
const onPlay = function(data) {
    localStorage.setItem(VIDEO_CURENT_TIME, data.seconds);
    console.log('Оновлення часу відтворення:', data.seconds)
};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTimee = Number(localStorage.getItem(VIDEO_CURENT_TIME));
player
  .setCurrentTime(currentTimee)
  .then(function (seconds) {
    console.log('Відтворення зі збереженої позиції на:', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });