'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eAbstractCollection from "./java.util.AbstractCollection.js";
import * as $j_java$002eutil$002eCollection from "./java.util.Collection.js";
/** @constructor */
function $c_ju_AbstractSet() {
  /*<skip>*/
}
export { $c_ju_AbstractSet as $c_ju_AbstractSet };
$c_ju_AbstractSet.prototype = new $j_java$002eutil$002eAbstractCollection.$h_ju_AbstractCollection();
$c_ju_AbstractSet.prototype.constructor = $c_ju_AbstractSet;
/** @constructor */
function $h_ju_AbstractSet() {
  /*<skip>*/
}
export { $h_ju_AbstractSet as $h_ju_AbstractSet };
$h_ju_AbstractSet.prototype = $c_ju_AbstractSet.prototype;
$c_ju_AbstractSet.prototype.equals__O__Z = (function(that) {
  if ((that === this)) {
    return true
  } else if ($j_java$002eutil$002eCollection.$is_ju_Collection(that)) {
    var x2 = that;
    return ((x2.size__I() === this.size__I()) && this.containsAll__ju_Collection__Z(x2))
  } else {
    return false
  }
});
$c_ju_AbstractSet.prototype.hashCode__I = (function() {
  var _\uff3fself = this.iterator__ju_Iterator();
  var result = 0;
  while (_\uff3fself.hasNext__Z()) {
    var arg1 = result;
    var arg2 = _\uff3fself.next__O();
    var prev = (arg1 | 0);
    result = (($j_java$002elang$002eObject.$dp_hashCode__I(arg2) + prev) | 0)
  };
  return (result | 0)
});
//# sourceMappingURL=java.util.AbstractSet.js.map
