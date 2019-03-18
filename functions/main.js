charset = "utf-8";
//-----------task1-------------
function getSolutions (a, b, c) {
let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return {D: D};
  } else if (D == 0) {
    return { roots: -b / (2 * a), D: D};
  } else {
    return {
      roots: [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)], 
      D: D
    }  
  }
}

function showSolutionsMessage (a, b, c){
  let result = getSolutions (a, b, c);
  
  console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log (`Значение дискриминанта: ${getSolutions(a, b, c).D}`);

  if (!result.roots) {
    console.log ("Уравнение не имеет вещественных корней\n");
  } else if (result.roots.length == 1) {
    console.log (`Уравнение имеет один }\n`);
  } else if (result.roots.length == 2) {
    console.log (`Уравнение имеет два , X₂ = ${result.roots[1]}\n`);
  }
}
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
}

console.log (getPersonData ({aaa: 0, bbb: 0}));
console.log (getPersonData ({aaa: 1, bbb: 0}));
console.log (getPersonData ({aaa: 0, bbb: 1}));
console.log (getPersonData ({aaa: 1, bbb: 1}));

//-----------task3-------------

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

  
function getAverageScore (data) {
  let _data = data;

  function average(args) {
    let counter = 0;
    for (let i = 0 ; i < args.length; i++) {
      counter += args[i];
    } 
    return counter / args.length;
  }
    
  function sum(obj) { 
    let counter = 0;
    for (let key in obj) {
      counter++;
    }
    return counter;
  }
  
    for (let key in _data) {
        _data[key] = average(_data[key]);     
    }
    
    _data.average = 0;
    for (let prop in _data) {
      _data.average += _data[prop];
    }
  _data.average = _data.average / sum(_data);
  return _data;
}

getAverageScore(data);