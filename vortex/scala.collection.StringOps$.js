'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002eStringOps$0024$0024anon$00241 from "./scala.collection.StringOps$$anon$1.js";
/** @constructor */
function $c_sc_StringOps$() {
  /*<skip>*/
}
export { $c_sc_StringOps$ as $c_sc_StringOps$ };
$c_sc_StringOps$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_sc_StringOps$.prototype.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
  /*<skip>*/
}
export { $h_sc_StringOps$ as $h_sc_StringOps$ };
$h_sc_StringOps$.prototype = $c_sc_StringOps$.prototype;
$c_sc_StringOps$.prototype.stripMargin$extension__T__C__T = (function(this$, marginChar) {
  var sb = $j_java$002elang$002eObject.$ct_jl_StringBuilder__I__(new $j_java$002elang$002eObject.$c_jl_StringBuilder(), (this$.length | 0));
  var this$3 = new $j_scala$002ecollection$002eStringOps$0024$0024anon$00241.$c_sc_StringOps$$anon$1(this$, false);
  while ((this$3.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$index < this$3.sc_StringOps$$anon$1__f_scala$collection$StringOps$$anon$$len)) {
    var arg1 = this$3.next__T();
    var len = (arg1.length | 0);
    var index = 0;
    while (true) {
      if ((index < len)) {
        var index$1 = index;
        var $$x1 = ((65535 & (arg1.charCodeAt(index$1) | 0)) <= 32)
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        index = ((1 + index) | 0)
      } else {
        break
      }
    };
    if ((index < len)) {
      var index$2 = index;
      var $$x2 = ((65535 & (arg1.charCodeAt(index$2) | 0)) === marginChar)
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var beginIndex = ((1 + index) | 0);
      var stripped = arg1.substring(beginIndex)
    } else {
      var stripped = arg1
    };
    sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + stripped)
  };
  return sb.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
var $d_sc_StringOps$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  sc_StringOps$: 0
}, false, "scala.collection.StringOps$", {
  sc_StringOps$: 1,
  O: 1
});
export { $d_sc_StringOps$ as $d_sc_StringOps$ };
$c_sc_StringOps$.prototype.$classData = $d_sc_StringOps$;
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$()
  };
  return $n_sc_StringOps$
}
export { $m_sc_StringOps$ as $m_sc_StringOps$ };
//# sourceMappingURL=scala.collection.StringOps$.js.map
