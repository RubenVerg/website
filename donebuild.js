console.log(`${Date.now()}|Starting done`);
const fs = require('fs'), chalk = require('chalk'), { join } = require('path');

const document = (new (require('jsdom')).JSDOM(``)).window.document;

const wrap = fs.readFileSync('donewrap.html').toString(), wrapParts = wrap.split('$');

const inp = (wrapParts[0] + 'Cose fatte' + wrapParts[1] + '$' + wrapParts[2]).split('$');

const specialIcons = {
  '-1': 'bi-x-circle-fill-danger-xl',
  '0': 'bi-slash-circle-fill-warning-xl',
  '1': 'bi-check-circle-fill-success-xl',
}

let calc = 0, total = 0;

const doneIn = fs.readFileSync(join('done', 'done.txt')).toString(),
  lines = doneIn.split(/\r?\n/).slice(1);

const totalTime = new Date('3 June 2020 23:59:59') - new Date('28 April 2020 00:00:01');
const passedTime = new Date(Date.now()) - new Date('28 April 2020 23:59:59');

// let out = document.createElement('div');
let out = document.createElement('table');
out.classList = 'table table-striped table-small table-sm';
let head = document.createElement('thead');
let name = document.createElement('th');
let icn = document.createElement('th');
let desc = document.createElement('th');
let pcnt = document.createElement('th');
head.classList = 'thead-light'
name.scope = 'col';
icn.scope = 'col';
desc.scope = 'col';
pcnt.scope = 'col';
name.textContent = 'Materia / Roba';
icn.textContent = 'Stato';
desc.textContent = 'Note';
pcnt.textContent = 'Percentuale ';
let ast = document.createElement('i');
ast.className = 'bi-asterisk-danger-sm';
pcnt.appendChild(ast);
head.appendChild(name);
head.appendChild(icn);
head.appendChild(pcnt);
head.appendChild(desc);
out.appendChild(head);
let body = document.createElement('tbody');
for (let mat of lines) {
  const materia = mat.split('|').map(i => { return i.trim() });
  console.log(`${Date.now()}|Starting line ${materia[0]}`);

  let tr = document.createElement('tr');
  let nameCol = document.createElement('th');
  let icnCol = document.createElement('td');
  let noteCol = document.createElement('td');
  let percCol = document.createElement('td');

  nameCol.textContent = materia[0][0].toUpperCase() + materia[0].substr(1).toLowerCase();
  nameCol.scope = 'row';

  let icon = document.createElement('i');
  let isIconASpecial = !(Object.is(NaN, parseInt(materia[1])));
  if (isIconASpecial) {
    icon.className = specialIcons[materia[1]];
  } else {
    icon.className = `bi-${materia[1]}-circle-fill-${materia[2]}-xl`;
  }
  icnCol.appendChild(icon);

  noteCol.innerHTML = materia[3] || '';

  let code = document.createElement('code');
  const defP = (function (type) {
    switch (type) {
      case '-1': return '0%'
      case '0': return '50%'
      case '1': return '100%'
      default: return '???%'
    }
  })(materia[1]);
  code.textContent = materia[4] || defP;
  percCol.appendChild(code);

  calc += parseInt(materia[4] || defP) * parseFloat(materia[5]);
  total += 100 * parseFloat(materia[5]);

  tr.appendChild(nameCol);
  tr.appendChild(icnCol);
  tr.appendChild(percCol);
  tr.appendChild(noteCol);

  body.appendChild(tr);
  console.log(`${Date.now()}|Line ${materia[0]} done\n`)
}

out.appendChild(body);

let progressWrap = document.createElement('div');
progressWrap.classList.add('progress');
progressWrap.classList.add('w-90');
progressWrap.classList.add('mx-auto');

let progress = document.createElement('div');
progress.classList.add('progress-bar');
progress.classList.add('progress-bar-striped');
progress.classList.add('progress-bar-animated');
progress.classList.add('bg-dprimary');
progress.style.width = ((calc / total * 100) - 50) * 2 + '%';
progress.textContent = '(50 + ) ' + (calc / total * 100) + '% delle cose (calibrato non molto bene)';
progress.dataset.toggle = 'tooltip';
progress.dataset.placement = 'top';
progress.title = `Su ${total} punti, fatti ${calc}.`
progressWrap.appendChild(progress);

let dayProgressWrap = document.createElement('div');
dayProgressWrap.classList.add('progress');
dayProgressWrap.classList.add('w-90');
dayProgressWrap.classList.add('mx-auto');

let dayProgress = document.createElement('div');
dayProgress.classList.add('progress-bar');
dayProgress.classList.add('progress-bar-striped');
dayProgress.classList.add('progress-bar-animated');
dayProgress.classList.add('bg-danger');
dayProgress.style.width = (((passedTime / 1000 / 60 / 60 / 24) / (totalTime / 1000 / 60 / 60 / 24) * 100) - 50) * 2 + '%';
dayProgress.textContent = '(50 + ) ' + (((passedTime / 1000 / 60 / 60 / 24) / (totalTime / 1000 / 60 / 60 / 24) * 100)) + '% del tempo (0-24!)';
dayProgressWrap.appendChild(dayProgress);

const timePercent = (passedTime / 1000 / 60 / 60 / 24) / (totalTime / 1000 / 60 / 60 / 24) * 100;
const donePercent = calc / total * 100;
const is = timePercent > donePercent;
const difference = Math.abs(timePercent - donePercent);

let manca = document.createElement('div');
manca.classList.add('progress-bar');
manca.classList.add('progress-bar-striped');
manca.classList.add('progress-bar-animated');
manca.classList.add(is ? 'bg-fatal' : 'bg-success');
manca.style.width = difference * 2 + '%';
manca.dataset.toggle = 'tooltip';
manca.dataset.placement = 'left';
manca.dataset.html = 'true';
manca.title = 'Sono ' + difference + '% ' + (is ? 'indietro' : 'avanti') + ' sulla <em>schedule</em> ' + ((d, i) => {
  if (i) {
    // All for being late
    if (d <= 5) return '😯';
    if (d <= 10) return '😟';
    if (d <= 25) return '😧';
    if (d <= 50) return '😨';
    /*  d <=100*/return '😱';
  } else {
    // All for being early
    if (d <= 5) return '😐';
    if (d <= 10) return '🙂';
    if (d <= 25) return '😄';
    if (d <= 50) return '😁';
    /*  d <=100*/return '🥱';
  }
})(difference, is);
manca.textContent = (is ? '-' : '') + difference + '%'
if (is) {
  progressWrap.appendChild(manca);
} else {
  dayProgressWrap.appendChild(manca);
}


fs.writeFileSync(join('done', 'index.html'), inp[0] + fs.readFileSync('nav.html') + out.outerHTML + '\n' + progressWrap.outerHTML + dayProgressWrap.outerHTML + inp[1]);

console.log(`${Date.now()}|Done done ${(passedTime / 1000 / 60 / 60 / 24) / (totalTime / 1000 / 60 / 60 / 24) * 100}% :)\n\n`);