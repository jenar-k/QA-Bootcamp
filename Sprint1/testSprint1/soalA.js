/* Manual 
var rakBuku = [];
rakBuku = ['Buku 1','Buku 2','Buku 3','Buku 4','Buku 5']

//show all buku
// document.write(rakBuku);

//tambah rak dengan memuat 5 buku
document.write('Tambah Rak dengan 5 buku' + '<br>')
var rakBuku2 = [];
rakBuku2 = ['Buku 6','Buku 7','Buku 8','Buku 9','Buku 10']
document.write(rakBuku + '<br>' + rakBuku2)


//Pinjam Buku nomor 2 di rak1
document.write('<br>')
document.write('<br>')
document.write('Pinjam Buku nomor 2 di rak 1' + '<br>')
rakBuku.splice(1,1,'')
document.write(rakBuku.join('<br>'))


//kembali buku nomor 2 ke dalam rak
document.write('<br>')
document.write('<br>')
document.write('Kembalikan buku nomor 2 ke dalam rak 1' + '<br>')
rakBuku.splice(1,1,'Buku 2')
document.write(rakBuku.join('<br>'))


//ganti koleksi buku
document.write('<br>')
document.write('<br>')
document.write('Ganti koleksi buku nomor 2 dengan buku 11 ke dalam rak 1' + '<br>')
rakBuku.splice(1,1,'Buku 11')
document.write(rakBuku.join('<br>'))
 */



var rakBuku = ['Buku 1', 'Buku 2','Buku 3', 'Buku 4', 'Buku 5'];


var pinjam = parseInt(prompt('Pilih rak buku yang ingin dipinjam ', '0-4')) ;
pinjamBuku(pinjam)


var rakBukuKembali = parseInt(prompt('Pilih Rak Buku yang dikembalikan')) ;
var judulBukuKembali = prompt('Masukkan Judul Buku yang dikembalikan ke rak ');
kembalikanBuku(rakBukuKembali,judulBukuKembali)


document.write(rakBuku.join('<br>'))
function tambahJudulBuku(judul){
    for (let i = 0; i < rakBuku; i++) {
        rakBuku[i] = judul;
    }
}


function pinjamBuku(letakRakBuku){
    rakBuku[letakRakBuku] = 'undefined';
}


function kembalikanBuku(letakRakBuku, judul){
    return rakBuku[letakRakBuku] = judul;
}