// Збережіть у масив відповіді на запитання, задані за допомогою confirm. Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])
{
    let answers = [];
    let question1 = confirm("Питання 1: Ви згодні з умовами?");
    answers.push(question1);
    let question2 = confirm("Питання 2: Ви бажаєте отримати інформаційний бюлетень?");
    answers.push(question2);
    let question3 = confirm("Питання 3: Ви погоджуєтеся надіслати свою електронну адресу?");
    answers.push(question3);
    console.log(answers);
}
// Збережіть у масив відповіді запитаннь, задані з допомогою prompts. Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)
{
    let answers = [];
    let question1 = prompt("Ваше ім'я?");
    answers.push(question1);
    let question2 = prompt("Ваше місце проживання?");
    answers.push(question2);
    let question3 = prompt("Марка Вашого автомобіля?");
    answers.push(question3);
    console.log(answers);
}

{
    let answers = [];
    answers[0] = prompt("Питання 1: Введіть ваше ім'я");//число в скобках определяет место элемента в массиве
    answers[1] = prompt("Питання 2: Введіть вашу адресу");
    answers[2] = prompt("Питання 3: Введіть ваш номер телефону");
    console.log(answers);
}

// Попросіть користувача ввести (prompt) індекс у масиві. Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".

{
let massive = ["Нульовий елемент", "Перший елемент", "Другий елемент", "Третій елемент"];
let index = prompt("Введіть індекс елемента, який ви хочете отримати (від 0-го до 3-го");
if (index) {
element = massive[index];
} 
else {
alert("Невірний індекс");
}
}

// Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. Присвойте у введений індекс введене значення

{
let massive = ["Нульовий елемент", "Перший елемент", "Другий елемент", "Третій елемент"];
index = prompt ("Введіть індекс створюємого елемента у масиві")
value = prompt ("Введіть значення створюємого елемента у масиві")
massive[index] = value // Присвоєння значення за заданим індексом
console.log(massive)
}

// Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6

{
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
      ];
}

// Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів

{

}

// Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено, виведіть повідомлення про це (а не -1)

{
inputString = prompt("Введіть рядок з кількома словами:") // Запит користувача на введення рядка з кількома словами
targetWord = prompt("Введіть потрібне слово:") // Запит користувача на введення потрібного слова
words = inputString.split(" ") // Розділення рядка на масив слів
wordIndex = words.indexOf(targetWord) // Знаходження порядкового номеру потрібного слова у масиві слів
// Перевірка, чи знайдено слово у рядку
if (wordIndex !== -1) {
    position = wordIndex + 1;
    console.log("Слово '" + targetWord + "' знаходиться на позиції " + position + " у рядку.");
    } 
    else {
      console.log("Слово '" + targetWord + "' не знайдено у рядку.");
    }
}

// Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). Створіть інший масив із цими ж елементами в зворотньому напрямку. Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push.

{
let masive = []
answer1 = prompt("Введіть елемент")
masive.push(answer1)
answer2 = prompt("Введіть ще елемент")
masive.push(answer2)
answer3 = prompt("Введіть ще один елемент")
masive.push(answer3)
answer4 = prompt("Введіть знову елемент")
masive.push(answer4)
answer5 = prompt("Введіть будьласка ще елемент")
masive.push(answer5)
console.log(masive)
let another_masive = []
answer1_popped = masive.pop(answer1)
answer2_popped = masive.pop(answer2)
answer3_popped = masive.pop(answer3)
answer4_popped = masive.pop(answer4)
answer5_popped = masive.pop(answer5)
another_masive.push(answer1_popped)
another_masive.push(answer2_popped)
another_masive.push(answer3_popped)
another_masive.push(answer4_popped)
another_masive.push(answer5_popped)
console.log(another_masive)
}

// Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), використовуючи shift та unshift.

{
let masive = []
answer1 = prompt("Введіть елемент")
masive.push(answer1)
answer2 = prompt("Введіть ще елемент")
masive.push(answer2)
answer3 = prompt("Введіть ще один елемент")
masive.push(answer3)
answer4 = prompt("Введіть знову елемент")
masive.push(answer4)
answer5 = prompt("Введіть будьласка ще елемент")
masive.push(answer5)
console.log(masive)
let another_masive = []
answer1_popped = masive.pop(answer1)
answer2_popped = masive.pop(answer2)
answer3_popped = masive.pop(answer3)
answer4_popped = masive.pop(answer4)
answer5_popped = masive.pop(answer5)
another_masive.push(answer1_popped)
another_masive.push(answer2_popped)
another_masive.push(answer3_popped)
another_masive.push(answer4_popped)
another_masive.push(answer5_popped)
console.log(another_masive)
answer5_shifted = another_masive.shift(answer5_popped) 
answer4_shifted = another_masive.shift(answer4_popped) 
answer3_shifted = another_masive.shift(answer3_popped) 
answer2_shifted = another_masive.shift(answer2_popped) 
answer1_shifted = another_masive.shift(answer1_popped) 
console.log(another_masive)
another_masive.unshift (answer5_shifted)
another_masive.unshift (answer4_shifted)
another_masive.unshift (answer3_shifted)
another_masive.unshift (answer2_shifted)
another_masive.unshift (answer1_shifted)
console.log(another_masive)
}

// Скопіюйте масив створений у завданні Multiply table неглибоко

{
    const arr = [//исходник
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16]
      ];

// Використання методу slice()
const newArray1 = arr.slice();

// Використання оператора spread
const newArray2 = [...arr];
}

// Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;

{

}

// Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)

{
    const arr1 = []
    const arr2 = arr1
    console.log(arr1 === arr2)
}

// Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. Його довжина повинна дорівнювати 25. Використовуйте spread-оператор

{
    const arr = [//исходник
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];

    newArray2 = [...arr];
}

// Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх

{
var inputString = prompt("Введіть рядок:");// Введення рядка користувачем
var [firstLetter, , , , fifthLetter, , , , ninthLetter] = inputString;// Деструктуризація рядка для отримання першої, п'ятої та дев'ятої літер
// Виведення отриманих літер
console.log("Перша літера:", firstLetter);
console.log("П'ята літера:", fifthLetter);
console.log("Дев'ята літера:", ninthLetter);
}

// Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні
// ***********************************failture******************************************
{
var inputstring = prompt("Введіть рядок:")
var [ , secondLetter, , fourthLetter, fifthLetter] = inputString
console.log("Друга літера:", secondLetter)
console.log("Четверта літера:", fourthLetter)
console.log("П'ята літера:", fifthLetter)
}

// Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів - зберіть загальний масив без нулів

{

}

// Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), використовуючи цикл for .... of

{
let masive = ["John", "Paul", "George", "Ringo"];
for (const name of masive) {alert(name)}
}

// For Select Option

{
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
    str += `<option>${currency}</option>`
}
str+= "</select>"
document.write(str) //document.write відобразить ваш HTML на сторінці
}

// For Table Vertical

{

}

//For Table Letters

{

}

// For Multiply Table

{

}

// Function Capitalize
//****************failture**********************************
{
    const capitalize = str => {
        let result
        // ..... ваш код починається
        string = prompt("Введіть рядок:")
        result = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        
        
        // ..... ваш код закінчується
        return result //саме цей код забезпечить повернення результату функції
   }
   console.log(capitalize("cANBerRa")) //Canberra
}

    {//старое задание
    let str = "cANBerRa";
    result = str.slice(-8,-7).toUpperCase() + str.slice(1).toLowerCase();
    console.log (result)
    }

// Map Capitalize
{
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      const inputString = prompt("Введіть рядок:");
      const wordsArray = inputString.split(" ");
      const capitalizedArray = wordsArray.map(capitalize);
      const resultString = capitalizedArray.join(" ");
      
      console.log(resultString);
}

//Filter Lexics
{
    const forbiddenWords = ["bad", "evil", "wrong"];

const inputString = prompt("Введіть рядок:");
const wordsArray = inputString.split(" ");
const filteredArray = wordsArray.filter(word => !forbiddenWords.includes(word));
const resultString = filteredArray.join(" ");

console.log(resultString)
}

//Beep Lexics



