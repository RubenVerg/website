'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $p_ju_AbstractRandomAccessListIterator__checkThatHasLast__V($thiz) {
  if (($thiz.ju_AbstractRandomAccessListIterator__f_last === (-1))) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalStateException__(new $j_java$002elang$002eObject.$c_jl_IllegalStateException())
  }
}
export { $p_ju_AbstractRandomAccessListIterator__checkThatHasLast__V as $p_ju_AbstractRandomAccessListIterator__checkThatHasLast__V };
function $ct_ju_AbstractRandomAccessListIterator__I__I__I__($thiz, i, start, end) {
  $thiz.ju_AbstractRandomAccessListIterator__f_i = i;
  $thiz.ju_AbstractRandomAccessListIterator__f_start = start;
  $thiz.ju_AbstractRandomAccessListIterator__f_end = end;
  $thiz.ju_AbstractRandomAccessListIterator__f_last = (-1);
  return $thiz
}
export { $ct_ju_AbstractRandomAccessListIterator__I__I__I__ as $ct_ju_AbstractRandomAccessListIterator__I__I__I__ };
/** @constructor */
function $c_ju_AbstractRandomAccessListIterator() {
  this.ju_AbstractRandomAccessListIterator__f_i = 0;
  this.ju_AbstractRandomAccessListIterator__f_start = 0;
  this.ju_AbstractRandomAccessListIterator__f_end = 0;
  this.ju_AbstractRandomAccessListIterator__f_last = 0
}
export { $c_ju_AbstractRandomAccessListIterator as $c_ju_AbstractRandomAccessListIterator };
$c_ju_AbstractRandomAccessListIterator.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_AbstractRandomAccessListIterator.prototype.constructor = $c_ju_AbstractRandomAccessListIterator;
/** @constructor */
function $h_ju_AbstractRandomAccessListIterator() {
  /*<skip>*/
}
export { $h_ju_AbstractRandomAccessListIterator as $h_ju_AbstractRandomAccessListIterator };
$h_ju_AbstractRandomAccessListIterator.prototype = $c_ju_AbstractRandomAccessListIterator.prototype;
$c_ju_AbstractRandomAccessListIterator.prototype.hasNext__Z = (function() {
  return (this.ju_AbstractRandomAccessListIterator__f_i < this.ju_AbstractRandomAccessListIterator__f_end)
});
$c_ju_AbstractRandomAccessListIterator.prototype.next__O = (function() {
  this.ju_AbstractRandomAccessListIterator__f_last = this.ju_AbstractRandomAccessListIterator__f_i;
  this.ju_AbstractRandomAccessListIterator__f_i = ((1 + this.ju_AbstractRandomAccessListIterator__f_i) | 0);
  return this.get__I__O(this.ju_AbstractRandomAccessListIterator__f_last)
});
$c_ju_AbstractRandomAccessListIterator.prototype.remove__V = (function() {
  $p_ju_AbstractRandomAccessListIterator__checkThatHasLast__V(this);
  this.remove__I__V(this.ju_AbstractRandomAccessListIterator__f_last);
  if ((this.ju_AbstractRandomAccessListIterator__f_last < this.ju_AbstractRandomAccessListIterator__f_i)) {
    this.ju_AbstractRandomAccessListIterator__f_i = (((-1) + this.ju_AbstractRandomAccessListIterator__f_i) | 0)
  };
  this.ju_AbstractRandomAccessListIterator__f_last = (-1);
  this.ju_AbstractRandomAccessListIterator__f_end = (((-1) + this.ju_AbstractRandomAccessListIterator__f_end) | 0)
});
//# sourceMappingURL=java.util.AbstractRandomAccessListIterator.js.map
