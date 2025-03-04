function sum(...numbers) {
    return numbers.reduce((o, n) => o + n)
}

const result = sum(1, 2, 3, 4, 10);
console.log(result)