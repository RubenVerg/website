'use strict';
import * as $j_com$002erubenverg$002evortex$002ePoint from "./com.rubenverg.vortex.Point.js";
import * as $j_com$002erubenverg$002evortex$002ePoint$0024 from "./com.rubenverg.vortex.Point$.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_Arrows$() {
  /*<skip>*/
}
export { $c_Lcom_rubenverg_vortex_Arrows$ as $c_Lcom_rubenverg_vortex_Arrows$ };
$c_Lcom_rubenverg_vortex_Arrows$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_Arrows$.prototype.constructor = $c_Lcom_rubenverg_vortex_Arrows$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_Arrows$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_Arrows$ as $h_Lcom_rubenverg_vortex_Arrows$ };
$h_Lcom_rubenverg_vortex_Arrows$.prototype = $c_Lcom_rubenverg_vortex_Arrows$.prototype;
$c_Lcom_rubenverg_vortex_Arrows$.prototype.arrow__Lorg_scalajs_dom_CanvasRenderingContext2D__Lcom_rubenverg_vortex_Point__Lcom_rubenverg_vortex_Point__sci_Seq__V = (function(ctx, a, b, control) {
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x = (b.Lcom_rubenverg_vortex_Point__f_x - a.Lcom_rubenverg_vortex_Point__f_x);
  var y = (b.Lcom_rubenverg_vortex_Point__f_y - a.Lcom_rubenverg_vortex_Point__f_y);
  var d = new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x, y);
  var x$1 = (d.Lcom_rubenverg_vortex_Point__f_x - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_x);
  var $$x1 = Math.pow(x$1, 2.0);
  var x$2 = (d.Lcom_rubenverg_vortex_Point__f_y - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_y);
  var x$3 = ((+$$x1) + (+Math.pow(x$2, 2.0)));
  var len = (+Math.sqrt(x$3));
  var x$4 = (d.Lcom_rubenverg_vortex_Point__f_x - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_x);
  var $$x2 = Math.pow(x$4, 2.0);
  var x$5 = (d.Lcom_rubenverg_vortex_Point__f_y - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_y);
  var x$6 = ((+$$x2) + (+Math.pow(x$5, 2.0)));
  var factor$proxy1 = (+Math.sqrt(x$6));
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x$7 = (d.Lcom_rubenverg_vortex_Point__f_x / factor$proxy1);
  var y$1 = (d.Lcom_rubenverg_vortex_Point__f_y / factor$proxy1);
  var x1 = new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$7, y$1);
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x3 = x1.Lcom_rubenverg_vortex_Point__f_x;
  var x4 = x1.Lcom_rubenverg_vortex_Point__f_y;
  var \u03b41$___1 = x3;
  var \u03b41$___2 = x4;
  var c$2 = (+\u03b41$___1);
  var s$2 = (+\u03b41$___2);
  var prefix$2 = control.map__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$17, len$2) => ((point) => {
    var point$1 = point;
    $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
    var x$8 = ((point$1.Lcom_rubenverg_vortex_Point__f_x < 0.0) ? (point$1.Lcom_rubenverg_vortex_Point__f_x + len$2) : point$1.Lcom_rubenverg_vortex_Point__f_x);
    var y$2 = point$1.Lcom_rubenverg_vortex_Point__f_y;
    return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$8, y$2)
  }))(this, len)));
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var elem$2 = new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(len, 0.0);
  var prefix$1 = control.reverse__O().map__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$2$1, len$3) => ((point$2) => {
    var point$3 = point$2;
    $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
    var x$9 = ((point$3.Lcom_rubenverg_vortex_Point__f_x < 0.0) ? (point$3.Lcom_rubenverg_vortex_Point__f_x + len$3) : point$3.Lcom_rubenverg_vortex_Point__f_x);
    var y$3 = (-point$3.Lcom_rubenverg_vortex_Point__f_y);
    return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$9, y$3)
  }))(this, len)));
  var elem$1 = $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin;
  var this$21 = $j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.empty__sc_SeqOps();
  var this$22 = this$21.prepended__O__O(elem$1);
  var this$23 = this$22.prependedAll__sc_IterableOnce__O(prefix$1);
  var this$24 = this$23.prepended__O__O(elem$2);
  var points = this$24.prependedAll__sc_IterableOnce__O(prefix$2);
  points.zipWithIndex__O().withFilter__F1__sc_WithFilter(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$3$1) => ((x$1$1) => {
    var x$1$2 = x$1$1;
    return ((x$1$2 !== null) && true)
  }))(this))).foreach__F1__V(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$4$1, ctx$2, a$2, c$3, s$3) => ((x$1$2$1) => {
    var x$1$3 = x$1$2$1;
    matchResult3: {
      if ((x$1$3 !== null)) {
        var point$5 = x$1$3.T2__f__1;
        var i$1 = (x$1$3.T2__f__2 | 0);
        var x$10 = (((point$5.Lcom_rubenverg_vortex_Point__f_x * c$3) - (point$5.Lcom_rubenverg_vortex_Point__f_y * s$3)) + a$2.Lcom_rubenverg_vortex_Point__f_x);
        var y$4 = (((point$5.Lcom_rubenverg_vortex_Point__f_x * s$3) + (point$5.Lcom_rubenverg_vortex_Point__f_y * c$3)) + a$2.Lcom_rubenverg_vortex_Point__f_y);
        if ((i$1 === 0)) {
          ctx$2.moveTo(x$10, y$4)
        } else {
          ctx$2.lineTo(x$10, y$4)
        };
        break matchResult3
      };
      throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$3)
    }
  }))(this, ctx, a, c$2, s$2)))
});
$c_Lcom_rubenverg_vortex_Arrows$.prototype.arrow$default$4__Lorg_scalajs_dom_CanvasRenderingContext2D__sci_Seq = (function(ctx) {
  return $j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.apply__sci_Seq__sc_SeqOps($j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_com$002erubenverg$002evortex$002ePoint.$d_Lcom_rubenverg_vortex_Point.getArrayOf().constr)([($j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$(), new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(0.0, 1.0)), ($j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$(), new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point((-10.0), 1.0)), ($j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$(), new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point((-10.0), 5.0))])))
});
var $d_Lcom_rubenverg_vortex_Arrows$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_Arrows$: 0
}, false, "com.rubenverg.vortex.Arrows$", {
  Lcom_rubenverg_vortex_Arrows$: 1,
  O: 1
});
export { $d_Lcom_rubenverg_vortex_Arrows$ as $d_Lcom_rubenverg_vortex_Arrows$ };
$c_Lcom_rubenverg_vortex_Arrows$.prototype.$classData = $d_Lcom_rubenverg_vortex_Arrows$;
var $n_Lcom_rubenverg_vortex_Arrows$;
function $m_Lcom_rubenverg_vortex_Arrows$() {
  if ((!$n_Lcom_rubenverg_vortex_Arrows$)) {
    $n_Lcom_rubenverg_vortex_Arrows$ = new $c_Lcom_rubenverg_vortex_Arrows$()
  };
  return $n_Lcom_rubenverg_vortex_Arrows$
}
export { $m_Lcom_rubenverg_vortex_Arrows$ as $m_Lcom_rubenverg_vortex_Arrows$ };
//# sourceMappingURL=com.rubenverg.vortex.Arrows$.js.map
