const Cylon = require("cylon")

Cylon.robot({
	name: 'TestBot',

	connections: {
		arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
	},

	devices: {
		led: { driver: 'led', pin: 13 }
	},

	work: function(my) {
		my.led.toggle()

		every((1).second(), function() {
			my.led.toggle()
		})
	}
}).start()