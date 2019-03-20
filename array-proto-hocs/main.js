function compareArrays( arr1, arr2 ) {
  //check elements in its indexes
  let diffElems = arr1.filter( i => arr2.indexOf( i ) < 0 )
    .concat( arr2.filter( i => arr1.indexOf( i ) < 0 ) );
    
  //check lengths of arrays
  let diffLength = arr1.length == arr2.length 
    && arr1.every( ( v,i ) => v === arr2[i] );

  //elements in arrays
  let diffVals = function () {
    let matchesCount = 0;
    for ( let i in arr2 ) {
      const _item = arr2[i];
      if ( !arr1.includes( _item ) ) {
        return 'разные значения';
      } else matchesCount++;
    }
    if ( matchesCount == arr2.length ) {
      return 'одинаковые значения';
    }
  }
  

  return diffVals;

}


console.log( compareArrays([8, 9], [6])); // false, разные значения
console.log( compareArrays([9, 2], [9])); // false, разные значения
console.log( compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log( compareArrays([8, 1, 2], [8, 1, 2])); // true
