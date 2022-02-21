'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002eformat$002einternal$002eDateTimePrinterParser from "./java.time.format.internal.DateTimePrinterParser.js";
import * as $j_scala$002eruntime$002eNonLocalReturnControl from "./scala.runtime.NonLocalReturnControl.js";
function $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ALjava_time_format_internal_DateTimePrinterParser__Z__($thiz, printerParsers, optional) {
  $thiz.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_printerParsers = printerParsers;
  $thiz.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional = optional;
  return $thiz
}
export { $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ALjava_time_format_internal_DateTimePrinterParser__Z__ as $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ALjava_time_format_internal_DateTimePrinterParser__Z__ };
function $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ju_List__Z__($thiz, printerParsers, optional) {
  var dimensions = new $j_java$002elang$002eObject.$ac_I(new Int32Array([printerParsers.size__I()]));
  $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ALjava_time_format_internal_DateTimePrinterParser__Z__($thiz, printerParsers.toArray__AO__AO($j_java$002elang$002eObject.$m_jl_reflect_Array$().newInstance__jl_Class__AI__O($j_java$002etime$002eformat$002einternal$002eDateTimePrinterParser.$d_Ljava_time_format_internal_DateTimePrinterParser.getClassOf(), dimensions)), optional);
  return $thiz
}
export { $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ju_List__Z__ as $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ju_List__Z__ };
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser() {
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_printerParsers = null;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional = false
}
export { $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser as $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser as $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser };
$h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype;
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z = (function(context, buf) {
  var nonLocalReturnKey1 = $j_java$002elang$002eObject.$ct_O__(new $j_java$002elang$002eObject.$c_O());
  try {
    var length = buf.length__I();
    if (this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional) {
      context.startOptional__V()
    };
    try {
      var xs = this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_printerParsers;
      var f = ((this$2, context$2, buf$2, length$2, nonLocalReturnKey1$2) => ((pp) => {
        var pp$1 = pp;
        if ((!pp$1.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z(context$2, buf$2))) {
          buf$2.setLength__I__V(length$2);
          throw new $j_scala$002eruntime$002eNonLocalReturnControl.$c_sr_NonLocalReturnControl(nonLocalReturnKey1$2, true)
        }
      }))(this, context, buf, length, nonLocalReturnKey1);
      var len = xs.u.length;
      var i = 0;
      if ((xs !== null)) {
        while ((i < len)) {
          var arg1 = xs.u[i];
          f(arg1);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_I)) {
        var x3 = xs;
        while ((i < len)) {
          var arg1$1 = x3.u[i];
          f(arg1$1);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_D)) {
        var x4 = xs;
        while ((i < len)) {
          var arg1$2 = x4.u[i];
          f(arg1$2);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_J)) {
        var x5 = xs;
        while ((i < len)) {
          var t = x5.u[i];
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          f(new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_F)) {
        var x6 = xs;
        while ((i < len)) {
          var arg1$3 = x6.u[i];
          f(arg1$3);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_C)) {
        var x7 = xs;
        while ((i < len)) {
          var arg1$4 = x7.u[i];
          f($j_java$002elang$002eObject.$bC(arg1$4));
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_B)) {
        var x8 = xs;
        while ((i < len)) {
          var arg1$5 = x8.u[i];
          f(arg1$5);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_S)) {
        var x9 = xs;
        while ((i < len)) {
          var arg1$6 = x9.u[i];
          f(arg1$6);
          i = ((1 + i) | 0)
        }
      } else if ((xs instanceof $j_java$002elang$002eObject.$ac_Z)) {
        var x10 = xs;
        while ((i < len)) {
          var arg1$7 = x10.u[i];
          f(arg1$7);
          i = ((1 + i) | 0)
        }
      } else {
        throw new $j_java$002elang$002eObject.$c_s_MatchError(xs)
      }
    } finally {
      if (this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional) {
        context.endOptional__V()
      }
    };
    return true
  } catch (e) {
    if ((e instanceof $j_scala$002eruntime$002eNonLocalReturnControl.$c_sr_NonLocalReturnControl)) {
      var ex = e;
      if ((ex.sr_NonLocalReturnControl__f_key === nonLocalReturnKey1)) {
        return (!(!ex.sr_NonLocalReturnControl__f_value))
      } else {
        throw ex
      }
    } else {
      throw e
    }
  }
});
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype.toString__T = (function() {
  var buf = $j_java$002elang$002eObject.$ct_jl_StringBuilder__(new $j_java$002elang$002eObject.$c_jl_StringBuilder());
  if ((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_printerParsers !== null)) {
    var str = (this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional ? "[" : "(");
    buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (buf.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
    var xs = this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_printerParsers;
    var f = ((this$2, buf$2) => ((pp) => {
      var pp$1 = pp;
      buf$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + pp$1);
      return buf$2
    }))(this, buf);
    var len = xs.u.length;
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var arg1 = xs.u[i];
        f(arg1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_I)) {
      var x3 = xs;
      while ((i < len)) {
        var arg1$1 = x3.u[i];
        f(arg1$1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_D)) {
      var x4 = xs;
      while ((i < len)) {
        var arg1$2 = x4.u[i];
        f(arg1$2);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_J)) {
      var x5 = xs;
      while ((i < len)) {
        var t = x5.u[i];
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        f(new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_F)) {
      var x6 = xs;
      while ((i < len)) {
        var arg1$3 = x6.u[i];
        f(arg1$3);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_C)) {
      var x7 = xs;
      while ((i < len)) {
        var arg1$4 = x7.u[i];
        f($j_java$002elang$002eObject.$bC(arg1$4));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_B)) {
      var x8 = xs;
      while ((i < len)) {
        var arg1$5 = x8.u[i];
        f(arg1$5);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_S)) {
      var x9 = xs;
      while ((i < len)) {
        var arg1$6 = x9.u[i];
        f(arg1$6);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_Z)) {
      var x10 = xs;
      while ((i < len)) {
        var arg1$7 = x10.u[i];
        f(arg1$7);
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_java$002elang$002eObject.$c_s_MatchError(xs)
    };
    var str$1 = (this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__f_optional ? "]" : ")");
    buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (buf.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1)
  };
  return buf.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
var $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser: 0
}, false, "java.time.format.internal.TTBPDateTimeFormatterBuilder$CompositePrinterParser", {
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser: 1,
  O: 1,
  Ljava_time_format_internal_DateTimePrinterParser: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser as $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser;
//# sourceMappingURL=java.time.format.internal.TTBPDateTimeFormatterBuilder$CompositePrinterParser.js.map
