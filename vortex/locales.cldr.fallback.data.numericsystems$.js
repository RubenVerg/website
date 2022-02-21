'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_locales$002ecldr$002eNumberingSystem from "./locales.cldr.NumberingSystem.js";
/** @constructor */
function $c_Llocales_cldr_fallback_data_numericsystems$() {
  this.Llocales_cldr_fallback_data_numericsystems$__f_latn$lzy1 = null;
  this.Llocales_cldr_fallback_data_numericsystems$__f_latnbitmap$1 = false
}
export { $c_Llocales_cldr_fallback_data_numericsystems$ as $c_Llocales_cldr_fallback_data_numericsystems$ };
$c_Llocales_cldr_fallback_data_numericsystems$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_fallback_data_numericsystems$.prototype.constructor = $c_Llocales_cldr_fallback_data_numericsystems$;
/** @constructor */
function $h_Llocales_cldr_fallback_data_numericsystems$() {
  /*<skip>*/
}
export { $h_Llocales_cldr_fallback_data_numericsystems$ as $h_Llocales_cldr_fallback_data_numericsystems$ };
$h_Llocales_cldr_fallback_data_numericsystems$.prototype = $c_Llocales_cldr_fallback_data_numericsystems$.prototype;
$c_Llocales_cldr_fallback_data_numericsystems$.prototype.latn__Llocales_cldr_NumberingSystem = (function() {
  if ((!this.Llocales_cldr_fallback_data_numericsystems$__f_latnbitmap$1)) {
    $j_java$002elang$002eObject.$m_s_package$();
    var elems = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapCharArray__AC__sci_ArraySeq(new $j_java$002elang$002eObject.$ac_C(new Uint16Array([48, 49, 50, 51, 52, 53, 54, 55, 56, 57])));
    var digits = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
    this.Llocales_cldr_fallback_data_numericsystems$__f_latn$lzy1 = new $j_locales$002ecldr$002eNumberingSystem.$c_Llocales_cldr_NumberingSystem("latn", digits);
    this.Llocales_cldr_fallback_data_numericsystems$__f_latnbitmap$1 = true
  };
  return this.Llocales_cldr_fallback_data_numericsystems$__f_latn$lzy1
});
var $d_Llocales_cldr_fallback_data_numericsystems$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_fallback_data_numericsystems$: 0
}, false, "locales.cldr.fallback.data.numericsystems$", {
  Llocales_cldr_fallback_data_numericsystems$: 1,
  O: 1
});
export { $d_Llocales_cldr_fallback_data_numericsystems$ as $d_Llocales_cldr_fallback_data_numericsystems$ };
$c_Llocales_cldr_fallback_data_numericsystems$.prototype.$classData = $d_Llocales_cldr_fallback_data_numericsystems$;
var $n_Llocales_cldr_fallback_data_numericsystems$;
function $m_Llocales_cldr_fallback_data_numericsystems$() {
  if ((!$n_Llocales_cldr_fallback_data_numericsystems$)) {
    $n_Llocales_cldr_fallback_data_numericsystems$ = new $c_Llocales_cldr_fallback_data_numericsystems$()
  };
  return $n_Llocales_cldr_fallback_data_numericsystems$
}
export { $m_Llocales_cldr_fallback_data_numericsystems$ as $m_Llocales_cldr_fallback_data_numericsystems$ };
//# sourceMappingURL=locales.cldr.fallback.data.numericsystems$.js.map
