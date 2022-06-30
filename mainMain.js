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
let pivot = 10

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
let newAscii = ((ascii + pivot) % 91)
if (newAscii < 65) {newAscii += 65}
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
