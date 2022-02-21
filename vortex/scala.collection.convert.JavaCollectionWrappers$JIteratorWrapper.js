'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper(underlying) {
  this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying = null;
  this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying = underlying
}
export { $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper as $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper };
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype = new $j_java$002elang$002eObject.$h_sc_AbstractIterator();
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.constructor = $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper;
/** @constructor */
function $h_sc_convert_JavaCollectionWrappers$JIteratorWrapper() {
  /*<skip>*/
}
export { $h_sc_convert_JavaCollectionWrappers$JIteratorWrapper as $h_sc_convert_JavaCollectionWrappers$JIteratorWrapper };
$h_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype = $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype;
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.hasNext__Z = (function() {
  return this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying.hasNext__Z()
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.next__O = (function() {
  return this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying.next__O()
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.productPrefix__T = (function() {
  return "JIteratorWrapper"
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.productArity__I = (function() {
  return 1
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying : $j_java$002elang$002eObject.$m_sr_Statics$().ioobe__I__O(x$1))
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.productIterator__sc_Iterator = (function() {
  return new $j_java$002elang$002eObject.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_sc_convert_JavaCollectionWrappers$JIteratorWrapper)) {
    var JIteratorWrapper$1 = x$1;
    var x = this.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying;
    var x$2 = JIteratorWrapper$1.sc_convert_JavaCollectionWrappers$JIteratorWrapper__f_underlying;
    return (x === x$2)
  } else {
    return false
  }
});
function $isArrayOf_sc_convert_JavaCollectionWrappers$JIteratorWrapper(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_convert_JavaCollectionWrappers$JIteratorWrapper)))
}
export { $isArrayOf_sc_convert_JavaCollectionWrappers$JIteratorWrapper as $isArrayOf_sc_convert_JavaCollectionWrappers$JIteratorWrapper };
var $d_sc_convert_JavaCollectionWrappers$JIteratorWrapper = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_convert_JavaCollectionWrappers$JIteratorWrapper: 0
}, false, "scala.collection.convert.JavaCollectionWrappers$JIteratorWrapper", {
  sc_convert_JavaCollectionWrappers$JIteratorWrapper: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
export { $d_sc_convert_JavaCollectionWrappers$JIteratorWrapper as $d_sc_convert_JavaCollectionWrappers$JIteratorWrapper };
$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper.prototype.$classData = $d_sc_convert_JavaCollectionWrappers$JIteratorWrapper;
//# sourceMappingURL=scala.collection.convert.JavaCollectionWrappers$JIteratorWrapper.js.map
