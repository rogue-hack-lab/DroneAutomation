const Cylon = require('cylon')

module.exports = Keyboard

function Keyboard (name) {
	'use strict'

	/** 
	 * whether or not activity is logged to the console 
	*/
	let _echo = false

	Cylon.robot({
		name: name,

		connections: {
			keyboard: { adaptor: 'keyboard' }
		},

		devices: {
			keyboard: { driver: 'keyboard', connection: 'keyboard' }
		},

		work: (my) => {
			my.keyboard.on('keypress', (key) => {
				switch(key.name){
				// case 'escape':
				// 	my.zeroSticks(my)
				// 	break
				// case 'l':
				// 	break
				// case 'a':
				// 	break
				// case 'd':
				// 	break
				// case 's':
				// 	break
				// case 'w':
				// 	break
				// case 'up':
				// 	break
				// case 'down':
				// 	break
				// case 'left':
				// 	break
				// case 'right':
				// 	break
				// case '0':
				// 	break
				default:
					console.log( key.name, 'pressed' )
					break
				}
			})
			my.keyboard.on('keyup', (key) => {
				switch(key.name){
				// case 'a':
				// 	break
				// case 'd':
				// 	break
				// case 's':
				// 	break
				// case 'w':
				// 	break
				// case 'left':
				// 	break
				// case 'right':
				// 	break
				default:
					console.log( key.name, 'released' )
					break
				}
			})
		},

		commands: {
			echo:{
				toggle: () => { _echo = !_echo }
			}
		}

	})

	Cylon.api('socketio',
		{
			host: '0.0.0.0',
			port: '3300'
		})

	Cylon.start()

}