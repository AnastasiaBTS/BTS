let arrayNumbers = [-5,-4,-3,-2,-1,1,2,3,4,5]

//for - loop
//index = 0 - start from first number
//index < arrayNumbers.length - not to go outside the array
//index++ - step loop
for (let index = 0; index < arrayNumbers.length; index++) {
    let elementOfArray=arrayNumbers[index]

    //elementOfArray - one of the numbers, not all the numbers
    if (elementOfArray > 0){
        //console.log - display
        console.log(elementOfArray);
    }
  }