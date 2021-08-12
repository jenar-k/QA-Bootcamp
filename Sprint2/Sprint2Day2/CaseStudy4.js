<<<<<<< HEAD
/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

var tinggiPria = parseInt(prompt('Masukkan tinggi pria', 'Masukkan dengan satuan cm'));
var tinggiWanita = parseInt(prompt('Masukkan tinggi wanita', 'Masukkan dengan satuan cm '));

function beratBadanPria(tinggiPriaDewasa) {
    var hasilBeratBadanPria = (tinggiPriaDewasa - 100) - ((tinggiPriaDewasa - 100) * (10/100));
    return hasilBeratBadanPria;
}

function beratBadanWanita(tinggiWanitaDewasa) {
    var hasilBeratBadanWanita = (tinggiWanitaDewasa - 100) - ((tinggiWanitaDewasa - 100) * (15/100));
    return hasilBeratBadanWanita;
    
}

document.write('Berat badan ideal pria untuk tinggi ' + tinggiPria + ' sentimeter adalah ' + beratBadanPria(tinggiPria) + ' kilogram' + '<br>');
=======
/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

var tinggiPria = parseInt(prompt('Masukkan tinggi pria', 'Masukkan dengan satuan cm'));
var tinggiWanita = parseInt(prompt('Masukkan tinggi wanita', 'Masukkan dengan satuan cm '));

function beratBadanPria(tinggiPriaDewasa) {
    var hasilBeratBadanPria = (tinggiPriaDewasa - 100) - ((tinggiPriaDewasa - 100) * (10/100));
    return hasilBeratBadanPria;
}

function beratBadanWanita(tinggiWanitaDewasa) {
    var hasilBeratBadanWanita = (tinggiWanitaDewasa - 100) - ((tinggiWanitaDewasa - 100) * (15/100));
    return hasilBeratBadanWanita;
    
}

document.write('Berat badan ideal pria untuk tinggi ' + tinggiPria + ' sentimeter adalah ' + beratBadanPria(tinggiPria) + ' kilogram' + '<br>');
>>>>>>> 8427c9ac357951e9a181c55658bfa067a075e2b4
document.write('Berat badan ideal wanita untuk tinggi ' + tinggiWanita + ' sentimeter adalah ' + beratBadanWanita(tinggiWanita) + ' kilogram' + '<br>');