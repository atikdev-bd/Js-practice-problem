function factorial(numbers){
      let result = 1;
      for(let i = numbers; i >= 1; i--){
        result = result * i ;
        // console.log(i)
    }
    return result;

}
const number = 5;
const fact = factorial(number)
console.log(number, fact)
