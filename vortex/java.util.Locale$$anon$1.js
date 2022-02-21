'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eruntime$002eAbstractPartialFunction from "./scala.runtime.AbstractPartialFunction.js";
/** @constructor */
function $c_ju_Locale$$anon$1() {
  /*<skip>*/
}
export { $c_ju_Locale$$anon$1 as $c_ju_Locale$$anon$1 };
$c_ju_Locale$$anon$1.prototype = new $j_scala$002eruntime$002eAbstractPartialFunction.$h_sr_AbstractPartialFunction();
$c_ju_Locale$$anon$1.prototype.constructor = $c_ju_Locale$$anon$1;
/** @constructor */
function $h_ju_Locale$$anon$1() {
  /*<skip>*/
}
export { $h_ju_Locale$$anon$1 as $h_ju_Locale$$anon$1 };
$h_ju_Locale$$anon$1.prototype = $c_ju_Locale$$anon$1.prototype;
$c_ju_Locale$$anon$1.prototype.isDefinedAt__T2__Z = (function(x) {
  if ((x !== null)) {
    var x7 = x.T2__f__2;
    if ((x7 === "")) {
      return true
    };
    return true
  };
  return false
});
$c_ju_Locale$$anon$1.prototype.applyOrElse__T2__F1__O = (function(x, default$1) {
  if ((x !== null)) {
    var x11 = x.T2__f__1;
    var x12 = x.T2__f__2;
    if ((x12 === "")) {
      return x11
    };
    return ((x11 + "-") + x12)
  };
  return default$1.apply__O__O(x)
});
$c_ju_Locale$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__T2__Z(x)
});
$c_ju_Locale$$anon$1.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
  return this.applyOrElse__T2__F1__O(x, default$1)
});
var $d_ju_Locale$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_Locale$$anon$1: 0
}, false, "java.util.Locale$$anon$1", {
  ju_Locale$$anon$1: 1,
  sr_AbstractPartialFunction: 1,
  O: 1,
  F1: 1,
  s_PartialFunction: 1,
  Ljava_io_Serializable: 1
});
export { $d_ju_Locale$$anon$1 as $d_ju_Locale$$anon$1 };
$c_ju_Locale$$anon$1.prototype.$classData = $d_ju_Locale$$anon$1;
//# sourceMappingURL=java.util.Locale$$anon$1.js.map
