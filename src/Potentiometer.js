'use strict'
const _piblaster = require('pi-blaster.js')
module.exports = Potentiometer
function Potentiometer(device) {
	let _device = device

	let _position = 0

	/** where the control defaults to when untouched. typically [ 0 or 0.5 ] */
	let origin = 0.5

	/** if not active, does the control return to origin or remain where left */
	let returnToOrigin = true

	/** whether or not the control is currently actively being touched */
	let engaged = false

	/** the amount of space around the origin where no change is registered */
	let deadzone = { min: 0, max: 0 }

	/** how far one click of motion will go */
	let increment = 0.01

	/** the full range of control travel. default = [ 0, 1 ] */
	let range = { min: 0, max: 1 }

	return {

		/** set a new origin as long as it's between 0 and 1 */
		set origin (value) {
			(value >= 0 && value <= 1 ) ? origin = value : console.log ( 'origin must be between 0 and 1. the origin is typically 0 for throttle and 0.5 for everything else' )
		},

		get origin () {
			return origin
		},

		set ReturnToOrigin (value) {
			toggle: returnToOrigin!=returnToOrigin
		},
		/** set a new range as long as they are between 0 and 1 */
		set range (values) {
			(values[0] >= 0) ? range.min = values[0] : console.log( 'range min cannot be less than 0' );
			(values[1] >= 0) ? range.max = values[1] : console.log( 'range max cannot be greater than 1' )
		},

		/** set a new range as long as they are between 0 and 1 */
		set deadzone (values) {
			(values[0] >= 0) ? deadzone.min = values[0] : console.log( 'deadzone min cannot be less than 0' );
			(values[1] >= 0) ? deadzone.max = values[1] : console.log( 'deadzone max cannot be greater than 1' )
		},

		/** set a new interval as long as it's beteen 0 and 1 */
		set increment (value) {
			(value > 0 && value < 1 ) ? increment = value : console.log ( 'change interval must be between 0 and 1' )
		},

		/** increase position by one increment */
		increase: () => {
			_piblaster.setPwm( device.pin, _position += increment )
		},

		/** reduce position by one increment */
		decrease: () => {
			_piblaster.setPwm( device.pin, _position -= increment )
		},

		/** set a new origin at the current position */
		zero: () => {
			origin = _position
		}

	}

}