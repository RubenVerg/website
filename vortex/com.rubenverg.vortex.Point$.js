'use strict';
import * as $j_com$002erubenverg$002evortex$002ePoint from "./com.rubenverg.vortex.Point.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_Point$() {
  this.Lcom_rubenverg_vortex_Point$__f_Origin = null;
  $n_Lcom_rubenverg_vortex_Point$ = this;
  this.Lcom_rubenverg_vortex_Point$__f_Origin = ($m_Lcom_rubenverg_vortex_Point$(), new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(0.0, 0.0))
}
export { $c_Lcom_rubenverg_vortex_Point$ as $c_Lcom_rubenverg_vortex_Point$ };
$c_Lcom_rubenverg_vortex_Point$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_Point$.prototype.constructor = $c_Lcom_rubenverg_vortex_Point$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_Point$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_Point$ as $h_Lcom_rubenverg_vortex_Point$ };
$h_Lcom_rubenverg_vortex_Point$.prototype = $c_Lcom_rubenverg_vortex_Point$.prototype;
$c_Lcom_rubenverg_vortex_Point$.prototype.toString__T = (function() {
  return "Point"
});
$c_Lcom_rubenverg_vortex_Point$.prototype.unitCircle__D__Lcom_rubenverg_vortex_Point = (function(angle) {
  $m_Lcom_rubenverg_vortex_Point$();
  var x = (+Math.cos(angle));
  var y = (+Math.sin(angle));
  return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x, y)
});
$c_Lcom_rubenverg_vortex_Point$.prototype.angleMagnitude__D__D__Lcom_rubenverg_vortex_Point = (function(angle, magnitude) {
  var Point_this = this.unitCircle__D__Lcom_rubenverg_vortex_Point(angle);
  $m_Lcom_rubenverg_vortex_Point$();
  var x = (Point_this.Lcom_rubenverg_vortex_Point__f_x * magnitude);
  var y = (Point_this.Lcom_rubenverg_vortex_Point__f_y * magnitude);
  return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x, y)
});
var $d_Lcom_rubenverg_vortex_Point$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_Point$: 0
}, false, "com.rubenverg.vortex.Point$", {
  Lcom_rubenverg_vortex_Point$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1
});
export { $d_Lcom_rubenverg_vortex_Point$ as $d_Lcom_rubenverg_vortex_Point$ };
$c_Lcom_rubenverg_vortex_Point$.prototype.$classData = $d_Lcom_rubenverg_vortex_Point$;
var $n_Lcom_rubenverg_vortex_Point$;
function $m_Lcom_rubenverg_vortex_Point$() {
  if ((!$n_Lcom_rubenverg_vortex_Point$)) {
    $n_Lcom_rubenverg_vortex_Point$ = new $c_Lcom_rubenverg_vortex_Point$()
  };
  return $n_Lcom_rubenverg_vortex_Point$
}
export { $m_Lcom_rubenverg_vortex_Point$ as $m_Lcom_rubenverg_vortex_Point$ };
//# sourceMappingURL=com.rubenverg.vortex.Point$.js.map
