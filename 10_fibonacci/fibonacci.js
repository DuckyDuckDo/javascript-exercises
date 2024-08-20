const fibonacci = function(number) {
    let x = Number(number);
    if (x < 0){
        return 'OOPS'
    }

    if (x <= 1){
        return x
    }

    let first = 0
    let second = 1

    for (let i = 2; i <= x; i++){
        let tmp = second;
        second = first + second;
        first = tmp;
    }

    return second




};

// Do not edit below this line
module.exports = fibonacci;
