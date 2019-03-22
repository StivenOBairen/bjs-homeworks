const showGreet = () => console.log('asdasd');
setTimeout(showGreet, 1000);



function setDailyRhythm(wakeUpTime, bedTime) {
//где wakeUpTime и bedTime - строки формата hh:mm (например, 07:39 или 23:11).
//принимать в качестве значения два параметра: время подъема и время отбоя. Когда настанет время ложиться спать, функция должна вывести на экран: “Спокойной ночи, Вася!”, а когда просыпаться: “Доброе утро, Вася”.
  let now = new Date();
  let clock = () => now.toLocaleTimeString();
  console.log( setTimeout(clock, 1000));
  if ( clock == wakeUpTime) {
    return (`Доброе утро, Вася!`);
  }
  if ( clock == bedTime ) {
    return (`Спокойной ночи, Вася!`);
  }
}
setDailyRhythm ( "23:20", "07:05");

function setAlarm(time, callback) {
	//где time - строка формата hh:mm, а callback - функция, которая должна быть вызвана в заданное time время.

}

console.log( setDailyRhythm( '07:32', '23:59'));
console.log( typeof(wakeUpTime, bedTime));


/*
const setAlarm  = () => {
  Каждую секунду setDailyRhythm делает следущее:
     Получает текущее время в формате hh:mm
    Передаёт текущее время в каждую функцию-будильник.

}
*/