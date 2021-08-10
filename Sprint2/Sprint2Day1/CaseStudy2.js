//function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
//}

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/


/* 
var inputanNilai = parseInt(prompt("Masukkan Nilai Anda : ", '0-100'));
function nilaiPeserta(nilai) {
  switch (true) {
    case (nilai >=80) && (nilai <100):
      document.write("Nilai Anda Grade : A");
      break;
    case (nilai >=60) && (nilai <79):
      document.write("Nilai Anda Grade : B");
      break;
    case (nilai >=40) && (nilai <59):
      document.write("Nilai Anda Grade : C");
      break;
    case (nilai >=20) && (nilai <39):
      document.write("Nilai Anda Grade : D");
      break;
    case (nilai <20):
      document.write("Nilai Anda Grade : E");
      break;
    default:
      document.write("Grade Anda tidak terdefiniskan");
  }
}
nilaiPeserta(inputanNilai);
 */


var inputanNilai = parseInt(prompt("Masukkan Nilai Anda : ", '0-100'));
function nilaiPeserta(nilai) {
  if ((nilai >=80) && (nilai <100)) {
    document.write("Nilai Anda Grade : A");
  } else if ((nilai >=60) && (nilai <79)) {
    document.write("Nilai Anda Grade : B")
  } else if ((nilai >=40) && (nilai <59)){
    document.write("Nilai Anda Grade : C");
  } else if ((nilai >=20) && (nilai <39)) {
    document.write("Nilai Anda Grade : D");
  } else if ((nilai <20)){
    document.write("Nilai Anda Grade : E");
  }
}
nilaiPeserta(inputanNilai);
