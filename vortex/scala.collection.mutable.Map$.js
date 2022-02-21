'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_scm_Map$() {
  this.sc_MapFactory$Delegate__f_delegate = null;
  $j_java$002elang$002eObject.$ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $j_java$002elang$002eObject.$m_scm_HashMap$())
}
export { $c_scm_Map$ as $c_scm_Map$ };
$c_scm_Map$.prototype = new $j_java$002elang$002eObject.$h_sc_MapFactory$Delegate();
$c_scm_Map$.prototype.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
  /*<skip>*/
}
export { $h_scm_Map$ as $h_scm_Map$ };
$h_scm_Map$.prototype = $c_scm_Map$.prototype;
var $d_scm_Map$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  scm_Map$: 0
}, false, "scala.collection.mutable.Map$", {
  scm_Map$: 1,
  sc_MapFactory$Delegate: 1,
  O: 1,
  sc_MapFactory: 1,
  Ljava_io_Serializable: 1
});
export { $d_scm_Map$ as $d_scm_Map$ };
$c_scm_Map$.prototype.$classData = $d_scm_Map$;
var $n_scm_Map$;
function $m_scm_Map$() {
  if ((!$n_scm_Map$)) {
    $n_scm_Map$ = new $c_scm_Map$()
  };
  return $n_scm_Map$
}
export { $m_scm_Map$ as $m_scm_Map$ };
//# sourceMappingURL=scala.collection.mutable.Map$.js.map
