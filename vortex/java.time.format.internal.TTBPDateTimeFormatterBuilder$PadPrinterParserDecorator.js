'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002eDateTimeException from "./java.time.DateTimeException.js";
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator(printerParser, padWidth, padChar) {
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_printerParser = null;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth = 0;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padChar = 0;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_printerParser = printerParser;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth = padWidth;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padChar = padChar
}
export { $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator as $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator as $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator };
$h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype;
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z = (function(context, buf) {
  var preLen = buf.length__I();
  if ((!this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_printerParser.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z(context, buf))) {
    return false
  };
  var len = ((buf.length__I() - preLen) | 0);
  if ((len > this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Cannot print as output of " + len) + " characters exceeds pad width of ") + this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth))
  };
  var i = 0;
  while ((i < ((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth - len) | 0))) {
    var c = this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padChar;
    buf.insert__I__T__jl_StringBuilder(preLen, String.fromCharCode(c));
    i = ((1 + i) | 0)
  };
  return true
});
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype.toString__T = (function() {
  return (((("Pad(" + this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_printerParser) + ",") + this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padWidth) + ((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padChar === 32) ? ")" : ((",'" + $j_java$002elang$002eObject.$bC(this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator__f_padChar)) + "')")))
});
var $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator: 0
}, false, "java.time.format.internal.TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator", {
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator: 1,
  O: 1,
  Ljava_time_format_internal_DateTimePrinterParser: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator as $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator;
//# sourceMappingURL=java.time.format.internal.TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.js.map
