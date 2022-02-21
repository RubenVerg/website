'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.sci_RangeIterator__f_step = 0;
  this.sci_RangeIterator__f_lastElement = 0;
  this.sci_RangeIterator__f__hasNext = false;
  this.sci_RangeIterator__f__next = 0;
  this.sci_RangeIterator__f_step = step;
  this.sci_RangeIterator__f_lastElement = lastElement;
  this.sci_RangeIterator__f__hasNext = (!initiallyEmpty);
  this.sci_RangeIterator__f__next = start
}
export { $c_sci_RangeIterator as $c_sci_RangeIterator };
$c_sci_RangeIterator.prototype = new $j_java$002elang$002eObject.$h_sc_AbstractIterator();
$c_sci_RangeIterator.prototype.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
  /*<skip>*/
}
export { $h_sci_RangeIterator as $h_sci_RangeIterator };
$h_sci_RangeIterator.prototype = $c_sci_RangeIterator.prototype;
$c_sci_RangeIterator.prototype.knownSize__I = (function() {
  return (this.sci_RangeIterator__f__hasNext ? ((1 + $j_java$002elang$002eObject.$intDiv(((this.sci_RangeIterator__f_lastElement - this.sci_RangeIterator__f__next) | 0), this.sci_RangeIterator__f_step)) | 0) : 0)
});
$c_sci_RangeIterator.prototype.hasNext__Z = (function() {
  return this.sci_RangeIterator__f__hasNext
});
$c_sci_RangeIterator.prototype.next__I = (function() {
  if ((!this.sci_RangeIterator__f__hasNext)) {
    $j_java$002elang$002eObject.$m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
  };
  var value = this.sci_RangeIterator__f__next;
  this.sci_RangeIterator__f__hasNext = (value !== this.sci_RangeIterator__f_lastElement);
  this.sci_RangeIterator__f__next = ((value + this.sci_RangeIterator__f_step) | 0);
  return value
});
$c_sci_RangeIterator.prototype.drop__I__sc_Iterator = (function(n) {
  if ((n > 0)) {
    var value = this.sci_RangeIterator__f__next;
    var hi = (value >> 31);
    var value$1 = $j_java$002elang$002eObject.$imul(this.sci_RangeIterator__f_step, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
    if ((this.sci_RangeIterator__f_step > 0)) {
      var value$2 = this.sci_RangeIterator__f_lastElement;
      var hi$3 = (value$2 >> 31);
      if (((hi$3 === hi$2) ? (((-2147483648) ^ value$2) < ((-2147483648) ^ lo)) : (hi$3 < hi$2))) {
        var this$6__lo = value$2;
        var this$6__hi = hi$3
      } else {
        var this$6__lo = lo;
        var this$6__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$6__lo;
      var value$3 = this.sci_RangeIterator__f_lastElement;
      var hi$4 = (value$3 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$4) ? (((-2147483648) ^ lo) <= ((-2147483648) ^ value$3)) : (hi$2 < hi$4))
    } else if ((this.sci_RangeIterator__f_step < 0)) {
      var value$4 = this.sci_RangeIterator__f_lastElement;
      var hi$5 = (value$4 >> 31);
      if (((hi$5 === hi$2) ? (((-2147483648) ^ value$4) > ((-2147483648) ^ lo)) : (hi$5 > hi$2))) {
        var this$10__lo = value$4;
        var this$10__hi = hi$5
      } else {
        var this$10__lo = lo;
        var this$10__hi = hi$2
      };
      this.sci_RangeIterator__f__next = this$10__lo;
      var value$5 = this.sci_RangeIterator__f_lastElement;
      var hi$6 = (value$5 >> 31);
      this.sci_RangeIterator__f__hasNext = ((hi$2 === hi$6) ? (((-2147483648) ^ lo) >= ((-2147483648) ^ value$5)) : (hi$2 > hi$6))
    }
  };
  return this
});
$c_sci_RangeIterator.prototype.next__O = (function() {
  return this.next__I()
});
var $d_sci_RangeIterator = new $j_java$002elang$002eObject.$TypeData().initClass({
  sci_RangeIterator: 0
}, false, "scala.collection.immutable.RangeIterator", {
  sci_RangeIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
export { $d_sci_RangeIterator as $d_sci_RangeIterator };
$c_sci_RangeIterator.prototype.$classData = $d_sci_RangeIterator;
//# sourceMappingURL=scala.collection.immutable.RangeIterator.js.map
