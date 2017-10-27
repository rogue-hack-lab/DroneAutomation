const DroneController = require('./src/DroneController.js')
const KeyboardInput = require('./src/KeyboardInput.js')

const control = new DroneController()
const kb = new KeyboardInput('keyboard')

kb.connect()

kb.start()

