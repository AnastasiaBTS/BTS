let arrayGrades = [7, 8, 8.5, 9, 9.5, 10]
let sum = 0;

for (let i = 0; i < arrayGrades.length; i++) {
  sum += arrayGrades[i];
}

let average=sum/arrayGrades.length


let averageRounded=Math.floor(average)
console.log(averageRounded)

