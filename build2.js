const Ora = require('ora'), sp = require('ora_spinners'), { exec } = require('child_process');

const spinner = new Ora({
  text: 'Compiling...',
  spinner: sp.slidingDots.seven2,
});

const start = Date.now();

spinner.start();


exec('node build.js && node donebuild.js && node homebuild.js', (e, o) => {
  if (e) {
    spinner.stopAndPersist({
      text: 'Compiling failed!',
      spinner: sp.fail('slidingDots.seven2')
    });
    throw e;
  }
  spinner.stopAndPersist({
    text: `Compiling succeeded! ${Math.round((Date.now() - start) / 1000 * 10) / 10} s`,
    symbol: sp.succeed('slidingDots.seven2')
  });
  if (o) console.log(o);
});