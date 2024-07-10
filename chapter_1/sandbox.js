//  get a reference to the 'ul'

const ul = document.querySelector('.people');

let people = ['mario' ,'luigi' ,'ryu' ,'shaun' ,'shun-li' ];

let html = ``;

people.forEach(person => {
    html += `<li style="color: green">${person}</li>`;
});

console.log(html);
ul.innerHTML = html
