const assert = require('assert')
const Potentiometer = require('../Potentiometer.js')
describe('Potentiometer', () => {
	it('should produce a potentiometer object', () => {
		let pot = new Potentiometer()
		assert.equal('object', typeof(pot))
	})
})