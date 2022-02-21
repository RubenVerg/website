'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__($thiz, outer) {
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    $thiz.ju_HashMap$AbstractHashMapIterator__f_$outer = outer
  };
  $thiz.ju_HashMap$AbstractHashMapIterator__f_len = outer.ju_HashMap__f_java$util$HashMap$$table.u.length;
  return $thiz
}
export { $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__ as $ct_ju_HashMap$AbstractHashMapIterator__ju_HashMap__ };
/** @constructor */
function $c_ju_HashMap$AbstractHashMapIterator() {
  this.ju_HashMap$AbstractHashMapIterator__f_len = 0;
  this.ju_HashMap$AbstractHashMapIterator__f_nextIdx = 0;
  this.ju_HashMap$AbstractHashMapIterator__f_nextNode = null;
  this.ju_HashMap$AbstractHashMapIterator__f_lastNode = null;
  this.ju_HashMap$AbstractHashMapIterator__f_$outer = null
}
export { $c_ju_HashMap$AbstractHashMapIterator as $c_ju_HashMap$AbstractHashMapIterator };
$c_ju_HashMap$AbstractHashMapIterator.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_HashMap$AbstractHashMapIterator.prototype.constructor = $c_ju_HashMap$AbstractHashMapIterator;
/** @constructor */
function $h_ju_HashMap$AbstractHashMapIterator() {
  /*<skip>*/
}
export { $h_ju_HashMap$AbstractHashMapIterator as $h_ju_HashMap$AbstractHashMapIterator };
$h_ju_HashMap$AbstractHashMapIterator.prototype = $c_ju_HashMap$AbstractHashMapIterator.prototype;
$c_ju_HashMap$AbstractHashMapIterator.prototype.hasNext__Z = (function() {
  if ((this.ju_HashMap$AbstractHashMapIterator__f_nextNode !== null)) {
    return true
  } else {
    while ((this.ju_HashMap$AbstractHashMapIterator__f_nextIdx < this.ju_HashMap$AbstractHashMapIterator__f_len)) {
      var node = this.ju_HashMap$AbstractHashMapIterator__f_$outer.ju_HashMap__f_java$util$HashMap$$table.u[this.ju_HashMap$AbstractHashMapIterator__f_nextIdx];
      this.ju_HashMap$AbstractHashMapIterator__f_nextIdx = ((1 + this.ju_HashMap$AbstractHashMapIterator__f_nextIdx) | 0);
      if ((node !== null)) {
        this.ju_HashMap$AbstractHashMapIterator__f_nextNode = node;
        return true
      }
    };
    return false
  }
});
$c_ju_HashMap$AbstractHashMapIterator.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    throw $j_java$002elang$002eObject.$ct_ju_NoSuchElementException__T__(new $j_java$002elang$002eObject.$c_ju_NoSuchElementException(), "next on empty iterator")
  };
  var node = this.ju_HashMap$AbstractHashMapIterator__f_nextNode;
  this.ju_HashMap$AbstractHashMapIterator__f_lastNode = node;
  this.ju_HashMap$AbstractHashMapIterator__f_nextNode = node.ju_HashMap$Node__f_next;
  return node
});
$c_ju_HashMap$AbstractHashMapIterator.prototype.remove__V = (function() {
  var last = this.ju_HashMap$AbstractHashMapIterator__f_lastNode;
  if ((last === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalStateException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalStateException(), "next must be called at least once before remove")
  };
  this.ju_HashMap$AbstractHashMapIterator__f_$outer.removeNode__ju_HashMap$Node__V(last);
  this.ju_HashMap$AbstractHashMapIterator__f_lastNode = null
});
//# sourceMappingURL=java.util.HashMap$AbstractHashMapIterator.js.map
