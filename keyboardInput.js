export default (() => {
'use strict';

const Cylon = require('cylon');

Cylon.robot({
  name: 'keyboard',

  connections: {
    raspi: { adaptor: 'raspi' },
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    keyboard: { driver: 'keyboard', connection: 'keyboard' }
  },

  work: (my) => {
    my.keyboard.on('keypress', (key) => {
      switch(key.name){
        case 'escape':
          my.zeroSticks(my);
          break;
        case 'l':
          break;
        case 'a':
          break;
        case 'd':
          break;
        case 's':
          break;
        case 'w':
          break;
        case 'up':
          break;
        case 'down':
          break;
        case 'left':
          break;
        case 'right':
          break;
        case '0':
          break;
        default:
          console.log( key.name, 'not defined' );
          break;
        }
    });
    my.keyboard.on('keyup', (key) => {
      switch(key.name){
        case 'a':
          break;
        case 'd':
          break;
        case 's':
          break;
        case 'w':
          break;
        case 'left':
          break;
        case 'right':
          break;
        default:
          break;
        }
    });
  },

  commands: {

  }

});

Cylon.api('socketio',
    {
    host: '0.0.0.0',
    port: '3300'
    });

Cylon.start();
})();