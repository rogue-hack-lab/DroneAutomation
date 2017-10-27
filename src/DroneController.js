'use strict'

const Cylon = require('cylon')
const Potentiometer = require('./Potentiometer.js')

/**
 * A grouping of controls that sends output instructions through CylonJS to Raspberry Pi GPIO
 */
module.exports = DroneController

function DroneController(name) {


	Cylon.robot({
		name: name,

		connections: {
			raspi: { adaptor: 'raspi' },
		},

		devices: {
			led:        { driver: 'led', pin: 37 },

			throttle:   { driver: 'direct-pin', pin: 27 },
			rudder:     { driver: 'direct-pin', pin: 22 },
			aileron:    { driver: 'direct-pin', pin: 4  },
			elevator:   { driver: 'direct-pin', pin: 17 },
		},

		work: (my) => {
			my.sticks.t = 0
			my.zeroSticks(my)
			console.log('hello world')
		},

		commands: {

		},

		sticks: { t:0, r:0, a:0, e:0 },

		zeroSticks: (my) => {
			my.sticks.r = 0.5
			my.sticks.a = 0.5
			my.sticks.e = 0.5
			my.setSticks(my)
		},

		setSticks: (my) => {
			// piblaster.setPwm( my.throttle.pin, my.sticks.t );
			// piblaster.setPwm( my.rudder.pin, my.sticks.r );
			// piblaster.setPwm( my.aileron.pin, my.sticks.a );
			// piblaster.setPwm( my.elevator.pin, my.sticks.e );
			// my.report(my);
		},

	})

	Cylon.api('socketio',
		{
			host: '0.0.0.0',
			port: '3000'
		})

	Cylon.start()
}