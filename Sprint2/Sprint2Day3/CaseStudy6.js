/* 

Buatlah sebuah fungsi dengan ketetuan  
1. Jika user menginputkan "mentor" maka mencetak isi array [Akhmad, Alif, Andika, Jojo] 
2. Jika user menginputkan "ta" maka mencetak isi array [Adib, Valen, Vista] 
3. Jika user menginputkan "Admin" maka mencetak isi array [Aura, Cahya]

*/

// menu untuk pilihan mentor. ta. admin
var menu = prompt('Silahkan pilih menu yang ingin dilihat datanya', 'mentor, ta, admin')
var dataMentor = ['Akhmad', 'Alif', 'Andika', 'Jojo'];
var dataTA = ['Adib', 'Valen', 'Vista'];
var dataAdmin = ['Aura','Cahya'];
    

if (menu == 'mentor'){
    alert('Anda telah memilih melihat data mentor');
    document.write('Data Mentor kelas Dojobox adalah : ' + '<br>')
    // tampil data mentor
    for(i=0;i<dataMentor.length;i++) {
            document.write(dataMentor[i] + '<br>')
    }
} else if (menu == 'ta'){
    alert('Anda telah memilih melihat data TA');
    document.write('Data TA kelas Dojobox adalah : ' + '<br>')
    // tampil data TA
    for(i=0;i<dataTA.length;i++) {
        document.write(dataTA[i] + '<br>')
    }
} else if (menu === 'admin'){
    alert('Anda telah memilih melihat data Admin');
    document.write('Data Admin kelas Dojobox adalah : ' + '<br>')
    // tampil data Admin
    for(i=0;i<dataAdmin.length;i++) {
        document.write(dataAdmin[i] + '<br>')
    }
} else {
    document.write ('Inputan Anda Salah')
}
