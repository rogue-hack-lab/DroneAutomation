'use strict';
export default ((device) => {
    
    const _piblaster = require('pi-blaster.js');
    
    var _position = 0;

    /** where the control defaults to when untouched. typically [ 0 or 0.5 ] */
    var origin = 0.5;

    /** if left untouched, does the control return to origin or remain where left */
    var returnToOrigin = true;

    /** the amount of space around the origin where no change is registered */
    var deadzone = { min: 0, max: 0 };
    
    /** how far on click of motion will go */
    var increment = 0.01;

    /** the amount of time to wait between incremental changes in milliseconds */
    var incrementDelay = 0;

    /** the full range of control travel. default = [ 0, 1 ] */
    var range = { min: 0, max: 1 };
     
    return {
        
        /** set a new origin as long as it's between 0 and 1 */
        set origin (value) {
            (value >= 0 && value <= 1 ) ? origin = value : console.log ( 'origin must be between 0 and 1. the origin is typically 0 for throttle and 0.5 for everything else' );
        },

        get origin () {
            return origin;
        },
        
        /** set a new range as long as they are between 0 and 1 */
        set range (values) {
            (values[0] >= 0) ? range.min = values[0] : console.log( 'range min cannot be less than 0' );
            (values[1] >= 0) ? range.max = values[1] : console.log( 'range max cannot be greater than 1' );
        },
        
        /** set a new range as long as they are between 0 and 1 */
        set deadzone (values) {
            (values[0] >= 0) ? deadzone.min = values[0] : console.log( 'deadzone min cannot be less than 0' );
            (values[1] >= 0) ? deadzone.max = values[1] : console.log( 'deadzone max cannot be greater than 1' );
        },
        
        /** set a new interval as long as it's beteen 0 and 1 */
        set increment (value) {
            (value > 0 && value < 1 ) ? increment = value : console.log ( 'change interval must be between 0 and 1' );
        },

        /** increase position by one increment */
        increase: () => {
            setInterval( () => {
                _piblaster.setPwm( device.pin, _position += increment );
            }, incrementDelay);
        },

        /** reduce position by one increment */
        decrease: () => {
            setInterval( () => {
                _piblaster.setPwm( device.pin, _position -= increment );
            }, incrementDelay);
        },
        
        /** set a new origin at the current position */
        zero: () => {
            origin = _position;
        }

    };

})();