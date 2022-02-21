'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.s_Product$$anon$1__f_$outer = outer
  };
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = outer.productArity__I()
}
export { $c_s_Product$$anon$1 as $c_s_Product$$anon$1 };
$c_s_Product$$anon$1.prototype = new $j_java$002elang$002eObject.$h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
  /*<skip>*/
}
export { $h_s_Product$$anon$1 as $h_s_Product$$anon$1 };
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax)
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = this.s_Product$$anon$1__f_$outer.productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result
});
var $d_s_Product$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  s_Product$$anon$1: 0
}, false, "scala.Product$$anon$1", {
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
export { $d_s_Product$$anon$1 as $d_s_Product$$anon$1 };
$c_s_Product$$anon$1.prototype.$classData = $d_s_Product$$anon$1;
//# sourceMappingURL=scala.Product$$anon$1.js.map
