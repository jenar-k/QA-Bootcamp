//Jenar K
// ===== Belajar Alert prompt dan document write =====

alert('selamat datang di kelas ini ...');
var nama = prompt('masukkan nama kamu : ');
document.write('Selamat datang Kak ' + nama + '<br>');
document.write('Silahkan belajar dengan penuh semangat ..!!' +'<br>');
document.write(5+5 +'<br>');



// ===== Belajar Alert prompt dan document write =====

document.write('Selamat datang Kak Jenar' +'<br>');
document.write('Silahkan belajar dengan penuh semangat ..!!' +'<br>');



// ===== Belajar Aritmatika 2 =====

var bil1 = parseInt(prompt('masukkan bilangan pertama'));
var bil2 = parseInt(prompt('masukkan bilangan kedua'));
var bil3 = bil1 + bil2;
document.write('Hasil Penjumlahan ' +bil3 +'<br>');



// ===== Belajar Aritmatika 2 =====

var bilangan1 = parseInt (prompt(' Bilangan pertama : ')); 
var bilangan2 = parseInt (prompt(' Bilangan kedua : '));
var jumlah = bilangan1 + bilangan2;
document.write('Bilangan pertama adalah ' +bilangan1 +'<br>');
document.write('Bilangan kedua adalah ' +bilangan2 +'<br>');
document.write('Hasil Jumlah adalah ' +jumlah +'<br>'); 



// ===== Belajar Bolean dan logika 1 =====

var bil1 = 20;
var bil2 = 20;
document.write('bilangan pertama adalah ' + bil1 +'<br>');
document.write('bilangan kedua adalah ' + bil2 +'<br>');
document.write(bil1 > bil2); //false
document.write('<br>');
document.write(bil1 < bil2); //true
document.write('<br>');
document.write(!(bil1 > bil2 || bil1 < bil2));



// ===== Belajar Bolean dan logika 2=====

var bilangan1 = parseInt (prompt('Masukkan Nilai Pertama: '));
var bilangan2 = parseInt (prompt('Masukkan Nilai Kedua: '));
document.write(bilangan1 > bilangan2);
document.write('<br>');
document.write(bilangan1 < bilangan2);
document.write('<br>');
document.write((bilangan1 > bilangan2 || bilangan1 < bilangan2));



// ===== Belajar Kondisional 1 =====

var nilai = 75;
var kelulusan = (nilai>70)? 'lulus' : 'remedial'
document.write(kelulusan);



// ===== Belajar Kondisional 2 =====

var nilai = parseInt (prompt('Nilai : '));
var lulus = (nilai>75)? 'lulus' : 'remedial'
document.write(lulus); 



// ===== Belajar Kondisional 3 =====

var bilangan1 = parseInt (prompt('Masukkan Nilai Pertama: '));
var bilangan2 = parseInt (prompt('Masukkan Nilai Kedua: '));
document.write(+ bilangan1 + ' > ' + bilangan2 + '<br>');
document.write(bilangan1 > bilangan2);
document.write('<br>');
document.write(bilangan1 < bilangan2);
document.write('<br>');
document.write((bilangan1 > bilangan2 || bilangan1 < bilangan2));


var konfirmasi = confirm('apakah Anda ingin mengakhiri kelas?');
document.write(konfirmasi + '<br>')



// ===== Hanya Note =====
/* 
pop up ada
alert = OK
promtp = String mengisikan nilai 
confirm = Yes No
 */