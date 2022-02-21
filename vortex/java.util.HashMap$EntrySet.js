'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractSet from "./java.util.AbstractSet.js";
import * as $j_java$002eutil$002eHashMap$0024NodeIterator from "./java.util.HashMap$NodeIterator.js";
import * as $j_java$002eutil$002eMap$0024Entry from "./java.util.Map$Entry.js";
/** @constructor */
function $c_ju_HashMap$EntrySet(outer) {
  this.ju_HashMap$EntrySet__f_$outer = null;
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.ju_HashMap$EntrySet__f_$outer = outer
  }
}
export { $c_ju_HashMap$EntrySet as $c_ju_HashMap$EntrySet };
$c_ju_HashMap$EntrySet.prototype = new $j_java$002eutil$002eAbstractSet.$h_ju_AbstractSet();
$c_ju_HashMap$EntrySet.prototype.constructor = $c_ju_HashMap$EntrySet;
/** @constructor */
function $h_ju_HashMap$EntrySet() {
  /*<skip>*/
}
export { $h_ju_HashMap$EntrySet as $h_ju_HashMap$EntrySet };
$h_ju_HashMap$EntrySet.prototype = $c_ju_HashMap$EntrySet.prototype;
$c_ju_HashMap$EntrySet.prototype.iterator__ju_Iterator = (function() {
  var this$1 = this.ju_HashMap$EntrySet__f_$outer;
  return new $j_java$002eutil$002eHashMap$0024NodeIterator.$c_ju_HashMap$NodeIterator(this$1)
});
$c_ju_HashMap$EntrySet.prototype.size__I = (function() {
  return this.ju_HashMap$EntrySet__f_$outer.ju_HashMap__f_contentSize
});
$c_ju_HashMap$EntrySet.prototype.contains__O__Z = (function(o) {
  if ($j_java$002eutil$002eMap$0024Entry.$is_ju_Map$Entry(o)) {
    var x2 = o;
    var this$1 = this.ju_HashMap$EntrySet__f_$outer;
    var key = x2.ju_HashMap$Node__f_key;
    if ((key === null)) {
      var hash = 0
    } else {
      var originalHash = $j_java$002elang$002eObject.$dp_hashCode__I(key);
      var hash = (originalHash ^ ((originalHash >>> 16) | 0))
    };
    var node = this$1.java$util$HashMap$$findNode0__O__I__I__ju_HashMap$Node(key, hash, (hash & (((-1) + this$1.ju_HashMap__f_java$util$HashMap$$table.u.length) | 0)));
    if ((node !== null)) {
      var a = node.ju_HashMap$Node__f_value;
      var b = x2.ju_HashMap$Node__f_value;
      return ((a === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a, b))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_HashMap$EntrySet.prototype.remove__O__Z = (function(o) {
  if ($j_java$002eutil$002eMap$0024Entry.$is_ju_Map$Entry(o)) {
    var x2 = o;
    var key = x2.ju_HashMap$Node__f_key;
    var this$1 = this.ju_HashMap$EntrySet__f_$outer;
    if ((key === null)) {
      var hash = 0
    } else {
      var originalHash = $j_java$002elang$002eObject.$dp_hashCode__I(key);
      var hash = (originalHash ^ ((originalHash >>> 16) | 0))
    };
    var idx = (hash & (((-1) + this$1.ju_HashMap__f_java$util$HashMap$$table.u.length) | 0));
    var node = this$1.java$util$HashMap$$findNode0__O__I__I__ju_HashMap$Node(key, hash, idx);
    if ((node !== null)) {
      var a = node.ju_HashMap$Node__f_value;
      var b = x2.ju_HashMap$Node__f_value;
      var $$x1 = ((a === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a, b))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      this.ju_HashMap$EntrySet__f_$outer.java$util$HashMap$$remove0__ju_HashMap$Node__I__V(node, idx);
      return true
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_HashMap$EntrySet.prototype.clear__V = (function() {
  this.ju_HashMap$EntrySet__f_$outer.clear__V()
});
var $d_ju_HashMap$EntrySet = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_HashMap$EntrySet: 0
}, false, "java.util.HashMap$EntrySet", {
  ju_HashMap$EntrySet: 1,
  ju_AbstractSet: 1,
  ju_AbstractCollection: 1,
  O: 1,
  ju_Collection: 1,
  jl_Iterable: 1,
  ju_Set: 1
});
export { $d_ju_HashMap$EntrySet as $d_ju_HashMap$EntrySet };
$c_ju_HashMap$EntrySet.prototype.$classData = $d_ju_HashMap$EntrySet;
//# sourceMappingURL=java.util.HashMap$EntrySet.js.map
