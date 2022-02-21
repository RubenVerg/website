'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_CalendarPatterns(datePatterns, timePatterns) {
  this.Llocales_cldr_CalendarPatterns__f_datePatterns = null;
  this.Llocales_cldr_CalendarPatterns__f_timePatterns = null;
  this.Llocales_cldr_CalendarPatterns__f_datePatterns = datePatterns;
  this.Llocales_cldr_CalendarPatterns__f_timePatterns = timePatterns
}
export { $c_Llocales_cldr_CalendarPatterns as $c_Llocales_cldr_CalendarPatterns };
$c_Llocales_cldr_CalendarPatterns.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_CalendarPatterns.prototype.constructor = $c_Llocales_cldr_CalendarPatterns;
/** @constructor */
function $h_Llocales_cldr_CalendarPatterns() {
  /*<skip>*/
}
export { $h_Llocales_cldr_CalendarPatterns as $h_Llocales_cldr_CalendarPatterns };
$h_Llocales_cldr_CalendarPatterns.prototype = $c_Llocales_cldr_CalendarPatterns.prototype;
$c_Llocales_cldr_CalendarPatterns.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_CalendarPatterns.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_CalendarPatterns.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_CalendarPatterns)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_CalendarPatterns__f_datePatterns;
    var x$2 = x$0$2.Llocales_cldr_CalendarPatterns__f_datePatterns;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_CalendarPatterns__f_timePatterns;
      var x$4 = x$0$2.Llocales_cldr_CalendarPatterns__f_timePatterns;
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_CalendarPatterns.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_CalendarPatterns.prototype.productArity__I = (function() {
  return 2
});
$c_Llocales_cldr_CalendarPatterns.prototype.productPrefix__T = (function() {
  return "CalendarPatterns"
});
$c_Llocales_cldr_CalendarPatterns.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Llocales_cldr_CalendarPatterns__f_datePatterns
  };
  if ((n === 1)) {
    return this.Llocales_cldr_CalendarPatterns__f_timePatterns
  };
  throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
function $isArrayOf_Llocales_cldr_CalendarPatterns(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_CalendarPatterns)))
}
export { $isArrayOf_Llocales_cldr_CalendarPatterns as $isArrayOf_Llocales_cldr_CalendarPatterns };
var $d_Llocales_cldr_CalendarPatterns = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_CalendarPatterns: 0
}, false, "locales.cldr.CalendarPatterns", {
  Llocales_cldr_CalendarPatterns: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_CalendarPatterns as $d_Llocales_cldr_CalendarPatterns };
$c_Llocales_cldr_CalendarPatterns.prototype.$classData = $d_Llocales_cldr_CalendarPatterns;
//# sourceMappingURL=locales.cldr.CalendarPatterns.js.map
