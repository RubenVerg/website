// == Libraries ==

// -- FS and copy from fs-extra --
const fs = require('fs');
fs.copy = require('fs-extra').copy;

// -- Download Git repo --
const dl = require('download-git-repo');

// -- Chalk --
const __chalk = require('chalk');
const info = __chalk.hex('#00a6a5');
const warn = __chalk.hex('#ffb000');

// == Argument parsing ==

// -- Is the icons repo updated? (manual) --
const willDownload = process.argv[2] === 'true';

// -- How much am I going to log? --
const loggingLevel = +process.argv[3] || 0;

/**
 * @description Returns a logging function that logs only with the desired level.
 * @param {number} level Level to test for
 * @returns {(message: string) => void}
 */
const getLevel = level => {
	return function (message) {
		if (loggingLevel >= level) {
			console.log(message);
		}
	}
}

// -- Logging functions --
const level0 = getLevel(0);

const level1 = getLevel(1);

const level2 = getLevel(2);

// == Utility ==

let e;

// == Main ==

/**
 * @description The main function.
 * @param {Error|undefined} e Whether something has gone wrong.
 * @returns {void}
 */
function main(e) {
	if (e)
		throw e;

	/**
	 * @interface ISvgImage
	 */
	const ISvgImage = {
		name: "name",
		contents: "contents",
		categories: [
			"a",
			"b"
		]
	}

	/**
	 * @type {ISvgImage[]}
	 */
	let svgImages = [];

	let result = '//#region\n$icons: (';

	level2('@ readdir')
	fs.readdir('./bootstrap/icons/', (error, files) => {
		if (error)
			throw error;
		level0(info('Reading directory'));
		for (let svgFileName of files) {
			if (svgFileName.indexOf('.svg') === -1) {
				level0(warn(`File ${svgFileName} is not an SVG. Ignoring.`))
			} else {
				level2(`Formatting ${svgFileName}`);
				let contents = fs.readFileSync(`./bootstrap/icons/${svgFileName}`, { encoding: 'utf8' });
				level2('@ no double quotes');
				contents = contents.split(/"/).join(`'`);
				level2('@ no recursive classes');
				contents = contents.split(/ class=["']bi bi-[a-z\-]+["']/).join(``);
				level2('@ no newlines');
				contents = contents.split(/\r?\n */).join('');
				svgImages.push({
					name: svgFileName.split('.svg')[0],
					contents,
					categories: []
				});
			} // ~~ else ~~
		} // ~~ for ~~
		for (let svgImage of svgImages) {
			level2(`Adding ${svgImage.name} to the SCSS map`);
			result += `"${svgImage.name}": "data:image/svg+xml,${svgImage.contents}",`;
		} // ~~ for ~~
		result += ');\n//#endregion\n'
		result += fs.readFileSync('./bootstrap/iconpreset.scss');
		level0(info('Saving'))
		fs.writeFileSync('./bootstrap/scss/c_icons_2.scss', result);
	});
}

if (willDownload) {
	dl('twbs/icons', '_temp', {}, () => {
		copy('_temp/icons', 'bootstrap/icons', main);
	});
} else {
	main();
}