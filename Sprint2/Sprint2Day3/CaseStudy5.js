/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/
//menu
// operation
// input dan output


// fungsi hitung luas dengan function declaration

// tidak menggunakan nilai balik
// segiempat (sisi * sisi)
function hitungLuasSegiEmpat (sisi){
    var luas = sisi * sisi
    return luas
}


// Persegi panjang (panjang * lebar)
function hitungLuasPersegiPanjang(panjang,lebar){
    var luas = panjang * lebar
    return luas
    }


// menggunaka nilai balik
// segitiga (0.5 * alas * tinggi)
function hitungLuasSegiTiga (alas,tinggi){
    luas = 0.5 * alas * tinggi
    return luas;
}


// lingkaran (3.14 * jari-jari ^2)
function hitungLuasLingkaran(jariJari){
    return 3.14 * jariJari ** 2;
}



// fungsi menghitung keliling dengan menggunakan function expression

// segiempat (sisi + sisi + sisi + sisi)
var hitungKelilingSegiEmpat = function(sisi){
    // return sisi + sisi + sisi + sisi;
    return sisi * 4;
}

// Persegi panjang ( 2 * (panjang + lebar))
var hitungKelilingPersegiPanjang = function (panjang,lebar){
    return 2 * (panjang + lebar);
}

// segitiga (alas + tinggi + sisimiring)
var hitungKelilingSegiTiga = function(alas, tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}

// lingkaran (2 * 3.14 *jari-jari)
var hitungKelilingLingkaran = function(jariJari){
    return 2 * 3.14 * jariJari;
}




// proses input dan outputnya disini

// luas
// luas persegi (1 variabel)
function luasPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi : '))
    var luas = hitungLuasSegiEmpat(persegi) // variabel penampung

    document.write('Luas persegi adalah : ' + luas);
}

// luas persegi panjang (2 variabel)
function luasPersegiPanjang(){
    var panjangPersegiPanjang = parseInt(prompt('Masukkan panjang persegi panjang : '))
    var lebarPersegiPanjang = parseInt(prompt('Masukkan lebar persegi panjang : '))
    var panjang1 = panjangPersegiPanjang
    var lebar1 = lebarPersegiPanjang
    var luas = hitungLuasPersegiPanjang(panjang1,lebar1) // variabel penampung

    document.write('Luas persegi panjang adalah : ' + luas);
}

// luas segitiga (2 variabel)
function luasSegitiga(){
    var alasSegitiga = parseInt(prompt('Masukkan alas segitiga : '))
    var tinggiSegitiga = parseInt(prompt('Masukkan tinggi segitiga : '))
    var alas1 = alasSegitiga
    var tinggi1 = tinggiSegitiga
    var luas = hitungLuasSegiTiga(alas1,tinggi1) // variabel penampung

    document.write('Luas segitiga adalah : ' + luas);
}

// luas lingkaran (1 variabel)
function luasLingkaran(){
    var lingkaran = parseInt(prompt('Masukkan jari-jari lingkran : '))
    var luas = hitungLuasLingkaran(lingkaran) // variabel penampung

    document.write('Luas lingkaran adalah : ' + luas);
}



// keliling
// keliling persegi (1 variabel)
function kelilingPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi : '));
    //var keliling = hitungKelilingSegiEmpat(persegi*4); // variabel penampung
    var keliling = persegi*4 // variabel penampung

    document.write('Keliling persegi adalah : ' + keliling);
}

// keliling persegi panjang (2 variabel)
function kelilingPersegiPanjang(){
    var panjangPersegiPanjang = parseInt(prompt('Masukkan panjang persegi panjang : '))
    var lebarPersegiPanjang = parseInt(prompt('Masukkan lebar persegi panjang : '))
    var panjang1 = panjangPersegiPanjang
    var lebar1 = lebarPersegiPanjang
    // var keliling = hitungKelilingPersegiPanjang(2*(panjang1+lebar1)) // variabel penampung
    var keliling = 2*(panjang1+lebar1) // variabel penampung

    document.write('Keliling persegi panjang adalah : ' + keliling);
}

// keliling segitiga (3 variabel)
function kelilingSegitiga(){
    var alasSegitiga = parseInt(prompt('Masukkan sisimiring 1 segitiga : '))
    var tinggiSegitiga = parseInt(prompt('Masukkan sisi miring 2 segitiga : '))
    var miringSegitiga = parseInt(prompt('Masukkan sisi miring 3 segitiga : '))
    var alas1 = alasSegitiga
    var tinggi1 = tinggiSegitiga
    var miring1 = miringSegitiga
    // var keliling = hitungKelilingSegiTiga(alas1+tinggi1+miring1) // variabel penampung
    var keliling = alas1+tinggi1+miring1 // variabel penampung

    document.write('Keliling segitiga adalah : ' + keliling);
}
// keliling lingkaran (1 variabel)
function kelilingLingkaran(){
    var lingkaran = parseInt(prompt('Masukkan jari-jari lingkran : '))
    // var keliling = hitungKelilingLingkaran(2*(3.14*lingkaran)) // variabel penampung
    var keliling = 2*(3.14*lingkaran) // variabel penampung

    document.write('Keliling lingkaran adalah : ' + keliling);
}



// menu
var menu = prompt('Silahkan pilih menu yang tersedia', '1 - luas , 2 - keliling')

if (menu ==1){
    // mengopersaikan luas
    alert('Anda telah memilih menu luas');
    var menuLuas = prompt('Masukkan bangun datar yang akan dihitung luasnya' , '1 - Persegi ; 2 - Persegi Panjang ; 3 - Segitiga; 4 - Lingkaran')
    
    if (menuLuas==1){
        // luas Persegi
        luasPersegi();

    } else if (menuLuas==2){
        // luas Persegi Panjang
        luasPersegiPanjang();

    } else if (menuLuas==3){
        // luas Segitiga
        luasSegitiga();

    } else if (menuLuas==4){
        //luas lingkaran
        luasLingkaran();
    }

} else if (menu==2){
    // mengoperasikan keliling
    alert('Anda telah memilih menu keliling');
    var menuKeliling = prompt('Masukkan bangun datar yang akan dihitung kelilingnya' , '1 - Persegi ; 2 - Persegi Panjang ; 3 - Segitiga; 4 - Lingkaran')

    if (menuKeliling==1){
        // keliling Persegi
        kelilingPersegi();

    } else if (menuKeliling==2){
        // keliling Persegi Panjang
        kelilingPersegiPanjang();

    } else if (menuKeliling==3){
        // keliling Segitiga
        kelilingSegitiga();

    } else if (menuKeliling==4){
        //keliling lingkaran
        kelilingLingkaran();
    }

} else {
    document.write('Menu yang Anda pilih tidak valid' + '<br>')
}
