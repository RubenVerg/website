const fs = require('fs');
const c = require('chalk');
const dl = require('download-git-repo');
const { copy } = require('fs-extra');

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

dl('twbs/icons', '_temp', {}, () => {
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
$icon-${svg.name}-md: url("data:image/svg+xml,${svg.contents.split(/1em/).join('0.75em')}");
.bi-${svg.name}, .bi-${svg.name}-md {
  @include icon-md($icon-${svg.name}-md);
}

$icon-${svg.name}-xl: url("data:image/svg+xml,${svg.contents.split(/1em/).join('1.5em')}");
.bi-${svg.name}-xl {
  @include icon-xl($icon-${svg.name}-xl);
}

$icon-${svg.name}-lg: url("data:image/svg+xml,${svg.contents.split(/1em/).join('1em')}");
.bi-${svg.name}-lg {
  @include icon-lg($icon-${svg.name}-lg);
}

$icon-${svg.name}-sm: url("data:image/svg+xml,${svg.contents.split(/1em/).join('0.5em')}");
.bi-${svg.name}-sm {
  @include icon-sm($icon-${svg.name}-sm);
}

$icon-${svg.name}-xs: url("data:image/svg+xml,${svg.contents.split(/1em/).join('0.25em')}");
.bi-${svg.name}-xs {
	@include icon-xs($icon-${svg.name}-xs);
}

`;
			}
			logD(c.cyan('Saving file'));
			fs.writeFileSync('./bootstrap/scss/c_icons.scss', result);
		});
	});
});