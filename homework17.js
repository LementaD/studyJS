// Literals
{
const cat = {//параметри кота
    name: 'Том',
    place: 'США',
    birth: '1940',
    occupation: "Мишолов",
    enemy: 'Джері'
}
}
// Literals expand _______________________________________________________________________________________________
{
const cat = {
    name: 'Том',
    place: 'США',
    birth: '1940',
    occupation: "Мишолов",
    enemy: 'Джері'
} 
// Запитати назву та значення нової властивості через prompt
const newKey1 = prompt('Введіть назву нової властивості 1:');
const newValue1 = prompt('Введіть значення нової властивості 1:');
const newKey2 = prompt('Введіть назву нової властивості 2:');
const newValue2 = prompt('Введіть значення нової властивості 2:');
// Додати нові властивості до об'єкта
cat[newKey1] = newValue1;
cat[newKey2] = newValue2;
console.log(cat);        
}
// Literals copy____________________________________________________________________________________________________
{
// Створити об'єкт
const cat = {
    name: 'Том',
    place: 'США',
    birth: '1940',
    occupation: "Мишолов",
    enemy: 'Джері'
};
// Запитати назву та значення нової властивості через prompt
const newKey1 = prompt('Введіть назву нової властивості 1:');
const newValue1 = prompt('Введіть значення нової властивості 1:');
const newKey2 = prompt('Введіть назву нової властивості 2:');
const newValue2 = prompt('Введіть значення нової властивості 2:');
// Додати нові властивості до об'єкта
cat[newKey1] = newValue1;
cat[newKey2] = newValue2;
console.log(cat);
// Запитати назву та значення нової властивості через prompt
const newKey = prompt('Введіть назву нової властивості:');
const newValue = prompt('Введіть значення нової властивості:');
// Створити новий об'єкт із додатковою властивістю
const newObject = {
    ...cat, // Скопіювати попередній об'єкт
    [newKey]: newValue // Додати нову властивість
};
console.log(newObject);
}
// Html tree___________________________________________________________________________________________________________
{
    var body = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ["Enter a data please"]
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    },
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: 'ok',
                        children: ["OK"]
                    }
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: 'cansel',
                        children: ["Cansel"]
                    }
                }
            ]  
        }
    ]
    }
}
// Parent____________________________________________________________________________________________________________
{
    var body = {
    tagName: 'body',
    parent: null,
    children: [
        {
            tagName: 'div',
            parent: 'body',
            children: [
                {
                    tagName: 'span',
                    parent: 'div',
                    children: ["Enter a data please"]
                },
                {
                    tagName: 'br',
                    parent: 'div'
                },
                {
                    tagName: 'input',
                    parent: 'div',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    },
                    tagName: 'input',
                    parent: 'div',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            parent: 'body',
            children: [
                {
                    tagName: 'button',
                    parent: 'div',
                    attrs: {
                        id: 'ok',
                        children: ["OK"]
                    }
                },
                {
                    tagName: 'button',
                    parent: 'div',
                    attrs: {
                        id: 'cansel',
                        children: ["Cansel"]
                    }
                }
            ]  
        }
    ]
    }
}
// Change OK______________________________________________________________________________________________________
//*************************failture*********************************************************
{
    var body = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ["Enter a data please"]
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    },
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: 'ok',
                        children: ["OK"]
                    }
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: 'cansel',
                        children: ["Cansel"]
                    }
                }
            ]  
        }
    ]
    }
}
// Destructure____________________________________________________________________________________________________________________
const jsonStructure = {
    "tagName": "body",
    "children": [
      {
        "tagName": "div",
        "children": [
          {
            "tagName": "span",
            "children": [
              "Enter a data please:"
            ]
          },
          {
            "tagName": "br", 
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "name"
            }
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "surname"
            }
          }
        ]
      },
      {
        "tagName": "div",
        "children": [
          {
            "tagName": "button",
            "attrs": {
              "id": "ok"
            },
            "children": [
              "OK"
            ]
          },
          {
            "tagName": "button",
            "attrs": {
              "id": "cancel"
            },
            "children": [
              "Cancel"
            ]
          }
        ]
      }
    ]
  };
  
  // Виведення значення тексту у тезі span
  const [{ children: [span] }] = jsonStructure.children[0].children;
  console.log(span);
  
  // Виведення значення тексту в другій кнопці
  const [, { children: [button2] }] = jsonStructure.children[1].children;
  console.log(button2);
  
  // Виведення значення атрибуту id у другому input
  const [, { attrs: { id: secondInputId } }] = jsonStructure.children[0].children.filter(child => child.tagName === 'input');
  console.log(secondInputId);

// ПОЯСНЕНИЕ АИ:
//   Цей код використовує деструктуризацію для отримання конкретних значень зі структури jsonStructure. Давайте розберемо кожну частину по черзі:
// 
// const [{ children: [span] }] = jsonStructure.children[0].children;
// 
// Тут ми використовуємо деструктуризацію, щоб отримати перший елемент children у першому div. За допомогою синтаксису { children: [span] }, ми присвоюємо значення першого елемента зі структури children до змінної span.
// Потім, ми використовуємо console.log(span) для виведення значення span (тексту у тезі span).
// const [, { children: [button2] }] = jsonStructure.children[1].children;
// 
// Тут ми використовуємо деструктуризацію, щоб отримати другий елемент children у другому div. За допомогою синтаксису { children: [button2] }, ми присвоюємо значення другого елемента зі структури children до змінної button2.
// Потім, ми використовуємо console.log(button2) для виведення значення button2 (тексту у другій кнопці).
// const [, { attrs: { id: secondInputId } }] = jsonStructure.children[0].children.filter(child => child.tagName === 'input');
// 
// Тут ми використовуємо деструктуризацію разом із фільтрацією. Ми фільтруємо елементи зі структури children першого div, щоб отримати лише ті, які мають tagName рівний 'input'.
// Потім, за допомогою синтаксису { attrs: { id: secondInputId } }, ми присвоюємо значення атрибуту id зі структури attrs до змінної secondInputId.
// Нарешті, ми використовуємо console.log(secondInputId) для виведення значення secondInputId (значення атрибуту id другого input).
// Таким чином, ви можете використовувати деструктуризацію для отримання конкретних значень зі структури jsonStructure безпосередньо у змінних span, button2 та secondInputId.

// Destruct array________________________________________________________________________________________________________________________________________________________________
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    let [even1, even2] = arr.filter(item => typeof item === 'number' && item % 2 === 0);
    let [odd1, odd2, odd3] = arr.filter(item => typeof item === 'number' && item % 2 === 1);
    let letters = arr.filter(item => typeof item === 'string');
    console.log(even1); // 2
    console.log(even2); // 4
    console.log(odd1)
    console.log(odd2)
    console.log(odd3)
    console.log(letters); // ["a", "b", "c"]
}
// Destruct string__________________________________________________________________________________________________________________________________
{
    let arr = [1, "abc"];
    const [number, [s1, s2, s3]] = arr;
    console.log(number); // 1
    console.log(s1); // "a"
    console.log(s2); // "b"
    console.log(s3); // "c"
}
// Destruct 2________________________________________________________________________________________
{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{ name: 'Maria' }, { name: 'Nikolay' }]
      };
    const { children: [{ name: name1 }, { name: name2 }] } = obj;
    console.log(name1); // "Maria"
    console.log(name2); // "Nikolay"
}
// Destruct 3_________________________________________________________________________________________
{
    let arr = [1,2,3,4, 5,6,7,10]
    const [a,b] = arr
    const length = arr.length;
    console.log(a); // "1"
    console.log(b); // "2"
    console.log(length)
}
// Copy delete________________________________________________________________________________________
{
    const cat = {//параметри кота
        name: 'Том',
        place: 'США',
        birth: '1940',
        occupation: "Мишолов",
        enemy: 'Джері'
    };
    const { name, ...rest } = cat;
    const catCopy = { ...rest };
    console.log(catCopy);
}
// Currency real rate____________________________________________________________________________________________________________________________
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        //ця функція запускається коли дані завантажуються.
        //Інший код працює РАНIШЕ.
        //тільки тут є змінна data з завантаженими даними
           console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
        })
}

{//решение АИ************************************************************
    fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    // Отримання вхідних даних від користувача
    const inputCurrency = prompt('Введіть вхідну валюту:');
    const outputCurrency = prompt('Введіть валюту, в яку відбувається конвертація:');
    const inputAmount = parseFloat(prompt('Введіть суму у вхідній валюті:'));
    // Отримання курсу обміну валют
    const exchangeRates = data.rates;
    // Перевірка чи валюти є в списку курсів
    if (inputCurrency in exchangeRates && outputCurrency in exchangeRates) {
      const inputRate = exchangeRates[inputCurrency];
      const outputRate = exchangeRates[outputCurrency];
      // Розрахунок конвертованої суми
      const convertedAmount = (inputAmount / inputRate) * outputRate;
      // Виведення результату
      console.log(`Результат конвертації: ${convertedAmount.toFixed(2)} ${outputCurrency}`);
    } else {
      console.log('Введені валюти не підтримуються');
    }
  })
  .catch(error => {
    console.log('Сталася помилка при завантаженні даних:', error);
  });
}
//Методичка от АИ*********************************************

// Загальна структура коду є наступною:

// Виконується запит за допомогою функції fetch до вказаної URL-адреси 'https://open.er-api.com/v6/latest/USD', яка повертає об'єкт типу Promise.

// За допомогою методу then обробляється результат виконання запиту. Першим параметром методу then є колбек-функція, яка отримує відповідь сервера у форматі JSON.

// В тілі колбек-функції доступні отримані дані з сервера, які зберігаються у змінній data. За допомогою console.log(data) виводиться отримана структура даних у консоль для подальшого вивчення.

// Після виведення структури даних у консоль, програма продовжує виконуватись з наступного рядка коду.

// Користувачеві пропонується ввести вхідну валюту, валюту для конвертації та суму у вхідній валюті за допомогою виклику функції prompt. Введені значення зберігаються у відповідних змінних: inputCurrency, outputCurrency та inputAmount.

// При обробці введених даних, спочатку відбувається перевірка наявності валют у списку курсів, отриманих з сервера. Це реалізовано за допомогою перевірки, чи введені валюти є ключами об'єкта exchangeRates.

// Якщо обидві валюти присутні у списку курсів, вони використовуються для отримання курсів обміну. Значення курсів для вхідної та вихідної валют знаходяться за допомогою доступу до об'єкта exchangeRates за допомогою ключів inputCurrency та outputCurrency.

// Після отримання курсів обміну, розраховується конвертована сума за формулою (inputAmount / inputRate) * outputRate, де inputAmount - введена сума у вхідній валюті, inputRate - курс вхідної валюти, outputRate - курс вихідної валюти. Результат конвертації зберігається у змінній convertedAmount.

// На останньому кроці, використовуючи console.log, виводиться результат конвертації у вигляді рядка. Для форматування конвертованої суми до двох знаків після коми використовується метод toFixed(2).

// У випадку, якщо введені валюти не підтримуються, виводиться повідомлення про це за допомогою console.log('Введені валюти не підтримуються').

// Якщо під час виконання запиту сталася помилка, її перехоплює блок catch та виводить відповідне повідомлення про помилку.

// Важливо зазначити, що код виконує запит до вказаної URL-адреси та працює з отриманими даними з сервера. Для правильної роботи коду, впевніться, що маєте доступ до Інтернету та сервер з валютними курсами доступний.