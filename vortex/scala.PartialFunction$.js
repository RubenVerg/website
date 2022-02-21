'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ePartialFunction$0024$0024anon$00241 from "./scala.PartialFunction$$anon$1.js";
/** @constructor */
function $c_s_PartialFunction$() {
  this.s_PartialFunction$__f_fallback_fn = null;
  this.s_PartialFunction$__f_scala$PartialFunction$$constFalse = null;
  this.s_PartialFunction$__f_empty_pf = null;
  $n_s_PartialFunction$ = this;
  this.s_PartialFunction$__f_fallback_fn = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$1) => ((x$2$2) => $m_s_PartialFunction$().s_PartialFunction$__f_fallback_fn))(this));
  this.s_PartialFunction$__f_scala$PartialFunction$$constFalse = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$2) => ((x$3$2) => false))(this));
  this.s_PartialFunction$__f_empty_pf = new $j_scala$002ePartialFunction$0024$0024anon$00241.$c_s_PartialFunction$$anon$1()
}
export { $c_s_PartialFunction$ as $c_s_PartialFunction$ };
$c_s_PartialFunction$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_s_PartialFunction$.prototype.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
  /*<skip>*/
}
export { $h_s_PartialFunction$ as $h_s_PartialFunction$ };
$h_s_PartialFunction$.prototype = $c_s_PartialFunction$.prototype;
var $d_s_PartialFunction$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  s_PartialFunction$: 0
}, false, "scala.PartialFunction$", {
  s_PartialFunction$: 1,
  O: 1
});
export { $d_s_PartialFunction$ as $d_s_PartialFunction$ };
$c_s_PartialFunction$.prototype.$classData = $d_s_PartialFunction$;
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$()
  };
  return $n_s_PartialFunction$
}
export { $m_s_PartialFunction$ as $m_s_PartialFunction$ };
//# sourceMappingURL=scala.PartialFunction$.js.map
