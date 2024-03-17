console.log('JS Run');

function revertString(str) {
    const revertstr = str.split('').reverse().join('');
    return revertstr;
}

const testValue = 'Akademia108';

const resultFunc = revertString(testValue);

console.log(resultFunc);
