const para = document.querySelector('p');
console.log(para.innerText);
para.innerText = 'hello spain';

const paras = document.querySelectorAll('p');

// paras.forEach(h =>{
//     console.log(h.innerText);
//     h.innerText += ' new text';
// });

const content = document.querySelector('.content');
// console.log(content.innerHTML);

content.innerHTML += '<h2>this is a new h2 </h2>';
console.log(content.innerHTML);

const people = ['mario','luigi','yoshi'];

people.forEach(person => {
    content.innerHTML += `<p> this is ${person}</p>`;
   
});