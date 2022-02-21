'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002eDateTimeException from "./java.time.DateTimeException.js";
/** @constructor */
function $c_Ljava_time_temporal_ValueRange(minSmallest, minLargest, maxSmallest, maxLargest) {
  this.Ljava_time_temporal_ValueRange__f_minSmallest = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_temporal_ValueRange__f_minLargest = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_temporal_ValueRange__f_maxSmallest = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_temporal_ValueRange__f_maxLargest = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_temporal_ValueRange__f_minSmallest = minSmallest;
  this.Ljava_time_temporal_ValueRange__f_minLargest = minLargest;
  this.Ljava_time_temporal_ValueRange__f_maxSmallest = maxSmallest;
  this.Ljava_time_temporal_ValueRange__f_maxLargest = maxLargest
}
export { $c_Ljava_time_temporal_ValueRange as $c_Ljava_time_temporal_ValueRange };
$c_Ljava_time_temporal_ValueRange.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_ValueRange.prototype.constructor = $c_Ljava_time_temporal_ValueRange;
/** @constructor */
function $h_Ljava_time_temporal_ValueRange() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ValueRange as $h_Ljava_time_temporal_ValueRange };
$h_Ljava_time_temporal_ValueRange.prototype = $c_Ljava_time_temporal_ValueRange.prototype;
$c_Ljava_time_temporal_ValueRange.prototype.isIntValue__Z = (function() {
  var this$1 = this.Ljava_time_temporal_ValueRange__f_minSmallest;
  var ahi = this$1.RTLong__f_hi;
  if (((ahi === (-1)) ? (((-2147483648) ^ this$1.RTLong__f_lo) >= 0) : (ahi > (-1)))) {
    var this$2 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
    var ahi$1 = this$2.RTLong__f_hi;
    return ((ahi$1 === 0) ? (((-2147483648) ^ this$2.RTLong__f_lo) <= (-1)) : (ahi$1 < 0))
  } else {
    return false
  }
});
$c_Ljava_time_temporal_ValueRange.prototype.isValidValue__J__Z = (function(value) {
  var b = this.Ljava_time_temporal_ValueRange__f_minSmallest;
  var ahi = value.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ value.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))) {
    var b$1 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
    var ahi$1 = value.RTLong__f_hi;
    var bhi$1 = b$1.RTLong__f_hi;
    return ((ahi$1 === bhi$1) ? (((-2147483648) ^ value.RTLong__f_lo) <= ((-2147483648) ^ b$1.RTLong__f_lo)) : (ahi$1 < bhi$1))
  } else {
    return false
  }
});
$c_Ljava_time_temporal_ValueRange.prototype.isValidIntValue__J__Z = (function(value) {
  return (this.isIntValue__Z() && this.isValidValue__J__Z(value))
});
$c_Ljava_time_temporal_ValueRange.prototype.checkValidValue__J__Ljava_time_temporal_TemporalField__J = (function(value, field) {
  if ((!this.isValidValue__J__Z(value))) {
    if ((field !== null)) {
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((((("Invalid value for " + field) + " (valid values ") + this) + "): ") + value))
    } else {
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Invalid value (valid values " + this) + "): ") + value))
    }
  } else {
    return value
  }
});
$c_Ljava_time_temporal_ValueRange.prototype.checkValidIntValue__J__Ljava_time_temporal_TemporalField__I = (function(value, field) {
  if ((!this.isValidIntValue__J__Z(value))) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Invalid int value for " + field) + ": ") + value))
  } else {
    return value.RTLong__f_lo
  }
});
$c_Ljava_time_temporal_ValueRange.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_temporal_ValueRange)) {
    var other = obj;
    if ((this === other)) {
      return true
    } else {
      var this$1 = this.Ljava_time_temporal_ValueRange__f_minSmallest;
      var b = other.Ljava_time_temporal_ValueRange__f_minSmallest;
      if (((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))) {
        var this$2 = this.Ljava_time_temporal_ValueRange__f_minLargest;
        var b$1 = other.Ljava_time_temporal_ValueRange__f_minLargest;
        var $$x2 = ((this$2.RTLong__f_lo === b$1.RTLong__f_lo) && (this$2.RTLong__f_hi === b$1.RTLong__f_hi))
      } else {
        var $$x2 = false
      };
      if ($$x2) {
        var this$3 = this.Ljava_time_temporal_ValueRange__f_maxSmallest;
        var b$2 = other.Ljava_time_temporal_ValueRange__f_maxSmallest;
        var $$x1 = ((this$3.RTLong__f_lo === b$2.RTLong__f_lo) && (this$3.RTLong__f_hi === b$2.RTLong__f_hi))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var this$4 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
        var b$3 = other.Ljava_time_temporal_ValueRange__f_maxLargest;
        return ((this$4.RTLong__f_lo === b$3.RTLong__f_lo) && (this$4.RTLong__f_hi === b$3.RTLong__f_hi))
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_Ljava_time_temporal_ValueRange.prototype.hashCode__I = (function() {
  var this$1 = this.Ljava_time_temporal_ValueRange__f_minSmallest;
  var b = this.Ljava_time_temporal_ValueRange__f_minLargest;
  var alo = this$1.RTLong__f_lo;
  var ahi = this$1.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  var b$1 = this.Ljava_time_temporal_ValueRange__f_minLargest;
  var bhi$1 = b$1.RTLong__f_hi;
  var lo$1 = ((16 + b$1.RTLong__f_lo) | 0);
  var lo$2 = (((32 & lo$1) === 0) ? (lo << lo$1) : 0);
  var hi$2 = (((32 & lo$1) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - lo$1) | 0)) | 0) | (hi << lo$1)) : (lo << lo$1));
  var b$2 = this.Ljava_time_temporal_ValueRange__f_maxSmallest;
  var bhi$2 = b$2.RTLong__f_hi;
  var lo$3 = ((48 + b$2.RTLong__f_lo) | 0);
  var lo$4 = (((32 & lo$3) === 0) ? (((lo$2 >>> lo$3) | 0) | ((hi$2 << 1) << ((31 - lo$3) | 0))) : (hi$2 >> lo$3));
  var hi$4 = (((32 & lo$3) === 0) ? (hi$2 >> lo$3) : (hi$2 >> 31));
  var b$3 = this.Ljava_time_temporal_ValueRange__f_maxSmallest;
  var bhi$3 = b$3.RTLong__f_hi;
  var lo$5 = ((32 + b$3.RTLong__f_lo) | 0);
  var lo$6 = (((32 & lo$5) === 0) ? (lo$4 << lo$5) : 0);
  var hi$6 = (((32 & lo$5) === 0) ? (((((lo$4 >>> 1) | 0) >>> ((31 - lo$5) | 0)) | 0) | (hi$4 << lo$5)) : (lo$4 << lo$5));
  var b$4 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
  var bhi$4 = b$4.RTLong__f_hi;
  var lo$7 = ((32 + b$4.RTLong__f_lo) | 0);
  var lo$8 = (((32 & lo$7) === 0) ? (((lo$6 >>> lo$7) | 0) | ((hi$6 << 1) << ((31 - lo$7) | 0))) : (hi$6 >> lo$7));
  var hi$8 = (((32 & lo$7) === 0) ? (hi$6 >> lo$7) : (hi$6 >> 31));
  var b$5 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
  var bhi$5 = b$5.RTLong__f_hi;
  var lo$9 = ((48 + b$5.RTLong__f_lo) | 0);
  var lo$10 = (((32 & lo$9) === 0) ? (lo$8 << lo$9) : 0);
  var hi$10 = (((32 & lo$9) === 0) ? (((((lo$8 >>> 1) | 0) >>> ((31 - lo$9) | 0)) | 0) | (hi$8 << lo$9)) : (lo$8 << lo$9));
  var lo$11 = (((lo$10 >>> 16) | 0) | (hi$10 << 16));
  var hi$11 = (hi$10 >> 16);
  var lo$12 = (lo$11 ^ hi$11);
  return lo$12
});
$c_Ljava_time_temporal_ValueRange.prototype.toString__T = (function() {
  var this$1 = this.Ljava_time_temporal_ValueRange__f_minSmallest;
  var b = this.Ljava_time_temporal_ValueRange__f_minLargest;
  if ((!((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi)))) {
    var ss = ("/" + this.Ljava_time_temporal_ValueRange__f_minLargest)
  } else {
    var ss = ""
  };
  var this$2 = this.Ljava_time_temporal_ValueRange__f_maxSmallest;
  var b$1 = this.Ljava_time_temporal_ValueRange__f_maxLargest;
  if ((!((this$2.RTLong__f_lo === b$1.RTLong__f_lo) && (this$2.RTLong__f_hi === b$1.RTLong__f_hi)))) {
    var sl = ("/" + this.Ljava_time_temporal_ValueRange__f_maxLargest)
  } else {
    var sl = ""
  };
  return ((((this.Ljava_time_temporal_ValueRange__f_minSmallest + ss) + " - ") + this.Ljava_time_temporal_ValueRange__f_maxSmallest) + sl)
});
function $isArrayOf_Ljava_time_temporal_ValueRange(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_temporal_ValueRange)))
}
export { $isArrayOf_Ljava_time_temporal_ValueRange as $isArrayOf_Ljava_time_temporal_ValueRange };
var $d_Ljava_time_temporal_ValueRange = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ValueRange: 0
}, false, "java.time.temporal.ValueRange", {
  Ljava_time_temporal_ValueRange: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_temporal_ValueRange as $d_Ljava_time_temporal_ValueRange };
$c_Ljava_time_temporal_ValueRange.prototype.$classData = $d_Ljava_time_temporal_ValueRange;
//# sourceMappingURL=java.time.temporal.ValueRange.js.map
