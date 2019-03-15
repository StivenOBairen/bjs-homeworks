//----------task1------------


//----------task2------------

function whatAnimalSays (animal) {
  let sound = animal.sound;

  //в задании сказано: 
  //"Если переменная animal равна undefined"
  //это опечатка? или я не понял? 
  if (animal.sound == undefined) {
    return null;
  } else if (animal.sound !== undefined) {
    return animal.sound;
  }
}

let dog = {food: 'meat', sound: 'wooof'},
    fox = {food: 'meat', color: 'ginger'};
console.log (`Dog: ${whatAnimalSays(dog)}`);
console.log (`Fox: ${whatAnimalSays(fox)}`);

//----------task3------------
function getAverageMark(marks) {
  let sumOfMarks = 0;
  for (let i = 0; i < marks.length; i++){
    sumOfMarks += marks[i];
  }
  let average = sumOfMarks / marks.length;
  //let roundedAverage = Math.round(average);
  //return roundedAverage;
  //нужно ли создавать отдельную переменную roundedAverage, если сразу можно вывести расчет?
  return Math.round(average);
}

let a = [3, 2, 1, 5, 3, 4, 5, 4];
getAverageMark(a);