'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_Symbols(ns, aliasOf, decimal, group, list, percent, minus, perMille, infinity, nan, exp) {
  this.Llocales_cldr_Symbols__f_ns = null;
  this.Llocales_cldr_Symbols__f_aliasOf = null;
  this.Llocales_cldr_Symbols__f_decimal = null;
  this.Llocales_cldr_Symbols__f_group = null;
  this.Llocales_cldr_Symbols__f_list = null;
  this.Llocales_cldr_Symbols__f_percent = null;
  this.Llocales_cldr_Symbols__f_minus = null;
  this.Llocales_cldr_Symbols__f_perMille = null;
  this.Llocales_cldr_Symbols__f_infinity = null;
  this.Llocales_cldr_Symbols__f_nan = null;
  this.Llocales_cldr_Symbols__f_exp = null;
  this.Llocales_cldr_Symbols__f_ns = ns;
  this.Llocales_cldr_Symbols__f_aliasOf = aliasOf;
  this.Llocales_cldr_Symbols__f_decimal = decimal;
  this.Llocales_cldr_Symbols__f_group = group;
  this.Llocales_cldr_Symbols__f_list = list;
  this.Llocales_cldr_Symbols__f_percent = percent;
  this.Llocales_cldr_Symbols__f_minus = minus;
  this.Llocales_cldr_Symbols__f_perMille = perMille;
  this.Llocales_cldr_Symbols__f_infinity = infinity;
  this.Llocales_cldr_Symbols__f_nan = nan;
  this.Llocales_cldr_Symbols__f_exp = exp
}
export { $c_Llocales_cldr_Symbols as $c_Llocales_cldr_Symbols };
$c_Llocales_cldr_Symbols.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_Symbols.prototype.constructor = $c_Llocales_cldr_Symbols;
/** @constructor */
function $h_Llocales_cldr_Symbols() {
  /*<skip>*/
}
export { $h_Llocales_cldr_Symbols as $h_Llocales_cldr_Symbols };
$h_Llocales_cldr_Symbols.prototype = $c_Llocales_cldr_Symbols.prototype;
$c_Llocales_cldr_Symbols.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_Symbols.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_Symbols.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_Symbols)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_Symbols__f_ns;
    var x$2 = x$0$2.Llocales_cldr_Symbols__f_ns;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_Symbols__f_aliasOf;
      var x$4 = x$0$2.Llocales_cldr_Symbols__f_aliasOf;
      var $$x9 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x9 = false
    };
    if ($$x9) {
      var x$5 = this.Llocales_cldr_Symbols__f_decimal;
      var x$6 = x$0$2.Llocales_cldr_Symbols__f_decimal;
      var $$x8 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      var $$x8 = false
    };
    if ($$x8) {
      var x$7 = this.Llocales_cldr_Symbols__f_group;
      var x$8 = x$0$2.Llocales_cldr_Symbols__f_group;
      var $$x7 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      var $$x7 = false
    };
    if ($$x7) {
      var x$9 = this.Llocales_cldr_Symbols__f_list;
      var x$10 = x$0$2.Llocales_cldr_Symbols__f_list;
      var $$x6 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
    } else {
      var $$x6 = false
    };
    if ($$x6) {
      var x$11 = this.Llocales_cldr_Symbols__f_percent;
      var x$12 = x$0$2.Llocales_cldr_Symbols__f_percent;
      var $$x5 = ((x$11 === null) ? (x$12 === null) : x$11.equals__O__Z(x$12))
    } else {
      var $$x5 = false
    };
    if ($$x5) {
      var x$13 = this.Llocales_cldr_Symbols__f_minus;
      var x$14 = x$0$2.Llocales_cldr_Symbols__f_minus;
      var $$x4 = ((x$13 === null) ? (x$14 === null) : x$13.equals__O__Z(x$14))
    } else {
      var $$x4 = false
    };
    if ($$x4) {
      var x$15 = this.Llocales_cldr_Symbols__f_perMille;
      var x$16 = x$0$2.Llocales_cldr_Symbols__f_perMille;
      var $$x3 = ((x$15 === null) ? (x$16 === null) : x$15.equals__O__Z(x$16))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$17 = this.Llocales_cldr_Symbols__f_infinity;
      var x$18 = x$0$2.Llocales_cldr_Symbols__f_infinity;
      var $$x2 = ((x$17 === null) ? (x$18 === null) : x$17.equals__O__Z(x$18))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$19 = this.Llocales_cldr_Symbols__f_nan;
      var x$20 = x$0$2.Llocales_cldr_Symbols__f_nan;
      var $$x1 = ((x$19 === null) ? (x$20 === null) : x$19.equals__O__Z(x$20))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$21 = this.Llocales_cldr_Symbols__f_exp;
      var x$22 = x$0$2.Llocales_cldr_Symbols__f_exp;
      return ((x$21 === null) ? (x$22 === null) : x$21.equals__O__Z(x$22))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_Symbols.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_Symbols.prototype.productArity__I = (function() {
  return 11
});
$c_Llocales_cldr_Symbols.prototype.productPrefix__T = (function() {
  return "Symbols"
});
$c_Llocales_cldr_Symbols.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_Symbols__f_ns;
      break
    }
    case 1: {
      return this.Llocales_cldr_Symbols__f_aliasOf;
      break
    }
    case 2: {
      return this.Llocales_cldr_Symbols__f_decimal;
      break
    }
    case 3: {
      return this.Llocales_cldr_Symbols__f_group;
      break
    }
    case 4: {
      return this.Llocales_cldr_Symbols__f_list;
      break
    }
    case 5: {
      return this.Llocales_cldr_Symbols__f_percent;
      break
    }
    case 6: {
      return this.Llocales_cldr_Symbols__f_minus;
      break
    }
    case 7: {
      return this.Llocales_cldr_Symbols__f_perMille;
      break
    }
    case 8: {
      return this.Llocales_cldr_Symbols__f_infinity;
      break
    }
    case 9: {
      return this.Llocales_cldr_Symbols__f_nan;
      break
    }
    case 10: {
      return this.Llocales_cldr_Symbols__f_exp;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_Symbols(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_Symbols)))
}
export { $isArrayOf_Llocales_cldr_Symbols as $isArrayOf_Llocales_cldr_Symbols };
var $d_Llocales_cldr_Symbols = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_Symbols: 0
}, false, "locales.cldr.Symbols", {
  Llocales_cldr_Symbols: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_Symbols as $d_Llocales_cldr_Symbols };
$c_Llocales_cldr_Symbols.prototype.$classData = $d_Llocales_cldr_Symbols;
//# sourceMappingURL=locales.cldr.Symbols.js.map
