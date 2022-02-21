'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $ct_Ljava_time_DateTimeException__T__jl_Throwable__($thiz, message, cause) {
  $j_java$002elang$002eObject.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
}
export { $ct_Ljava_time_DateTimeException__T__jl_Throwable__ as $ct_Ljava_time_DateTimeException__T__jl_Throwable__ };
function $ct_Ljava_time_DateTimeException__T__($thiz, message) {
  $j_java$002elang$002eObject.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, message, null, true, true);
  return $thiz
}
export { $ct_Ljava_time_DateTimeException__T__ as $ct_Ljava_time_DateTimeException__T__ };
class $c_Ljava_time_DateTimeException extends $j_java$002elang$002eObject.$c_jl_RuntimeException {
}
export { $c_Ljava_time_DateTimeException as $c_Ljava_time_DateTimeException };
function $isArrayOf_Ljava_time_DateTimeException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_DateTimeException)))
}
export { $isArrayOf_Ljava_time_DateTimeException as $isArrayOf_Ljava_time_DateTimeException };
var $d_Ljava_time_DateTimeException = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DateTimeException: 0
}, false, "java.time.DateTimeException", {
  Ljava_time_DateTimeException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_DateTimeException as $d_Ljava_time_DateTimeException };
$c_Ljava_time_DateTimeException.prototype.$classData = $d_Ljava_time_DateTimeException;
//# sourceMappingURL=java.time.DateTimeException.js.map
