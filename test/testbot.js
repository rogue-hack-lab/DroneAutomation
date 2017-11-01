var Cylon = require('cylon')

Cylon.api('http',{
	host: '0.0.0.0',
	port: '3000'
})
Cylon.robot({
	name: 'TestBot',

	connections: {
		loopback: { adaptor: 'loopback' }
	},

	devices: {
		ping: { driver: 'ping' }
	},

	work: function() {},

	commands: {
		test1: (args) => {return 'args ' + typeof(args)}
	}


}).start()