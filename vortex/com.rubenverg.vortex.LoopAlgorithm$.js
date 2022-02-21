'use strict';
import * as $j_com$002erubenverg$002evortex$002eEdges$0024 from "./com.rubenverg.vortex.Edges$.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002emutable$002eMap$0024 from "./scala.collection.mutable.Map$.js";
function $p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq($thiz, mod$2, mult$2, dropped$1, n) {
  return $j_com$002erubenverg$002evortex$002eEdges$0024.$m_Lcom_rubenverg_vortex_Edges$().into__I__I__I__sci_Seq(mod$2, mult$2, n).filter__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$1, dropped$1$2) => ((_$2) => {
    var _$2$1 = (_$2 | 0);
    return (!$j_java$002elang$002eObject.$f_sc_SeqOps__contains__O__Z(dropped$1$2, _$2$1))
  }))($thiz, dropped$1)))
}
export { $p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq as $p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq };
/** @constructor */
function $c_Lcom_rubenverg_vortex_LoopAlgorithm$() {
  this.Lcom_rubenverg_vortex_LoopAlgorithm$__f_intl$lzy1 = null;
  this.Lcom_rubenverg_vortex_LoopAlgorithm$__f_intlbitmap$1 = false;
  this.Lcom_rubenverg_vortex_LoopAlgorithm$__f_knownLoops = null;
  $n_Lcom_rubenverg_vortex_LoopAlgorithm$ = this;
  this.Lcom_rubenverg_vortex_LoopAlgorithm$__f_knownLoops = $j_scala$002ecollection$002emutable$002eMap$0024.$m_scm_Map$().empty__O()
}
export { $c_Lcom_rubenverg_vortex_LoopAlgorithm$ as $c_Lcom_rubenverg_vortex_LoopAlgorithm$ };
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype.constructor = $c_Lcom_rubenverg_vortex_LoopAlgorithm$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_LoopAlgorithm$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_LoopAlgorithm$ as $h_Lcom_rubenverg_vortex_LoopAlgorithm$ };
$h_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype = $c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype;
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype.apply__I__I__I__I__T = (function(a, b, mod, mult) {
  matchResult1: {
    var \u03b41$___1;
    var \u03b41$___2;
    var x1 = $m_Lcom_rubenverg_vortex_LoopAlgorithm$().loops__I__I__T2(mod, mult);
    if ((x1 !== null)) {
      var alone = x1.T2__f__1;
      var loops = x1.T2__f__2;
      var \u03b41$___1 = alone;
      var \u03b41$___2 = loops;
      break matchResult1
    };
    throw new $j_java$002elang$002eObject.$c_s_MatchError(x1)
  };
  var alone$2 = \u03b41$___1;
  var loops$2 = \u03b41$___2;
  if (alone$2.contains__O__Z(a)) {
    return "black"
  } else {
    var p = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$2, a$2) => ((_$1) => {
      var _$1$1 = _$1;
      return _$1$1.contains__O__Z(a$2)
    }))(this, a));
    return (("hsl(" + (loops$2.indexWhere__F1__I__I(p, 0) / loops$2.length__I())) + "turn, 100%, 50%)")
  }
});
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype.reset__V = (function() {
  /*<skip>*/
});
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype.loops__I__I__T2 = (function(mod, mult) {
  return this.Lcom_rubenverg_vortex_LoopAlgorithm$__f_knownLoops.getOrElseUpdate__O__F0__O(new $j_java$002elang$002eObject.$c_T2(mod, mult), new $j_java$002elang$002eObject.$c_sjsr_AnonFunction0(((this$2, mod$2, mult$2) => (() => {
    var dropped = $j_java$002elang$002eObject.$ct_scm_ArrayBuffer__(new $j_java$002elang$002eObject.$c_scm_ArrayBuffer());
    var this$4 = $j_java$002elang$002eObject.$m_scm_ArrayBuffer$();
    var evidence$3 = $j_java$002elang$002eObject.$m_s_math_Numeric$IntIsIntegral$();
    var potential = $j_java$002elang$002eObject.$f_sc_IterableFactory__range__O__O__s_math_Integral__O(this$4, 0, mod$2, evidence$3);
    var res = 0;
    var this$5 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(potential.scm_ArrayBuffer__f_array, potential.scm_ArrayBuffer__f_size0);
    var it = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$5);
    while (it.hasNext__Z()) {
      var arg1 = it.next__O();
      var _$3 = (arg1 | 0);
      if ($p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq(this$2, mod$2, mult$2, dropped, _$3).isEmpty__Z()) {
        res = ((1 + res) | 0)
      }
    };
    while (true) {
      var res$1 = false;
      var this$6 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(potential.scm_ArrayBuffer__f_array, potential.scm_ArrayBuffer__f_size0);
      var it$1 = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$6);
      while (((!res$1) && it$1.hasNext__Z())) {
        var arg1$1 = it$1.next__O();
        var _$4 = (arg1$1 | 0);
        res$1 = $p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq(this$2, mod$2, mult$2, dropped, _$4).isEmpty__Z()
      };
      if (res$1) {
        var res$2 = 0;
        var this$7 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(potential.scm_ArrayBuffer__f_array, potential.scm_ArrayBuffer__f_size0);
        var it$2 = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$7);
        while (it$2.hasNext__Z()) {
          var arg1$2 = it$2.next__O();
          var _$5 = (arg1$2 | 0);
          if ($p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq(this$2, mod$2, mult$2, dropped, _$5).isEmpty__Z()) {
            res$2 = ((1 + res$2) | 0)
          }
        };
        var b = new $j_java$002elang$002eObject.$c_scm_ArrayBuffer$$anon$1();
        var this$9 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(potential.scm_ArrayBuffer__f_array, potential.scm_ArrayBuffer__f_size0);
        var it$3 = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$9);
        while (it$3.hasNext__Z()) {
          var elem = it$3.next__O();
          var _$6 = (elem | 0);
          if (($p_Lcom_rubenverg_vortex_LoopAlgorithm$__findEdgesInto$1__I__I__scm_ArrayBuffer__I__sci_Seq(this$2, mod$2, mult$2, dropped, _$6).isEmpty__Z() !== false)) {
            b.addOne__O__scm_GrowableBuilder(elem)
          }
        };
        var values = b.scm_GrowableBuilder__f_elems;
        $j_java$002elang$002eObject.$f_scm_Shrinkable__subtractAll__sc_IterableOnce__scm_Shrinkable(potential, values);
        dropped.addAll__sc_IterableOnce__scm_ArrayBuffer(values)
      } else {
        break
      }
    };
    var loops = $j_java$002elang$002eObject.$ct_scm_ArrayBuffer__(new $j_java$002elang$002eObject.$c_scm_ArrayBuffer());
    var b$1 = new $j_java$002elang$002eObject.$c_scm_ArrayBuffer$$anon$1();
    var this$12 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(potential.scm_ArrayBuffer__f_array, potential.scm_ArrayBuffer__f_size0);
    var it$4 = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$12);
    while (it$4.hasNext__Z()) {
      var arg1$3 = it$4.next__O();
      var x = (arg1$3 | 0);
      var y = $j_com$002erubenverg$002evortex$002eEdges$0024.$m_Lcom_rubenverg_vortex_Edges$().from__I__I__I__I(mod$2, mult$2, x);
      var elem$1 = new $j_java$002elang$002eObject.$c_T2(x, y);
      b$1.addOne__O__scm_GrowableBuilder(elem$1)
    };
    var edges = b$1.scm_GrowableBuilder__f_elems;
    var p = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$6$1) => ((x$1) => {
      var x$1$1 = x$1;
      return ((x$1$1 !== null) && true)
    }))(this$2));
    var this$18 = $j_java$002elang$002eObject.$ct_sc_IterableOps$WithFilter__sc_IterableOps__F1__(new $j_java$002elang$002eObject.$c_sc_IterableOps$WithFilter(), edges, p);
    var f = new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$7$1, loops$2, edges$2) => ((x$1$2) => {
      var x$1$3 = x$1$2;
      if ((x$1$3 !== null)) {
        var start$1 = (x$1$3.T2__f__1 | 0);
        var next$1 = (x$1$3.T2__f__2 | 0);
        var this$15 = $j_java$002elang$002eObject.$m_scm_ArrayBuffer$();
        var elems = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapIntArray__AI__sci_ArraySeq(new $j_java$002elang$002eObject.$ac_I(new Int32Array([start$1])));
        var loop = this$15.from__sc_IterableOnce__scm_ArrayBuffer(elems);
        var elem$2 = 0;
        elem$2 = next$1;
        while (true) {
          var elem$3 = elem$2;
          if ((!$j_java$002elang$002eObject.$f_sc_SeqOps__contains__O__Z(loop, elem$3))) {
            var elem$4 = elem$2;
            loop.addOne__O__scm_ArrayBuffer(elem$4);
            _return: {
              var this$17 = new $j_java$002elang$002eObject.$c_scm_ArrayBufferView(edges$2.scm_ArrayBuffer__f_array, edges$2.scm_ArrayBuffer__f_size0);
              var it$5 = new $j_java$002elang$002eObject.$c_sc_IndexedSeqView$IndexedSeqViewIterator(this$17);
              while (it$5.hasNext__Z()) {
                var a = it$5.next__O();
                var _$7 = a;
                if (((_$7.T2__f__1 | 0) === elem$2)) {
                  var $$x1 = new $j_java$002elang$002eObject.$c_s_Some(a);
                  break _return
                }
              };
              var $$x1 = $j_java$002elang$002eObject.$m_s_None$()
            };
            var ev$2 = ($$x1.get__O().T2__f__2 | 0);
            elem$2 = ev$2
          } else {
            break
          }
        };
        var elem$5 = $j_java$002elang$002eObject.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(loop);
        return loops$2.addOne__O__scm_ArrayBuffer(elem$5)
      };
      throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$3)
    }))(this$2, loops, edges));
    this$18.filtered__sc_Iterable().foreach__F1__V(f);
    var _1 = $j_java$002elang$002eObject.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(dropped);
    var _2 = $j_java$002elang$002eObject.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(loops);
    return new $j_java$002elang$002eObject.$c_T2(_1, _2)
  }))(this, mod, mult)))
});
var $d_Lcom_rubenverg_vortex_LoopAlgorithm$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_LoopAlgorithm$: 0
}, false, "com.rubenverg.vortex.LoopAlgorithm$", {
  Lcom_rubenverg_vortex_LoopAlgorithm$: 1,
  O: 1,
  Lcom_rubenverg_vortex_Algorithm: 1,
  Lcom_rubenverg_vortex_Predef: 1
});
export { $d_Lcom_rubenverg_vortex_LoopAlgorithm$ as $d_Lcom_rubenverg_vortex_LoopAlgorithm$ };
$c_Lcom_rubenverg_vortex_LoopAlgorithm$.prototype.$classData = $d_Lcom_rubenverg_vortex_LoopAlgorithm$;
var $n_Lcom_rubenverg_vortex_LoopAlgorithm$;
function $m_Lcom_rubenverg_vortex_LoopAlgorithm$() {
  if ((!$n_Lcom_rubenverg_vortex_LoopAlgorithm$)) {
    $n_Lcom_rubenverg_vortex_LoopAlgorithm$ = new $c_Lcom_rubenverg_vortex_LoopAlgorithm$()
  };
  return $n_Lcom_rubenverg_vortex_LoopAlgorithm$
}
export { $m_Lcom_rubenverg_vortex_LoopAlgorithm$ as $m_Lcom_rubenverg_vortex_LoopAlgorithm$ };
//# sourceMappingURL=com.rubenverg.vortex.LoopAlgorithm$.js.map
