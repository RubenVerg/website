'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
  this.s_PartialFunction$$anon$1__f_lift = null;
  this.s_PartialFunction$$anon$1__f_lift = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$1) => ((x$2) => $j_java$002elang$002eObject.$m_s_None$()))(this))
}
export { $c_s_PartialFunction$$anon$1 as $c_s_PartialFunction$$anon$1 };
$c_s_PartialFunction$$anon$1.prototype = new $j_java$002elang$002eObject.$h_O();
$c_s_PartialFunction$$anon$1.prototype.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
  /*<skip>*/
}
export { $h_s_PartialFunction$$anon$1 as $h_s_PartialFunction$$anon$1 };
$h_s_PartialFunction$$anon$1.prototype = $c_s_PartialFunction$$anon$1.prototype;
$c_s_PartialFunction$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return $j_java$002elang$002eObject.$f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1)
});
$c_s_PartialFunction$$anon$1.prototype.toString__T = (function() {
  return "<function1>"
});
$c_s_PartialFunction$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return false
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__E = (function(x) {
  throw new $j_java$002elang$002eObject.$c_s_MatchError(x)
});
$c_s_PartialFunction$$anon$1.prototype.apply__O__O = (function(v1) {
  this.apply__O__E(v1)
});
var $d_s_PartialFunction$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  s_PartialFunction$$anon$1: 0
}, false, "scala.PartialFunction$$anon$1", {
  s_PartialFunction$$anon$1: 1,
  O: 1,
  s_PartialFunction: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
export { $d_s_PartialFunction$$anon$1 as $d_s_PartialFunction$$anon$1 };
$c_s_PartialFunction$$anon$1.prototype.$classData = $d_s_PartialFunction$$anon$1;
//# sourceMappingURL=scala.PartialFunction$$anon$1.js.map
