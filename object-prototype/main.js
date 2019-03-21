//----------task1------------
//year, month, day
function checkAge(birthdayDate) {
  let now = +new Date();
  console.log(`now: ${now}`);
  birthdayDate = new Date(birthdayDate).getTime() / 1000;
  console.log(`birthdayDate: ${birthdayDate}`);
  let age = (now - birthdayDate) / 31536000000;
  return Math.round(age);
}
let person = '1992.09.21';
console.log('age: ' +  checkAge(person) );

//----------task2------------

function whatAnimalSays (animal) {
  let sound = animal.sound;
  if (animal.sound == undefined) {
    return null;
  } else {
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
  return Math.round(average);
}

let marks = [3, 2, 1, 5, 3, 4, 5, 4];
getAverageMark(marks);