function lightsOff() {
    pins.digitalWritePin(DigitalPin.P0, 1);
    pins.digitalWritePin(DigitalPin.P1, 1);
    pins.digitalWritePin(DigitalPin.P2, 1);
    basic.clearScreen();
}

function lightsOn() {
    pins.digitalWritePin(DigitalPin.P0, 0);
    pins.digitalWritePin(DigitalPin.P1, 0);
    pins.digitalWritePin(DigitalPin.P2, 0);
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0);
}

/*function red() {
    pins.digitalWritePin(DigitalPin.P1, 0);
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0);
    basic.pause(50);
    pins.digitalWritePin(DigitalPin.P1, 1);
    basic.clearScreen();
    basic.pause(50);
}*/

function blinky(ontime: number, offtime: number) {
    lightsOn();
    basic.pause(ontime);

    lightsOff();
    basic.pause(offtime);
}

let program = 3;

basic.forever(function () {
    input.onButtonPressed(Button.A, () => {
        //slower blinky when Button A is pressed
        program = 0;
    })
    input.onShake(() => {
        //faster blinky on shake
        program = 1;
    })
    input.onButtonPressed(Button.B, () => {
        //turn off blinky when Button B is pressed
        program = 2;
    })
    switch (program) {
        case 0:
            blinky(300, 600);
            break;
        case 1:
            blinky(50, 150);
            break;
        case 2:
            lightsOff();
            break;
        //case 3:
        //    red();
        //    break;
    }
})
