input.onPinPressed(TouchPin.P0, function () {
    music.playTone(330, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("G F G A - F E D ", 120)
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(523, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(494, music.beat(BeatFraction.Quarter))
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
