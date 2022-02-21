'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eHashMap$0024EntrySet from "./java.util.HashMap$EntrySet.js";
import * as $j_java$002eutil$002eHashMap$0024Node from "./java.util.HashMap$Node.js";
import * as $j_java$002eutil$002eMap from "./java.util.Map.js";
import * as $j_java$002eutil$002eMap$0024Entry from "./java.util.Map$Entry.js";
/** @constructor */
function $c_ju_AbstractMap() {
  /*<skip>*/
}
export { $c_ju_AbstractMap as $c_ju_AbstractMap };
$c_ju_AbstractMap.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_AbstractMap.prototype.constructor = $c_ju_AbstractMap;
/** @constructor */
function $h_ju_AbstractMap() {
  /*<skip>*/
}
export { $h_ju_AbstractMap as $h_ju_AbstractMap };
$h_ju_AbstractMap.prototype = $c_ju_AbstractMap.prototype;
$c_ju_AbstractMap.prototype.equals__O__Z = (function(o) {
  if ((o === this)) {
    return true
  } else if ($j_java$002eutil$002eMap.$is_ju_Map(o)) {
    var x2 = o;
    if ((this.ju_HashMap__f_contentSize === x2.ju_HashMap__f_contentSize)) {
      var _\uff3fself = new $j_java$002eutil$002eHashMap$0024EntrySet.$c_ju_HashMap$EntrySet(this);
      var _\uff3fself$1 = _\uff3fself.iterator__ju_Iterator();
      _return: {
        while (_\uff3fself$1.hasNext__Z()) {
          var arg1 = _\uff3fself$1.next__O();
          var item = arg1;
          var key = item.ju_HashMap$Node__f_key;
          var a = $p_ju_HashMap__getOrDefaultImpl__O__O__O(x2, key, null);
          var b = item.ju_HashMap$Node__f_value;
          if ((!((a === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a, b)))) {
            var $$x1 = true;
            break _return
          }
        };
        var $$x1 = false
      };
      return (!$$x1)
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_AbstractMap.prototype.hashCode__I = (function() {
  var _\uff3fself = new $j_java$002eutil$002eHashMap$0024EntrySet.$c_ju_HashMap$EntrySet(this);
  var _\uff3fself$1 = _\uff3fself.iterator__ju_Iterator();
  var result = 0;
  while (_\uff3fself$1.hasNext__Z()) {
    var arg1 = result;
    var arg2 = _\uff3fself$1.next__O();
    var prev = (arg1 | 0);
    var item = arg2;
    result = ((item.hashCode__I() + prev) | 0)
  };
  return (result | 0)
});
$c_ju_AbstractMap.prototype.toString__T = (function() {
  var result = "{";
  var first = true;
  var iter = new $j_java$002eutil$002eHashMap$0024EntrySet.$c_ju_HashMap$EntrySet(this).iterator__ju_Iterator();
  while (iter.hasNext__Z()) {
    var entry = iter.next__O();
    if (first) {
      first = false
    } else {
      result = (result + ", ")
    };
    result = (((("" + result) + entry.ju_HashMap$Node__f_key) + "=") + entry.ju_HashMap$Node__f_value)
  };
  return (result + "}")
});
function $p_ju_HashMap__getOrDefaultImpl__O__O__O($thiz, key, defaultValue) {
  if ((key === null)) {
    var hash = 0
  } else {
    var originalHash = $j_java$002elang$002eObject.$dp_hashCode__I(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0))
  };
  var node = $thiz.java$util$HashMap$$findNode0__O__I__I__ju_HashMap$Node(key, hash, (hash & (((-1) + $thiz.ju_HashMap__f_java$util$HashMap$$table.u.length) | 0)));
  return ((node === null) ? defaultValue : node.ju_HashMap$Node__f_value)
}
export { $p_ju_HashMap__getOrDefaultImpl__O__O__O as $p_ju_HashMap__getOrDefaultImpl__O__O__O };
function $p_ju_HashMap__growTable__V($thiz) {
  var oldTable = $thiz.ju_HashMap__f_java$util$HashMap$$table;
  var oldlen = oldTable.u.length;
  var newlen = (oldlen << 1);
  var newTable = new ($j_java$002eutil$002eHashMap$0024Node.$d_ju_HashMap$Node.getArrayOf().constr)(newlen);
  $thiz.ju_HashMap__f_java$util$HashMap$$table = newTable;
  $thiz.ju_HashMap__f_threshold = $j_java$002elang$002eObject.$doubleToInt((newlen * $thiz.ju_HashMap__f_java$util$HashMap$$loadFactor));
  var i = 0;
  while ((i < oldlen)) {
    var lastLow = null;
    var lastHigh = null;
    var node = oldTable.u[i];
    while ((node !== null)) {
      if (((node.ju_HashMap$Node__f_hash & oldlen) === 0)) {
        node.ju_HashMap$Node__f_previous = lastLow;
        if ((lastLow === null)) {
          newTable.u[i] = node
        } else {
          lastLow.ju_HashMap$Node__f_next = node
        };
        lastLow = node
      } else {
        node.ju_HashMap$Node__f_previous = lastHigh;
        if ((lastHigh === null)) {
          newTable.u[((oldlen + i) | 0)] = node
        } else {
          lastHigh.ju_HashMap$Node__f_next = node
        };
        lastHigh = node
      };
      node = node.ju_HashMap$Node__f_next
    };
    if ((lastLow !== null)) {
      lastLow.ju_HashMap$Node__f_next = null
    };
    if ((lastHigh !== null)) {
      lastHigh.ju_HashMap$Node__f_next = null
    };
    i = ((1 + i) | 0)
  }
}
export { $p_ju_HashMap__growTable__V as $p_ju_HashMap__growTable__V };
function $ct_ju_HashMap__I__F__($thiz, initialCapacity, loadFactor) {
  $thiz.ju_HashMap__f_java$util$HashMap$$loadFactor = loadFactor;
  if ((initialCapacity < 0)) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "initialCapacity < 0")
  };
  if ((loadFactor <= 0.0)) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalArgumentException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalArgumentException(), "loadFactor <= 0.0")
  };
  var a = (((-1) + initialCapacity) | 0);
  var i = ((a > 4) ? a : 4);
  var a$1 = ((((-2147483648) >> $j_java$002elang$002eObject.$clz32(i)) & i) << 1);
  $thiz.ju_HashMap__f_java$util$HashMap$$table = new ($j_java$002eutil$002eHashMap$0024Node.$d_ju_HashMap$Node.getArrayOf().constr)(((a$1 < 1073741824) ? a$1 : 1073741824));
  var size = $thiz.ju_HashMap__f_java$util$HashMap$$table.u.length;
  $thiz.ju_HashMap__f_threshold = $j_java$002elang$002eObject.$doubleToInt((size * $thiz.ju_HashMap__f_java$util$HashMap$$loadFactor));
  $thiz.ju_HashMap__f_contentSize = 0;
  return $thiz
}
export { $ct_ju_HashMap__I__F__ as $ct_ju_HashMap__I__F__ };
function $ct_ju_HashMap__($thiz) {
  $ct_ju_HashMap__I__F__($thiz, 16, 0.75);
  return $thiz
}
export { $ct_ju_HashMap__ as $ct_ju_HashMap__ };
/** @constructor */
function $c_ju_HashMap() {
  this.ju_HashMap__f_java$util$HashMap$$loadFactor = 0.0;
  this.ju_HashMap__f_java$util$HashMap$$table = null;
  this.ju_HashMap__f_threshold = 0;
  this.ju_HashMap__f_contentSize = 0
}
export { $c_ju_HashMap as $c_ju_HashMap };
$c_ju_HashMap.prototype = new $h_ju_AbstractMap();
$c_ju_HashMap.prototype.constructor = $c_ju_HashMap;
/** @constructor */
function $h_ju_HashMap() {
  /*<skip>*/
}
export { $h_ju_HashMap as $h_ju_HashMap };
$h_ju_HashMap.prototype = $c_ju_HashMap.prototype;
$c_ju_HashMap.prototype.clear__V = (function() {
  $j_java$002elang$002eObject.$m_ju_Arrays$().fill__AO__O__V(this.ju_HashMap__f_java$util$HashMap$$table, null);
  this.ju_HashMap__f_contentSize = 0
});
$c_ju_HashMap.prototype.java$util$HashMap$$findNode0__O__I__I__ju_HashMap$Node = (function(key, hash, idx) {
  var node = this.ju_HashMap__f_java$util$HashMap$$table.u[idx];
  while (true) {
    if ((node === null)) {
      return null
    } else {
      if ((hash === node.ju_HashMap$Node__f_hash)) {
        var b = node.ju_HashMap$Node__f_key;
        var $$x1 = ((key === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(key, b))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        return node
      } else if ((hash < node.ju_HashMap$Node__f_hash)) {
        return null
      } else {
        node = node.ju_HashMap$Node__f_next
      }
    }
  }
});
$c_ju_HashMap.prototype.java$util$HashMap$$put0__O__O__I__Z__O = (function(key, value, hash, ifAbsent) {
  var newContentSize = ((1 + this.ju_HashMap__f_contentSize) | 0);
  if ((newContentSize >= this.ju_HashMap__f_threshold)) {
    $p_ju_HashMap__growTable__V(this)
  };
  var idx = (hash & (((-1) + this.ju_HashMap__f_java$util$HashMap$$table.u.length) | 0));
  var x1 = this.ju_HashMap__f_java$util$HashMap$$table.u[idx];
  if ((x1 === null)) {
    var newNode = new $j_java$002eutil$002eHashMap$0024Node.$c_ju_HashMap$Node(key, hash, value, null, null);
    this.ju_HashMap__f_java$util$HashMap$$table.u[idx] = newNode
  } else {
    var prev = null;
    var n = x1;
    while (((n !== null) && (n.ju_HashMap$Node__f_hash <= hash))) {
      if ((n.ju_HashMap$Node__f_hash === hash)) {
        var b = n.ju_HashMap$Node__f_key;
        var $$x1 = ((key === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(key, b))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var old = n.ju_HashMap$Node__f_value;
        if (((!ifAbsent) || (old === null))) {
          n.ju_HashMap$Node__f_value = value
        };
        return old
      };
      prev = n;
      n = n.ju_HashMap$Node__f_next
    };
    var previous = prev;
    var next = n;
    var newNode$2 = new $j_java$002eutil$002eHashMap$0024Node.$c_ju_HashMap$Node(key, hash, value, previous, next);
    if ((prev === null)) {
      this.ju_HashMap__f_java$util$HashMap$$table.u[idx] = newNode$2
    } else {
      prev.ju_HashMap$Node__f_next = newNode$2
    };
    if ((n !== null)) {
      n.ju_HashMap$Node__f_previous = newNode$2
    }
  };
  this.ju_HashMap__f_contentSize = newContentSize;
  return null
});
$c_ju_HashMap.prototype.removeNode__ju_HashMap$Node__V = (function(node) {
  var hash = node.ju_HashMap$Node__f_hash;
  this.java$util$HashMap$$remove0__ju_HashMap$Node__I__V(node, (hash & (((-1) + this.ju_HashMap__f_java$util$HashMap$$table.u.length) | 0)))
});
$c_ju_HashMap.prototype.java$util$HashMap$$remove0__ju_HashMap$Node__I__V = (function(node, idx) {
  var previous = node.ju_HashMap$Node__f_previous;
  var next = node.ju_HashMap$Node__f_next;
  if ((previous === null)) {
    this.ju_HashMap__f_java$util$HashMap$$table.u[idx] = next
  } else {
    previous.ju_HashMap$Node__f_next = next
  };
  if ((next !== null)) {
    next.ju_HashMap$Node__f_previous = previous
  };
  this.ju_HashMap__f_contentSize = (((-1) + this.ju_HashMap__f_contentSize) | 0)
});
var $d_ju_HashMap = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_HashMap: 0
}, false, "java.util.HashMap", {
  ju_HashMap: 1,
  ju_AbstractMap: 1,
  O: 1,
  ju_Map: 1,
  Ljava_io_Serializable: 1,
  jl_Cloneable: 1
});
export { $d_ju_HashMap as $d_ju_HashMap };
$c_ju_HashMap.prototype.$classData = $d_ju_HashMap;
//# sourceMappingURL=java.util.AbstractMap.js.map
