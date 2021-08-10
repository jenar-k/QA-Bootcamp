// ===== Test awal ===== 

alert('test'); 




// ===== Cek Type Data =====

var namaVariable = '1234';
document.write(typeof(namaVariable) +'<br>');
var namaVariable = 1234;
document.write(typeof(namaVariable) +'<br>');
namaVariable = true;
document.write(typeof(namaVariable)+'<br>');




// ===== Prompt Pengisian Nama Pengunjung =====

var namaPengunjung = prompt('Silahkan masukkan nama: ',"dojober setia");
document.write('Hai ' + namaPengunjung + ', selamat datang di Dojobox.id' +'<br>');

var konfirmasi = confirm("Anda masih mau disini?");
var hasil = (konfirmasi==true)? "Iya donk" : "Gak deh"
document.write(hasil)




// ===== Logika IF dan ELSE =====

var angka = parseInt(prompt("masukkan Angka: "));

if(angka>10){
    document.write("bilangan tersebut lebih dari 10");
} else{
    document.write("bilangan tersebut kurang dari 10");
}




// ===== Logika IF dan ELSE 2 =====

var nama ='jenar'
var nama =prompt('masukkan nama Anda: ','nama pengunjung'));
if(nama=='jenar'){
    document.write('Seorang peserta');
} else {
    document.write('Jenar bukan peserta');
}




// ===== Logika IF dan ELSE 3 =====
 
var nilai = prompt('masukkan angka :');
if(nilai % 2 ==0){
    document.write(nilai + ' merupakan bilangan genap')
}else if(nilai % 2 ==1){
    document.write(nilai + ' merupakan bilangan ganjil')
}else{
    document.write(nilai + ' merupakan bukan bilangan')
}




// ===== Nilai Kepuasan (sudah dimodifikasi dari yang di present kemarin)=====

var nilaiKepuasan = parseInt(prompt("masukkan nilai kepuasan Anda",'0-100'));
switch(true){
    case (nilaiKepuasan >=100):
        document.write('masukkan angka yang sesuai')
        break
    case (nilaiKepuasan <=0):
        document.write('Angka tidak boleh kurang dari 0')
        break
    case (nilaiKepuasan >=90):
        document.write('Nilai Grade A')
        break
    case (nilaiKepuasan >=80):
        document.write('Nilai Grade B')
        break
    case (nilaiKepuasan >=70):
        document.write('Nilai Grade C')
        break
    case (nilaiKepuasan >=60):
        document.write('Nilai Grade D')
        break
    case (nilaiKepuasan <=50):
        document.write('Nilai Grade E')
        break
    default:
        document.write('Silahkan masukkan angka')
}



// ===== Hanya catatan 
//cara shotcut bikin comment ctrl+?
