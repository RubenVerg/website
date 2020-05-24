const fs = require('fs');
const c = require('chalk');
const dl = require('download-git-repo');
const { copy } = require('fs-extra');

const toDL = process.argv[2] === 'true';

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

let afterCopy = e => {
	if (e) throw e;

	/**
	 * @interface SvgImage
	 */
	const SvgImage = { name: "hi", contents: "hello" }

	/**
	 * @type {SvgImage[]}
	 */
	let sass = [];
	let result = '';

	result += fs.readFileSync('bootstrap/iconpreset.scss')

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

	fs.readdir('./bootstrap/icons/', (e, files) => {
		if (e) throw e;
		logD(c.yellow('Reading directory'));
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
			logDD(`Adding ${svg.name} to SCSS`);
			result += `
@each $sizename, $size in $icon-sizes {
	@each $themecol, $value in $theme-colors {
		.bi-${svg.name}-#{$themecol}#{$sizename} {
			@include icon(
				"data:image/svg+xml,${svg.contents}",
				$size,
				$value
			)
		}
	}
}`;
		}
		logD(c.cyan('Saving...'));
		fs.writeFileSync('./bootstrap/scss/c_icons.scss', result);
	});
}

if (toDL) {
	dl('twbs/icons', '_temp', {}, () => {
		copy('_temp/icons', 'bootstrap/icons', afterCopy);
	})
} else {
	afterCopy();
}