console.log(`${Date.now()}|Starting\n\n\n`);
console.log(`${Date.now()}|Starting 'normal' pages`);

const files = [
	"tecnologia",
	"letteratura",
	"geografia",
	"storia",
	"inglese",
	"musica",
	"arte",
	"scienze",
	"spagnolo",
	"matematica",
	"fonti",
	"introduzione",
	"conclusione",
];

const cardFiles = [
	'tecnologia',
	'letteratura',
	'geografia',
	'storia',
	'inglese',
	'musica',
	'arte',
	'scienze',
	'spagnolo',
	'matematica'
]

const chalk = require('chalk')

const document = (new (require('jsdom')).JSDOM(``)).window.document;

const fs = require('fs'), path = require('path');

let cardResult = '';

const outer = fs.readFileSync('wrap.html', 'utf-8'),
	outers = outer.split('$'),
	nav = fs.readFileSync('nav.html', 'utf-8'),
	navs = nav.split('$');

for (let dir of files) {
	console.log(`${Date.now()}|File ${dir} started`);
	try {
		const inner = fs.readFileSync(path.join(dir, 'main.html'), 'utf-8');
		const comment = inner.split('\n')[1].trim() + '\n' + inner.split('\n')[2].trim() + '\n' + inner.split('\n')[3].trim() + '\n' + inner.split('\n')[4].trim() + '\n' + inner.split('\n')[5].trim() + '\n' + inner.split('\n')[6].trim() + '\n' + inner.split('\n')[7].trim() + '\n' + inner.split('\n')[8].trim();
		const title = comment.split('\n')[0];
		const subtitle = comment.split('\n')[1];
		const html = comment.split('\n')[2];
		const pos = parseInt(comment.split('\n')[3]);
		const image$ = comment.split('\n')[5];
		const before = comment.split('\n')[6];
		const after = comment.split('\n')[7];
		let text = inner.split('\n');
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text.shift();
		text = text.join('\n');
		const isM = Boolean(parseInt(comment.split('\n')[4]));
		const titleWrapper = document.createElement('h1');
		titleWrapper.textContent = title;
		const subtitleWrapper = subtitle ? document.createElement('h2') : undefined;
		if (subtitleWrapper) subtitleWrapper.classList.add('text-muted');
		if (subtitleWrapper) subtitleWrapper.textContent = subtitle;
		let navRes = ''
		for (let place of navs) {
			// 14 loops.
			navRes += place;
			if (navs.indexOf(place) === 2 && isM) {
				navRes += 'active'
			}
			if (navs.indexOf(place) === pos) {
				navRes += 'active'
			}
		}

		let buttonRes = document.createElement('div');
		// buttonRes.classList.add('d-flex', 'justify-content-between');

		let bwd = document.createElement('a');
		bwd.classList.add('btn', 'btn-outline-dark', 'float-left', 'clearfix');
		bwd.innerHTML = `<img src='https://files.rubenverg.com/bootstrap/icons/chevron-left.svg'> ${before[0].toUpperCase() + [...before].slice(1).join('')}`;
		bwd.href = `/${before}`;
		buttonRes.appendChild(bwd);

		let fwd = document.createElement('a');
		fwd.classList.add('btn', 'btn-primary', 'btn-lg', 'float-right', 'clearfix');
		fwd.innerHTML = `${after[0].toUpperCase() + [...after].slice(1).join('')} <img src='https://files.rubenverg.com/bootstrap/icons/chevron-double-right.svg'>`;
		fwd.href = `/${after}`;
		buttonRes.appendChild(fwd);

		// console.log(navRes);
		let res = ''
		for (let place of outers) {
			res += place;
			const i = outers.indexOf(place);
			switch (i) {
				case 0:
					res += html;
					break;
				case 1:
					res += navRes;
					break;
				case 2:
					res += titleWrapper.outerHTML;
					break;
				case 3:
					if (subtitleWrapper) res += subtitleWrapper.outerHTML;
					break;
				case 4:
					res += text;
					break;
				case 5:
					res += buttonRes.outerHTML;
					break;
				default:
					break;
			}
		}
		if (cardFiles.indexOf(dir) !== -1)
			cardResult += `\n${dir}\t${image$ || ''}\t${image$.trim() === '' ? 0 : 1}\t${title}\t${subtitle}\t${subtitle.trim() === '' ? 0 : 1}`;

		// console.log(res);
		fs.writeFileSync(path.join(dir, 'index.html'), res);
		console.log(`${Date.now()}|File ${dir} done\n`);
	} catch {
		console.log(`${Date.now()}|Directory ${dir} or file ${path.join(dir, 'main.html')} do not exist, skipping`)
	}
}
fs.writeFileSync('cards.txt', cardResult);
console.log(`${Date.now()}|'Normal" done\n\n`);