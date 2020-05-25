const fs = require('fs'), chalk = require('chalk'), { join } = require('path');
const { table } = require('console');

const document = (new (require('jsdom')).JSDOM(``)).window.document;

const wrap = fs.readFileSync('donewrap.html').toString(), wrapParts = wrap.split('$');

const inp = (wrapParts[0] + 'Cose fatte' + wrapParts[1] + '$' + wrapParts[2]).split('$');

const iconNames = {
  '-1': ['bi-exclamation-circle-fill-danger-xl', ''],
  '0' : ['bi-slash-circle-fill-warning-xl', ''],
  '1' : ['bi-check-circle-fill-success-xl', ''],
}

const doneIn = fs.readFileSync(join('done', 'done.txt')).toString(),
  lines = doneIn.split(/\r?\n/);

// let out = document.createElement('div');
let out = document.createElement('table');
out.classList = 'table table-striped table-hover';
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
name.textContent = 'Materia';
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
  const materia = mat.split('|');
  // let pOut = document.createElement('h3');
  // let iconOut = document.createElement('i');
  // let iconWrap = document.createElement('span');
  // let textOut = document.createElement('span');
  // textOut.textContent = ' ' + materia[0][0].toUpperCase() + materia[0].substr(1).toLowerCase() + ' | Note: ' + (materia[2] || 'nessuna');
  // iconOut.className = iconNames[materia[1]][0] + ' ' + iconNames[materia[1]][1];
  // // iconWrap.className = iconNames[materia[1]][1];
  // iconWrap.appendChild(iconOut);
  // pOut.appendChild(iconWrap);
  // pOut.appendChild(textOut);
  // out.appendChild(pOut);

  let tr = document.createElement('tr');
  let nameCol = document.createElement('th');
  let icnCol = document.createElement('td');
  let noteCol = document.createElement('td');
  let percCol = document.createElement('td');

  nameCol.textContent = materia[0][0].toUpperCase() + materia[0].substr(1).toLowerCase();
  nameCol.scope = 'row';

  let icon = document.createElement('i');
  icon.className = iconNames[materia[1]][0] + ' ' + iconNames[materia[1]][1];
  icnCol.appendChild(icon);

  noteCol.textContent = materia[2] || '';

  let code = document.createElement('code');
  const defP = (function(type) {
    switch (type) {
      case '-1': return '0%'
      case '0': return '50%'
      case '1': return '100%'
    }
  })(materia[1]);
  code.textContent = materia[3] || defP;
  percCol.appendChild(code);

  tr.appendChild(nameCol);
  tr.appendChild(icnCol);
  tr.appendChild(percCol);
  tr.appendChild(noteCol);

  body.appendChild(tr);
}

out.appendChild(body);

fs.writeFileSync(join('done', 'index.html'), inp[0] + out.outerHTML + '<a href="/" class="btn btn-primary"><i class="bi-chevron-double-left"></i>Home</a>' + inp[1]);