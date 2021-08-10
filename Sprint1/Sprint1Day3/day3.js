
// ===== While =====

/* 
var ulang = 0;
while (ulang <= 10){
    document.write('Hallo, dojobers' + '<br>');
    ulang += 1; //sebagai counter
}
*/


/* 
var ulang = 0;
while (ulang < 10){
    document.write('Hallo, dojobers' + '<br>');
    ulang += 1; //sebagai counter atau berapa kali pengulangannya
}
 */


/* 
Array akan jalan terus hingga infinity
var ulang = confirm('ulang lagi?')
while (true){
    document.write('Hallo, dojobers' + '<br>');
    ulang += 1; //sebagai counter atau berapa kali pengulangannya
}
//console.log
 */


/* 
var ulang = 0;
while (ulang < 10){
    document.write('Hallo, dojobers' + '<br>');
    ulang += 1; //sebagai counter atau berapa kali pengulangannya
}
 */



// ===== FOR =====
// iterator biasanya di tulis i
// cara baca i dimulai dari 1 kurang dari 10, ++ naik
/* for (var iterator =1; iterator <=10; iterator ++){
    document.write('Hai, Dojobers semua' + '<br>')
}
 */



// ===== Tugas JENAR ====

/* 
var ulang = 1
while (ulang < 6){
    document.write('Nomor induk ' + ulang + ' adalah member TA Vista' + '<br>');
    ulang += 1; //sebagai counter atau berapa kali pengulangannya
}
for (var iterator =6; iterator <11; iterator ++){
    document.write('Nomor induk ' + iterator + ' adalah member TA Intan' + '<br>')
}
 */



// ===== Array =====
// contoh array

/*
//cara deklarasi array
var buah =[];
buah =['apel', 'belimbing', 'cempedak', 'duku', 'salak', 'pisang']

// document.write(typeof(buah)); tipe data

document.write(typeof(buah) + '<br>');
document.write(buah);
document.write('<br>');
document.write(buah.length); // melihat banyaknya data di array
document.write('<br>');
document.write(buah[4]); // melihat data ke n dimulai dari 0
document.write('<br>');

var iniAdalahFungsi = function(){
    alert('Hai, dojobers');
}

var myArr = ['teks', 1234, true, iniAdalahFungsi, [2,3,4]]
document.write('<br>');
document.write(myArr[4][1]); // melihat data array
 */



//cara menambah variable dengan variable kosong
/* 
var myArr2 = []
myArr2[0] = 'Senin';
myArr2[1] = 'Selasa';
myArr2[3] = 'Kamis';
 */
// karena index 2 dilompati, maka index 2 akan diisi empty



// Menghapus array secara manual
/* var myArr2 = []
myArr2[0] = 'Senin';
myArr2[1] = 'Selasa';
myArr2[3] = 'Kamis';
myArr2[3] = 'undefined'; // cara meghapus array
myArr2[2] = 'Rabu';
 */



// ===== Fungsi didalam Array =====
/* 
var buah =[];
buah =['apel', 'belimbing', 'cempedak', 'duku', 'salak', 'pisang']
 */


// 1. JOIN
// document.write(buah)
//document.write(buah.join('<br'))


// 2. Push dan pop
// bekerja di akhir element --> Keyword nya di AKHIR
// Push tambah element
/* buah.push('durian'); */
//document.write(buah.join('<br>'))


//3. Pop (Hapus Element)
/* buah.pop() */
//document.write(buah.join('<br>'))


//4. Unshift dan Shift
// 4A. Unshift 
// Unshift berfungsi untuk menambahkan array di AWAL element
/* buah.unshift('Jambu Merah'); */
// document.write(buah.join('<br>'))


// 5A. Shift
// Shift berfungsi untuk menghapus element aarray di AWAL element
/* buah.shift(); */
//document.write(buah.join('<br>'))


//4. Splice
// Splice (index awal, jmlhapus, elementbaru1. ...., elementbarun)
// menyisipkan array di tengah - tengah
/* 
buah.splice(2,0,'melon','anggur') //start index berapa, hapus gak, buah apa
document.write(buah.join('<br>'))
 */
/* buah.splice(2,1,'Jeruk','Semangka') //start index berapa, hapus gak index setelahnya, buah apa */
// document.write(buah.join('<br>'))


//5. SLice
// Slice memotong array dan membikin array baru
/* 
var newBuah = buah.slice(1,3) // N index mulai, N akhir atau tidak diikutkan
document.write(('<br>'))
document.write(('<br>'))
 */
// document.write(newBuah.join('<br>'))


// 6. FOR EACH dan MAP 
// Perulangan yang ada di dalam array
// 6A. Foreach
//foreach => tidak mengembalikan array

// FOR EACH
/* 
buah.forEach(function(e,i) {
    document.write(i + ' = ' + e + '<br>')
}
)
 */

/* 
document.write(('<br>'))
document.write(('<br>'))

buah.forEach(function(e,i) {
    document.write((i+1) + ' = ' + e + '<br>')
}
)
 */

// setiap index dan element yang ada di function buah lakukan perintah berikut


// 6B. MAP
// bedanya
// foreach => tidak mengembalikan array
// MAP => mengembalikan array / punya nilai balik
/* 
var buahBaru = buah.map(function(e,i){
    return e + ' enak dimakan'
}
)
document.write(('<br>'))
document.write(('<br>'))

document.write(buahBaru.join('<br>'))
 */




// ================================================================= //




// parameter adalah nilai yang kita gunakan dalam sebuah fungsi
// manggilnya pakai argument
// state adalah perintah

/* 
// function declaration
nama fungsi (parameter)
statement

return
 */



/* 
// function ekspresi
// ada penampung nilainya
var namafungsi = function (a,b){
    var total;
    total = a + b

    return total;
} 
*/

var sisiKubusA = parseInt(prompt('masukkan sisi kubus A: '));
var sisiKubusB = parseInt(prompt('masukkan sisi kubus B: '));

function volumeKubus (sisi) {
    volume = sisi * sisi * sisi;
    return volume;
}
var kubusA = volumeKubus (sisiKubusA);
var kubusB = volumeKubus (sisiKubusB);
var jumlahVolume = kubusA + kubusB

/* 
function jumlahVolumeKubus (a,b){
    var volumeA = a * a * a
    var volumeB = b * b * b
    totalVolumeKubus = volumeA + volumeB;
    return totalVolumeKubus;
}
//var totalVolumeKubusAB = jumlahVolumeKubus (totalVolumeKubus);
 */


document.write ('Sisi Kubus A : ' + sisiKubusA + '<br>');
document.write ('Sisi Kubus B : ' + sisiKubusB + '<br>');
document.write ('Volume Kubus A : ' + kubusA + '<br>');
document.write ('Volume Kubus B : ' + kubusB + '<br>');
document.write ('Jumlah Total Volume Kubus : ' + jumlahVolume + '<br>');








