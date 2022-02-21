'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct3 from "./scala.Product3.js";
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.T3__f__1 = null;
  this.T3__f__2 = null;
  this.T3__f__3 = null;
  this.T3__f__1 = _1;
  this.T3__f__2 = _2;
  this.T3__f__3 = _3
}
export { $c_T3 as $c_T3 };
$c_T3.prototype = new $j_java$002elang$002eObject.$h_O();
$c_T3.prototype.constructor = $c_T3;
/** @constructor */
function $h_T3() {
  /*<skip>*/
}
export { $h_T3 as $h_T3 };
$h_T3.prototype = $c_T3.prototype;
$c_T3.prototype.productArity__I = (function() {
  return 3
});
$c_T3.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eProduct3.$f_s_Product3__productElement__I__O(this, n)
});
$c_T3.prototype.toString__T = (function() {
  return (((((("(" + this.T3__f__1) + ",") + this.T3__f__2) + ",") + this.T3__f__3) + ")")
});
$c_T3.prototype.productPrefix__T = (function() {
  return "Tuple3"
});
$c_T3.prototype.productIterator__sc_Iterator = (function() {
  return new $j_java$002elang$002eObject.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_T3.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_T3.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_T3)) {
    var Tuple3$1 = x$1;
    return (($j_java$002elang$002eObject.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T3__f__1, Tuple3$1.T3__f__1) && $j_java$002elang$002eObject.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T3__f__2, Tuple3$1.T3__f__2)) && $j_java$002elang$002eObject.$m_sr_BoxesRunTime$().equals__O__O__Z(this.T3__f__3, Tuple3$1.T3__f__3))
  } else {
    return false
  }
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T3)))
}
export { $isArrayOf_T3 as $isArrayOf_T3 };
var $d_T3 = new $j_java$002elang$002eObject.$TypeData().initClass({
  T3: 0
}, false, "scala.Tuple3", {
  T3: 1,
  O: 1,
  s_Product3: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
export { $d_T3 as $d_T3 };
$c_T3.prototype.$classData = $d_T3;
//# sourceMappingURL=scala.Tuple3.js.map
