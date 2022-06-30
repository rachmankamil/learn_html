// ============Branching=============

let umur = new Date().getFullYear() - 1992

function validasiUmur(umur){
    // contitional normal
    if (umur < 18) {
        console.log("Anda belum berhak membeli ini .....", umur);
        umur += 5
        umur *= 10
        // nested if
        if (umur < 5) {
            console.log("dek, jangan jajan sendirian....");
        }
    } else {
        console.log("Anda tetap belum berhak membeli ini ......", umur);
    }

    // ternary / conditional operator `(kondisi ? ya : tidak)`
    let isKTP = false
    let withParrent = true
    return (umur>18 ? (isKTP ? "oke": "not oke") : (withParrent ? "oke" : "not oke"))
}

function cekNilai(nilai){
    // if ... else if ...
    if (nilai < 50) {
        console.log("Anda tidak lulus");
    } else if (nilai < 65) {
        console.log("Anda mendapatkan nilai pas");
    } else if (nilai < 85) {
        console.log("Anda mendapatkan nilai cukup");
    } else {
        console.log("Anda mendapatkan nilai bagus");
    }

    // switch ... case ...
    // jika pakai case perbandingan
    switch (true) {
        case nilai<50:
            console.log("Anda tidak lulus");
            break;
        case nilai<65:
            console.log("Anda mendapatkan nilai pas");
            break;
        case nilai<85:
            console.log("Anda mendapatkan nilai cukup");
            break;
        default:
            console.log("Anda mendapatkan nilai bagus");
            break;
    }

    // switch case dengan nilai pasti
    nilai = "A"
    switch (nilai) {
        case "A":
            console.log("Sangat Baik");
            break;
        case "B":
            console.log("Baik");
            break;
        case "C":
            console.log("Kurang");
            break;
        case "D":
            console.log("Baik");
            break;
        case "E":
            console.log("Baik");
            break;
        default:
            console.log("Tidak Lulus");
            break;
    }

}

cekNilai(40)
validasiUmur(umur)


// ============Loooping===========

function ganjilgenap(angka) {
    // normal
    // if (angka%2 == 0){
    //     return "genap";
    // } else {
    //     return "ganjil";
    // }

    // ternary
    return (angka%2==0?"genap":"ganjil")
}

let kumpulanAngka = [24,89,60,1,9]

// cara pertama
for (let i = 0; i < kumpulanAngka.length;){
    console.log(i, "\t", kumpulanAngka[i], "\t", ganjilgenap(kumpulanAngka[i]))
    i++
}

// cara kedua
let i = 0;
while (i < kumpulanAngka.length){
    console.log(i, "\t", kumpulanAngka[i], "\t", ganjilgenap(kumpulanAngka[i]))
    i++
}

let bilanganPrima = 81;
let factor = 0
i = 0
while (i < bilanganPrima){
    if (bilanganPrima%i==0){factor++;}
    if (i %2 == 0 ) continue;
    if (factor > 2) break;
    i++
}
if (factor > 2) {
    console.log("bukan bilangan prima");
} else {
    console.log("bilangan prima");
}

// i    bilangan    hasil   factor
// 0    11          11      0 
// 1    11          0       1
// 2    11          1       1
// 3    11          2
// 4    11          3
// 5    11          1
// ........

// i    bilangan    hasil   factor
// 0    10          10      0 
// 1    10          0       1
// 2    10          0       2
// 3    10          1       2
// 4    10          2       2
// 5    10          0       3
// ........

// i   kumpulanAngka   ganjil/genap
// 0   24              genap
// 1   89              ganjil
// 2   60              genap
// 3   1               ganjil
// 4   9               ganjil
// 5


// ============== looping object ===========

let objConst = new Object();
objConst.name = "Kamil";
objConst.age = 29;
objConst.address = "Malang";
objConst.height = 175;
objConst.hobby = ["coding","movies","driving"]
objConst.college = {
  name: "SMKN 4 Malang",  
};

for (const key in objConst) {
    console.log(`obj.${key} = ${objConst[key]}`);
}

// ============== looping array ===========

kumpulanAngka = [[24,89,67,90],[12,14,15],[123,90,1]]

// 24  89  67  90
// 12  14  15
// 123 90  1

// mendapatkan index
for (const key in kumpulanAngka) {
    console.log("key", key);
}

// mendapatkan value
for (const iterator of kumpulanAngka) {
    console.log("iterator", iterator);
}

// mendapatkan semua
kumpulanAngka.forEach((value, index) => {
    console.log("foreach",index, " => ", value);
});

objConst.hobby.forEach((value) => {
    console.log(value);
})

kumpulanAngka.forEach((value) => {
    value.forEach((value)=>{
        console.log(value);
    })
})
