function factorial(i) {
    if (i == 1) {
        return i
    } else {
        return i * factorial(i-1)
    }
}
console.log(factorial(5));

// factorial(5)
// 5 * factorial(4)
//     4 * factorial(3)
//         3 * factorial(2)
//             2 * factorial(1)
//                 1



function power(base, pangkat){
    if(pangkat==0) return 1;
    return base * power(base, pangkat-1)
}

// power(2, 4)
// 2 * power(2, 3)
//     2 * power(2, 2)
//         2 * power(2, 1)
//             2 * power(2, 0)
//                 1
                
let arrayName = [9,7,1,0,-1,8]

for (let i = 0; i < arrayName.length; i++){
    let min = i
    for (let j = i; j < arrayName.length; j++){
        if (arrayName[min] > arrayName[j]){
            min = j
        }
    }
    [arrayName[i], arrayName[min]] = [arrayName[min], arrayName[i]]
}

console.log(arrayName);

arrayName = [4,7,8,10,11,21]
arrayName.sort(function(a, b){
    if (a < b){
        [a,b] = [b,a]
    }
})

arrayName = ["Wahyu","Gifari","Evi","Faisol"]
arrayName.sort()

console.log(arrayName);