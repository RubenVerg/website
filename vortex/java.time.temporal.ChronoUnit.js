'use strict';
import * as $j_java$002elang$002eEnum from "./java.lang.Enum.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
function $ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__($thiz, name, ordinal, duration, _$name, _$ordinal) {
  $thiz.Ljava_time_temporal_ChronoUnit__f_name = name;
  $thiz.Ljava_time_temporal_ChronoUnit__f_duration = duration;
  $j_java$002elang$002eEnum.$ct_jl_Enum__T__I__($thiz, _$name, _$ordinal);
  return $thiz
}
export { $ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__ as $ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__ };
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false
}
export { $c_Ljava_time_temporal_ChronoUnit as $c_Ljava_time_temporal_ChronoUnit };
$c_Ljava_time_temporal_ChronoUnit.prototype = new $j_java$002elang$002eEnum.$h_jl_Enum();
$c_Ljava_time_temporal_ChronoUnit.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit as $h_Ljava_time_temporal_ChronoUnit };
$h_Ljava_time_temporal_ChronoUnit.prototype = $c_Ljava_time_temporal_ChronoUnit.prototype;
$c_Ljava_time_temporal_ChronoUnit.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Ljava_time_temporal_ChronoUnit.prototype.toString__T = (function() {
  return this.Ljava_time_temporal_ChronoUnit__f_name
});
var $d_Ljava_time_temporal_ChronoUnit = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit: 0
}, false, "java.time.temporal.ChronoUnit", {
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1
});
export { $d_Ljava_time_temporal_ChronoUnit as $d_Ljava_time_temporal_ChronoUnit };
$c_Ljava_time_temporal_ChronoUnit.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit;
//# sourceMappingURL=java.time.temporal.ChronoUnit.js.map
