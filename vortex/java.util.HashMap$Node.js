'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eMap$0024Entry from "./java.util.Map$Entry.js";
/** @constructor */
function $c_ju_HashMap$Node(key, hash, value, previous, next) {
  this.ju_HashMap$Node__f_key = null;
  this.ju_HashMap$Node__f_hash = 0;
  this.ju_HashMap$Node__f_value = null;
  this.ju_HashMap$Node__f_previous = null;
  this.ju_HashMap$Node__f_next = null;
  this.ju_HashMap$Node__f_key = key;
  this.ju_HashMap$Node__f_hash = hash;
  this.ju_HashMap$Node__f_value = value;
  this.ju_HashMap$Node__f_previous = previous;
  this.ju_HashMap$Node__f_next = next
}
export { $c_ju_HashMap$Node as $c_ju_HashMap$Node };
$c_ju_HashMap$Node.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_HashMap$Node.prototype.constructor = $c_ju_HashMap$Node;
/** @constructor */
function $h_ju_HashMap$Node() {
  /*<skip>*/
}
export { $h_ju_HashMap$Node as $h_ju_HashMap$Node };
$h_ju_HashMap$Node.prototype = $c_ju_HashMap$Node.prototype;
$c_ju_HashMap$Node.prototype.equals__O__Z = (function(that) {
  if ($j_java$002eutil$002eMap$0024Entry.$is_ju_Map$Entry(that)) {
    var x2 = that;
    var a = this.ju_HashMap$Node__f_key;
    var b = x2.ju_HashMap$Node__f_key;
    if (((a === null) ? (b === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a, b))) {
      var a$1 = this.ju_HashMap$Node__f_value;
      var b$1 = x2.ju_HashMap$Node__f_value;
      return ((a$1 === null) ? (b$1 === null) : $j_java$002elang$002eObject.$dp_equals__O__Z(a$1, b$1))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_HashMap$Node.prototype.hashCode__I = (function() {
  var improvedHash = this.ju_HashMap$Node__f_hash;
  var o = this.ju_HashMap$Node__f_value;
  return ((improvedHash ^ ((improvedHash >>> 16) | 0)) ^ ((o === null) ? 0 : $j_java$002elang$002eObject.$dp_hashCode__I(o)))
});
$c_ju_HashMap$Node.prototype.toString__T = (function() {
  return ((this.ju_HashMap$Node__f_key + "=") + this.ju_HashMap$Node__f_value)
});
var $d_ju_HashMap$Node = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_HashMap$Node: 0
}, false, "java.util.HashMap$Node", {
  ju_HashMap$Node: 1,
  O: 1,
  ju_Map$Entry: 1
});
export { $d_ju_HashMap$Node as $d_ju_HashMap$Node };
$c_ju_HashMap$Node.prototype.$classData = $d_ju_HashMap$Node;
//# sourceMappingURL=java.util.HashMap$Node.js.map
