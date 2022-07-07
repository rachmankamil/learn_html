// Bruteforce
function FindMinMax(arrNumber){
    let max = 0
    let min = 100000000

    arrNumber.forEach(key => {
        if (max < arrNumber[key]) max = arrNumber[key]
        if (min > arrNumber[key]) min = arrNumber[key]
    });

    return {min: min, max: max}
}

function coinChange(coin) {
    let coinValue = [10, 25, 5, 1]
    coinValue.sort((a,b)=>{return b-a})
    
    let coinIterate = 0;
    let result = [];
    while (coin > 0) {
        if (coin < coinValue[coinIterate]){
            coinIterate++
        } else {
            coin -= coinValue[coinIterate]
            result.push(coinValue[coinIterate])
        }
    }
    return result
}

console.log(coinChange(93));

function power(num, pow) {
    let result = 1
    for (let i = 1; i <= pow; i++){
        result *= num
    }
    result *= result
    return result
}

function powerBinary(num, pow) {
    if (pow == 0) return 1
    let result = 1
    while (pow > 0){
        if (pow%2 == 1){
            result *= num;
            pow--;
        }
        pow = pow/2 // pow >>= 1
        num *= num
    }
    return result
}

// 8421
// 1010
// 0101

// num     pow     result
// 2       10      1
// 4       5       1
// 16      2       4
// 256     1       1024
//         0

console.log(powerBinary(2, 10));
console.log(powerBinary(4, 5));


// 2^10 = (2^5)*(2^5)
//      = (2*2)^5
//      = 4^5


// 1. sort
// 2. looping cari yang sama

// -> sum -> 2
// -> asli -> 4   2   4   8   9   8   9   5   4
// -> sort -> 9   9   8   8   5   4   4   4   2
//                i   i+1

