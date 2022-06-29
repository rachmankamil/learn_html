let array1 = [];
let array2 = new Array();

let feBatch7 = [
  "Wahyu",
  "Farhan",
  "Evi",
  "Argian",
  90,
  false,
  { name: "Kamil" },
  ["Vian", "Ganjar", "Zak"],
];

console.log(feBatch7[5]);

feBatch7[2] = "Ikram";

feBatch7[6].name = "Rizal";
feBatch7[6].school = "SMA 4 Malang";
feBatch7[7][1] = "Mirzam";

// tidak di sarankan, karena akan jadi masalah
feBatch7[18] = "dayut";
// yang terbaik
let lenArr = feBatch7.push("Ghifari");

console.log("length : ", feBatch7.length);
console.log("value  : ", feBatch7);

console.table(feBatch7);

let element = feBatch7.pop();

console.log(element);

let result = feBatch7.unshift(50, { name: "oke" }, [89, 90, 45]);

console.log(feBatch7);

let baby = feBatch7.shift();

console.log(feBatch7);
// tidak di sarankan
delete feBatch7[0];

console.table(feBatch7);

//delete dari index ke berapa, terus berapa data yang di hapus
feBatch7.splice(10, 10);
// di tambahkan data di tengah-tengah
feBatch7.splice(5, 0, "Kamil", "Vian", 90);
feBatch7.push({ car: "Wuling" });

console.log("length:", feBatch7.length);

console.log(feBatch7);

// same as object, this is represent
let cpArray = feBatch7;

cpArray[0] = "are you an object?";

console.log(feBatch7);

//copy array
let cpArray2 = [...feBatch7];
cpArray2.push("this is a copy");

console.table(cpArray2);
console.table(feBatch7);

//slice array - motong-motong
let cpArray3 = cpArray2.slice(10, 12);

// default value
let index = cpArray3.push(function(a=10, b=15){
    return a-b
})
console.table(cpArray3);

console.log(cpArray3[index-1](10,5))

