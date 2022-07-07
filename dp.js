// FIBO
// 0, 1, 1, 2, 3, 5, 8, 13
// 1, 2, 3, 4, 5, 6, 7, 8

// 8 = 5 + 3 fibo ke 7
// 5 = 3 + 2 fibo ke 6
// 3 = 2 + 1 fibo ke 5
// 2 = 1 + 1 fibo ke 4

// kita simpulkan bahwa fibo 7 = fibo ke 6 + fibo ke 5
//                      fibo n = fibo n-1 + fibo n-2

//                      fibo 7 = ((fibo ke 5 + fibo ke 4) + fibo ke 5
//                      fibo 7 = (((fibo ke 4 + fibo ke 3) + (fibo ke 3 + fibo ke 2))) + (fibo ke 4 + fibo ke 3) 

// 13 = 8 + 5
// 13 = ((((1+1)+1)+(1+1)) + ((1+1)+1)) + (3+2)

// 8 = (3+2) + (2+1)
// 8 = ((2+1)+2) + (2+1)
// 8 = (((1+1)+1)+(1+1)) + ((1+1)+1)


// 11 23 22 24 33 25 44 26 ... ...

function fiboTabulation(idx) {
    let fib = [0,1]
    for (let index = 2; index <= idx; index++) {
        fib[index] = fib[index-1] + fib[index-2]
        fib.push(fib[index])
    }
    console.log(fib);
    return fib[idx]
}

function fiboMemoization(idx) {
    if (idx == 1 || idx == 2) {
        return 1
    } else if (idx == 3){
        return 2
    } else {
        return fiboMemoization(idx-1) + fiboMemoization(idx-2)
    }
}

// fibo10 = fibo9 + fibo8
//          (fibo8 + fibo7) + (fibo7 + fibo6)
//          ((fibo7 + fibo6)+(fibo6 + fibo5)) + ((fibo6 + fibo5) + fibo6)
// fibo3 = fibo2 + fibo1
console.log(fiboTabulation(100))
console.log(fiboMemoization(100))