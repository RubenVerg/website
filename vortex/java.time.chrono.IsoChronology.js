'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002echrono$002eChronology from "./java.time.chrono.Chronology.js";
/** @constructor */
function $c_Ljava_time_chrono_IsoChronology() {
  /*<skip>*/
}
export { $c_Ljava_time_chrono_IsoChronology as $c_Ljava_time_chrono_IsoChronology };
$c_Ljava_time_chrono_IsoChronology.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_chrono_IsoChronology.prototype.constructor = $c_Ljava_time_chrono_IsoChronology;
/** @constructor */
function $h_Ljava_time_chrono_IsoChronology() {
  /*<skip>*/
}
export { $h_Ljava_time_chrono_IsoChronology as $h_Ljava_time_chrono_IsoChronology };
$h_Ljava_time_chrono_IsoChronology.prototype = $c_Ljava_time_chrono_IsoChronology.prototype;
$c_Ljava_time_chrono_IsoChronology.prototype.equals__O__Z = (function(obj) {
  return $j_java$002etime$002echrono$002eChronology.$f_Ljava_time_chrono_Chronology__equals__O__Z(this, obj)
});
$c_Ljava_time_chrono_IsoChronology.prototype.hashCode__I = (function() {
  return $j_java$002etime$002echrono$002eChronology.$f_Ljava_time_chrono_Chronology__hashCode__I(this)
});
$c_Ljava_time_chrono_IsoChronology.prototype.toString__T = (function() {
  return "ISO"
});
$c_Ljava_time_chrono_IsoChronology.prototype.isLeapYear__J__Z = (function(prolepticYear) {
  var lo = (3 & prolepticYear.RTLong__f_lo);
  if ((lo === 0)) {
    var this$1 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$1 = this$1.remainderImpl__I__I__I__I__I(prolepticYear.RTLong__f_lo, prolepticYear.RTLong__f_hi, 100, 0);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if ((!((lo$1 === 0) && (hi === 0)))) {
      return true
    } else {
      var this$2 = $j_java$002elang$002eObject.$m_RTLong$();
      var lo$2 = this$2.remainderImpl__I__I__I__I__I(prolepticYear.RTLong__f_lo, prolepticYear.RTLong__f_hi, 400, 0);
      var hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return ((lo$2 === 0) && (hi$1 === 0))
    }
  } else {
    return false
  }
});
var $d_Ljava_time_chrono_IsoChronology = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_chrono_IsoChronology: 0
}, false, "java.time.chrono.IsoChronology", {
  Ljava_time_chrono_IsoChronology: 1,
  O: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_time_chrono_Chronology: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_chrono_IsoChronology as $d_Ljava_time_chrono_IsoChronology };
$c_Ljava_time_chrono_IsoChronology.prototype.$classData = $d_Ljava_time_chrono_IsoChronology;
//# sourceMappingURL=java.time.chrono.IsoChronology.js.map
