function getSumNumber(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
         sum = sum + element;
        // console.log(index,element, sum);
    }
    return sum;
}
const myNumbers = [12, 34, 45, 44, 65, 78];
getSumNumber(myNumbers);


function evenNumbers(numbers) {
    const evenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 == 0) {
            // console.log(index, element)
            evenNumber.push(element);
        }

    }
    return evenNumber;
}
const myNumber = [12, 34, 45, 44, 65, 78];
const evenNumber= evenNumbers(myNumber);
console.log(evenNumber)
const sumEvenNumber =getSumNumber(evenNumber)
console.log(sumEvenNumber)





