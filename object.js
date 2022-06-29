let obj = {};
let objConst = new Object();
objConst.name = "Kamil";
objConst.age = 29;
objConst.address = "Malang";
objConst.height = 175;
objConst.college = {
  name: "SMKN 4 Malang",
};

let person = objConst;
person.name2 = "Argian";

objConst.address = "Surabaya";
// let name = "Kamil"

// destructurisasi object
let {
  name: fName,
  address,
  college: { name: collegeName },
} = objConst;

// rest syntax (parameter)
let { name, ...person2 } = person;
person2.name = "Vian";

age = 50;
// realObject.college.name = "SMAN 1 Malang"

// console.log(fName, realObject);
console.log("person:", person);
console.log("person2:", person2);
console.log("objConst:", objConst);

let confero = {
  merk: "Wuling",
  penggerak: "Belakang",
  tangiBensin: 45,
  cruisecontrol: false,
  merk: "Toyota",
  mesin: {},
  // METHOD FUNCTION
  cekPenggunaanBensin: (jarakTempuh, jumlahBBM) => {
    return jarakTempuh/jumlahBBM
  },
  print: function(){console.log(this)}
};

let almas = {
  merk: "Wuling",
  penggerak: "Depan",
  tangiBensin: 60,
  cruisecontrol: true,
  mesin: {
    cc: 1500,
    turbo: true,
  },
};

confero.merk = "Wuling";
confero.topSpeed = 160;

confero["penggerak"] = "Depan";

console.log("before:", confero);

// delete properties
delete confero.topSpeed;
confero["penggerak"] = "";

console.log("after:", confero);

// jika properties tidak ada, hasilnya undefined
let valueNotFound = confero["topSpeed"];
console.log("topSpeed", valueNotFound);

// cek properties value type
let typeMesin = typeof confero.mesin;
console.log("tipeMesin", typeMesin);

console.log("keys : ", Object.keys(confero));
console.log("value : ", Object.values(confero));

//clone / copy
let formo = Object.assign({ name: "formo" }, almas, person);
// another way - spread syntax
let person3 = { ...person, ...almas };

formo.mesin.turbo = false;
formo.mesin.cc = 1300;
formo.penggerak = "Belakang";
console.log("formo : ", formo);

let wuling = {
  almas: almas,
  confero: confero,
  formo: formo,
  0: "nama",
  23.5: "text",
  true: true,
};

wuling["formo"]["tangiBensin"] = 65;
wuling["formo"]["mesin"]["powersteering"] = false;
wuling.confero.mesin.tpms = true;
console.log(wuling);

let nama = "kamil";
let nama2 = nama;
console.log("nama:", nama);
console.log("nama2:", nama2);
nama2 = "wahyu";
console.log("nama2-change:", nama2);

let wulingArr = [almas, formo, confero];

let almas2 = wulingArr[0];
almas2.merk = "Chevrolet";

wulingArr[0].height = 200;

console.table(wulingArr);

let gender = {
  0: "laki-laki",
  1: "perempuan",
};

console.log(gender);

console.log(confero.cekPenggunaanBensin(1000,10));

confero.print();

let counter = {
    iterate : 0,
    increment : function(){this.iterate++; console.log("++", this.iterate);},
    decrement : function(){this.iterate--; console.log("--",this.iterate);}
}

counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()

console.log(luasSegitiga(10,10));