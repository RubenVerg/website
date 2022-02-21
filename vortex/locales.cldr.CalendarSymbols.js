'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Llocales_cldr_CalendarSymbols(months, shortMonths, weekdays, shortWeekdays, amPm, eras) {
  this.Llocales_cldr_CalendarSymbols__f_months = null;
  this.Llocales_cldr_CalendarSymbols__f_shortMonths = null;
  this.Llocales_cldr_CalendarSymbols__f_weekdays = null;
  this.Llocales_cldr_CalendarSymbols__f_shortWeekdays = null;
  this.Llocales_cldr_CalendarSymbols__f_amPm = null;
  this.Llocales_cldr_CalendarSymbols__f_eras = null;
  this.Llocales_cldr_CalendarSymbols__f_months = months;
  this.Llocales_cldr_CalendarSymbols__f_shortMonths = shortMonths;
  this.Llocales_cldr_CalendarSymbols__f_weekdays = weekdays;
  this.Llocales_cldr_CalendarSymbols__f_shortWeekdays = shortWeekdays;
  this.Llocales_cldr_CalendarSymbols__f_amPm = amPm;
  this.Llocales_cldr_CalendarSymbols__f_eras = eras
}
export { $c_Llocales_cldr_CalendarSymbols as $c_Llocales_cldr_CalendarSymbols };
$c_Llocales_cldr_CalendarSymbols.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_CalendarSymbols.prototype.constructor = $c_Llocales_cldr_CalendarSymbols;
/** @constructor */
function $h_Llocales_cldr_CalendarSymbols() {
  /*<skip>*/
}
export { $h_Llocales_cldr_CalendarSymbols as $h_Llocales_cldr_CalendarSymbols };
$h_Llocales_cldr_CalendarSymbols.prototype = $c_Llocales_cldr_CalendarSymbols.prototype;
$c_Llocales_cldr_CalendarSymbols.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_CalendarSymbols.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_CalendarSymbols.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_CalendarSymbols)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_CalendarSymbols__f_months;
    var x$2 = x$0$2.Llocales_cldr_CalendarSymbols__f_months;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_CalendarSymbols__f_shortMonths;
      var x$4 = x$0$2.Llocales_cldr_CalendarSymbols__f_shortMonths;
      var $$x4 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x4 = false
    };
    if ($$x4) {
      var x$5 = this.Llocales_cldr_CalendarSymbols__f_weekdays;
      var x$6 = x$0$2.Llocales_cldr_CalendarSymbols__f_weekdays;
      var $$x3 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$7 = this.Llocales_cldr_CalendarSymbols__f_shortWeekdays;
      var x$8 = x$0$2.Llocales_cldr_CalendarSymbols__f_shortWeekdays;
      var $$x2 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$9 = this.Llocales_cldr_CalendarSymbols__f_amPm;
      var x$10 = x$0$2.Llocales_cldr_CalendarSymbols__f_amPm;
      var $$x1 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$11 = this.Llocales_cldr_CalendarSymbols__f_eras;
      var x$12 = x$0$2.Llocales_cldr_CalendarSymbols__f_eras;
      return ((x$11 === null) ? (x$12 === null) : x$11.equals__O__Z(x$12))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_CalendarSymbols.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_CalendarSymbols.prototype.productArity__I = (function() {
  return 6
});
$c_Llocales_cldr_CalendarSymbols.prototype.productPrefix__T = (function() {
  return "CalendarSymbols"
});
$c_Llocales_cldr_CalendarSymbols.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_CalendarSymbols__f_months;
      break
    }
    case 1: {
      return this.Llocales_cldr_CalendarSymbols__f_shortMonths;
      break
    }
    case 2: {
      return this.Llocales_cldr_CalendarSymbols__f_weekdays;
      break
    }
    case 3: {
      return this.Llocales_cldr_CalendarSymbols__f_shortWeekdays;
      break
    }
    case 4: {
      return this.Llocales_cldr_CalendarSymbols__f_amPm;
      break
    }
    case 5: {
      return this.Llocales_cldr_CalendarSymbols__f_eras;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $isArrayOf_Llocales_cldr_CalendarSymbols(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_CalendarSymbols)))
}
export { $isArrayOf_Llocales_cldr_CalendarSymbols as $isArrayOf_Llocales_cldr_CalendarSymbols };
var $d_Llocales_cldr_CalendarSymbols = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_CalendarSymbols: 0
}, false, "locales.cldr.CalendarSymbols", {
  Llocales_cldr_CalendarSymbols: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_CalendarSymbols as $d_Llocales_cldr_CalendarSymbols };
$c_Llocales_cldr_CalendarSymbols.prototype.$classData = $d_Llocales_cldr_CalendarSymbols;
//# sourceMappingURL=locales.cldr.CalendarSymbols.js.map
