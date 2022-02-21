'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024IteratorWrapper from "./scala.collection.convert.JavaCollectionWrappers$IteratorWrapper.js";
import * as $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024JIteratorWrapper from "./scala.collection.convert.JavaCollectionWrappers$JIteratorWrapper.js";
import * as $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024MutableSetWrapper from "./scala.collection.convert.JavaCollectionWrappers$MutableSetWrapper.js";
import * as $j_scala$002ejdk$002eCollectionConverters$0024 from "./scala.jdk.CollectionConverters$.js";
import * as $j_scala$002ejdk$002ejavaapi$002eCollectionConverters$0024 from "./scala.jdk.javaapi.CollectionConverters$.js";
function $f_sc_convert_AsScalaConverters__asScala__ju_Iterator__sc_Iterator($thiz, i) {
  if ((i === null)) {
    return null
  } else if (false) {
    var x3 = i;
    var wrapped = x3.underlying__sc_Iterator();
    return wrapped
  } else {
    return new $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024JIteratorWrapper.$c_sc_convert_JavaCollectionWrappers$JIteratorWrapper(i)
  }
}
export { $f_sc_convert_AsScalaConverters__asScala__ju_Iterator__sc_Iterator as $f_sc_convert_AsScalaConverters__asScala__ju_Iterator__sc_Iterator };
function $f_sc_convert_AsScalaConverters__asScala__ju_Set__scm_Set($thiz, s) {
  if ((s === null)) {
    return null
  } else if (false) {
    var x3 = s;
    var wrapped = x3.underlying__scm_Set();
    return wrapped
  } else {
    return new $c_sc_convert_JavaCollectionWrappers$JSetWrapper(s)
  }
}
export { $f_sc_convert_AsScalaConverters__asScala__ju_Set__scm_Set as $f_sc_convert_AsScalaConverters__asScala__ju_Set__scm_Set };
/** @constructor */
function $c_sc_convert_AsScalaExtensions$IteratorHasAsScala(outer, i) {
  this.sc_convert_AsScalaExtensions$IteratorHasAsScala__f_i = null;
  this.sc_convert_AsScalaExtensions$IteratorHasAsScala__f_$outer = null;
  this.sc_convert_AsScalaExtensions$IteratorHasAsScala__f_i = i;
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.sc_convert_AsScalaExtensions$IteratorHasAsScala__f_$outer = outer
  }
}
export { $c_sc_convert_AsScalaExtensions$IteratorHasAsScala as $c_sc_convert_AsScalaExtensions$IteratorHasAsScala };
$c_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype.constructor = $c_sc_convert_AsScalaExtensions$IteratorHasAsScala;
/** @constructor */
function $h_sc_convert_AsScalaExtensions$IteratorHasAsScala() {
  /*<skip>*/
}
export { $h_sc_convert_AsScalaExtensions$IteratorHasAsScala as $h_sc_convert_AsScalaExtensions$IteratorHasAsScala };
$h_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype = $c_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype;
$c_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype.asScala__sc_Iterator = (function() {
  var this$1 = $j_scala$002ejdk$002ejavaapi$002eCollectionConverters$0024.$m_s_jdk_javaapi_CollectionConverters$();
  var i = this.sc_convert_AsScalaExtensions$IteratorHasAsScala__f_i;
  return $f_sc_convert_AsScalaConverters__asScala__ju_Iterator__sc_Iterator(this$1, i)
});
var $d_sc_convert_AsScalaExtensions$IteratorHasAsScala = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_convert_AsScalaExtensions$IteratorHasAsScala: 0
}, false, "scala.collection.convert.AsScalaExtensions$IteratorHasAsScala", {
  sc_convert_AsScalaExtensions$IteratorHasAsScala: 1,
  O: 1
});
export { $d_sc_convert_AsScalaExtensions$IteratorHasAsScala as $d_sc_convert_AsScalaExtensions$IteratorHasAsScala };
$c_sc_convert_AsScalaExtensions$IteratorHasAsScala.prototype.$classData = $d_sc_convert_AsScalaExtensions$IteratorHasAsScala;
/** @constructor */
function $c_sc_convert_JavaCollectionWrappers$JSetWrapper(underlying) {
  this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying = null;
  this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying = underlying
}
export { $c_sc_convert_JavaCollectionWrappers$JSetWrapper as $c_sc_convert_JavaCollectionWrappers$JSetWrapper };
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype = new $j_java$002elang$002eObject.$h_scm_AbstractSet();
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.constructor = $c_sc_convert_JavaCollectionWrappers$JSetWrapper;
/** @constructor */
function $h_sc_convert_JavaCollectionWrappers$JSetWrapper() {
  /*<skip>*/
}
export { $h_sc_convert_JavaCollectionWrappers$JSetWrapper as $h_sc_convert_JavaCollectionWrappers$JSetWrapper };
$h_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype = $c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype;
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.map__F1__O = (function(f) {
  return $j_java$002elang$002eObject.$f_sc_StrictOptimizedIterableOps__map__F1__O(this, f)
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.size__I = (function() {
  return this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.size__I()
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.isEmpty__Z = (function() {
  return this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.isEmpty__Z()
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.knownSize__I = (function() {
  return (this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.isEmpty__Z() ? 0 : (-1))
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.iterator__sc_Iterator = (function() {
  var this$1 = $j_scala$002ejdk$002eCollectionConverters$0024.$m_s_jdk_CollectionConverters$();
  var i = this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.iterator__ju_Iterator();
  return new $c_sc_convert_AsScalaExtensions$IteratorHasAsScala(this$1, i).asScala__sc_Iterator()
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.contains__O__Z = (function(elem) {
  return this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.contains__O__Z(elem)
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.addOne__O__sc_convert_JavaCollectionWrappers$JSetWrapper = (function(elem) {
  this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.add__O__Z(elem);
  return this
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.subtractOne__O__sc_convert_JavaCollectionWrappers$JSetWrapper = (function(elem) {
  this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.remove__O__Z(elem);
  return this
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.remove__O__Z = (function(elem) {
  return this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.remove__O__Z(elem)
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.clear__V = (function() {
  this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying.clear__V()
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.iterableFactory__sc_IterableFactory = (function() {
  return $j_java$002elang$002eObject.$m_scm_HashSet$()
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.productPrefix__T = (function() {
  return "JSetWrapper"
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.productArity__I = (function() {
  return 1
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying : $j_java$002elang$002eObject.$m_sr_Statics$().ioobe__I__O(x$1))
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.productIterator__sc_Iterator = (function() {
  return new $j_java$002elang$002eObject.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.subtractOne__O__scm_Shrinkable = (function(elem) {
  return this.subtractOne__O__sc_convert_JavaCollectionWrappers$JSetWrapper(elem)
});
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.addOne__O__scm_Growable = (function(elem) {
  return this.addOne__O__sc_convert_JavaCollectionWrappers$JSetWrapper(elem)
});
function $isArrayOf_sc_convert_JavaCollectionWrappers$JSetWrapper(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_convert_JavaCollectionWrappers$JSetWrapper)))
}
export { $isArrayOf_sc_convert_JavaCollectionWrappers$JSetWrapper as $isArrayOf_sc_convert_JavaCollectionWrappers$JSetWrapper };
var $d_sc_convert_JavaCollectionWrappers$JSetWrapper = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_convert_JavaCollectionWrappers$JSetWrapper: 0
}, false, "scala.collection.convert.JavaCollectionWrappers$JSetWrapper", {
  sc_convert_JavaCollectionWrappers$JSetWrapper: 1,
  scm_AbstractSet: 1,
  sc_AbstractSet: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Set: 1,
  sc_SetOps: 1,
  F1: 1,
  s_Equals: 1,
  scm_Set: 1,
  scm_Iterable: 1,
  scm_SetOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSetOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
export { $d_sc_convert_JavaCollectionWrappers$JSetWrapper as $d_sc_convert_JavaCollectionWrappers$JSetWrapper };
$c_sc_convert_JavaCollectionWrappers$JSetWrapper.prototype.$classData = $d_sc_convert_JavaCollectionWrappers$JSetWrapper;
//# sourceMappingURL=scala.collection.convert.AsScalaConverters.js.map
