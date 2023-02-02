let arr = [165, 1, null, 'e', 'zero'];
let countEvennambers = 0;
let countOddnambers = 0;
let countOthernambers = 0;


for (let i = 0; i < arr.length; i++){
if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
countOthernambers++;
} else {
if (arr[i] % 2 === 0) {
countEvennambers++;
} else {
countOddnambers++;
}
}
}


console.log("Even is " + countEvennambers);
console.log("Odd is " + countOddnambers);
console.log("Other is " + countOthernambers);
