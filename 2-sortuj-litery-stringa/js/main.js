console.log('JS Run');

function sortString(str) {
    const newStr = str.split('').sort().join('');
    return newStr
}

const value = 'Akademia108';
const newValue = sortString(value);

console.log(`Value = ${value}`);
console.log(`newValue = ${newValue}`);