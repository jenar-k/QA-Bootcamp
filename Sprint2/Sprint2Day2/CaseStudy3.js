// function nilaiPeserta (nilai) {
//     /* 
//         Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
//         A = 80 - 100
//         B = 60 - 80
//         C = 40 - 60
//         D = 20 - 40
//         E = >20
//     */
// }

// var dataSiswa = [
//     ["Jojo", 55.5, nilaiPeserta(nilai)],
//     ["Andika", 70.1, nilaiPeserta(nilai)],
//     ["Alif", 19, nilaiPeserta(nilai)],
//     ["Vista", 102, nilaiPeserta(nilai)]
// ];

// //Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.


function nilaiPeserta (nilai) {
    var hasil;

    if ((nilai > 100) || (nilai < 0)){
        return 'Range nilai Anda tidak terdefinisikan'
    } else if ((nilai >=80) && (nilai <=100)){
        return ' mendapatkan grade nilai : A'
    } else if ((nilai >=60) && (nilai <79)){
        return 'mendapatkan grade nilai : B'
    } else if ((nilai >=40) && (nilai <59)){
        return 'mendapatkan grade nilai : C'
    } else if ((nilai >=20) && (nilai <39)){
        return 'mendapatkan grade nilai : D'
    } else if ((nilai <20)){
        return 'mendapatkan grade nilai : E'
    } else {
        return 'Tolong input hanya angka 0-100'
    }
    return hasil;
}

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)],
    ["Jenar", -10, nilaiPeserta(-10)]
];

for(i=0;i<dataSiswa.length;i++){
    document.write('Siswa atas nama ' + dataSiswa[i][0] + ' mendapatkan nilai ' +dataSiswa[i][1] + ' dan ' + dataSiswa[i][2] +'<br>')
}