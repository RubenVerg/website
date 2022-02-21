'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ePartialFunction$0024 from "./scala.PartialFunction$.js";
/** @constructor */
function $c_sr_AbstractPartialFunction() {
  /*<skip>*/
}
export { $c_sr_AbstractPartialFunction as $c_sr_AbstractPartialFunction };
$c_sr_AbstractPartialFunction.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sr_AbstractPartialFunction.prototype.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
  /*<skip>*/
}
export { $h_sr_AbstractPartialFunction as $h_sr_AbstractPartialFunction };
$h_sr_AbstractPartialFunction.prototype = $c_sr_AbstractPartialFunction.prototype;
$c_sr_AbstractPartialFunction.prototype.toString__T = (function() {
  return "<function1>"
});
$c_sr_AbstractPartialFunction.prototype.apply__O__O = (function(x) {
  var default$1 = $j_scala$002ePartialFunction$0024.$m_s_PartialFunction$().s_PartialFunction$__f_empty_pf;
  return this.applyOrElse__T2__F1__O(x, default$1)
});
//# sourceMappingURL=scala.runtime.AbstractPartialFunction.js.map
