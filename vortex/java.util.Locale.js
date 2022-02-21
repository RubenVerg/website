'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002eutil$002eIllformedLocaleException from "./java.util.IllformedLocaleException.js";
import * as $j_java$002eutil$002eLocale$0024$0024anon$00241 from "./java.util.Locale$$anon$1.js";
import * as $j_java$002eutil$002eLocale$0024Category from "./java.util.Locale$Category.js";
import * as $j_java$002eutil$002eLocale$0024Category$0024 from "./java.util.Locale$Category$.js";
import * as $j_locales$002ecldr$002eCLDRMetadata from "./locales.cldr.CLDRMetadata.js";
import * as $j_locales$002ecldr$002eCalendarPatterns from "./locales.cldr.CalendarPatterns.js";
import * as $j_locales$002ecldr$002eCalendarPatterns$0024 from "./locales.cldr.CalendarPatterns$.js";
import * as $j_locales$002ecldr$002eCalendarSymbols from "./locales.cldr.CalendarSymbols.js";
import * as $j_locales$002ecldr$002eCurrencyData from "./locales.cldr.CurrencyData.js";
import * as $j_locales$002ecldr$002eLDMLLocale from "./locales.cldr.LDMLLocale.js";
import * as $j_locales$002ecldr$002eLocalesProvider from "./locales.cldr.LocalesProvider.js";
import * as $j_locales$002ecldr$002eNumberCurrency from "./locales.cldr.NumberCurrency.js";
import * as $j_locales$002ecldr$002eNumberPatterns from "./locales.cldr.NumberPatterns.js";
import * as $j_locales$002ecldr$002eSymbols from "./locales.cldr.Symbols.js";
import * as $j_locales$002ecldr$002efallback$002edata$002enumericsystems$0024 from "./locales.cldr.fallback.data.numericsystems$.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
import * as $j_scala$002eTuple3 from "./scala.Tuple3.js";
import * as $j_scala$002ecollection$002eSet$0024 from "./scala.collection.Set$.js";
import * as $j_scala$002ecollection$002econvert$002eAsJavaExtensions$0024SetHasAsJava from "./scala.collection.convert.AsJavaExtensions$SetHasAsJava.js";
import * as $j_scala$002ecollection$002econvert$002eAsScalaExtensions$0024SetHasAsScala from "./scala.collection.convert.AsScalaExtensions$SetHasAsScala.js";
import * as $j_scala$002ecollection$002emutable$002eMap$0024 from "./scala.collection.mutable.Map$.js";
import * as $j_scala$002ejdk$002eCollectionConverters$0024 from "./scala.jdk.CollectionConverters$.js";
import * as $j_scala$002escalajs$002ereflect$002eLoadableModuleClass from "./scala.scalajs.reflect.LoadableModuleClass.js";
import * as $j_scala$002escalajs$002ereflect$002eReflect$0024 from "./scala.scalajs.reflect.Reflect$.js";
import * as $j_scala$002eutil$002ematching$002eRegex from "./scala.util.matching.Regex.js";
function $p_ju_Locale__updateSpecialLanguages__T__T($thiz, l) {
  return ((l === "iw") ? "he" : ((l === "ji") ? "yi" : ((l === "in") ? "id" : l)))
}
export { $p_ju_Locale__updateSpecialLanguages__T__T as $p_ju_Locale__updateSpecialLanguages__T__T };
function $p_ju_Locale__translateSpecialLanguages__T__T($thiz, l) {
  return ((l === "he") ? "iw" : ((l === "yi") ? "ji" : ((l === "id") ? "in" : l)))
}
export { $p_ju_Locale__translateSpecialLanguages__T__T as $p_ju_Locale__translateSpecialLanguages__T__T };
function $p_ju_Locale__isEqual__ju_Locale__Z($thiz, l) {
  if (((($thiz.ju_Locale__f_language === l.getLanguage__T()) && ($thiz.ju_Locale__f_country === l.getCountry__T())) && ($thiz.ju_Locale__f_variant === l.ju_Locale__f_variant))) {
    var this$1 = $thiz.ju_Locale__f_script;
    if (this$1.isEmpty__Z()) {
      var $$x1 = true
    } else {
      var arg1 = this$1.get__O();
      var _$13 = arg1;
      var $$x1 = (_$13 === l.getScript__T())
    }
  } else {
    var $$x1 = false
  };
  if ((($$x1 && $thiz.ju_Locale__f_extensions.forall__F1__Z(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((l$3) => ((x$1) => {
    var x$1$1 = x$1;
    if ((x$1$1 !== null)) {
      var k = $j_java$002elang$002eObject.$uC(x$1$1.T2__f__1);
      var v = x$1$1.T2__f__2;
      return (l$3.getExtension__C__T(k) === v)
    };
    throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$1)
  }))(l)))) && $thiz.ju_Locale__f_unicodeExtensions.forall__F1__Z(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((l$4) => ((x$1$2) => {
    var x$1$3 = x$1$2;
    if ((x$1$3 !== null)) {
      var k$1 = x$1$3.T2__f__1;
      var v$1 = x$1$3.T2__f__2;
      return (l$4.getUnicodeLocaleType__T__T(k$1) === v$1)
    };
    throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$3)
  }))(l))))) {
    var x = $thiz.ju_Locale__f_unicodeAttributes;
    var this$2 = $j_scala$002ejdk$002eCollectionConverters$0024.$m_s_jdk_CollectionConverters$();
    var s = l.getUnicodeLocaleAttributes__ju_Set();
    var x$2 = new $j_scala$002ecollection$002econvert$002eAsScalaExtensions$0024SetHasAsScala.$c_sc_convert_AsScalaExtensions$SetHasAsScala(this$2, s).asScala__scm_Set();
    return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
  } else {
    return false
  }
}
export { $p_ju_Locale__isEqual__ju_Locale__Z as $p_ju_Locale__isEqual__ju_Locale__Z };
/** @constructor */
function $c_ju_Locale(language, country, variant, script, _extensions, unicodeExtensions, unicodeAttributes, supportSpecialCases) {
  this.ju_Locale__f_language = null;
  this.ju_Locale__f_country = null;
  this.ju_Locale__f_variant = null;
  this.ju_Locale__f_script = null;
  this.ju_Locale__f_unicodeExtensions = null;
  this.ju_Locale__f_unicodeAttributes = null;
  this.ju_Locale__f_extensions = null;
  this.ju_Locale__f_language = language;
  this.ju_Locale__f_country = country;
  this.ju_Locale__f_variant = variant;
  this.ju_Locale__f_script = script;
  this.ju_Locale__f_unicodeExtensions = unicodeExtensions;
  this.ju_Locale__f_unicodeAttributes = unicodeAttributes;
  if ((((language === null) || (country === null)) || (variant === null))) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "Null argument to constructor not allowed")
  };
  var x = new $j_scala$002eTuple3.$c_T3(language, country, variant);
  var x$2 = new $j_scala$002eTuple3.$c_T3("ja", "JP", "JP");
  if ((x.equals__O__Z(x$2) && supportSpecialCases)) {
    var $$x3 = $j_java$002elang$002eObject.$m_sc_Map$();
    var $$x2 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$();
    var self = $m_ju_Locale$().ju_Locale$__f_UNICODE_LOCALE_EXTENSION;
    var xs = $$x3.apply__sci_Seq__O($$x2.wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2($j_java$002elang$002eObject.$bC(self), "ca-japanese")])));
    var $$x1 = _extensions.concat__sc_IterableOnce__sc_IterableOps(xs)
  } else {
    var x$3 = new $j_scala$002eTuple3.$c_T3(language, country, variant);
    var x$4 = new $j_scala$002eTuple3.$c_T3("th", "TH", "TH");
    if ((x$3.equals__O__Z(x$4) && supportSpecialCases)) {
      var $$x5 = $j_java$002elang$002eObject.$m_sc_Map$();
      var $$x4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$();
      var self$1 = $m_ju_Locale$().ju_Locale$__f_UNICODE_LOCALE_EXTENSION;
      var xs$1 = $$x5.apply__sci_Seq__O($$x4.wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2($j_java$002elang$002eObject.$bC(self$1), "nu-thai")])));
      var $$x1 = _extensions.concat__sc_IterableOnce__sc_IterableOps(xs$1)
    } else {
      var $$x1 = _extensions
    }
  };
  this.ju_Locale__f_extensions = $$x1
}
export { $c_ju_Locale as $c_ju_Locale };
$c_ju_Locale.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_Locale.prototype.constructor = $c_ju_Locale;
/** @constructor */
function $h_ju_Locale() {
  /*<skip>*/
}
export { $h_ju_Locale as $h_ju_Locale };
$h_ju_Locale.prototype = $c_ju_Locale.prototype;
$c_ju_Locale.prototype.getLanguage__T = (function() {
  var this$1 = this.ju_Locale__f_language;
  return $p_ju_Locale__translateSpecialLanguages__T__T(this, this$1.toLowerCase())
});
$c_ju_Locale.prototype.getScript__T = (function() {
  var this$1 = this.ju_Locale__f_script;
  return (this$1.isEmpty__Z() ? "" : this$1.get__O())
});
$c_ju_Locale.prototype.getCountry__T = (function() {
  var this$1 = this.ju_Locale__f_country;
  return this$1.toUpperCase()
});
$c_ju_Locale.prototype.hasExtensions__Z = (function() {
  var this$1 = this.ju_Locale__f_extensions;
  if ((!this$1.isEmpty__Z())) {
    return true
  } else {
    var this$2 = this.ju_Locale__f_unicodeExtensions;
    return (!this$2.isEmpty__Z())
  }
});
$c_ju_Locale.prototype.getExtension__C__T = (function(key) {
  if ((key === $m_ju_Locale$().ju_Locale$__f_UNICODE_LOCALE_EXTENSION)) {
    var this$1 = this.ju_Locale__f_unicodeExtensions;
    var $$x1 = (!this$1.isEmpty__Z())
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    var this$2 = this.ju_Locale__f_unicodeExtensions.collect__s_PartialFunction__O(new $j_java$002eutil$002eLocale$0024$0024anon$00241.$c_ju_Locale$$anon$1());
    return $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", "-", "")
  } else {
    var this$4 = this.ju_Locale__f_extensions.get__O__s_Option($j_java$002elang$002eObject.$bC(key));
    $j_java$002elang$002eObject.$m_s_$less$colon$less$();
    return (this$4.isEmpty__Z() ? null : this$4.get__O())
  }
});
$c_ju_Locale.prototype.getUnicodeLocaleAttributes__ju_Set = (function() {
  var this$1 = $j_scala$002ejdk$002eCollectionConverters$0024.$m_s_jdk_CollectionConverters$();
  var s = this.ju_Locale__f_unicodeAttributes;
  return new $j_scala$002ecollection$002econvert$002eAsJavaExtensions$0024SetHasAsJava.$c_sc_convert_AsJavaExtensions$SetHasAsJava(this$1, s).asJava__ju_Set()
});
$c_ju_Locale.prototype.getUnicodeLocaleType__T__T = (function(key) {
  var this$2 = this.ju_Locale__f_unicodeExtensions.get__O__s_Option(key);
  $j_java$002elang$002eObject.$m_s_$less$colon$less$();
  return (this$2.isEmpty__Z() ? null : this$2.get__O())
});
$c_ju_Locale.prototype.toString__T = (function() {
  var x = this.ju_Locale__f_variant;
  var hasVariant = (x !== "");
  var x$1 = this.getCountry__T();
  var hasCountry = (x$1 !== "");
  var x$2 = this.getLanguage__T();
  var hasLanguage = (x$2 !== "");
  var x$3 = this.getScript__T();
  var hasScript = (x$3 !== "");
  var countryPart = (hasCountry ? ("_" + this.getCountry__T()) : ((hasVariant || hasScript) ? "_" : ""));
  var variantPart = (hasVariant ? ("_" + this.ju_Locale__f_variant) : (hasScript ? "_" : ""));
  var scriptPart = ((hasScript && this.hasExtensions__Z()) ? (("#" + this.getScript__T()) + "_") : (hasScript ? ("#" + this.getScript__T()) : (this.hasExtensions__Z() ? "_#" : "")));
  var this$9 = this.ju_Locale__f_extensions.map__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((x$1$1) => {
    var x$1$2 = x$1$1;
    if ((x$1$2 !== null)) {
      var x$4 = $j_java$002elang$002eObject.$uC(x$1$2.T2__f__1);
      var v = x$1$2.T2__f__2;
      return (($j_java$002elang$002eObject.$bC(x$4) + "-") + v)
    };
    throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$2)
  })));
  var extensionsPart = $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$9, "", "", "");
  return ((hasLanguage || hasCountry) ? ((((this.getLanguage__T() + countryPart) + variantPart) + scriptPart) + extensionsPart) : "")
});
$c_ju_Locale.prototype.toLanguageTag__T = (function() {
  var x = this.getLanguage__T();
  if (((x !== "") && $m_ju_Locale$().checkLanguage__T__Z(this.getLanguage__T()))) {
    var language = $p_ju_Locale__updateSpecialLanguages__T__T(this, this.getLanguage__T())
  } else {
    var language = "und"
  };
  var country = ($m_ju_Locale$().checkRegion__T__Z(this.getCountry__T()) ? ("-" + this.getCountry__T()) : "");
  var this$3 = this.ju_Locale__f_variant;
  var variantSegments = $j_java$002elang$002eObject.$f_T__split__T__I__AT(this$3, "-|_", 0);
  _return: {
    var i = 0;
    while ((i < variantSegments.u.length)) {
      var arg1 = variantSegments.u[i];
      var l = arg1;
      if ((!$m_ju_Locale$().checkVariantSegment__T__Z(l))) {
        var allSegmentsWellFormed = false;
        break _return
      };
      i = ((1 + i) | 0)
    };
    var allSegmentsWellFormed = true
  };
  _return$1: {
    var i$1 = 0;
    while ((i$1 < variantSegments.u.length)) {
      var arg1$1 = variantSegments.u[i$1];
      var l$1 = arg1$1;
      if ((!$m_ju_Locale$().checkAcceptableVariantSegment__T__Z(l$1))) {
        var allAcceptableSegments = false;
        break _return$1
      };
      i$1 = ((1 + i$1) | 0)
    };
    var allAcceptableSegments = true
  };
  if (allSegmentsWellFormed) {
    var this$8 = $j_java$002elang$002eObject.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef(variantSegments);
    var variant = $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$8, "-", "-", "")
  } else if (allAcceptableSegments) {
    var evidence$1 = $j_java$002elang$002eObject.$m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($j_java$002elang$002eObject.$objectGetClass(variantSegments).getComponentType__jl_Class());
    var res1 = new $j_java$002elang$002eObject.$c_scm_ArrayBuilder$generic(evidence$1.runtimeClass__jl_Class());
    var evidence$1$1 = $j_java$002elang$002eObject.$m_s_reflect_ClassTag$().apply__jl_Class__s_reflect_ClassTag($j_java$002elang$002eObject.$objectGetClass(variantSegments).getComponentType__jl_Class());
    var res2 = new $j_java$002elang$002eObject.$c_scm_ArrayBuilder$generic(evidence$1$1.runtimeClass__jl_Class());
    var i$2 = 0;
    while ((i$2 < variantSegments.u.length)) {
      var x$1 = variantSegments.u[i$2];
      var l$2 = x$1;
      if ($m_ju_Locale$().checkVariantSegment__T__Z(l$2)) {
        var this$17 = res1
      } else {
        var this$17 = res2
      };
      this$17.addOne__O__scm_ArrayBuilder$generic(x$1);
      i$2 = ((1 + i$2) | 0)
    };
    var _1 = res1.result__O();
    var _2 = res2.result__O();
    var wellFormed = _1;
    var acceptable = _2;
    var \u03b41$___1 = wellFormed;
    var \u03b41$___2 = acceptable;
    var wellFormed$2 = \u03b41$___1;
    var acceptable$2 = \u03b41$___2;
    if ((wellFormed$2.u.length !== 0)) {
      var this$23 = $j_java$002elang$002eObject.$m_s_Predef$().wrapRefArray__AO__scm_ArraySeq$ofRef($j_java$002elang$002eObject.$m_sc_ArrayOps$().slice$extension__O__I__I__O(wellFormed$2, 0, 1));
      var pre = $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$23, "-", "-", "-")
    } else {
      var pre = "-"
    };
    var $$x1 = $j_java$002elang$002eObject.$m_s_Predef$();
    var xs = $j_java$002elang$002eObject.$m_sc_ArrayOps$().drop$extension__O__I__O(wellFormed$2, 1);
    var this$29 = $j_java$002elang$002eObject.$m_s_Array$();
    var newLength = ((acceptable$2.u.length + $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().array_length__O__I(xs)) | 0);
    if ($j_java$002elang$002eObject.$d_T.getClassOf().isAssignableFrom__jl_Class__Z($j_java$002elang$002eObject.$objectGetClass(acceptable$2).getComponentType__jl_Class())) {
      var dest$1 = ($j_java$002elang$002eObject.$d_T.getClassOf().isPrimitive__Z() ? this$29.copyOf__O__I__O(acceptable$2, newLength) : $j_java$002elang$002eObject.$m_ju_Arrays$().copyOf__AO__I__jl_Class__AO(acceptable$2, newLength, $j_java$002elang$002eObject.$d_T.getArrayOf().getClassOf()))
    } else {
      var dest = new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(newLength);
      $j_java$002elang$002eObject.$m_s_Array$().copy__O__I__O__I__I__V(acceptable$2, 0, dest, 0, acceptable$2.u.length);
      var dest$1 = dest
    };
    $j_java$002elang$002eObject.$m_s_Array$().copy__O__I__O__I__I__V(xs, 0, dest$1, acceptable$2.u.length, $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().array_length__O__I(xs));
    var this$31 = $$x1.wrapRefArray__AO__scm_ArraySeq$ofRef(dest$1);
    var variant = ((pre + "x-lvariant") + $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$31, "-", "-", ""))
  } else {
    var variant = ""
  };
  var this$32 = this.ju_Locale__f_extensions;
  if ((!this$32.isEmpty__Z())) {
    var this$33 = this.ju_Locale__f_extensions.map__F1__O(new $j_java$002elang$002eObject.$c_sjsr_AnonFunction1(((x$1$1) => {
      var x$1$2 = x$1$1;
      if ((x$1$2 !== null)) {
        var x$2 = $j_java$002elang$002eObject.$uC(x$1$2.T2__f__1);
        var v = x$1$2.T2__f__2;
        return (($j_java$002elang$002eObject.$bC(x$2) + "-") + v)
      };
      throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1$2)
    })));
    var ext = $j_java$002elang$002eObject.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$33, "-", "-", "")
  } else {
    var ext = ""
  };
  var this$34 = this.ju_Locale__f_script;
  if (this$34.isEmpty__Z()) {
    var this$35 = $j_java$002elang$002eObject.$m_s_None$()
  } else {
    var arg1$2 = this$34.get__O();
    var this$35 = new $j_java$002elang$002eObject.$c_s_Some(("-" + this.getScript__T()))
  };
  var script = (this$35.isEmpty__Z() ? "" : this$35.get__O());
  return ((((this.getLanguage__T() === "no") && (this.getCountry__T() === "NO")) && (this.ju_Locale__f_variant === "NY")) ? "nn-NO" : ((((("" + language) + script) + country) + ext) + variant))
});
$c_ju_Locale.prototype.equals__O__Z = (function(x) {
  if ((x instanceof $c_ju_Locale)) {
    var l = x;
    return $p_ju_Locale__isEqual__ju_Locale__Z(this, l)
  } else {
    return false
  }
});
$c_ju_Locale.prototype.hashCode__I = (function() {
  return $j_java$002elang$002eObject.$f_T__hashCode__I(this.toLanguageTag__T())
});
function $isArrayOf_ju_Locale(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_Locale)))
}
export { $isArrayOf_ju_Locale as $isArrayOf_ju_Locale };
var $d_ju_Locale = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_Locale: 0
}, false, "java.util.Locale", {
  ju_Locale: 1,
  O: 1
});
export { $d_ju_Locale as $d_ju_Locale };
$c_ju_Locale.prototype.$classData = $d_ju_Locale;
/** @constructor */
function $c_ju_Locale$() {
  this.ju_Locale$__f_ENGLISH$lzy1 = null;
  this.ju_Locale$__f_ENGLISHbitmap$1 = false;
  this.ju_Locale$__f_FRENCH$lzy1 = null;
  this.ju_Locale$__f_FRENCHbitmap$1 = false;
  this.ju_Locale$__f_GERMAN$lzy1 = null;
  this.ju_Locale$__f_GERMANbitmap$1 = false;
  this.ju_Locale$__f_ITALIAN$lzy1 = null;
  this.ju_Locale$__f_ITALIANbitmap$1 = false;
  this.ju_Locale$__f_JAPANESE$lzy1 = null;
  this.ju_Locale$__f_JAPANESEbitmap$1 = false;
  this.ju_Locale$__f_KOREAN$lzy1 = null;
  this.ju_Locale$__f_KOREANbitmap$1 = false;
  this.ju_Locale$__f_CHINESE$lzy1 = null;
  this.ju_Locale$__f_CHINESEbitmap$1 = false;
  this.ju_Locale$__f_SIMPLIFIED_CHINESE$lzy1 = null;
  this.ju_Locale$__f_SIMPLIFIED_CHINESEbitmap$1 = false;
  this.ju_Locale$__f_TRADITIONAL_CHINESE$lzy1 = null;
  this.ju_Locale$__f_TRADITIONAL_CHINESEbitmap$1 = false;
  this.ju_Locale$__f_FRANCE$lzy1 = null;
  this.ju_Locale$__f_FRANCEbitmap$1 = false;
  this.ju_Locale$__f_GERMANY$lzy1 = null;
  this.ju_Locale$__f_GERMANYbitmap$1 = false;
  this.ju_Locale$__f_ITALY$lzy1 = null;
  this.ju_Locale$__f_ITALYbitmap$1 = false;
  this.ju_Locale$__f_JAPAN$lzy1 = null;
  this.ju_Locale$__f_JAPANbitmap$1 = false;
  this.ju_Locale$__f_KOREA$lzy1 = null;
  this.ju_Locale$__f_KOREAbitmap$1 = false;
  this.ju_Locale$__f_CHINA$lzy1 = null;
  this.ju_Locale$__f_CHINAbitmap$1 = false;
  this.ju_Locale$__f_PRC$lzy1 = null;
  this.ju_Locale$__f_PRCbitmap$1 = false;
  this.ju_Locale$__f_TAIWAN$lzy1 = null;
  this.ju_Locale$__f_TAIWANbitmap$1 = false;
  this.ju_Locale$__f_UK$lzy1 = null;
  this.ju_Locale$__f_UKbitmap$1 = false;
  this.ju_Locale$__f_US$lzy1 = null;
  this.ju_Locale$__f_USbitmap$1 = false;
  this.ju_Locale$__f_CANADA$lzy1 = null;
  this.ju_Locale$__f_CANADAbitmap$1 = false;
  this.ju_Locale$__f_CANADA_FRENCH$lzy1 = null;
  this.ju_Locale$__f_CANADA_FRENCHbitmap$1 = false;
  this.ju_Locale$__f_ROOT$lzy1 = null;
  this.ju_Locale$__f_ROOTbitmap$1 = false;
  this.ju_Locale$__f_PRIVATE_USE_EXTENSION = 0;
  this.ju_Locale$__f_UNICODE_LOCALE_EXTENSION = 0;
  this.ju_Locale$__f_defaultLocale = null;
  this.ju_Locale$__f_defaultPerCategory = null;
  $n_ju_Locale$ = this;
  this.ju_Locale$__f_PRIVATE_USE_EXTENSION = 120;
  this.ju_Locale$__f_UNICODE_LOCALE_EXTENSION = 117;
  this.ju_Locale$__f_defaultLocale = $m_Llocales_DefaultLocale$().platformLocale__ju_Locale();
  var $$x10 = $j_java$002elang$002eObject.$m_s_Predef$();
  var xs = $j_java$002eutil$002eLocale$0024Category$0024.$m_ju_Locale$Category$().values__Aju_Locale$Category();
  var f = ((this$2) => ((_$5) => {
    var _$5$1 = _$5;
    var value = this$2.ju_Locale$__f_defaultLocale;
    var y = new $j_java$002elang$002eObject.$c_s_Some(value);
    return new $j_java$002elang$002eObject.$c_T2(_$5$1, y)
  }))(this);
  var len = xs.u.length;
  var ys = new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = xs.u[i];
        ys.u[$$x1] = f(arg1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_I)) {
      var x3 = xs;
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = x3.u[i];
        ys.u[$$x2] = f(arg1$1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_D)) {
      var x4 = xs;
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = x4.u[i];
        ys.u[$$x3] = f(arg1$2);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_J)) {
      var x5 = xs;
      while ((i < len)) {
        var $$x4 = i;
        var t = x5.u[i];
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.u[$$x4] = f(new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_F)) {
      var x6 = xs;
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = x6.u[i];
        ys.u[$$x5] = f(arg1$3);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_C)) {
      var x7 = xs;
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = x7.u[i];
        ys.u[$$x6] = f($j_java$002elang$002eObject.$bC(arg1$4));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_B)) {
      var x8 = xs;
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = x8.u[i];
        ys.u[$$x7] = f(arg1$5);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_S)) {
      var x9 = xs;
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = x9.u[i];
        ys.u[$$x8] = f(arg1$6);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_Z)) {
      var x10 = xs;
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = x10.u[i];
        ys.u[$$x9] = f(arg1$7);
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_java$002elang$002eObject.$c_s_MatchError(xs)
    }
  };
  var this$9 = $$x10.wrapRefArray__AO__scm_ArraySeq$ofRef(ys);
  $j_java$002elang$002eObject.$m_s_$less$colon$less$();
  this.ju_Locale$__f_defaultPerCategory = $j_java$002elang$002eObject.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$9)
}
export { $c_ju_Locale$ as $c_ju_Locale$ };
$c_ju_Locale$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_Locale$.prototype.constructor = $c_ju_Locale$;
/** @constructor */
function $h_ju_Locale$() {
  /*<skip>*/
}
export { $h_ju_Locale$ as $h_ju_Locale$ };
$h_ju_Locale$.prototype = $c_ju_Locale$.prototype;
$c_ju_Locale$.prototype.ROOT__ju_Locale = (function() {
  if ((!this.ju_Locale$__f_ROOTbitmap$1)) {
    this.ju_Locale$__f_ROOT$lzy1 = $m_Llocales_LocalesDb$().Llocales_LocalesDb$__f_root.toLocale__ju_Locale();
    this.ju_Locale$__f_ROOTbitmap$1 = true
  };
  return this.ju_Locale$__f_ROOT$lzy1
});
$c_ju_Locale$.prototype.checkRegex__s_util_matching_Regex__T__Z = (function(regex, s) {
  if ((s !== null)) {
    var x32 = regex.unapplySeq__jl_CharSequence__s_Option(s);
    if ((!x32.isEmpty__Z())) {
      var x33 = x32.get__O();
      if ((x33.lengthCompare__I__I(0) === 0)) {
        return true
      }
    }
  };
  return false
});
$c_ju_Locale$.prototype.checkLanguage__T__Z = (function(l) {
  var groupNames = $j_java$002elang$002eObject.$m_sci_Nil$();
  return this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[a-zA-Z]{2,8}", groupNames), l)
});
$c_ju_Locale$.prototype.checkScript__T__Z = (function(l) {
  var groupNames = $j_java$002elang$002eObject.$m_sci_Nil$();
  return this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[a-zA-Z]{4}", groupNames), l)
});
$c_ju_Locale$.prototype.checkRegion__T__Z = (function(l) {
  var groupNames = $j_java$002elang$002eObject.$m_sci_Nil$();
  if (this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[a-zA-Z]{2}", groupNames), l)) {
    return true
  } else {
    var groupNames$1 = $j_java$002elang$002eObject.$m_sci_Nil$();
    return this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[0-9]{3}", groupNames$1), l)
  }
});
$c_ju_Locale$.prototype.checkAcceptableVariantSegment__T__Z = (function(l) {
  var groupNames = $j_java$002elang$002eObject.$m_sci_Nil$();
  return this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[0-9a-zA-Z]{1,8}", groupNames), l)
});
$c_ju_Locale$.prototype.checkVariantSegment__T__Z = (function(l) {
  var groupNames = $j_java$002elang$002eObject.$m_sci_Nil$();
  if (this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[0-9][0-9a-zA-Z]{3}", groupNames), l)) {
    return true
  } else {
    var groupNames$1 = $j_java$002elang$002eObject.$m_sci_Nil$();
    return this.checkRegex__s_util_matching_Regex__T__Z($j_scala$002eutil$002ematching$002eRegex.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_scala$002eutil$002ematching$002eRegex.$c_s_util_matching_Regex(), "[0-9a-zA-Z]{5,8}", groupNames$1), l)
  }
});
$c_ju_Locale$.prototype.checkVariant__T__Z = (function(l) {
  var parts = $j_java$002elang$002eObject.$f_T__split__T__I__AT(l, "-|_", 0);
  var i = 0;
  while ((i < parts.u.length)) {
    var arg1 = parts.u[i];
    var l$1 = arg1;
    if ((!this.checkVariantSegment__T__Z(l$1))) {
      return false
    };
    i = ((1 + i) | 0)
  };
  return true
});
var $d_ju_Locale$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_Locale$: 0
}, false, "java.util.Locale$", {
  ju_Locale$: 1,
  O: 1
});
export { $d_ju_Locale$ as $d_ju_Locale$ };
$c_ju_Locale$.prototype.$classData = $d_ju_Locale$;
var $n_ju_Locale$;
function $m_ju_Locale$() {
  if ((!$n_ju_Locale$)) {
    $n_ju_Locale$ = new $c_ju_Locale$()
  };
  return $n_ju_Locale$
}
export { $m_ju_Locale$ as $m_ju_Locale$ };
/** @constructor */
function $c_ju_Locale$Builder() {
  this.ju_Locale$Builder__f_builder = null;
  var language = $j_java$002elang$002eObject.$m_s_None$();
  var region = $j_java$002elang$002eObject.$m_s_None$();
  var variant = $j_java$002elang$002eObject.$m_s_None$();
  var script = $j_java$002elang$002eObject.$m_s_None$();
  var extensions = $j_java$002elang$002eObject.$m_sc_Map$().empty__O();
  var unicodeExtensions = $j_java$002elang$002eObject.$m_sc_Map$().empty__O();
  var unicodeAttributes = $j_scala$002ecollection$002eSet$0024.$m_sc_Set$().empty__O();
  this.ju_Locale$Builder__f_builder = new $c_ju_Locale$LocaleBuilder(true, language, region, variant, script, extensions, unicodeExtensions, unicodeAttributes)
}
export { $c_ju_Locale$Builder as $c_ju_Locale$Builder };
$c_ju_Locale$Builder.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_Locale$Builder.prototype.constructor = $c_ju_Locale$Builder;
/** @constructor */
function $h_ju_Locale$Builder() {
  /*<skip>*/
}
export { $h_ju_Locale$Builder as $h_ju_Locale$Builder };
$h_ju_Locale$Builder.prototype = $c_ju_Locale$Builder.prototype;
$c_ju_Locale$Builder.prototype.setLanguage__T__ju_Locale$Builder = (function(language) {
  var this$1 = this.ju_Locale$Builder__f_builder.language__T__s_Option(language);
  if (this$1.isEmpty__Z()) {
    throw $j_java$002eutil$002eIllformedLocaleException.$ct_ju_IllformedLocaleException__T__(new $j_java$002eutil$002eIllformedLocaleException.$c_ju_IllformedLocaleException(), ("Invalid language " + language))
  };
  var arg1 = this$1.get__O();
  var x = arg1;
  this.ju_Locale$Builder__f_builder = x;
  return this
});
$c_ju_Locale$Builder.prototype.setScript__T__ju_Locale$Builder = (function(script) {
  var this$1 = this.ju_Locale$Builder__f_builder.script__T__s_Option(script);
  if (this$1.isEmpty__Z()) {
    throw $j_java$002eutil$002eIllformedLocaleException.$ct_ju_IllformedLocaleException__T__(new $j_java$002eutil$002eIllformedLocaleException.$c_ju_IllformedLocaleException(), ("Invalid script " + script))
  };
  var arg1 = this$1.get__O();
  var x = arg1;
  this.ju_Locale$Builder__f_builder = x;
  return this
});
$c_ju_Locale$Builder.prototype.setRegion__T__ju_Locale$Builder = (function(region) {
  var this$1 = this.ju_Locale$Builder__f_builder.region__T__s_Option(region);
  if (this$1.isEmpty__Z()) {
    throw $j_java$002eutil$002eIllformedLocaleException.$ct_ju_IllformedLocaleException__T__(new $j_java$002eutil$002eIllformedLocaleException.$c_ju_IllformedLocaleException(), ("Invalid region " + region))
  };
  var arg1 = this$1.get__O();
  var x = arg1;
  this.ju_Locale$Builder__f_builder = x;
  return this
});
$c_ju_Locale$Builder.prototype.setVariant__T__ju_Locale$Builder = (function(variant) {
  var this$1 = this.ju_Locale$Builder__f_builder.variant__T__s_Option(variant);
  if (this$1.isEmpty__Z()) {
    throw $j_java$002eutil$002eIllformedLocaleException.$ct_ju_IllformedLocaleException__T__(new $j_java$002eutil$002eIllformedLocaleException.$c_ju_IllformedLocaleException(), ("Invalid variant " + variant))
  };
  var arg1 = this$1.get__O();
  var x = arg1;
  this.ju_Locale$Builder__f_builder = x;
  return this
});
$c_ju_Locale$Builder.prototype.build__ju_Locale = (function() {
  return this.ju_Locale$Builder__f_builder.build__ju_Locale()
});
var $d_ju_Locale$Builder = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_Locale$Builder: 0
}, false, "java.util.Locale$Builder", {
  ju_Locale$Builder: 1,
  O: 1
});
export { $d_ju_Locale$Builder as $d_ju_Locale$Builder };
$c_ju_Locale$Builder.prototype.$classData = $d_ju_Locale$Builder;
/** @constructor */
function $c_Llocales_DefaultLocale$() {
  this.Llocales_DefaultLocale$__f_window$lzy1 = null;
  this.Llocales_DefaultLocale$__f_windowbitmap$1 = false
}
export { $c_Llocales_DefaultLocale$ as $c_Llocales_DefaultLocale$ };
$c_Llocales_DefaultLocale$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_DefaultLocale$.prototype.constructor = $c_Llocales_DefaultLocale$;
/** @constructor */
function $h_Llocales_DefaultLocale$() {
  /*<skip>*/
}
export { $h_Llocales_DefaultLocale$ as $h_Llocales_DefaultLocale$ };
$h_Llocales_DefaultLocale$.prototype = $c_Llocales_DefaultLocale$.prototype;
$c_Llocales_DefaultLocale$.prototype.window__Llocales_Window = (function() {
  if ((!this.Llocales_DefaultLocale$__f_windowbitmap$1)) {
    this.Llocales_DefaultLocale$__f_window$lzy1 = window;
    this.Llocales_DefaultLocale$__f_windowbitmap$1 = true
  };
  return this.Llocales_DefaultLocale$__f_window$lzy1
});
$c_Llocales_DefaultLocale$.prototype.platformLocale__ju_Locale = (function() {
  try {
    var value = this.window__Llocales_Window().navigator.language;
    var lang = new $j_java$002elang$002eObject.$c_s_Some(value)
  } catch (e) {
    $j_java$002elang$002eObject.$m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    var lang = $j_java$002elang$002eObject.$m_s_None$()
  };
  if (lang.isEmpty__Z()) {
    var $$x1 = true
  } else {
    var arg1 = lang.get__O();
    var key = arg1;
    var $$x1 = $m_Llocales_LocalesDb$().Llocales_LocalesDb$__f_ldmls.contains__O__Z(key)
  };
  if ($$x1) {
    var this$2 = lang
  } else {
    var this$2 = $j_java$002elang$002eObject.$m_s_None$()
  };
  var l = (this$2.isEmpty__Z() ? "en" : this$2.get__O());
  var this$3 = $m_Llocales_LocalesDb$().localeForLanguageTag__T__s_Option(l);
  return (this$3.isEmpty__Z() ? $m_Llocales_LocalesDb$().Llocales_LocalesDb$__f_root.toLocale__ju_Locale() : this$3.get__O())
});
var $d_Llocales_DefaultLocale$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_DefaultLocale$: 0
}, false, "locales.DefaultLocale$", {
  Llocales_DefaultLocale$: 1,
  O: 1
});
export { $d_Llocales_DefaultLocale$ as $d_Llocales_DefaultLocale$ };
$c_Llocales_DefaultLocale$.prototype.$classData = $d_Llocales_DefaultLocale$;
var $n_Llocales_DefaultLocale$;
function $m_Llocales_DefaultLocale$() {
  if ((!$n_Llocales_DefaultLocale$)) {
    $n_Llocales_DefaultLocale$ = new $c_Llocales_DefaultLocale$()
  };
  return $n_Llocales_DefaultLocale$
}
export { $m_Llocales_DefaultLocale$ as $m_Llocales_DefaultLocale$ };
/** @constructor */
function $c_Llocales_LocalesDb$() {
  this.Llocales_LocalesDb$__f_provider = null;
  this.Llocales_LocalesDb$__f_root = null;
  this.Llocales_LocalesDb$__f_latn = null;
  this.Llocales_LocalesDb$__f_ldmls = null;
  this.Llocales_LocalesDb$__f_metadata = null;
  this.Llocales_LocalesDb$__f_currencydata = null;
  $n_Llocales_LocalesDb$ = this;
  var this$2 = $j_scala$002escalajs$002ereflect$002eReflect$0024.$m_sjs_reflect_Reflect$().lookupLoadableModuleClass__T__s_Option("locales.cldr.data.LocalesProvider$");
  if (this$2.isEmpty__Z()) {
    var this$3 = $j_java$002elang$002eObject.$m_s_None$()
  } else {
    var arg1 = this$2.get__O();
    var m = arg1;
    var this$3 = new $j_java$002elang$002eObject.$c_s_Some(m.loadModule__O())
  };
  this.Llocales_LocalesDb$__f_provider = (this$3.isEmpty__Z() ? $m_Llocales_cldr_fallback_LocalesProvider$() : this$3.get__O());
  this.Llocales_LocalesDb$__f_root = $m_Llocales_cldr_fallback_data_\uff3froot$();
  this.Llocales_LocalesDb$__f_latn = $j_locales$002ecldr$002efallback$002edata$002enumericsystems$0024.$m_Llocales_cldr_fallback_data_numericsystems$().latn__Llocales_cldr_NumberingSystem();
  this.Llocales_LocalesDb$__f_ldmls = this.Llocales_LocalesDb$__f_provider.ldmls__sci_Map();
  this.Llocales_LocalesDb$__f_metadata = this.Llocales_LocalesDb$__f_provider.metadata__Llocales_cldr_CLDRMetadata();
  this.Llocales_LocalesDb$__f_currencydata = this.Llocales_LocalesDb$__f_provider.currencyData__Llocales_cldr_CurrencyData()
}
export { $c_Llocales_LocalesDb$ as $c_Llocales_LocalesDb$ };
$c_Llocales_LocalesDb$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_LocalesDb$.prototype.constructor = $c_Llocales_LocalesDb$;
/** @constructor */
function $h_Llocales_LocalesDb$() {
  /*<skip>*/
}
export { $h_Llocales_LocalesDb$ as $h_Llocales_LocalesDb$ };
$h_Llocales_LocalesDb$.prototype = $c_Llocales_LocalesDb$.prototype;
$c_Llocales_LocalesDb$.prototype.localeForLanguageTag__T__s_Option = (function(languageTag) {
  if ((languageTag === "und")) {
    var value = $m_ju_Locale$().ROOT__ju_Locale();
    return new $j_java$002elang$002eObject.$c_s_Some(value)
  } else {
    var this$2 = this.Llocales_LocalesDb$__f_provider.ldmls__sci_Map().get__O__s_Option(languageTag);
    if (this$2.isEmpty__Z()) {
      return $j_java$002elang$002eObject.$m_s_None$()
    } else {
      var arg1 = this$2.get__O();
      var _$1 = arg1;
      return new $j_java$002elang$002eObject.$c_s_Some(_$1.toLocale__ju_Locale())
    }
  }
});
var $d_Llocales_LocalesDb$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_LocalesDb$: 0
}, false, "locales.LocalesDb$", {
  Llocales_LocalesDb$: 1,
  O: 1
});
export { $d_Llocales_LocalesDb$ as $d_Llocales_LocalesDb$ };
$c_Llocales_LocalesDb$.prototype.$classData = $d_Llocales_LocalesDb$;
var $n_Llocales_LocalesDb$;
function $m_Llocales_LocalesDb$() {
  if ((!$n_Llocales_LocalesDb$)) {
    $n_Llocales_LocalesDb$ = new $c_Llocales_LocalesDb$()
  };
  return $n_Llocales_LocalesDb$
}
export { $m_Llocales_LocalesDb$ as $m_Llocales_LocalesDb$ };
/** @constructor */
function $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$() {
  this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_all$lzy1 = null;
  this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_allbitmap$1 = false
}
export { $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$ as $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$ };
$c_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype.constructor = $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$;
/** @constructor */
function $h_Llocales_cldr_fallback_data_\uff3fall\uff3f$() {
  /*<skip>*/
}
export { $h_Llocales_cldr_fallback_data_\uff3fall\uff3f$ as $h_Llocales_cldr_fallback_data_\uff3fall\uff3f$ };
$h_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype = $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype;
$c_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype.all__ALlocales_cldr_LDML = (function() {
  if ((!this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_allbitmap$1)) {
    this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_all$lzy1 = new ($d_Llocales_cldr_LDML.getArrayOf().constr)([$m_Llocales_cldr_fallback_data_\uff3fen$(), $m_Llocales_cldr_fallback_data_\uff3froot$()]);
    this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_allbitmap$1 = true
  };
  return this.Llocales_cldr_fallback_data_\uff3fall\uff3f$__f_all$lzy1
});
var $d_Llocales_cldr_fallback_data_\uff3fall\uff3f$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_fallback_data_\uff3fall\uff3f$: 0
}, false, "locales.cldr.fallback.data._all_$", {
  Llocales_cldr_fallback_data_\uff3fall\uff3f$: 1,
  O: 1
});
export { $d_Llocales_cldr_fallback_data_\uff3fall\uff3f$ as $d_Llocales_cldr_fallback_data_\uff3fall\uff3f$ };
$c_Llocales_cldr_fallback_data_\uff3fall\uff3f$.prototype.$classData = $d_Llocales_cldr_fallback_data_\uff3fall\uff3f$;
var $n_Llocales_cldr_fallback_data_\uff3fall\uff3f$;
function $m_Llocales_cldr_fallback_data_\uff3fall\uff3f$() {
  if ((!$n_Llocales_cldr_fallback_data_\uff3fall\uff3f$)) {
    $n_Llocales_cldr_fallback_data_\uff3fall\uff3f$ = new $c_Llocales_cldr_fallback_data_\uff3fall\uff3f$()
  };
  return $n_Llocales_cldr_fallback_data_\uff3fall\uff3f$
}
export { $m_Llocales_cldr_fallback_data_\uff3fall\uff3f$ as $m_Llocales_cldr_fallback_data_\uff3fall\uff3f$ };
/** @constructor */
function $c_Llocales_cldr_fallback_LocalesProvider$() {
  /*<skip>*/
}
export { $c_Llocales_cldr_fallback_LocalesProvider$ as $c_Llocales_cldr_fallback_LocalesProvider$ };
$c_Llocales_cldr_fallback_LocalesProvider$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_fallback_LocalesProvider$.prototype.constructor = $c_Llocales_cldr_fallback_LocalesProvider$;
/** @constructor */
function $h_Llocales_cldr_fallback_LocalesProvider$() {
  /*<skip>*/
}
export { $h_Llocales_cldr_fallback_LocalesProvider$ as $h_Llocales_cldr_fallback_LocalesProvider$ };
$h_Llocales_cldr_fallback_LocalesProvider$.prototype = $c_Llocales_cldr_fallback_LocalesProvider$.prototype;
$c_Llocales_cldr_fallback_LocalesProvider$.prototype.ldmls__sci_Map = (function() {
  var $$x10 = $j_java$002elang$002eObject.$m_s_Predef$();
  var xs = $m_Llocales_cldr_fallback_data_\uff3fall\uff3f$().all__ALlocales_cldr_LDML();
  var f = ((this$2) => ((x$1) => {
    var x$1$1 = x$1;
    var _1 = x$1$1.toLocale__ju_Locale().toLanguageTag__T();
    return new $j_java$002elang$002eObject.$c_T2(_1, x$1$1)
  }))(this);
  var len = xs.u.length;
  var ys = new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $$x1 = i;
        var arg1 = xs.u[i];
        ys.u[$$x1] = f(arg1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_I)) {
      var x3 = xs;
      while ((i < len)) {
        var $$x2 = i;
        var arg1$1 = x3.u[i];
        ys.u[$$x2] = f(arg1$1);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_D)) {
      var x4 = xs;
      while ((i < len)) {
        var $$x3 = i;
        var arg1$2 = x4.u[i];
        ys.u[$$x3] = f(arg1$2);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_J)) {
      var x5 = xs;
      while ((i < len)) {
        var $$x4 = i;
        var t = x5.u[i];
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.u[$$x4] = f(new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_F)) {
      var x6 = xs;
      while ((i < len)) {
        var $$x5 = i;
        var arg1$3 = x6.u[i];
        ys.u[$$x5] = f(arg1$3);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_C)) {
      var x7 = xs;
      while ((i < len)) {
        var $$x6 = i;
        var arg1$4 = x7.u[i];
        ys.u[$$x6] = f($j_java$002elang$002eObject.$bC(arg1$4));
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_B)) {
      var x8 = xs;
      while ((i < len)) {
        var $$x7 = i;
        var arg1$5 = x8.u[i];
        ys.u[$$x7] = f(arg1$5);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_S)) {
      var x9 = xs;
      while ((i < len)) {
        var $$x8 = i;
        var arg1$6 = x9.u[i];
        ys.u[$$x8] = f(arg1$6);
        i = ((1 + i) | 0)
      }
    } else if ((xs instanceof $j_java$002elang$002eObject.$ac_Z)) {
      var x10 = xs;
      while ((i < len)) {
        var $$x9 = i;
        var arg1$7 = x10.u[i];
        ys.u[$$x9] = f(arg1$7);
        i = ((1 + i) | 0)
      }
    } else {
      throw new $j_java$002elang$002eObject.$c_s_MatchError(xs)
    }
  };
  var this$7 = $$x10.wrapRefArray__AO__scm_ArraySeq$ofRef(ys);
  $j_java$002elang$002eObject.$m_s_$less$colon$less$();
  return $j_java$002elang$002eObject.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$7)
});
$c_Llocales_cldr_fallback_LocalesProvider$.prototype.currencyData__Llocales_cldr_CurrencyData = (function() {
  return new $j_locales$002ecldr$002eCurrencyData.$c_Llocales_cldr_CurrencyData($j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.empty__sc_SeqOps(), $j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.empty__sc_SeqOps(), $j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.empty__sc_SeqOps(), $j_java$002elang$002eObject.$m_s_package$().s_package$__f_Seq.empty__sc_SeqOps())
});
$c_Llocales_cldr_fallback_LocalesProvider$.prototype.metadata__Llocales_cldr_CLDRMetadata = (function() {
  return new $j_locales$002ecldr$002eCLDRMetadata.$c_Llocales_cldr_CLDRMetadata(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(0), $j_java$002elang$002eObject.$m_sci_Map$EmptyMap$(), new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(0), $j_java$002elang$002eObject.$m_sci_Map$EmptyMap$(), new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(0))
});
var $d_Llocales_cldr_fallback_LocalesProvider$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_fallback_LocalesProvider$: 0
}, false, "locales.cldr.fallback.LocalesProvider$", {
  Llocales_cldr_fallback_LocalesProvider$: 1,
  O: 1,
  Llocales_cldr_LocalesProvider: 1
});
export { $d_Llocales_cldr_fallback_LocalesProvider$ as $d_Llocales_cldr_fallback_LocalesProvider$ };
$c_Llocales_cldr_fallback_LocalesProvider$.prototype.$classData = $d_Llocales_cldr_fallback_LocalesProvider$;
var $n_Llocales_cldr_fallback_LocalesProvider$;
function $m_Llocales_cldr_fallback_LocalesProvider$() {
  if ((!$n_Llocales_cldr_fallback_LocalesProvider$)) {
    $n_Llocales_cldr_fallback_LocalesProvider$ = new $c_Llocales_cldr_fallback_LocalesProvider$()
  };
  return $n_Llocales_cldr_fallback_LocalesProvider$
}
export { $m_Llocales_cldr_fallback_LocalesProvider$ as $m_Llocales_cldr_fallback_LocalesProvider$ };
/** @constructor */
function $c_ju_Locale$LocaleBuilder(strict, language, region, variant, script, extensions, unicodeExtensions, unicodeAttributes) {
  this.ju_Locale$LocaleBuilder__f_strict = false;
  this.ju_Locale$LocaleBuilder__f_language = null;
  this.ju_Locale$LocaleBuilder__f_region = null;
  this.ju_Locale$LocaleBuilder__f_variant = null;
  this.ju_Locale$LocaleBuilder__f_script = null;
  this.ju_Locale$LocaleBuilder__f_extensions = null;
  this.ju_Locale$LocaleBuilder__f_unicodeExtensions = null;
  this.ju_Locale$LocaleBuilder__f_unicodeAttributes = null;
  this.ju_Locale$LocaleBuilder__f_strict = strict;
  this.ju_Locale$LocaleBuilder__f_language = language;
  this.ju_Locale$LocaleBuilder__f_region = region;
  this.ju_Locale$LocaleBuilder__f_variant = variant;
  this.ju_Locale$LocaleBuilder__f_script = script;
  this.ju_Locale$LocaleBuilder__f_extensions = extensions;
  this.ju_Locale$LocaleBuilder__f_unicodeExtensions = unicodeExtensions;
  this.ju_Locale$LocaleBuilder__f_unicodeAttributes = unicodeAttributes
}
export { $c_ju_Locale$LocaleBuilder as $c_ju_Locale$LocaleBuilder };
$c_ju_Locale$LocaleBuilder.prototype = new $j_java$002elang$002eObject.$h_O();
$c_ju_Locale$LocaleBuilder.prototype.constructor = $c_ju_Locale$LocaleBuilder;
/** @constructor */
function $h_ju_Locale$LocaleBuilder() {
  /*<skip>*/
}
export { $h_ju_Locale$LocaleBuilder as $h_ju_Locale$LocaleBuilder };
$h_ju_Locale$LocaleBuilder.prototype = $c_ju_Locale$LocaleBuilder.prototype;
$c_ju_Locale$LocaleBuilder.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_ju_Locale$LocaleBuilder.prototype.hashCode__I = (function() {
  var acc = (-889275714);
  var hash = acc;
  var data = $j_java$002elang$002eObject.$f_T__hashCode__I("LocaleBuilder");
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash, data);
  var hash$1 = acc;
  var data$1 = (this.ju_Locale$LocaleBuilder__f_strict ? 1231 : 1237);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$1, data$1);
  var hash$2 = acc;
  var x = this.ju_Locale$LocaleBuilder__f_language;
  var data$2 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$2, data$2);
  var hash$3 = acc;
  var x$1 = this.ju_Locale$LocaleBuilder__f_region;
  var data$3 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$1);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$3, data$3);
  var hash$4 = acc;
  var x$2 = this.ju_Locale$LocaleBuilder__f_variant;
  var data$4 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$2);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$4, data$4);
  var hash$5 = acc;
  var x$3 = this.ju_Locale$LocaleBuilder__f_script;
  var data$5 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$3);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$5, data$5);
  var hash$6 = acc;
  var x$4 = this.ju_Locale$LocaleBuilder__f_extensions;
  var data$6 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$4);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$6, data$6);
  var hash$7 = acc;
  var x$5 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
  var data$7 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$5);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$7, data$7);
  var hash$8 = acc;
  var x$6 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
  var data$8 = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x$6);
  acc = $j_java$002elang$002eObject.$m_sr_Statics$().mix__I__I__I(hash$8, data$8);
  var hash$9 = acc;
  return $j_java$002elang$002eObject.$m_sr_Statics$().finalizeHash__I__I__I(hash$9, 8)
});
$c_ju_Locale$LocaleBuilder.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_ju_Locale$LocaleBuilder)) {
    var x$0$2 = x$0;
    if ((this.ju_Locale$LocaleBuilder__f_strict === x$0$2.ju_Locale$LocaleBuilder__f_strict)) {
      var x = this.ju_Locale$LocaleBuilder__f_language;
      var x$2 = x$0$2.ju_Locale$LocaleBuilder__f_language;
      var $$x6 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    } else {
      var $$x6 = false
    };
    if ($$x6) {
      var x$3 = this.ju_Locale$LocaleBuilder__f_region;
      var x$4 = x$0$2.ju_Locale$LocaleBuilder__f_region;
      var $$x5 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x5 = false
    };
    if ($$x5) {
      var x$5 = this.ju_Locale$LocaleBuilder__f_variant;
      var x$6 = x$0$2.ju_Locale$LocaleBuilder__f_variant;
      var $$x4 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      var $$x4 = false
    };
    if ($$x4) {
      var x$7 = this.ju_Locale$LocaleBuilder__f_script;
      var x$8 = x$0$2.ju_Locale$LocaleBuilder__f_script;
      var $$x3 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$9 = this.ju_Locale$LocaleBuilder__f_extensions;
      var x$10 = x$0$2.ju_Locale$LocaleBuilder__f_extensions;
      var $$x2 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$11 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
      var x$12 = x$0$2.ju_Locale$LocaleBuilder__f_unicodeExtensions;
      var $$x1 = ((x$11 === null) ? (x$12 === null) : x$11.equals__O__Z(x$12))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$13 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
      var x$14 = x$0$2.ju_Locale$LocaleBuilder__f_unicodeAttributes;
      return ((x$13 === null) ? (x$14 === null) : x$13.equals__O__Z(x$14))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_ju_Locale$LocaleBuilder.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_ju_Locale$LocaleBuilder.prototype.productArity__I = (function() {
  return 8
});
$c_ju_Locale$LocaleBuilder.prototype.productPrefix__T = (function() {
  return "LocaleBuilder"
});
$c_ju_Locale$LocaleBuilder.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.ju_Locale$LocaleBuilder__f_strict;
      break
    }
    case 1: {
      return this.ju_Locale$LocaleBuilder__f_language;
      break
    }
    case 2: {
      return this.ju_Locale$LocaleBuilder__f_region;
      break
    }
    case 3: {
      return this.ju_Locale$LocaleBuilder__f_variant;
      break
    }
    case 4: {
      return this.ju_Locale$LocaleBuilder__f_script;
      break
    }
    case 5: {
      return this.ju_Locale$LocaleBuilder__f_extensions;
      break
    }
    case 6: {
      return this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
      break
    }
    case 7: {
      return this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
$c_ju_Locale$LocaleBuilder.prototype.language__T__s_Option = (function(language) {
  if (((language === null) || (language === ""))) {
    var language$3 = $j_java$002elang$002eObject.$m_s_None$();
    var strict$1 = this.ju_Locale$LocaleBuilder__f_strict;
    var region$1 = this.ju_Locale$LocaleBuilder__f_region;
    var variant$3 = this.ju_Locale$LocaleBuilder__f_variant;
    var script$3 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$1 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$1 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$1 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value = new $c_ju_Locale$LocaleBuilder(strict$1, language$3, region$1, variant$3, script$3, extensions$1, unicodeExtensions$1, unicodeAttributes$1);
    return new $j_java$002elang$002eObject.$c_s_Some(value)
  } else if (((!this.ju_Locale$LocaleBuilder__f_strict) || $m_ju_Locale$().checkLanguage__T__Z(language))) {
    var value$1 = language.toLowerCase();
    var language$4 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
    var strict$2 = this.ju_Locale$LocaleBuilder__f_strict;
    var region$2 = this.ju_Locale$LocaleBuilder__f_region;
    var variant$4 = this.ju_Locale$LocaleBuilder__f_variant;
    var script$4 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$2 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$2 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$2 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value$2 = new $c_ju_Locale$LocaleBuilder(strict$2, language$4, region$2, variant$4, script$4, extensions$2, unicodeExtensions$2, unicodeAttributes$2);
    return new $j_java$002elang$002eObject.$c_s_Some(value$2)
  } else {
    return $j_java$002elang$002eObject.$m_s_None$()
  }
});
$c_ju_Locale$LocaleBuilder.prototype.script__T__s_Option = (function(script) {
  if (((script === null) || (script === ""))) {
    var script$5 = $j_java$002elang$002eObject.$m_s_None$();
    var strict$3 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$5 = this.ju_Locale$LocaleBuilder__f_language;
    var region$3 = this.ju_Locale$LocaleBuilder__f_region;
    var variant$5 = this.ju_Locale$LocaleBuilder__f_variant;
    var extensions$3 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$3 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$3 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value = new $c_ju_Locale$LocaleBuilder(strict$3, language$5, region$3, variant$5, script$5, extensions$3, unicodeExtensions$3, unicodeAttributes$3);
    return new $j_java$002elang$002eObject.$c_s_Some(value)
  } else if (((!this.ju_Locale$LocaleBuilder__f_strict) || $m_ju_Locale$().checkScript__T__Z(script))) {
    var c = (65535 & (script.charCodeAt(0) | 0));
    var value$1 = (("" + $j_java$002elang$002eObject.$bC($j_java$002elang$002eObject.$m_jl_Character$().toUpperCase__C__C(c))) + script.substring(1));
    var script$6 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
    var strict$4 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$6 = this.ju_Locale$LocaleBuilder__f_language;
    var region$4 = this.ju_Locale$LocaleBuilder__f_region;
    var variant$6 = this.ju_Locale$LocaleBuilder__f_variant;
    var extensions$4 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$4 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$4 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value$2 = new $c_ju_Locale$LocaleBuilder(strict$4, language$6, region$4, variant$6, script$6, extensions$4, unicodeExtensions$4, unicodeAttributes$4);
    return new $j_java$002elang$002eObject.$c_s_Some(value$2)
  } else {
    return $j_java$002elang$002eObject.$m_s_None$()
  }
});
$c_ju_Locale$LocaleBuilder.prototype.region__T__s_Option = (function(region) {
  if (((region === null) || (region === ""))) {
    var region$5 = $j_java$002elang$002eObject.$m_s_None$();
    var strict$5 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$7 = this.ju_Locale$LocaleBuilder__f_language;
    var variant$7 = this.ju_Locale$LocaleBuilder__f_variant;
    var script$7 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$5 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$5 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$5 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value = new $c_ju_Locale$LocaleBuilder(strict$5, language$7, region$5, variant$7, script$7, extensions$5, unicodeExtensions$5, unicodeAttributes$5);
    return new $j_java$002elang$002eObject.$c_s_Some(value)
  } else if (((!this.ju_Locale$LocaleBuilder__f_strict) || $m_ju_Locale$().checkRegion__T__Z(region))) {
    var value$1 = region.toUpperCase();
    var region$6 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
    var strict$6 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$8 = this.ju_Locale$LocaleBuilder__f_language;
    var variant$8 = this.ju_Locale$LocaleBuilder__f_variant;
    var script$8 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$6 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$6 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$6 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value$2 = new $c_ju_Locale$LocaleBuilder(strict$6, language$8, region$6, variant$8, script$8, extensions$6, unicodeExtensions$6, unicodeAttributes$6);
    return new $j_java$002elang$002eObject.$c_s_Some(value$2)
  } else {
    return $j_java$002elang$002eObject.$m_s_None$()
  }
});
$c_ju_Locale$LocaleBuilder.prototype.variant__T__s_Option = (function(variant) {
  if (((variant === null) || (variant === ""))) {
    var variant$10 = $j_java$002elang$002eObject.$m_s_None$();
    var strict$8 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$10 = this.ju_Locale$LocaleBuilder__f_language;
    var region$8 = this.ju_Locale$LocaleBuilder__f_region;
    var script$10 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$8 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$8 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$8 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value = new $c_ju_Locale$LocaleBuilder(strict$8, language$10, region$8, variant$10, script$10, extensions$8, unicodeExtensions$8, unicodeAttributes$8);
    return new $j_java$002elang$002eObject.$c_s_Some(value)
  } else if (((!this.ju_Locale$LocaleBuilder__f_strict) || $m_ju_Locale$().checkVariant__T__Z(variant))) {
    var value$1 = variant.split("-").join("_");
    var variant$11 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
    var strict$9 = this.ju_Locale$LocaleBuilder__f_strict;
    var language$11 = this.ju_Locale$LocaleBuilder__f_language;
    var region$9 = this.ju_Locale$LocaleBuilder__f_region;
    var script$11 = this.ju_Locale$LocaleBuilder__f_script;
    var extensions$9 = this.ju_Locale$LocaleBuilder__f_extensions;
    var unicodeExtensions$9 = this.ju_Locale$LocaleBuilder__f_unicodeExtensions;
    var unicodeAttributes$9 = this.ju_Locale$LocaleBuilder__f_unicodeAttributes;
    var value$2 = new $c_ju_Locale$LocaleBuilder(strict$9, language$11, region$9, variant$11, script$11, extensions$9, unicodeExtensions$9, unicodeAttributes$9);
    return new $j_java$002elang$002eObject.$c_s_Some(value$2)
  } else {
    return $j_java$002elang$002eObject.$m_s_None$()
  }
});
$c_ju_Locale$LocaleBuilder.prototype.build__ju_Locale = (function() {
  var this$1 = this.ju_Locale$LocaleBuilder__f_language;
  var $$x2 = (this$1.isEmpty__Z() ? "" : this$1.get__O());
  var this$2 = this.ju_Locale$LocaleBuilder__f_region;
  var $$x1 = (this$2.isEmpty__Z() ? "" : this$2.get__O());
  var this$3 = this.ju_Locale$LocaleBuilder__f_variant;
  return new $c_ju_Locale($$x2, $$x1, (this$3.isEmpty__Z() ? "" : this$3.get__O()), this.ju_Locale$LocaleBuilder__f_script, this.ju_Locale$LocaleBuilder__f_extensions, this.ju_Locale$LocaleBuilder__f_unicodeExtensions, this.ju_Locale$LocaleBuilder__f_unicodeAttributes, ($m_ju_Locale$(), true))
});
function $isArrayOf_ju_Locale$LocaleBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_Locale$LocaleBuilder)))
}
export { $isArrayOf_ju_Locale$LocaleBuilder as $isArrayOf_ju_Locale$LocaleBuilder };
var $d_ju_Locale$LocaleBuilder = new $j_java$002elang$002eObject.$TypeData().initClass({
  ju_Locale$LocaleBuilder: 0
}, false, "java.util.Locale$LocaleBuilder", {
  ju_Locale$LocaleBuilder: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_ju_Locale$LocaleBuilder as $d_ju_Locale$LocaleBuilder };
$c_ju_Locale$LocaleBuilder.prototype.$classData = $d_ju_Locale$LocaleBuilder;
function $ct_Llocales_cldr_LDML__s_Option__Llocales_cldr_LDMLLocale__s_Option__sci_List__s_Option__s_Option__sci_List__Llocales_cldr_NumberPatterns__($thiz, parent, locale, defaultNS, digitSymbols, calendarSymbols, calendarPatterns, currencies, numberPatterns) {
  $thiz.Llocales_cldr_LDML__f_parent = parent;
  $thiz.Llocales_cldr_LDML__f_locale = locale;
  $thiz.Llocales_cldr_LDML__f_defaultNS = defaultNS;
  $thiz.Llocales_cldr_LDML__f_digitSymbols = digitSymbols;
  $thiz.Llocales_cldr_LDML__f_calendarSymbols = calendarSymbols;
  $thiz.Llocales_cldr_LDML__f_calendarPatterns = calendarPatterns;
  $thiz.Llocales_cldr_LDML__f_currencies = currencies;
  $thiz.Llocales_cldr_LDML__f_numberPatterns = numberPatterns;
  var m = $j_scala$002ecollection$002emutable$002eMap$0024.$m_scm_Map$().empty__O();
  var it = currencies.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    var elem = it.next__O();
    var _$1 = elem;
    var key = _$1.currencyCode__T();
    var bldr = m.getOrElseUpdate__O__F0__O(key, new $j_java$002elang$002eObject.$c_sjsr_AnonFunction0(((this$1) => (() => this$1.newSpecificBuilder__scm_Builder()))(currencies)));
    bldr.addOne__O__scm_Growable(elem)
  };
  var this$2 = $j_java$002elang$002eObject.$m_sci_HashMap$();
  var result = this$2.sci_HashMap$__f_EmptyMap;
  var mapIt = m.iterator__sc_Iterator();
  while (mapIt.hasNext__Z()) {
    var x1 = mapIt.next__O();
    if ((x1 === null)) {
      throw new $j_java$002elang$002eObject.$c_s_MatchError(x1)
    };
    var k = x1.T2__f__1;
    var v = x1.T2__f__2;
    result = result.updated__O__O__sci_HashMap(k, v.result__O())
  };
  var this$3 = result;
  $j_java$002elang$002eObject.$m_sci_HashMap$();
  var b = new $j_java$002elang$002eObject.$c_sci_HashMapBuilder();
  var it$1 = this$3.iterator__sc_Iterator();
  while (it$1.hasNext__Z()) {
    var arg1 = it$1.next__O();
    var x$1 = arg1;
    matchResult10: {
      var elem$1___1;
      var elem$1___2;
      if ((x$1 !== null)) {
        var code = x$1.T2__f__1;
        var list = x$1.T2__f__2;
        var self = code.toUpperCase();
        var y = list.head__O();
        var elem$1___1 = self;
        var elem$1___2 = y;
        break matchResult10
      };
      throw new $j_java$002elang$002eObject.$c_s_MatchError(x$1)
    };
    $j_java$002elang$002eObject.$p_sci_HashMapBuilder__ensureUnaliased__V(b);
    var x = elem$1___1;
    var h = $j_java$002elang$002eObject.$m_sr_Statics$().anyHash__O__I(x);
    var im = $j_java$002elang$002eObject.$m_sc_Hashing$().improve__I__I(h);
    b.update__sci_MapNode__O__O__I__I__I__V(b.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, elem$1___1, elem$1___2, h, im, 0)
  };
  $thiz.Llocales_cldr_LDML__f_byCurrencyCode = b.result__sci_HashMap();
  return $thiz
}
export { $ct_Llocales_cldr_LDML__s_Option__Llocales_cldr_LDMLLocale__s_Option__sci_List__s_Option__s_Option__sci_List__Llocales_cldr_NumberPatterns__ as $ct_Llocales_cldr_LDML__s_Option__Llocales_cldr_LDMLLocale__s_Option__sci_List__s_Option__s_Option__sci_List__Llocales_cldr_NumberPatterns__ };
/** @constructor */
function $c_Llocales_cldr_LDML() {
  this.Llocales_cldr_LDML__f_parent = null;
  this.Llocales_cldr_LDML__f_locale = null;
  this.Llocales_cldr_LDML__f_defaultNS = null;
  this.Llocales_cldr_LDML__f_digitSymbols = null;
  this.Llocales_cldr_LDML__f_calendarSymbols = null;
  this.Llocales_cldr_LDML__f_calendarPatterns = null;
  this.Llocales_cldr_LDML__f_currencies = null;
  this.Llocales_cldr_LDML__f_numberPatterns = null;
  this.Llocales_cldr_LDML__f_byCurrencyCode = null
}
export { $c_Llocales_cldr_LDML as $c_Llocales_cldr_LDML };
$c_Llocales_cldr_LDML.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Llocales_cldr_LDML.prototype.constructor = $c_Llocales_cldr_LDML;
/** @constructor */
function $h_Llocales_cldr_LDML() {
  /*<skip>*/
}
export { $h_Llocales_cldr_LDML as $h_Llocales_cldr_LDML };
$h_Llocales_cldr_LDML.prototype = $c_Llocales_cldr_LDML.prototype;
$c_Llocales_cldr_LDML.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Llocales_cldr_LDML.prototype.hashCode__I = (function() {
  var this$2 = $j_java$002elang$002eObject.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Llocales_cldr_LDML.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Llocales_cldr_LDML)) {
    var x$0$2 = x$0;
    var x = this.Llocales_cldr_LDML__f_parent;
    var x$2 = x$0$2.Llocales_cldr_LDML__f_parent;
    if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
      var x$3 = this.Llocales_cldr_LDML__f_locale;
      var x$4 = x$0$2.Llocales_cldr_LDML__f_locale;
      var $$x6 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      var $$x6 = false
    };
    if ($$x6) {
      var x$5 = this.Llocales_cldr_LDML__f_defaultNS;
      var x$6 = x$0$2.Llocales_cldr_LDML__f_defaultNS;
      var $$x5 = ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
    } else {
      var $$x5 = false
    };
    if ($$x5) {
      var x$7 = this.Llocales_cldr_LDML__f_digitSymbols;
      var x$8 = x$0$2.Llocales_cldr_LDML__f_digitSymbols;
      var $$x4 = ((x$7 === null) ? (x$8 === null) : x$7.equals__O__Z(x$8))
    } else {
      var $$x4 = false
    };
    if ($$x4) {
      var x$9 = this.Llocales_cldr_LDML__f_calendarSymbols;
      var x$10 = x$0$2.Llocales_cldr_LDML__f_calendarSymbols;
      var $$x3 = ((x$9 === null) ? (x$10 === null) : x$9.equals__O__Z(x$10))
    } else {
      var $$x3 = false
    };
    if ($$x3) {
      var x$11 = this.Llocales_cldr_LDML__f_calendarPatterns;
      var x$12 = x$0$2.Llocales_cldr_LDML__f_calendarPatterns;
      var $$x2 = ((x$11 === null) ? (x$12 === null) : x$11.equals__O__Z(x$12))
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$13 = this.Llocales_cldr_LDML__f_currencies;
      var x$14 = x$0$2.Llocales_cldr_LDML__f_currencies;
      var $$x1 = ((x$13 === null) ? (x$14 === null) : x$13.equals__O__Z(x$14))
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      var x$15 = this.Llocales_cldr_LDML__f_numberPatterns;
      var x$16 = x$0$2.Llocales_cldr_LDML__f_numberPatterns;
      return ((x$15 === null) ? (x$16 === null) : x$15.equals__O__Z(x$16))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Llocales_cldr_LDML.prototype.toString__T = (function() {
  return $j_java$002elang$002eObject.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Llocales_cldr_LDML.prototype.productArity__I = (function() {
  return 8
});
$c_Llocales_cldr_LDML.prototype.productPrefix__T = (function() {
  return "LDML"
});
$c_Llocales_cldr_LDML.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Llocales_cldr_LDML__f_parent;
      break
    }
    case 1: {
      return this.Llocales_cldr_LDML__f_locale;
      break
    }
    case 2: {
      return this.Llocales_cldr_LDML__f_defaultNS;
      break
    }
    case 3: {
      return this.Llocales_cldr_LDML__f_digitSymbols;
      break
    }
    case 4: {
      return this.Llocales_cldr_LDML__f_calendarSymbols;
      break
    }
    case 5: {
      return this.Llocales_cldr_LDML__f_calendarPatterns;
      break
    }
    case 6: {
      return this.Llocales_cldr_LDML__f_currencies;
      break
    }
    case 7: {
      return this.Llocales_cldr_LDML__f_numberPatterns;
      break
    }
    default: {
      throw $j_java$002elang$002eObject.$ct_jl_IndexOutOfBoundsException__T__(new $j_java$002elang$002eObject.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
$c_Llocales_cldr_LDML.prototype.toLocale__ju_Locale = (function() {
  if ((this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_language === "root")) {
    var $$x3 = new $c_ju_Locale$Builder().setLanguage__T__ju_Locale$Builder("");
    var this$1 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_territory;
    var $$x2 = $$x3.setRegion__T__ju_Locale$Builder((this$1.isEmpty__Z() ? "" : this$1.get__O()));
    var this$2 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_script;
    var $$x1 = $$x2.setScript__T__ju_Locale$Builder((this$2.isEmpty__Z() ? "" : this$2.get__O()));
    var this$3 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_variant;
    return $$x1.setVariant__T__ju_Locale$Builder((this$3.isEmpty__Z() ? "" : this$3.get__O())).build__ju_Locale()
  } else {
    var $$x6 = new $c_ju_Locale$Builder().setLanguage__T__ju_Locale$Builder(this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_language);
    var this$4 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_territory;
    var $$x5 = $$x6.setRegion__T__ju_Locale$Builder((this$4.isEmpty__Z() ? "" : this$4.get__O()));
    var this$5 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_script;
    var $$x4 = $$x5.setScript__T__ju_Locale$Builder((this$5.isEmpty__Z() ? "" : this$5.get__O()));
    var this$6 = this.Llocales_cldr_LDML__f_locale.Llocales_cldr_LDMLLocale__f_variant;
    return $$x4.setVariant__T__ju_Locale$Builder((this$6.isEmpty__Z() ? "" : this$6.get__O())).build__ju_Locale()
  }
});
function $isArrayOf_Llocales_cldr_LDML(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Llocales_cldr_LDML)))
}
export { $isArrayOf_Llocales_cldr_LDML as $isArrayOf_Llocales_cldr_LDML };
var $d_Llocales_cldr_LDML = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_LDML: 0
}, false, "locales.cldr.LDML", {
  Llocales_cldr_LDML: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_LDML as $d_Llocales_cldr_LDML };
$c_Llocales_cldr_LDML.prototype.$classData = $d_Llocales_cldr_LDML;
/** @constructor */
function $c_Llocales_cldr_fallback_data_\uff3fen$() {
  this.Llocales_cldr_LDML__f_parent = null;
  this.Llocales_cldr_LDML__f_locale = null;
  this.Llocales_cldr_LDML__f_defaultNS = null;
  this.Llocales_cldr_LDML__f_digitSymbols = null;
  this.Llocales_cldr_LDML__f_calendarSymbols = null;
  this.Llocales_cldr_LDML__f_calendarPatterns = null;
  this.Llocales_cldr_LDML__f_currencies = null;
  this.Llocales_cldr_LDML__f_numberPatterns = null;
  this.Llocales_cldr_LDML__f_byCurrencyCode = null;
  var value = $m_Llocales_cldr_fallback_data_\uff3froot$();
  var $$x8 = new $j_java$002elang$002eObject.$c_s_Some(value);
  var territory = $j_java$002elang$002eObject.$m_s_None$();
  var variant = $j_java$002elang$002eObject.$m_s_None$();
  var script = $j_java$002elang$002eObject.$m_s_None$();
  var $$x7 = new $j_locales$002ecldr$002eLDMLLocale.$c_Llocales_cldr_LDMLLocale("en", territory, variant, script);
  var $$x6 = $j_java$002elang$002eObject.$m_s_None$();
  $j_java$002elang$002eObject.$m_s_package$();
  var $$x4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$();
  var ns = $j_locales$002ecldr$002efallback$002edata$002enumericsystems$0024.$m_Llocales_cldr_fallback_data_numericsystems$().latn__Llocales_cldr_NumberingSystem();
  var aliasOf = $j_java$002elang$002eObject.$m_s_None$();
  var decimal = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(46));
  var group = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(44));
  var list = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(59));
  var percent = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(37));
  var minus = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(45));
  var perMille = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(8240));
  var infinity = new $j_java$002elang$002eObject.$c_s_Some("\u221e");
  var nan = new $j_java$002elang$002eObject.$c_s_Some("NaN");
  var exp = new $j_java$002elang$002eObject.$c_s_Some("E");
  var elems = $$x4.wrapRefArray__AO__sci_ArraySeq(new ($j_locales$002ecldr$002eSymbols.$d_Llocales_cldr_Symbols.getArrayOf().constr)([new $j_locales$002ecldr$002eSymbols.$c_Llocales_cldr_Symbols(ns, aliasOf, decimal, group, list, percent, minus, perMille, infinity, nan, exp)]));
  var $$x5 = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$1 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]));
  var months = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$2 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]));
  var shortMonths = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$3 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]));
  var weekdays = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]));
  var shortWeekdays = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$5 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["AM", "PM"]));
  var amPm = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$6 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["BC", "AD"]));
  var eras = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
  var value$1 = new $j_locales$002ecldr$002eCalendarSymbols.$c_Llocales_cldr_CalendarSymbols(months, shortMonths, weekdays, shortWeekdays, amPm, eras);
  var $$x3 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
  $j_locales$002ecldr$002eCalendarPatterns$0024.$m_Llocales_cldr_CalendarPatterns$();
  var this$26 = $j_java$002elang$002eObject.$m_s_Predef$().s_Predef$__f_Map;
  var elems$7 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2(0, "EEEE, MMMM d, y"), new $j_java$002elang$002eObject.$c_T2(1, "MMMM d, y"), new $j_java$002elang$002eObject.$c_T2(2, "MMM d, y"), new $j_java$002elang$002eObject.$c_T2(3, "M/d/yy")]));
  var datePatterns = this$26.from__sc_IterableOnce__sci_Map(elems$7);
  var this$31 = $j_java$002elang$002eObject.$m_s_Predef$().s_Predef$__f_Map;
  var elems$8 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2(0, "h:mm:ss a zzzz"), new $j_java$002elang$002eObject.$c_T2(1, "h:mm:ss a z"), new $j_java$002elang$002eObject.$c_T2(2, "h:mm:ss a"), new $j_java$002elang$002eObject.$c_T2(3, "h:mm a")]));
  var timePatterns = this$31.from__sc_IterableOnce__sci_Map(elems$8);
  var value$2 = new $j_locales$002ecldr$002eCalendarPatterns.$c_Llocales_cldr_CalendarPatterns(datePatterns, timePatterns);
  var $$x2 = new $j_java$002elang$002eObject.$c_s_Some(value$2);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$9 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_sr_Nothing$.getArrayOf().constr)([]));
  var $$x1 = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$9);
  var decimalFormat = new $j_java$002elang$002eObject.$c_s_Some("#,##0.###");
  var percentFormat = new $j_java$002elang$002eObject.$c_s_Some("#,##0%");
  var currencyFormat = new $j_java$002elang$002eObject.$c_s_Some("\u00a4#,##0.00;(\u00a4#,##0.00)");
  $ct_Llocales_cldr_LDML__s_Option__Llocales_cldr_LDMLLocale__s_Option__sci_List__s_Option__s_Option__sci_List__Llocales_cldr_NumberPatterns__(this, $$x8, $$x7, $$x6, $$x5, $$x3, $$x2, $$x1, new $j_locales$002ecldr$002eNumberPatterns.$c_Llocales_cldr_NumberPatterns(decimalFormat, percentFormat, currencyFormat))
}
export { $c_Llocales_cldr_fallback_data_\uff3fen$ as $c_Llocales_cldr_fallback_data_\uff3fen$ };
$c_Llocales_cldr_fallback_data_\uff3fen$.prototype = new $h_Llocales_cldr_LDML();
$c_Llocales_cldr_fallback_data_\uff3fen$.prototype.constructor = $c_Llocales_cldr_fallback_data_\uff3fen$;
/** @constructor */
function $h_Llocales_cldr_fallback_data_\uff3fen$() {
  /*<skip>*/
}
export { $h_Llocales_cldr_fallback_data_\uff3fen$ as $h_Llocales_cldr_fallback_data_\uff3fen$ };
$h_Llocales_cldr_fallback_data_\uff3fen$.prototype = $c_Llocales_cldr_fallback_data_\uff3fen$.prototype;
var $d_Llocales_cldr_fallback_data_\uff3fen$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_fallback_data_\uff3fen$: 0
}, false, "locales.cldr.fallback.data._en$", {
  Llocales_cldr_fallback_data_\uff3fen$: 1,
  Llocales_cldr_LDML: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_fallback_data_\uff3fen$ as $d_Llocales_cldr_fallback_data_\uff3fen$ };
$c_Llocales_cldr_fallback_data_\uff3fen$.prototype.$classData = $d_Llocales_cldr_fallback_data_\uff3fen$;
var $n_Llocales_cldr_fallback_data_\uff3fen$;
function $m_Llocales_cldr_fallback_data_\uff3fen$() {
  if ((!$n_Llocales_cldr_fallback_data_\uff3fen$)) {
    $n_Llocales_cldr_fallback_data_\uff3fen$ = new $c_Llocales_cldr_fallback_data_\uff3fen$()
  };
  return $n_Llocales_cldr_fallback_data_\uff3fen$
}
export { $m_Llocales_cldr_fallback_data_\uff3fen$ as $m_Llocales_cldr_fallback_data_\uff3fen$ };
/** @constructor */
function $c_Llocales_cldr_fallback_data_\uff3froot$() {
  this.Llocales_cldr_LDML__f_parent = null;
  this.Llocales_cldr_LDML__f_locale = null;
  this.Llocales_cldr_LDML__f_defaultNS = null;
  this.Llocales_cldr_LDML__f_digitSymbols = null;
  this.Llocales_cldr_LDML__f_calendarSymbols = null;
  this.Llocales_cldr_LDML__f_calendarPatterns = null;
  this.Llocales_cldr_LDML__f_currencies = null;
  this.Llocales_cldr_LDML__f_numberPatterns = null;
  this.Llocales_cldr_LDML__f_byCurrencyCode = null;
  var $$x8 = $j_java$002elang$002eObject.$m_s_None$();
  var territory = $j_java$002elang$002eObject.$m_s_None$();
  var variant = $j_java$002elang$002eObject.$m_s_None$();
  var script = $j_java$002elang$002eObject.$m_s_None$();
  var $$x7 = new $j_locales$002ecldr$002eLDMLLocale.$c_Llocales_cldr_LDMLLocale("root", territory, variant, script);
  var value = $j_locales$002ecldr$002efallback$002edata$002enumericsystems$0024.$m_Llocales_cldr_fallback_data_numericsystems$().latn__Llocales_cldr_NumberingSystem();
  var $$x6 = new $j_java$002elang$002eObject.$c_s_Some(value);
  $j_java$002elang$002eObject.$m_s_package$();
  var $$x4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$();
  var ns = $j_locales$002ecldr$002efallback$002edata$002enumericsystems$0024.$m_Llocales_cldr_fallback_data_numericsystems$().latn__Llocales_cldr_NumberingSystem();
  var aliasOf = $j_java$002elang$002eObject.$m_s_None$();
  var decimal = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(46));
  var group = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(44));
  var list = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(59));
  var percent = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(37));
  var minus = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(45));
  var perMille = new $j_java$002elang$002eObject.$c_s_Some($j_java$002elang$002eObject.$bC(8240));
  var infinity = new $j_java$002elang$002eObject.$c_s_Some("\u221e");
  var nan = new $j_java$002elang$002eObject.$c_s_Some("NaN");
  var exp = new $j_java$002elang$002eObject.$c_s_Some("E");
  var elems = $$x4.wrapRefArray__AO__sci_ArraySeq(new ($j_locales$002ecldr$002eSymbols.$d_Llocales_cldr_Symbols.getArrayOf().constr)([new $j_locales$002ecldr$002eSymbols.$c_Llocales_cldr_Symbols(ns, aliasOf, decimal, group, list, percent, minus, perMille, infinity, nan, exp)]));
  var $$x5 = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$1 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]));
  var months = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$2 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_sr_Nothing$.getArrayOf().constr)([]));
  var shortMonths = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$3 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]));
  var weekdays = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$3);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$4 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_sr_Nothing$.getArrayOf().constr)([]));
  var shortWeekdays = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$4);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$5 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_sr_Nothing$.getArrayOf().constr)([]));
  var amPm = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$5);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$6 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T.getArrayOf().constr)(["BCE", "CE"]));
  var eras = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$6);
  var value$1 = new $j_locales$002ecldr$002eCalendarSymbols.$c_Llocales_cldr_CalendarSymbols(months, shortMonths, weekdays, shortWeekdays, amPm, eras);
  var $$x3 = new $j_java$002elang$002eObject.$c_s_Some(value$1);
  $j_locales$002ecldr$002eCalendarPatterns$0024.$m_Llocales_cldr_CalendarPatterns$();
  var this$26 = $j_java$002elang$002eObject.$m_s_Predef$().s_Predef$__f_Map;
  var elems$7 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2(0, "y MMMM d, EEEE"), new $j_java$002elang$002eObject.$c_T2(1, "y MMMM d"), new $j_java$002elang$002eObject.$c_T2(2, "y MMM d"), new $j_java$002elang$002eObject.$c_T2(3, "y-MM-dd")]));
  var datePatterns = this$26.from__sc_IterableOnce__sci_Map(elems$7);
  var this$31 = $j_java$002elang$002eObject.$m_s_Predef$().s_Predef$__f_Map;
  var elems$8 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_T2.getArrayOf().constr)([new $j_java$002elang$002eObject.$c_T2(0, "HH:mm:ss zzzz"), new $j_java$002elang$002eObject.$c_T2(1, "HH:mm:ss z"), new $j_java$002elang$002eObject.$c_T2(2, "HH:mm:ss"), new $j_java$002elang$002eObject.$c_T2(3, "HH:mm")]));
  var timePatterns = this$31.from__sc_IterableOnce__sci_Map(elems$8);
  var value$2 = new $j_locales$002ecldr$002eCalendarPatterns.$c_Llocales_cldr_CalendarPatterns(datePatterns, timePatterns);
  var $$x2 = new $j_java$002elang$002eObject.$c_s_Some(value$2);
  $j_java$002elang$002eObject.$m_s_package$();
  var elems$9 = $j_java$002elang$002eObject.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_java$002elang$002eObject.$d_sr_Nothing$.getArrayOf().constr)([]));
  var $$x1 = $j_java$002elang$002eObject.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$9);
  var decimalFormat = new $j_java$002elang$002eObject.$c_s_Some("#,##0.###");
  var percentFormat = new $j_java$002elang$002eObject.$c_s_Some("#,##0%");
  var currencyFormat = new $j_java$002elang$002eObject.$c_s_Some("\u00a4\u00a0#,##0.00");
  $ct_Llocales_cldr_LDML__s_Option__Llocales_cldr_LDMLLocale__s_Option__sci_List__s_Option__s_Option__sci_List__Llocales_cldr_NumberPatterns__(this, $$x8, $$x7, $$x6, $$x5, $$x3, $$x2, $$x1, new $j_locales$002ecldr$002eNumberPatterns.$c_Llocales_cldr_NumberPatterns(decimalFormat, percentFormat, currencyFormat))
}
export { $c_Llocales_cldr_fallback_data_\uff3froot$ as $c_Llocales_cldr_fallback_data_\uff3froot$ };
$c_Llocales_cldr_fallback_data_\uff3froot$.prototype = new $h_Llocales_cldr_LDML();
$c_Llocales_cldr_fallback_data_\uff3froot$.prototype.constructor = $c_Llocales_cldr_fallback_data_\uff3froot$;
/** @constructor */
function $h_Llocales_cldr_fallback_data_\uff3froot$() {
  /*<skip>*/
}
export { $h_Llocales_cldr_fallback_data_\uff3froot$ as $h_Llocales_cldr_fallback_data_\uff3froot$ };
$h_Llocales_cldr_fallback_data_\uff3froot$.prototype = $c_Llocales_cldr_fallback_data_\uff3froot$.prototype;
var $d_Llocales_cldr_fallback_data_\uff3froot$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Llocales_cldr_fallback_data_\uff3froot$: 0
}, false, "locales.cldr.fallback.data._root$", {
  Llocales_cldr_fallback_data_\uff3froot$: 1,
  Llocales_cldr_LDML: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
export { $d_Llocales_cldr_fallback_data_\uff3froot$ as $d_Llocales_cldr_fallback_data_\uff3froot$ };
$c_Llocales_cldr_fallback_data_\uff3froot$.prototype.$classData = $d_Llocales_cldr_fallback_data_\uff3froot$;
var $n_Llocales_cldr_fallback_data_\uff3froot$;
function $m_Llocales_cldr_fallback_data_\uff3froot$() {
  if ((!$n_Llocales_cldr_fallback_data_\uff3froot$)) {
    $n_Llocales_cldr_fallback_data_\uff3froot$ = new $c_Llocales_cldr_fallback_data_\uff3froot$()
  };
  return $n_Llocales_cldr_fallback_data_\uff3froot$
}
export { $m_Llocales_cldr_fallback_data_\uff3froot$ as $m_Llocales_cldr_fallback_data_\uff3froot$ };
//# sourceMappingURL=java.util.Locale.js.map
