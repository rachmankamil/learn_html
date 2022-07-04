// ================= full prima
// ini fungsi untuk cek bilangan prima
function checkPrima(bil) {
    if (bil <= 1) return false

    for (let i = 2; i < bil; i++){
        if (bil%i == 0) return false
    }
    
    return true
}

// di sini inputannya
let bilangan = 23

// di sini split jadi array
let arrBil = bilangan.toString().split("")

// di sini perulangan cek di setiap angka-nya
let prima = 0
for (let i = 0; i < arrBil.length; i++){
    prima += checkPrima(parseInt(arrBil[i]))
}

// di sini check bilangannya
prima += checkPrima(bilangan)

// di sini check apakah dia full prima atau tidak dan di print
if (prima == arrBil.length+1) {
    console.log("full prima")
} else {
    console.log("tidak full prima");
}


// ==================== drawXYZ ==================
function drawXYZ(high) {
    let print = ""
    for (let i = 1; i <= high*high; i++){
        let str = ""
        if (i%3==0) {
            str += "X "
        } else {
            if (i%2==0) {
                str += "Z "
            } else { 
                str += "Y "
            }
            break
        }

        if (i%high==0) str += "\n"
        print += str
    }

    console.log(print);
}

drawXYZ(5)


let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let pivot = 5 // banyaknya pergeseran huruf

// =================== cara statis - cara curang
let alphabetGeser = "FGHIJKLMNOPQRSTUVWXYZABCDE"
console.log(alphabetGeser[alphabet.indexOf("W")])

// ====================== tanpa array
// mencari index dari char
let newChar = (alphabet.indexOf("W")+pivot) % 26

console.log("W => ", alphabet[newChar]);


// ==================== geser huruf menggunakan array
let arrAlphabet = alphabet.split("")
// mencari index dari char
function checkIndex(value){
    return arrAlphabet.findIndex((x) => {return x==value})
}
newChar = (checkIndex("A")+pivot) % 26
console.log("A => ", arrAlphabet[newChar]);


// ================ ASCII code
let ascii = "Q".charCodeAt()
// find new ascii char
let newAscii = 0
let sisaPergeseran = ((ascii + pivot) % 91)
if (sisaPergeseran < 65) {newAscii = 65 + sisaPergeseran}
newChar = String.fromCharCode(newAscii)

console.log(`Q ${ascii} => ${newChar}`)


// string adalah array of char
let name = "RA CHMAN KAM IL"
let count = 0
for (let i = 0; i < name.length; i++){
    if (name[i] === " "){
        count++
        continue
    }
}
console.log(`${count} space found`);


// =================== cetak table perkalian

let input = 9
if (input < 1 || input > 30) {
    console.log(`invalid`);
} else {
    for (let x = 1; x <= input; x++){
        let row = ""
        for (let y = 1; y <= input; y++){
            row += `${x*y}\t`
        }
        console.log(row);
    }
}

// x   y   print

// 1   1   1 \t
// 1   2   2 \t
// 1   3   3 \t -> log

// 2   1   2
// 2   2   4
// 2   3   6

// 3   1   3
// 3   2   6
// 3   3   9

// decrement test commit
for (let r = input; r>=1; r--){
    let print = ""
    for (let sp = input-r; sp>=1; sp--){
        print += "."
    }
    for (let c = r; c>=1; c--){
        print += "# "
    }
    console.log(print);
}

// =============== MAX SUM ARRAY
function maxsum(arrayNumber, m) {
    let max = 0
    for (let i = 0; i < arrayNumber.length-m; i++) {
        let sum = 0
        for (let j = 0; j < m; j++) {
            sum += arrayNumber[i+j]
        }
        if (max < sum) max = sum
    }
    return max
}

console.log(maxsum([2, 3, 4, 1, 5], 2));

// yang terjadi di function
//array [2, 1, 5, 1, 3, 2] max 3 number
//2+1+5 = 8
//1+5+1 = 7
//5+1+3 = 9 < paling besar
//1+3+2 = 6 

//  0   1   2
//  1   2   3
//  2   3   4
//  3   4   5

//  max 0
//  i   j   value   sum
//  0   0   2       2
//  0   1   1       3
//  0   2   5       8
//  sum > max ? 8 > 0 ? ya, maka max = 8
//  1   0   1       1
//  1   1   5       6
//  1   2   1       7
//  sum > max ? 7 > 8 > tidak, maka max = 8
//  2   0   

// ======== love letter mistery
// abba
// a -> d ? 3
// 97 - 100 ? 0
// b -> c ? 1
// 98 - 99 ? 0

// 0+0 = 0 kalau 0 berarti palindrome
