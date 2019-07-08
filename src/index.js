const five = require('johnny-five');
const config = require('./config');

const arduino = new five.Board(config.arduino);

arduino.on('ready', () => {
    var led = new five.Led(13);
    arduino.repl.inject({
        led: led
    });
});
