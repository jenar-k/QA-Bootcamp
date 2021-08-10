/* 
// === Cara 1 ===
var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

var jumlah = x + y;
document.write('Hasil penjumlahan ' + x + ' + ' + y + ' adalah ' + jumlah +'<br>');

var kurang = x - y;
document.write('Hasil pengurangan ' + x + ' - ' + y +  ' adalah ' + kurang +'<br>');

var kali = x * y;
document.write('Hasil perkalian ' + x + ' x ' + y + ' adalah ' + kali +'<br>');

var bagi = x / y;
document.write('Hasil pembagian ' + x + ' : ' + y + ' adalah ' + bagi +'<br>');
 */





/* 
// === Cara 2 ===
var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.
let jumlah = function(x,y){
    return x+y;
}

let kurang = function(x,y){
    return x-y;
}

let kali = function(x,y){
    return x*y;
}

let bagi = function(x,y){
    return x/y;
}

document.write(`Hasil dari penjumlahan dari ${x} + ${y} = ${jumlah(x,y)} <br>`);
document.write(`Hasil dari pengurangan dari ${x} - ${y} = ${kurang(x,y)} <br>`);
document.write(`Hasil dari perkalian dari ${x} x ${y} = ${kali(x,y)} <br>`);
document.write(`Hasil dari pembagian ${x} / ${y} = ${bagi(x,y)} <br>`);

// =====
*/



var bil1 = parseInt(prompt('Masukkan nilai bilangan 1'));
var bil2 = parseInt(prompt('Masukkan nilai bilangan 2'));

function tambah(x,y){
    return x+y;
}

function kurang(x,y){
    return x-y;
}


var hasilPerkalian = function(x,y){
    return x*y;
}


var hasilBagi = function(x,y){
    return x/y;
}

function sisaHasilbagi(x,y){
    return x % y;
}


document.write('hasil penjumlahan adalah: ' + tambah(bil1,bil2) + '<br>');
document.write('hasil pengurangan adalah: ' + kurang(bil1,bil2) + '<br>');
document.write('hasil kali adalah: ' + hasilPerkalian(bil1,bil2) + '<br>');
document.write('hasil bagi adalah: ' + hasilBagi(bil1,bil2) + '<br>');
document.write('hasil modulus adalah: ' + sisaHasilbagi(bil1,bil2) + '<br>');


