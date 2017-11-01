'use strict'
const Cylon = require('cylon')
Cylon.api('http',{
	host: '0.0.0.0',
	port: '3000'
}
)
Cylon.robot({
	name: 'receiver',

	connections: {
		loopback: { adaptor: 'loopback' },
	},

	devices: {
		ping: {driver: 'ping'}
	},

	work: () => {},

	commands: {
		do_a_thing: () => { console.log('I did a thing!') },
		do_something_else: () => {console.log('this is cool!')}
	},


}).start()