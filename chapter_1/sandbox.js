// template strings
const title = 'best reads of 2019';
const author = 'mario';
const likes = 30;

// concattenation way
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';


// the blog called best reads of 2019 by mario has 30 likes

// template string way
let result = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
// the blog called best reads of 2019 by mario has 30 likes


// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span> this blog has ${likes} likes </span>
`;

console.log(html);