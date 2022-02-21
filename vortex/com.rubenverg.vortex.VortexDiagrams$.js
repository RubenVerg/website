'use strict';
import * as $j_com$002erubenverg$002evortex$002eAlgorithm from "./com.rubenverg.vortex.Algorithm.js";
import * as $j_com$002erubenverg$002evortex$002eArrows$0024 from "./com.rubenverg.vortex.Arrows$.js";
import * as $j_com$002erubenverg$002evortex$002eBuildInfo$0024 from "./com.rubenverg.vortex.BuildInfo$.js";
import * as $j_com$002erubenverg$002evortex$002eEdges$0024 from "./com.rubenverg.vortex.Edges$.js";
import * as $j_com$002erubenverg$002evortex$002eLoopAlgorithm$0024 from "./com.rubenverg.vortex.LoopAlgorithm$.js";
import * as $j_com$002erubenverg$002evortex$002ePoint from "./com.rubenverg.vortex.Point.js";
import * as $j_com$002erubenverg$002evortex$002ePoint$0024 from "./com.rubenverg.vortex.Point$.js";
import * as $j_com$002erubenverg$002evortex$002ePredef$0024intl$0024 from "./com.rubenverg.vortex.Predef$intl$.js";
import * as $j_com$002erubenverg$002evortex$002ePureAlgorithm from "./com.rubenverg.vortex.PureAlgorithm.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002eStringOps$0024 from "./scala.collection.StringOps$.js";
import * as $j_scala$002ecollection$002eStringParsers$0024 from "./scala.collection.StringParsers$.js";
import * as $j_scala$002escalajs$002eruntime$002eAnonFunction4 from "./scala.scalajs.runtime.AnonFunction4.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_VortexDiagrams$() {
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intl$lzy1 = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intlbitmap$1 = false;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algos = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_multiplierInput = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_moduloInput = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_arrowsInput = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algorithmInput = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfo$lzy1 = null;
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfobitmap$1 = false;
  $n_Lcom_rubenverg_vortex_VortexDiagrams$ = this;
  var this$14 = $j_java$002elang$002eObject.$m_s_Predef$().s_Predef$__f_Map;
  var $$x4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$();
  var y = new $j_com$002erubenverg$002evortex$002ePureAlgorithm.$c_Lcom_rubenverg_vortex_PureAlgorithm(new $j_scala$002escalajs$002eruntime$002eAnonFunction4.$c_sjsr_AnonFunction4(((this$2) => ((a, b, mult, mod) => "black"))(this)));
  var $$x3 = new $j_java$002elang$002eObject.$c_T2("black", y);
  var y$1 = new $j_com$002erubenverg$002evortex$002ePureAlgorithm.$c_Lcom_rubenverg_vortex_PureAlgorithm(new $j_scala$002escalajs$002eruntime$002eAnonFunction4.$c_sjsr_AnonFunction4(((this$2$1) => ((a$2, b$2, mult$2, mod$2) => {
    var a$1 = (a$2 | 0);
    var b$1 = (b$2 | 0);
    var that$proxy1 = this$2$1.number__I__Lcom_rubenverg_vortex_Point(b$1);
    var Point_this = this$2$1.number__I__Lcom_rubenverg_vortex_Point(a$1);
    var x = (Point_this.Lcom_rubenverg_vortex_Point__f_x - that$proxy1.Lcom_rubenverg_vortex_Point__f_x);
    var $$x1 = Math.pow(x, 2.0);
    var x$1 = (Point_this.Lcom_rubenverg_vortex_Point__f_y - that$proxy1.Lcom_rubenverg_vortex_Point__f_y);
    var x$2 = ((+$$x1) + (+Math.pow(x$1, 2.0)));
    return (("hsl(" + ((+Math.sqrt(x$2)) / (this$2$1.radius__I() << 1))) + "turn, 100%, 50%)")
  }))(this)));
  var $$x2 = new $j_java$002elang$002eObject.$c_T2("length", y$1);
  var y$2 = $j_com$002erubenverg$002evortex$002eLoopAlgorithm$0024.$m_Lcom_rubenverg_vortex_LoopAlgorithm$();
  var elems = $$x4.wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([$$x3, $$x2, new $j_java$002elang$002eObject.$c_T2("loops", y$2)]));
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algos = this$14.from__sc_IterableOnce__sci_Map(elems);
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas = window.document.querySelector("canvas");
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas.getContext("2d");
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_multiplierInput = window.document.querySelector("#multiplier");
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_moduloInput = window.document.querySelector("#modulo");
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_arrowsInput = window.document.querySelector("#arrows");
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algorithmInput = window.document.querySelector("#algorithm")
}
export { $c_Lcom_rubenverg_vortex_VortexDiagrams$ as $c_Lcom_rubenverg_vortex_VortexDiagrams$ };
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.constructor = $c_Lcom_rubenverg_vortex_VortexDiagrams$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_VortexDiagrams$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_VortexDiagrams$ as $h_Lcom_rubenverg_vortex_VortexDiagrams$ };
$h_Lcom_rubenverg_vortex_VortexDiagrams$.prototype = $c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype;
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.intl__Lcom_rubenverg_vortex_Predef$intl$ = (function() {
  if ((!this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intlbitmap$1)) {
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intl$lzy1 = new $j_com$002erubenverg$002evortex$002ePredef$0024intl$0024.$c_Lcom_rubenverg_vortex_Predef$intl$(this);
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intlbitmap$1 = true
  };
  return this.Lcom_rubenverg_vortex_VortexDiagrams$__f_intl$lzy1
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.valid__Z = (function() {
  var x = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_multiplierInput.value;
  var this$3 = $j_scala$002ecollection$002eStringParsers$0024.$m_sc_StringParsers$().parseInt__T__s_Option(x);
  if ((!this$3.isEmpty__Z())) {
    var x$1 = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_moduloInput.value;
    var this$6 = $j_scala$002ecollection$002eStringParsers$0024.$m_sc_StringParsers$().parseInt__T__s_Option(x$1);
    var $$x1 = (!this$6.isEmpty__Z())
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    return this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algos.contains__O__Z(this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algorithmInput.value)
  } else {
    return false
  }
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.multiplier__I = (function() {
  var x = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_multiplierInput.value;
  var this$3 = $j_java$002elang$002eObject.$m_jl_Integer$();
  return this$3.parseInt__T__I__I(x, 10)
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.modulo__I = (function() {
  var x = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_moduloInput.value;
  var this$3 = $j_java$002elang$002eObject.$m_jl_Integer$();
  return this$3.parseInt__T__I__I(x, 10)
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.algorithm__Lcom_rubenverg_vortex_Algorithm = (function() {
  return this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algos.apply__O__O(this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algorithmInput.value)
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.arrows__Z = (function() {
  return (!(!this.Lcom_rubenverg_vortex_VortexDiagrams$__f_arrowsInput.checked))
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.radius__I = (function() {
  return (((((window.document.documentElement.clientHeight | 0) / 2) | 0) < 400) ? (((-50) + (((window.document.documentElement.clientHeight | 0) / 2) | 0)) | 0) : (((((window.document.documentElement.clientWidth | 0) / 2) | 0) < 400) ? (((-50) + (((window.document.documentElement.clientWidth | 0) / 2) | 0)) | 0) : 400))
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.versionInfo__T = (function() {
  if ((!this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfobitmap$1)) {
    var $$x4 = this.intl__Lcom_rubenverg_vortex_Predef$intl$().dateTime__Lorg_scalajs_dom_intl_DateTimeFormat();
    var $$x3 = Date;
    var t = $j_com$002erubenverg$002evortex$002eBuildInfo$0024.$m_Lcom_rubenverg_vortex_BuildInfo$().Lcom_rubenverg_vortex_BuildInfo$__f_buildTime.toEpochMilli__J();
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var $$x2 = new $$x3($j_java$002elang$002eObject.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
    var $$x1 = $$x4.format($$x2);
    var x = (("Vortex Diagrams version 1.0.0\r\n       |Compiled on Scala.JS 1.8.0 for Scala 3.1.1 with SBT 1.6.2\r\n       |Production build\r\n       |Built " + $$x1) + "\r\n       |");
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfo$lzy1 = $j_scala$002ecollection$002eStringOps$0024.$m_sc_StringOps$().stripMargin$extension__T__C__T(x, 124);
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfobitmap$1 = true
  };
  return this.Lcom_rubenverg_vortex_VortexDiagrams$__f_versionInfo$lzy1
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.clear__V = (function() {
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas.width = ((50 + (this.radius__I() << 1)) | 0);
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas.height = ((50 + (this.radius__I() << 1)) | 0);
  this.algorithm__Lcom_rubenverg_vortex_Algorithm().reset__V()
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.center__Lcom_rubenverg_vortex_Point = (function() {
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x = (((this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas.width | 0) / 2) | 0);
  var x$2 = x;
  var x$1 = (((this.Lcom_rubenverg_vortex_VortexDiagrams$__f_canvas.height | 0) / 2) | 0);
  var y = x$1;
  return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$2, y)
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.number__I__Lcom_rubenverg_vortex_Point = (function(n) {
  var Point_this = $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().unitCircle__D__Lcom_rubenverg_vortex_Point(((3.141592653589793 * (n << 1)) / this.modulo__I()));
  var x = this.radius__I();
  var factor$proxy1 = x;
  var $$x3 = $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var y = Point_this.Lcom_rubenverg_vortex_Point__f_y;
  var x$1 = Point_this.Lcom_rubenverg_vortex_Point__f_x;
  var $$x2 = Math.atan2(y, x$1);
  var x$2 = (Point_this.Lcom_rubenverg_vortex_Point__f_x - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_x);
  var $$x1 = Math.pow(x$2, 2.0);
  var x$3 = (Point_this.Lcom_rubenverg_vortex_Point__f_y - $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$().Lcom_rubenverg_vortex_Point$__f_Origin.Lcom_rubenverg_vortex_Point__f_y);
  var x$4 = ((+$$x1) + (+Math.pow(x$3, 2.0)));
  var Point_this$5 = $$x3.angleMagnitude__D__D__Lcom_rubenverg_vortex_Point(((+$$x2) + (-1.5707963267948966)), (+Math.sqrt(x$4)));
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x$5 = (Point_this$5.Lcom_rubenverg_vortex_Point__f_x * factor$proxy1);
  var y$1 = (Point_this$5.Lcom_rubenverg_vortex_Point__f_y * factor$proxy1);
  var that$proxy2 = new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$5, y$1);
  var Point_this$6 = this.center__Lcom_rubenverg_vortex_Point();
  $j_com$002erubenverg$002evortex$002ePoint$0024.$m_Lcom_rubenverg_vortex_Point$();
  var x$6 = (Point_this$6.Lcom_rubenverg_vortex_Point__f_x + that$proxy2.Lcom_rubenverg_vortex_Point__f_x);
  var y$2 = (Point_this$6.Lcom_rubenverg_vortex_Point__f_y + that$proxy2.Lcom_rubenverg_vortex_Point__f_y);
  return new $j_com$002erubenverg$002evortex$002ePoint.$c_Lcom_rubenverg_vortex_Point(x$6, y$2)
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.draw__V = (function() {
  if (this.valid__Z()) {
    this.clear__V();
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.strokeStyle = "black";
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.beginPath();
    var $$x3 = this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx;
    var $$x2 = this.center__Lcom_rubenverg_vortex_Point().Lcom_rubenverg_vortex_Point__f_x;
    var $$x1 = this.center__Lcom_rubenverg_vortex_Point().Lcom_rubenverg_vortex_Point__f_y;
    var x = this.radius__I();
    $$x3.arc($$x2, $$x1, x, 0.0, 6.283185307179586, false);
    this.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.stroke();
    $j_com$002erubenverg$002evortex$002eEdges$0024.$m_Lcom_rubenverg_vortex_Edges$().all__I__I__sci_Seq(this.modulo__I(), this.multiplier__I()).zipWithIndex__O().withFilter__F1__sc_WithFilter(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$3) => ((x$1) => {
      var x$1$1 = x$1;
      if ((x$1$1 !== null)) {
        var x2 = x$1$1.T2__f__1;
        if ((x2 !== null)) {
          return true
        }
      };
      return false
    }))(this))).foreach__F1__V(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((this$2$1) => ((x$1$2) => {
      var x$1$3 = x$1$2;
      matchResult2: {
        if ((x$1$3 !== null)) {
          var x7 = x$1$3.T2__f__1;
          if ((x7 !== null)) {
            var pa$1 = (x7.T2__f__1 | 0);
            var pb$1 = (x7.T2__f__2 | 0);
            var n$1 = (x$1$3.T2__f__2 | 0);
            var a = this$2$1.number__I__Lcom_rubenverg_vortex_Point(pa$1);
            var b = this$2$1.number__I__Lcom_rubenverg_vortex_Point(pb$1);
            var style = this$2$1.algorithm__Lcom_rubenverg_vortex_Algorithm().apply__I__I__I__I__T(n$1, $j_java$002elang$002eObject.$intMod($j_java$002elang$002eObject.$imul(this$2$1.multiplier__I(), n$1), this$2$1.modulo__I()), this$2$1.modulo__I(), this$2$1.multiplier__I());
            this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.fillStyle = style;
            this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.strokeStyle = style;
            this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.beginPath();
            if (((a === null) ? (b === null) : a.equals__O__Z(b))) {
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.arc(a.Lcom_rubenverg_vortex_Point__f_x, a.Lcom_rubenverg_vortex_Point__f_y, 2.5, 0.0, 6.283185307179586, false);
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.fill()
            } else if (this$2$1.arrows__Z()) {
              $j_com$002erubenverg$002evortex$002eArrows$0024.$m_Lcom_rubenverg_vortex_Arrows$().arrow__Lorg_scalajs_dom_CanvasRenderingContext2D__Lcom_rubenverg_vortex_Point__Lcom_rubenverg_vortex_Point__sci_Seq__V(this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx, a, b, $j_com$002erubenverg$002evortex$002eArrows$0024.$m_Lcom_rubenverg_vortex_Arrows$().arrow$default$4__Lorg_scalajs_dom_CanvasRenderingContext2D__sci_Seq(this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx));
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.fill()
            } else {
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.moveTo(a.Lcom_rubenverg_vortex_Point__f_x, a.Lcom_rubenverg_vortex_Point__f_y);
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.lineTo(b.Lcom_rubenverg_vortex_Point__f_x, b.Lcom_rubenverg_vortex_Point__f_y);
              this$2$1.Lcom_rubenverg_vortex_VortexDiagrams$__f_ctx.stroke()
            };
            break matchResult2
          }
        };
        throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$3)
      }
    }))(this)))
  }
});
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.main__AT__V = (function(args) {
  console.info(this.versionInfo__T());
  window.document.querySelector("#build-info").textContent = this.versionInfo__T();
  this.draw__V();
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_multiplierInput.addEventListener("input", ((this$1) => ((evt) => {
    this$1.draw__V()
  }))(this));
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_moduloInput.addEventListener("input", ((this$2) => ((evt$2) => {
    this$2.draw__V()
  }))(this));
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_algorithmInput.addEventListener("input", ((this$3) => ((evt$3) => {
    this$3.draw__V()
  }))(this));
  this.Lcom_rubenverg_vortex_VortexDiagrams$__f_arrowsInput.addEventListener("input", ((this$4) => ((evt$4) => {
    this$4.draw__V()
  }))(this));
  window.addEventListener("resize", ((this$5) => ((evt$5) => {
    this$5.draw__V()
  }))(this))
});
var $d_Lcom_rubenverg_vortex_VortexDiagrams$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_VortexDiagrams$: 0
}, false, "com.rubenverg.vortex.VortexDiagrams$", {
  Lcom_rubenverg_vortex_VortexDiagrams$: 1,
  O: 1,
  Lcom_rubenverg_vortex_Predef: 1
});
export { $d_Lcom_rubenverg_vortex_VortexDiagrams$ as $d_Lcom_rubenverg_vortex_VortexDiagrams$ };
$c_Lcom_rubenverg_vortex_VortexDiagrams$.prototype.$classData = $d_Lcom_rubenverg_vortex_VortexDiagrams$;
var $n_Lcom_rubenverg_vortex_VortexDiagrams$;
function $m_Lcom_rubenverg_vortex_VortexDiagrams$() {
  if ((!$n_Lcom_rubenverg_vortex_VortexDiagrams$)) {
    $n_Lcom_rubenverg_vortex_VortexDiagrams$ = new $c_Lcom_rubenverg_vortex_VortexDiagrams$()
  };
  return $n_Lcom_rubenverg_vortex_VortexDiagrams$
}
export { $m_Lcom_rubenverg_vortex_VortexDiagrams$ as $m_Lcom_rubenverg_vortex_VortexDiagrams$ };
//# sourceMappingURL=com.rubenverg.vortex.VortexDiagrams$.js.map
