const Ora = require('ora'), sp = require('ora_spinners'), { exec } = require('child_process');
const { time } = require('console');

const spinner = new Ora({
	text: 'Compiling...',
	spinner: sp.slidingDots.seven2,
});

const start = Date.now();

spinner.start();

const timeCalc = c => {
	return Math.round((c - start) / 1000 * 100) / 100
}

exec('node build.js && node donebuild.js && node homebuild.js', (e, o) => {
	if (e) {
		spinner.stopAndPersist({
			text: 'Compiling failed!',
			spinner: sp.fail('slidingDots.seven2')
		});
		throw e;
	}
	spinner.stopAndPersist({
		text: `Compiling succeeded! ${timeCalc(Date.now())}s`,
		symbol: sp.succeed('slidingDots.seven2')
	});
	if (o) console.log(
		o
			.split(/\r?\n/)
			.map(i => i.split('|'))
			.map(i => {
				return [
					timeCalc(parseFloat(i[0])),
					i.slice(1).join('|')
				]
			})
			.map(i => {
				if (
					Object.is(NaN, i[0])
				) {
					return ['-------', '-'.repeat(15)]
				} else {
					return ['@ ' + i[0] + 's', i[1]]
				}
			})
			.map(i => `${i[0]}\t: ${i[1]}`)
			.join('\n')
	);
});