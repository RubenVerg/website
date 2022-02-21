'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_NumberingSystem(id, digits) {
  this.Llocales_cldr_NumberingSystem__f_id = null;
  this.Llocales_cldr_NumberingSystem__f_digits = null;
  this.Llocales_cldr_NumberingSystem__f_id = id;
  this.Llocales_cldr_NumberingSystem__f_digits = digits
}
export { $c_Llocales_cldr_NumberingSystem as $c_Llocales_cldr_NumberingSystem };
$c_Llocales_cldr_NumberingSystem.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_NumberingSystem.prototype.constructor = $c_Llocales_cldr_NumberingSystem;
/** @constructor */
function $h_Llocales_cldr_NumberingSystem() {
  /*<skip>*/
}
export { $h_Llocales_cldr_NumberingSystem as $h_Llocales_cldr_NumberingSystem };
$h_Llocales_cldr_NumberingSystem.prototype = $c_Llocales_cldr_NumberingSystem.prototype;
$c_Llocales_cldr_NumberingSystem.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_NumberingSystem.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_NumberingSystem.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_NumberingSystem)) {
    var x$0$2 = x$0;
    if ((this.Llocales_cldr_NumberingSystem__f_id === x$0$2.Llocales_cldr_NumberingSystem__f_id)) {
      var x = this.Llocales_cldr_NumberingSystem__f_digits;
      var x$2 = x$0$2.Llocales_cldr_NumberingSystem__f_digits;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_NumberingSystem.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_NumberingSystem.prototype.productArity__I = (function() {
  return 2
});
$c_Llocales_cldr_NumberingSystem.prototype.productPrefix__T = (function() {
  return "NumberingSystem"
});
$c_Llocales_cldr_NumberingSystem.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Llocales_cldr_NumberingSystem__f_id
  };
  if ((n === 1)) {
    return this.Llocales_cldr_NumberingSystem__f_digits
  };
  throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
function $isArrayOf_Llocales_cldr_NumberingSystem(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_NumberingSystem)))
}
export { $isArrayOf_Llocales_cldr_NumberingSystem as $isArrayOf_Llocales_cldr_NumberingSystem };
var $d_Llocales_cldr_NumberingSystem = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_NumberingSystem: 0
}, false, "locales.cldr.NumberingSystem", {
  Llocales_cldr_NumberingSystem: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_NumberingSystem as $d_Llocales_cldr_NumberingSystem };
$c_Llocales_cldr_NumberingSystem.prototype.$classData = $d_Llocales_cldr_NumberingSystem;
//# sourceMappingURL=locales.cldr.NumberingSystem.js.map
