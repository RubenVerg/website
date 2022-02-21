'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_NumberPatterns(decimalFormat, percentFormat, currencyFormat) {
  this.Llocales_cldr_NumberPatterns__f_decimalFormat = null;
  this.Llocales_cldr_NumberPatterns__f_percentFormat = null;
  this.Llocales_cldr_NumberPatterns__f_currencyFormat = null;
  this.Llocales_cldr_NumberPatterns__f_decimalFormat = decimalFormat;
  this.Llocales_cldr_NumberPatterns__f_percentFormat = percentFormat;
  this.Llocales_cldr_NumberPatterns__f_currencyFormat = currencyFormat
}
export { $c_Llocales_cldr_NumberPatterns as $c_Llocales_cldr_NumberPatterns };
$c_Llocales_cldr_NumberPatterns.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_NumberPatterns.prototype.constructor = $c_Llocales_cldr_NumberPatterns;
/** @constructor */
function $h_Llocales_cldr_NumberPatterns() {
  /*<skip>*/
}
export { $h_Llocales_cldr_NumberPatterns as $h_Llocales_cldr_NumberPatterns };
$h_Llocales_cldr_NumberPatterns.prototype = $c_Llocales_cldr_NumberPatterns.prototype;
$c_Llocales_cldr_NumberPatterns.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_NumberPatterns.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_NumberPatterns.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_NumberPatterns)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_NumberPatterns__f_decimalFormat;
    var x$2 = x$0$2.Llocales_cldr_NumberPatterns__f_decimalFormat;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_NumberPatterns__f_percentFormat;
      var x$4 = x$0$2.Llocales_cldr_NumberPatterns__f_percentFormat;
      var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$5 = this.Llocales_cldr_NumberPatterns__f_currencyFormat;
      var x$6 = x$0$2.Llocales_cldr_NumberPatterns__f_currencyFormat;
      return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_NumberPatterns.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_NumberPatterns.prototype.productArity__I = (function() {
  return 3
});
$c_Llocales_cldr_NumberPatterns.prototype.productPrefix__T = (function() {
  return "NumberPatterns"
});
$c_Llocales_cldr_NumberPatterns.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_NumberPatterns__f_decimalFormat;
      break
    }
    case 1: {
      return this.Llocales_cldr_NumberPatterns__f_percentFormat;
      break
    }
    case 2: {
      return this.Llocales_cldr_NumberPatterns__f_currencyFormat;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_NumberPatterns(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_NumberPatterns)))
}
export { $isArrayOf_Llocales_cldr_NumberPatterns as $isArrayOf_Llocales_cldr_NumberPatterns };
var $d_Llocales_cldr_NumberPatterns = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_NumberPatterns: 0
}, false, "locales.cldr.NumberPatterns", {
  Llocales_cldr_NumberPatterns: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_NumberPatterns as $d_Llocales_cldr_NumberPatterns };
$c_Llocales_cldr_NumberPatterns.prototype.$classData = $d_Llocales_cldr_NumberPatterns;
//# sourceMappingURL=locales.cldr.NumberPatterns.js.map
