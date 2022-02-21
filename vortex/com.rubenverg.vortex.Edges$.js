'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002eimmutable$002eRangeIterator from "./scala.collection.immutable.RangeIterator.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_Edges$() {
  this.Lcom_rubenverg_vortex_Edges$__f_intl$lzy1 = null;
  this.Lcom_rubenverg_vortex_Edges$__f_intlbitmap$1 = false
}
export { $c_Lcom_rubenverg_vortex_Edges$ as $c_Lcom_rubenverg_vortex_Edges$ };
$c_Lcom_rubenverg_vortex_Edges$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_Edges$.prototype.constructor = $c_Lcom_rubenverg_vortex_Edges$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_Edges$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_Edges$ as $h_Lcom_rubenverg_vortex_Edges$ };
$h_Lcom_rubenverg_vortex_Edges$.prototype = $c_Lcom_rubenverg_vortex_Edges$.prototype;
$c_Lcom_rubenverg_vortex_Edges$.prototype.all__I__I__sci_Seq = (function(m, k) {
  var isEmpty = (m <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (m >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ m) > (-1)) : (hi > 0)) ? (-1) : m)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + m) | 0);
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $j_java$002elang$002eObject.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, m, 1, false)
  };
  var b = $j_java$002elang$002eObject.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_scala$002ecollection$002eimmutable$002eRangeIterator.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
  while (it.sci_RangeIterator__f__hasNext) {
    var arg1 = it.next__I();
    var y = this.from__I__I__I__I(m, k, arg1);
    var elem = new $j_java$002elang$002eObject.$c_T2(arg1, y);
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O()
});
$c_Lcom_rubenverg_vortex_Edges$.prototype.into__I__I__I__sci_Seq = (function(m, k, v) {
  var isEmpty = (k <= 0);
  if (isEmpty) {
    var scala$collection$immutable$Range$$numRangeElements = 0
  } else {
    var hi = (k >> 31);
    var scala$collection$immutable$Range$$numRangeElements = (((hi === 0) ? (((-2147483648) ^ k) > (-1)) : (hi > 0)) ? (-1) : k)
  };
  var scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
  if ((scala$collection$immutable$Range$$numRangeElements < 0)) {
    $j_java$002elang$002eObject.$m_sci_Range$().scala$collection$immutable$Range$$fail__I__I__I__Z__E(0, k, 1, false)
  };
  var b = $j_java$002elang$002eObject.$m_sci_IndexedSeq$().newBuilder__scm_Builder();
  var it = new $j_scala$002ecollection$002eimmutable$002eRangeIterator.$c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
  while (it.sci_RangeIterator__f__hasNext) {
    var arg1 = it.next__I();
    var elem = (((v + $j_java$002elang$002eObject.$imul(m, arg1)) | 0) / k);
    b.addOne__O__scm_Growable(elem)
  };
  return b.result__O().filter__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$2$1) => ((_$1) => {
    var _$1$1 = (+_$1);
    return (_$1$1 === (+Math.floor(_$1$1)))
  }))(this))).map__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$3$1) => ((_$2) => {
    var _$2$1 = (+_$2);
    return $j_java$002elang$002eObject.$doubleToInt(_$2$1)
  }))(this)))
});
$c_Lcom_rubenverg_vortex_Edges$.prototype.from__I__I__I__I = (function(m, k, v) {
  return $j_java$002elang$002eObject.$intMod($j_java$002elang$002eObject.$imul(v, k), m)
});
var $d_Lcom_rubenverg_vortex_Edges$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_Edges$: 0
}, false, "com.rubenverg.vortex.Edges$", {
  Lcom_rubenverg_vortex_Edges$: 1,
  O: 1,
  Lcom_rubenverg_vortex_Predef: 1
});
export { $d_Lcom_rubenverg_vortex_Edges$ as $d_Lcom_rubenverg_vortex_Edges$ };
$c_Lcom_rubenverg_vortex_Edges$.prototype.$classData = $d_Lcom_rubenverg_vortex_Edges$;
var $n_Lcom_rubenverg_vortex_Edges$;
function $m_Lcom_rubenverg_vortex_Edges$() {
  if ((!$n_Lcom_rubenverg_vortex_Edges$)) {
    $n_Lcom_rubenverg_vortex_Edges$ = new $c_Lcom_rubenverg_vortex_Edges$()
  };
  return $n_Lcom_rubenverg_vortex_Edges$
}
export { $m_Lcom_rubenverg_vortex_Edges$ as $m_Lcom_rubenverg_vortex_Edges$ };
//# sourceMappingURL=com.rubenverg.vortex.Edges$.js.map
