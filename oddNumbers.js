function evenNumbers(numbers) {
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 == 1) {
            console.log(index, element)
            oddNumber.push(element);
        }

    }
    return oddNumber;
}
const myNumbers = [12, 34, 45, 44, 65, 78];
const oddNumber = evenNumbers(myNumbers);
console.log(oddNumber)

