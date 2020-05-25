const files = [
	"tecnologia",
	"letteratura",
	"geografia",
	"storia",
	"inglese",
	"musica",
	"arte",
	"scienze",
	"spagnolo"
];

const chalk = require('chalk')

const document = (new (require('jsdom')).JSDOM(``)).window.document;

const fs = require('fs'), path = require('path');

const outer = fs.readFileSync('wrap.html', 'utf-8'),
	outers = outer.split('$'),
	nav = fs.readFileSync('nav.html', 'utf-8'),
	navs = nav.split('$');

for (let dir of files) {
	try {
		const inner = fs.readFileSync(path.join(dir, 'main.html'), 'utf-8');
		const comment = inner.split('\n')[1].trim() + '\n' + inner.split('\n')[2].trim() + '\n' + inner.split('\n')[3].trim() + '\n' + inner.split('\n')[4].trim() + '\n' + inner.split('\n')[5].trim();
		const title = comment.split('\n')[0];
		const subtitle = comment.split('\n')[1];
		const html = comment.split('\n')[2];
		const pos = parseInt(comment.split('\n')[3]);
		let text = inner.split('\n');
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
			if (navs.indexOf(place) === 1 && isM) {
				navRes += 'active'
			}
			if (navs.indexOf(place) === pos) {
				navRes += 'active'
			}
		}
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
				default:
					break;
			}
		}
		// console.log(res);
		fs.writeFileSync(path.join(dir, 'index.html'), res);
	} catch {
		console.log(`Directory '${chalk.green(dir)}' or file '${chalk.green(path.join(dir, 'main.html'))}' does not exist.`)
	}
}