'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002etemporal$002eValueRange from "./java.time.temporal.ValueRange.js";
/** @constructor */
function $c_Ljava_time_temporal_ValueRange$() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_ValueRange$ as $c_Ljava_time_temporal_ValueRange$ };
$c_Ljava_time_temporal_ValueRange$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_ValueRange$.prototype.constructor = $c_Ljava_time_temporal_ValueRange$;
/** @constructor */
function $h_Ljava_time_temporal_ValueRange$() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ValueRange$ as $h_Ljava_time_temporal_ValueRange$ };
$h_Ljava_time_temporal_ValueRange$.prototype = $c_Ljava_time_temporal_ValueRange$.prototype;
$c_Ljava_time_temporal_ValueRange$.prototype.of__J__J__Ljava_time_temporal_ValueRange = (function(min, max) {
  var ahi = min.RTLong__f_hi;
  var bhi = max.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ min.RTLong__f_lo) > ((-2147483648) ^ max.RTLong__f_lo)) : (ahi > bhi))) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "Minimum value must be less than maximum value")
  } else {
    return new $j_java$002etime$002etemporal$002eValueRange.$c_Ljava_time_temporal_ValueRange(min, min, max, max)
  }
});
$c_Ljava_time_temporal_ValueRange$.prototype.of__J__J__J__J__Ljava_time_temporal_ValueRange = (function(minSmallest, minLargest, maxSmallest, maxLargest) {
  var ahi = minSmallest.RTLong__f_hi;
  var bhi = minLargest.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ minSmallest.RTLong__f_lo) > ((-2147483648) ^ minLargest.RTLong__f_lo)) : (ahi > bhi))) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "Smallest minimum value must be less than largest minimum value")
  };
  var ahi$1 = maxSmallest.RTLong__f_hi;
  var bhi$1 = maxLargest.RTLong__f_hi;
  if (((ahi$1 === bhi$1) ? (((-2147483648) ^ maxSmallest.RTLong__f_lo) > ((-2147483648) ^ maxLargest.RTLong__f_lo)) : (ahi$1 > bhi$1))) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "Smallest maximum value must be less than largest maximum value")
  };
  var ahi$2 = minLargest.RTLong__f_hi;
  var bhi$2 = maxLargest.RTLong__f_hi;
  if (((ahi$2 === bhi$2) ? (((-2147483648) ^ minLargest.RTLong__f_lo) > ((-2147483648) ^ maxLargest.RTLong__f_lo)) : (ahi$2 > bhi$2))) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "Minimum value must be less than maximum value")
  };
  return new $j_java$002etime$002etemporal$002eValueRange.$c_Ljava_time_temporal_ValueRange(minSmallest, minLargest, maxSmallest, maxLargest)
});
var $d_Ljava_time_temporal_ValueRange$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ValueRange$: 0
}, false, "java.time.temporal.ValueRange$", {
  Ljava_time_temporal_ValueRange$: 1,
  O: 1
});
export { $d_Ljava_time_temporal_ValueRange$ as $d_Ljava_time_temporal_ValueRange$ };
$c_Ljava_time_temporal_ValueRange$.prototype.$classData = $d_Ljava_time_temporal_ValueRange$;
var $n_Ljava_time_temporal_ValueRange$;
function $m_Ljava_time_temporal_ValueRange$() {
  if ((!$n_Ljava_time_temporal_ValueRange$)) {
    $n_Ljava_time_temporal_ValueRange$ = new $c_Ljava_time_temporal_ValueRange$()
  };
  return $n_Ljava_time_temporal_ValueRange$
}
export { $m_Ljava_time_temporal_ValueRange$ as $m_Ljava_time_temporal_ValueRange$ };
//# sourceMappingURL=java.time.temporal.ValueRange$.js.map
