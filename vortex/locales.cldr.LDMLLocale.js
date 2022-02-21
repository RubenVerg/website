'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_LDMLLocale(language, territory, variant, script) {
  this.Llocales_cldr_LDMLLocale__f_language = null;
  this.Llocales_cldr_LDMLLocale__f_territory = null;
  this.Llocales_cldr_LDMLLocale__f_variant = null;
  this.Llocales_cldr_LDMLLocale__f_script = null;
  this.Llocales_cldr_LDMLLocale__f_language = language;
  this.Llocales_cldr_LDMLLocale__f_territory = territory;
  this.Llocales_cldr_LDMLLocale__f_variant = variant;
  this.Llocales_cldr_LDMLLocale__f_script = script
}
export { $c_Llocales_cldr_LDMLLocale as $c_Llocales_cldr_LDMLLocale };
$c_Llocales_cldr_LDMLLocale.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_LDMLLocale.prototype.constructor = $c_Llocales_cldr_LDMLLocale;
/** @constructor */
function $h_Llocales_cldr_LDMLLocale() {
  /*<skip>*/
}
export { $h_Llocales_cldr_LDMLLocale as $h_Llocales_cldr_LDMLLocale };
$h_Llocales_cldr_LDMLLocale.prototype = $c_Llocales_cldr_LDMLLocale.prototype;
$c_Llocales_cldr_LDMLLocale.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_LDMLLocale.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_LDMLLocale.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_LDMLLocale)) {
    var x$0$2 = x$0;
    if ((this.Llocales_cldr_LDMLLocale__f_language === x$0$2.Llocales_cldr_LDMLLocale__f_language)) {
      var x = this.Llocales_cldr_LDMLLocale__f_territory;
      var x$2 = x$0$2.Llocales_cldr_LDMLLocale__f_territory;
      var $$x2 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$3 = this.Llocales_cldr_LDMLLocale__f_variant;
      var x$4 = x$0$2.Llocales_cldr_LDMLLocale__f_variant;
      var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$5 = this.Llocales_cldr_LDMLLocale__f_script;
      var x$6 = x$0$2.Llocales_cldr_LDMLLocale__f_script;
      return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_LDMLLocale.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_LDMLLocale.prototype.productArity__I = (function() {
  return 4
});
$c_Llocales_cldr_LDMLLocale.prototype.productPrefix__T = (function() {
  return "LDMLLocale"
});
$c_Llocales_cldr_LDMLLocale.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_LDMLLocale__f_language;
      break
    }
    case 1: {
      return this.Llocales_cldr_LDMLLocale__f_territory;
      break
    }
    case 2: {
      return this.Llocales_cldr_LDMLLocale__f_variant;
      break
    }
    case 3: {
      return this.Llocales_cldr_LDMLLocale__f_script;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_LDMLLocale(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_LDMLLocale)))
}
export { $isArrayOf_Llocales_cldr_LDMLLocale as $isArrayOf_Llocales_cldr_LDMLLocale };
var $d_Llocales_cldr_LDMLLocale = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_LDMLLocale: 0
}, false, "locales.cldr.LDMLLocale", {
  Llocales_cldr_LDMLLocale: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_LDMLLocale as $d_Llocales_cldr_LDMLLocale };
$c_Llocales_cldr_LDMLLocale.prototype.$classData = $d_Llocales_cldr_LDMLLocale;
//# sourceMappingURL=locales.cldr.LDMLLocale.js.map
