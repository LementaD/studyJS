// Дослідіть код, знайдіть вирази у ньому. Розставте дужки так, щоб код не змінив своєї поведінки (працював так само як і зараз). Поясніть, як і в якому порядку обчислюються вирази та вирази.
// debugger;
// var a = 5;  
// var b, c;

// b = (a * 5);  
// b = (c = b/2);

// Вирази це все, окрім debugger (як я зрозумів)
// Вирази обчислюються так: а = 5, далі b = (а * 5) це 5*5 = 25 ,далі b = (c= b/2) це 25/2 = 12,5 ,що в підсумку дорівнює змінній "с", яка в свою чергу дорівнює змінній "b" у фіналі

// debugger;
// var a = 5;  
// var b, c;

// b = a * 5;  
// b = c = b/2;

// Код не змінив поведінки, бо з дужками або без в підсумку консолі 12,5 (як я розумію)

var a = 5;  
var b, c;

b = (a * 5);  
b = c = (b/2)

// Код не змінив поведінки, навідь з іншою конфігурацією дужок, бо в підсумку консолі 12,5 (як я розумію)