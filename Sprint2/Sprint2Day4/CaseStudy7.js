/* 
//Soal 1
Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
- apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
- apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

*/

// fungsi luas permukaan balok
/* 
function hitungLuasBalok (panjang,lebar,tinggi){
    return ((2 * (panjang * lebar)) + (2 * (tinggi * lebar)) + (2 * (panjang * tinggi)))
}

// fungsi volume balok
function hitungVolumeBalok (panjang,lebar,tinggi){
    return panjang * lebar * tinggi
}

var menu = prompt('Silahkan pilih menu yang tersedia', '1 - luas , 2 - volume')
if (menu==1){
    var panjangBalok = parseInt(prompt('Masukkan panjang Balok : '))
    var lebarBalok = parseInt(prompt('Masukkan lebar Balok : '))
    var tinggiBalok = parseInt(prompt('Masukkan tinggi Balok : '))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var luas = hitungLuasBalok(panjang1,lebar1,tinggi1) // variabel penampung

    document.write('Luas Balok adalah : ' + luas);
} else if (menu==2){
    var panjangBalok = parseInt(prompt('Masukkan panjang Balok : '))
    var lebarBalok = parseInt(prompt('Masukkan lebar Balok : '))
    var tinggiBalok = parseInt(prompt('Masukkan tinggi Balok : '))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var volume = hitungVolumeBalok(panjang1,lebar1,tinggi1) // variabel penampung

    document.write('Volume Balok adalah : ' + volume);
} else {
    document.write('Menu yang Anda pilih tidak valid' + '<br>')
}
 */


var menu = prompt('Masukkan perhitungan yang ingin dicari : ', '1 - luas, 2 - volume');
var panjangBalok = parseInt(prompt("Masukkan panjang balok : "));
var lebarBalok = parseInt(prompt("Masukkan lebar balok : "));
var tinggiBalok = parseInt(prompt("Masukkan tinggi balok : "));
var hasil = balok(menu, panjangBalok, lebarBalok, tinggiBalok);
document.write('Hasilnya adalah ' + hasil)

function balok(menu, panjang, lebar, tinggi) {
    var hasil
    if (menu == 1) {
        hasil = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
        return hasil;
    } else if (menu == 2) {
        hasil = panjang * lebar * tinggi
        return hasil;
    } else {
        return ("Inputan Anda salah")
    }
}


// Link review: https://forms.gle/HcnFkcQ19Akm19DT7
// dishare di grup teman-teman