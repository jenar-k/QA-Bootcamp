// A. MANIPULASI ELEMENT
/* 
// 1
// Manipulasi Element dengan Inner HTML
const h1 = document.getElementById('judul');
h1.innerHTML = 'Judul Ini Diubah Oleh Jenar';
// h1.innerHTML = '<em> Judul Ini Diubah Oleh Jenar </em>' // garis miring

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Isi Ini Diubah Oleh Jenar';
 */



/* 
// 2
// Manipulasi Element dengan Property CSS
const judul = document.querySelector('#judul');
judul.style.color = 'white'
judul.style.backgroundColor = 'Black'
 */



/* 
// 3
// Manipulasi Atribut
// Jika menggunakan ini maka alkan menimpa data yang sudah ada/ ganti
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'jenar'); // Tambah Atribut kedalam element
judul.getAttribute('id') // melihat atribut
judul.removeAttribute('id') // menghapus atribut
 */



// 4
// Modifikasi Attribut
// const p2 = document.getElementsByClassName('p2')
// const p2=document.querySelector('.p2');
// p2.classList.add('label');




/* 
// B. MANIPULASI NODE
// 1.
// Manipulasi node dengan Append Child --> simpan ke akhir dari elemen tersebut
// buat element baru
const pBaru = document.createElement('p'); //ibarat kata vas
const teksPBaru = document.createTextNode('Ini paragraf baru ya'); //ibarat kata bunga
// simpan tulisan kedalam paragraf atau rangkai
pBaru.appendChild(teksPBaru); //ibarat kata vas diisi bunga, panggil tempatnya dulu yaitu pBaru
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a'); // Tangkap elemennya //ibarat kata section A adalah ruang tamu
sectionA.appendChild(pBaru);




// 2.
// Manipulasi node dengan insert before
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode ('Ini item baru ya');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)') //sama saja tapi ini lebih panjang
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2) // panggil elemen parentnya dan simpan sebelum apa sebelum ul dengan node baru dan disimpan sebelum elemen apa





// 3.
// remove child ==> parentNode.removeChild()
// Misal remove link
// Harus tau perentnya dimana, dan elemen yang harus di remove
// section A sudah ada di const section A di line 54

const link = document.getElementsByTagName('a')[0]; // element yang ingin dihapus
sectionA.removeChild(link); //carikan saya section A lalu remove salah satu child didalamnya yaitu link



// 4.
// replace child ==> parentNode.replaceChild()
// langkah 1 tangkap parent
const sectionB = document.getElementById('b');
// langkah 2 tangkap element yang mau di replace
const p4 = sectionB.querySelector('p');
// langka 3 bikin elemen baru
const h2Baru = document.createElement('h2');
const teksH2baru = document.createTextNode('Ini Teks baru');
// langkah 4 rangkai elemen barunya dari node yang sudah dibikin
h2Baru.appendChild(teksH2baru);
// langkah 5 baru di replace



sectionB.replaceChild(h2Baru, p4); // ambil parent nya dl, lalu kita replace child menerima 2 parameter yaitu node baru akan mereplace node lama

 */









// === EVENTS ===
// Event Handler
/* 
// 1.
// On Click
// Cara 1
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}
// di html dikasih onclick = 'ubahWarnaP3()'


// Cara 2
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;




// addEventListener()
// 1
// Saat paragraf 4 di klik maka akan menambahkan list item baru
const p4 = document.querySelector('section#b p'); // tujuannya dimana (pilih parent atasnya)
p4.addEventListener('click', function(){ // tambah 2 parameter, pertama 'eventnya mau apa'
    // alert ('OK'); 
    const ul = document.querySelector('section#b ul'); // 1. tangkap dahulu parentnya yang mau kita tuju
    const liBaru =  document.createElement('li'); // 2. bikin elemen baru
    const teksLiBaru = document.createTextNode ('Ini Item baru'); // 3. bikin teks nya apa
    liBaru.appendChild(teksLiBaru); // 4. ini dirangkai dahulu nomor 2 dan 3 nya
    ul.appendChild(liBaru); // disimpan ke section b
}); 
 */





// Coba pakai Event handler
/* 
const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick = function () {
    p3.style.color = 'red';
}
 */


// Coba pakai Event Listener
/* 
const p3 = document.querySelector('.p3');
p3.addEventListener ('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener ('click', function(){
    p3.style.color = 'red';
});
 */




/* 
Metode penggunaan event adalah:
1. Tentukan element mana yang mau dikasih event atau seleksi
2. Pilih event nya mau apa
3. jalankan function nya
 */








/* 
// B. MANIPULASI NODE
// 1.
// Manipulasi node dengan Append Child --> simpan ke akhir dari elemen tersebut
// buat element baru
const pBaru = document.createElement('p'); //ibarat kata vas
const teksPBaru = document.createTextNode('Ini paragraf baru ya'); //ibarat kata bunga
// simpan tulisan kedalam paragraf atau rangkai
pBaru.appendChild(teksPBaru); //ibarat kata vas diisi bunga, panggil tempatnya dulu yaitu pBaru
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a'); // Tangkap elemennya //ibarat kata section A adalah ruang tamu
sectionA.appendChild(pBaru);



// 2.
// Manipulasi node dengan insert before
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode ('Insert Mas Andika lewat JS');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('section#b ul li:nth-child(2)') //sama saja tapi ini lebih panjang
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2) // panggil elemen parentnya dan simpan sebelum apa sebelum ul dengan node baru dan disimpan sebelum elemen apa



// 3.
// remove child ==> parentNode.removeChild()
// Misal remove link
// Harus tau perentnya dimana, dan elemen yang harus di remove
// section A sudah ada di const section A di line 54
const link = document.getElementsByTagName('a')[0]; // element yang ingin dihapus
// ini sudah ada, const sectionA = document.getElementById('a'); // define parentnya
sectionA.removeChild(link); //carikan saya section A lalu remove salah satu child didalamnya yaitu link



// 4.
// replace child ==> parentNode.replaceChild()
// langkah 1 tangkap parent
const sectionB = document.getElementById('b');
// langkah 2 tangkap element yang mau di replace
const p4 = sectionB.querySelector('p');
// langka 3 bikin elemen baru
const h2Baru = document.createElement('h2');
const teksH2baru = document.createTextNode('Ini Teks baru');
// langkah 4 rangkai elemen barunya dari node yang sudah dibikin
h2Baru.appendChild(teksH2baru);
// langkah 5 baru di replace

sectionB.replaceChild(h2Baru, p4); // ambil parent nya dl, lalu kita replace child menerima 2 parameter yaitu node baru akan mereplace node lama
 */


















/* 
const newParagraf = document.createElement('p');
const isiParagraf = document.createTextNode ('Paragraf baru ada disini');
newParagraf.appendChild(isiParagraf);
const sectionA = document.getElementById('a');
sectionA.appendChild(newParagraf);
 */


/* 
const removeLink = document.getElementsByTagName('a')[0];
const sectionA = document.getElementById('a');
sectionA.removeChild(removeLink);
 */




/* 
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const teksH2baru = document.createTextNode('INI TEKS H2');
h2.appendChild(teksH2baru);
sectionB.replaceChild(h2, p4);
 */


/* 
const sectionA = document.getElementById('a');
const p1 = sectionA.querySelector('p');
const h2 = document.createElement('h2');
const teksH2baru = document.createTextNode('INI TEKS H2');
h2.appendChild(teksH2baru);
sectionA.replaceChild(h2, p1);
 */


/* 
// Code mas JODY
const h2 = document.createElement('h2')
const tulisanBaru = document.createTextNode('Para Mentor')
h2.appendChild(tulisanBaru)
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
sectionB.replaceChild(h2,p4)
 */








// === EVENTS ===
// Event Handler
/* 
// 1.
// On Click
// Cara 1
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}
// di html dikasih onclick = 'ubahWarnaP3()'


// Cara 2
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;




// addEventListener()
// 1
// Saat paragraf 4 di klik maka akan menambahkan list item baru
const p4 = document.querySelector('section#b p'); // tujuannya dimana (pilih parent atasnya)
p4.addEventListener('click', function(){ // tambah 2 parameter, pertama 'eventnya mau apa'
    // alert ('OK'); 
    const ul = document.querySelector('section#b ul'); // 1. tangkap dahulu parentnya yang mau kita tuju
    const liBaru =  document.createElement('li'); // 2. bikin elemen baru
    const teksLiBaru = document.createTextNode ('Ini Item baru'); // 3. bikin teks nya apa
    liBaru.appendChild(teksLiBaru); // 4. ini dirangkai dahulu nomor 2 dan 3 nya
    ul.appendChild(liBaru); // disimpan ke section b
}); 
 */





// Coba pakai Event handler
/* 
const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.style.backgroundColor = 'lightblue';
}
p3.onclick = function () {
    p3.style.color = 'red';
}
 */


// Coba pakai Event Listener
/* 
const p3 = document.querySelector('.p3');
p3.addEventListener ('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener ('click', function(){
    p3.style.color = 'red';
});
 */




