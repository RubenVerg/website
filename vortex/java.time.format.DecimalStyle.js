'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_Ljava_time_format_DecimalStyle(zeroDigit, positiveSign, negativeSign, decimalSeparator) {
  this.Ljava_time_format_DecimalStyle__f_zeroDigit = 0;
  this.Ljava_time_format_DecimalStyle__f_positiveSign = 0;
  this.Ljava_time_format_DecimalStyle__f_negativeSign = 0;
  this.Ljava_time_format_DecimalStyle__f_decimalSeparator = 0;
  this.Ljava_time_format_DecimalStyle__f_zeroDigit = zeroDigit;
  this.Ljava_time_format_DecimalStyle__f_positiveSign = positiveSign;
  this.Ljava_time_format_DecimalStyle__f_negativeSign = negativeSign;
  this.Ljava_time_format_DecimalStyle__f_decimalSeparator = decimalSeparator
}
export { $c_Ljava_time_format_DecimalStyle as $c_Ljava_time_format_DecimalStyle };
$c_Ljava_time_format_DecimalStyle.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_DecimalStyle.prototype.constructor = $c_Ljava_time_format_DecimalStyle;
/** @constructor */
function $h_Ljava_time_format_DecimalStyle() {
  /*<skip>*/
}
export { $h_Ljava_time_format_DecimalStyle as $h_Ljava_time_format_DecimalStyle };
$h_Ljava_time_format_DecimalStyle.prototype = $c_Ljava_time_format_DecimalStyle.prototype;
$c_Ljava_time_format_DecimalStyle.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_format_DecimalStyle)) {
    var other = obj;
    return ((this === other) || ((((this.Ljava_time_format_DecimalStyle__f_zeroDigit === other.Ljava_time_format_DecimalStyle__f_zeroDigit) && (this.Ljava_time_format_DecimalStyle__f_positiveSign === other.Ljava_time_format_DecimalStyle__f_positiveSign)) && (this.Ljava_time_format_DecimalStyle__f_negativeSign === other.Ljava_time_format_DecimalStyle__f_negativeSign)) && (this.Ljava_time_format_DecimalStyle__f_decimalSeparator === other.Ljava_time_format_DecimalStyle__f_decimalSeparator)))
  } else {
    return false
  }
});
$c_Ljava_time_format_DecimalStyle.prototype.hashCode__I = (function() {
  return ((((((this.Ljava_time_format_DecimalStyle__f_zeroDigit + this.Ljava_time_format_DecimalStyle__f_positiveSign) | 0) + this.Ljava_time_format_DecimalStyle__f_negativeSign) | 0) + this.Ljava_time_format_DecimalStyle__f_decimalSeparator) | 0)
});
$c_Ljava_time_format_DecimalStyle.prototype.toString__T = (function() {
  return ((((("DecimalStyle[" + $j_java$002elang$002eObject.$bC(this.Ljava_time_format_DecimalStyle__f_zeroDigit)) + $j_java$002elang$002eObject.$bC(this.Ljava_time_format_DecimalStyle__f_positiveSign)) + $j_java$002elang$002eObject.$bC(this.Ljava_time_format_DecimalStyle__f_negativeSign)) + $j_java$002elang$002eObject.$bC(this.Ljava_time_format_DecimalStyle__f_decimalSeparator)) + "]")
});
function $isArrayOf_Ljava_time_format_DecimalStyle(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_format_DecimalStyle)))
}
export { $isArrayOf_Ljava_time_format_DecimalStyle as $isArrayOf_Ljava_time_format_DecimalStyle };
var $d_Ljava_time_format_DecimalStyle = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_DecimalStyle: 0
}, false, "java.time.format.DecimalStyle", {
  Ljava_time_format_DecimalStyle: 1,
  O: 1
});
export { $d_Ljava_time_format_DecimalStyle as $d_Ljava_time_format_DecimalStyle };
$c_Ljava_time_format_DecimalStyle.prototype.$classData = $d_Ljava_time_format_DecimalStyle;
//# sourceMappingURL=java.time.format.DecimalStyle.js.map
