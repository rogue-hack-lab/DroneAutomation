// const DroneController = require('./DroneController.js')
const KeyboardInput = require('./src/KeyboardInput.js')

// const control = new DroneController()
const kb = new KeyboardInput('keyboard')

kb.connect('3300')

kb.start()