//  arguments & parameters

const speak = function(name = 'ali', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speak();
speak('omar','morning');