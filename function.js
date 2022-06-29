// =========== contoh dengan fungsi =========

function luasSegitiga(alas, tinggi) {
  let area = (alas * tinggi) / 2;
  // console.log(area);
  return area;
}

function luasPersegi(panjang, lebar) {
  function check() {
    return "check";
  }
  console.log(check());
  let area = panjang * lebar;
  // console.log(area);
  return [area, "Hello"];
}

let funcArrow = (a, b) => {
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
