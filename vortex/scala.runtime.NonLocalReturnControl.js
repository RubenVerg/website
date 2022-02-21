'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eutil$002econtrol$002eControlThrowable from "./scala.util.control.ControlThrowable.js";
class $c_sr_NonLocalReturnControl extends $j_scala$002eutil$002econtrol$002eControlThrowable.$c_s_util_control_ControlThrowable {
  constructor(key, value) {
    super();
    this.sr_NonLocalReturnControl__f_key = null;
    this.sr_NonLocalReturnControl__f_value = null;
    this.sr_NonLocalReturnControl__f_key = key;
    this.sr_NonLocalReturnControl__f_value = value;
    $j_java$002elang$002eObject.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, false, false)
  };
  fillInStackTrace__jl_Throwable() {
    return this
  };
}
export { $c_sr_NonLocalReturnControl as $c_sr_NonLocalReturnControl };
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sr_NonLocalReturnControl)))
}
export { $isArrayOf_sr_NonLocalReturnControl as $isArrayOf_sr_NonLocalReturnControl };
var $d_sr_NonLocalReturnControl = new $j_java$002elang$002eObject.$TypeData().initClass({
  sr_NonLocalReturnControl: 0
}, false, "scala.runtime.NonLocalReturnControl", {
  sr_NonLocalReturnControl: 1,
  s_util_control_ControlThrowable: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_sr_NonLocalReturnControl as $d_sr_NonLocalReturnControl };
$c_sr_NonLocalReturnControl.prototype.$classData = $d_sr_NonLocalReturnControl;
//# sourceMappingURL=scala.runtime.NonLocalReturnControl.js.map
