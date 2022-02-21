'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option($thiz, i, agg, isPositive, len$2, from$2) {
  while (true) {
    if ((i === len$2)) {
      return ((!isPositive) ? new $j_java$002elang$002eObject.$c_s_Some(agg) : ((agg === (-2147483648)) ? $j_java$002elang$002eObject.$m_s_None$() : new $j_java$002elang$002eObject.$c_s_Some(((-agg) | 0))))
    } else if ((agg < (-214748364))) {
      return $j_java$002elang$002eObject.$m_s_None$()
    } else {
      var index = i;
      var ch = (65535 & (from$2.charCodeAt(index) | 0));
      var this$1 = $j_java$002elang$002eObject.$m_jl_Character$();
      var codePoint = ch;
      var digit = this$1.digitWithValidRadix__I__I__I(codePoint, 10);
      if (((digit === (-1)) || ((agg === (-214748364)) && (digit === 9)))) {
        return $j_java$002elang$002eObject.$m_s_None$()
      } else {
        var temp$i = ((1 + i) | 0);
        var temp$agg = (($j_java$002elang$002eObject.$imul(10, agg) - digit) | 0);
        i = temp$i;
        agg = temp$agg
      }
    }
  }
}
export { $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option as $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option };
/** @constructor */
function $c_sc_StringParsers$() {
  /*<skip>*/
}
export { $c_sc_StringParsers$ as $c_sc_StringParsers$ };
$c_sc_StringParsers$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sc_StringParsers$.prototype.constructor = $c_sc_StringParsers$;
/** @constructor */
function $h_sc_StringParsers$() {
  /*<skip>*/
}
export { $h_sc_StringParsers$ as $h_sc_StringParsers$ };
$h_sc_StringParsers$.prototype = $c_sc_StringParsers$.prototype;
$c_sc_StringParsers$.prototype.parseInt__T__s_Option = (function(from) {
  var len = (from.length | 0);
  if ((len === 0)) {
    return $j_java$002elang$002eObject.$m_s_None$()
  } else {
    var first = (65535 & (from.charCodeAt(0) | 0));
    var this$1 = $j_java$002elang$002eObject.$m_jl_Character$();
    var codePoint = first;
    var v = this$1.digitWithValidRadix__I__I__I(codePoint, 10);
    return ((len === 1) ? ((v > (-1)) ? new $j_java$002elang$002eObject.$c_s_Some(v) : $j_java$002elang$002eObject.$m_s_None$()) : ((v > (-1)) ? $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option(this, 1, ((-v) | 0), true, len, from) : ((first === 43) ? $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option(this, 1, 0, true, len, from) : ((first === 45) ? $p_sc_StringParsers$__step$1__I__I__Z__I__T__s_Option(this, 1, 0, false, len, from) : $j_java$002elang$002eObject.$m_s_None$()))))
  }
});
var $d_sc_StringParsers$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_StringParsers$: 0
}, false, "scala.collection.StringParsers$", {
  sc_StringParsers$: 1,
  O: 1
});
export { $d_sc_StringParsers$ as $d_sc_StringParsers$ };
$c_sc_StringParsers$.prototype.$classData = $d_sc_StringParsers$;
var $n_sc_StringParsers$;
function $m_sc_StringParsers$() {
  if ((!$n_sc_StringParsers$)) {
    $n_sc_StringParsers$ = new $c_sc_StringParsers$()
  };
  return $n_sc_StringParsers$
}
export { $m_sc_StringParsers$ as $m_sc_StringParsers$ };
//# sourceMappingURL=scala.collection.StringParsers$.js.map
