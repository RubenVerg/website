'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002emutable$002eSet from "./scala.collection.mutable.Set.js";
/** @constructor */
function $c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1(outer) {
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_ui = null;
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_prev = null;
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_$outer = outer
  };
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_ui = outer.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying.iterator__sc_Iterator();
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_prev = $j_java$002elang$002eObject.$m_s_None$()
}
export { $c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 as $c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 };
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype.constructor = $c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1;
/** @constructor */
function $h_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1() {
  /*<skip>*/
}
export { $h_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 as $h_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 };
$h_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype = $c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype;
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype.hasNext__Z = (function() {
  return this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_ui.hasNext__Z()
});
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype.next__O = (function() {
  var e = this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_ui.next__O();
  this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_prev = new $j_java$002elang$002eObject.$c_s_Some(e);
  return e
});
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype.remove__V = (function() {
  var x1 = this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_prev;
  if ((x1 instanceof $j_java$002elang$002eObject.$c_s_Some)) {
    var x2 = x1;
    var e = x2.s_Some__f_value;
    var x1$2 = this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_$outer.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying;
    if ((!$j_scala$002ecollection$002emutable$002eSet.$is_scm_Set(x1$2))) {
      throw $j_java$002elang$002eObject.$ct_jl_UnsupportedOperationException__T__(new $j_java$002elang$002eObject.$c_jl_UnsupportedOperationException(), "remove")
    };
    var x2$2 = x1$2;
    x2$2.remove__O__Z(e);
    this.sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1__f_prev = $j_java$002elang$002eObject.$m_s_None$()
  } else {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalStateException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalStateException(), "next must be called at least once before remove")
  }
});
var $d_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1: 0
}, false, "scala.collection.convert.JavaCollectionWrappers$SetWrapper$$anon$1", {
  sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1: 1,
  O: 1,
  ju_Iterator: 1
});
export { $d_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 as $d_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1 };
$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1.prototype.$classData = $d_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1;
//# sourceMappingURL=scala.collection.convert.JavaCollectionWrappers$SetWrapper$$anon$1.js.map
