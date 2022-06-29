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
}

cekNilai(40)
validasiUmur(umur)