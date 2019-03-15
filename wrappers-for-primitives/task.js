//-----------task1-------------
"use strict";
//принимать процентную ставку, сумму первоначального взноса, сумму кредита и срок (в мес.) 
function calculateLoan(percentageRate, firstPaymentAmount, loanAmount, periodInMonths) {

//процентная ставка должна быть дробным числом, следовательно входные данные нужно разделить на 100
percentageRate = percentageRate / 100;

//проверка вводимых данных
for (let param in calculateLoan) {
  if (this.param == String) {
    console.log("its ok");
    param = Number (param);
  }
  else {
  console.log(`Параметр ${param} содержит неправильное значение ${calculateLoan.param}`);
  }
} 

//Посчитайте сумму, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)
let debt = loanAmount - firstPaymentAmount;

//Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - сумма кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
percentageRate = percentageRate / 12;
let monthlyPayment = loanAmount * (percentageRate + percentageRate / (( (1+percentageRate)**periodInMonths) - 1) );

//Посчитайте общую сумму, которую придется заплатить клиенту.
let summaryPayment = monthlyPayment * periodInMonths;

//выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)
//проценты???
let totalPayments = firstPaymentAmount + summaryPayment;
return Math.round(totalPayments*100)/100;
}
//testing
console.log(calculateLoan(10,"0","50000",12) + " Вывод: 52749.53");
console.log(calculateLoan(10,false,50000,12) + " Вывод: 51694.54");
console.log(calculateLoan(10,1000,20000,"asd") + " Вывод: 22149.56");
console.log(calculateLoan(10,1000,20000,24) + " Вывод: 21042.08");
console.log(calculateLoan(10,20000,20000,24) + " Вывод: 0");
console.log(calculateLoan(10,0,10000,36) + " Вывод: 11616.18");
console.log(calculateLoan(15,0,10000,36) + " Вывод: 12479.52" + '\n');
 
//-----------task2-------------
function greetings(name) {
  if (!name) {
    name = "Аноним";
  }
  console.log(`Привет, мир! Меня зовут ${name}.`);
  return;
}

greetings("Иван");
greetings("");
greetings(undefined);