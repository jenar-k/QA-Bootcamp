var barangElektronik = ['monitor', 'tv', 'hp', 'ac', 'speaker'];
var namaBarang = prompt('Masukkan nama barang elektonik ' , 'monitor');
var jumlahBarang = parseInt(prompt('Quantity ' , 'Jumlah barang'));
var hargaBarang = parseInt(prompt('Harga satuan barang elektronik ' , 'harga satuan barang'));
var diskon = parseInt(prompt('diskon ' , 'diskon 0-100 tanpa persen'));
var hasilDiskon = hitungDiskon(diskon);
var total = totalHarga(hargaBarang, jumlahBarang, hasilDiskon);

function cekBarang(nama){
    for (let i = 0; i < barangElektronik.length; i++) {       
        if (nama === barangElektronik[i]) {
            return true;
        }else{
            return false;
        }
    }
}

var cek = cekBarang(namaBarang);
if (cek == true) {
    document.write('Nama Barang : ' + namaBarang + '<br>')
    document.write('Harga : Rp. ' + hargaBarang + '<br>')
    document.write('Jumlah : ' + jumlahBarang + '<br>')
    document.write('Discount ' + diskon + '%: Rp. ' + hasilDiskon + '<br>')
    document.write('Total : Rp. ' + total + '<br>')
} else {
    document.write('Maaf barang yang anda cari tidak tersedia')
}

function hitungDiskon(diskon) {
    return hargaBarang * jumlahBarang * (diskon / 100);
}

function totalHarga(harga, jumlah, diskon) {
    return (harga * jumlah) - diskon;
}