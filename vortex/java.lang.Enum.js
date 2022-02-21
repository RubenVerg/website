'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $ct_jl_Enum__T__I__($thiz, _name, _ordinal) {
  $thiz.jl_Enum__f__name = _name;
  $thiz.jl_Enum__f__ordinal = _ordinal;
  return $thiz
}
export { $ct_jl_Enum__T__I__ as $ct_jl_Enum__T__I__ };
/** @constructor */
function $c_jl_Enum() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0
}
export { $c_jl_Enum as $c_jl_Enum };
$c_jl_Enum.prototype = new $j_java$002elang$002eObject.$h_O();
$c_jl_Enum.prototype.constructor = $c_jl_Enum;
/** @constructor */
function $h_jl_Enum() {
  /*<skip>*/
}
export { $h_jl_Enum as $h_jl_Enum };
$h_jl_Enum.prototype = $c_jl_Enum.prototype;
$c_jl_Enum.prototype.toString__T = (function() {
  return this.jl_Enum__f__name
});
$c_jl_Enum.prototype.equals__O__Z = (function(that) {
  return (this === that)
});
$c_jl_Enum.prototype.hashCode__I = (function() {
  return $j_java$002elang$002eObject.$systemIdentityHashCode(this)
});
//# sourceMappingURL=java.lang.Enum.js.map
