'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_CurrencyData(currencyTypes, fractions, regions, numericCodes) {
  this.Llocales_cldr_CurrencyData__f_currencyTypes = null;
  this.Llocales_cldr_CurrencyData__f_fractions = null;
  this.Llocales_cldr_CurrencyData__f_regions = null;
  this.Llocales_cldr_CurrencyData__f_numericCodes = null;
  this.Llocales_cldr_CurrencyData__f_currencyTypes = currencyTypes;
  this.Llocales_cldr_CurrencyData__f_fractions = fractions;
  this.Llocales_cldr_CurrencyData__f_regions = regions;
  this.Llocales_cldr_CurrencyData__f_numericCodes = numericCodes
}
export { $c_Llocales_cldr_CurrencyData as $c_Llocales_cldr_CurrencyData };
$c_Llocales_cldr_CurrencyData.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_CurrencyData.prototype.constructor = $c_Llocales_cldr_CurrencyData;
/** @constructor */
function $h_Llocales_cldr_CurrencyData() {
  /*<skip>*/
}
export { $h_Llocales_cldr_CurrencyData as $h_Llocales_cldr_CurrencyData };
$h_Llocales_cldr_CurrencyData.prototype = $c_Llocales_cldr_CurrencyData.prototype;
$c_Llocales_cldr_CurrencyData.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_CurrencyData.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_CurrencyData.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_CurrencyData)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_CurrencyData__f_currencyTypes;
    var x$2 = x$0$2.Llocales_cldr_CurrencyData__f_currencyTypes;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_CurrencyData__f_fractions;
      var x$4 = x$0$2.Llocales_cldr_CurrencyData__f_fractions;
      var $$x2 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$5 = this.Llocales_cldr_CurrencyData__f_regions;
      var x$6 = x$0$2.Llocales_cldr_CurrencyData__f_regions;
      var $$x1 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$7 = this.Llocales_cldr_CurrencyData__f_numericCodes;
      var x$8 = x$0$2.Llocales_cldr_CurrencyData__f_numericCodes;
      return ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_CurrencyData.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_CurrencyData.prototype.productArity__I = (function() {
  return 4
});
$c_Llocales_cldr_CurrencyData.prototype.productPrefix__T = (function() {
  return "CurrencyData"
});
$c_Llocales_cldr_CurrencyData.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_CurrencyData__f_currencyTypes;
      break
    }
    case 1: {
      return this.Llocales_cldr_CurrencyData__f_fractions;
      break
    }
    case 2: {
      return this.Llocales_cldr_CurrencyData__f_regions;
      break
    }
    case 3: {
      return this.Llocales_cldr_CurrencyData__f_numericCodes;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_CurrencyData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_CurrencyData)))
}
export { $isArrayOf_Llocales_cldr_CurrencyData as $isArrayOf_Llocales_cldr_CurrencyData };
var $d_Llocales_cldr_CurrencyData = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_CurrencyData: 0
}, false, "locales.cldr.CurrencyData", {
  Llocales_cldr_CurrencyData: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_CurrencyData as $d_Llocales_cldr_CurrencyData };
$c_Llocales_cldr_CurrencyData.prototype.$classData = $d_Llocales_cldr_CurrencyData;
//# sourceMappingURL=locales.cldr.CurrencyData.js.map
