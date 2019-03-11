//-----------task1-------------
function getSolutions (a, b, c) {
let D = b ** 2 - 4 * a * c;

if (D < 0) {
	return {D: D};
} else if (D == 0) {
  let x1 = -b / (2 * a);
  return { roots: [x1], D: D};
} else {
  let x1 = (-b + Math.sqrt(D)) / (2 * a),
      x2 = (-b - Math.sqrt(D)) / (2 * a);
  return { roots: [x1, x2], D: D};
}

}

function showSolutionsMessage (a, b, c){
  let result = getSolutions (a, b, c);
  
  console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log (`Значение дискриминанта: ${getSolutions(a, b, c).D}`);

  if (!result.roots) {
    console.log ("Уравнение не имеет вещественных корней\n");
  } else if (result.roots.length == 1) {
    console.log (`Уравнение имеет один корень X₁ = ${result.roots[0]}\n`);
  } else if (result.roots.length == 2) {
    console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}\n`);
  }
}
//testInput
showSolutionsMessage (1, 2, 3);
showSolutionsMessage (7, 20, -3);
showSolutionsMessage (2, 4, 2);

//-----------task2-------------
let names = ["Родриго", "Эмильо"];

function getPersonData (secretData) {
  let originData = {
    firstName: names[secretData.aaa],
    lastName:  names[secretData.bbb]
  };  
  return originData;
};

console.log (getPersonData ({aaa: 0, bbb: 0}));
console.log (getPersonData ({aaa: 1, bbb: 0}));
console.log (getPersonData ({aaa: 0, bbb: 1}));
console.log (getPersonData ({aaa: 1, bbb: 1}));

//-----------task3-------------
//for_test
  let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    english: [4, 4, 3],
    chemistry: [2],
    music: [5, 5, 4, 5, 5],
    poetry: [4, 4, 3, 5, 3, 2]
  };

let averageStatistic = data;

  for (let prop in data) {
    let sumOfProp = 0;
      for (let i=0; i < data[prop].length; i++){
       sumOfProp += data[prop][i];
      }
      let averageOfProp = (sumOfProp / data[prop].length);
      averageStatistic[prop] = averageOfProp;
    console.log(`${prop}: ${averageStatistic[prop]}`);
    //...
  }
  //let averageSummary; 

function getAverageScore (data) {
  //...
  return averageStatistic;
};

