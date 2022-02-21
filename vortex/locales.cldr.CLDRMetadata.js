'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_CLDRMetadata(isoCountries, iso3Countries, isoLanguages, iso3Languages, scripts) {
  this.Llocales_cldr_CLDRMetadata__f_isoCountries = null;
  this.Llocales_cldr_CLDRMetadata__f_iso3Countries = null;
  this.Llocales_cldr_CLDRMetadata__f_isoLanguages = null;
  this.Llocales_cldr_CLDRMetadata__f_iso3Languages = null;
  this.Llocales_cldr_CLDRMetadata__f_scripts = null;
  this.Llocales_cldr_CLDRMetadata__f_isoCountries = isoCountries;
  this.Llocales_cldr_CLDRMetadata__f_iso3Countries = iso3Countries;
  this.Llocales_cldr_CLDRMetadata__f_isoLanguages = isoLanguages;
  this.Llocales_cldr_CLDRMetadata__f_iso3Languages = iso3Languages;
  this.Llocales_cldr_CLDRMetadata__f_scripts = scripts
}
export { $c_Llocales_cldr_CLDRMetadata as $c_Llocales_cldr_CLDRMetadata };
$c_Llocales_cldr_CLDRMetadata.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_CLDRMetadata.prototype.constructor = $c_Llocales_cldr_CLDRMetadata;
/** @constructor */
function $h_Llocales_cldr_CLDRMetadata() {
  /*<skip>*/
}
export { $h_Llocales_cldr_CLDRMetadata as $h_Llocales_cldr_CLDRMetadata };
$h_Llocales_cldr_CLDRMetadata.prototype = $c_Llocales_cldr_CLDRMetadata.prototype;
$c_Llocales_cldr_CLDRMetadata.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_CLDRMetadata.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_CLDRMetadata.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_CLDRMetadata)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_CLDRMetadata__f_isoCountries;
    var x$2 = x$0$2.Llocales_cldr_CLDRMetadata__f_isoCountries;
    if ((x === x$2)) {
      var x$3 = this.Llocales_cldr_CLDRMetadata__f_iso3Countries;
      var x$4 = x$0$2.Llocales_cldr_CLDRMetadata__f_iso3Countries;
      var $$x3 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$5 = this.Llocales_cldr_CLDRMetadata__f_isoLanguages;
      var x$6 = x$0$2.Llocales_cldr_CLDRMetadata__f_isoLanguages;
      var $$x2 = (x$5 === x$6)
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$7 = this.Llocales_cldr_CLDRMetadata__f_iso3Languages;
      var x$8 = x$0$2.Llocales_cldr_CLDRMetadata__f_iso3Languages;
      var $$x1 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$9 = this.Llocales_cldr_CLDRMetadata__f_scripts;
      var x$10 = x$0$2.Llocales_cldr_CLDRMetadata__f_scripts;
      return (x$9 === x$10)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_CLDRMetadata.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_CLDRMetadata.prototype.productArity__I = (function() {
  return 5
});
$c_Llocales_cldr_CLDRMetadata.prototype.productPrefix__T = (function() {
  return "CLDRMetadata"
});
$c_Llocales_cldr_CLDRMetadata.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_CLDRMetadata__f_isoCountries;
      break
    }
    case 1: {
      return this.Llocales_cldr_CLDRMetadata__f_iso3Countries;
      break
    }
    case 2: {
      return this.Llocales_cldr_CLDRMetadata__f_isoLanguages;
      break
    }
    case 3: {
      return this.Llocales_cldr_CLDRMetadata__f_iso3Languages;
      break
    }
    case 4: {
      return this.Llocales_cldr_CLDRMetadata__f_scripts;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_CLDRMetadata(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_CLDRMetadata)))
}
export { $isArrayOf_Llocales_cldr_CLDRMetadata as $isArrayOf_Llocales_cldr_CLDRMetadata };
var $d_Llocales_cldr_CLDRMetadata = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_CLDRMetadata: 0
}, false, "locales.cldr.CLDRMetadata", {
  Llocales_cldr_CLDRMetadata: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_CLDRMetadata as $d_Llocales_cldr_CLDRMetadata };
$c_Llocales_cldr_CLDRMetadata.prototype.$classData = $d_Llocales_cldr_CLDRMetadata;
//# sourceMappingURL=locales.cldr.CLDRMetadata.js.map
