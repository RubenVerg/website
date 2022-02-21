'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $ct_ju_IllformedLocaleException__T__I__($thiz, s, errorIndex) {
  $thiz.ju_IllformedLocaleException__f_errorIndex = errorIndex;
  var s$1 = (s + ((errorIndex < 0) ? "" : ((" [at index " + errorIndex) + "]")));
  $j_java$002elang$002eObject.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s$1, null, true, true);
  return $thiz
}
export { $ct_ju_IllformedLocaleException__T__I__ as $ct_ju_IllformedLocaleException__T__I__ };
function $ct_ju_IllformedLocaleException__T__($thiz, s) {
  $ct_ju_IllformedLocaleException__T__I__($thiz, s, (-1));
  return $thiz
}
export { $ct_ju_IllformedLocaleException__T__ as $ct_ju_IllformedLocaleException__T__ };
class $c_ju_IllformedLocaleException extends $j_java$002elang$002eObject.$c_jl_RuntimeException {
  constructor() {
    super();
    this.ju_IllformedLocaleException__f_errorIndex = 0
  };
}
export { $c_ju_IllformedLocaleException as $c_ju_IllformedLocaleException };
var $d_ju_IllformedLocaleException = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_IllformedLocaleException: 0
}, false, "java.util.IllformedLocaleException", {
  ju_IllformedLocaleException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_ju_IllformedLocaleException as $d_ju_IllformedLocaleException };
$c_ju_IllformedLocaleException.prototype.$classData = $d_ju_IllformedLocaleException;
//# sourceMappingURL=java.util.IllformedLocaleException.js.map
