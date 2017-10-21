"use strict";

var Cylon = require("cylon");
var piblaster = require('pi-blaster.js');

Cylon.robot({
  name: 'drone',

  connections: {
    raspi: { adaptor: "raspi" },
    keyboard: { adaptor: 'keyboard' }
  },

  devices: {
    led:        { driver: 'led', pin: 37 },
    
    throttle:   { driver: 'direct-pin', pin: 27 },
    rudder:     { driver: 'direct-pin', pin: 22 },
    aileron:    { driver: 'direct-pin', pin: 4 },
    elevator:   { driver: 'direct-pin', pin: 17 },
    
    keyboard:   { driver: 'keyboard', connection: 'keyboard' }
  },

  work: (my) => {
    
    my.sticks.t = 0;
    my.zeroSticks(my);
    
    var i = 0.02

    my.keyboard.on("keypress", (key) => {
      switch(key.name){
        case 'escape':
          my.zeroSticks(my);
          break;
        case 'l':
          my.led.toggle();
          break;
        case 'a':
          my.sticks.a -= i;
          break;
        case 'd':
          my.sticks.a += i;
          break;
        case 's':
          my.sticks.e -= i;
          break;
        case 'w':
          my.sticks.e += i;
          break;
        case 'up':
          my.sticks.t += i;
          break;
        case 'down':
          my.sticks.t -= i;
          break;
        case 'left':
          my.sticks.r -= i;
          break;
        case 'right':
          my.sticks.r += i;
          break;
        case '0':
          my.sticks.t = 0;
          break;
        default:
          console.log( key.name, 'not defined' );
          break;
        }
        my.setSticks(my);
    });
    my.keyboard.on("keyup", (key) => {
      switch(key.name){
        case 'a':
          my.sticks.a = 0.5;
          break;
        case 'd':
          my.sticks.a = 0.5;
          break;
        case 's':
          my.sticks.e = 0.5;
          break;
        case 'w':
          my.sticks.e = 0.5;
          break;
        case 'left':
          my.sticks.r = 0.5;
          break;
        case 'right':
          my.sticks.r = 0.5;
          break;
        default:
          break;
        }
        
    });

    //every((0.5).seconds(), () => report());
    
  },

  commands: {

  },

  sticks: { t:0, r:0, a:0, e:0 },
   
  zeroSticks: (my) => {
    my.sticks.r = 0.5;
    my.sticks.a = 0.5; 
    my.sticks.e = 0.5;
    my.setSticks(my);
  },

  setSticks: (my) => {
    piblaster.setPwm( my.throttle.pin, my.sticks.t );
    piblaster.setPwm( my.rudder.pin, my.sticks.r );
    piblaster.setPwm( my.aileron.pin, my.sticks.a );
    piblaster.setPwm( my.elevator.pin, my.sticks.e );
    my.report(my);
  },

  report: (my) => {
    console.log( my.sticks )
  }

})

Cylon.api('socketio',
    {
    host: '0.0.0.0',
    port: '3000'
    });

Cylon.start();