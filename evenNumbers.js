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
const myNumbers = [12, 34, 45, 44, 65, 78];
const evenNumber= evenNumbers(myNumbers);
console.log(evenNumber)


