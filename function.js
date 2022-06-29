// =========== contoh dengan fungsi =========

// inisialisasi fungsi
function luasSegitiga(alas, tinggi) {
  let area = (alas * tinggi) / 2;
  console.log(area);
  return area;
}

// inisialisasi fungsi ke dua
let luasPersegi = function(panjang, lebar) {
  function check() {
    return "check";
  }
  console.log(check());
  let area = panjang * lebar;
  // console.log(area);
  return [area, "Hello"];
}

// arrow syntax
let funcArrow = (a, b) => {
  let total = a+b
  return a + b;
};

(a, b) => {
  return a + b;
};

console.log(funcArrow(2, 3));

// tidak bisa karena scope / namespace
// console.log(area);
// cara pertama
console.log(luasSegitiga(10, 15));
// cara ke dua
let areaSegitiga = luasSegitiga(12, 20);
let tambahLuas = luasSegitiga(8, 19) / areaSegitiga;
console.log(tambahLuas);

let [luas, str] = luasPersegi(90, 100);
console.log(luas);
console.log(str);

// ========== contoh tanpa fungsi ==========

let alas = 10;
let tinggi = 15;

let area = (alas * tinggi) / 2;

console.log(area);

let alas2 = 12;
let tinggi2 = 20;

let area2 = (alas2 * tinggi2) / 2;

console.log(area2);

let alas3 = 8;
let tinggi3 = 19;

let area3 = (alas3 * tinggi3) / 2;

console.log(area3);

let alas4 = 8;
let tinggi4 = 19;

let area4 = (alas4 * tinggi4) / 2;

console.log(area4);

let alas5 = 8;
let tinggi5 = 19;

let area5 = (alas5 * tinggi5) / 2;

console.log(area5);
