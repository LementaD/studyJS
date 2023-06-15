//blocks
//*******************FAILTURE**********************************************
{
let a = 10
{
    let b = 20
    {
        let c = 30
        //які тут будуть значення змінних a, b, c, d ?      а = 100   b = 21    c = 30     d = undefinite 
        
        b++
        a *= 10 // = a * 10
    }
    {
        let c = 50
        //які тут будуть значення змінних a, b, c, d ?     a = 100    b = 521    c = 50     d = undefinite 
        b += 500 // = b + 500
    }
    {
        const a = 100500
        const d = "value"
            //які тут будуть значення змінних a, b, c, d ?        а = 100500  b =521     c =  50     d = "value"
        {
            let a = -50
            b     = 1000
            //які тут будуть значення змінних a, b, c, d ?          а = -50   b =  1000  c = 50  d = "value"   
        }
        //які тут будуть значення змінних a, b, c, d ?          а = 100500   b = 1000   c = 50  d = "value"
    }
    //які тут будуть значення змінних a, b, c, d ?              а = 100   b = 1000    c = 50    d = undefinite
}
//які тут будуть значення змінних a, b, c, d ?                  а = 10   b =  undefinite   c = undefinite    d = undefinite
}

// **********пояснение аи*******************

{
    let a = 10; // Значення a = 10
    {
        let b = 20; // Значення b = 20
        {
            let c = 30; // Значення c = 30
            // Значення d не визначено
            
            b++; // Збільшуємо b на 1, b = 21
            a *= 10; // Перемножуємо a на 10, a = 100
        }
        {
            let c = 50; // Значення c = 50
            // Значення d не визначено
            b += 500; // Додаємо 500 до b, b = 520
        }
        {
            const a = 100500; // Створюємо нову локальну змінну a зі значенням 100500, в межах цього блоку
            const d = "value"; // Значення d = "value"
            {
                let a = -50; // Створюємо нову локальну змінну a зі значенням -50, в межах цього блоку
                b = 1000; // Змінюємо значення b на 1000
                // Значення c не змінюється, залишається 50
                // Значення d не змінюється, залишається "value"
            }
            // Значення a не змінюється, залишається 100500
            // Значення b змінюється на 1000
            // Значення c не змінюється, залишається 50
            // Значення d не змінюється, залишається "value"
        }
        // Значення a не змінюється, залишається 100
        // Значення b не змінюється, залишається 20
        // Значення c не змінюється, залишається 30
        // Значення d не змінюється, залишається не визначеним
    }
    // Значення a не змінюється, залишається 10
    // Значення b не змінюється, оскільки воно визначене тільки в межах внутрішнього блоку
    // Значення c не змінюється, оскільки воно визначене тільки в межах внутрішнього блоку
    // Значення d не змінюється, оскільки воно визначене тільки в межах внутрішнього блоку
}

//comparison if_________________________________________________________________________________________________________________________________
{
age = prompt ("Скільки вам років?")
if (age > 0 && age < 18) {
    alert("школяр")
}
else if (age > 18 && age < 30){
    alert("молодь")
}
else if (age > 30 && age < 45){
    alert("зрілість")
}
else if (age > 45 && age < 60){
    alert("захід сонця")
}
else if (age > 60) {
    alert("як пенсія?")
}
else if (age < 0) {
    alert("Вас ще не існує")
}
else {
    alert("чи кіборг, чи KERNESS")
}
}

//switch: sizes________________________________________________________________________________________________________________________________

//*********исходник*****************

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
//****************************************************************************************
{
const hips = prompt("Введіть обхват стегон (см, цілі):")
switch (hips) {
    case "89":
        alert('XXS')
        break;
    case "90":
        alert('XXS')
        break;
    case "91":
        alert('XXS')
        break;
    case "92":
        alert('XXS')
        break;
    case "93":
        alert('XS')
        break;     
    case "94":
        alert('XS')
        break;     
    case "95":
        alert('XS')
        break;     
    case "96":
        alert('XS')
        break;   
    case "97":
        alert('S')
        break;   
    case "98":
        alert('S')
        break;   
    case "99":
        alert('S')
        break;   
    case "100":
        alert('S')
        break;   
    case "101":
        alert('S')
        break;   
    case "102":
        alert('M')
        break;   
    case "103":
        alert('M')
        break;   
    case "104":
        alert('M')
        break;   
    case "105":
        alert('L')
        break;   
    case "106":
        alert('L')
        break;
    case "107":
        alert('L')
        break;
    case "108":
        alert('L')
        break;
    case "109":
        alert('XL')
        break;
    case "110":
        alert('XL')
        break;
    case "111":
        alert('XL')
        break;
    case "112":
        alert('XL')
        break;
    case "113":
        alert('XXL')
        break;
    case "114":
        alert('XXL')
        break;
    case "115":
        alert('XXL')
        break;
    case "116":
        alert('XXL')
        break;
    case "117":
        alert('XXL')
        break;
    case "118":
        alert('XXXL')
        break;
    case "119":
        alert('XXXL')
        break;
    case "120":
        alert('XXXL')
        break;
    case "121":
        alert('XXXL')
        break;
    case "122":
        alert('XXXL')
        break;                                                                                                                                                                                    
    default:
        alert ('Розмір не знайдений.')
}
}
//switch: if______________________________________________________________________________________________________________________________________
//Перепишіть приклад нижче, використовуючи if.
//******************исходник****************************************************************************
{
let color = prompt("Введіть колір");
switch (color) {
     case "red": document.write("<div style='background-color: red;'>червоний</div>");
     case "black": document.write("<div style='background-color: black; color: white;'>чорний</div>");
                 break;
     case "blue": document.write("<div style='background-color: blue;'>синій</div>");
     case "green": document.write("<div style='background-color: green;'>зелений</div>");
                 break;
     default: document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}
}
//*******************************************************************************************************
{
    let color = prompt("Введіть колір");

    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>")
    } else if (color === "black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>")
    } else if (color === "blue") {
        document.write("<div style='background-color: blue;'>синій</div>")
    } else if (color === "green") {
        document.write("<div style='background-color: green;'>зелений</div>")
    } else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>")
    }
}
//noswitch_________________________________________________________________________________________________________________________________
{
    
}