input.onButtonPressed(Button.A, function () {
    priere += 1
    if (priere == 100) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.compassHeading() >= 90) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.showString("c'est l'est")
    }
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(priere)
})
let priere = 0
priere = 0
