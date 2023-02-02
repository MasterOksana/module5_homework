
let num = prompt('Введите   число')  
if (typeof (+num) !== 'number') {
  alert('Упс, кажется, вы ошиблись')  
} else if (isNaN(+num)) {
  alert('Введено НЕ ЧИСЛО')   
} else if (num % 2 === 0) {
  alert('Число четное')   
} else {
  alert('число нечетное')   
}