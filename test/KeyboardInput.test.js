const KeyboardInput = require('../src/KeyboardInput.js')
const kb = new KeyboardInput('keyboard')

test('a keyboard instance is generated',()=>{
    expect(typeOf(kb)).toBe('object')
})