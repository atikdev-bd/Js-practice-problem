function celToFar(celsius){
let fahrenheit = (celsius * 9/5 )+ 32 ;
return fahrenheit;

}
let celsius = 33;
let fahrenheit= celToFar(celsius);
console.log(fahrenheit);

// function FarToCel(fahrenheit){
// const celsius = (fahrenheit - 32) * 5/9;
// return celsius;

// }

// let fahrenheit = 102;
// let celsius = FarToCel(fahrenheit);
// console.log('celsius:',celsius)