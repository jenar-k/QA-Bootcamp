/* 
Note:
1. Nomer 1 sampai 5 menggunakan metode Event Handler
2. Nomer 6 sampai 10 menggunakan metode Event Listener
 */


// ===== ALERT =====
alert ('Hello, Jenar! \nIni adalah hasil pengerjaan Post Test Sprint 3.');





// ===== BUTTON SATU =====
// Button ini digunakan untuk merubah warna background semua paragraph (baik di section a,b, dan c)

const tombolButtonSatu = document.getElementById('buttonSatu');

function satu() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){ ==> hanya mengubah di p1, p2, p3, dan p
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.background = 'yellow';
    }
}

function satuBalik() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){ ==> hanya mengubah di p1, p2, p3, dan p
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.background = 'transparent';
    }
}

tombolButtonSatu.onclick = satu;
tombolButtonSatu.ondblclick = satuBalik;





// ===== BUTTON DUA =====
// Button ini digunakan untuk merubah warna background color dan warna text button "Dua"

const tombolButtonDua = document.getElementById('buttonDua');

function dua() {
    const ubah = document.getElementById('buttonDua');
    ubah.style.color='red';
    ubah.style.backgroundColor = 'blue';
}

function duaBalik() {
    const ubah = document.getElementById('buttonDua');
    ubah.style.color='black';
    ubah.style.backgroundColor = 'green';
}

tombolButtonDua.onclick = dua;
tombolButtonDua.ondblclick = duaBalik;





// ===== BUTTON TIGA =====
// Button ini digunakan untuk merubah font-family dan warna text semua paragraph (baik di section a,b, dan c)

const tombolButtonTiga = document.getElementById('buttonTiga');

function tiga() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){ ==> hanya mengubah di p1, p2, p3, dan p
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.fontFamily = 'algerian';
        paragraph[i].style.color = 'magenta';
    }
}

function tigaBalik() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){ ==> hanya mengubah di p1, p2, p3, dan p
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.fontFamily = 'sans-serif';
        paragraph[i].style.color = 'black';
    }
}

tombolButtonTiga.onclick = tiga;
tombolButtonTiga.ondblclick = tigaBalik;





// ===== BUTTON EMPAT =====
// Button ini digunakan untuk merubah font-size semua paragraph (baik di section a,b, dan c)

const tombolButtonEmpat = document.getElementById('buttonEmpat');

function empat() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.fontSize = '30px';
    }
}

function empatBalik() {
    const paragraph = document.getElementsByTagName('p');
    // for (let i=0; i < 4; i++){
    for (let i=0; i < paragraph.length; i++){
        paragraph[i].style.fontSize = '16px';
    }
}

tombolButtonEmpat.onclick = empat;
tombolButtonEmpat.ondblclick = empatBalik;





// ===== BUTTON LIMA =====
// Button ini digunakan untuk merubah container background-color

const tombolButtonLima = document.getElementById('buttonLima');

function lima() {
    const div = document.getElementById('container');
    div.style.backgroundColor = 'lightgrey';
}

function limaBalik() {
    const div = document.getElementById('container');
    div.style.backgroundColor = 'transparent';
}

tombolButtonLima.onclick = lima;
tombolButtonLima.ondblclick = limaBalik;





// ===== BUTTON ENAM =====
// Button ini digunakan untuk merubah tag "p" pada class p1 menjadi "h2"

const tombolButtonEnam = document.getElementById('buttonEnam');


tombolButtonEnam.addEventListener('click', function(){ // tambah 2 parameter, pertama 'eventnya mau apa'
    const sectionA = document.getElementById('a');
    const p1 = sectionA.querySelector('.p1');
    const h2 = document.createElement('h2');
    const teksH2baru = document.createTextNode('selamat datang di dojobox.id');
    h2.appendChild(teksH2baru);
    sectionA.replaceChild(h2, p1);
});





// ===== BUTTON TUJUH =====
// Button ini digunakan untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama

const tombolButtonTujuh = document.getElementById('buttonTujuh');

tombolButtonTujuh.addEventListener('click', function(){ 
    // Hapus mentor 1 (yaitu: JOJO)
    const hapusLi1 = document.getElementsByTagName('li')[0];
    const li1 = document.querySelector('section#b ul');
    li1.removeChild(hapusLi1);
    
    // Tambah satu nama mentor
    const ul = document.querySelector('section#b ul');
    const liBaru =  document.createElement('li');
    const teksLiBaru = document.createTextNode ('Jenar adalah mentor baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru); 
});





// ===== BUTTON DELAPAN =====
// Button ini digunakan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"

const tombolButtonDelapan = document.getElementById('buttonDelapan');

tombolButtonDelapan.addEventListener('click', function(){ 
    const h1 = document.getElementById('judul');
    h1.innerHTML = 'POST TEST By JENAR'
});





// ===== BUTTON SEMBILAN =====
// Button ini digunakan untuk menghapus link

const tombolButtonSembilan = document.getElementById('buttonSembilan');

tombolButtonSembilan.addEventListener('click', function(){ 
    const removeLink = document.getElementsByTagName('a')[0];
    const sectionA = document.getElementById('a');
    sectionA.removeChild(removeLink);
});





// ===== BUTTON SEPULUH =====
// Button ini digunakan untuk menambah link ke github masing masing

const tombolButtonSepuluh = document.getElementById('buttonSepuluh');

tombolButtonSepuluh.addEventListener('click',function(){
    const lokasiLink = document.querySelector('section#c ul li:nth-child(10)');
    const a = document.createElement('a');
    const textLinkNew = document.createTextNode('Akses Link Github Jenar');
    a.appendChild(textLinkNew);
    a.setAttribute('href','https://github.com/jenar-k/QA-Bootcamp/tree/main/Sprint3/PostTestSprint3');
    lokasiLink.appendChild(a);
});