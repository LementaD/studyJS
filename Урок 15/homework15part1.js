//Без ИИ и ютуба никуда, оч тяжелое дз
// За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if перевірте, чи число коректно перетворено з рядка. У разі помилки виведіть повідомлення Виведіть парне число чи ні, використовуючи if.

{
  let number = prompt("Введіть число:");

    if (isNaN(number)) {// Перевірка на NaN
    console.log("Введено некоректне число.");
  } else {
    if (number % 2 === 0) {
      console.log("Введене число є парним.");
    } else {
      console.log("Введене число є непарним.");
    }
  }
}

// Запитайте у користувача текст і перевірте його на наявність некоректного слова або кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки:
// "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не знайдено
//"Задача изначально сделана ИИ, я б не додумался, но изучил и переделал"

{
let userInput = prompt("Введіть текст:");
let wordsToCheck = ["матюк1", "матюк2", "матюк3"]; // додайте некоректні слова, які потрібно перевірити
  if (wordsToCheck === 0) {console.log("Текст містить некоректні слова.")  
  }
  else {
  console.log("Текст не містить некоректних слів.");
  }
}

//или как на ютубе

let text = prompt("Введіть текст:");
if (text.indexOf("матюк1", "матюк2", "матюк3")) {alert("Текст не містить некоректних слів.")}
else {alert("Текст містить некоректні слова.")}

//или снова ии

{
let text = prompt("Введіть текст:");
if (
  text.indexOf("матюк1") === -1 &&
  text.indexOf("матюк2") === -1 &&
  text.indexOf("матюк3") === -1
) {
  alert("Текст не містить некоректних слів.");
} else {
  alert("Текст містить некоректні слова.");
}
}

//   Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, і зберігає відповіді в змінних.

{
let answer1 = confirm("Вам подобається програмування?"); // питання 1
let answer2 = confirm("Ви впевнені у своєму виборі?"); // питання 2
console.log("Відповідь на питання 1:", answer1);
console.log("Відповідь на питання 2:", answer2)
}

// Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте стать користувача з допомогою confirm, то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")

{
let answer = confirm("Ви москаль?")
if (answer) {alert("Мершій за кораблем")}//если "да"
else {alert("Добридень")}//если "нет"
}

// Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір. Використовуйте prompt, умови порівняння та alert.

//*****Основная идея ИИ, я же переделал для своей задачи********

{
  let sizesTranslation = {
    89: "XXS",
    90: "XXS",
    91: "XXS",
    92: "XXS",
    93: "XS",
    94: "XS",
    95: "XS",
    96: "XS",
    97: "S",
    98: "S",
    99: "S",
    100: "S",
    101: "S",
    102: "M",
    103: "M",
    104: "M",
    105: "L",
    106: "L",
    107: "L",
    108: "L",
    109: "XL",
    110: "XL",
    111: "XL",
    112: "XL",
    113: "XXL",
    114: "XXL",
    115: "XXL",
    116: "XXL",
    117: "XXL",    
    118: "XXXL",
    119: "XXXL",
    120: "XXXL",
    121: "XXXL",
    122: "XXXL",
  };
  let hips = prompt("Введіть обхват стегон (см, цілі):");
  let translatedSize = sizesTranslation[hips];
  if (translatedSize) {
    alert("Розмір: " + translatedSize);
  } else {
    alert("Розмір не знайдений.");
  }
}

//или

{
  let hips = prompt("Введіть обхват стегон (см, цілі):")
    if (hips < 89)  {alert("Розмір не знайдений.")}
    if (hips > 89 && hips < 92)   {alert("Розмір: XXS")}
    if (hips > 93 && hips < 96)   {alert("Розмір: XS")}
    if (hips > 97 && hips < 101)  {alert("Розмір: S")}
    if (hips > 102 && hips < 104) {alert("Розмір: M")}
    if (hips > 105 && hips < 108) {alert("Розмір: L")}
    if (hips > 109 && hips < 112) {alert("Розмір: XL")}
    if (hips > 113 && hips < 117) {alert("Розмір: XXL")}
    if (hips > 118 && hips < 122) {alert("Розмір: XXXL")}
    if (hips > 122)  {alert("Розмір не знайдений.")}
}  
    {if (hips < 89 && hips > 122)  {alert("Розмір не знайдений.")}}//*************так не работает*************************


// Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". Використовуйте тернарний оператор.

{
let sex = confirm("Ви жінка?") ? "Ви жінка" : "Ви чоловік"
alert(sex)
}

// Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок або null, що інтерпретується як false).

{
let age = prompt ("Ваш вік?")
let year = prompt ("Який наразі рік?")
let year_of_birth = year - age || alert("Помилка")
alert (year_of_birth)
}

// За допомогою цього ж трюку (використання АБО для запуску альтернативи) зробіть примхливого робота, який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка".

{confirm("Шопінг?") || alert ("Ти - бяка")}

// Зробити те саме за допомогою if.

{
let answer = confirm("Шопінг?")
if (answer) {} //если "да"
else {alert("Ти - бяка")} //если "нет"
}

// Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || додайте рядки за промовчанням, які будуть зберігатися у внутрішніх змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов"

{
answer1 = prompt ("Ваше призвище?") || "Іванов"
answer2 = prompt ("Ваше ім'я?") || "Іван"
answer3 = prompt ("Ви по батькові?") || "Іванович"
console.log(answer1, answer2, answer3)
}

// Зробіть те саме за допомогою if та else

{
answer1 = prompt ("Ваше призвище?")
answer2 = prompt ("Ваше ім'я?")
answer3 = prompt ("Ви по батькові?")
if (!answer1) {answer1 = "Іванов"}
if (!answer2) {answer2 = "Іван"}
if (!answer3) {answer3 = "Іванович"}
console.log(answer1, answer2, answer3)
}

// Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний, просить ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки. У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. Використовуйте вкладені if та else.
//******Упражнение сделано ИИ на 90%, осознано мной*******

{
let login = prompt("Введіть логін:")
if (login === "admin") {let password = prompt("Введіть пароль:")
  if (password === "qwerty") {alert("Логін та пароль вірні. Привіт!")}
  else {alert("Помилка: Невірний пароль!")}}
else {alert("Помилка: Невірний логін!")}
}

// Currency exchange

// Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
// Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
// За допомогою декількох if та тернарного оператора всередині кожного з if задайте змінну rate, визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу на місце оголошення змінної rate - вона має бути доступна в коді після всіх цих if.
// Попросіть користувача ввести суму на обмін
// Порахуйте та виведіть результат шляхом множення або поділу на rate
// Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)

// *****Упражнение сделано ИИ, я б не додумался, но взял метод решения себе на вооружение и изучение*******

{
let currency = prompt("Введіть валюту (наприклад, USD, EUR):");
let isBuying = confirm("Ви бажаєте купити? Якщо ні, то виберіть ОК для продажу, або Скасувати для виходу.");

currency = currency.toUpperCase();

let rate;

if (currency === "USD") {
  rate = isBuying ? 27.5 : 27.0;
} else if (currency === "EUR") {
  rate = isBuying ? 32.0 : 31.5;
} else {
  alert("Введена валюта не підтримується.");
  rate = 0;
}

if (rate !== 0) {
  let amount = parseFloat(prompt("Введіть суму для обміну:"));

  if (isNaN(amount)) {
    alert("Введено некоректну суму.");
  } else {
    let result = isBuying ? amount * rate : amount / rate;
    alert("Результат: " + result.toFixed(2) + " " + currency);
  }
}
}
//Методичка от ии:
// У цьому прикладі:
// Запитується валюта від користувача та зберігається в змінній currency.
// Запитується питання про купівлю або продаж від користувача за допомогою confirm та зберігається в змінній isBuying.
//Використовуються методи toUpperCase для перетворення введеної валюти на верхній регістр.
// За допомогою кількох if та тернарного оператора встановлюється значення змінної rate, що представляє курс обміну для конкретної валюти на купівлю чи продаж.
// Якщо введена валюта не підтримується, виводиться alert з повідомленням про непідтримувану валюту, а значення змінної rate встановлюється на 0.
// Якщо значення rate не дорівнює 0 (тобто валюта підтримується), продовжується виконання коду.
// апитується сума для обміну від користувача та зберігається в змінній amount.
// Перевіряється, чи введена сума

// Scissors

// Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, програма генерує свій варіант через Math.random() і виводить через alert. Наступний alert виводить ім'я переможця чи "нічия"

// *****Упражнение сделано ИИ, я б не додумался, но взял метод решения себе на вооружение и изучение*******

{
// Запитуємо варіант користувача
let userChoice = prompt("Виберіть свій варіант: камінь, ножиці або папір").toLowerCase();

// Генеруємо випадковий варіант для програми
let computerChoice = generateComputerChoice();

// Функція для генерації випадкового варіанту для програми
function generateComputerChoice() {
  let randomNum = Math.random();
  if (randomNum < 0.33) {
    return "камінь";
  } else if (randomNum < 0.66) {
    return "ножиці";
  } else {
    return "папір";
  }
}
// Виводимо варіанти користувача і програми
alert("Ваш вибір: " + userChoice);
alert("Вибір програми: " + computerChoice);

// Визначаємо переможця
let winner;
if (userChoice === computerChoice) {
  winner = "Нічия";
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  winner = "Ви перемогли!";
} else {
  winner = "Програма перемогла!";
}

// Виводимо ім'я переможця або "Нічия"
alert(winner);
}
//Методичка от ии:
// Користувач вводить свій варіант через prompt і зберігається в змінній userChoice. За допомогою toLowerCase() перетворюється на нижній регістр для зручності порівняння.
// За допомогою функції generateComputerChoice() генерується випадковий варіант для програми і зберігається в змінній computerChoice.
// За допомогою alert виводяться варіанти користувача і програми.
// Визначається переможець за допомогою послідовних перевірок за умовою. Якщо варіанти однакові, то встановлюється значення "Нічия". Інакше, залежно від комбінації варіантів, встановлюється переможець.
// За допомогою alert вивод
