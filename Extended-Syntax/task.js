//------------task1---------------
"use strict"
var a = 2,
    b = 4,
    c = -3;


function getResult(){
	let discriminant = b ^ 2 - 4 * a *c;

	if (discriminant < 0) {
		console.log ("no solution!");
	} else if (discriminant == 0) {
		let x = (-b / 2 *  a);
		console.log ("x = " + x);
		return x;
	} else {
		let x1 = (-b + (Math.sqrt(discriminant)).toFixed(2)) / 2 * a,
			x2 = (-b - (Math.sqrt(discriminant)).toFixed(2)) / 2 * a;

		console.log(`x1 = ${x1}, x2 = ${x2}`);
		return [x1, x2];	
  }		
}
console.log(`task_1 solution: ${getResult()}`);

//------------task2---------------
function askDrink(name, dateOfBirthday) {
    var nowDate = new Date(),
        nowDateYear = nowDate.getFullYear(),
        age = nowDateYear - dateOfBirthday;

  if (age >= 18){
    document.write(`Не желаете ли олд-фэшн, ${name}?`);
  } else {
    document.write(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
}

askDrink("Игорь", 1992);
//------------task3---------------
var marks = [2, 3, 3, 5, 2, 4, 5];

function getAverageMarks(marks){
  if(marks.length > 5) {
    console.log("There`re more than 5 marks!");
    marks.length = 5;
    console.log(`Current marks: ${marks}.`);
  }

  let sum = 0;

  for (let i = 0; i < marks.length; i++){
    sum += marks[i];  
  }

  let average = (sum / marks.length).toFixed(0);
  return average;
}

getAverageMarks(marks);
