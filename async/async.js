// =================== callback
let buyer = (message) => {
    console.log('pesan martabak dong? ', message);
}

let seller = function (callback) {
    setTimeout (() =>  {
        callback("Martabak sudah jadi")
    }, 3000)
}

console.log("tunggu sejenak.....");
seller(buyer)

// =============== promise
let promise = new Promise((resolve,reject) => {
    console.log("semoga bisa dapat hadiah");
    setTimeout(() => {
        resolve("selamat anda mendapatkan hadiah.")

    }, 6000)
    reject("test error")
})
console.log(promise)
promise.then((value) => { console.log(value)}).catch((err)=>{console.log(err);});


//========= async await
function promise2(){ 
    return new Promise((resolve, reject) => {
    console.log("semoga bisa dapat hadiah");
    setTimeout(() => {
        resolve("selamat anda mendapatkan hadiah.")

    }, 6000)
    // reject("test error")
})}

(async () => {
    let value = await promise2()

    console.log("hasil", value);
})();

((paramA) => {console.log(paramA);})("test Param A")