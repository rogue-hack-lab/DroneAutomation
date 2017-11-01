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
			keyboard: {adaptor: 'keyboard'}
		},

		devices: {
			keyboard: {driver: 'keyboard', connection: 'keyboard'}
		},

		work: (my) => {
			my.keyboard.on('keypress', (key) => {
				switch (key.name) {
				case 'escape':
					console.log('halting keyboard')
					Cylon.halt()//TODO when the escape key is pressed, program should exit
					break
				default:
					console.log(key.name, 'pressed')
					break
				}
			})
			my.keyboard.on('keyup', (key) => {
				switch (key.name) {
				default:
					console.log(key.name, 'released')
					break
				}
			})
		},

		commands: {
			echo: {
				toggle: () => {
					_echo = !_echo
				}
			}
		}

	})
}

Keyboard.prototype.connect = (ip,port) => {
	(port) ? null : port = '3300';
	(ip) ? null : ip = '0.0.0.0'
	Cylon.api('http',
		{
			host: ip,
			port: port
		})
}

Keyboard.prototype.start= () => {Cylon.start()}
