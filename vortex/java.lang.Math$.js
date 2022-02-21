'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_jl_Math$() {
  /*<skip>*/
}
export { $c_jl_Math$ as $c_jl_Math$ };
$c_jl_Math$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_jl_Math$.prototype.constructor = $c_jl_Math$;
/** @constructor */
function $h_jl_Math$() {
  /*<skip>*/
}
export { $h_jl_Math$ as $h_jl_Math$ };
$h_jl_Math$.prototype = $c_jl_Math$.prototype;
$c_jl_Math$.prototype.addExact__J__J__J = (function(a, b) {
  var alo = a.RTLong__f_lo;
  var ahi = a.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  var resSgnBit = (hi < 0);
  var ahi$1 = a.RTLong__f_hi;
  if ((resSgnBit === (ahi$1 < 0))) {
    var $$x1 = true
  } else {
    var ahi$2 = b.RTLong__f_hi;
    var $$x1 = (resSgnBit === (ahi$2 < 0))
  };
  if ($$x1) {
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  } else {
    throw new $j_java$002elang$002eObject.$c_jl_ArithmeticException("Long overflow")
  }
});
$c_jl_Math$.prototype.subtractExact__J__J__J = (function(a, b) {
  var alo = a.RTLong__f_lo;
  var ahi = a.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo - b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0));
  var resSgnBit = (hi < 0);
  var ahi$1 = a.RTLong__f_hi;
  if ((resSgnBit === (ahi$1 < 0))) {
    var $$x1 = true
  } else {
    var ahi$2 = b.RTLong__f_hi;
    var $$x1 = (resSgnBit === ((ahi$2 === 0) ? (b.RTLong__f_lo !== 0) : (ahi$2 > 0)))
  };
  if ($$x1) {
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  } else {
    throw new $j_java$002elang$002eObject.$c_jl_ArithmeticException("Long overflow")
  }
});
$c_jl_Math$.prototype.multiplyExact__J__J__J = (function(a, b) {
  var ahi = b.RTLong__f_hi;
  if (((ahi === 0) ? (b.RTLong__f_lo !== 0) : (ahi > 0))) {
    var this$1 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo = this$1.divideImpl__I__I__I__I__I((-1), 2147483647, b.RTLong__f_lo, b.RTLong__f_hi);
    var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var ahi$1 = a.RTLong__f_hi;
    if (((ahi$1 === hi) ? (((-2147483648) ^ a.RTLong__f_lo) > ((-2147483648) ^ lo)) : (ahi$1 > hi))) {
      var overflow = true
    } else {
      var this$2 = $j_java$002elang$002eObject.$m_RTLong$();
      var lo$1 = this$2.divideImpl__I__I__I__I__I(0, (-2147483648), b.RTLong__f_lo, b.RTLong__f_hi);
      var hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var ahi$2 = a.RTLong__f_hi;
      var overflow = ((ahi$2 === hi$1) ? (((-2147483648) ^ a.RTLong__f_lo) < ((-2147483648) ^ lo$1)) : (ahi$2 < hi$1))
    }
  } else {
    var ahi$3 = b.RTLong__f_hi;
    if (((ahi$3 === (-1)) ? (b.RTLong__f_lo !== (-1)) : (ahi$3 < (-1)))) {
      var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
      var lo$2 = this$3.divideImpl__I__I__I__I__I(0, (-2147483648), b.RTLong__f_lo, b.RTLong__f_hi);
      var hi$2 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var ahi$4 = a.RTLong__f_hi;
      if (((ahi$4 === hi$2) ? (((-2147483648) ^ a.RTLong__f_lo) > ((-2147483648) ^ lo$2)) : (ahi$4 > hi$2))) {
        var overflow = true
      } else {
        var this$4 = $j_java$002elang$002eObject.$m_RTLong$();
        var lo$3 = this$4.divideImpl__I__I__I__I__I((-1), 2147483647, b.RTLong__f_lo, b.RTLong__f_hi);
        var hi$3 = this$4.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var ahi$5 = a.RTLong__f_hi;
        var overflow = ((ahi$5 === hi$3) ? (((-2147483648) ^ a.RTLong__f_lo) < ((-2147483648) ^ lo$3)) : (ahi$5 < hi$3))
      }
    } else {
      var overflow = (((b.RTLong__f_lo === (-1)) && (b.RTLong__f_hi === (-1))) && ((a.RTLong__f_lo === 0) && (a.RTLong__f_hi === (-2147483648))))
    }
  };
  if ((!overflow)) {
    var alo = a.RTLong__f_lo;
    var blo = b.RTLong__f_lo;
    var a0 = (65535 & alo);
    var a1 = ((alo >>> 16) | 0);
    var b0 = (65535 & blo);
    var b1 = ((blo >>> 16) | 0);
    var a0b0 = $j_java$002elang$002eObject.$imul(a0, b0);
    var a1b0 = $j_java$002elang$002eObject.$imul(a1, b0);
    var a0b1 = $j_java$002elang$002eObject.$imul(a0, b1);
    var lo$4 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$4 = (((((((($j_java$002elang$002eObject.$imul(alo, b.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(a.RTLong__f_hi, blo)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $j_java$002elang$002eObject.$c_RTLong(lo$4, hi$4)
  } else {
    throw new $j_java$002elang$002eObject.$c_jl_ArithmeticException("Long overflow")
  }
});
$c_jl_Math$.prototype.floorDiv__J__J__J = (function(a, b) {
  var this$1 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var ahi = a.RTLong__f_hi;
  var ahi$1 = b.RTLong__f_hi;
  if (((ahi < 0) === (ahi$1 < 0))) {
    var $$x1 = true
  } else {
    var blo = b.RTLong__f_lo;
    var a0 = (65535 & lo);
    var a1 = ((lo >>> 16) | 0);
    var b0 = (65535 & blo);
    var b1 = ((blo >>> 16) | 0);
    var a0b0 = $j_java$002elang$002eObject.$imul(a0, b0);
    var a1b0 = $j_java$002elang$002eObject.$imul(a1, b0);
    var a0b1 = $j_java$002elang$002eObject.$imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = (((((((($j_java$002elang$002eObject.$imul(lo, b.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi, blo)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var $$x1 = ((lo$1 === a.RTLong__f_lo) && (hi$1 === a.RTLong__f_hi))
  };
  if ($$x1) {
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  } else {
    var lo$2 = (((-1) + lo) | 0);
    var hi$2 = ((lo$2 !== (-1)) ? hi : (((-1) + hi) | 0));
    return new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$2)
  }
});
$c_jl_Math$.prototype.floorMod__J__J__J = (function(a, b) {
  var this$1 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var ahi = a.RTLong__f_hi;
  var ahi$1 = b.RTLong__f_hi;
  if ((((ahi < 0) === (ahi$1 < 0)) || ((lo === 0) && (hi === 0)))) {
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  } else {
    var bhi = b.RTLong__f_hi;
    var lo$1 = ((lo + b.RTLong__f_lo) | 0);
    var hi$1 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi + bhi) | 0)) | 0) : ((hi + bhi) | 0));
    return new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$1)
  }
});
var $d_jl_Math$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  jl_Math$: 0
}, false, "java.lang.Math$", {
  jl_Math$: 1,
  O: 1
});
export { $d_jl_Math$ as $d_jl_Math$ };
$c_jl_Math$.prototype.$classData = $d_jl_Math$;
var $n_jl_Math$;
function $m_jl_Math$() {
  if ((!$n_jl_Math$)) {
    $n_jl_Math$ = new $c_jl_Math$()
  };
  return $n_jl_Math$
}
export { $m_jl_Math$ as $m_jl_Math$ };
//# sourceMappingURL=java.lang.Math$.js.map
