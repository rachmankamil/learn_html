// algoritma prima ke X
// 1. looping sampai number
// 2. kita cek bilangan prima dari setiap number
// 3. output bilangan terakhir dari number

// algoritma cek bilangan prima
// 1. looping sebanyak bilPrima
// 2. cek jika bilPrima <= 1 maka akan return true
// 3. cek jika bilPrima % i == 0 maka factor + 1
// 4. kembalikan jika factor lebh dari 1 dengan status false
// 5. kembalikan jika faktor == 0 dengan status true


function checkPrima(bil) {
    if (bil <= 1) return false

    for (let i = 2; i < bil; i++){
        if (bil%i == 0) return false
    }
    
    return true
}

function checkPrimaX(iterate) {
    let i = 2
    let arr = []
    while (arr.length <= iterate) {
       if (checkPrima(i)) {
            arr.push(i)
       }
       i++
    }


    return arr[iterate-1]
}

// console.log(checkPrimaX(5));
// console.log(checkPrimaX(8));
// console.log(checkPrimaX(9));
// console.log(checkPrimaX(10));
// console.log(checkPrimaX(15));

function PrimaSquare(wide, high, start) {
    let i = start+1
    let sum = 0
    let str = ""
    let found = 0
    while (found < wide*high) {
       if (checkPrima(i)) {
            str += `${i} `
            sum += i
            found += 1
       }
       if (found % wide == 0) str += `\n`
       i++
    }
    console.log(str);
    return sum
}

console.log(PrimaSquare(2, 3, 13))

console.log(PrimaSquare(5, 2, 1))

// 1. LOOPING deret
// 2. looping pertambahan
// 3. cek maksimum data

function maxSeq(arr) {
    let max = 0
    for (let i = 0;i < arr.length; i++){
        let sum = 0
        for (let j = i; j < arr.length; j++){
            sum += arr[j]  
            if (max < sum) max = sum
        }
    }
    return max
}

console.log(maxSeq([-2,1,-3,4,-1, 2, 1, -5, 4]));
