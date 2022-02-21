'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_Ljava_time_Year$() {
  this.Ljava_time_Year$__f_MIN_VALUE$lzy1 = 0;
  this.Ljava_time_Year$__f_MIN_VALUEbitmap$1 = false;
  this.Ljava_time_Year$__f_MAX_VALUE$lzy1 = 0;
  this.Ljava_time_Year$__f_MAX_VALUEbitmap$1 = false;
  this.Ljava_time_Year$__f_PARSER$lzy1 = null;
  this.Ljava_time_Year$__f_PARSERbitmap$1 = false
}
export { $c_Ljava_time_Year$ as $c_Ljava_time_Year$ };
$c_Ljava_time_Year$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Year$.prototype.constructor = $c_Ljava_time_Year$;
/** @constructor */
function $h_Ljava_time_Year$() {
  /*<skip>*/
}
export { $h_Ljava_time_Year$ as $h_Ljava_time_Year$ };
$h_Ljava_time_Year$.prototype = $c_Ljava_time_Year$.prototype;
$c_Ljava_time_Year$.prototype.MIN_VALUE__I = (function() {
  if ((!this.Ljava_time_Year$__f_MIN_VALUEbitmap$1)) {
    this.Ljava_time_Year$__f_MIN_VALUE$lzy1 = (-999999999);
    this.Ljava_time_Year$__f_MIN_VALUEbitmap$1 = true
  };
  return this.Ljava_time_Year$__f_MIN_VALUE$lzy1
});
$c_Ljava_time_Year$.prototype.MAX_VALUE__I = (function() {
  if ((!this.Ljava_time_Year$__f_MAX_VALUEbitmap$1)) {
    this.Ljava_time_Year$__f_MAX_VALUE$lzy1 = 999999999;
    this.Ljava_time_Year$__f_MAX_VALUEbitmap$1 = true
  };
  return this.Ljava_time_Year$__f_MAX_VALUE$lzy1
});
var $d_Ljava_time_Year$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Year$: 0
}, false, "java.time.Year$", {
  Ljava_time_Year$: 1,
  O: 1
});
export { $d_Ljava_time_Year$ as $d_Ljava_time_Year$ };
$c_Ljava_time_Year$.prototype.$classData = $d_Ljava_time_Year$;
var $n_Ljava_time_Year$;
function $m_Ljava_time_Year$() {
  if ((!$n_Ljava_time_Year$)) {
    $n_Ljava_time_Year$ = new $c_Ljava_time_Year$()
  };
  return $n_Ljava_time_Year$
}
export { $m_Ljava_time_Year$ as $m_Ljava_time_Year$ };
//# sourceMappingURL=java.time.Year$.js.map
