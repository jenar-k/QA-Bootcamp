//Soal 2
/* Terdapat 5 data nama berikut ini: 
    1. Budi 
    2. Adi 
    3. Gunawan 
    4. Joko 
    5. Bambang 
Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!".  
 */

var inputNama = prompt('Masukkan salah satu nama peserta: ', 'Budi, Adi, Gunawan, Joko, atau Bambang');
if((inputNama =='Budi') || (inputNama =='budi')){
    document.write('Anda Boleh Masuk Saudara Budi !')
}else if((inputNama =='Adi') || (inputNama =='adi')){
    document.write('Anda Boleh Masuk Saudara Adi !')
}else if((inputNama =='Gunawan') || (inputNama =='gunawan')){
    document.write('Anda Boleh Masuk Saudara Gunawan !')
}else if((inputNama =='Joko') || (inputNama =='joko')){
    document.write('Anda Boleh Masuk Saudara Joko!')
}else if((inputNama=='Bambang') || (inputNama =='bambang')){
    document.write('Anda Boleh Masuk Saudara Bambang !')
}else{
    document.write('Anda Tidak diperbolehkan Masuk !')
}

