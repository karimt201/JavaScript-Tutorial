const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https//www.facebook.com');
link.innerText = 'the facebook website ....';
console.log(link.getAttribute('href'));


const para = document.querySelector('p');
console.log(para.getAttribute('class'));

para.setAttribute('class','success');
console.log(para.getAttribute('class'));

para.setAttribute('style','color:green;');
console.log(para.getAttribute('style'));

