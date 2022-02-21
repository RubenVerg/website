'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractCollection from "./java.util.AbstractCollection.js";
import * as $j_java$002eutil$002eList from "./java.util.List.js";
import * as $j_java$002eutil$002eRandomAccessListIterator from "./java.util.RandomAccessListIterator.js";
/** @constructor */
function $c_ju_AbstractList() {
  /*<skip>*/
}
export { $c_ju_AbstractList as $c_ju_AbstractList };
$c_ju_AbstractList.prototype = new $j_java$002eutil$002eAbstractCollection.$h_ju_AbstractCollection();
$c_ju_AbstractList.prototype.constructor = $c_ju_AbstractList;
/** @constructor */
function $h_ju_AbstractList() {
  /*<skip>*/
}
export { $h_ju_AbstractList as $h_ju_AbstractList };
$h_ju_AbstractList.prototype = $c_ju_AbstractList.prototype;
$c_ju_AbstractList.prototype.iterator__ju_Iterator = (function() {
  return this.listIterator__I__ju_ListIterator(0)
});
$c_ju_AbstractList.prototype.listIterator__I__ju_ListIterator = (function(index) {
  this.checkIndexOnBounds__I__V(index);
  return new $j_java$002eutil$002eRandomAccessListIterator.$c_ju_RandomAccessListIterator(this, index, 0, this.size__I())
});
$c_ju_AbstractList.prototype.equals__O__Z = (function(o) {
  if ((o === this)) {
    return true
  } else if ($j_java$002eutil$002eList.$is_ju_List(o)) {
    var x2 = o;
    var oIter = x2.listIterator__I__ju_ListIterator(0);
    var _\uff3fself = this.listIterator__I__ju_ListIterator(0);
    _return: {
      while (_\uff3fself.hasNext__Z()) {
        var arg1 = _\uff3fself.next__O();
        if (oIter.hasNext__Z()) {
          var b = oIter.next__O();
          var $$x2 = ((arg1 === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(arg1, b))
        } else {
          var $$x2 = false
        };
        if ((!$$x2)) {
          var $$x1 = true;
          break _return
        }
      };
      var $$x1 = false
    };
    if ((!$$x1)) {
      return (!oIter.hasNext__Z())
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_AbstractList.prototype.hashCode__I = (function() {
  var _\uff3fself = this.listIterator__I__ju_ListIterator(0);
  var result = 1;
  while (_\uff3fself.hasNext__Z()) {
    var arg1 = result;
    var arg2 = _\uff3fself.next__O();
    var prev = (arg1 | 0);
    result = (($j_java$002elang$002eObject.$imul(31, prev) + ((arg2 === null) ? 0 : $j_java$002elang$002eObject.$dp_hashCode__I(arg2))) | 0)
  };
  return (result | 0)
});
$c_ju_AbstractList.prototype.checkIndexInBounds__I__V = (function(index) {
  if (((index < 0) || (index >= this.size__I()))) {
    throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + index))
  }
});
$c_ju_AbstractList.prototype.checkIndexOnBounds__I__V = (function(index) {
  if (((index < 0) || (index > this.size__I()))) {
    throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + index))
  }
});
//# sourceMappingURL=java.util.AbstractList.js.map
