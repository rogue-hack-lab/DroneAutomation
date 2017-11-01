'use strict'

process.env.NODE_ENV = 'test'

// load the robot, in test mode
var Cylon = require('cylon')

var stubs = jest.fn

Cylon.config({ testMode: true, debug: true })

require('./testbot.js')

test('TestBot', () => {
	var robot = Cylon.MCP.robots['TestBot']
	var led = robot.led,
		toggle = stubs(led, 'toggle')
	expect(typeof(robot.work)).toBe('function')

	expect(toggle).toHaveBeenCalled


	Cylon.halt()
})
