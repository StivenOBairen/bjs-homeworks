//-----------task1-------------
function getSolutions(a, b, c) {
var D = b ** 2 - 4 * a * c;

if (D < 0) {
  //console.log(`D: ${D}`);
	return {D: D};
} else if (D == 0) {
  let x1 = -b / (2 * a);
  //console.log(`D: ${D},\n x1: ${x1}`);
  return { roots: [x1], D: D};
} else {
  let x1 = (-b + Math.sqrt(D)) / (2 * a),
      x2 = (-b - Math.sqrt(D)) / (2 * a);

  console.log(`D: ${D},\n x1: ${x1}, x2: ${x2}`);    
  return { roots: [x1, x2], D: D};
}

}

function showSolutionsMessage( a, b, c){
  var result = getSolutions(a, b, c);
  
  console.log(`\nВычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${getSolutions(a, b, c).D}\n`);

  if (result == ) {
	  
  }
}
//

showSolutionsMessage(1, 2, 3); // undefined D
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//-----------task2-------------

//-----------task3-------------