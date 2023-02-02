function numArrayType(arr) {
    let arr1 = arr.map(e=>typeof e);
    return [...new Set(arr1)].length === 1;
  }

  function numArrayType1(arr) {
    return arr.every((e,i,a) => typeof e === typeof a[0]);  
  }

  console.log(numArrayType([1,2,3,4]));
  console.log(numArrayType1([1,2,3,4,'a']));