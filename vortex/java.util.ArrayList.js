'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractList from "./java.util.AbstractList.js";
import * as $j_scala$002escalajs$002ejs$002eArrayOps$0024 from "./scala.scalajs.js.ArrayOps$.js";
function $ct_ju_ArrayList__sjs_js_Array__($thiz, inner) {
  $thiz.ju_ArrayList__f_java$util$ArrayList$$inner = inner;
  return $thiz
}
export { $ct_ju_ArrayList__sjs_js_Array__ as $ct_ju_ArrayList__sjs_js_Array__ };
function $ct_ju_ArrayList__($thiz) {
  $ct_ju_ArrayList__sjs_js_Array__($thiz, []);
  return $thiz
}
export { $ct_ju_ArrayList__ as $ct_ju_ArrayList__ };
/** @constructor */
function $c_ju_ArrayList() {
  this.ju_ArrayList__f_java$util$ArrayList$$inner = null
}
export { $c_ju_ArrayList as $c_ju_ArrayList };
$c_ju_ArrayList.prototype = new $j_java$002eutil$002eAbstractList.$h_ju_AbstractList();
$c_ju_ArrayList.prototype.constructor = $c_ju_ArrayList;
/** @constructor */
function $h_ju_ArrayList() {
  /*<skip>*/
}
export { $h_ju_ArrayList as $h_ju_ArrayList };
$h_ju_ArrayList.prototype = $c_ju_ArrayList.prototype;
$c_ju_ArrayList.prototype.size__I = (function() {
  return (this.ju_ArrayList__f_java$util$ArrayList$$inner.length | 0)
});
$c_ju_ArrayList.prototype.get__I__O = (function(index) {
  this.checkIndexInBounds__I__V(index);
  return this.ju_ArrayList__f_java$util$ArrayList$$inner[index]
});
$c_ju_ArrayList.prototype.add__O__Z = (function(e) {
  var array = this.ju_ArrayList__f_java$util$ArrayList$$inner;
  array.push(e);
  return true
});
$c_ju_ArrayList.prototype.remove__I__O = (function(index) {
  this.checkIndexInBounds__I__V(index);
  var $$x1 = $j_scala$002escalajs$002ejs$002eArrayOps$0024.$m_sjs_js_ArrayOps$();
  var array = this.ju_ArrayList__f_java$util$ArrayList$$inner;
  return $$x1.remove$extension__sjs_js_Array__I__O(array, index)
});
var $d_ju_ArrayList = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_ArrayList: 0
}, false, "java.util.ArrayList", {
  ju_ArrayList: 1,
  ju_AbstractList: 1,
  ju_AbstractCollection: 1,
  O: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  ju_List: 1,
  ju_RandomAccess: 1,
  jl_Cloneable: 1,
  Ljava_io_Serializable: 1
});
export { $d_ju_ArrayList as $d_ju_ArrayList };
$c_ju_ArrayList.prototype.$classData = $d_ju_ArrayList;
//# sourceMappingURL=java.util.ArrayList.js.map
