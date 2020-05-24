const fs = require('fs');
const c = require('chalk');
const dl = require('download-git-repo');
const { copy } = require('fs-extra');

process.env.DEBUG_BSC = process.env.DEBUG_BSC || '1';

const logD = m => {
	if (process.env.DEBUG_BSC == '1' || process.env.DEBUG_BSC == '2') {
		console.log(m);
	}
}

const logDD = m => {
	if (process.env.DEBUG_BSC == '2') {
		console.log(m);
	}
}

let e;

logD(c.red('Downloading...'));
dl('twbs/icons', '_temp', {}, () => {
	logD(c.green('Copying...'));
	copy('_temp/icons', 'bootstrap/icons', e => {
		if (e) throw e;

		/**
		 * @interface SvgImage
		 */
		const SvgImage = { name: "hi", contents: "hello" }

		/**
		 * @type {SvgImage[]}
		 */
		let sass = [];
		let result = '', final = 'function icons() {';

		result += fs.readFileSync('bootstrap/iconpreset.js')

		//#region 
		// const spin = ora({
		// 	text: c.inverse("Starting"),
		// 	spinner: {
		// 		"interval": 80,
		// 		"frames": [
		// 			"▐⠂       ▌",
		// 			"▐⠈       ▌",
		// 			"▐ ⠂      ▌",
		// 			"▐ ⠠      ▌",
		// 			"▐  ⡀     ▌",
		// 			"▐  ⠠     ▌",
		// 			"▐   ⠂    ▌",
		// 			"▐   ⠈    ▌",
		// 			"▐    ⠂   ▌",
		// 			"▐    ⠠   ▌",
		// 			"▐     ⡀  ▌",
		// 			"▐     ⠠  ▌",
		// 			"▐      ⠂ ▌",
		// 			"▐      ⠈ ▌",
		// 			"▐       ⠂▌",
		// 			"▐       ⠠▌",
		// 			"▐       ⡀▌",
		// 			"▐      ⠠ ▌",
		// 			"▐      ⠂ ▌",
		// 			"▐     ⠈  ▌",
		// 			"▐     ⠂  ▌",
		// 			"▐    ⠠   ▌",
		// 			"▐    ⡀   ▌",
		// 			"▐   ⠠    ▌",
		// 			"▐   ⠂    ▌",
		// 			"▐  ⠈     ▌",
		// 			"▐  ⠂     ▌",
		// 			"▐ ⠠      ▌",
		// 			"▐ ⡀      ▌",
		// 			"▐⠠       ▌"
		// 		]
		// 	},
		// 	color: 'yellow'
		// });

		// spin.start();

		// (!) add
		//#endregion

		fs.readdir('./bootstrap/icons/', (e, files) => {
			if (e) throw e;
			logD(c.yellow('Reading directory and formatting SVGs...'));
			for (let file of files) {
				if (file.indexOf('svg') !== -1) {
					logDD(`Formatting ${file}`);
					for (let w = 1; w < 1e7; w++) { }
					let contents = fs.readFileSync(`./bootstrap/icons/${file}`, { encoding: 'utf8' });
					contents = contents.split(/"/).join(`'`);
					contents = contents.split(/ class=["']bi bi[a-z\-]+["']/).join(``);
					contents = contents.split(/\n */).join(``);
					sass.push({ name: file.split('.svg')[0], contents });
				}
			}
			for (let svg of sass) {
				logDD(`Adding ${svg.name} to JS`);
				result += `
const icon${svg.name.split('-').join('')}md = "data:image/svg+xml,${svg.contents.split(/1em/).join('0.75em')}";
const bi${svg.name.split('-').join('')} = () => {
	// @include icon-md($icon-${svg.name}-md);
	get('${svg.name}').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}md.split('currentColor').join($(this).css('color')));
	});
}

const bi${svg.name.split('-').join('')}md = () => {
	get('${svg.name}-md').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}md.split('currentColor').join($(this).css('color')));
	});
}

const icon${svg.name.split('-').join('')}xl = "data:image/svg+xml,${svg.contents.split(/1em/).join('1.5em')}";
const bi${svg.name.split('-').join('')}xl = () => {
	// @include icon-xl($icon-${svg.name}-xl);
	get('${svg.name}-xl').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}xl.split('currentColor').join($(this).css('color')));
	});
}

const icon${svg.name.split('-').join('')}lg = "data:image/svg+xml,${svg.contents.split(/1em/).join('1em')}";
const bi${svg.name.split('-').join('')}lg = () => {
	// @include icon-lg($icon-${svg.name}-lg);
	get('${svg.name}-lg').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}lg.split('currentColor').join($(this).css('color')));
	});
}

const icon${svg.name.split('-').join('')}sm = "data:image/svg+xml,${svg.contents.split(/1em/).join('0.5em')}";
const bi${svg.name.split('-').join('')}sm = () => {
	// @include icon-sm($icon-${svg.name}-sm);
	get('${svg.name}-sm').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}sm.split('currentColor').join($(this).css('color')));
	});
}

const icon${svg.name.split('-').join('')}xs = "data:image/svg+xml,${svg.contents.split(/1em/).join('0.25em')}";
const bi${svg.name.split('-').join('')}xs = () => {
	// @include icon-xs($icon-${svg.name}-xs);
	get('${svg.name}').each(function() {
		$(this).css('background-image', icon${svg.name.split('-').join('')}xs.split('currentColor').join($(this).css('color')));
	});
}

`;
				final += `
bi${svg.name.split('-').join('')}();
bi${svg.name.split('-').join('')}md();
bi${svg.name.split('-').join('')}xl();
bi${svg.name.split('-').join('')}lg();
bi${svg.name.split('-').join('')}sm();
bi${svg.name.split('-').join('')}xs();
`
			}
			final += `}; setInterval(icons, 3600000)`;
			logD(c.cyan('Saving file'));
			fs.writeFileSync('./bootstrap/dist/icons.js', result + '\n' + final);
			// console.log(result + '\n' + final);
		});
	});
});