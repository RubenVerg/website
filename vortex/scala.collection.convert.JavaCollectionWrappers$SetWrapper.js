'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractSet from "./java.util.AbstractSet.js";
import * as $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024SetWrapper$0024$0024anon$00241 from "./scala.collection.convert.JavaCollectionWrappers$SetWrapper$$anon$1.js";
/** @constructor */
function $c_sc_convert_JavaCollectionWrappers$SetWrapper(underlying) {
  this.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying = null;
  this.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying = underlying
}
export { $c_sc_convert_JavaCollectionWrappers$SetWrapper as $c_sc_convert_JavaCollectionWrappers$SetWrapper };
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype = new $j_java$002eutil$002eAbstractSet.$h_ju_AbstractSet();
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.constructor = $c_sc_convert_JavaCollectionWrappers$SetWrapper;
/** @constructor */
function $h_sc_convert_JavaCollectionWrappers$SetWrapper() {
  /*<skip>*/
}
export { $h_sc_convert_JavaCollectionWrappers$SetWrapper as $h_sc_convert_JavaCollectionWrappers$SetWrapper };
$h_sc_convert_JavaCollectionWrappers$SetWrapper.prototype = $c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype;
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.contains__O__Z = (function(o) {
  try {
    return this.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying.contains__O__Z(o)
  } catch (e) {
    if (false) {
      return false
    } else {
      throw e
    }
  }
});
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.isEmpty__Z = (function() {
  return this.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying.isEmpty__Z()
});
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.size__I = (function() {
  return this.sc_convert_JavaCollectionWrappers$SetWrapper__f_scala$collection$convert$JavaCollectionWrappers$SetWrapper$$underlying.size__I()
});
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.iterator__ju_Iterator = (function() {
  return new $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024SetWrapper$0024$0024anon$00241.$c_sc_convert_JavaCollectionWrappers$SetWrapper$$anon$1(this)
});
var $d_sc_convert_JavaCollectionWrappers$SetWrapper = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_convert_JavaCollectionWrappers$SetWrapper: 0
}, false, "scala.collection.convert.JavaCollectionWrappers$SetWrapper", {
  sc_convert_JavaCollectionWrappers$SetWrapper: 1,
  ju_AbstractSet: 1,
  ju_AbstractCollection: 1,
  O: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  ju_Set: 1,
  Ljava_io_Serializable: 1
});
export { $d_sc_convert_JavaCollectionWrappers$SetWrapper as $d_sc_convert_JavaCollectionWrappers$SetWrapper };
$c_sc_convert_JavaCollectionWrappers$SetWrapper.prototype.$classData = $d_sc_convert_JavaCollectionWrappers$SetWrapper;
//# sourceMappingURL=scala.collection.convert.JavaCollectionWrappers$SetWrapper.js.map
