const fs = require('fs');

const head = fs.readFileSync('home.html').toString().split('$$$$$')[0], tail = fs.readFileSync('home.html').toString().split('$$$$$')[1];

const nav = fs.readFileSync('nav.html').toString().split(/\$/)[0] + 'active' + fs.readFileSync('nav.html').toString().split(/\$/).slice(1).join('');

fs.writeFileSync('index.html', (head + nav + tail));