console.log('JS Run');
// variant
function sumArr(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function sumAndMultiplicationArr(arr) {
    let summ = 0;
    let multiplication = 1
    arr.forEach(el => {
        summ += el;
        multiplication *= el;
    });
    console.log(`arr = [${arr.join(',')}]`);
    console.log('sum elements arr =', summ);
    console.log('multiplication elements arr =', multiplication);
}

const arrValues = [1, 2, 3, 4, 5, 6];

sumAndMultiplicationArr(arrValues);