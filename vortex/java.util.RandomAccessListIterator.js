'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractRandomAccessListIterator from "./java.util.AbstractRandomAccessListIterator.js";
/** @constructor */
function $c_ju_RandomAccessListIterator(list, i, start, end) {
  this.ju_AbstractRandomAccessListIterator__f_i = 0;
  this.ju_AbstractRandomAccessListIterator__f_start = 0;
  this.ju_AbstractRandomAccessListIterator__f_end = 0;
  this.ju_AbstractRandomAccessListIterator__f_last = 0;
  this.ju_RandomAccessListIterator__f_list = null;
  this.ju_RandomAccessListIterator__f_list = list;
  $j_java$002eutil$002eAbstractRandomAccessListIterator.$ct_ju_AbstractRandomAccessListIterator__I__I__I__(this, i, start, end)
}
export { $c_ju_RandomAccessListIterator as $c_ju_RandomAccessListIterator };
$c_ju_RandomAccessListIterator.prototype = new $j_java$002eutil$002eAbstractRandomAccessListIterator.$h_ju_AbstractRandomAccessListIterator();
$c_ju_RandomAccessListIterator.prototype.constructor = $c_ju_RandomAccessListIterator;
/** @constructor */
function $h_ju_RandomAccessListIterator() {
  /*<skip>*/
}
export { $h_ju_RandomAccessListIterator as $h_ju_RandomAccessListIterator };
$h_ju_RandomAccessListIterator.prototype = $c_ju_RandomAccessListIterator.prototype;
$c_ju_RandomAccessListIterator.prototype.get__I__O = (function(index) {
  return this.ju_RandomAccessListIterator__f_list.get__I__O(index)
});
$c_ju_RandomAccessListIterator.prototype.remove__I__V = (function(index) {
  this.ju_RandomAccessListIterator__f_list.remove__I__O(index)
});
var $d_ju_RandomAccessListIterator = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_RandomAccessListIterator: 0
}, false, "java.util.RandomAccessListIterator", {
  ju_RandomAccessListIterator: 1,
  ju_AbstractRandomAccessListIterator: 1,
  O: 1,
  ju_ListIterator: 1,
  ju_Iterator: 1,
  ju_SizeChangeEvent: 1
});
export { $d_ju_RandomAccessListIterator as $d_ju_RandomAccessListIterator };
$c_ju_RandomAccessListIterator.prototype.$classData = $d_ju_RandomAccessListIterator;
//# sourceMappingURL=java.util.RandomAccessListIterator.js.map
