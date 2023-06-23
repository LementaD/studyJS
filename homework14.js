// Запитайте у користувача ім'я та привітайте його за допомогою alert.
debugger;
{
let name = prompt ("Ваше ім'я?")
alert ("Добридень, " + name)
}
// Попросіть користувача ввести рядок через 'prompt'. Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .
{
let str = prompt ("Введіть рядок")
let str2 = str.replace(",", ", блин")
console.log (str2)
}

// Попросіть користувача ввести рядок через 'prompt'. Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .
{
let str = prompt ("Введіть рядок")
let str2 = str.split(",").join(", блин")
console.log (str2)
}

// Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:
// let str = "cANBerRa"
// let result
// ..... ваш код
// console.log(result) //Canberra

{
let str = "cANBerRa";
result = str.slice(-8,-7).toUpperCase() + str.slice(1).toLowerCase();
console.log (result)
}

//или

{
    let str = "cANBerRa";
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result); // "Canberra"
}

// Порахуйте кількість слів у рядку. Використовуйте розбиття за пробілами. Довжина масиву називається так само, як і довжина рядка.
{
let str = "Це рядок, в якому потрібно порахувати кількість слів.";
words = str.split(" ");
wordCount = words.length;
console.log(wordCount)
}
// Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві пробiли, використовуючи .trim
// Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
// Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). Не забудьте пробiли між словами.
{
let str = prompt ("Введіть прізвище").trim ()
let str2 = prompt ("Введіть ім'я").trim ()
let str3 = prompt ("Введіть по батькові").trim ()
let SurName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
let Name = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
let MiddleName = str3.charAt(0).toUpperCase() + str3.slice(1).toLowerCase()
console.log (SurName, Name, MiddleName)//КТ
let FullName = SurName + " " + Name + " " + MiddleName
alert (FullName)
}
// Не використовуючи .replace замініть слово пиво у рядку на слово чай
// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let result
// ........ //ваша магія
// console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"

{
let str = "Було жарко. Василь пив пиво вприкуску з креветками" //24 27
result = str.slice (0, 23) + str2 + str.slice (27, 50)
str2 = "чай"
console.log (result)
}

//или

{
let str = "Було жарко. Василь пив пиво вприкуску з креветками"
let result = str.indexOf ("Було жарко. Василь пив ") + str2 + str.indexOf (" вприкуску з креветками")
let str2 = "чай"
console.log (result)
}

// Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок, в якому будуть всі символи до тега і після нього Тег може бути будь-яким. split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
// let result
// ........ //ваша магія
// console.log(result) //якийсь текст, в якому є один тег і всяке інше
{
let str = "якийсь текст, в якому є один тег <br /> і всяке інше"// 33 39
result = str.slice(0, 33) + str.slice (39, 52)
console.log(result)
}
// На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, натомість використовуйте indexOf і slice,
// let str = "якийсь текст у якому є один тег <br /> і всяке інше"
// let result
// ........ //ваша магія
// console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
{
let str = "якийсь текст у якому є один тег <br /> і всяке інше"
result = str.slice(0, 32) + str2 + str.slice (38, 52)
str2 = "<BR />"
console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше
}
// Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
// Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в консоль або через alert.
{
let str = prompt ("Введіть рядок. Для створення нового рядка введіть \\n")
let result = str.split('\\n').join("\n")
console.log (result)
}
