import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onTimeupdate = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

const time = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        // some other error occurred
        break;
    }
  });
