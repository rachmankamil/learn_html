const pass = 30
let step = 0

function random() {
    return Math.ceil(Math.random()*10)
}

function snakeAndLadderGame(stepNow, seconds) {
    return new Promise((success, error)=>{
        setTimeout(()=>{
            console.log(`step ini membutuhkan ${seconds} detik untuk menyelesaikan\n`);
            console.log(`step ini mendapatkan ${stepNow} langkah`);
            console.log(`sehingga langkahnya bertambah dari ${step} menjadi ${step+stepNow}\n`);
            success(step += stepNow)
        }, seconds*1000)
    })
}

// await itu menunggu hingga promise mengembalikan nilai resolve. maka kejadian sesungguhnya sama dengan syncronise. tidak paralel seperti async
(async ()=>{
    let t0 = performance.now()
    console.log(t0);
    await snakeAndLadderGame(random(), random())
    await snakeAndLadderGame(random(), random())
    await snakeAndLadderGame(random(), random())
    await snakeAndLadderGame(random(), random())
    await snakeAndLadderGame(random(), random())
    let t1 = performance.now()
    console.log(t1-t0);
})()