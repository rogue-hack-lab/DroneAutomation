/* eslint-env jest */
jest.mock('cylon')
const Cylon = require('cylon')

const Potentiometer = require('../src/Potentiometer.js')
let pot = {}

beforeEach(() => {

	Cylon.robot({
		connections: {
			loopback: { adaptor: 'loopback' },
		},
		devices: {
			led: { driver: 'led', pin: 1 }
		},
		work: () => {}
	})

	pot = new Potentiometer(Cylon.led)
})

test('create a potentiometer instance',()=>{
	expect(typeof(pot)).toBe('object')
})

test('position to start at default and move as instructed',()=>{
	expect(pot.defaults.position).toBe(0)
	expect(pot.position).toBe(pot.defaults.position)
	pot.position = 0.5
	expect(pot.postion).not.toBe(pot.defaults.position)
})

test('cylon.led.pin is accessible',()=>{
	console.log(Cylon)
	expect(pot.device).toBe(1)
})

