//Number: flats
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

// *************** Пояснение АИ ***************************

// const { entrance, floor } = calculateApartmentFloor(numberOfFloors, apartmentsPerFloor, apartmentNumber);
// В цьому рядку коду виконується виклик функції calculateApartmentFloor з передачею аргументів numberOfFloors, apartmentsPerFloor та apartmentNumber. Функція обчислює під'їзд та поверх квартири за заданими параметрами і повертає об'єкт з властивостями entrance і floor. Деструктуризація { entrance, floor } витягує значення цих властивостей з повернутого об'єкту і присвоює їх змінним entrance і floor.

// alert(Квартира з номером ${apartmentNumber} знаходиться на ${floor}-му поверсі ${entrance}-го під'їзду.);
// Цей рядок коду викликає alert, який виводить спливаюче повідомлення на екран. У тексті повідомлення використовуються шаблонні рядки (template literals) з використанням зворотніх апострофів (). Змінні apartmentNumber, floorіentranceвставляються у відповідні місця в рядку, використовуючи синтаксис${...}` для виразів внутрішньої підстановки.

// Таким чином, після виконання коду функції calculateApartmentFloor отримані значення entrance і floor використовуються для виведення повідомлення, яке вказує під'їзд та поверх, на яких знаходиться введена квартира, за допомогою alert.