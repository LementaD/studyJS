debugger; //???
// Нужно расчитывать стоимось израсходованного топлива автомобилями, исходя из их стартовых и финальных показаний одометров, замеряющих в милях.
let a = 104094 //старт одометра в милях (сюда подставлять замеры)
let b = 104358 //финиш одометра в милях (сюда подставлять замеры)
{
k = (b-a) * 1.609344 //расчет километража в километрах (не в милях)
console.log('k', k)
}

{
let R = 1 // расход литров топлива на 10 км (сюда подставлять значения в зависимости от расхода топлива конкретного автомобиля)
r = R /10 // расход топлива на 1 км
l = k * r // итог расчета литров израсходованного топлива
}
console.log('l', l)
{
let grn = 50 // цена литра топлива в грн (сюда подставлять текущую цену)
GRN = l * grn // искомая стоимость израсходованного топлива 
}