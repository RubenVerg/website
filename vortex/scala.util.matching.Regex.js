'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
}
export { $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__ as $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__ };
function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $j_java$002elang$002eObject.$m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
}
export { $ct_s_util_matching_Regex__T__sci_Seq__ as $ct_s_util_matching_Regex__T__sci_Seq__ };
/** @constructor */
function $c_s_util_matching_Regex() {
  this.s_util_matching_Regex__f_pattern = null;
  this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
}
export { $c_s_util_matching_Regex as $c_s_util_matching_Regex };
$c_s_util_matching_Regex.prototype = new $j_java$002elang$002eObject.$h_O();
$c_s_util_matching_Regex.prototype.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
  /*<skip>*/
}
export { $h_s_util_matching_Regex as $h_s_util_matching_Regex };
$h_s_util_matching_Regex.prototype = $c_s_util_matching_Regex.prototype;
$c_s_util_matching_Regex.prototype.unapplySeq__jl_CharSequence__s_Option = (function(s) {
  var this$1 = this.s_util_matching_Regex__f_pattern;
  var m = new $j_java$002elang$002eObject.$c_ju_regex_Matcher(this$1, $j_java$002elang$002eObject.$dp_toString__T(s));
  if (m.matches__Z()) {
    $j_java$002elang$002eObject.$m_s_package$();
    var n = m.ju_regex_Matcher__f_pattern0.ju_regex_Pattern__f_groupCount;
    var b = new $j_java$002elang$002eObject.$c_scm_ListBuffer();
    var i = 0;
    while ((i < n)) {
      var arg1 = i;
      var elem = m.group__I__T(((1 + arg1) | 0));
      b.addOne__O__scm_ListBuffer(elem);
      i = ((1 + i) | 0)
    };
    return new $j_java$002elang$002eObject.$c_s_Some(b.toList__sci_List())
  } else {
    return $j_java$002elang$002eObject.$m_s_None$()
  }
});
$c_s_util_matching_Regex.prototype.toString__T = (function() {
  return this.s_util_matching_Regex__f_pattern.ju_regex_Pattern__f__pattern
});
var $d_s_util_matching_Regex = new $j_java$002elang$002eObject.$TypeData().initClass({
  s_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", {
  s_util_matching_Regex: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_s_util_matching_Regex as $d_s_util_matching_Regex };
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
//# sourceMappingURL=scala.util.matching.Regex.js.map
