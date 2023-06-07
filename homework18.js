// Temperature

//************** Исходник ***********************
{
// За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
var temprCel = prompt ("Яка температура в градусах Цельсія?")
var temprFar = (temprCel * 9 / 5) + 32
alert ("Температура в градусах Фаренгейта: " + temprFar)
}
//***********************************************

//**************** Синтаксис функций ****************************
{
    (a, b) => a + b //так функция не выполнится, но будет просто существовать
}
{
    ((a, b) => a + b) () //так функция выполнится
}
{
    (d,f) => { //функція з параметрами, яка повертає результат поділу першого параметра на другий
        return d / f
    }
}
//***************************************************************

{
    (temprCel) => { (temprCel * 9 / 5) + 32
        return temprFar
    }
}

//RGB__________________________________________________________________________________________________________________________________________________

//****************** Исходник **********************************************************************
{
const red = prompt("Введіть значення червоного каналу (від 0 до 255):")
const green = prompt("Введіть значення зеленого каналу (від 0 до 255):")
const blue = prompt("Введіть значення синього каналу (від 0 до 255):")

//Перетворення на 16-кову систему
var hexRed = Number(red).toString(16)
var hexGreen = Number(green).toString(16)
var hexBlue = Number(blue).toString(16)

var color = '#' + hexRed + hexGreen + hexBlue
alert ("RGBA код кольору: " + color)
}
//**************************************************************************************************

{
(r, g, b) => {var hexRed = Number(r).toString(16)
              var hexGreen = Number(g).toString(16)
              var hexBlue = Number(b).toString(16)
              var color = '#' + hexRed + hexGreen + hexBlue
    return color
}
}

//Flats_______________________________________________________________________________________________________________________________________________________________

{
    function calculateApartmentFloor(numberOfFloors, apartmentsPerFloor, apartmentNumber) {
        const apartmentsPerEntrance = numberOfFloors * apartmentsPerFloor;
        const entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
        const floorNumber = Math.ceil((apartmentNumber % apartmentsPerEntrance) / apartmentsPerFloor);
      
        return { entrance: entranceNumber, floor: floorNumber };
      }
      
      const numberOfFloors = Number(prompt("Введіть кількість поверхів у будинку:"));
      const apartmentsPerFloor = Number(prompt("Введіть кількість квартир на поверсі:"));
      const apartmentNumber = Number(prompt("Введіть номер квартири:"));
      
      const { entrance, floor } = calculateApartmentFloor(numberOfFloors, apartmentsPerFloor, apartmentNumber);
      
      alert(`Квартира з номером ${apartmentNumber} знаходиться на ${floor}-му поверсі ${entrance}-го під'їзду.`);
}

// Credentials_______________________________________________________________________________________________________________________________________________

//****************** Исходник **********************************************************************
{
    {
    let str = prompt ("Введіть прізвище").trim ()
    let str2 = prompt ("Введіть ім'я").trim ()
    let str3 = prompt ("Введіть по батькові").trim ()
    SurName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    Name = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
    MiddleName = str3.charAt(0).toUpperCase() + str3.slice(1).toLowerCase()
    console.log (SurName, Name, MiddleName)//КТ
    FullName = SurName + " " + Name + " " + MiddleName
    alert (FullName)
    }
}
//***************************************************************************************************

{
    () => {
        let str = prompt ("Введіть прізвище").trim ()
        let str2 = prompt ("Введіть ім'я").trim ()
        let str3 = prompt ("Введіть по батькові").trim ()
        SurName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        Name = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
        FatherName = str3.charAt(0).toUpperCase() + str3.slice(1).toLowerCase()
        FullName = SurName + " " + Name + " " + FatherName   
    return {Name, SurName, FatherName, FullName}
    }
}

//New line_________________________________________________________________________________________________________________________________________

//************************************Исходник**********************************
{
    let str = prompt ("Введіть рядок. Для створення нового рядка введіть \\n")
    let result = str.split('\\n').join("\n")
    console.log (result)
}
//******************************************************************************

{
    function formatStringWithLineBreaks(str) {
        let result = str.split('\\n').join("\n");
        return result;
      }
      let inputString = prompt("Введіть рядок. Для створення нового рядка введіть \\n");
      let formattedString = formatStringWithLineBreaks(inputString);
      console.log(formattedString);   
}

//Prompt OR___________________________________________________________________________________________________________________________________________

//************************************Исходник**********************
{
    let age = prompt ("Ваш вік?")
    let year = prompt ("Який наразі рік?")
    let year_of_birth = year - age || alert("Помилка")
    alert (year_of_birth)  
}
//******************************************************************

{
const getInputValue = (promptText, defaultValue) => prompt(promptText) || defaultValue;
let age = getInputValue("Ваш вік?", "");
let year = getInputValue("Який наразі рік?", "");
let year_of_birth = year - age || alert("Помилка");
alert(year_of_birth);
}
//*********Методичка от АИ******************
// У цьому коді функція getInputValue оголошується як функція одного виразу, використовуючи стрілкову функцію (=>). Функція приймає два параметри: promptText - рядок для prompt та defaultValue - значення за замовчуванням.
// У тілі функції, ми використовуємо prompt(promptText) для виведення спливаючого вікна з повідомленням promptText. Якщо користувач введе текст, то це значення повертається з функції. Якщо користувач натисне "Скасувати" або не введе жодного тексту, то повертається значення defaultValue.
// Після визначення функції, ми використовуємо її двічі: спочатку для отримання значення з prompt для змінної age, а потім для отримання значення з prompt для змінної year. Нарешті, вираховуємо year_of_birth шляхом віднімання age від year. Якщо в результаті отримуємо некоректне значення (наприклад, рядок замість числа), то виводимо повідомлення "Помилка" за допомогою alert.

// Login And Password_______________________________________________________________________________________________________________________________

//*************************Исходник**********************
{
    let login = prompt("Введіть логін:")
    if (login === "admin") {let password = prompt("Введіть пароль:")
      if (password === "qwerty") {alert("Логін та пароль вірні. Привіт!")}
      else {alert("Помилка: Невірний пароль!")}}
    else {alert("Помилка: Невірний логін!")}  
}
//*******************************************************

{
    function validateLogin(correctLogin, correctPassword) {
        let login = prompt("Введіть логін:");
        
        if (login === correctLogin) {
          let password = prompt("Введіть пароль:");
          
          if (password === correctPassword) {
            alert("Логін та пароль вірні. Привіт!");
            return true;
          } else {
            alert("Помилка: Невірний пароль!");
            return false;
          }
        } else {
          alert("Помилка: Невірний логін!");
          return false;
        }
      }
      
      let correctLogin = "admin";
      let correctPassword = "qwerty";
      
      let isLoggedIn = validateLogin(correctLogin, correctPassword);
      console.log(isLoggedIn);
}

//*********Методичка от АИ******************

// У цьому коді функція validateLogin визначена з двома параметрами correctLogin та correctPassword.
// У тілі функції, ми викликаємо prompt для введення логіна користувачем та зберігаємо його у змінну login. Потім перевіряємо, чи введений логін (login) співпадає з правильним логіном (correctLogin).
// Якщо логін вірний, викликаємо ще одне prompt для введення пароля користувачем та зберігаємо його у змінну password. Потім перевіряємо, чи введений пароль (password) співпадає з правильним паролем (correctPassword).
// Якщо і логін, і пароль вірні, виводимо повідомлення "Логін та пароль вірні. Привіт!" за допомогою alert та повертаємо true.
// Якщо пароль невірний, виводимо повідомлення "Помилка: Невірний пароль!" за допомогою alert та повертаємо false.
// Якщо логін невірний, виводимо повідомлення "Помилка: Невірний логін!" за допомогою alert та повертаємо false.
// Після визначення функції, ми викликаємо її з правильним логіном (correctLogin) та паролем (correctPassword) і зберігаємо результат в змінну isLoggedIn. Нарешті, виводимо значення isLoggedIn у консоль за допомогою console.log.

//For Table_________________________________________________________________________________________________________________________________________

//****************Исходник**************************
{

}
//***************************************************
{

}

//Array of objects sort______________________________________________________________________________________________________________________________

{
    
}
