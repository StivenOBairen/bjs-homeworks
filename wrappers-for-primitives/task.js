//-----------task1-------------
"use strict";
function calculateLoan( percentageRate, firstPaymentAmount, loanAmount, periodInMonths ) {
  let _percentageRate = percentageRate;
  //процентная ставка должна быть дробным числом, следовательно входные данные нужно разделить на 100
  //делим на количество месяцев в году
  _percentageRate = ( _percentageRate / 100 ) / 12;

  //проверка вводимых данных
  for (let key in arguments) {
    arguments[ key ] = Number.parseInt( arguments[ key ] );
  } 

  let debt = loanAmount - firstPaymentAmount;
  let monthlyPayment = loanAmount * ( _percentageRate + _percentageRate / (( ( 1 + _percentageRate )**periodInMonths ) - 1 ));
  let summaryPayment = monthlyPayment * periodInMonths;

  //выдавать сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)
  let totalPayments = firstPaymentAmount + summaryPayment;
  return Math.round( totalPayments * 100 ) / 100;
}
//testing
  console.log( "Вывод: " + calculateLoan( 10,"0","50000",12 ) );
  console.log( "Вывод: " + calculateLoan( 10,1000,20000,"12" ) );
  console.log( "Вывод: " + calculateLoan( 10,1000,20000,24 ) );
  console.log( "Вывод: " + calculateLoan( "10","20000","20000","24" ) );
  console.log( "Вывод: " + calculateLoan( "10",0,10000,36 ) );
  console.log( "Вывод: " + calculateLoan( 15,0,"10000",36 ) + '\n' );
 
//-----------task2-------------
function greetings( name ) {
  let _name = name;
  if ( !_name ) {
    _name = "Аноним";
  }
  console.log(`Привет, мир! Меня зовут ${_name}.`);
  return;
}
//testing
  greetings("Иван");
  greetings("");
  greetings(undefined);