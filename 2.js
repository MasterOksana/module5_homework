let num;
if ((typeof(num) == 'number')&&(!isNaN(num))) {
console.log("Число");
} else if (typeof(num) == 'string') {
console.log("Строка");
} else if (typeof(num) == 'boolean') {
console.log("Логический тип");
} else {
console.log("Тип x не определён");
}