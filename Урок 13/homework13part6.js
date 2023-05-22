// За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. Значення менше 16ти поки що можна не враховувати.
debugger;
const red = prompt("Введіть значення червоного каналу (від 0 до 255):")
const green = prompt("Введіть значення зеленого каналу (від 0 до 255):")
const blue = prompt("Введіть значення синього каналу (від 0 до 255):")

//Перетворення на 16-кову систему
var hexRed = Number(red).toString(16)
var hexGreen = Number(green).toString(16)
var hexBlue = Number(blue).toString(16)

var color = '#' + hexRed + hexGreen + hexBlue
alert ("RGBA код кольору: " + color)
