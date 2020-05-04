/**
 * @returns {array}
 */
Array.prototype.prependAll = function (el) {
  return this.map(e => { return el + e });
}
Array.prototype.appendAll = function (el) {
  return this.map(e => { return e + el });
}

const fileMatchers = [''].prependAll('preview/').appendAll('/index.html');

const fs = require('fs');

fileMatchers.forEach(p => {
  let file = fs.readFileSync(p);
  file = file.toString().replace(/<!--\$-->/, '<!--$-->\n\t<div class="alert alert-warning">\n\t\tQuesta é la preview di ció che sará l\'esame!\n\t</div>\n\t<hr class="m-5">');
  fs.writeFileSync(p, file);
});

console.log('Done?', fileMatchers)