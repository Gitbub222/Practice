const EventEmitter = require('events');
const areaCalc = require('./helper');

const eventEmitter = new EventEmitter();

const fullname = "Baraka Mulungula"

eventEmitter.on('touch', () => {
    console.log(`Event touched by ${fullname}!` )
})

eventEmitter.emit("touch")


