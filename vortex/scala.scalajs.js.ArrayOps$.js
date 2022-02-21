'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_sjs_js_ArrayOps$() {
  /*<skip>*/
}
export { $c_sjs_js_ArrayOps$ as $c_sjs_js_ArrayOps$ };
$c_sjs_js_ArrayOps$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sjs_js_ArrayOps$.prototype.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
  /*<skip>*/
}
export { $h_sjs_js_ArrayOps$ as $h_sjs_js_ArrayOps$ };
$h_sjs_js_ArrayOps$.prototype = $c_sjs_js_ArrayOps$.prototype;
$c_sjs_js_ArrayOps$.prototype.remove$extension__sjs_js_Array__I__O = (function(this$, idx) {
  if (((idx < 0) || (idx >= (this$.length | 0)))) {
    throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException())
  };
  return this$.splice(idx, 1)[0]
});
var $d_sjs_js_ArrayOps$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  sjs_js_ArrayOps$: 0
}, false, "scala.scalajs.js.ArrayOps$", {
  sjs_js_ArrayOps$: 1,
  O: 1
});
export { $d_sjs_js_ArrayOps$ as $d_sjs_js_ArrayOps$ };
$c_sjs_js_ArrayOps$.prototype.$classData = $d_sjs_js_ArrayOps$;
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$()
  };
  return $n_sjs_js_ArrayOps$
}
export { $m_sjs_js_ArrayOps$ as $m_sjs_js_ArrayOps$ };
//# sourceMappingURL=scala.scalajs.js.ArrayOps$.js.map
