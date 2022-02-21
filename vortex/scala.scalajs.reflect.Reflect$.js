'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_sjs_reflect_Reflect$() {
  this.sjs_reflect_Reflect$__f_loadableModuleClasses = null;
  this.sjs_reflect_Reflect$__f_instantiatableClasses = null;
  $n_sjs_reflect_Reflect$ = this;
  this.sjs_reflect_Reflect$__f_loadableModuleClasses = {};
  this.sjs_reflect_Reflect$__f_instantiatableClasses = {}
}
export { $c_sjs_reflect_Reflect$ as $c_sjs_reflect_Reflect$ };
$c_sjs_reflect_Reflect$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sjs_reflect_Reflect$.prototype.constructor = $c_sjs_reflect_Reflect$;
/** @constructor */
function $h_sjs_reflect_Reflect$() {
  /*<skip>*/
}
export { $h_sjs_reflect_Reflect$ as $h_sjs_reflect_Reflect$ };
$h_sjs_reflect_Reflect$.prototype = $c_sjs_reflect_Reflect$.prototype;
$c_sjs_reflect_Reflect$.prototype.lookupLoadableModuleClass__T__s_Option = (function(fqcn) {
  var dict = this.sjs_reflect_Reflect$__f_loadableModuleClasses;
  return ((!(!$j_java$002elang$002eObject.$m_sjs_js_WrappedDictionary$Cache$().sjs_js_WrappedDictionary$Cache$__f_safeHasOwnProperty.call(dict, fqcn))) ? new $j_java$002elang$002eObject.$c_s_Some(dict[fqcn]) : $j_java$002elang$002eObject.$m_s_None$())
});
var $d_sjs_reflect_Reflect$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  sjs_reflect_Reflect$: 0
}, false, "scala.scalajs.reflect.Reflect$", {
  sjs_reflect_Reflect$: 1,
  O: 1
});
export { $d_sjs_reflect_Reflect$ as $d_sjs_reflect_Reflect$ };
$c_sjs_reflect_Reflect$.prototype.$classData = $d_sjs_reflect_Reflect$;
var $n_sjs_reflect_Reflect$;
function $m_sjs_reflect_Reflect$() {
  if ((!$n_sjs_reflect_Reflect$)) {
    $n_sjs_reflect_Reflect$ = new $c_sjs_reflect_Reflect$()
  };
  return $n_sjs_reflect_Reflect$
}
export { $m_sjs_reflect_Reflect$ as $m_sjs_reflect_Reflect$ };
//# sourceMappingURL=scala.scalajs.reflect.Reflect$.js.map
