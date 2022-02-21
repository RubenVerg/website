'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
/** @constructor */
function $c_Lcom_rubenverg_vortex_Predef$intl$(outer) {
  this.Lcom_rubenverg_vortex_Predef$intl$__f_collator$lzy1 = null;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_collatorbitmap$1 = false;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTime$lzy1 = null;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTimebitmap$1 = false;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_number$lzy1 = null;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_numberbitmap$1 = false;
  this.Lcom_rubenverg_vortex_Predef$intl$__f_$outer = null;
  if ((outer === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__(new $j_java$002elang$002eObject.$c_jl_NullPointerException())
  };
  this.Lcom_rubenverg_vortex_Predef$intl$__f_$outer = outer
}
export { $c_Lcom_rubenverg_vortex_Predef$intl$ as $c_Lcom_rubenverg_vortex_Predef$intl$ };
$c_Lcom_rubenverg_vortex_Predef$intl$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Lcom_rubenverg_vortex_Predef$intl$.prototype.constructor = $c_Lcom_rubenverg_vortex_Predef$intl$;
/** @constructor */
function $h_Lcom_rubenverg_vortex_Predef$intl$() {
  /*<skip>*/
}
export { $h_Lcom_rubenverg_vortex_Predef$intl$ as $h_Lcom_rubenverg_vortex_Predef$intl$ };
$h_Lcom_rubenverg_vortex_Predef$intl$.prototype = $c_Lcom_rubenverg_vortex_Predef$intl$.prototype;
$c_Lcom_rubenverg_vortex_Predef$intl$.prototype.dateTime__Lorg_scalajs_dom_intl_DateTimeFormat = (function() {
  if ((!this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTimebitmap$1)) {
    this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTime$lzy1 = new Intl.DateTimeFormat([], ((superClass$) => (() => {
      var this$1 = {};
      this$1.dateStyle = null;
      this$1.timeStyle = null;
      this$1.dateStyle = "medium";
      this$1.timeStyle = "medium";
      return this$1
    }))(Object)());
    this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTimebitmap$1 = true
  };
  return this.Lcom_rubenverg_vortex_Predef$intl$__f_dateTime$lzy1
});
var $d_Lcom_rubenverg_vortex_Predef$intl$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Lcom_rubenverg_vortex_Predef$intl$: 0
}, false, "com.rubenverg.vortex.Predef$intl$", {
  Lcom_rubenverg_vortex_Predef$intl$: 1,
  O: 1
});
export { $d_Lcom_rubenverg_vortex_Predef$intl$ as $d_Lcom_rubenverg_vortex_Predef$intl$ };
$c_Lcom_rubenverg_vortex_Predef$intl$.prototype.$classData = $d_Lcom_rubenverg_vortex_Predef$intl$;
//# sourceMappingURL=com.rubenverg.vortex.Predef$intl$.js.map
