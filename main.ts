input.onButtonPressed(Button.A, function () {
    A_a += 1
    basic.showNumber(A_a)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A")
    basic.showNumber(A_a)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(2000)
    basic.showString("B")
    basic.showNumber(B)
})
let B = 0
let A_a = 0
basic.showNumber(0)
A_a = 0
B = 0
