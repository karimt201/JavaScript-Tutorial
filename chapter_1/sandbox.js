// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');

// content.classList.add('success');

const paras = document.querySelectorAll('p');

// console.log(paras);
paras.forEach(tag => {
    if (tag.innerText.includes('error')) {
        tag.classList.add('error');
    }if (tag.innerText.includes('success')) {
        tag.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
