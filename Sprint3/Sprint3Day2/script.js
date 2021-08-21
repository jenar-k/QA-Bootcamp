// DOM Selection
// getElementById()


// Get Element By ID
const nodeH1 = document.getElementById('judul');
nodeH1.style.color='red';
nodeH1.style.background='blue';
nodeH1.innerHTML='Kelas Bootcamp Dojobox';
nodeH1.style.fontFamily='Stencil';


const div = document.getElementById('container');
div.style.backgroundColor='lightblue';



// getElementsByTagName
// HTML Collection
const paragraph = document.getElementsByTagName('p');
for (let i=0; i < (paragraph.length-1); i++){
    paragraph[i].style.background = 'yellow';
}



const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize='30px';
//h1[0].style.fontSize='60px'



// document.query.selector
const p4 = document.querySelector('#b p'); // sectionnya mana, selectornya mana
p4.style.fontFamily = 'Arial';
p4.style.backgroundColor='grey';
p4.innerHTML = 'Mentor-mentor di Dojobox.id';

// const p = document.querySelector('p')

//merubah root
const sectionB = document.getElementById('b'); // penampung root
const p = sectionB.querySelector ('p');



// query selector All
const pP = document.querySelectorAll('p');
pP[2].innerHTML = 'Ini diubah dari JavaScript';



// dari class
const p2 = document.getElementsByClassName('p2');
p2[0].style.color='brown'



// Li
const li1 = document.getElementsByTagName('li');
li1[0].style.background = 'magenta';
li1[0].innerHTML = 'Jenar dari JavaScript';
li1[0].style.color='#fff020';


// Li Kedua dengan query selector --> element
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.background='orange';


// Li Ketiga dengan query selector --> element
const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.background='lightgreen';


/* 
// Mengubah root
const sectionB = document.getElementById('b') // penampung root Element di section b
const p = sectionB.querySelector ('p')
p.style.backgroundColor = 'black';

// atau

const sectionB = document.querySelector('section#b'); // penampung root
const p = sectionB.getElementsByTagName ('p')[0]; // HTML Collection perlakukan seperti array, ada index nya
p.style.backgroundColor = 'black';
 */










