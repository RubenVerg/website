'use strict';
import * as $j_java$002elang$002eEnum from "./java.lang.Enum.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
function $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__T__I__T__I__($thiz, name, ordinal, _$name, _$ordinal) {
  $thiz.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__f_ordinal = ordinal;
  $j_java$002elang$002eEnum.$ct_jl_Enum__T__I__($thiz, _$name, _$ordinal);
  return $thiz
}
export { $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__T__I__T__I__ as $ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__T__I__T__I__ };
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__f_ordinal = 0
}
export { $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser as $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype = new $j_java$002elang$002eEnum.$h_jl_Enum();
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser as $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser };
$h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype;
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z = (function(context, buf) {
  return true
});
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype.toString__T = (function() {
  var x7 = this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser__f_ordinal;
  switch (x7) {
    case 0: {
      return "ParseCaseSensitive(true)";
      break
    }
    case 1: {
      return "ParseCaseSensitive(false)";
      break
    }
    case 2: {
      return "ParseStrict(true)";
      break
    }
    case 3: {
      return "ParseStrict(false)";
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IllegalStateException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalStateException(), "Unreachable")
    }
  }
});
var $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser: 0
}, false, "java.time.format.internal.TTBPDateTimeFormatterBuilder$SettingsParser", {
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_format_internal_DateTimePrinterParser: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser as $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser;
//# sourceMappingURL=java.time.format.internal.TTBPDateTimeFormatterBuilder$SettingsParser.js.map
