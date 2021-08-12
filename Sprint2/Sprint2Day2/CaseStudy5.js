/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/


// fungsi hitung luas dengan function declaration

// tidak menggunakan nilai balik
// segiempat (sisi * sisi)
function luasSegiEmpat (sisi){
    var luas = sisi * sisi
    document.write('luas segi empat = ' + luas);
}


// Persegi panjang (panjang * lebar)
function luasPersegiPanjang(panjang,lebar){
    var luas = panjang * lebar
    document.write('luas persegi panjang = ' + luas);
}


// menggunaka nilai balik
// segitiga (0.5 * alas * tinggi)
function luasSegiTiga (alas,tinggi){
    luas = 0.5 * alas * tinggi
    return luas;
}


// lingkaran (3.14 * jari-jari ^2)
function luasLingkaran(jariJari){
    return 3.14 * jariJari ** 2;
}



// fungsi menghitung keliling dengan menggunakan function expression

// segiempat (sisi + sisi + sisi + sisi)
var kelilingSegiEmpat = function(sisi){
    // return sisi + sisi + sisi + sisi;
    return sisi * 4;
}

// Persegi panjang ( 2 * (panjang + lebar))
var kelilingPersegiPanjang = function (panjang,lebar){
    return 2 * (panjang + lebar);
}

// segitiga (alas + tinggi + sisimiring)
var kelilingSegiTiga = function(alas, tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}

// lingkaran (2 * 3.14 *jari-jari)
var kelilingLingkaran = function(jariJari){
    return 2 * 3.14 * jariJari;
}

