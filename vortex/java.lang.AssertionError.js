'use strict';
import * as $j_java$002elang$002eError from "./java.lang.Error.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
class $c_jl_AssertionError extends $j_java$002elang$002eError.$c_jl_Error {
  constructor(detailMessage) {
    super();
    var message = ("" + detailMessage);
    if ((detailMessage instanceof $j_java$002elang$002eObject.$c_jl_Throwable)) {
      var x2 = detailMessage;
      var cause = x2
    } else {
      var cause = null
    };
    $j_java$002elang$002eObject.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true)
  };
}
export { $c_jl_AssertionError as $c_jl_AssertionError };
var $d_jl_AssertionError = new $j_java$002elang$002eObject.$TypeData().initClass({
  jl_AssertionError: 0
}, false, "java.lang.AssertionError", {
  jl_AssertionError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_jl_AssertionError as $d_jl_AssertionError };
$c_jl_AssertionError.prototype.$classData = $d_jl_AssertionError;
//# sourceMappingURL=java.lang.AssertionError.js.map
