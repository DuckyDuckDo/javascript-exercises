const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    let l = 0;
    let r = cleanString.length - 1;

    while (l < r){
        if (cleanString[l] != cleanString[r]){
            return false
        }
        l += 1;
        r -= 1;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
