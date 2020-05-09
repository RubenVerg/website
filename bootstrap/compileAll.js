const ora = require('ora');
const chalk = require('chalk');
const child = require('child_process');
const sps = require('ora_spinners');

const spinner = ora({
	text: '~~~',
	spinner: {
		interval: 80,
		frames: []
	}
});

let is = -1;

const randSpin = () => {
	// let a = [
	// 	"◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯",
	// 	"◉◯◯◯◯◯◯◯◯◯◯◯◯◯◯",
	// 	"◉◉◯◯◯◯◯◯◯◯◯◯◯◯◯",
	// 	"◉◉◉◯◯◯◯◯◯◯◯◯◯◯◯",
	// 	"◉◉◉◉◯◯◯◯◯◯◯◯◯◯◯",
	// 	"◉◉◉◉◉◯◯◯◯◯◯◯◯◯◯",
	// 	"◯◉◉◉◉◉◯◯◯◯◯◯◯◯◯",
	// 	"◯◯◉◉◉◉◉◯◯◯◯◯◯◯◯",
	// 	"◯◯◯◉◉◉◉◉◯◯◯◯◯◯◯",
	// 	"◯◯◯◯◉◉◉◉◉◯◯◯◯◯◯",
	// 	"◯◯◯◯◯◉◉◉◉◉◯◯◯◯◯",
	// 	"◯◯◯◯◯◯◉◉◉◉◉◯◯◯◯",
	// 	"◯◯◯◯◯◯◯◉◉◉◉◉◯◯◯",
	// 	"◯◯◯◯◯◯◯◯◉◉◉◉◉◯◯",
	// 	"◯◯◯◯◯◯◯◯◯◉◉◉◉◉◯",
	// 	"◯◯◯◯◯◯◯◯◯◯◉◉◉◉◉",
	// 	"◯◯◯◯◯◯◯◯◯◯◯◉◉◉◉",
	// 	"◯◯◯◯◯◯◯◯◯◯◯◯◉◉◉",
	// 	"◯◯◯◯◯◯◯◯◯◯◯◯◯◉◉",
	// 	"◯◯◯◯◯◯◯◯◯◯◯◯◯◯◉",
	// ];
	let a = sps.slidingDots.seven2.frames;
	is++
	return (is % 2 === 0) ? a : a.reverse();
}

const calcSpin = () => {
	spinner.spinner.frames = randSpin();
}

const done = (w) => {
	spinner.stopAndPersist({
		text: chalk.greenBright(w),
		symbol: sps.succeed('slidingDots.seven2'),
	});
}

const act = (w) => {
	calcSpin();
	spinner.start(w);
}

calcSpin();

spinner.start();

spinner.text = 'Starting up...';
spinner.color = 'yellowBright';

// console.log(process.env.A);

// ---

spinner.text = 'Compiling Bootstrap...';

child.exec('sass bootstrap\\scss\\c_bootstrap.scss bootstrap\\dist\\bootstrap.css', e => {
	if (e) throw e;
	done('Bootstrap compiled!');
	act('Building icons...');
	child.exec(`cross-env-shell DEBUG_BSC=${process.env.DEBUG_BSC} node bootstrap\\icons\\norm.js`, (e,o) => {
		if (e) throw e;
		if (o) o = o.split(/\n/);
		if (o) o.pop();
		if (o) {spinner.stop(); console.log('\nmsg @ icons: ' + o.join('\nmsg @ icons: ') + '\n'); act('Building icons...');};
		done('Icons built!');
		if (o) calcSpin();
		act('Compiling icons...');
		child.exec('sass bootstrap\\scss\\c_icons.scss bootstrap\\dist\\icons.css', e => {
			if (e) throw e;
			done('Icons compiled!');
			act('Compiling other Bootstrap files...');
			spinner.text = 'Compiling other Bootstrap files...Reboot';
			child.exec('sass bootstrap\\scss\\c_reboot.scss bootstrap\\dist\\reboot.css', e => {
				if (e) throw e;
				calcSpin();
				spinner.text = 'Compiling other Bootstrap files...Grid';
				child.exec('sass bootstrap\\scss\\c_grid.scss bootstrap\\dist\\grid.css', e => {
					if (e) throw e;
					done('Other Bootstrap files compiled!');
					act('Finalizing...');
					spinner.stopAndPersist({
						text: chalk.cyanBright('Done!'),
						symbol: sps.info('slidingDots.seven2'),
					});
				})
			})
		});
	})
})