// ini fungsi untuk cek bilangan prima
function checkPrima(bil) {
    let div = 0
    if (bil == 1) return 1
    for (let i = 1; i <= bil; i++){
        if (bil%i == 0) div++
        if (div > 2) break;
    }
    if (div == 2){
        return 0
    }
    return 1
}

// di sini inputannya
let bilangan = 11

// di sini split jadi array
let arrBil = bilangan.toString().split("")

// di sini perulangan cek di setiap angka-nya
let notPrima = 0
for (let i = 0; i < arrBil.length; i++){
    notPrima += checkPrima(parseInt(arrBil[i]))
}

// di sini check bilangannya
notPrima += checkPrima(bilangan)

// di sini check apakah dia full prima atau tidak dan di print
if (notPrima == 0) {
    console.log("full prima")
} else {
    console.log("tidak full prima");
}