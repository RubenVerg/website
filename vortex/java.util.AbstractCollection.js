'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $p_ju_AbstractCollection__findAndRemove$1__ju_Iterator__O__Z($thiz, iter, o$2) {
  while (true) {
    if (iter.hasNext__Z()) {
      var a = iter.next__O();
      if (((a === null) ? (o$2 === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a, o$2))) {
        iter.remove__V();
        return true
      }
    } else {
      return false
    }
  }
}
export { $p_ju_AbstractCollection__findAndRemove$1__ju_Iterator__O__Z as $p_ju_AbstractCollection__findAndRemove$1__ju_Iterator__O__Z };
/** @constructor */
function $c_ju_AbstractCollection() {
  /*<skip>*/
}
export { $c_ju_AbstractCollection as $c_ju_AbstractCollection };
$c_ju_AbstractCollection.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_AbstractCollection.prototype.constructor = $c_ju_AbstractCollection;
/** @constructor */
function $h_ju_AbstractCollection() {
  /*<skip>*/
}
export { $h_ju_AbstractCollection as $h_ju_AbstractCollection };
$h_ju_AbstractCollection.prototype = $c_ju_AbstractCollection.prototype;
$c_ju_AbstractCollection.prototype.isEmpty__Z = (function() {
  return (this.size__I() === 0)
});
$c_ju_AbstractCollection.prototype.contains__O__Z = (function(o) {
  var _\uff3fself = this.iterator__ju_Iterator();
  while (_\uff3fself.hasNext__Z()) {
    var arg1 = _\uff3fself.next__O();
    if (((o === null) ? (arg1 === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(o, arg1))) {
      return true
    }
  };
  return false
});
$c_ju_AbstractCollection.prototype.toArray__AO__AO = (function(a) {
  if ((a.u.length >= this.size__I())) {
    var toFill = a
  } else {
    var componentType = $j_java$002elang$002eObject.$objectGetClass(a).getComponentType__jl_Class();
    var length = this.size__I();
    var toFill = $j_java$002elang$002eObject.$m_jl_reflect_Array$().newInstance__jl_Class__I__O(componentType, length)
  };
  var iter = this.iterator__ju_Iterator();
  var end = this.size__I();
  var i = 0;
  while ((i < end)) {
    var arg1 = i;
    toFill.u[arg1] = iter.next__O();
    i = ((1 + i) | 0)
  };
  if ((toFill.u.length > this.size__I())) {
    toFill.u[this.size__I()] = null
  };
  return toFill
});
$c_ju_AbstractCollection.prototype.add__O__Z = (function(e) {
  throw $j_java$002elang$002eObject.$ct_jl_UnsupportedOperationException__(new $j_java$002elang$002eObject.$c_jl_UnsupportedOperationException())
});
$c_ju_AbstractCollection.prototype.remove__O__Z = (function(o) {
  return $p_ju_AbstractCollection__findAndRemove$1__ju_Iterator__O__Z(this, this.iterator__ju_Iterator(), o)
});
$c_ju_AbstractCollection.prototype.containsAll__ju_Collection__Z = (function(c) {
  var _\uff3fself = c.iterator__ju_Iterator();
  _return: {
    while (_\uff3fself.hasNext__Z()) {
      var arg1 = _\uff3fself.next__O();
      if ((!this.contains__O__Z(arg1))) {
        var $$x1 = true;
        break _return
      }
    };
    var $$x1 = false
  };
  return (!$$x1)
});
$c_ju_AbstractCollection.prototype.clear__V = (function() {
  var iter = this.iterator__ju_Iterator();
  var changed = false;
  while (iter.hasNext__Z()) {
    if ((iter.next__O(), true)) {
      iter.remove__V();
      changed = true
    }
  }
});
$c_ju_AbstractCollection.prototype.toString__T = (function() {
  var _\uff3fself = this.iterator__ju_Iterator();
  var result = "[";
  var first = true;
  while (_\uff3fself.hasNext__Z()) {
    if (first) {
      first = false
    } else {
      result = (result + ", ")
    };
    result = (("" + result) + _\uff3fself.next__O())
  };
  return (result + "]")
});
//# sourceMappingURL=java.util.AbstractCollection.js.map
