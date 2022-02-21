'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_Point(x, y) {
  this.Lcom_rubenverg_vortex_Point__f_x = 0.0;
  this.Lcom_rubenverg_vortex_Point__f_y = 0.0;
  this.Lcom_rubenverg_vortex_Point__f_x = x;
  this.Lcom_rubenverg_vortex_Point__f_y = y
}
export { $c_Lcom_rubenverg_vortex_Point as $c_Lcom_rubenverg_vortex_Point };
$c_Lcom_rubenverg_vortex_Point.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_Point.prototype.constructor = $c_Lcom_rubenverg_vortex_Point;
/** @constructor */
function $h_Lcom_rubenverg_vortex_Point() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_Point as $h_Lcom_rubenverg_vortex_Point };
$h_Lcom_rubenverg_vortex_Point.prototype = $c_Lcom_rubenverg_vortex_Point.prototype;
$c_Lcom_rubenverg_vortex_Point.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Lcom_rubenverg_vortex_Point.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_java$002elang$002eObject.$f_T__hashCode__I("Point");
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var dv = this.Lcom_rubenverg_vortex_Point__f_x;
  var data$1 = $j_java$002elang$002eObject.$m_sr_Statics$().doubleHash__D__I(dv);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var dv$1 = this.Lcom_rubenverg_vortex_Point__f_y;
  var data$2 = $j_java$002elang$002eObject.$m_sr_Statics$().doubleHash__D__I(dv$1);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  return $j_java$002elang$002eObject.$m_sr_Statics$().finalizeHash__I__I__I(hash$3, 2)
});
$c_Lcom_rubenverg_vortex_Point.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lcom_rubenverg_vortex_Point)) {
    var x$0$2 = x$0;
    return ((this.Lcom_rubenverg_vortex_Point__f_x === x$0$2.Lcom_rubenverg_vortex_Point__f_x) && (this.Lcom_rubenverg_vortex_Point__f_y === x$0$2.Lcom_rubenverg_vortex_Point__f_y))
  } else {
    return false
  }
});
$c_Lcom_rubenverg_vortex_Point.prototype.productArity__I = (function() {
  return 2
});
$c_Lcom_rubenverg_vortex_Point.prototype.productPrefix__T = (function() {
  return "Point"
});
$c_Lcom_rubenverg_vortex_Point.prototype.productElement__I__O = (function(n) {
  if ((n === 0)) {
    return this.Lcom_rubenverg_vortex_Point__f_x
  };
  if ((n === 1)) {
    return this.Lcom_rubenverg_vortex_Point__f_y
  };
  throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
$c_Lcom_rubenverg_vortex_Point.prototype.toString__T = (function() {
  return (((("(" + this.Lcom_rubenverg_vortex_Point__f_x) + ", ") + this.Lcom_rubenverg_vortex_Point__f_y) + ")")
});
function $isArrayOf_Lcom_rubenverg_vortex_Point(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_rubenverg_vortex_Point)))
}
export { $isArrayOf_Lcom_rubenverg_vortex_Point as $isArrayOf_Lcom_rubenverg_vortex_Point };
var $d_Lcom_rubenverg_vortex_Point = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_Point: 0
}, false, "com.rubenverg.vortex.Point", {
  Lcom_rubenverg_vortex_Point: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Lcom_rubenverg_vortex_Point as $d_Lcom_rubenverg_vortex_Point };
$c_Lcom_rubenverg_vortex_Point.prototype.$classData = $d_Lcom_rubenverg_vortex_Point;
//# sourceMappingURL=com.rubenverg.vortex.Point.js.map
