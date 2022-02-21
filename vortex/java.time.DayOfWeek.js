'use strict';
import * as $j_java$002eio$002eIOException from "./java.io.IOException.js";
import * as $j_java$002elang$002eAssertionError from "./java.lang.AssertionError.js";
import * as $j_java$002elang$002eEnum from "./java.lang.Enum.js";
import * as $j_java$002elang$002eMath$0024 from "./java.lang.Math$.js";
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_java$002etime$002eDateTimeException from "./java.time.DateTimeException.js";
import * as $j_java$002etime$002eYear$0024 from "./java.time.Year$.js";
import * as $j_java$002etime$002eZoneRegion from "./java.time.ZoneRegion.js";
import * as $j_java$002etime$002echrono$002eChronology from "./java.time.chrono.Chronology.js";
import * as $j_java$002etime$002echrono$002eIsoChronology$0024 from "./java.time.chrono.IsoChronology$.js";
import * as $j_java$002etime$002eformat$002eDecimalStyle$0024 from "./java.time.format.DecimalStyle$.js";
import * as $j_java$002etime$002eformat$002eResolverStyle$0024 from "./java.time.format.ResolverStyle$.js";
import * as $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024CompositePrinterParser from "./java.time.format.internal.TTBPDateTimeFormatterBuilder$CompositePrinterParser.js";
import * as $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024 from "./java.time.format.internal.TTBPDateTimeFormatterBuilder$InstantPrinterParser$.js";
import * as $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024PadPrinterParserDecorator from "./java.time.format.internal.TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator.js";
import * as $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024SettingsParser$0024 from "./java.time.format.internal.TTBPDateTimeFormatterBuilder$SettingsParser$.js";
import * as $j_java$002etime$002etemporal$002eChronoUnit from "./java.time.temporal.ChronoUnit.js";
import * as $j_java$002etime$002etemporal$002eTemporalQueries$0024$0024anon$00242 from "./java.time.temporal.TemporalQueries$$anon$2.js";
import * as $j_java$002etime$002etemporal$002eTemporalQueries$0024$0024anon$00243 from "./java.time.temporal.TemporalQueries$$anon$3.js";
import * as $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException from "./java.time.temporal.UnsupportedTemporalTypeException.js";
import * as $j_java$002etime$002etemporal$002eValueRange$0024 from "./java.time.temporal.ValueRange$.js";
import * as $j_java$002etime$002ezone$002eStandardZoneRules from "./java.time.zone.StandardZoneRules.js";
import * as $j_java$002etime$002ezone$002eZoneRules from "./java.time.zone.ZoneRules.js";
import * as $j_java$002etime$002ezone$002eZoneRulesException from "./java.time.zone.ZoneRulesException.js";
import * as $j_java$002eutil$002eAbstractMap from "./java.util.AbstractMap.js";
import * as $j_java$002eutil$002eArrayList from "./java.util.ArrayList.js";
import * as $j_java$002eutil$002eLocale from "./java.util.Locale.js";
import * as $j_scala$002eProduct$0024$0024anon$00241 from "./scala.Product$$anon$1.js";
import * as $j_scala$002eruntime$002eEnumValue from "./scala.runtime.EnumValue.js";
/** @constructor */
function $c_Ljava_time_Duration$() {
  this.Ljava_time_Duration$__f_ZERO$lzy1 = null;
  this.Ljava_time_Duration$__f_ZERObitmap$1 = false
}
export { $c_Ljava_time_Duration$ as $c_Ljava_time_Duration$ };
$c_Ljava_time_Duration$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Duration$.prototype.constructor = $c_Ljava_time_Duration$;
/** @constructor */
function $h_Ljava_time_Duration$() {
  /*<skip>*/
}
export { $h_Ljava_time_Duration$ as $h_Ljava_time_Duration$ };
$h_Ljava_time_Duration$.prototype = $c_Ljava_time_Duration$.prototype;
$c_Ljava_time_Duration$.prototype.ZERO__Ljava_time_Duration = (function() {
  if ((!this.Ljava_time_Duration$__f_ZERObitmap$1)) {
    this.Ljava_time_Duration$__f_ZERO$lzy1 = new $c_Ljava_time_Duration($j_java$002elang$002eObject.$L0, 0);
    this.Ljava_time_Duration$__f_ZERObitmap$1 = true
  };
  return this.Ljava_time_Duration$__f_ZERO$lzy1
});
$c_Ljava_time_Duration$.prototype.ofSeconds__J__J__Ljava_time_Duration = (function(seconds, nanoAdjustment) {
  var t = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorDiv__J__J__J(nanoAdjustment, new $j_java$002elang$002eObject.$c_RTLong(1000000000, 0));
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var t$1 = $j_java$002elang$002eMath$0024.$m_jl_Math$().addExact__J__J__J(seconds, new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var this$1 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorMod__J__J__J(nanoAdjustment, new $j_java$002elang$002eObject.$c_RTLong(1000000000, 0));
  var nos = this$1.RTLong__f_lo;
  return this.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$1), nos)
});
$c_Ljava_time_Duration$.prototype.ofNanos__J__Ljava_time_Duration = (function(nanos) {
  var this$1 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var secs__lo = lo;
  var secs__hi = hi;
  var this$2 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$1 = this$2.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000000, 0);
  var nos = lo$1;
  if ((nos < 0)) {
    nos = ((1000000000 + nos) | 0);
    var b__lo = secs__lo;
    var b__hi = secs__hi;
    var bhi = b__hi;
    var lo$2 = (((-1) + b__lo) | 0);
    var hi$2 = ((lo$2 !== (-1)) ? bhi : (((-1) + bhi) | 0));
    var $$x1__lo = lo$2;
    var $$x1__hi = hi$2;
    secs__lo = $$x1__lo;
    secs__hi = $$x1__hi
  };
  return this.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(secs__lo, secs__hi), nos)
});
$c_Ljava_time_Duration$.prototype.java$time$Duration$$$create__J__I__Ljava_time_Duration = (function(seconds, nanoAdjustment) {
  var hi = (nanoAdjustment >> 31);
  var lo = (seconds.RTLong__f_lo | nanoAdjustment);
  var hi$1 = (seconds.RTLong__f_hi | hi);
  if (((lo === 0) && (hi$1 === 0))) {
    return this.ZERO__Ljava_time_Duration()
  } else {
    return new $c_Ljava_time_Duration(seconds, nanoAdjustment)
  }
});
var $d_Ljava_time_Duration$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Duration$: 0
}, false, "java.time.Duration$", {
  Ljava_time_Duration$: 1,
  O: 1
});
export { $d_Ljava_time_Duration$ as $d_Ljava_time_Duration$ };
$c_Ljava_time_Duration$.prototype.$classData = $d_Ljava_time_Duration$;
var $n_Ljava_time_Duration$;
function $m_Ljava_time_Duration$() {
  if ((!$n_Ljava_time_Duration$)) {
    $n_Ljava_time_Duration$ = new $c_Ljava_time_Duration$()
  };
  return $n_Ljava_time_Duration$
}
export { $m_Ljava_time_Duration$ as $m_Ljava_time_Duration$ };
/** @constructor */
function $c_Ljava_time_Instant$() {
  this.Ljava_time_Instant$__f_EPOCH$lzy1 = null;
  this.Ljava_time_Instant$__f_EPOCHbitmap$1 = false;
  this.Ljava_time_Instant$__f_MIN$lzy1 = null;
  this.Ljava_time_Instant$__f_MINbitmap$1 = false;
  this.Ljava_time_Instant$__f_MAX$lzy1 = null;
  this.Ljava_time_Instant$__f_MAXbitmap$1 = false
}
export { $c_Ljava_time_Instant$ as $c_Ljava_time_Instant$ };
$c_Ljava_time_Instant$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Instant$.prototype.constructor = $c_Ljava_time_Instant$;
/** @constructor */
function $h_Ljava_time_Instant$() {
  /*<skip>*/
}
export { $h_Ljava_time_Instant$ as $h_Ljava_time_Instant$ };
$h_Ljava_time_Instant$.prototype = $c_Ljava_time_Instant$.prototype;
$c_Ljava_time_Instant$.prototype.EPOCH__Ljava_time_Instant = (function() {
  if ((!this.Ljava_time_Instant$__f_EPOCHbitmap$1)) {
    this.Ljava_time_Instant$__f_EPOCH$lzy1 = new $c_Ljava_time_Instant($j_java$002elang$002eObject.$L0, 0);
    this.Ljava_time_Instant$__f_EPOCHbitmap$1 = true
  };
  return this.Ljava_time_Instant$__f_EPOCH$lzy1
});
$c_Ljava_time_Instant$.prototype.ofEpochSecond__J__J__Ljava_time_Instant = (function(epochSecond, nanoAdjustment) {
  var t = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorDiv__J__J__J(nanoAdjustment, new $j_java$002elang$002eObject.$c_RTLong(1000000000, 0));
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var t$1 = $j_java$002elang$002eMath$0024.$m_jl_Math$().addExact__J__J__J(epochSecond, new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var this$1 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorMod__J__J__J(nanoAdjustment, new $j_java$002elang$002eObject.$c_RTLong(1000000000, 0));
  var nos = this$1.RTLong__f_lo;
  return this.java$time$Instant$$$create__J__I__Ljava_time_Instant(new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$1), nos)
});
$c_Ljava_time_Instant$.prototype.from__Ljava_time_temporal_TemporalAccessor__Ljava_time_Instant = (function(temporal) {
  try {
    var t = temporal.getLong__Ljava_time_temporal_TemporalField__J($s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField());
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var nanoOfSecond = temporal.get__Ljava_time_temporal_TemporalField__I($s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField());
    var $$x2 = $m_Ljava_time_Instant$();
    var $$x1 = new $j_java$002elang$002eObject.$c_RTLong(lo, hi);
    var hi$1 = (nanoOfSecond >> 31);
    return $$x2.ofEpochSecond__J__J__Ljava_time_Instant($$x1, new $j_java$002elang$002eObject.$c_RTLong(nanoOfSecond, hi$1))
  } catch (e) {
    if ((e instanceof $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException)) {
      var ex = e;
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__jl_Throwable__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Unable to obtain Instant from TemporalAccessor: " + temporal) + ", type ") + $j_java$002elang$002eObject.$objectClassName(temporal)), ex)
    } else {
      throw e
    }
  }
});
$c_Ljava_time_Instant$.prototype.java$time$Instant$$$create__J__I__Ljava_time_Instant = (function(seconds, nanoOfSecond) {
  var hi = (nanoOfSecond >> 31);
  var lo = (seconds.RTLong__f_lo | nanoOfSecond);
  var hi$1 = (seconds.RTLong__f_hi | hi);
  if (((lo === 0) && (hi$1 === 0))) {
    return this.EPOCH__Ljava_time_Instant()
  } else {
    var ahi = seconds.RTLong__f_hi;
    if (((ahi === (-7347440)) ? (((-2147483648) ^ seconds.RTLong__f_lo) < (-1805380608)) : (ahi < (-7347440)))) {
      var $$x1 = true
    } else {
      var ahi$1 = seconds.RTLong__f_hi;
      var $$x1 = ((ahi$1 === 7347410) ? (((-2147483648) ^ seconds.RTLong__f_lo) > 2056616191) : (ahi$1 > 7347410))
    };
    if ($$x1) {
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), "Instant exceeds minimum or maximum instant")
    } else {
      return new $c_Ljava_time_Instant(seconds, nanoOfSecond)
    }
  }
});
var $d_Ljava_time_Instant$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Instant$: 0
}, false, "java.time.Instant$", {
  Ljava_time_Instant$: 1,
  O: 1
});
export { $d_Ljava_time_Instant$ as $d_Ljava_time_Instant$ };
$c_Ljava_time_Instant$.prototype.$classData = $d_Ljava_time_Instant$;
var $n_Ljava_time_Instant$;
function $m_Ljava_time_Instant$() {
  if ((!$n_Ljava_time_Instant$)) {
    $n_Ljava_time_Instant$ = new $c_Ljava_time_Instant$()
  };
  return $n_Ljava_time_Instant$
}
export { $m_Ljava_time_Instant$ as $m_Ljava_time_Instant$ };
/** @constructor */
function $c_Ljava_time_LocalDate$() {
  this.Ljava_time_LocalDate$__f_MIN$lzy1 = null;
  this.Ljava_time_LocalDate$__f_MINbitmap$1 = false;
  this.Ljava_time_LocalDate$__f_MAX$lzy1 = null;
  this.Ljava_time_LocalDate$__f_MAXbitmap$1 = false;
  this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE = 0;
  this.Ljava_time_LocalDate$__f_DAYS_0000_TO_1970 = $j_java$002elang$002eObject.$L0;
  $n_Ljava_time_LocalDate$ = this;
  this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE = 146097;
  var value = this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE;
  var hi = (value >> 31);
  var b0 = (65535 & value);
  var b1 = ((value >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(5, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(5, b1);
  var lo = ((a0b0 + (a0b1 << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (($j_java$002elang$002eObject.$imul(5, hi) + ((c1part >>> 16) | 0)) | 0);
  var lo$1 = (((-10957) + lo) | 0);
  var hi$2 = ((((-2147483648) ^ lo$1) < 2147472691) ? hi$1 : (((-1) + hi$1) | 0));
  this.Ljava_time_LocalDate$__f_DAYS_0000_TO_1970 = new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$2)
}
export { $c_Ljava_time_LocalDate$ as $c_Ljava_time_LocalDate$ };
$c_Ljava_time_LocalDate$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_LocalDate$.prototype.constructor = $c_Ljava_time_LocalDate$;
/** @constructor */
function $h_Ljava_time_LocalDate$() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalDate$ as $h_Ljava_time_LocalDate$ };
$h_Ljava_time_LocalDate$.prototype = $c_Ljava_time_LocalDate$.prototype;
$c_Ljava_time_LocalDate$.prototype.ofEpochDay__J__Ljava_time_LocalDate = (function(epochDay) {
  var this$1 = $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField();
  this$1.Ljava_time_temporal_ChronoField__f__range.checkValidValue__J__Ljava_time_temporal_TemporalField__J(epochDay, this$1);
  var b = this.Ljava_time_LocalDate$__f_DAYS_0000_TO_1970;
  var alo = epochDay.RTLong__f_lo;
  var ahi = epochDay.RTLong__f_hi;
  var bhi = b.RTLong__f_hi;
  var lo = ((alo + b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0));
  var zeroDay__lo = lo;
  var zeroDay__hi = hi;
  var b$1__lo = zeroDay__lo;
  var b$1__hi = zeroDay__hi;
  var bhi$1 = b$1__hi;
  var lo$1 = (((-60) + b$1__lo) | 0);
  var hi$1 = ((((-2147483648) ^ lo$1) < 2147483588) ? bhi$1 : (((-1) + bhi$1) | 0));
  var $$x1__lo = lo$1;
  var $$x1__hi = hi$1;
  zeroDay__lo = $$x1__lo;
  zeroDay__hi = $$x1__hi;
  var adjust__lo = 0;
  var adjust__hi = 0;
  var this$4__lo = zeroDay__lo;
  var this$4__hi = zeroDay__hi;
  var ahi$1 = this$4__hi;
  if ((ahi$1 < 0)) {
    var b$2__lo = zeroDay__lo;
    var b$2__hi = zeroDay__hi;
    var bhi$2 = b$2__hi;
    var lo$2 = ((1 + b$2__lo) | 0);
    var hi$2 = ((lo$2 === 0) ? ((1 + bhi$2) | 0) : bhi$2);
    var value = this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE;
    var hi$3 = (value >> 31);
    var this$7 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$3 = this$7.divideImpl__I__I__I__I__I(lo$2, hi$2, value, hi$3);
    var hi$4 = this$7.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$4 = (((-1) + lo$3) | 0);
    var hi$5 = ((lo$4 !== (-1)) ? hi$4 : (((-1) + hi$4) | 0));
    var b0 = (65535 & lo$4);
    var b1 = ((lo$4 >>> 16) | 0);
    var a0b0 = $j_java$002elang$002eObject.$imul(400, b0);
    var a0b1 = $j_java$002elang$002eObject.$imul(400, b1);
    var lo$5 = ((a0b0 + (a0b1 << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$6 = (($j_java$002elang$002eObject.$imul(400, hi$5) + ((c1part >>> 16) | 0)) | 0);
    var $$x2__lo = lo$5;
    var $$x2__hi = hi$6;
    adjust__lo = $$x2__lo;
    adjust__hi = $$x2__hi;
    var this$12__lo = zeroDay__lo;
    var this$12__hi = zeroDay__hi;
    var lo$6 = ((-lo$4) | 0);
    var hi$7 = ((lo$4 !== 0) ? (~hi$5) : ((-hi$5) | 0));
    var value$1 = this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE;
    var hi$8 = (value$1 >> 31);
    var a0 = (65535 & lo$6);
    var a1 = ((lo$6 >>> 16) | 0);
    var b0$1 = (65535 & value$1);
    var b1$1 = ((value$1 >>> 16) | 0);
    var a0b0$1 = $j_java$002elang$002eObject.$imul(a0, b0$1);
    var a1b0 = $j_java$002elang$002eObject.$imul(a1, b0$1);
    var a0b1$1 = $j_java$002elang$002eObject.$imul(a0, b1$1);
    var lo$7 = ((a0b0$1 + (((a1b0 + a0b1$1) | 0) << 16)) | 0);
    var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
    var hi$9 = (((((((($j_java$002elang$002eObject.$imul(lo$6, hi$8) + $j_java$002elang$002eObject.$imul(hi$7, value$1)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0) | 0) >>> 16) | 0)) | 0);
    var alo$1 = this$12__lo;
    var ahi$2 = this$12__hi;
    var lo$8 = ((alo$1 + lo$7) | 0);
    var hi$10 = ((((-2147483648) ^ lo$8) < ((-2147483648) ^ alo$1)) ? ((1 + ((ahi$2 + hi$9) | 0)) | 0) : ((ahi$2 + hi$9) | 0));
    var $$x3__lo = lo$8;
    var $$x3__hi = hi$10;
    zeroDay__lo = $$x3__lo;
    zeroDay__hi = $$x3__hi
  };
  var b$3__lo = zeroDay__lo;
  var b$3__hi = zeroDay__hi;
  var blo = b$3__lo;
  var b0$2 = (65535 & blo);
  var b1$2 = ((blo >>> 16) | 0);
  var a0b0$2 = $j_java$002elang$002eObject.$imul(400, b0$2);
  var a0b1$2 = $j_java$002elang$002eObject.$imul(400, b1$2);
  var lo$9 = ((a0b0$2 + (a0b1$2 << 16)) | 0);
  var c1part$2 = ((((a0b0$2 >>> 16) | 0) + a0b1$2) | 0);
  var hi$11 = (($j_java$002elang$002eObject.$imul(400, b$3__hi) + ((c1part$2 >>> 16) | 0)) | 0);
  var lo$10 = ((591 + lo$9) | 0);
  var hi$12 = ((((-2147483648) ^ lo$10) < (-2147483057)) ? ((1 + hi$11) | 0) : hi$11);
  var value$2 = this.Ljava_time_LocalDate$__f_DAYS_PER_CYCLE;
  var hi$13 = (value$2 >> 31);
  var this$16 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$11 = this$16.divideImpl__I__I__I__I__I(lo$10, hi$12, value$2, hi$13);
  var hi$14 = this$16.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var yearEst__lo = lo$11;
  var yearEst__hi = hi$14;
  var this$26__lo = zeroDay__lo;
  var this$26__hi = zeroDay__hi;
  var b$4__lo = yearEst__lo;
  var b$4__hi = yearEst__hi;
  var blo$1 = b$4__lo;
  var b0$3 = (65535 & blo$1);
  var b1$3 = ((blo$1 >>> 16) | 0);
  var a0b0$3 = $j_java$002elang$002eObject.$imul(365, b0$3);
  var a0b1$3 = $j_java$002elang$002eObject.$imul(365, b1$3);
  var lo$12 = ((a0b0$3 + (a0b1$3 << 16)) | 0);
  var c1part$3 = ((((a0b0$3 >>> 16) | 0) + a0b1$3) | 0);
  var hi$15 = (($j_java$002elang$002eObject.$imul(365, b$4__hi) + ((c1part$3 >>> 16) | 0)) | 0);
  var this$17__lo = yearEst__lo;
  var this$17__hi = yearEst__hi;
  var this$18 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$13 = this$18.divideImpl__I__I__I__I__I(this$17__lo, this$17__hi, 4, 0);
  var hi$16 = this$18.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var lo$14 = ((lo$12 + lo$13) | 0);
  var hi$17 = ((((-2147483648) ^ lo$14) < ((-2147483648) ^ lo$12)) ? ((1 + ((hi$15 + hi$16) | 0)) | 0) : ((hi$15 + hi$16) | 0));
  var this$20__lo = yearEst__lo;
  var this$20__hi = yearEst__hi;
  var this$21 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$15 = this$21.divideImpl__I__I__I__I__I(this$20__lo, this$20__hi, 100, 0);
  var hi$18 = this$21.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var lo$16 = ((lo$14 - lo$15) | 0);
  var hi$19 = ((((-2147483648) ^ lo$16) > ((-2147483648) ^ lo$14)) ? (((-1) + ((hi$17 - hi$18) | 0)) | 0) : ((hi$17 - hi$18) | 0));
  var this$23__lo = yearEst__lo;
  var this$23__hi = yearEst__hi;
  var this$24 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$17 = this$24.divideImpl__I__I__I__I__I(this$23__lo, this$23__hi, 400, 0);
  var hi$20 = this$24.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var lo$18 = ((lo$16 + lo$17) | 0);
  var hi$21 = ((((-2147483648) ^ lo$18) < ((-2147483648) ^ lo$16)) ? ((1 + ((hi$19 + hi$20) | 0)) | 0) : ((hi$19 + hi$20) | 0));
  var alo$2 = this$26__lo;
  var ahi$3 = this$26__hi;
  var lo$19 = ((alo$2 - lo$18) | 0);
  var hi$22 = ((((-2147483648) ^ lo$19) > ((-2147483648) ^ alo$2)) ? (((-1) + ((ahi$3 - hi$21) | 0)) | 0) : ((ahi$3 - hi$21) | 0));
  var doyEst__lo = lo$19;
  var doyEst__hi = hi$22;
  var this$28__lo = doyEst__lo;
  var this$28__hi = doyEst__hi;
  var ahi$4 = this$28__hi;
  if ((ahi$4 < 0)) {
    var b$5__lo = yearEst__lo;
    var b$5__hi = yearEst__hi;
    var bhi$3 = b$5__hi;
    var lo$20 = (((-1) + b$5__lo) | 0);
    var hi$23 = ((lo$20 !== (-1)) ? bhi$3 : (((-1) + bhi$3) | 0));
    var $$x4__lo = lo$20;
    var $$x4__hi = hi$23;
    yearEst__lo = $$x4__lo;
    yearEst__hi = $$x4__hi;
    var this$39__lo = zeroDay__lo;
    var this$39__hi = zeroDay__hi;
    var b$6__lo = yearEst__lo;
    var b$6__hi = yearEst__hi;
    var blo$2 = b$6__lo;
    var b0$4 = (65535 & blo$2);
    var b1$4 = ((blo$2 >>> 16) | 0);
    var a0b0$4 = $j_java$002elang$002eObject.$imul(365, b0$4);
    var a0b1$4 = $j_java$002elang$002eObject.$imul(365, b1$4);
    var lo$21 = ((a0b0$4 + (a0b1$4 << 16)) | 0);
    var c1part$4 = ((((a0b0$4 >>> 16) | 0) + a0b1$4) | 0);
    var hi$24 = (($j_java$002elang$002eObject.$imul(365, b$6__hi) + ((c1part$4 >>> 16) | 0)) | 0);
    var this$30__lo = yearEst__lo;
    var this$30__hi = yearEst__hi;
    var this$31 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$22 = this$31.divideImpl__I__I__I__I__I(this$30__lo, this$30__hi, 4, 0);
    var hi$25 = this$31.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$23 = ((lo$21 + lo$22) | 0);
    var hi$26 = ((((-2147483648) ^ lo$23) < ((-2147483648) ^ lo$21)) ? ((1 + ((hi$24 + hi$25) | 0)) | 0) : ((hi$24 + hi$25) | 0));
    var this$33__lo = yearEst__lo;
    var this$33__hi = yearEst__hi;
    var this$34 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$24 = this$34.divideImpl__I__I__I__I__I(this$33__lo, this$33__hi, 100, 0);
    var hi$27 = this$34.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$25 = ((lo$23 - lo$24) | 0);
    var hi$28 = ((((-2147483648) ^ lo$25) > ((-2147483648) ^ lo$23)) ? (((-1) + ((hi$26 - hi$27) | 0)) | 0) : ((hi$26 - hi$27) | 0));
    var this$36__lo = yearEst__lo;
    var this$36__hi = yearEst__hi;
    var this$37 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$26 = this$37.divideImpl__I__I__I__I__I(this$36__lo, this$36__hi, 400, 0);
    var hi$29 = this$37.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$27 = ((lo$25 + lo$26) | 0);
    var hi$30 = ((((-2147483648) ^ lo$27) < ((-2147483648) ^ lo$25)) ? ((1 + ((hi$28 + hi$29) | 0)) | 0) : ((hi$28 + hi$29) | 0));
    var alo$3 = this$39__lo;
    var ahi$5 = this$39__hi;
    var lo$28 = ((alo$3 - lo$27) | 0);
    var hi$31 = ((((-2147483648) ^ lo$28) > ((-2147483648) ^ alo$3)) ? (((-1) + ((ahi$5 - hi$30) | 0)) | 0) : ((ahi$5 - hi$30) | 0));
    var $$x5__lo = lo$28;
    var $$x5__hi = hi$31;
    doyEst__lo = $$x5__lo;
    doyEst__hi = $$x5__hi
  };
  var this$41__lo = yearEst__lo;
  var this$41__hi = yearEst__hi;
  var b$7__lo = adjust__lo;
  var b$7__hi = adjust__hi;
  var alo$4 = this$41__lo;
  var ahi$6 = this$41__hi;
  var bhi$4 = b$7__hi;
  var lo$29 = ((alo$4 + b$7__lo) | 0);
  var hi$32 = ((((-2147483648) ^ lo$29) < ((-2147483648) ^ alo$4)) ? ((1 + ((ahi$6 + bhi$4) | 0)) | 0) : ((ahi$6 + bhi$4) | 0));
  var $$x6__lo = lo$29;
  var $$x6__hi = hi$32;
  yearEst__lo = $$x6__lo;
  yearEst__hi = $$x6__hi;
  var this$43__lo = doyEst__lo;
  var this$43__hi = doyEst__hi;
  var marchDoy0 = this$43__lo;
  var marchMonth0 = ((((2 + $j_java$002elang$002eObject.$imul(5, marchDoy0)) | 0) / 153) | 0);
  var month = ((1 + ((((2 + marchMonth0) | 0) % 12) | 0)) | 0);
  var dom = ((1 + ((marchDoy0 - ((((5 + $j_java$002elang$002eObject.$imul(306, marchMonth0)) | 0) / 10) | 0)) | 0)) | 0);
  var this$45__lo = yearEst__lo;
  var this$45__hi = yearEst__hi;
  var value$3 = ((marchMonth0 / 10) | 0);
  var hi$33 = (value$3 >> 31);
  var alo$5 = this$45__lo;
  var ahi$7 = this$45__hi;
  var lo$30 = ((alo$5 + value$3) | 0);
  var hi$34 = ((((-2147483648) ^ lo$30) < ((-2147483648) ^ alo$5)) ? ((1 + ((ahi$7 + hi$33) | 0)) | 0) : ((ahi$7 + hi$33) | 0));
  var $$x7__lo = lo$30;
  var $$x7__hi = hi$34;
  yearEst__lo = $$x7__lo;
  yearEst__hi = $$x7__hi;
  var this$47 = $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField();
  var value$4__lo = yearEst__lo;
  var value$4__hi = yearEst__hi;
  var year = this$47.Ljava_time_temporal_ChronoField__f__range.checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(new $j_java$002elang$002eObject.$c_RTLong(value$4__lo, value$4__hi), this$47);
  return new $c_Ljava_time_LocalDate(year, month, dom)
});
$c_Ljava_time_LocalDate$.prototype.from__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalDate = (function(temporal) {
  var date = temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery());
  if ((date === null)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Unable to obtain LocalDate from TemporalAccessor: " + temporal) + ", type ") + $j_java$002elang$002eObject.$objectClassName(temporal)))
  };
  return date
});
var $d_Ljava_time_LocalDate$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalDate$: 0
}, false, "java.time.LocalDate$", {
  Ljava_time_LocalDate$: 1,
  O: 1
});
export { $d_Ljava_time_LocalDate$ as $d_Ljava_time_LocalDate$ };
$c_Ljava_time_LocalDate$.prototype.$classData = $d_Ljava_time_LocalDate$;
var $n_Ljava_time_LocalDate$;
function $m_Ljava_time_LocalDate$() {
  if ((!$n_Ljava_time_LocalDate$)) {
    $n_Ljava_time_LocalDate$ = new $c_Ljava_time_LocalDate$()
  };
  return $n_Ljava_time_LocalDate$
}
export { $m_Ljava_time_LocalDate$ as $m_Ljava_time_LocalDate$ };
/** @constructor */
function $c_Ljava_time_LocalDateTime$() {
  this.Ljava_time_LocalDateTime$__f_MIN$lzy1 = null;
  this.Ljava_time_LocalDateTime$__f_MINbitmap$1 = false;
  this.Ljava_time_LocalDateTime$__f_MAX$lzy1 = null;
  this.Ljava_time_LocalDateTime$__f_MAXbitmap$1 = false
}
export { $c_Ljava_time_LocalDateTime$ as $c_Ljava_time_LocalDateTime$ };
$c_Ljava_time_LocalDateTime$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_LocalDateTime$.prototype.constructor = $c_Ljava_time_LocalDateTime$;
/** @constructor */
function $h_Ljava_time_LocalDateTime$() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalDateTime$ as $h_Ljava_time_LocalDateTime$ };
$h_Ljava_time_LocalDateTime$.prototype = $c_Ljava_time_LocalDateTime$.prototype;
$c_Ljava_time_LocalDateTime$.prototype.ofEpochSecond__J__I__Ljava_time_ZoneOffset__Ljava_time_LocalDateTime = (function(epochSecond, nanoOfSecond, offset) {
  if ((offset === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "offset")
  };
  var value = offset.Ljava_time_ZoneOffset__f_totalSeconds;
  var hi = (value >> 31);
  var alo = epochSecond.RTLong__f_lo;
  var ahi = epochSecond.RTLong__f_hi;
  var lo = ((alo + value) | 0);
  var hi$1 = ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi) | 0)) | 0) : ((ahi + hi) | 0));
  var value$1 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_DAY;
  var hi$2 = (value$1 >> 31);
  var t = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorDiv__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo, hi$1), new $j_java$002elang$002eObject.$c_RTLong(value$1, hi$2));
  var lo$1 = t.RTLong__f_lo;
  var hi$3 = t.RTLong__f_hi;
  var value$2 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_DAY;
  var hi$4 = (value$2 >> 31);
  var this$6 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorMod__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo, hi$1), new $j_java$002elang$002eObject.$c_RTLong(value$2, hi$4));
  var secsOfDay = this$6.RTLong__f_lo;
  var date = $m_Ljava_time_LocalDate$().ofEpochDay__J__Ljava_time_LocalDate(new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$3));
  var $$x1 = $m_Ljava_time_LocalTime$();
  var hi$5 = (secsOfDay >> 31);
  var time = $$x1.ofSecondOfDay__J__I__Ljava_time_LocalTime(new $j_java$002elang$002eObject.$c_RTLong(secsOfDay, hi$5), nanoOfSecond);
  return new $c_Ljava_time_LocalDateTime(date, time)
});
var $d_Ljava_time_LocalDateTime$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalDateTime$: 0
}, false, "java.time.LocalDateTime$", {
  Ljava_time_LocalDateTime$: 1,
  O: 1
});
export { $d_Ljava_time_LocalDateTime$ as $d_Ljava_time_LocalDateTime$ };
$c_Ljava_time_LocalDateTime$.prototype.$classData = $d_Ljava_time_LocalDateTime$;
var $n_Ljava_time_LocalDateTime$;
function $m_Ljava_time_LocalDateTime$() {
  if ((!$n_Ljava_time_LocalDateTime$)) {
    $n_Ljava_time_LocalDateTime$ = new $c_Ljava_time_LocalDateTime$()
  };
  return $n_Ljava_time_LocalDateTime$
}
export { $m_Ljava_time_LocalDateTime$ as $m_Ljava_time_LocalDateTime$ };
function $p_Ljava_time_LocalTime$__HOURS__ALjava_time_LocalTime($thiz) {
  if ((!$thiz.Ljava_time_LocalTime$__f_HOURSbitmap$1)) {
    var dimensions = new $j_java$002elang$002eObject.$ac_I(new Int32Array([24]));
    var hours = $j_java$002elang$002eObject.$m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_Ljava_time_LocalTime.getClassOf(), dimensions);
    var i = 0;
    while ((i < hours.u.length)) {
      hours.u[i] = new $c_Ljava_time_LocalTime(i, 0, 0, 0);
      i = ((1 + i) | 0)
    };
    $thiz.Ljava_time_LocalTime$__f_HOURS$lzy1 = hours;
    $thiz.Ljava_time_LocalTime$__f_HOURSbitmap$1 = true
  };
  return $thiz.Ljava_time_LocalTime$__f_HOURS$lzy1
}
export { $p_Ljava_time_LocalTime$__HOURS__ALjava_time_LocalTime as $p_Ljava_time_LocalTime$__HOURS__ALjava_time_LocalTime };
/** @constructor */
function $c_Ljava_time_LocalTime$() {
  this.Ljava_time_LocalTime$__f_HOURS$lzy1 = null;
  this.Ljava_time_LocalTime$__f_HOURSbitmap$1 = false;
  this.Ljava_time_LocalTime$__f_MIN$lzy1 = null;
  this.Ljava_time_LocalTime$__f_MINbitmap$1 = false;
  this.Ljava_time_LocalTime$__f_MAX$lzy1 = null;
  this.Ljava_time_LocalTime$__f_MAXbitmap$1 = false;
  this.Ljava_time_LocalTime$__f_MIDNIGHT$lzy1 = null;
  this.Ljava_time_LocalTime$__f_MIDNIGHTbitmap$1 = false;
  this.Ljava_time_LocalTime$__f_NOON$lzy1 = null;
  this.Ljava_time_LocalTime$__f_NOONbitmap$1 = false;
  this.Ljava_time_LocalTime$__f_HOURS_PER_DAY = 0;
  this.Ljava_time_LocalTime$__f_MINUTES_PER_HOUR = 0;
  this.Ljava_time_LocalTime$__f_MINUTES_PER_DAY = 0;
  this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE = 0;
  this.Ljava_time_LocalTime$__f_SECONDS_PER_HOUR = 0;
  this.Ljava_time_LocalTime$__f_SECONDS_PER_DAY = 0;
  this.Ljava_time_LocalTime$__f_MILLIS_PER_DAY = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_LocalTime$__f_MICROS_PER_DAY = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_LocalTime$__f_NANOS_PER_SECOND = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_LocalTime$__f_NANOS_PER_MINUTE = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_LocalTime$__f_NANOS_PER_HOUR = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_LocalTime$__f_NANOS_PER_DAY = $j_java$002elang$002eObject.$L0;
  $n_Ljava_time_LocalTime$ = this;
  this.Ljava_time_LocalTime$__f_HOURS_PER_DAY = 24;
  this.Ljava_time_LocalTime$__f_MINUTES_PER_HOUR = 60;
  this.Ljava_time_LocalTime$__f_MINUTES_PER_DAY = $j_java$002elang$002eObject.$imul(this.Ljava_time_LocalTime$__f_MINUTES_PER_HOUR, this.Ljava_time_LocalTime$__f_HOURS_PER_DAY);
  this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE = 60;
  this.Ljava_time_LocalTime$__f_SECONDS_PER_HOUR = $j_java$002elang$002eObject.$imul(this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE, this.Ljava_time_LocalTime$__f_MINUTES_PER_HOUR);
  this.Ljava_time_LocalTime$__f_SECONDS_PER_DAY = $j_java$002elang$002eObject.$imul(this.Ljava_time_LocalTime$__f_SECONDS_PER_HOUR, this.Ljava_time_LocalTime$__f_HOURS_PER_DAY);
  var value = this.Ljava_time_LocalTime$__f_SECONDS_PER_DAY;
  var hi = (value >> 31);
  var b0 = (65535 & value);
  var b1 = ((value >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(1000, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(1000, b1);
  var lo = ((a0b0 + (a0b1 << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (($j_java$002elang$002eObject.$imul(1000, hi) + ((c1part >>> 16) | 0)) | 0);
  this.Ljava_time_LocalTime$__f_MILLIS_PER_DAY = new $j_java$002elang$002eObject.$c_RTLong(lo, hi$1);
  var value$1 = this.Ljava_time_LocalTime$__f_SECONDS_PER_DAY;
  var hi$2 = (value$1 >> 31);
  var b0$1 = (65535 & value$1);
  var b1$1 = ((value$1 >>> 16) | 0);
  var a0b0$1 = $j_java$002elang$002eObject.$imul(16960, b0$1);
  var a1b0 = $j_java$002elang$002eObject.$imul(15, b0$1);
  var a0b1$1 = $j_java$002elang$002eObject.$imul(16960, b1$1);
  var lo$1 = ((a0b0$1 + (((a1b0 + a0b1$1) | 0) << 16)) | 0);
  var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
  var hi$3 = (((((($j_java$002elang$002eObject.$imul(1000000, hi$2) + $j_java$002elang$002eObject.$imul(15, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0) | 0) >>> 16) | 0)) | 0);
  this.Ljava_time_LocalTime$__f_MICROS_PER_DAY = new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$3);
  this.Ljava_time_LocalTime$__f_NANOS_PER_SECOND = new $j_java$002elang$002eObject.$c_RTLong(1000000000, 0);
  var this$4 = this.Ljava_time_LocalTime$__f_NANOS_PER_SECOND;
  var value$2 = this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE;
  var hi$4 = (value$2 >> 31);
  var alo = this$4.RTLong__f_lo;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0$2 = (65535 & value$2);
  var b1$2 = ((value$2 >>> 16) | 0);
  var a0b0$2 = $j_java$002elang$002eObject.$imul(a0, b0$2);
  var a1b0$1 = $j_java$002elang$002eObject.$imul(a1, b0$2);
  var a0b1$2 = $j_java$002elang$002eObject.$imul(a0, b1$2);
  var lo$2 = ((a0b0$2 + (((a1b0$1 + a0b1$2) | 0) << 16)) | 0);
  var c1part$2 = ((((a0b0$2 >>> 16) | 0) + a0b1$2) | 0);
  var hi$5 = (((((((($j_java$002elang$002eObject.$imul(alo, hi$4) + $j_java$002elang$002eObject.$imul(this$4.RTLong__f_hi, value$2)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1$2)) | 0) + ((c1part$2 >>> 16) | 0)) | 0) + (((((65535 & c1part$2) + a1b0$1) | 0) >>> 16) | 0)) | 0);
  this.Ljava_time_LocalTime$__f_NANOS_PER_MINUTE = new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$5);
  var this$6 = this.Ljava_time_LocalTime$__f_NANOS_PER_MINUTE;
  var value$3 = this.Ljava_time_LocalTime$__f_MINUTES_PER_HOUR;
  var hi$6 = (value$3 >> 31);
  var alo$1 = this$6.RTLong__f_lo;
  var a0$1 = (65535 & alo$1);
  var a1$1 = ((alo$1 >>> 16) | 0);
  var b0$3 = (65535 & value$3);
  var b1$3 = ((value$3 >>> 16) | 0);
  var a0b0$3 = $j_java$002elang$002eObject.$imul(a0$1, b0$3);
  var a1b0$2 = $j_java$002elang$002eObject.$imul(a1$1, b0$3);
  var a0b1$3 = $j_java$002elang$002eObject.$imul(a0$1, b1$3);
  var lo$3 = ((a0b0$3 + (((a1b0$2 + a0b1$3) | 0) << 16)) | 0);
  var c1part$3 = ((((a0b0$3 >>> 16) | 0) + a0b1$3) | 0);
  var hi$7 = (((((((($j_java$002elang$002eObject.$imul(alo$1, hi$6) + $j_java$002elang$002eObject.$imul(this$6.RTLong__f_hi, value$3)) | 0) + $j_java$002elang$002eObject.$imul(a1$1, b1$3)) | 0) + ((c1part$3 >>> 16) | 0)) | 0) + (((((65535 & c1part$3) + a1b0$2) | 0) >>> 16) | 0)) | 0);
  this.Ljava_time_LocalTime$__f_NANOS_PER_HOUR = new $j_java$002elang$002eObject.$c_RTLong(lo$3, hi$7);
  var this$8 = this.Ljava_time_LocalTime$__f_NANOS_PER_HOUR;
  var value$4 = this.Ljava_time_LocalTime$__f_HOURS_PER_DAY;
  var hi$8 = (value$4 >> 31);
  var alo$2 = this$8.RTLong__f_lo;
  var a0$2 = (65535 & alo$2);
  var a1$2 = ((alo$2 >>> 16) | 0);
  var b0$4 = (65535 & value$4);
  var b1$4 = ((value$4 >>> 16) | 0);
  var a0b0$4 = $j_java$002elang$002eObject.$imul(a0$2, b0$4);
  var a1b0$3 = $j_java$002elang$002eObject.$imul(a1$2, b0$4);
  var a0b1$4 = $j_java$002elang$002eObject.$imul(a0$2, b1$4);
  var lo$4 = ((a0b0$4 + (((a1b0$3 + a0b1$4) | 0) << 16)) | 0);
  var c1part$4 = ((((a0b0$4 >>> 16) | 0) + a0b1$4) | 0);
  var hi$9 = (((((((($j_java$002elang$002eObject.$imul(alo$2, hi$8) + $j_java$002elang$002eObject.$imul(this$8.RTLong__f_hi, value$4)) | 0) + $j_java$002elang$002eObject.$imul(a1$2, b1$4)) | 0) + ((c1part$4 >>> 16) | 0)) | 0) + (((((65535 & c1part$4) + a1b0$3) | 0) >>> 16) | 0)) | 0);
  this.Ljava_time_LocalTime$__f_NANOS_PER_DAY = new $j_java$002elang$002eObject.$c_RTLong(lo$4, hi$9)
}
export { $c_Ljava_time_LocalTime$ as $c_Ljava_time_LocalTime$ };
$c_Ljava_time_LocalTime$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_LocalTime$.prototype.constructor = $c_Ljava_time_LocalTime$;
/** @constructor */
function $h_Ljava_time_LocalTime$() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalTime$ as $h_Ljava_time_LocalTime$ };
$h_Ljava_time_LocalTime$.prototype = $c_Ljava_time_LocalTime$.prototype;
$c_Ljava_time_LocalTime$.prototype.ofSecondOfDay__J__I__Ljava_time_LocalTime = (function(secondOfDay, nanoOfSecond) {
  var lo = secondOfDay.RTLong__f_lo;
  var hi = secondOfDay.RTLong__f_hi;
  var _secondOfDay__lo = lo;
  var _secondOfDay__hi = hi;
  var this$1 = $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField();
  var value__lo = _secondOfDay__lo;
  var value__hi = _secondOfDay__hi;
  this$1.Ljava_time_temporal_ChronoField__f__range.checkValidValue__J__Ljava_time_temporal_TemporalField__J(new $j_java$002elang$002eObject.$c_RTLong(value__lo, value__hi), this$1);
  var this$3 = $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField();
  var hi$1 = (nanoOfSecond >> 31);
  this$3.Ljava_time_temporal_ChronoField__f__range.checkValidValue__J__Ljava_time_temporal_TemporalField__J(new $j_java$002elang$002eObject.$c_RTLong(nanoOfSecond, hi$1), this$3);
  var this$5__lo = _secondOfDay__lo;
  var this$5__hi = _secondOfDay__hi;
  var value$1 = this.Ljava_time_LocalTime$__f_SECONDS_PER_HOUR;
  var hi$2 = (value$1 >> 31);
  var this$6 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$1 = this$6.divideImpl__I__I__I__I__I(this$5__lo, this$5__hi, value$1, hi$2);
  var this$8__lo = _secondOfDay__lo;
  var this$8__hi = _secondOfDay__hi;
  var value$2 = $j_java$002elang$002eObject.$imul(lo$1, this.Ljava_time_LocalTime$__f_SECONDS_PER_HOUR);
  var hi$4 = (value$2 >> 31);
  var alo = this$8__lo;
  var ahi = this$8__hi;
  var lo$2 = ((alo - value$2) | 0);
  var hi$5 = ((((-2147483648) ^ lo$2) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - hi$4) | 0)) | 0) : ((ahi - hi$4) | 0));
  var $$x1__lo = lo$2;
  var $$x1__hi = hi$5;
  _secondOfDay__lo = $$x1__lo;
  _secondOfDay__hi = $$x1__hi;
  var this$11__lo = _secondOfDay__lo;
  var this$11__hi = _secondOfDay__hi;
  var value$3 = this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE;
  var hi$6 = (value$3 >> 31);
  var this$12 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$3 = this$12.divideImpl__I__I__I__I__I(this$11__lo, this$11__hi, value$3, hi$6);
  var this$14__lo = _secondOfDay__lo;
  var this$14__hi = _secondOfDay__hi;
  var value$4 = $j_java$002elang$002eObject.$imul(lo$3, this.Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE);
  var hi$8 = (value$4 >> 31);
  var alo$1 = this$14__lo;
  var ahi$1 = this$14__hi;
  var lo$4 = ((alo$1 - value$4) | 0);
  var hi$9 = ((((-2147483648) ^ lo$4) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$1 - hi$8) | 0)) | 0) : ((ahi$1 - hi$8) | 0));
  var $$x2__lo = lo$4;
  var $$x2__hi = hi$9;
  _secondOfDay__lo = $$x2__lo;
  _secondOfDay__hi = $$x2__hi;
  var this$16__lo = _secondOfDay__lo;
  var this$16__hi = _secondOfDay__hi;
  return this.java$time$LocalTime$$$create__I__I__I__I__Ljava_time_LocalTime(lo$1, lo$3, this$16__lo, nanoOfSecond)
});
$c_Ljava_time_LocalTime$.prototype.ofNanoOfDay__J__Ljava_time_LocalTime = (function(nanoOfDay) {
  var lo = nanoOfDay.RTLong__f_lo;
  var hi = nanoOfDay.RTLong__f_hi;
  var _nanoOfDay__lo = lo;
  var _nanoOfDay__hi = hi;
  var this$1 = $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField();
  var value__lo = _nanoOfDay__lo;
  var value__hi = _nanoOfDay__hi;
  this$1.Ljava_time_temporal_ChronoField__f__range.checkValidValue__J__Ljava_time_temporal_TemporalField__J(new $j_java$002elang$002eObject.$c_RTLong(value__lo, value__hi), this$1);
  var this$2__lo = _nanoOfDay__lo;
  var this$2__hi = _nanoOfDay__hi;
  var b = this.Ljava_time_LocalTime$__f_NANOS_PER_HOUR;
  var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$1 = this$3.divideImpl__I__I__I__I__I(this$2__lo, this$2__hi, b.RTLong__f_lo, b.RTLong__f_hi);
  var this$5__lo = _nanoOfDay__lo;
  var this$5__hi = _nanoOfDay__hi;
  var hi$2 = (lo$1 >> 31);
  var b$1 = this.Ljava_time_LocalTime$__f_NANOS_PER_HOUR;
  var blo = b$1.RTLong__f_lo;
  var a0 = (65535 & lo$1);
  var a1 = ((lo$1 >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(a0, b0);
  var a1b0 = $j_java$002elang$002eObject.$imul(a1, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(a0, b1);
  var lo$2 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$3 = (((((((($j_java$002elang$002eObject.$imul(lo$1, b$1.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi$2, blo)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  var alo = this$5__lo;
  var ahi = this$5__hi;
  var lo$3 = ((alo - lo$2) | 0);
  var hi$4 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - hi$3) | 0)) | 0) : ((ahi - hi$3) | 0));
  var $$x1__lo = lo$3;
  var $$x1__hi = hi$4;
  _nanoOfDay__lo = $$x1__lo;
  _nanoOfDay__hi = $$x1__hi;
  var this$7__lo = _nanoOfDay__lo;
  var this$7__hi = _nanoOfDay__hi;
  var b$2 = this.Ljava_time_LocalTime$__f_NANOS_PER_MINUTE;
  var this$8 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$4 = this$8.divideImpl__I__I__I__I__I(this$7__lo, this$7__hi, b$2.RTLong__f_lo, b$2.RTLong__f_hi);
  var this$10__lo = _nanoOfDay__lo;
  var this$10__hi = _nanoOfDay__hi;
  var hi$6 = (lo$4 >> 31);
  var b$3 = this.Ljava_time_LocalTime$__f_NANOS_PER_MINUTE;
  var blo$1 = b$3.RTLong__f_lo;
  var a0$1 = (65535 & lo$4);
  var a1$1 = ((lo$4 >>> 16) | 0);
  var b0$1 = (65535 & blo$1);
  var b1$1 = ((blo$1 >>> 16) | 0);
  var a0b0$1 = $j_java$002elang$002eObject.$imul(a0$1, b0$1);
  var a1b0$1 = $j_java$002elang$002eObject.$imul(a1$1, b0$1);
  var a0b1$1 = $j_java$002elang$002eObject.$imul(a0$1, b1$1);
  var lo$5 = ((a0b0$1 + (((a1b0$1 + a0b1$1) | 0) << 16)) | 0);
  var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
  var hi$7 = (((((((($j_java$002elang$002eObject.$imul(lo$4, b$3.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi$6, blo$1)) | 0) + $j_java$002elang$002eObject.$imul(a1$1, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0$1) | 0) >>> 16) | 0)) | 0);
  var alo$1 = this$10__lo;
  var ahi$1 = this$10__hi;
  var lo$6 = ((alo$1 - lo$5) | 0);
  var hi$8 = ((((-2147483648) ^ lo$6) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$1 - hi$7) | 0)) | 0) : ((ahi$1 - hi$7) | 0));
  var $$x2__lo = lo$6;
  var $$x2__hi = hi$8;
  _nanoOfDay__lo = $$x2__lo;
  _nanoOfDay__hi = $$x2__hi;
  var this$12__lo = _nanoOfDay__lo;
  var this$12__hi = _nanoOfDay__hi;
  var b$4 = this.Ljava_time_LocalTime$__f_NANOS_PER_SECOND;
  var this$13 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$7 = this$13.divideImpl__I__I__I__I__I(this$12__lo, this$12__hi, b$4.RTLong__f_lo, b$4.RTLong__f_hi);
  var this$15__lo = _nanoOfDay__lo;
  var this$15__hi = _nanoOfDay__hi;
  var hi$10 = (lo$7 >> 31);
  var b$5 = this.Ljava_time_LocalTime$__f_NANOS_PER_SECOND;
  var blo$2 = b$5.RTLong__f_lo;
  var a0$2 = (65535 & lo$7);
  var a1$2 = ((lo$7 >>> 16) | 0);
  var b0$2 = (65535 & blo$2);
  var b1$2 = ((blo$2 >>> 16) | 0);
  var a0b0$2 = $j_java$002elang$002eObject.$imul(a0$2, b0$2);
  var a1b0$2 = $j_java$002elang$002eObject.$imul(a1$2, b0$2);
  var a0b1$2 = $j_java$002elang$002eObject.$imul(a0$2, b1$2);
  var lo$8 = ((a0b0$2 + (((a1b0$2 + a0b1$2) | 0) << 16)) | 0);
  var c1part$2 = ((((a0b0$2 >>> 16) | 0) + a0b1$2) | 0);
  var hi$11 = (((((((($j_java$002elang$002eObject.$imul(lo$7, b$5.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi$10, blo$2)) | 0) + $j_java$002elang$002eObject.$imul(a1$2, b1$2)) | 0) + ((c1part$2 >>> 16) | 0)) | 0) + (((((65535 & c1part$2) + a1b0$2) | 0) >>> 16) | 0)) | 0);
  var alo$2 = this$15__lo;
  var ahi$2 = this$15__hi;
  var lo$9 = ((alo$2 - lo$8) | 0);
  var hi$12 = ((((-2147483648) ^ lo$9) > ((-2147483648) ^ alo$2)) ? (((-1) + ((ahi$2 - hi$11) | 0)) | 0) : ((ahi$2 - hi$11) | 0));
  var $$x3__lo = lo$9;
  var $$x3__hi = hi$12;
  _nanoOfDay__lo = $$x3__lo;
  _nanoOfDay__hi = $$x3__hi;
  var this$17__lo = _nanoOfDay__lo;
  var this$17__hi = _nanoOfDay__hi;
  return this.java$time$LocalTime$$$create__I__I__I__I__Ljava_time_LocalTime(lo$1, lo$4, lo$7, this$17__lo)
});
$c_Ljava_time_LocalTime$.prototype.java$time$LocalTime$$$create__I__I__I__I__Ljava_time_LocalTime = (function(hour, minute, second, nanoOfSecond) {
  return ((((minute | second) | nanoOfSecond) === 0) ? $p_Ljava_time_LocalTime$__HOURS__ALjava_time_LocalTime(this).u[hour] : new $c_Ljava_time_LocalTime(hour, minute, second, nanoOfSecond))
});
var $d_Ljava_time_LocalTime$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalTime$: 0
}, false, "java.time.LocalTime$", {
  Ljava_time_LocalTime$: 1,
  O: 1
});
export { $d_Ljava_time_LocalTime$ as $d_Ljava_time_LocalTime$ };
$c_Ljava_time_LocalTime$.prototype.$classData = $d_Ljava_time_LocalTime$;
var $n_Ljava_time_LocalTime$;
function $m_Ljava_time_LocalTime$() {
  if ((!$n_Ljava_time_LocalTime$)) {
    $n_Ljava_time_LocalTime$ = new $c_Ljava_time_LocalTime$()
  };
  return $n_Ljava_time_LocalTime$
}
export { $m_Ljava_time_LocalTime$ as $m_Ljava_time_LocalTime$ };
function $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map($thiz) {
  if ((!$thiz.Ljava_time_ZoneOffset$__f_SECONDS_CACHEbitmap$1)) {
    $thiz.Ljava_time_ZoneOffset$__f_SECONDS_CACHE$lzy1 = $j_java$002eutil$002eAbstractMap.$ct_ju_HashMap__(new $j_java$002eutil$002eAbstractMap.$c_ju_HashMap());
    $thiz.Ljava_time_ZoneOffset$__f_SECONDS_CACHEbitmap$1 = true
  };
  return $thiz.Ljava_time_ZoneOffset$__f_SECONDS_CACHE$lzy1
}
export { $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map as $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map };
function $p_Ljava_time_ZoneOffset$__ID_CACHE__ju_Map($thiz) {
  if ((!$thiz.Ljava_time_ZoneOffset$__f_ID_CACHEbitmap$1)) {
    $thiz.Ljava_time_ZoneOffset$__f_ID_CACHE$lzy1 = $j_java$002eutil$002eAbstractMap.$ct_ju_HashMap__(new $j_java$002eutil$002eAbstractMap.$c_ju_HashMap());
    $thiz.Ljava_time_ZoneOffset$__f_ID_CACHEbitmap$1 = true
  };
  return $thiz.Ljava_time_ZoneOffset$__f_ID_CACHE$lzy1
}
export { $p_Ljava_time_ZoneOffset$__ID_CACHE__ju_Map as $p_Ljava_time_ZoneOffset$__ID_CACHE__ju_Map };
/** @constructor */
function $c_Ljava_time_ZoneOffset$() {
  this.Ljava_time_ZoneOffset$__f_SECONDS_CACHE$lzy1 = null;
  this.Ljava_time_ZoneOffset$__f_SECONDS_CACHEbitmap$1 = false;
  this.Ljava_time_ZoneOffset$__f_ID_CACHE$lzy1 = null;
  this.Ljava_time_ZoneOffset$__f_ID_CACHEbitmap$1 = false;
  this.Ljava_time_ZoneOffset$__f_SECONDS_PER_HOUR = 0;
  this.Ljava_time_ZoneOffset$__f_SECONDS_PER_MINUTE = 0;
  this.Ljava_time_ZoneOffset$__f_MINUTES_PER_HOUR = 0;
  this.Ljava_time_ZoneOffset$__f_MAX_SECONDS = 0;
  this.Ljava_time_ZoneOffset$__f_UTC$lzy1 = null;
  this.Ljava_time_ZoneOffset$__f_UTCbitmap$1 = false;
  this.Ljava_time_ZoneOffset$__f_MIN$lzy1 = null;
  this.Ljava_time_ZoneOffset$__f_MINbitmap$1 = false;
  this.Ljava_time_ZoneOffset$__f_MAX$lzy1 = null;
  this.Ljava_time_ZoneOffset$__f_MAXbitmap$1 = false;
  $n_Ljava_time_ZoneOffset$ = this;
  this.Ljava_time_ZoneOffset$__f_SECONDS_PER_HOUR = 3600;
  this.Ljava_time_ZoneOffset$__f_SECONDS_PER_MINUTE = 60;
  this.Ljava_time_ZoneOffset$__f_MINUTES_PER_HOUR = 60;
  this.Ljava_time_ZoneOffset$__f_MAX_SECONDS = $j_java$002elang$002eObject.$imul(18, this.Ljava_time_ZoneOffset$__f_SECONDS_PER_HOUR)
}
export { $c_Ljava_time_ZoneOffset$ as $c_Ljava_time_ZoneOffset$ };
$c_Ljava_time_ZoneOffset$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_ZoneOffset$.prototype.constructor = $c_Ljava_time_ZoneOffset$;
/** @constructor */
function $h_Ljava_time_ZoneOffset$() {
  /*<skip>*/
}
export { $h_Ljava_time_ZoneOffset$ as $h_Ljava_time_ZoneOffset$ };
$h_Ljava_time_ZoneOffset$.prototype = $c_Ljava_time_ZoneOffset$.prototype;
$c_Ljava_time_ZoneOffset$.prototype.UTC__Ljava_time_ZoneOffset = (function() {
  if ((!this.Ljava_time_ZoneOffset$__f_UTCbitmap$1)) {
    this.Ljava_time_ZoneOffset$__f_UTC$lzy1 = $m_Ljava_time_ZoneOffset$().ofTotalSeconds__I__Ljava_time_ZoneOffset(0);
    this.Ljava_time_ZoneOffset$__f_UTCbitmap$1 = true
  };
  return this.Ljava_time_ZoneOffset$__f_UTC$lzy1
});
$c_Ljava_time_ZoneOffset$.prototype.ofTotalSeconds__I__Ljava_time_ZoneOffset = (function(totalSeconds) {
  if ((((totalSeconds < 0) ? ((-totalSeconds) | 0) : totalSeconds) > this.Ljava_time_ZoneOffset$__f_MAX_SECONDS)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), "Zone offset not in valid range: -18:00 to +18:00")
  } else if (($j_java$002elang$002eObject.$intMod(totalSeconds, $j_java$002elang$002eObject.$imul(15, this.Ljava_time_ZoneOffset$__f_SECONDS_PER_MINUTE)) === 0)) {
    var this$3 = $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map(this);
    var result = $j_java$002eutil$002eAbstractMap.$p_ju_HashMap__getOrDefaultImpl__O__O__O(this$3, totalSeconds, null);
    if ((result === null)) {
      result = new $c_Ljava_time_ZoneOffset(totalSeconds);
      var this$4 = $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map(this);
      var value = result;
      this$4.java$util$HashMap$$put0__O__O__I__Z__O(totalSeconds, value, (totalSeconds ^ ((totalSeconds >>> 16) | 0)), false);
      var this$6 = $p_Ljava_time_ZoneOffset$__SECONDS_CACHE__ju_Map(this);
      result = $j_java$002eutil$002eAbstractMap.$p_ju_HashMap__getOrDefaultImpl__O__O__O(this$6, totalSeconds, null);
      var this$7 = $p_Ljava_time_ZoneOffset$__ID_CACHE__ju_Map(this);
      var key = result.Ljava_time_ZoneOffset__f_id;
      var value$1 = result;
      if ((key === null)) {
        var $$x1 = 0
      } else {
        var originalHash = $j_java$002elang$002eObject.$f_T__hashCode__I(key);
        var $$x1 = (originalHash ^ ((originalHash >>> 16) | 0))
      };
      this$7.java$util$HashMap$$put0__O__O__I__Z__O(key, value$1, $$x1, false)
    };
    return result
  } else {
    return new $c_Ljava_time_ZoneOffset(totalSeconds)
  }
});
$c_Ljava_time_ZoneOffset$.prototype.java$time$ZoneOffset$$$buildId__I__T = (function(totalSeconds) {
  if ((totalSeconds === 0)) {
    return "Z"
  } else {
    var absTotalSeconds = ((totalSeconds < 0) ? ((-totalSeconds) | 0) : totalSeconds);
    var buf = $j_java$002elang$002eObject.$ct_scm_StringBuilder__(new $j_java$002elang$002eObject.$c_scm_StringBuilder());
    var absHours = $j_java$002elang$002eObject.$intDiv(absTotalSeconds, this.Ljava_time_ZoneOffset$__f_SECONDS_PER_HOUR);
    var absMinutes = $j_java$002elang$002eObject.$intMod($j_java$002elang$002eObject.$intDiv(absTotalSeconds, this.Ljava_time_ZoneOffset$__f_SECONDS_PER_MINUTE), this.Ljava_time_ZoneOffset$__f_MINUTES_PER_HOUR);
    buf.append__T__scm_StringBuilder(((totalSeconds < 0) ? "-" : "+")).append__T__scm_StringBuilder(((absHours < 10) ? "0" : "")).append__I__scm_StringBuilder(absHours).append__T__scm_StringBuilder(((absMinutes < 10) ? ":0" : ":")).append__I__scm_StringBuilder(absMinutes);
    var absSeconds = $j_java$002elang$002eObject.$intMod(absTotalSeconds, this.Ljava_time_ZoneOffset$__f_SECONDS_PER_MINUTE);
    if ((absSeconds !== 0)) {
      buf.append__T__scm_StringBuilder(((absSeconds < 10) ? ":0" : ":")).append__I__scm_StringBuilder(absSeconds)
    };
    return buf.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
var $d_Ljava_time_ZoneOffset$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_ZoneOffset$: 0
}, false, "java.time.ZoneOffset$", {
  Ljava_time_ZoneOffset$: 1,
  O: 1
});
export { $d_Ljava_time_ZoneOffset$ as $d_Ljava_time_ZoneOffset$ };
$c_Ljava_time_ZoneOffset$.prototype.$classData = $d_Ljava_time_ZoneOffset$;
var $n_Ljava_time_ZoneOffset$;
function $m_Ljava_time_ZoneOffset$() {
  if ((!$n_Ljava_time_ZoneOffset$)) {
    $n_Ljava_time_ZoneOffset$ = new $c_Ljava_time_ZoneOffset$()
  };
  return $n_Ljava_time_ZoneOffset$
}
export { $m_Ljava_time_ZoneOffset$ as $m_Ljava_time_ZoneOffset$ };
/** @constructor */
function $c_Ljava_time_ZonedDateTime$() {
  /*<skip>*/
}
export { $c_Ljava_time_ZonedDateTime$ as $c_Ljava_time_ZonedDateTime$ };
$c_Ljava_time_ZonedDateTime$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_ZonedDateTime$.prototype.constructor = $c_Ljava_time_ZonedDateTime$;
/** @constructor */
function $h_Ljava_time_ZonedDateTime$() {
  /*<skip>*/
}
export { $h_Ljava_time_ZonedDateTime$ as $h_Ljava_time_ZonedDateTime$ };
$h_Ljava_time_ZonedDateTime$.prototype = $c_Ljava_time_ZonedDateTime$.prototype;
$c_Ljava_time_ZonedDateTime$.prototype.ofInstant__Ljava_time_Instant__Ljava_time_ZoneId__Ljava_time_ZonedDateTime = (function(instant, zone) {
  if ((instant === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "instant")
  };
  if ((zone === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "zone")
  };
  return this.java$time$ZonedDateTime$$$create__J__I__Ljava_time_ZoneId__Ljava_time_ZonedDateTime(instant.Ljava_time_Instant__f_seconds, instant.Ljava_time_Instant__f_nanos, zone)
});
$c_Ljava_time_ZonedDateTime$.prototype.java$time$ZonedDateTime$$$create__J__I__Ljava_time_ZoneId__Ljava_time_ZonedDateTime = (function(epochSecond, nanoOfSecond, zone) {
  var rules = $m_Ljava_time_zone_ZoneRules$().of__Ljava_time_ZoneOffset__Ljava_time_zone_ZoneRules(zone);
  var $$x1 = $m_Ljava_time_Instant$();
  var hi = (nanoOfSecond >> 31);
  $$x1.ofEpochSecond__J__J__Ljava_time_Instant(epochSecond, new $j_java$002elang$002eObject.$c_RTLong(nanoOfSecond, hi));
  var offset = rules.Ljava_time_zone_ZoneRules$Fixed__f_offset;
  return new $c_Ljava_time_ZonedDateTime($m_Ljava_time_LocalDateTime$().ofEpochSecond__J__I__Ljava_time_ZoneOffset__Ljava_time_LocalDateTime(epochSecond, nanoOfSecond, offset), offset, zone)
});
var $d_Ljava_time_ZonedDateTime$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_ZonedDateTime$: 0
}, false, "java.time.ZonedDateTime$", {
  Ljava_time_ZonedDateTime$: 1,
  O: 1
});
export { $d_Ljava_time_ZonedDateTime$ as $d_Ljava_time_ZonedDateTime$ };
$c_Ljava_time_ZonedDateTime$.prototype.$classData = $d_Ljava_time_ZonedDateTime$;
var $n_Ljava_time_ZonedDateTime$;
function $m_Ljava_time_ZonedDateTime$() {
  if ((!$n_Ljava_time_ZonedDateTime$)) {
    $n_Ljava_time_ZonedDateTime$ = new $c_Ljava_time_ZonedDateTime$()
  };
  return $n_Ljava_time_ZonedDateTime$
}
export { $m_Ljava_time_ZonedDateTime$ as $m_Ljava_time_ZonedDateTime$ };
/** @constructor */
function $c_Ljava_time_format_DateTimeFormatter(printerParser, locale, decimalStyle, resolverStyle, resolverFields, chrono, zone) {
  this.Ljava_time_format_DateTimeFormatter__f_printerParser = null;
  this.Ljava_time_format_DateTimeFormatter__f_locale = null;
  this.Ljava_time_format_DateTimeFormatter__f_decimalStyle = null;
  this.Ljava_time_format_DateTimeFormatter__f_resolverStyle = null;
  this.Ljava_time_format_DateTimeFormatter__f_resolverFields = null;
  this.Ljava_time_format_DateTimeFormatter__f_chrono = null;
  this.Ljava_time_format_DateTimeFormatter__f_zone = null;
  this.Ljava_time_format_DateTimeFormatter__f_printerParser = printerParser;
  this.Ljava_time_format_DateTimeFormatter__f_locale = locale;
  this.Ljava_time_format_DateTimeFormatter__f_decimalStyle = decimalStyle;
  this.Ljava_time_format_DateTimeFormatter__f_resolverStyle = resolverStyle;
  this.Ljava_time_format_DateTimeFormatter__f_resolverFields = resolverFields;
  this.Ljava_time_format_DateTimeFormatter__f_chrono = chrono;
  this.Ljava_time_format_DateTimeFormatter__f_zone = zone;
  if ((printerParser === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "printerParser")
  };
  if ((locale === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "locale")
  };
  if ((decimalStyle === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "decimalStyle")
  };
  if ((resolverStyle === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "resolverStyle")
  }
}
export { $c_Ljava_time_format_DateTimeFormatter as $c_Ljava_time_format_DateTimeFormatter };
$c_Ljava_time_format_DateTimeFormatter.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_DateTimeFormatter.prototype.constructor = $c_Ljava_time_format_DateTimeFormatter;
/** @constructor */
function $h_Ljava_time_format_DateTimeFormatter() {
  /*<skip>*/
}
export { $h_Ljava_time_format_DateTimeFormatter as $h_Ljava_time_format_DateTimeFormatter };
$h_Ljava_time_format_DateTimeFormatter.prototype = $c_Ljava_time_format_DateTimeFormatter.prototype;
$c_Ljava_time_format_DateTimeFormatter.prototype.withResolverStyle__Ljava_time_format_ResolverStyle__Ljava_time_format_DateTimeFormatter = (function(resolverStyle) {
  if ((resolverStyle === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "resolverStyle")
  };
  var a = this.Ljava_time_format_DateTimeFormatter__f_resolverStyle;
  if ((a === resolverStyle)) {
    return this
  } else {
    return new $c_Ljava_time_format_DateTimeFormatter(this.Ljava_time_format_DateTimeFormatter__f_printerParser, this.Ljava_time_format_DateTimeFormatter__f_locale, this.Ljava_time_format_DateTimeFormatter__f_decimalStyle, resolverStyle, this.Ljava_time_format_DateTimeFormatter__f_resolverFields, this.Ljava_time_format_DateTimeFormatter__f_chrono, this.Ljava_time_format_DateTimeFormatter__f_zone)
  }
});
$c_Ljava_time_format_DateTimeFormatter.prototype.format__Ljava_time_temporal_TemporalAccessor__T = (function(temporal) {
  var buf = $j_java$002elang$002eObject.$ct_jl_StringBuilder__I__(new $j_java$002elang$002eObject.$c_jl_StringBuilder(), 32);
  this.formatTo__Ljava_time_temporal_TemporalAccessor__jl_Appendable__V(temporal, buf);
  return buf.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
$c_Ljava_time_format_DateTimeFormatter.prototype.formatTo__Ljava_time_temporal_TemporalAccessor__jl_Appendable__V = (function(temporal, appendable) {
  if ((temporal === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "temporal")
  };
  if ((appendable === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "appendable")
  };
  try {
    var context = $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__(new $c_Ljava_time_format_internal_TTBPDateTimePrintContext(), temporal, this);
    if ((appendable instanceof $j_java$002elang$002eObject.$c_jl_StringBuilder)) {
      this.Ljava_time_format_DateTimeFormatter__f_printerParser.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z(context, appendable)
    } else {
      var buf = $j_java$002elang$002eObject.$ct_jl_StringBuilder__I__(new $j_java$002elang$002eObject.$c_jl_StringBuilder(), 32);
      this.Ljava_time_format_DateTimeFormatter__f_printerParser.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z(context, buf);
      appendable.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + appendable.jl_StringBuilder__f_java$lang$StringBuilder$$content) + buf)
    }
  } catch (e) {
    if (false) {
      var ex = e;
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__jl_Throwable__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ex.getMessage__T(), ex)
    } else {
      throw e
    }
  }
});
$c_Ljava_time_format_DateTimeFormatter.prototype.toString__T = (function() {
  var pattern = this.Ljava_time_format_DateTimeFormatter__f_printerParser.toString__T();
  if ((((pattern.length | 0) >= 0) && (pattern.substring(0, ("[".length | 0)) === "["))) {
    return pattern
  } else {
    var endIndex = (((-1) + (pattern.length | 0)) | 0);
    return pattern.substring(1, endIndex)
  }
});
var $d_Ljava_time_format_DateTimeFormatter = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_DateTimeFormatter: 0
}, false, "java.time.format.DateTimeFormatter", {
  Ljava_time_format_DateTimeFormatter: 1,
  O: 1
});
export { $d_Ljava_time_format_DateTimeFormatter as $d_Ljava_time_format_DateTimeFormatter };
$c_Ljava_time_format_DateTimeFormatter.prototype.$classData = $d_Ljava_time_format_DateTimeFormatter;
/** @constructor */
function $c_Ljava_time_format_DateTimeFormatter$() {
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_DATE_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_LOCAL_DATE_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_DATE_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_OFFSET_DATE_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_ZONED_DATE_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_ZONED_DATE_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_DATE_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_DATE_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_ORDINAL_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_ORDINAL_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_WEEK_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_WEEK_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANT$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANTbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_BASIC_ISO_DATE$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_BASIC_ISO_DATEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_RFC_1123_DATE_TIME$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_RFC_1123_DATE_TIMEbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_PARSED_EXCESS_DAYS$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_PARSED_EXCESS_DAYSbitmap$1 = false;
  this.Ljava_time_format_DateTimeFormatter$__f_PARSED_LEAP_SECOND$lzy1 = null;
  this.Ljava_time_format_DateTimeFormatter$__f_PARSED_LEAP_SECONDbitmap$1 = false
}
export { $c_Ljava_time_format_DateTimeFormatter$ as $c_Ljava_time_format_DateTimeFormatter$ };
$c_Ljava_time_format_DateTimeFormatter$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_DateTimeFormatter$.prototype.constructor = $c_Ljava_time_format_DateTimeFormatter$;
/** @constructor */
function $h_Ljava_time_format_DateTimeFormatter$() {
  /*<skip>*/
}
export { $h_Ljava_time_format_DateTimeFormatter$ as $h_Ljava_time_format_DateTimeFormatter$ };
$h_Ljava_time_format_DateTimeFormatter$.prototype = $c_Ljava_time_format_DateTimeFormatter$.prototype;
$c_Ljava_time_format_DateTimeFormatter$.prototype.ISO_INSTANT__Ljava_time_format_DateTimeFormatter = (function() {
  if ((!this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANTbitmap$1)) {
    var this$1 = $ct_Ljava_time_format_DateTimeFormatterBuilder__(new $c_Ljava_time_format_DateTimeFormatterBuilder()).parseCaseInsensitive__Ljava_time_format_DateTimeFormatterBuilder().appendInstant__Ljava_time_format_DateTimeFormatterBuilder();
    var style = $j_java$002etime$002eformat$002eResolverStyle$0024.$s_Ljava_time_format_ResolverStyle$__STRICT__Ljava_time_format_ResolverStyle();
    var this$2 = $j_java$002eutil$002eLocale.$m_ju_Locale$();
    this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANT$lzy1 = this$1.toFormatter__ju_Locale__Ljava_time_format_DateTimeFormatter(this$2.ju_Locale$__f_defaultLocale).withResolverStyle__Ljava_time_format_ResolverStyle__Ljava_time_format_DateTimeFormatter(style);
    this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANTbitmap$1 = true
  };
  return this.Ljava_time_format_DateTimeFormatter$__f_ISO_INSTANT$lzy1
});
var $d_Ljava_time_format_DateTimeFormatter$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_DateTimeFormatter$: 0
}, false, "java.time.format.DateTimeFormatter$", {
  Ljava_time_format_DateTimeFormatter$: 1,
  O: 1
});
export { $d_Ljava_time_format_DateTimeFormatter$ as $d_Ljava_time_format_DateTimeFormatter$ };
$c_Ljava_time_format_DateTimeFormatter$.prototype.$classData = $d_Ljava_time_format_DateTimeFormatter$;
var $n_Ljava_time_format_DateTimeFormatter$;
function $m_Ljava_time_format_DateTimeFormatter$() {
  if ((!$n_Ljava_time_format_DateTimeFormatter$)) {
    $n_Ljava_time_format_DateTimeFormatter$ = new $c_Ljava_time_format_DateTimeFormatter$()
  };
  return $n_Ljava_time_format_DateTimeFormatter$
}
export { $m_Ljava_time_format_DateTimeFormatter$ as $m_Ljava_time_format_DateTimeFormatter$ };
function $ct_Ljava_time_format_DateTimeFormatterBuilder__Ljava_time_format_DateTimeFormatterBuilder__Z__($thiz, parent, optional) {
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_parent = parent;
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_optional = optional;
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active = $thiz;
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers = $j_java$002eutil$002eArrayList.$ct_ju_ArrayList__(new $j_java$002eutil$002eArrayList.$c_ju_ArrayList());
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_padNextWidth = 0;
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_padNextChar = 0;
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_valueParserIndex = (-1);
  return $thiz
}
export { $ct_Ljava_time_format_DateTimeFormatterBuilder__Ljava_time_format_DateTimeFormatterBuilder__Z__ as $ct_Ljava_time_format_DateTimeFormatterBuilder__Ljava_time_format_DateTimeFormatterBuilder__Z__ };
function $ct_Ljava_time_format_DateTimeFormatterBuilder__($thiz) {
  $ct_Ljava_time_format_DateTimeFormatterBuilder__Ljava_time_format_DateTimeFormatterBuilder__Z__($thiz, null, false);
  return $thiz
}
export { $ct_Ljava_time_format_DateTimeFormatterBuilder__ as $ct_Ljava_time_format_DateTimeFormatterBuilder__ };
function $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I($thiz, pp) {
  var _pp = pp;
  var obj = _pp;
  if ((obj === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "pp")
  };
  if (($thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_padNextWidth > 0)) {
    if ((_pp !== null)) {
      _pp = new $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024PadPrinterParserDecorator.$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$PadPrinterParserDecorator(_pp, $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_padNextWidth, $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_padNextChar)
    };
    $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_padNextWidth = 0;
    $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_padNextChar = 0
  };
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers.add__O__Z(_pp);
  $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_valueParserIndex = (-1);
  return (((-1) + $thiz.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers.size__I()) | 0)
}
export { $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I as $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I };
/** @constructor */
function $c_Ljava_time_format_DateTimeFormatterBuilder() {
  this.Ljava_time_format_DateTimeFormatterBuilder__f_parent = null;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_optional = false;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_active = null;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers = null;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_padNextWidth = 0;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_padNextChar = 0;
  this.Ljava_time_format_DateTimeFormatterBuilder__f_valueParserIndex = 0
}
export { $c_Ljava_time_format_DateTimeFormatterBuilder as $c_Ljava_time_format_DateTimeFormatterBuilder };
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.constructor = $c_Ljava_time_format_DateTimeFormatterBuilder;
/** @constructor */
function $h_Ljava_time_format_DateTimeFormatterBuilder() {
  /*<skip>*/
}
export { $h_Ljava_time_format_DateTimeFormatterBuilder as $h_Ljava_time_format_DateTimeFormatterBuilder };
$h_Ljava_time_format_DateTimeFormatterBuilder.prototype = $c_Ljava_time_format_DateTimeFormatterBuilder.prototype;
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.parseCaseInsensitive__Ljava_time_format_DateTimeFormatterBuilder = (function() {
  $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I(this, $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024SettingsParser$0024.$s_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser$__INSENSITIVE__Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$SettingsParser());
  return this
});
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.appendInstant__Ljava_time_format_DateTimeFormatterBuilder = (function() {
  $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I(this, new $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser((-2)));
  return this
});
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.optionalEnd__Ljava_time_format_DateTimeFormatterBuilder = (function() {
  if ((this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_parent === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_IllegalStateException__T__(new $j_java$002elang$002eObject.$c_jl_IllegalStateException(), "Cannot call optionalEnd() as there was no previous call to optionalStart()")
  };
  if ((this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers.size__I() > 0)) {
    var cpp = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024CompositePrinterParser.$ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ju_List__Z__(new $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024CompositePrinterParser.$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser(), this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers, this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_optional);
    this.Ljava_time_format_DateTimeFormatterBuilder__f_active = this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_parent;
    $p_Ljava_time_format_DateTimeFormatterBuilder__appendInternal__Ljava_time_format_internal_DateTimePrinterParser__I(this, cpp)
  } else {
    this.Ljava_time_format_DateTimeFormatterBuilder__f_active = this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_parent
  };
  return this
});
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.toFormatter__ju_Locale__Ljava_time_format_DateTimeFormatter = (function(locale) {
  if ((locale === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "locale")
  };
  while ((this.Ljava_time_format_DateTimeFormatterBuilder__f_active.Ljava_time_format_DateTimeFormatterBuilder__f_parent !== null)) {
    this.optionalEnd__Ljava_time_format_DateTimeFormatterBuilder()
  };
  var pp = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024CompositePrinterParser.$ct_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser__ju_List__Z__(new $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024CompositePrinterParser.$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$CompositePrinterParser(), this.Ljava_time_format_DateTimeFormatterBuilder__f_printerParsers, false);
  return new $c_Ljava_time_format_DateTimeFormatter(pp, locale, $j_java$002etime$002eformat$002eDecimalStyle$0024.$m_Ljava_time_format_DecimalStyle$().STANDARD__Ljava_time_format_DecimalStyle(), $j_java$002etime$002eformat$002eResolverStyle$0024.$s_Ljava_time_format_ResolverStyle$__SMART__Ljava_time_format_ResolverStyle(), null, null, null)
});
var $d_Ljava_time_format_DateTimeFormatterBuilder = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_DateTimeFormatterBuilder: 0
}, false, "java.time.format.DateTimeFormatterBuilder", {
  Ljava_time_format_DateTimeFormatterBuilder: 1,
  O: 1
});
export { $d_Ljava_time_format_DateTimeFormatterBuilder as $d_Ljava_time_format_DateTimeFormatterBuilder };
$c_Ljava_time_format_DateTimeFormatterBuilder.prototype.$classData = $d_Ljava_time_format_DateTimeFormatterBuilder;
function $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__ju_Locale__Ljava_time_format_DecimalStyle__($thiz, temporal, locale, symbols) {
  $thiz.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal = temporal;
  $thiz.Ljava_time_format_internal_TTBPDateTimePrintContext__f_locale = locale;
  $thiz.Ljava_time_format_internal_TTBPDateTimePrintContext__f_symbols = symbols;
  $thiz.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional = 0;
  return $thiz
}
export { $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__ju_Locale__Ljava_time_format_DecimalStyle__ as $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__ju_Locale__Ljava_time_format_DecimalStyle__ };
function $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__($thiz, temporal, formatter) {
  $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__ju_Locale__Ljava_time_format_DecimalStyle__($thiz, $m_Ljava_time_format_internal_TTBPDateTimePrintContext$().adjust__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__Ljava_time_temporal_TemporalAccessor(temporal, formatter), formatter.Ljava_time_format_DateTimeFormatter__f_locale, formatter.Ljava_time_format_DateTimeFormatter__f_decimalStyle);
  return $thiz
}
export { $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__ as $ct_Ljava_time_format_internal_TTBPDateTimePrintContext__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__ };
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimePrintContext() {
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_locale = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_symbols = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional = 0
}
export { $c_Ljava_time_format_internal_TTBPDateTimePrintContext as $c_Ljava_time_format_internal_TTBPDateTimePrintContext };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimePrintContext;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimePrintContext() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimePrintContext as $h_Ljava_time_format_internal_TTBPDateTimePrintContext };
$h_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype = $c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype;
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.startOptional__V = (function() {
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional = ((1 + this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional) | 0)
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.endOptional__V = (function() {
  this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional = (((-1) + this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional) | 0)
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.getValue__Ljava_time_temporal_TemporalField__jl_Long = (function(field) {
  try {
    var t = this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal.getLong__Ljava_time_temporal_TemporalField__J(field);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  } catch (e) {
    if ((e instanceof $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException)) {
      var ex = e;
      if ((this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_optional > 0)) {
        return null
      } else {
        throw ex
      }
    } else {
      throw e
    }
  }
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.toString__T = (function() {
  return this.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal.toString__T()
});
var $d_Ljava_time_format_internal_TTBPDateTimePrintContext = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimePrintContext: 0
}, false, "java.time.format.internal.TTBPDateTimePrintContext", {
  Ljava_time_format_internal_TTBPDateTimePrintContext: 1,
  O: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimePrintContext as $d_Ljava_time_format_internal_TTBPDateTimePrintContext };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimePrintContext;
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimePrintContext$() {
  /*<skip>*/
}
export { $c_Ljava_time_format_internal_TTBPDateTimePrintContext$ as $c_Ljava_time_format_internal_TTBPDateTimePrintContext$ };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimePrintContext$;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimePrintContext$() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimePrintContext$ as $h_Ljava_time_format_internal_TTBPDateTimePrintContext$ };
$h_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype = $c_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype;
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype.adjust__Ljava_time_temporal_TemporalAccessor__Ljava_time_format_DateTimeFormatter__Ljava_time_temporal_TemporalAccessor = (function(temporal, formatter) {
  var elem = formatter.Ljava_time_format_DateTimeFormatter__f_chrono;
  var overrideChrono = new $j_java$002elang$002eObject.$c_sr_ObjectRef(elem);
  var overrideZone = formatter.Ljava_time_format_DateTimeFormatter__f_zone;
  if (((overrideChrono.sr_ObjectRef__f_elem === null) && (overrideZone === null))) {
    return temporal
  } else {
    var temporalChrono = temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery());
    var temporalZone = temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery());
    var b = overrideChrono.sr_ObjectRef__f_elem;
    if (((temporalChrono === null) ? (b === null) : $j_java$002etime$002echrono$002eChronology.$f_Ljava_time_chrono_Chronology__equals__O__Z(temporalChrono, b))) {
      overrideChrono.sr_ObjectRef__f_elem = null
    };
    var b$1 = overrideZone;
    if (((temporalZone === null) ? (b$1 === null) : temporalZone.equals__O__Z(b$1))) {
      overrideZone = null
    };
    if (((overrideChrono.sr_ObjectRef__f_elem === null) && (overrideZone === null))) {
      return temporal
    };
    var effectiveChrono = ((overrideChrono.sr_ObjectRef__f_elem !== null) ? overrideChrono.sr_ObjectRef__f_elem : temporalChrono);
    var effectiveZone = ((overrideZone !== null) ? overrideZone : temporalZone);
    if ((overrideZone !== null)) {
      if (temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField())) {
        if ((effectiveChrono !== null)) {
          /*<skip>*/
        } else {
          $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology()
        };
        var instant = $m_Ljava_time_Instant$().from__Ljava_time_temporal_TemporalAccessor__Ljava_time_Instant(temporal);
        var zone = overrideZone;
        return $m_Ljava_time_ZonedDateTime$().ofInstant__Ljava_time_Instant__Ljava_time_ZoneId__Ljava_time_ZonedDateTime(instant, zone)
      };
      var normalizedOffset = overrideZone.normalized__Ljava_time_ZoneId();
      var temporalOffset = temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery());
      if ((((normalizedOffset instanceof $c_Ljava_time_ZoneOffset) && (temporalOffset !== null)) && (!((normalizedOffset === null) ? (temporalOffset === null) : normalizedOffset.equals__O__Z(temporalOffset))))) {
        throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Invalid override zone for temporal: " + overrideZone) + " ") + temporal))
      }
    };
    if ((overrideChrono.sr_ObjectRef__f_elem !== null)) {
      if (temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField())) {
        var effectiveDate = $m_Ljava_time_LocalDate$().from__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalDate(temporal)
      } else {
        if ((!((overrideChrono.sr_ObjectRef__f_elem === $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology()) && (temporalChrono === null)))) {
          var xs = $m_Ljava_time_temporal_ChronoField$().values__ALjava_time_temporal_ChronoField();
          var f$2 = ((this$5, temporal$2, overrideChrono$2) => ((f) => {
            var f$1 = f;
            if ((f$1.isDateBased__Z() && temporal$2.isSupported__Ljava_time_temporal_TemporalField__Z(f$1))) {
              throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ((("Invalid override chronology for temporal: " + overrideChrono$2.sr_ObjectRef__f_elem) + " ") + temporal$2))
            }
          }))(this, temporal, overrideChrono);
          var len = xs.u.length;
          var i = 0;
          if ((xs !== null)) {
            while ((i < len)) {
              var arg1 = xs.u[i];
              f$2(arg1);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_I)) {
            var x3 = xs;
            while ((i < len)) {
              var arg1$1 = x3.u[i];
              f$2(arg1$1);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_D)) {
            var x4 = xs;
            while ((i < len)) {
              var arg1$2 = x4.u[i];
              f$2(arg1$2);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_J)) {
            var x5 = xs;
            while ((i < len)) {
              var t = x5.u[i];
              var lo = t.RTLong__f_lo;
              var hi = t.RTLong__f_hi;
              f$2(new $j_java$002elang$002eObject.$c_RTLong(lo, hi));
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_F)) {
            var x6 = xs;
            while ((i < len)) {
              var arg1$3 = x6.u[i];
              f$2(arg1$3);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_C)) {
            var x7 = xs;
            while ((i < len)) {
              var arg1$4 = x7.u[i];
              f$2($j_java$002elang$002eObject.$bC(arg1$4));
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_B)) {
            var x8 = xs;
            while ((i < len)) {
              var arg1$5 = x8.u[i];
              f$2(arg1$5);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_S)) {
            var x9 = xs;
            while ((i < len)) {
              var arg1$6 = x9.u[i];
              f$2(arg1$6);
              i = ((1 + i) | 0)
            }
          } else if ((xs instanceof $j_java$002elang$002eObject.$ac_Z)) {
            var x10 = xs;
            while ((i < len)) {
              var arg1$7 = x10.u[i];
              f$2(arg1$7);
              i = ((1 + i) | 0)
            }
          } else {
            throw new $j_java$002elang$002eObject.$c_s_MatchError(xs)
          }
        };
        var effectiveDate = null
      }
    } else {
      var effectiveDate = null
    };
    return new $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1(temporal, effectiveChrono, effectiveZone, effectiveDate)
  }
});
var $d_Ljava_time_format_internal_TTBPDateTimePrintContext$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimePrintContext$: 0
}, false, "java.time.format.internal.TTBPDateTimePrintContext$", {
  Ljava_time_format_internal_TTBPDateTimePrintContext$: 1,
  O: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimePrintContext$ as $d_Ljava_time_format_internal_TTBPDateTimePrintContext$ };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimePrintContext$;
var $n_Ljava_time_format_internal_TTBPDateTimePrintContext$;
function $m_Ljava_time_format_internal_TTBPDateTimePrintContext$() {
  if ((!$n_Ljava_time_format_internal_TTBPDateTimePrintContext$)) {
    $n_Ljava_time_format_internal_TTBPDateTimePrintContext$ = new $c_Ljava_time_format_internal_TTBPDateTimePrintContext$()
  };
  return $n_Ljava_time_format_internal_TTBPDateTimePrintContext$
}
export { $m_Ljava_time_format_internal_TTBPDateTimePrintContext$ as $m_Ljava_time_format_internal_TTBPDateTimePrintContext$ };
function $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange($thiz, field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    if ($thiz.isSupported__Ljava_time_temporal_TemporalField__Z(field)) {
      return field.Ljava_time_temporal_ChronoField__f__range
    } else {
      throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
    }
  } else {
    return $thiz.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
}
export { $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange as $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange };
function $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I($thiz, field) {
  return $thiz.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field).checkValidIntValue__J__Ljava_time_temporal_TemporalField__I($thiz.getLong__Ljava_time_temporal_TemporalField__J(field), field)
}
export { $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I as $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I };
function $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O($thiz, query) {
  matchAlts1: {
    matchAlts2: {
      var x = $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery();
      if ((x === query)) {
        break matchAlts2
      };
      var x$3 = $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery();
      if ((x$3 === query)) {
        break matchAlts2
      };
      var x$5 = $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery();
      if ((x$5 === query)) {
        break matchAlts2
      };
      break matchAlts1
    };
    return null
  };
  return query.queryFrom__Ljava_time_temporal_TemporalAccessor__O($thiz)
}
export { $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O as $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O };
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$() {
  this.Ljava_time_temporal_TemporalQueries$__f_zoneId$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_zoneIdbitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_chronology$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_chronologybitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_precision$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_precisionbitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_offset$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_offsetbitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_zone$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_zonebitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_localDate$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_localDatebitmap$1 = false;
  this.Ljava_time_temporal_TemporalQueries$__f_localTime$lzy1 = null;
  this.Ljava_time_temporal_TemporalQueries$__f_localTimebitmap$1 = false
}
export { $c_Ljava_time_temporal_TemporalQueries$ as $c_Ljava_time_temporal_TemporalQueries$ };
$c_Ljava_time_temporal_TemporalQueries$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$ as $h_Ljava_time_temporal_TemporalQueries$ };
$h_Ljava_time_temporal_TemporalQueries$.prototype = $c_Ljava_time_temporal_TemporalQueries$.prototype;
$c_Ljava_time_temporal_TemporalQueries$.prototype.zoneId__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_zoneIdbitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_zoneId$lzy1 = new $c_Ljava_time_temporal_TemporalQueries$$anon$1();
    this.Ljava_time_temporal_TemporalQueries$__f_zoneIdbitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_zoneId$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.chronology__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_chronologybitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_chronology$lzy1 = new $j_java$002etime$002etemporal$002eTemporalQueries$0024$0024anon$00242.$c_Ljava_time_temporal_TemporalQueries$$anon$2();
    this.Ljava_time_temporal_TemporalQueries$__f_chronologybitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_chronology$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.precision__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_precisionbitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_precision$lzy1 = new $j_java$002etime$002etemporal$002eTemporalQueries$0024$0024anon$00243.$c_Ljava_time_temporal_TemporalQueries$$anon$3();
    this.Ljava_time_temporal_TemporalQueries$__f_precisionbitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_precision$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.offset__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_offsetbitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_offset$lzy1 = new $c_Ljava_time_temporal_TemporalQueries$$anon$4();
    this.Ljava_time_temporal_TemporalQueries$__f_offsetbitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_offset$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.zone__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_zonebitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_zone$lzy1 = new $c_Ljava_time_temporal_TemporalQueries$$anon$5();
    this.Ljava_time_temporal_TemporalQueries$__f_zonebitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_zone$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.localDate__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_localDatebitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_localDate$lzy1 = new $c_Ljava_time_temporal_TemporalQueries$$anon$6();
    this.Ljava_time_temporal_TemporalQueries$__f_localDatebitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_localDate$lzy1
});
$c_Ljava_time_temporal_TemporalQueries$.prototype.localTime__Ljava_time_temporal_TemporalQuery = (function() {
  if ((!this.Ljava_time_temporal_TemporalQueries$__f_localTimebitmap$1)) {
    this.Ljava_time_temporal_TemporalQueries$__f_localTime$lzy1 = new $c_Ljava_time_temporal_TemporalQueries$$anon$7();
    this.Ljava_time_temporal_TemporalQueries$__f_localTimebitmap$1 = true
  };
  return this.Ljava_time_temporal_TemporalQueries$__f_localTime$lzy1
});
var $d_Ljava_time_temporal_TemporalQueries$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$: 0
}, false, "java.time.temporal.TemporalQueries$", {
  Ljava_time_temporal_TemporalQueries$: 1,
  O: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$ as $d_Ljava_time_temporal_TemporalQueries$ };
$c_Ljava_time_temporal_TemporalQueries$.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$;
var $n_Ljava_time_temporal_TemporalQueries$;
function $m_Ljava_time_temporal_TemporalQueries$() {
  if ((!$n_Ljava_time_temporal_TemporalQueries$)) {
    $n_Ljava_time_temporal_TemporalQueries$ = new $c_Ljava_time_temporal_TemporalQueries$()
  };
  return $n_Ljava_time_temporal_TemporalQueries$
}
export { $m_Ljava_time_temporal_TemporalQueries$ as $m_Ljava_time_temporal_TemporalQueries$ };
/** @constructor */
function $c_Ljava_time_zone_ZoneRules$() {
  /*<skip>*/
}
export { $c_Ljava_time_zone_ZoneRules$ as $c_Ljava_time_zone_ZoneRules$ };
$c_Ljava_time_zone_ZoneRules$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_zone_ZoneRules$.prototype.constructor = $c_Ljava_time_zone_ZoneRules$;
/** @constructor */
function $h_Ljava_time_zone_ZoneRules$() {
  /*<skip>*/
}
export { $h_Ljava_time_zone_ZoneRules$ as $h_Ljava_time_zone_ZoneRules$ };
$h_Ljava_time_zone_ZoneRules$.prototype = $c_Ljava_time_zone_ZoneRules$.prototype;
$c_Ljava_time_zone_ZoneRules$.prototype.of__Ljava_time_ZoneOffset__Ljava_time_zone_ZoneRules = (function(offset) {
  if ((offset === null)) {
    throw $j_java$002elang$002eObject.$ct_jl_NullPointerException__T__(new $j_java$002elang$002eObject.$c_jl_NullPointerException(), "offset")
  };
  return new $c_Ljava_time_zone_ZoneRules$Fixed(offset)
});
var $d_Ljava_time_zone_ZoneRules$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_zone_ZoneRules$: 0
}, false, "java.time.zone.ZoneRules$", {
  Ljava_time_zone_ZoneRules$: 1,
  O: 1
});
export { $d_Ljava_time_zone_ZoneRules$ as $d_Ljava_time_zone_ZoneRules$ };
$c_Ljava_time_zone_ZoneRules$.prototype.$classData = $d_Ljava_time_zone_ZoneRules$;
var $n_Ljava_time_zone_ZoneRules$;
function $m_Ljava_time_zone_ZoneRules$() {
  if ((!$n_Ljava_time_zone_ZoneRules$)) {
    $n_Ljava_time_zone_ZoneRules$ = new $c_Ljava_time_zone_ZoneRules$()
  };
  return $n_Ljava_time_zone_ZoneRules$
}
export { $m_Ljava_time_zone_ZoneRules$ as $m_Ljava_time_zone_ZoneRules$ };
function $ct_Ljava_time_ZoneId__($thiz) {
  if ((($j_java$002elang$002eObject.$objectGetClass($thiz) !== $d_Ljava_time_ZoneOffset.getClassOf()) && ($j_java$002elang$002eObject.$objectGetClass($thiz) !== $j_java$002etime$002eZoneRegion.$d_Ljava_time_ZoneRegion.getClassOf()))) {
    throw new $j_java$002elang$002eAssertionError.$c_jl_AssertionError("Invalid subclass")
  };
  return $thiz
}
export { $ct_Ljava_time_ZoneId__ as $ct_Ljava_time_ZoneId__ };
/** @constructor */
function $c_Ljava_time_ZoneId() {
  /*<skip>*/
}
export { $c_Ljava_time_ZoneId as $c_Ljava_time_ZoneId };
$c_Ljava_time_ZoneId.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_ZoneId.prototype.constructor = $c_Ljava_time_ZoneId;
/** @constructor */
function $h_Ljava_time_ZoneId() {
  /*<skip>*/
}
export { $h_Ljava_time_ZoneId as $h_Ljava_time_ZoneId };
$h_Ljava_time_ZoneId.prototype = $c_Ljava_time_ZoneId.prototype;
$c_Ljava_time_ZoneId.prototype.normalized__Ljava_time_ZoneId = (function() {
  try {
    var rules = $m_Ljava_time_zone_ZoneRules$().of__Ljava_time_ZoneOffset__Ljava_time_zone_ZoneRules(this);
    $m_Ljava_time_Instant$().EPOCH__Ljava_time_Instant();
    return rules.Ljava_time_zone_ZoneRules$Fixed__f_offset
  } catch (e) {
    if ((!false)) {
      throw e
    }
  };
  return this
});
function $isArrayOf_Ljava_time_ZoneId(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_ZoneId)))
}
export { $isArrayOf_Ljava_time_ZoneId as $isArrayOf_Ljava_time_ZoneId };
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser(fractionalDigits) {
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits = 0;
  this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits = fractionalDigits
}
export { $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser as $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser as $h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser };
$h_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype = $c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype;
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype.print__Ljava_time_format_internal_TTBPDateTimePrintContext__jl_StringBuilder__Z = (function(context, buf) {
  var inSecs = context.getValue__Ljava_time_temporal_TemporalField__jl_Long($s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField());
  var inNanos = $j_java$002elang$002eObject.$L0;
  if (context.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField())) {
    var t = context.Ljava_time_format_internal_TTBPDateTimePrintContext__f_temporal.getLong__Ljava_time_temporal_TemporalField__J($s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField());
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    inNanos = new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
  };
  if ((inSecs === null)) {
    return false
  };
  var this$4 = $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField();
  var x = inNanos;
  var t$1 = $j_java$002elang$002eObject.$uJ(x);
  var lo$1 = t$1.RTLong__f_lo;
  var hi$1 = t$1.RTLong__f_hi;
  var inNano = this$4.Ljava_time_temporal_ChronoField__f__range.checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$1), this$4);
  var this$10 = $j_java$002elang$002eObject.$uJ(inSecs);
  var x$1 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_0000_TO_1970;
  var this$7 = $j_java$002elang$002eObject.$uJ(x$1);
  var lo$2 = this$7.RTLong__f_lo;
  var hi$2 = this$7.RTLong__f_hi;
  var lo$3 = ((-lo$2) | 0);
  var hi$3 = ((lo$2 !== 0) ? (~hi$2) : ((-hi$2) | 0));
  var ahi = this$10.RTLong__f_hi;
  if (((ahi === hi$3) ? (((-2147483648) ^ this$10.RTLong__f_lo) >= ((-2147483648) ^ lo$3)) : (ahi > hi$3))) {
    var this$13 = $j_java$002elang$002eObject.$uJ(inSecs);
    var x$2 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_PER_10000_YEARS;
    var b = $j_java$002elang$002eObject.$uJ(x$2);
    var alo = this$13.RTLong__f_lo;
    var ahi$1 = this$13.RTLong__f_hi;
    var bhi = b.RTLong__f_hi;
    var lo$4 = ((alo - b.RTLong__f_lo) | 0);
    var hi$4 = ((((-2147483648) ^ lo$4) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi$1 - bhi) | 0)) | 0) : ((ahi$1 - bhi) | 0));
    var x$3 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_0000_TO_1970;
    var b$1 = $j_java$002elang$002eObject.$uJ(x$3);
    var bhi$1 = b$1.RTLong__f_hi;
    var lo$5 = ((lo$4 + b$1.RTLong__f_lo) | 0);
    var hi$5 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ lo$4)) ? ((1 + ((hi$4 + bhi$1) | 0)) | 0) : ((hi$4 + bhi$1) | 0));
    var t$2 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$5, hi$5));
    var lo$6 = t$2.RTLong__f_lo;
    var hi$6 = t$2.RTLong__f_hi;
    var x$4 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_PER_10000_YEARS;
    var t$3 = $j_java$002elang$002eObject.$uJ(x$4);
    var lo$7 = t$3.RTLong__f_lo;
    var hi$7 = t$3.RTLong__f_hi;
    var b$2 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorDiv__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo$6, hi$6), new $j_java$002elang$002eObject.$c_RTLong(lo$7, hi$7));
    var bhi$2 = b$2.RTLong__f_hi;
    var lo$8 = ((1 + b$2.RTLong__f_lo) | 0);
    var hi$8 = ((lo$8 === 0) ? ((1 + bhi$2) | 0) : bhi$2);
    var t$4 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$5, hi$5));
    var lo$9 = t$4.RTLong__f_lo;
    var hi$9 = t$4.RTLong__f_hi;
    var x$5 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_PER_10000_YEARS;
    var t$5 = $j_java$002elang$002eObject.$uJ(x$5);
    var lo$10 = t$5.RTLong__f_lo;
    var hi$10 = t$5.RTLong__f_hi;
    var t$6 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorMod__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo$9, hi$9), new $j_java$002elang$002eObject.$c_RTLong(lo$10, hi$10));
    var lo$11 = t$6.RTLong__f_lo;
    var hi$11 = t$6.RTLong__f_hi;
    var $$x1 = $m_Ljava_time_LocalDateTime$();
    var this$27 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$11, hi$11));
    var x$6 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_0000_TO_1970;
    var b$3 = $j_java$002elang$002eObject.$uJ(x$6);
    var alo$1 = this$27.RTLong__f_lo;
    var ahi$2 = this$27.RTLong__f_hi;
    var bhi$3 = b$3.RTLong__f_hi;
    var lo$12 = ((alo$1 - b$3.RTLong__f_lo) | 0);
    var hi$12 = ((((-2147483648) ^ lo$12) > ((-2147483648) ^ alo$1)) ? (((-1) + ((ahi$2 - bhi$3) | 0)) | 0) : ((ahi$2 - bhi$3) | 0));
    var ldt = $$x1.ofEpochSecond__J__I__Ljava_time_ZoneOffset__Ljava_time_LocalDateTime(new $j_java$002elang$002eObject.$c_RTLong(lo$12, hi$12), 0, $m_Ljava_time_ZoneOffset$().UTC__Ljava_time_ZoneOffset());
    var this$30 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$8, hi$8));
    var ahi$3 = this$30.RTLong__f_hi;
    if (((ahi$3 === 0) ? (this$30.RTLong__f_lo !== 0) : (ahi$3 > 0))) {
      var str = String.fromCharCode(43);
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + new $j_java$002elang$002eObject.$c_RTLong(lo$8, hi$8))
    };
    buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + ldt);
    var this$32 = ldt.Ljava_time_LocalDateTime__f_time;
    if ((this$32.Ljava_time_LocalTime__f_second === 0)) {
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (buf.jl_StringBuilder__f_java$lang$StringBuilder$$content + ":00")
    }
  } else {
    var this$35 = $j_java$002elang$002eObject.$uJ(inSecs);
    var x$7 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_0000_TO_1970;
    var b$4 = $j_java$002elang$002eObject.$uJ(x$7);
    var alo$2 = this$35.RTLong__f_lo;
    var ahi$4 = this$35.RTLong__f_hi;
    var bhi$4 = b$4.RTLong__f_hi;
    var lo$13 = ((alo$2 + b$4.RTLong__f_lo) | 0);
    var hi$13 = ((((-2147483648) ^ lo$13) < ((-2147483648) ^ alo$2)) ? ((1 + ((ahi$4 + bhi$4) | 0)) | 0) : ((ahi$4 + bhi$4) | 0));
    var this$40 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$13, hi$13));
    var x$8 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_PER_10000_YEARS;
    var b$5 = $j_java$002elang$002eObject.$uJ(x$8);
    var this$41 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$14 = this$41.divideImpl__I__I__I__I__I(this$40.RTLong__f_lo, this$40.RTLong__f_hi, b$5.RTLong__f_lo, b$5.RTLong__f_hi);
    var hi$14 = this$41.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var this$45 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$13, hi$13));
    var x$9 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_PER_10000_YEARS;
    var b$6 = $j_java$002elang$002eObject.$uJ(x$9);
    var this$46 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$15 = this$46.remainderImpl__I__I__I__I__I(this$45.RTLong__f_lo, this$45.RTLong__f_hi, b$6.RTLong__f_lo, b$6.RTLong__f_hi);
    var hi$15 = this$46.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var $$x2 = $m_Ljava_time_LocalDateTime$();
    var this$50 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$15, hi$15));
    var x$10 = $j_java$002etime$002eformat$002einternal$002eTTBPDateTimeFormatterBuilder$0024InstantPrinterParser$0024.$m_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$().Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser$__f_java$time$format$internal$TTBPDateTimeFormatterBuilder$InstantPrinterParser$$$SECONDS_0000_TO_1970;
    var b$7 = $j_java$002elang$002eObject.$uJ(x$10);
    var alo$3 = this$50.RTLong__f_lo;
    var ahi$5 = this$50.RTLong__f_hi;
    var bhi$5 = b$7.RTLong__f_hi;
    var lo$16 = ((alo$3 - b$7.RTLong__f_lo) | 0);
    var hi$16 = ((((-2147483648) ^ lo$16) > ((-2147483648) ^ alo$3)) ? (((-1) + ((ahi$5 - bhi$5) | 0)) | 0) : ((ahi$5 - bhi$5) | 0));
    var ldt$2 = $$x2.ofEpochSecond__J__I__Ljava_time_ZoneOffset__Ljava_time_LocalDateTime(new $j_java$002elang$002eObject.$c_RTLong(lo$16, hi$16), 0, $m_Ljava_time_ZoneOffset$().UTC__Ljava_time_ZoneOffset());
    var pos = buf.length__I();
    buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + ldt$2);
    var this$52 = ldt$2.Ljava_time_LocalDateTime__f_time;
    if ((this$52.Ljava_time_LocalTime__f_second === 0)) {
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (buf.jl_StringBuilder__f_java$lang$StringBuilder$$content + ":00")
    };
    var this$54 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$14, hi$14));
    var ahi$6 = this$54.RTLong__f_hi;
    if ((ahi$6 < 0)) {
      var this$55 = ldt$2.Ljava_time_LocalDateTime__f_date;
      if ((this$55.Ljava_time_LocalDate__f_year === (-10000))) {
        var b$8 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$14, hi$14));
        var bhi$6 = b$8.RTLong__f_hi;
        var lo$17 = (((-1) + b$8.RTLong__f_lo) | 0);
        var hi$17 = ((lo$17 !== (-1)) ? bhi$6 : (((-1) + bhi$6) | 0));
        buf.replace__I__I__T__jl_StringBuilder(pos, ((2 + pos) | 0), $j_java$002elang$002eObject.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo$17, hi$17))
      } else if ($j_java$002elang$002eObject.$m_sr_BoxesRunTime$().equalsNumNum__jl_Number__jl_Number__Z(new $j_java$002elang$002eObject.$c_RTLong(lo$15, hi$15), 0)) {
        buf.insert__I__T__jl_StringBuilder(pos, ("" + new $j_java$002elang$002eObject.$c_RTLong(lo$14, hi$14)))
      } else {
        var offset = ((1 + pos) | 0);
        var t$7 = $j_java$002elang$002eObject.$uJ(new $j_java$002elang$002eObject.$c_RTLong(lo$14, hi$14));
        var lo$18 = t$7.RTLong__f_lo;
        var hi$18 = t$7.RTLong__f_hi;
        if ((hi$18 < 0)) {
          var lo$19 = ((-lo$18) | 0);
          var hi$19 = ((lo$18 !== 0) ? (~hi$18) : ((-hi$18) | 0));
          var l__lo = lo$19;
          var l__hi = hi$19
        } else {
          var l__lo = lo$18;
          var l__hi = hi$18
        };
        buf.insert__I__T__jl_StringBuilder(offset, $j_java$002elang$002eObject.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(l__lo, l__hi))
      }
    }
  };
  if ((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits === (-2))) {
    if ((inNano !== 0)) {
      var str$1 = String.fromCharCode(46);
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
      if ((((inNano % 1000000) | 0) === 0)) {
        var i = ((1000 + ((inNano / 1000000) | 0)) | 0);
        var this$65 = ("" + i);
        var str$2 = this$65.substring(1);
        buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$2)
      } else if ((((inNano % 1000) | 0) === 0)) {
        var i$1 = ((1000000 + ((inNano / 1000) | 0)) | 0);
        var this$68 = ("" + i$1);
        var str$3 = this$68.substring(1);
        buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$3)
      } else {
        var i$2 = ((1000000000 + inNano) | 0);
        var this$71 = ("" + i$2);
        var str$4 = this$71.substring(1);
        buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$4)
      }
    }
  } else if (((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits > 0) || ((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits === (-1)) && (inNano > 0)))) {
    var str$5 = String.fromCharCode(46);
    buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$5);
    var div = 100000000;
    var i$3 = 0;
    while ((((this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits === (-1)) && (inNano > 0)) || (i$3 < this.Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser__f_fractionalDigits))) {
      var digit = $j_java$002elang$002eObject.$intDiv(inNano, div);
      var c = (65535 & ((48 + digit) | 0));
      var str$6 = String.fromCharCode(c);
      buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$6);
      inNano = ((inNano - $j_java$002elang$002eObject.$imul(digit, div)) | 0);
      div = ((div / 10) | 0);
      i$3 = ((1 + i$3) | 0)
    }
  };
  var str$7 = String.fromCharCode(90);
  buf.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + buf.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$7);
  return true
});
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype.toString__T = (function() {
  return "Instant()"
});
var $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser: 0
}, false, "java.time.format.internal.TTBPDateTimeFormatterBuilder$InstantPrinterParser", {
  Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser: 1,
  O: 1,
  Ljava_time_format_internal_DateTimePrinterParser: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser as $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser };
$c_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimeFormatterBuilder$InstantPrinterParser;
/** @constructor */
function $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1(temporal$4, effectiveChrono$2, effectiveZone$2, effectiveDate$2) {
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1 = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveChrono$1 = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveZone$1 = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1 = null;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1 = temporal$4;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveChrono$1 = effectiveChrono$2;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveZone$1 = effectiveZone$2;
  this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1 = effectiveDate$2
}
export { $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 as $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.constructor = $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1;
/** @constructor */
function $h_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 as $h_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 };
$h_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype = $c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype;
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  return $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I(this, field)
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  if (((this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1 !== null) && field.isDateBased__Z())) {
    var this$1 = this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1;
    return $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z(this$1, field)
  } else {
    return this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1.isSupported__Ljava_time_temporal_TemporalField__Z(field)
  }
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  return (((this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1 !== null) && field.isDateBased__Z()) ? this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field) : this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field))
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  return (((this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1 !== null) && field.isDateBased__Z()) ? this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveDate$1.getLong__Ljava_time_temporal_TemporalField__J(field) : this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1.getLong__Ljava_time_temporal_TemporalField__J(field))
});
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery()) ? this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveChrono$1 : ((query === $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery()) ? this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_effectiveZone$1 : ((query === $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery()) ? this.Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1__f_temporal$1.query__Ljava_time_temporal_TemporalQuery__O(query) : query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this))))
});
var $d_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1: 0
}, false, "java.time.format.internal.TTBPDateTimePrintContext$$anon$1", {
  Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1
});
export { $d_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 as $d_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1 };
$c_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1.prototype.$classData = $d_Ljava_time_format_internal_TTBPDateTimePrintContext$$anon$1;
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$$anon$1() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_TemporalQueries$$anon$1 as $c_Ljava_time_temporal_TemporalQueries$$anon$1 };
$c_Ljava_time_temporal_TemporalQueries$$anon$1.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$$anon$1.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$$anon$1;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$$anon$1 as $h_Ljava_time_temporal_TemporalQueries$$anon$1 };
$h_Ljava_time_temporal_TemporalQueries$$anon$1.prototype = $c_Ljava_time_temporal_TemporalQueries$$anon$1.prototype;
$c_Ljava_time_temporal_TemporalQueries$$anon$1.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__O = (function(temporal) {
  return temporal.query__Ljava_time_temporal_TemporalQuery__O(this)
});
var $d_Ljava_time_temporal_TemporalQueries$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$$anon$1: 0
}, false, "java.time.temporal.TemporalQueries$$anon$1", {
  Ljava_time_temporal_TemporalQueries$$anon$1: 1,
  O: 1,
  Ljava_time_temporal_TemporalQuery: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$$anon$1 as $d_Ljava_time_temporal_TemporalQueries$$anon$1 };
$c_Ljava_time_temporal_TemporalQueries$$anon$1.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$$anon$1;
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$$anon$4() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_TemporalQueries$$anon$4 as $c_Ljava_time_temporal_TemporalQueries$$anon$4 };
$c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$$anon$4;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$$anon$4() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$$anon$4 as $h_Ljava_time_temporal_TemporalQueries$$anon$4 };
$h_Ljava_time_temporal_TemporalQueries$$anon$4.prototype = $c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype;
$c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_ZoneOffset = (function(temporal) {
  return (temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField()) ? $m_Ljava_time_ZoneOffset$().ofTotalSeconds__I__Ljava_time_ZoneOffset(temporal.get__Ljava_time_temporal_TemporalField__I($s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField())) : null)
});
$c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__O = (function(temporal) {
  return this.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_ZoneOffset(temporal)
});
var $d_Ljava_time_temporal_TemporalQueries$$anon$4 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$$anon$4: 0
}, false, "java.time.temporal.TemporalQueries$$anon$4", {
  Ljava_time_temporal_TemporalQueries$$anon$4: 1,
  O: 1,
  Ljava_time_temporal_TemporalQuery: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$$anon$4 as $d_Ljava_time_temporal_TemporalQueries$$anon$4 };
$c_Ljava_time_temporal_TemporalQueries$$anon$4.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$$anon$4;
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$$anon$5() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_TemporalQueries$$anon$5 as $c_Ljava_time_temporal_TemporalQueries$$anon$5 };
$c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$$anon$5;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$$anon$5() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$$anon$5 as $h_Ljava_time_temporal_TemporalQueries$$anon$5 };
$h_Ljava_time_temporal_TemporalQueries$$anon$5.prototype = $c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype;
$c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_ZoneId = (function(temporal) {
  var zone = temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery());
  return ((zone !== null) ? zone : temporal.query__Ljava_time_temporal_TemporalQuery__O($m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery()))
});
$c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__O = (function(temporal) {
  return this.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_ZoneId(temporal)
});
var $d_Ljava_time_temporal_TemporalQueries$$anon$5 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$$anon$5: 0
}, false, "java.time.temporal.TemporalQueries$$anon$5", {
  Ljava_time_temporal_TemporalQueries$$anon$5: 1,
  O: 1,
  Ljava_time_temporal_TemporalQuery: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$$anon$5 as $d_Ljava_time_temporal_TemporalQueries$$anon$5 };
$c_Ljava_time_temporal_TemporalQueries$$anon$5.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$$anon$5;
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$$anon$6() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_TemporalQueries$$anon$6 as $c_Ljava_time_temporal_TemporalQueries$$anon$6 };
$c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$$anon$6;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$$anon$6() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$$anon$6 as $h_Ljava_time_temporal_TemporalQueries$$anon$6 };
$h_Ljava_time_temporal_TemporalQueries$$anon$6.prototype = $c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype;
$c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalDate = (function(temporal) {
  return (temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField()) ? $m_Ljava_time_LocalDate$().ofEpochDay__J__Ljava_time_LocalDate(temporal.getLong__Ljava_time_temporal_TemporalField__J($s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField())) : null)
});
$c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__O = (function(temporal) {
  return this.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalDate(temporal)
});
var $d_Ljava_time_temporal_TemporalQueries$$anon$6 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$$anon$6: 0
}, false, "java.time.temporal.TemporalQueries$$anon$6", {
  Ljava_time_temporal_TemporalQueries$$anon$6: 1,
  O: 1,
  Ljava_time_temporal_TemporalQuery: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$$anon$6 as $d_Ljava_time_temporal_TemporalQueries$$anon$6 };
$c_Ljava_time_temporal_TemporalQueries$$anon$6.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$$anon$6;
/** @constructor */
function $c_Ljava_time_temporal_TemporalQueries$$anon$7() {
  /*<skip>*/
}
export { $c_Ljava_time_temporal_TemporalQueries$$anon$7 as $c_Ljava_time_temporal_TemporalQueries$$anon$7 };
$c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype.constructor = $c_Ljava_time_temporal_TemporalQueries$$anon$7;
/** @constructor */
function $h_Ljava_time_temporal_TemporalQueries$$anon$7() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_TemporalQueries$$anon$7 as $h_Ljava_time_temporal_TemporalQueries$$anon$7 };
$h_Ljava_time_temporal_TemporalQueries$$anon$7.prototype = $c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype;
$c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalTime = (function(temporal) {
  return (temporal.isSupported__Ljava_time_temporal_TemporalField__Z($s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField()) ? $m_Ljava_time_LocalTime$().ofNanoOfDay__J__Ljava_time_LocalTime(temporal.getLong__Ljava_time_temporal_TemporalField__J($s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField())) : null)
});
$c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype.queryFrom__Ljava_time_temporal_TemporalAccessor__O = (function(temporal) {
  return this.queryFrom__Ljava_time_temporal_TemporalAccessor__Ljava_time_LocalTime(temporal)
});
var $d_Ljava_time_temporal_TemporalQueries$$anon$7 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_TemporalQueries$$anon$7: 0
}, false, "java.time.temporal.TemporalQueries$$anon$7", {
  Ljava_time_temporal_TemporalQueries$$anon$7: 1,
  O: 1,
  Ljava_time_temporal_TemporalQuery: 1
});
export { $d_Ljava_time_temporal_TemporalQueries$$anon$7 as $d_Ljava_time_temporal_TemporalQueries$$anon$7 };
$c_Ljava_time_temporal_TemporalQueries$$anon$7.prototype.$classData = $d_Ljava_time_temporal_TemporalQueries$$anon$7;
function $s_Ljava_time_DayOfWeek$__MONDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__MONDAY
}
export { $s_Ljava_time_DayOfWeek$__MONDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__MONDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__TUESDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__TUESDAY
}
export { $s_Ljava_time_DayOfWeek$__TUESDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__TUESDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__WEDNESDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__WEDNESDAY
}
export { $s_Ljava_time_DayOfWeek$__WEDNESDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__WEDNESDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__THURSDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__THURSDAY
}
export { $s_Ljava_time_DayOfWeek$__THURSDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__THURSDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__FRIDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__FRIDAY
}
export { $s_Ljava_time_DayOfWeek$__FRIDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__FRIDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__SATURDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__SATURDAY
}
export { $s_Ljava_time_DayOfWeek$__SATURDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__SATURDAY__Ljava_time_DayOfWeek };
function $s_Ljava_time_DayOfWeek$__SUNDAY__Ljava_time_DayOfWeek() {
  $m_Ljava_time_DayOfWeek$();
  return $t_Ljava_time_DayOfWeek$__SUNDAY
}
export { $s_Ljava_time_DayOfWeek$__SUNDAY__Ljava_time_DayOfWeek as $s_Ljava_time_DayOfWeek$__SUNDAY__Ljava_time_DayOfWeek };
/** @constructor */
function $c_Ljava_time_DayOfWeek$() {
  this.Ljava_time_DayOfWeek$__f_$values = null;
  this.Ljava_time_DayOfWeek$__f_ENUMS$lzy1 = null;
  this.Ljava_time_DayOfWeek$__f_ENUMSbitmap$1 = false;
  $n_Ljava_time_DayOfWeek$ = this;
  $t_Ljava_time_DayOfWeek$__MONDAY = new $c_Ljava_time_DayOfWeek$$anon$1();
  $t_Ljava_time_DayOfWeek$__TUESDAY = new $c_Ljava_time_DayOfWeek$$anon$2();
  $t_Ljava_time_DayOfWeek$__WEDNESDAY = new $c_Ljava_time_DayOfWeek$$anon$3();
  $t_Ljava_time_DayOfWeek$__THURSDAY = new $c_Ljava_time_DayOfWeek$$anon$4();
  $t_Ljava_time_DayOfWeek$__FRIDAY = new $c_Ljava_time_DayOfWeek$$anon$5();
  $t_Ljava_time_DayOfWeek$__SATURDAY = new $c_Ljava_time_DayOfWeek$$anon$6();
  $t_Ljava_time_DayOfWeek$__SUNDAY = new $c_Ljava_time_DayOfWeek$$anon$7();
  this.Ljava_time_DayOfWeek$__f_$values = new ($d_Ljava_time_DayOfWeek.getArrayOf().constr)([$s_Ljava_time_DayOfWeek$__MONDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__TUESDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__WEDNESDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__THURSDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__FRIDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__SATURDAY__Ljava_time_DayOfWeek(), $s_Ljava_time_DayOfWeek$__SUNDAY__Ljava_time_DayOfWeek()])
}
export { $c_Ljava_time_DayOfWeek$ as $c_Ljava_time_DayOfWeek$ };
$c_Ljava_time_DayOfWeek$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_DayOfWeek$.prototype.constructor = $c_Ljava_time_DayOfWeek$;
/** @constructor */
function $h_Ljava_time_DayOfWeek$() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$ as $h_Ljava_time_DayOfWeek$ };
$h_Ljava_time_DayOfWeek$.prototype = $c_Ljava_time_DayOfWeek$.prototype;
$c_Ljava_time_DayOfWeek$.prototype.values__ALjava_time_DayOfWeek = (function() {
  var this$1 = this.Ljava_time_DayOfWeek$__f_$values;
  return this$1.clone__O()
});
$c_Ljava_time_DayOfWeek$.prototype.java$time$DayOfWeek$$$ENUMS__ALjava_time_DayOfWeek = (function() {
  if ((!this.Ljava_time_DayOfWeek$__f_ENUMSbitmap$1)) {
    this.Ljava_time_DayOfWeek$__f_ENUMS$lzy1 = $m_Ljava_time_DayOfWeek$().values__ALjava_time_DayOfWeek();
    this.Ljava_time_DayOfWeek$__f_ENUMSbitmap$1 = true
  };
  return this.Ljava_time_DayOfWeek$__f_ENUMS$lzy1
});
$c_Ljava_time_DayOfWeek$.prototype.of__I__Ljava_time_DayOfWeek = (function(dayOfWeek) {
  if (((dayOfWeek < 1) || (dayOfWeek > 7))) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Invalid value for DayOfWeek: " + dayOfWeek))
  } else {
    return this.java$time$DayOfWeek$$$ENUMS__ALjava_time_DayOfWeek().u[(((-1) + dayOfWeek) | 0)]
  }
});
var $d_Ljava_time_DayOfWeek$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$: 0
}, false, "java.time.DayOfWeek$", {
  Ljava_time_DayOfWeek$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
});
export { $d_Ljava_time_DayOfWeek$ as $d_Ljava_time_DayOfWeek$ };
$c_Ljava_time_DayOfWeek$.prototype.$classData = $d_Ljava_time_DayOfWeek$;
var $n_Ljava_time_DayOfWeek$;
function $m_Ljava_time_DayOfWeek$() {
  if ((!$n_Ljava_time_DayOfWeek$)) {
    $n_Ljava_time_DayOfWeek$ = new $c_Ljava_time_DayOfWeek$()
  };
  return $n_Ljava_time_DayOfWeek$
}
export { $m_Ljava_time_DayOfWeek$ as $m_Ljava_time_DayOfWeek$ };
function $s_Ljava_time_Month$__JANUARY__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__JANUARY
}
export { $s_Ljava_time_Month$__JANUARY__Ljava_time_Month as $s_Ljava_time_Month$__JANUARY__Ljava_time_Month };
function $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__FEBRUARY
}
export { $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month as $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month };
function $s_Ljava_time_Month$__MARCH__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__MARCH
}
export { $s_Ljava_time_Month$__MARCH__Ljava_time_Month as $s_Ljava_time_Month$__MARCH__Ljava_time_Month };
function $s_Ljava_time_Month$__APRIL__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__APRIL
}
export { $s_Ljava_time_Month$__APRIL__Ljava_time_Month as $s_Ljava_time_Month$__APRIL__Ljava_time_Month };
function $s_Ljava_time_Month$__MAY__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__MAY
}
export { $s_Ljava_time_Month$__MAY__Ljava_time_Month as $s_Ljava_time_Month$__MAY__Ljava_time_Month };
function $s_Ljava_time_Month$__JUNE__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__JUNE
}
export { $s_Ljava_time_Month$__JUNE__Ljava_time_Month as $s_Ljava_time_Month$__JUNE__Ljava_time_Month };
function $s_Ljava_time_Month$__JULY__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__JULY
}
export { $s_Ljava_time_Month$__JULY__Ljava_time_Month as $s_Ljava_time_Month$__JULY__Ljava_time_Month };
function $s_Ljava_time_Month$__AUGUST__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__AUGUST
}
export { $s_Ljava_time_Month$__AUGUST__Ljava_time_Month as $s_Ljava_time_Month$__AUGUST__Ljava_time_Month };
function $s_Ljava_time_Month$__SEPTEMBER__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__SEPTEMBER
}
export { $s_Ljava_time_Month$__SEPTEMBER__Ljava_time_Month as $s_Ljava_time_Month$__SEPTEMBER__Ljava_time_Month };
function $s_Ljava_time_Month$__OCTOBER__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__OCTOBER
}
export { $s_Ljava_time_Month$__OCTOBER__Ljava_time_Month as $s_Ljava_time_Month$__OCTOBER__Ljava_time_Month };
function $s_Ljava_time_Month$__NOVEMBER__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__NOVEMBER
}
export { $s_Ljava_time_Month$__NOVEMBER__Ljava_time_Month as $s_Ljava_time_Month$__NOVEMBER__Ljava_time_Month };
function $s_Ljava_time_Month$__DECEMBER__Ljava_time_Month() {
  $m_Ljava_time_Month$();
  return $t_Ljava_time_Month$__DECEMBER
}
export { $s_Ljava_time_Month$__DECEMBER__Ljava_time_Month as $s_Ljava_time_Month$__DECEMBER__Ljava_time_Month };
/** @constructor */
function $c_Ljava_time_Month$() {
  this.Ljava_time_Month$__f_$values = null;
  this.Ljava_time_Month$__f_ENUMS$lzy1 = null;
  this.Ljava_time_Month$__f_ENUMSbitmap$1 = false;
  $n_Ljava_time_Month$ = this;
  $t_Ljava_time_Month$__JANUARY = new $c_Ljava_time_Month$$anon$1();
  $t_Ljava_time_Month$__FEBRUARY = new $c_Ljava_time_Month$$anon$2();
  $t_Ljava_time_Month$__MARCH = new $c_Ljava_time_Month$$anon$3();
  $t_Ljava_time_Month$__APRIL = new $c_Ljava_time_Month$$anon$4();
  $t_Ljava_time_Month$__MAY = new $c_Ljava_time_Month$$anon$5();
  $t_Ljava_time_Month$__JUNE = new $c_Ljava_time_Month$$anon$6();
  $t_Ljava_time_Month$__JULY = new $c_Ljava_time_Month$$anon$7();
  $t_Ljava_time_Month$__AUGUST = new $c_Ljava_time_Month$$anon$8();
  $t_Ljava_time_Month$__SEPTEMBER = new $c_Ljava_time_Month$$anon$9();
  $t_Ljava_time_Month$__OCTOBER = new $c_Ljava_time_Month$$anon$10();
  $t_Ljava_time_Month$__NOVEMBER = new $c_Ljava_time_Month$$anon$11();
  $t_Ljava_time_Month$__DECEMBER = new $c_Ljava_time_Month$$anon$12();
  this.Ljava_time_Month$__f_$values = new ($d_Ljava_time_Month.getArrayOf().constr)([$s_Ljava_time_Month$__JANUARY__Ljava_time_Month(), $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month(), $s_Ljava_time_Month$__MARCH__Ljava_time_Month(), $s_Ljava_time_Month$__APRIL__Ljava_time_Month(), $s_Ljava_time_Month$__MAY__Ljava_time_Month(), $s_Ljava_time_Month$__JUNE__Ljava_time_Month(), $s_Ljava_time_Month$__JULY__Ljava_time_Month(), $s_Ljava_time_Month$__AUGUST__Ljava_time_Month(), $s_Ljava_time_Month$__SEPTEMBER__Ljava_time_Month(), $s_Ljava_time_Month$__OCTOBER__Ljava_time_Month(), $s_Ljava_time_Month$__NOVEMBER__Ljava_time_Month(), $s_Ljava_time_Month$__DECEMBER__Ljava_time_Month()])
}
export { $c_Ljava_time_Month$ as $c_Ljava_time_Month$ };
$c_Ljava_time_Month$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Month$.prototype.constructor = $c_Ljava_time_Month$;
/** @constructor */
function $h_Ljava_time_Month$() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$ as $h_Ljava_time_Month$ };
$h_Ljava_time_Month$.prototype = $c_Ljava_time_Month$.prototype;
$c_Ljava_time_Month$.prototype.values__ALjava_time_Month = (function() {
  var this$1 = this.Ljava_time_Month$__f_$values;
  return this$1.clone__O()
});
$c_Ljava_time_Month$.prototype.java$time$Month$$$ENUMS__ALjava_time_Month = (function() {
  if ((!this.Ljava_time_Month$__f_ENUMSbitmap$1)) {
    this.Ljava_time_Month$__f_ENUMS$lzy1 = $m_Ljava_time_Month$().values__ALjava_time_Month();
    this.Ljava_time_Month$__f_ENUMSbitmap$1 = true
  };
  return this.Ljava_time_Month$__f_ENUMS$lzy1
});
$c_Ljava_time_Month$.prototype.of__I__Ljava_time_Month = (function(month) {
  if (((month < 1) || (month > 12))) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Invalid value for MonthOfYear: " + month))
  } else {
    return this.java$time$Month$$$ENUMS__ALjava_time_Month().u[(((-1) + month) | 0)]
  }
});
var $d_Ljava_time_Month$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$: 0
}, false, "java.time.Month$", {
  Ljava_time_Month$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
});
export { $d_Ljava_time_Month$ as $d_Ljava_time_Month$ };
$c_Ljava_time_Month$.prototype.$classData = $d_Ljava_time_Month$;
var $n_Ljava_time_Month$;
function $m_Ljava_time_Month$() {
  if ((!$n_Ljava_time_Month$)) {
    $n_Ljava_time_Month$ = new $c_Ljava_time_Month$()
  };
  return $n_Ljava_time_Month$
}
export { $m_Ljava_time_Month$ as $m_Ljava_time_Month$ };
function $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND
}
export { $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND
}
export { $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND
}
export { $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE
}
export { $s_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR
}
export { $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM
}
export { $s_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM
}
export { $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK
}
export { $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH
}
export { $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR
}
export { $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH
}
export { $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR
}
export { $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY
}
export { $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH
}
export { $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR
}
export { $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR
}
export { $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH
}
export { $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA
}
export { $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__YEAR
}
export { $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__ERA
}
export { $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS
}
export { $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField };
function $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField() {
  $m_Ljava_time_temporal_ChronoField$();
  return $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS
}
export { $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField as $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField };
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$() {
  this.Ljava_time_temporal_ChronoField$__f_$values = null;
  $n_Ljava_time_temporal_ChronoField$ = this;
  $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND = new $c_Ljava_time_temporal_ChronoField$$anon$1();
  $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$2();
  $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND = new $c_Ljava_time_temporal_ChronoField$$anon$3();
  $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$4();
  $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND = new $c_Ljava_time_temporal_ChronoField$$anon$5();
  $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$6();
  $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE = new $c_Ljava_time_temporal_ChronoField$$anon$7();
  $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$8();
  $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR = new $c_Ljava_time_temporal_ChronoField$$anon$9();
  $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$10();
  $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM = new $c_Ljava_time_temporal_ChronoField$$anon$11();
  $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM = new $c_Ljava_time_temporal_ChronoField$$anon$12();
  $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$13();
  $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$14();
  $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$15();
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK = new $c_Ljava_time_temporal_ChronoField$$anon$16();
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH = new $c_Ljava_time_temporal_ChronoField$$anon$17();
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR = new $c_Ljava_time_temporal_ChronoField$$anon$18();
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH = new $c_Ljava_time_temporal_ChronoField$$anon$19();
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR = new $c_Ljava_time_temporal_ChronoField$$anon$20();
  $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY = new $c_Ljava_time_temporal_ChronoField$$anon$21();
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH = new $c_Ljava_time_temporal_ChronoField$$anon$22();
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR = new $c_Ljava_time_temporal_ChronoField$$anon$23();
  $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR = new $c_Ljava_time_temporal_ChronoField$$anon$24();
  $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH = new $c_Ljava_time_temporal_ChronoField$$anon$25();
  $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA = new $c_Ljava_time_temporal_ChronoField$$anon$26();
  $t_Ljava_time_temporal_ChronoField$__YEAR = new $c_Ljava_time_temporal_ChronoField$$anon$27();
  $t_Ljava_time_temporal_ChronoField$__ERA = new $c_Ljava_time_temporal_ChronoField$$anon$28();
  $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS = new $c_Ljava_time_temporal_ChronoField$$anon$29();
  $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS = new $c_Ljava_time_temporal_ChronoField$$anon$30();
  this.Ljava_time_temporal_ChronoField$__f_$values = new ($d_Ljava_time_temporal_ChronoField.getArrayOf().constr)([$s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField(), $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField()])
}
export { $c_Ljava_time_temporal_ChronoField$ as $c_Ljava_time_temporal_ChronoField$ };
$c_Ljava_time_temporal_ChronoField$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_ChronoField$.prototype.constructor = $c_Ljava_time_temporal_ChronoField$;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$ as $h_Ljava_time_temporal_ChronoField$ };
$h_Ljava_time_temporal_ChronoField$.prototype = $c_Ljava_time_temporal_ChronoField$.prototype;
$c_Ljava_time_temporal_ChronoField$.prototype.values__ALjava_time_temporal_ChronoField = (function() {
  var this$1 = this.Ljava_time_temporal_ChronoField$__f_$values;
  return this$1.clone__O()
});
var $d_Ljava_time_temporal_ChronoField$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$: 0
}, false, "java.time.temporal.ChronoField$", {
  Ljava_time_temporal_ChronoField$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
});
export { $d_Ljava_time_temporal_ChronoField$ as $d_Ljava_time_temporal_ChronoField$ };
$c_Ljava_time_temporal_ChronoField$.prototype.$classData = $d_Ljava_time_temporal_ChronoField$;
var $n_Ljava_time_temporal_ChronoField$;
function $m_Ljava_time_temporal_ChronoField$() {
  if ((!$n_Ljava_time_temporal_ChronoField$)) {
    $n_Ljava_time_temporal_ChronoField$ = new $c_Ljava_time_temporal_ChronoField$()
  };
  return $n_Ljava_time_temporal_ChronoField$
}
export { $m_Ljava_time_temporal_ChronoField$ as $m_Ljava_time_temporal_ChronoField$ };
function $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__NANOS
}
export { $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__MICROS
}
export { $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__MILLIS
}
export { $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__SECONDS
}
export { $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__MINUTES
}
export { $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__HOURS
}
export { $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS
}
export { $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__DAYS
}
export { $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__WEEKS
}
export { $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__MONTHS
}
export { $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__YEARS
}
export { $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__DECADES__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__DECADES
}
export { $s_Ljava_time_temporal_ChronoUnit$__DECADES__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__DECADES__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__CENTURIES__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__CENTURIES
}
export { $s_Ljava_time_temporal_ChronoUnit$__CENTURIES__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__CENTURIES__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__MILLENNIA__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA
}
export { $s_Ljava_time_temporal_ChronoUnit$__MILLENNIA__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__MILLENNIA__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__ERAS__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__ERAS
}
export { $s_Ljava_time_temporal_ChronoUnit$__ERAS__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__ERAS__Ljava_time_temporal_ChronoUnit };
function $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit() {
  $m_Ljava_time_temporal_ChronoUnit$();
  return $t_Ljava_time_temporal_ChronoUnit$__FOREVER
}
export { $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit as $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit };
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$() {
  this.Ljava_time_temporal_ChronoUnit$__f_$values = null;
  $n_Ljava_time_temporal_ChronoUnit$ = this;
  $t_Ljava_time_temporal_ChronoUnit$__NANOS = new $c_Ljava_time_temporal_ChronoUnit$$anon$1();
  $t_Ljava_time_temporal_ChronoUnit$__MICROS = new $c_Ljava_time_temporal_ChronoUnit$$anon$2();
  $t_Ljava_time_temporal_ChronoUnit$__MILLIS = new $c_Ljava_time_temporal_ChronoUnit$$anon$3();
  $t_Ljava_time_temporal_ChronoUnit$__SECONDS = new $c_Ljava_time_temporal_ChronoUnit$$anon$4();
  $t_Ljava_time_temporal_ChronoUnit$__MINUTES = new $c_Ljava_time_temporal_ChronoUnit$$anon$5();
  $t_Ljava_time_temporal_ChronoUnit$__HOURS = new $c_Ljava_time_temporal_ChronoUnit$$anon$6();
  $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS = new $c_Ljava_time_temporal_ChronoUnit$$anon$7();
  $t_Ljava_time_temporal_ChronoUnit$__DAYS = new $c_Ljava_time_temporal_ChronoUnit$$anon$8();
  $t_Ljava_time_temporal_ChronoUnit$__WEEKS = new $c_Ljava_time_temporal_ChronoUnit$$anon$9();
  $t_Ljava_time_temporal_ChronoUnit$__MONTHS = new $c_Ljava_time_temporal_ChronoUnit$$anon$10();
  $t_Ljava_time_temporal_ChronoUnit$__YEARS = new $c_Ljava_time_temporal_ChronoUnit$$anon$11();
  $t_Ljava_time_temporal_ChronoUnit$__DECADES = new $c_Ljava_time_temporal_ChronoUnit$$anon$12();
  $t_Ljava_time_temporal_ChronoUnit$__CENTURIES = new $c_Ljava_time_temporal_ChronoUnit$$anon$13();
  $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA = new $c_Ljava_time_temporal_ChronoUnit$$anon$14();
  $t_Ljava_time_temporal_ChronoUnit$__ERAS = new $c_Ljava_time_temporal_ChronoUnit$$anon$15();
  $t_Ljava_time_temporal_ChronoUnit$__FOREVER = new $c_Ljava_time_temporal_ChronoUnit$$anon$16();
  this.Ljava_time_temporal_ChronoUnit$__f_$values = new ($j_java$002etime$002etemporal$002eChronoUnit.$d_Ljava_time_temporal_ChronoUnit.getArrayOf().constr)([$s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DECADES__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__CENTURIES__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MILLENNIA__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__ERAS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit()])
}
export { $c_Ljava_time_temporal_ChronoUnit$ as $c_Ljava_time_temporal_ChronoUnit$ };
$c_Ljava_time_temporal_ChronoUnit$.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_temporal_ChronoUnit$.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$ as $h_Ljava_time_temporal_ChronoUnit$ };
$h_Ljava_time_temporal_ChronoUnit$.prototype = $c_Ljava_time_temporal_ChronoUnit$.prototype;
var $d_Ljava_time_temporal_ChronoUnit$ = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$: 0
}, false, "java.time.temporal.ChronoUnit$", {
  Ljava_time_temporal_ChronoUnit$: 1,
  O: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Sum: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$ as $d_Ljava_time_temporal_ChronoUnit$ };
$c_Ljava_time_temporal_ChronoUnit$.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$;
var $n_Ljava_time_temporal_ChronoUnit$;
function $m_Ljava_time_temporal_ChronoUnit$() {
  if ((!$n_Ljava_time_temporal_ChronoUnit$)) {
    $n_Ljava_time_temporal_ChronoUnit$ = new $c_Ljava_time_temporal_ChronoUnit$()
  };
  return $n_Ljava_time_temporal_ChronoUnit$
}
export { $m_Ljava_time_temporal_ChronoUnit$ as $m_Ljava_time_temporal_ChronoUnit$ };
/** @constructor */
function $c_Ljava_time_zone_ZoneRules$Fixed(offset) {
  this.Ljava_time_zone_ZoneRules$Fixed__f_offset = null;
  this.Ljava_time_zone_ZoneRules$Fixed__f_offset = offset
}
export { $c_Ljava_time_zone_ZoneRules$Fixed as $c_Ljava_time_zone_ZoneRules$Fixed };
$c_Ljava_time_zone_ZoneRules$Fixed.prototype = new $j_java$002etime$002ezone$002eZoneRules.$h_Ljava_time_zone_ZoneRules();
$c_Ljava_time_zone_ZoneRules$Fixed.prototype.constructor = $c_Ljava_time_zone_ZoneRules$Fixed;
/** @constructor */
function $h_Ljava_time_zone_ZoneRules$Fixed() {
  /*<skip>*/
}
export { $h_Ljava_time_zone_ZoneRules$Fixed as $h_Ljava_time_zone_ZoneRules$Fixed };
$h_Ljava_time_zone_ZoneRules$Fixed.prototype = $c_Ljava_time_zone_ZoneRules$Fixed.prototype;
$c_Ljava_time_zone_ZoneRules$Fixed.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_zone_ZoneRules$Fixed)) {
    var fixed = obj;
    if ((this === fixed)) {
      return true
    } else {
      var x = this.Ljava_time_zone_ZoneRules$Fixed__f_offset;
      var x$2 = fixed.Ljava_time_zone_ZoneRules$Fixed__f_offset;
      return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
    }
  } else if (false) {
    var rules = obj;
    if (rules.isFixedOffset__Z()) {
      var x$3 = this.Ljava_time_zone_ZoneRules$Fixed__f_offset;
      var x$4 = rules.getOffset__Ljava_time_Instant__Ljava_time_ZoneOffset($m_Ljava_time_Instant$().EPOCH__Ljava_time_Instant());
      return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
    } else {
      return false
    }
  } else {
    return false
  }
});
$c_Ljava_time_zone_ZoneRules$Fixed.prototype.hashCode__I = (function() {
  var this$1 = this.Ljava_time_zone_ZoneRules$Fixed__f_offset;
  var $$x1 = this$1.Ljava_time_ZoneOffset__f_totalSeconds;
  var this$2 = this.Ljava_time_zone_ZoneRules$Fixed__f_offset;
  return (1 ^ (((31 + $$x1) | 0) ^ ((31 + this$2.Ljava_time_ZoneOffset__f_totalSeconds) | 0)))
});
$c_Ljava_time_zone_ZoneRules$Fixed.prototype.toString__T = (function() {
  return ("FixedRules:" + this.Ljava_time_zone_ZoneRules$Fixed__f_offset)
});
function $isArrayOf_Ljava_time_zone_ZoneRules$Fixed(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_zone_ZoneRules$Fixed)))
}
export { $isArrayOf_Ljava_time_zone_ZoneRules$Fixed as $isArrayOf_Ljava_time_zone_ZoneRules$Fixed };
var $d_Ljava_time_zone_ZoneRules$Fixed = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_zone_ZoneRules$Fixed: 0
}, false, "java.time.zone.ZoneRules$Fixed", {
  Ljava_time_zone_ZoneRules$Fixed: 1,
  Ljava_time_zone_ZoneRules: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_zone_ZoneRules$Fixed as $d_Ljava_time_zone_ZoneRules$Fixed };
$c_Ljava_time_zone_ZoneRules$Fixed.prototype.$classData = $d_Ljava_time_zone_ZoneRules$Fixed;
/** @constructor */
function $c_Ljava_time_Duration(seconds, nanos) {
  this.Ljava_time_Duration__f_seconds = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_Duration__f_nanos = 0;
  this.Ljava_time_Duration__f_seconds = seconds;
  this.Ljava_time_Duration__f_nanos = nanos
}
export { $c_Ljava_time_Duration as $c_Ljava_time_Duration };
$c_Ljava_time_Duration.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Duration.prototype.constructor = $c_Ljava_time_Duration;
/** @constructor */
function $h_Ljava_time_Duration() {
  /*<skip>*/
}
export { $h_Ljava_time_Duration as $h_Ljava_time_Duration };
$h_Ljava_time_Duration.prototype = $c_Ljava_time_Duration.prototype;
$c_Ljava_time_Duration.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_Ljava_time_Duration)) {
    var otherDuration = other;
    if ((this === otherDuration)) {
      return true
    } else {
      var this$1 = this.Ljava_time_Duration__f_seconds;
      var b = otherDuration.Ljava_time_Duration__f_seconds;
      if (((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))) {
        return (this.Ljava_time_Duration__f_nanos === otherDuration.Ljava_time_Duration__f_nanos)
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_Ljava_time_Duration.prototype.hashCode__I = (function() {
  var this$2 = this.Ljava_time_Duration__f_seconds;
  var this$1 = this.Ljava_time_Duration__f_seconds;
  var hi = this$1.RTLong__f_hi;
  var lo = (this$2.RTLong__f_lo ^ hi);
  return ((lo + $j_java$002elang$002eObject.$imul(51, this.Ljava_time_Duration__f_nanos)) | 0)
});
$c_Ljava_time_Duration.prototype.toString__T = (function() {
  if ((this === $m_Ljava_time_Duration$().ZERO__Ljava_time_Duration())) {
    return "PT0S"
  };
  var this$2 = this.Ljava_time_Duration__f_seconds;
  var value = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_HOUR;
  var hi = (value >> 31);
  var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo = this$3.divideImpl__I__I__I__I__I(this$2.RTLong__f_lo, this$2.RTLong__f_hi, value, hi);
  var hi$1 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var this$5 = this.Ljava_time_Duration__f_seconds;
  var value$1 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_HOUR;
  var hi$2 = (value$1 >> 31);
  var this$6 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$1 = this$6.remainderImpl__I__I__I__I__I(this$5.RTLong__f_lo, this$5.RTLong__f_hi, value$1, hi$2);
  var hi$3 = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var value$2 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE;
  var hi$4 = (value$2 >> 31);
  var this$8 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$2 = this$8.divideImpl__I__I__I__I__I(lo$1, hi$3, value$2, hi$4);
  var this$10 = this.Ljava_time_Duration__f_seconds;
  var value$3 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE;
  var hi$6 = (value$3 >> 31);
  var this$11 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$3 = this$11.remainderImpl__I__I__I__I__I(this$10.RTLong__f_lo, this$10.RTLong__f_hi, value$3, hi$6);
  var buf = $j_java$002elang$002eObject.$ct_scm_StringBuilder__I__(new $j_java$002elang$002eObject.$c_scm_StringBuilder(), 24);
  buf.append__T__scm_StringBuilder("PT");
  if ((!((lo === 0) && (hi$1 === 0)))) {
    buf.append__J__scm_StringBuilder(new $j_java$002elang$002eObject.$c_RTLong(lo, hi$1)).append__C__scm_StringBuilder(72)
  };
  if ((lo$2 !== 0)) {
    buf.append__I__scm_StringBuilder(lo$2).append__C__scm_StringBuilder(77)
  };
  if ((((lo$3 === 0) && (this.Ljava_time_Duration__f_nanos === 0)) && (buf.scm_StringBuilder__f_underlying.length__I() > 2))) {
    return buf.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  if (((lo$3 < 0) && (this.Ljava_time_Duration__f_nanos > 0))) {
    if ((lo$3 === (-1))) {
      buf.append__T__scm_StringBuilder("-0")
    } else {
      buf.append__I__scm_StringBuilder(((1 + lo$3) | 0))
    }
  } else {
    buf.append__I__scm_StringBuilder(lo$3)
  };
  if ((this.Ljava_time_Duration__f_nanos > 0)) {
    var pos = buf.scm_StringBuilder__f_underlying.length__I();
    if ((lo$3 < 0)) {
      buf.append__I__scm_StringBuilder(((2000000000 - this.Ljava_time_Duration__f_nanos) | 0))
    } else {
      buf.append__I__scm_StringBuilder(((1000000000 + this.Ljava_time_Duration__f_nanos) | 0))
    };
    while (true) {
      var index = (((-1) + buf.scm_StringBuilder__f_underlying.length__I()) | 0);
      if ((buf.scm_StringBuilder__f_underlying.charAt__I__C(index) === 48)) {
        var len = (((-1) + buf.scm_StringBuilder__f_underlying.length__I()) | 0);
        buf.scm_StringBuilder__f_underlying.setLength__I__V(len)
      } else {
        break
      }
    };
    buf.setCharAt__I__C__scm_StringBuilder(pos, 46)
  };
  buf.append__C__scm_StringBuilder(83);
  return buf.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
function $isArrayOf_Ljava_time_Duration(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_Duration)))
}
export { $isArrayOf_Ljava_time_Duration as $isArrayOf_Ljava_time_Duration };
var $d_Ljava_time_Duration = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Duration: 0
}, false, "java.time.Duration", {
  Ljava_time_Duration: 1,
  O: 1,
  Ljava_time_temporal_TemporalAmount: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_Duration as $d_Ljava_time_Duration };
$c_Ljava_time_Duration.prototype.$classData = $d_Ljava_time_Duration;
function $f_Ljava_time_chrono_ChronoZonedDateTime__get__Ljava_time_temporal_TemporalField__I($thiz, field) {
  var x = $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField();
  if ((x === field)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Field too large for an int: " + field))
  } else {
    var x$3 = $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField();
    if ((x$3 === field)) {
      var this$1 = $thiz.Ljava_time_ZonedDateTime__f_offset;
      return this$1.Ljava_time_ZoneOffset__f_totalSeconds
    } else {
      return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? $thiz.Ljava_time_ZonedDateTime__f_dateTime.get__Ljava_time_temporal_TemporalField__I(field) : $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I($thiz, field))
    }
  }
}
export { $f_Ljava_time_chrono_ChronoZonedDateTime__get__Ljava_time_temporal_TemporalField__I as $f_Ljava_time_chrono_ChronoZonedDateTime__get__Ljava_time_temporal_TemporalField__I };
function $f_Ljava_time_chrono_ChronoZonedDateTime__query__Ljava_time_temporal_TemporalQuery__O($thiz, query) {
  matchAlts3: {
    matchAlts4: {
      var x = $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery();
      if ((x === query)) {
        break matchAlts4
      };
      var x$3 = $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery();
      if ((x$3 === query)) {
        break matchAlts4
      };
      break matchAlts3
    };
    return $thiz.Ljava_time_ZonedDateTime__f_zone
  };
  var x$5 = $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery();
  if ((x$5 === query)) {
    return $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology()
  };
  var x$7 = $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery();
  if ((x$7 === query)) {
    return $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit()
  };
  var x$9 = $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery();
  if ((x$9 === query)) {
    return $thiz.Ljava_time_ZonedDateTime__f_offset
  };
  var x$11 = $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery();
  if ((x$11 === query)) {
    var $$x1 = $m_Ljava_time_LocalDate$();
    var this$3 = $thiz.Ljava_time_ZonedDateTime__f_dateTime;
    return $$x1.ofEpochDay__J__Ljava_time_LocalDate(this$3.Ljava_time_LocalDateTime__f_date.toEpochDay__J())
  };
  var x$13 = $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery();
  if ((x$13 === query)) {
    var this$4 = $thiz.Ljava_time_ZonedDateTime__f_dateTime;
    return this$4.Ljava_time_LocalDateTime__f_time
  };
  return $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O($thiz, query)
}
export { $f_Ljava_time_chrono_ChronoZonedDateTime__query__Ljava_time_temporal_TemporalQuery__O as $f_Ljava_time_chrono_ChronoZonedDateTime__query__Ljava_time_temporal_TemporalQuery__O };
function $f_Ljava_time_chrono_ChronoZonedDateTime__toEpochSecond__J($thiz) {
  var this$1 = $thiz.Ljava_time_ZonedDateTime__f_dateTime;
  var t = this$1.Ljava_time_LocalDateTime__f_date.toEpochDay__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var b0 = (65535 & lo);
  var b1 = ((lo >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(20864, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(20864, b1);
  var lo$1 = ((a0b0 + (((b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (((((($j_java$002elang$002eObject.$imul(86400, hi) + b1) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + b0) | 0) >>> 16) | 0)) | 0);
  var this$2 = $thiz.Ljava_time_ZonedDateTime__f_dateTime;
  var value = this$2.Ljava_time_LocalDateTime__f_time.toSecondOfDay__I();
  var hi$2 = (value >> 31);
  var lo$2 = ((lo$1 + value) | 0);
  var hi$3 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ lo$1)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  var secs__lo = lo$2;
  var secs__hi = hi$3;
  var this$7__lo = secs__lo;
  var this$7__hi = secs__hi;
  var this$5 = $thiz.Ljava_time_ZonedDateTime__f_offset;
  var value$1 = this$5.Ljava_time_ZoneOffset__f_totalSeconds;
  var hi$4 = (value$1 >> 31);
  var alo = this$7__lo;
  var ahi = this$7__hi;
  var lo$3 = ((alo - value$1) | 0);
  var hi$5 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - hi$4) | 0)) | 0) : ((ahi - hi$4) | 0));
  var $$x1__lo = lo$3;
  var $$x1__hi = hi$5;
  secs__lo = $$x1__lo;
  secs__hi = $$x1__hi;
  return new $j_java$002elang$002eObject.$c_RTLong(secs__lo, secs__hi)
}
export { $f_Ljava_time_chrono_ChronoZonedDateTime__toEpochSecond__J as $f_Ljava_time_chrono_ChronoZonedDateTime__toEpochSecond__J };
function $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z($thiz, field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? field.isDateBased__Z() : ((field !== null) && $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z($thiz, field)))
}
export { $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z as $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z };
function $f_Ljava_time_chrono_ChronoLocalDate__query__Ljava_time_temporal_TemporalQuery__O($thiz, query) {
  var x = $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery();
  if ((x === query)) {
    return $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology()
  };
  var x$3 = $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery();
  if ((x$3 === query)) {
    return $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit()
  };
  var x$5 = $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery();
  if ((x$5 === query)) {
    return $m_Ljava_time_LocalDate$().ofEpochDay__J__Ljava_time_LocalDate($thiz.toEpochDay__J())
  };
  matchAlts1: {
    matchAlts2: {
      var x$7 = $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery();
      if ((x$7 === query)) {
        break matchAlts2
      };
      var x$9 = $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery();
      if ((x$9 === query)) {
        break matchAlts2
      };
      var x$11 = $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery();
      if ((x$11 === query)) {
        break matchAlts2
      };
      var x$13 = $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery();
      if ((x$13 === query)) {
        break matchAlts2
      };
      break matchAlts1
    };
    return null
  };
  return $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O($thiz, query)
}
export { $f_Ljava_time_chrono_ChronoLocalDate__query__Ljava_time_temporal_TemporalQuery__O as $f_Ljava_time_chrono_ChronoLocalDate__query__Ljava_time_temporal_TemporalQuery__O };
/** @constructor */
function $c_Ljava_time_chrono_ChronoLocalDateTime() {
  /*<skip>*/
}
export { $c_Ljava_time_chrono_ChronoLocalDateTime as $c_Ljava_time_chrono_ChronoLocalDateTime };
$c_Ljava_time_chrono_ChronoLocalDateTime.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_chrono_ChronoLocalDateTime.prototype.constructor = $c_Ljava_time_chrono_ChronoLocalDateTime;
/** @constructor */
function $h_Ljava_time_chrono_ChronoLocalDateTime() {
  /*<skip>*/
}
export { $h_Ljava_time_chrono_ChronoLocalDateTime as $h_Ljava_time_chrono_ChronoLocalDateTime };
$h_Ljava_time_chrono_ChronoLocalDateTime.prototype = $c_Ljava_time_chrono_ChronoLocalDateTime.prototype;
$c_Ljava_time_chrono_ChronoLocalDateTime.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  var x = $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery();
  if ((x === query)) {
    return $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology()
  };
  var x$3 = $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery();
  if ((x$3 === query)) {
    return $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit()
  };
  var x$5 = $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery();
  if ((x$5 === query)) {
    return $m_Ljava_time_LocalDate$().ofEpochDay__J__Ljava_time_LocalDate(this.Ljava_time_LocalDateTime__f_date.toEpochDay__J())
  };
  var x$7 = $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery();
  if ((x$7 === query)) {
    return this.Ljava_time_LocalDateTime__f_time
  };
  matchAlts1: {
    matchAlts2: {
      var x$9 = $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery();
      if ((x$9 === query)) {
        break matchAlts2
      };
      var x$11 = $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery();
      if ((x$11 === query)) {
        break matchAlts2
      };
      var x$13 = $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery();
      if ((x$13 === query)) {
        break matchAlts2
      };
      break matchAlts1
    };
    return null
  };
  return $f_Ljava_time_temporal_TemporalAccessor__query__Ljava_time_temporal_TemporalQuery__O(this, query)
});
/** @constructor */
function $c_Ljava_time_Instant(seconds, nanos) {
  this.Ljava_time_Instant__f_seconds = $j_java$002elang$002eObject.$L0;
  this.Ljava_time_Instant__f_nanos = 0;
  this.Ljava_time_Instant__f_seconds = seconds;
  this.Ljava_time_Instant__f_nanos = nanos
}
export { $c_Ljava_time_Instant as $c_Ljava_time_Instant };
$c_Ljava_time_Instant.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_Instant.prototype.constructor = $c_Ljava_time_Instant;
/** @constructor */
function $h_Ljava_time_Instant() {
  /*<skip>*/
}
export { $h_Ljava_time_Instant as $h_Ljava_time_Instant };
$h_Ljava_time_Instant.prototype = $c_Ljava_time_Instant.prototype;
$c_Ljava_time_Instant.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? ((((field === $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField()) || (field === $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField())) || (field === $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField())) || (field === $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField())) : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_Instant.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  return $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(this, field)
});
$c_Ljava_time_Instant.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var f = field;
    var x = $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField();
    if ((x === f)) {
      return this.Ljava_time_Instant__f_nanos
    } else {
      var x$3 = $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField();
      if ((x$3 === f)) {
        return ((this.Ljava_time_Instant__f_nanos / 1000) | 0)
      } else {
        var x$5 = $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField();
        if ((x$5 === f)) {
          return ((this.Ljava_time_Instant__f_nanos / 1000000) | 0)
        } else {
          throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
        }
      }
    }
  } else {
    return $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(this, field).checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(this.getLong__Ljava_time_temporal_TemporalField__J(field), field)
  }
});
$c_Ljava_time_Instant.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var f = field;
    var x = $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField();
    if ((x === f)) {
      var value = this.Ljava_time_Instant__f_nanos;
      var hi = (value >> 31);
      return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
    } else {
      var x$3 = $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField();
      if ((x$3 === f)) {
        var value$1 = this.Ljava_time_Instant__f_nanos;
        var hi$1 = (value$1 >> 31);
        var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
        var lo = this$3.divideImpl__I__I__I__I__I(value$1, hi$1, 1000, 0);
        var hi$2 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        return new $j_java$002elang$002eObject.$c_RTLong(lo, hi$2)
      } else {
        var x$5 = $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField();
        if ((x$5 === f)) {
          var value$2 = this.Ljava_time_Instant__f_nanos;
          var hi$3 = (value$2 >> 31);
          var this$5 = $j_java$002elang$002eObject.$m_RTLong$();
          var lo$1 = this$5.divideImpl__I__I__I__I__I(value$2, hi$3, 1000000, 0);
          var hi$4 = this$5.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          return new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$4)
        } else {
          var x$7 = $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField();
          if ((x$7 === f)) {
            return this.Ljava_time_Instant__f_seconds
          } else {
            throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
          }
        }
      }
    }
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_Instant.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery()) ? $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit() : (((((((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) || (query === $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery())) ? null : query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this)))
});
$c_Ljava_time_Instant.prototype.toEpochMilli__J = (function() {
  var this$1 = this.Ljava_time_Instant__f_seconds;
  var ahi = this$1.RTLong__f_hi;
  if ((ahi >= 0)) {
    var t = this.Ljava_time_Instant__f_seconds;
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var t$1 = $j_java$002elang$002eMath$0024.$m_jl_Math$().multiplyExact__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo, hi), new $j_java$002elang$002eObject.$c_RTLong(1000, 0));
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    var value = this.Ljava_time_Instant__f_nanos;
    var hi$2 = (value >> 31);
    var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$2 = this$3.divideImpl__I__I__I__I__I(value, hi$2, 1000000, 0);
    var hi$3 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return $j_java$002elang$002eMath$0024.$m_jl_Math$().addExact__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$1), new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$3))
  } else {
    var b = this.Ljava_time_Instant__f_seconds;
    var bhi = b.RTLong__f_hi;
    var lo$3 = ((1 + b.RTLong__f_lo) | 0);
    var hi$4 = ((lo$3 === 0) ? ((1 + bhi) | 0) : bhi);
    var t$2 = $j_java$002elang$002eMath$0024.$m_jl_Math$().multiplyExact__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo$3, hi$4), new $j_java$002elang$002eObject.$c_RTLong(1000, 0));
    var lo$4 = t$2.RTLong__f_lo;
    var hi$5 = t$2.RTLong__f_hi;
    var value$1 = this.Ljava_time_Instant__f_nanos;
    var hi$6 = (value$1 >> 31);
    var this$6 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$5 = this$6.divideImpl__I__I__I__I__I(value$1, hi$6, 1000000, 0);
    var hi$7 = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$6 = ((1000 - lo$5) | 0);
    var hi$8 = ((((-2147483648) ^ lo$6) > (-2147482648)) ? (((-1) - hi$7) | 0) : ((-hi$7) | 0));
    return $j_java$002elang$002eMath$0024.$m_jl_Math$().subtractExact__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo$4, hi$5), new $j_java$002elang$002eObject.$c_RTLong(lo$6, hi$8))
  }
});
$c_Ljava_time_Instant.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_Ljava_time_Instant)) {
    var otherInstant = other;
    if ((this === otherInstant)) {
      return true
    } else {
      var this$1 = this.Ljava_time_Instant__f_seconds;
      var b = otherInstant.Ljava_time_Instant__f_seconds;
      if (((this$1.RTLong__f_lo === b.RTLong__f_lo) && (this$1.RTLong__f_hi === b.RTLong__f_hi))) {
        return (this.Ljava_time_Instant__f_nanos === otherInstant.Ljava_time_Instant__f_nanos)
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_Ljava_time_Instant.prototype.hashCode__I = (function() {
  var this$2 = this.Ljava_time_Instant__f_seconds;
  var this$1 = this.Ljava_time_Instant__f_seconds;
  var hi = this$1.RTLong__f_hi;
  var lo = (this$2.RTLong__f_lo ^ hi);
  return ((lo + $j_java$002elang$002eObject.$imul(51, this.Ljava_time_Instant__f_nanos)) | 0)
});
$c_Ljava_time_Instant.prototype.toString__T = (function() {
  return $m_Ljava_time_format_DateTimeFormatter$().ISO_INSTANT__Ljava_time_format_DateTimeFormatter().format__Ljava_time_temporal_TemporalAccessor__T(this)
});
function $isArrayOf_Ljava_time_Instant(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_Instant)))
}
export { $isArrayOf_Ljava_time_Instant as $isArrayOf_Ljava_time_Instant };
var $d_Ljava_time_Instant = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Instant: 0
}, false, "java.time.Instant", {
  Ljava_time_Instant: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_Temporal: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_Instant as $d_Ljava_time_Instant };
$c_Ljava_time_Instant.prototype.$classData = $d_Ljava_time_Instant;
function $p_Ljava_time_LocalTime__get0__Ljava_time_temporal_TemporalField__J($thiz, field) {
  var x1 = field;
  var x = $s_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND__Ljava_time_temporal_ChronoField();
  if ((x === x1)) {
    var value = $thiz.Ljava_time_LocalTime__f_nano;
    var hi = (value >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
  };
  var x$3 = $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$3 === x1)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Field too large for an int: " + field))
  };
  var x$5 = $s_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND__Ljava_time_temporal_ChronoField();
  if ((x$5 === x1)) {
    var value$1 = $thiz.Ljava_time_LocalTime__f_nano;
    var hi$1 = (value$1 >> 31);
    var this$3 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo = this$3.divideImpl__I__I__I__I__I(value$1, hi$1, 1000, 0);
    var hi$2 = this$3.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $j_java$002elang$002eObject.$c_RTLong(lo, hi$2)
  };
  var x$7 = $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$7 === x1)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Field too large for an int: " + field))
  };
  var x$9 = $s_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND__Ljava_time_temporal_ChronoField();
  if ((x$9 === x1)) {
    var value$2 = $thiz.Ljava_time_LocalTime__f_nano;
    var hi$3 = (value$2 >> 31);
    var this$5 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$1 = this$5.divideImpl__I__I__I__I__I(value$2, hi$3, 1000000, 0);
    var hi$4 = this$5.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$4)
  };
  var x$11 = $s_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$11 === x1)) {
    var this$6 = $thiz.toNanoOfDay__J();
    var this$7 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$2 = this$7.divideImpl__I__I__I__I__I(this$6.RTLong__f_lo, this$6.RTLong__f_hi, 1000000, 0);
    var hi$5 = this$7.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$5)
  };
  var x$13 = $s_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE__Ljava_time_temporal_ChronoField();
  if ((x$13 === x1)) {
    var value$3 = $thiz.Ljava_time_LocalTime__f_second;
    var hi$6 = (value$3 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$3, hi$6)
  };
  var x$15 = $s_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$15 === x1)) {
    var value$4 = $thiz.toSecondOfDay__I();
    var hi$7 = (value$4 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$4, hi$7)
  };
  var x$17 = $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR__Ljava_time_temporal_ChronoField();
  if ((x$17 === x1)) {
    var value$5 = $thiz.Ljava_time_LocalTime__f_minute;
    var hi$8 = (value$5 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$5, hi$8)
  };
  var x$19 = $s_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$19 === x1)) {
    var value$6 = $thiz.Ljava_time_LocalTime__f_hour;
    var hi$9 = (value$6 >> 31);
    var b0 = (65535 & value$6);
    var b1 = ((value$6 >>> 16) | 0);
    var a0b0 = $j_java$002elang$002eObject.$imul(60, b0);
    var a0b1 = $j_java$002elang$002eObject.$imul(60, b1);
    var lo$3 = ((a0b0 + (a0b1 << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$10 = (($j_java$002elang$002eObject.$imul(60, hi$9) + ((c1part >>> 16) | 0)) | 0);
    var value$7 = $thiz.Ljava_time_LocalTime__f_minute;
    var hi$11 = (value$7 >> 31);
    var lo$4 = ((lo$3 + value$7) | 0);
    var hi$12 = ((((-2147483648) ^ lo$4) < ((-2147483648) ^ lo$3)) ? ((1 + ((hi$10 + hi$11) | 0)) | 0) : ((hi$10 + hi$11) | 0));
    return new $j_java$002elang$002eObject.$c_RTLong(lo$4, hi$12)
  };
  var x$21 = $s_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM__Ljava_time_temporal_ChronoField();
  if ((x$21 === x1)) {
    var value$8 = $thiz.Ljava_time_LocalTime__f_hour;
    var hi$13 = (value$8 >> 31);
    var this$15 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$5 = this$15.remainderImpl__I__I__I__I__I(value$8, hi$13, 12, 0);
    var hi$14 = this$15.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $j_java$002elang$002eObject.$c_RTLong(lo$5, hi$14)
  };
  var x$23 = $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM__Ljava_time_temporal_ChronoField();
  if ((x$23 === x1)) {
    var value$9 = $thiz.Ljava_time_LocalTime__f_hour;
    var hi$15 = (value$9 >> 31);
    var this$17 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$6 = this$17.remainderImpl__I__I__I__I__I(value$9, hi$15, 12, 0);
    var hi$16 = this$17.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var this$18 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$7 = this$18.remainderImpl__I__I__I__I__I(lo$6, hi$16, 12, 0);
    var hi$17 = this$18.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if (((lo$7 === 0) && (hi$17 === 0))) {
      return new $j_java$002elang$002eObject.$c_RTLong(12, 0)
    } else {
      return new $j_java$002elang$002eObject.$c_RTLong(lo$6, hi$16)
    }
  };
  var x$25 = $s_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$25 === x1)) {
    var value$10 = $thiz.Ljava_time_LocalTime__f_hour;
    var hi$18 = (value$10 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$10, hi$18)
  };
  var x$27 = $s_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$27 === x1)) {
    if (($thiz.Ljava_time_LocalTime__f_hour === 0)) {
      return new $j_java$002elang$002eObject.$c_RTLong(24, 0)
    } else {
      var value$11 = $thiz.Ljava_time_LocalTime__f_hour;
      var hi$19 = (value$11 >> 31);
      return new $j_java$002elang$002eObject.$c_RTLong(value$11, hi$19)
    }
  };
  var x$29 = $s_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY__Ljava_time_temporal_ChronoField();
  if ((x$29 === x1)) {
    var value$12 = $thiz.Ljava_time_LocalTime__f_hour;
    var hi$20 = (value$12 >> 31);
    var this$22 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$8 = this$22.divideImpl__I__I__I__I__I(value$12, hi$20, 12, 0);
    var hi$21 = this$22.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return new $j_java$002elang$002eObject.$c_RTLong(lo$8, hi$21)
  };
  throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
}
export { $p_Ljava_time_LocalTime__get0__Ljava_time_temporal_TemporalField__J as $p_Ljava_time_LocalTime__get0__Ljava_time_temporal_TemporalField__J };
/** @constructor */
function $c_Ljava_time_LocalTime(_hour, _minute, _second, nano) {
  this.Ljava_time_LocalTime__f_nano = 0;
  this.Ljava_time_LocalTime__f_hour = 0;
  this.Ljava_time_LocalTime__f_minute = 0;
  this.Ljava_time_LocalTime__f_second = 0;
  this.Ljava_time_LocalTime__f_nano = nano;
  this.Ljava_time_LocalTime__f_hour = ((_hour << 24) >> 24);
  this.Ljava_time_LocalTime__f_minute = ((_minute << 24) >> 24);
  this.Ljava_time_LocalTime__f_second = ((_second << 24) >> 24)
}
export { $c_Ljava_time_LocalTime as $c_Ljava_time_LocalTime };
$c_Ljava_time_LocalTime.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_LocalTime.prototype.constructor = $c_Ljava_time_LocalTime;
/** @constructor */
function $h_Ljava_time_LocalTime() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalTime as $h_Ljava_time_LocalTime };
$h_Ljava_time_LocalTime.prototype = $c_Ljava_time_LocalTime.prototype;
$c_Ljava_time_LocalTime.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? field.isTimeBased__Z() : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_LocalTime.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  return $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(this, field)
});
$c_Ljava_time_LocalTime.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var this$1 = $p_Ljava_time_LocalTime__get0__Ljava_time_temporal_TemporalField__J(this, field);
    return this$1.RTLong__f_lo
  } else {
    return $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I(this, field)
  }
});
$c_Ljava_time_LocalTime.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    if ((field === $s_Ljava_time_temporal_ChronoField$__NANO_OF_DAY__Ljava_time_temporal_ChronoField())) {
      return this.toNanoOfDay__J()
    };
    if ((field === $s_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY__Ljava_time_temporal_ChronoField())) {
      var this$1 = this.toNanoOfDay__J();
      var this$2 = $j_java$002elang$002eObject.$m_RTLong$();
      var lo = this$2.divideImpl__I__I__I__I__I(this$1.RTLong__f_lo, this$1.RTLong__f_hi, 1000, 0);
      var hi = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return new $j_java$002elang$002eObject.$c_RTLong(lo, hi)
    };
    return $p_Ljava_time_LocalTime__get0__Ljava_time_temporal_TemporalField__J(this, field)
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_LocalTime.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  var x = $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery();
  if ((x === query)) {
    return $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit()
  };
  var x$3 = $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery();
  if ((x$3 === query)) {
    return this
  };
  matchAlts1: {
    matchAlts2: {
      var x$5 = $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery();
      if ((x$5 === query)) {
        break matchAlts2
      };
      var x$7 = $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery();
      if ((x$7 === query)) {
        break matchAlts2
      };
      var x$9 = $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery();
      if ((x$9 === query)) {
        break matchAlts2
      };
      var x$11 = $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery();
      if ((x$11 === query)) {
        break matchAlts2
      };
      var x$13 = $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery();
      if ((x$13 === query)) {
        break matchAlts2
      };
      break matchAlts1
    };
    return null
  };
  return query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this)
});
$c_Ljava_time_LocalTime.prototype.toSecondOfDay__I = (function() {
  var total = $j_java$002elang$002eObject.$imul(this.Ljava_time_LocalTime__f_hour, $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_HOUR);
  total = ((total + $j_java$002elang$002eObject.$imul(this.Ljava_time_LocalTime__f_minute, $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_SECONDS_PER_MINUTE)) | 0);
  total = ((total + this.Ljava_time_LocalTime__f_second) | 0);
  return total
});
$c_Ljava_time_LocalTime.prototype.toNanoOfDay__J = (function() {
  var value = this.Ljava_time_LocalTime__f_hour;
  var hi = (value >> 31);
  var b = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_NANOS_PER_HOUR;
  var blo = b.RTLong__f_lo;
  var a0 = (65535 & value);
  var a1 = ((value >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(a0, b0);
  var a1b0 = $j_java$002elang$002eObject.$imul(a1, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (((((((($j_java$002elang$002eObject.$imul(value, b.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi, blo)) | 0) + $j_java$002elang$002eObject.$imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  var total__lo = lo;
  var total__hi = hi$1;
  var this$3__lo = total__lo;
  var this$3__hi = total__hi;
  var value$1 = this.Ljava_time_LocalTime__f_minute;
  var hi$2 = (value$1 >> 31);
  var b$1 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_NANOS_PER_MINUTE;
  var blo$1 = b$1.RTLong__f_lo;
  var a0$1 = (65535 & value$1);
  var a1$1 = ((value$1 >>> 16) | 0);
  var b0$1 = (65535 & blo$1);
  var b1$1 = ((blo$1 >>> 16) | 0);
  var a0b0$1 = $j_java$002elang$002eObject.$imul(a0$1, b0$1);
  var a1b0$1 = $j_java$002elang$002eObject.$imul(a1$1, b0$1);
  var a0b1$1 = $j_java$002elang$002eObject.$imul(a0$1, b1$1);
  var lo$1 = ((a0b0$1 + (((a1b0$1 + a0b1$1) | 0) << 16)) | 0);
  var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
  var hi$3 = (((((((($j_java$002elang$002eObject.$imul(value$1, b$1.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi$2, blo$1)) | 0) + $j_java$002elang$002eObject.$imul(a1$1, b1$1)) | 0) + ((c1part$1 >>> 16) | 0)) | 0) + (((((65535 & c1part$1) + a1b0$1) | 0) >>> 16) | 0)) | 0);
  var alo = this$3__lo;
  var ahi = this$3__hi;
  var lo$2 = ((alo + lo$1) | 0);
  var hi$4 = ((((-2147483648) ^ lo$2) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi$3) | 0)) | 0) : ((ahi + hi$3) | 0));
  var $$x1__lo = lo$2;
  var $$x1__hi = hi$4;
  total__lo = $$x1__lo;
  total__hi = $$x1__hi;
  var this$6__lo = total__lo;
  var this$6__hi = total__hi;
  var value$2 = this.Ljava_time_LocalTime__f_second;
  var hi$5 = (value$2 >> 31);
  var b$2 = $m_Ljava_time_LocalTime$().Ljava_time_LocalTime$__f_NANOS_PER_SECOND;
  var blo$2 = b$2.RTLong__f_lo;
  var a0$2 = (65535 & value$2);
  var a1$2 = ((value$2 >>> 16) | 0);
  var b0$2 = (65535 & blo$2);
  var b1$2 = ((blo$2 >>> 16) | 0);
  var a0b0$2 = $j_java$002elang$002eObject.$imul(a0$2, b0$2);
  var a1b0$2 = $j_java$002elang$002eObject.$imul(a1$2, b0$2);
  var a0b1$2 = $j_java$002elang$002eObject.$imul(a0$2, b1$2);
  var lo$3 = ((a0b0$2 + (((a1b0$2 + a0b1$2) | 0) << 16)) | 0);
  var c1part$2 = ((((a0b0$2 >>> 16) | 0) + a0b1$2) | 0);
  var hi$6 = (((((((($j_java$002elang$002eObject.$imul(value$2, b$2.RTLong__f_hi) + $j_java$002elang$002eObject.$imul(hi$5, blo$2)) | 0) + $j_java$002elang$002eObject.$imul(a1$2, b1$2)) | 0) + ((c1part$2 >>> 16) | 0)) | 0) + (((((65535 & c1part$2) + a1b0$2) | 0) >>> 16) | 0)) | 0);
  var alo$1 = this$6__lo;
  var ahi$1 = this$6__hi;
  var lo$4 = ((alo$1 + lo$3) | 0);
  var hi$7 = ((((-2147483648) ^ lo$4) < ((-2147483648) ^ alo$1)) ? ((1 + ((ahi$1 + hi$6) | 0)) | 0) : ((ahi$1 + hi$6) | 0));
  var $$x2__lo = lo$4;
  var $$x2__hi = hi$7;
  total__lo = $$x2__lo;
  total__hi = $$x2__hi;
  var this$9__lo = total__lo;
  var this$9__hi = total__hi;
  var value$3 = this.Ljava_time_LocalTime__f_nano;
  var hi$8 = (value$3 >> 31);
  var alo$2 = this$9__lo;
  var ahi$2 = this$9__hi;
  var lo$5 = ((alo$2 + value$3) | 0);
  var hi$9 = ((((-2147483648) ^ lo$5) < ((-2147483648) ^ alo$2)) ? ((1 + ((ahi$2 + hi$8) | 0)) | 0) : ((ahi$2 + hi$8) | 0));
  var $$x3__lo = lo$5;
  var $$x3__hi = hi$9;
  total__lo = $$x3__lo;
  total__hi = $$x3__hi;
  return new $j_java$002elang$002eObject.$c_RTLong(total__lo, total__hi)
});
$c_Ljava_time_LocalTime.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_LocalTime)) {
    var other = obj;
    return ((this === other) || ((((this.Ljava_time_LocalTime__f_hour === other.Ljava_time_LocalTime__f_hour) && (this.Ljava_time_LocalTime__f_minute === other.Ljava_time_LocalTime__f_minute)) && (this.Ljava_time_LocalTime__f_second === other.Ljava_time_LocalTime__f_second)) && (this.Ljava_time_LocalTime__f_nano === other.Ljava_time_LocalTime__f_nano)))
  } else {
    return false
  }
});
$c_Ljava_time_LocalTime.prototype.hashCode__I = (function() {
  var t = this.toNanoOfDay__J();
  var lo = t.RTLong__f_lo;
  var hi = t.RTLong__f_hi;
  var lo$1 = (lo ^ hi);
  return lo$1
});
$c_Ljava_time_LocalTime.prototype.toString__T = (function() {
  var buf = $j_java$002elang$002eObject.$ct_scm_StringBuilder__I__(new $j_java$002elang$002eObject.$c_scm_StringBuilder(), 18);
  var hourValue = this.Ljava_time_LocalTime__f_hour;
  var minuteValue = this.Ljava_time_LocalTime__f_minute;
  var secondValue = this.Ljava_time_LocalTime__f_second;
  var nanoValue = this.Ljava_time_LocalTime__f_nano;
  buf.append__T__scm_StringBuilder(((hourValue < 10) ? "0" : "")).append__I__scm_StringBuilder(hourValue).append__T__scm_StringBuilder(((minuteValue < 10) ? ":0" : ":")).append__I__scm_StringBuilder(minuteValue);
  if (((secondValue > 0) || (nanoValue > 0))) {
    buf.append__T__scm_StringBuilder(((secondValue < 10) ? ":0" : ":")).append__I__scm_StringBuilder(secondValue);
    if ((nanoValue > 0)) {
      buf.append__C__scm_StringBuilder(46);
      if ((((nanoValue % 1000000) | 0) === 0)) {
        var i = ((1000 + ((nanoValue / 1000000) | 0)) | 0);
        var this$2 = ("" + i);
        buf.append__T__scm_StringBuilder(this$2.substring(1))
      } else if ((((nanoValue % 1000) | 0) === 0)) {
        var i$1 = ((1000000 + ((nanoValue / 1000) | 0)) | 0);
        var this$5 = ("" + i$1);
        buf.append__T__scm_StringBuilder(this$5.substring(1))
      } else {
        var i$2 = ((1000000000 + nanoValue) | 0);
        var this$8 = ("" + i$2);
        buf.append__T__scm_StringBuilder(this$8.substring(1))
      }
    }
  };
  return buf.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
function $isArrayOf_Ljava_time_LocalTime(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_LocalTime)))
}
export { $isArrayOf_Ljava_time_LocalTime as $isArrayOf_Ljava_time_LocalTime };
var $d_Ljava_time_LocalTime = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalTime: 0
}, false, "java.time.LocalTime", {
  Ljava_time_LocalTime: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_Temporal: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_LocalTime as $d_Ljava_time_LocalTime };
$c_Ljava_time_LocalTime.prototype.$classData = $d_Ljava_time_LocalTime;
/** @constructor */
function $c_Ljava_time_ZoneOffset(totalSeconds) {
  this.Ljava_time_ZoneOffset__f_totalSeconds = 0;
  this.Ljava_time_ZoneOffset__f_id = null;
  this.Ljava_time_ZoneOffset__f_totalSeconds = totalSeconds;
  $ct_Ljava_time_ZoneId__(this);
  this.Ljava_time_ZoneOffset__f_id = $m_Ljava_time_ZoneOffset$().java$time$ZoneOffset$$$buildId__I__T(totalSeconds)
}
export { $c_Ljava_time_ZoneOffset as $c_Ljava_time_ZoneOffset };
$c_Ljava_time_ZoneOffset.prototype = new $h_Ljava_time_ZoneId();
$c_Ljava_time_ZoneOffset.prototype.constructor = $c_Ljava_time_ZoneOffset;
/** @constructor */
function $h_Ljava_time_ZoneOffset() {
  /*<skip>*/
}
export { $h_Ljava_time_ZoneOffset as $h_Ljava_time_ZoneOffset };
$h_Ljava_time_ZoneOffset.prototype = $c_Ljava_time_ZoneOffset.prototype;
$c_Ljava_time_ZoneOffset.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field === $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField()) : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_ZoneOffset.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField())) {
    return field.Ljava_time_temporal_ChronoField__f__range
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
});
$c_Ljava_time_ZoneOffset.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField())) {
    return this.Ljava_time_ZoneOffset__f_totalSeconds
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field).checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(this.getLong__Ljava_time_temporal_TemporalField__J(field), field)
  }
});
$c_Ljava_time_ZoneOffset.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField())) {
    var value = this.Ljava_time_ZoneOffset__f_totalSeconds;
    var hi = (value >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Unsupported field: " + field))
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_ZoneOffset.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return (((query === $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery()) || (query === $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery())) ? this : ((((((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) || (query === $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery())) ? null : query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this)))
});
$c_Ljava_time_ZoneOffset.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_ZoneOffset)) {
    var that = obj;
    return ((this === that) || (this.Ljava_time_ZoneOffset__f_totalSeconds === that.Ljava_time_ZoneOffset__f_totalSeconds))
  } else {
    return false
  }
});
$c_Ljava_time_ZoneOffset.prototype.hashCode__I = (function() {
  return this.Ljava_time_ZoneOffset__f_totalSeconds
});
$c_Ljava_time_ZoneOffset.prototype.toString__T = (function() {
  return this.Ljava_time_ZoneOffset__f_id
});
function $isArrayOf_Ljava_time_ZoneOffset(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_ZoneOffset)))
}
export { $isArrayOf_Ljava_time_ZoneOffset as $isArrayOf_Ljava_time_ZoneOffset };
var $d_Ljava_time_ZoneOffset = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_ZoneOffset: 0
}, false, "java.time.ZoneOffset", {
  Ljava_time_ZoneOffset: 1,
  Ljava_time_ZoneId: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1
});
export { $d_Ljava_time_ZoneOffset as $d_Ljava_time_ZoneOffset };
$c_Ljava_time_ZoneOffset.prototype.$classData = $d_Ljava_time_ZoneOffset;
/** @constructor */
function $c_Ljava_time_ZonedDateTime(dateTime, offset, zone) {
  this.Ljava_time_ZonedDateTime__f_dateTime = null;
  this.Ljava_time_ZonedDateTime__f_offset = null;
  this.Ljava_time_ZonedDateTime__f_zone = null;
  this.Ljava_time_ZonedDateTime__f_dateTime = dateTime;
  this.Ljava_time_ZonedDateTime__f_offset = offset;
  this.Ljava_time_ZonedDateTime__f_zone = zone
}
export { $c_Ljava_time_ZonedDateTime as $c_Ljava_time_ZonedDateTime };
$c_Ljava_time_ZonedDateTime.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_ZonedDateTime.prototype.constructor = $c_Ljava_time_ZonedDateTime;
/** @constructor */
function $h_Ljava_time_ZonedDateTime() {
  /*<skip>*/
}
export { $h_Ljava_time_ZonedDateTime as $h_Ljava_time_ZonedDateTime };
$h_Ljava_time_ZonedDateTime.prototype = $c_Ljava_time_ZonedDateTime.prototype;
$c_Ljava_time_ZonedDateTime.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) || ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_ZonedDateTime.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (((field === $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField()) || (field === $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField())) ? field.Ljava_time_temporal_ChronoField__f__range : this.Ljava_time_ZonedDateTime__f_dateTime.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)) : this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field))
});
$c_Ljava_time_ZonedDateTime.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var f = field;
    var x = $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField();
    if ((x === f)) {
      throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Field too large for an int: " + field))
    } else {
      var x$3 = $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField();
      if ((x$3 === f)) {
        var this$1 = this.Ljava_time_ZonedDateTime__f_offset;
        return this$1.Ljava_time_ZoneOffset__f_totalSeconds
      } else {
        return this.Ljava_time_ZonedDateTime__f_dateTime.get__Ljava_time_temporal_TemporalField__I(field)
      }
    }
  } else {
    return $f_Ljava_time_chrono_ChronoZonedDateTime__get__Ljava_time_temporal_TemporalField__I(this, field)
  }
});
$c_Ljava_time_ZonedDateTime.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var f = field;
    var x = $s_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS__Ljava_time_temporal_ChronoField();
    if ((x === f)) {
      return $f_Ljava_time_chrono_ChronoZonedDateTime__toEpochSecond__J(this)
    } else {
      var x$3 = $s_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS__Ljava_time_temporal_ChronoField();
      if ((x$3 === f)) {
        var this$1 = this.Ljava_time_ZonedDateTime__f_offset;
        var value = this$1.Ljava_time_ZoneOffset__f_totalSeconds;
        var hi = (value >> 31);
        return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
      } else {
        return this.Ljava_time_ZonedDateTime__f_dateTime.getLong__Ljava_time_temporal_TemporalField__J(field)
      }
    }
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_ZonedDateTime.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  if ((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery())) {
    var this$1 = this.Ljava_time_ZonedDateTime__f_dateTime;
    return this$1.Ljava_time_LocalDateTime__f_date
  } else {
    return $f_Ljava_time_chrono_ChronoZonedDateTime__query__Ljava_time_temporal_TemporalQuery__O(this, query)
  }
});
$c_Ljava_time_ZonedDateTime.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_ZonedDateTime)) {
    var other = obj;
    if ((this === other)) {
      return true
    } else {
      var x = this.Ljava_time_ZonedDateTime__f_dateTime;
      var x$2 = other.Ljava_time_ZonedDateTime__f_dateTime;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        var x$3 = this.Ljava_time_ZonedDateTime__f_offset;
        var x$4 = other.Ljava_time_ZonedDateTime__f_offset;
        var $$x1 = ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        var x$5 = this.Ljava_time_ZonedDateTime__f_zone;
        var x$6 = other.Ljava_time_ZonedDateTime__f_zone;
        return ((x$5 === null) ? (x$6 === null) : x$5.equals__O__Z(x$6))
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_Ljava_time_ZonedDateTime.prototype.hashCode__I = (function() {
  var $$x2 = this.Ljava_time_ZonedDateTime__f_dateTime.hashCode__I();
  var this$1 = this.Ljava_time_ZonedDateTime__f_offset;
  var $$x1 = this$1.Ljava_time_ZoneOffset__f_totalSeconds;
  var i = this.Ljava_time_ZonedDateTime__f_zone.hashCode__I();
  return (($$x2 ^ $$x1) ^ ((i << 3) | ((i >>> 29) | 0)))
});
$c_Ljava_time_ZonedDateTime.prototype.toString__T = (function() {
  var str = (("" + this.Ljava_time_ZonedDateTime__f_dateTime.toString__T()) + this.Ljava_time_ZonedDateTime__f_offset.Ljava_time_ZoneOffset__f_id);
  if ((this.Ljava_time_ZonedDateTime__f_offset !== this.Ljava_time_ZonedDateTime__f_zone)) {
    str = ((str + ("[" + this.Ljava_time_ZonedDateTime__f_zone)) + "]")
  };
  return str
});
function $isArrayOf_Ljava_time_ZonedDateTime(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_ZonedDateTime)))
}
export { $isArrayOf_Ljava_time_ZonedDateTime as $isArrayOf_Ljava_time_ZonedDateTime };
var $d_Ljava_time_ZonedDateTime = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_ZonedDateTime: 0
}, false, "java.time.ZonedDateTime", {
  Ljava_time_ZonedDateTime: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_Temporal: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_time_chrono_ChronoZonedDateTime: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_ZonedDateTime as $d_Ljava_time_ZonedDateTime };
$c_Ljava_time_ZonedDateTime.prototype.$classData = $d_Ljava_time_ZonedDateTime;
function $p_Ljava_time_LocalDate__get0__Ljava_time_temporal_TemporalField__J($thiz, field) {
  var x2 = field;
  var x = $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField();
  if ((x === x2)) {
    var value = $thiz.getDayOfWeek__Ljava_time_DayOfWeek().getValue__I();
    var hi = (value >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
  };
  var x$3 = $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH__Ljava_time_temporal_ChronoField();
  if ((x$3 === x2)) {
    var value$1 = $thiz.Ljava_time_LocalDate__f_day;
    var hi$1 = (value$1 >> 31);
    var lo = (((-1) + value$1) | 0);
    var hi$2 = ((lo !== (-1)) ? hi$1 : (((-1) + hi$1) | 0));
    var this$4 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$1 = this$4.remainderImpl__I__I__I__I__I(lo, hi$2, 7, 0);
    var hi$3 = this$4.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$2 = ((1 + lo$1) | 0);
    var hi$4 = ((lo$2 === 0) ? ((1 + hi$3) | 0) : hi$3);
    return new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$4)
  };
  var x$5 = $s_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR__Ljava_time_temporal_ChronoField();
  if ((x$5 === x2)) {
    var value$2 = $thiz.getDayOfYear__I();
    var hi$5 = (value$2 >> 31);
    var lo$3 = (((-1) + value$2) | 0);
    var hi$6 = ((lo$3 !== (-1)) ? hi$5 : (((-1) + hi$5) | 0));
    var this$8 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$4 = this$8.remainderImpl__I__I__I__I__I(lo$3, hi$6, 7, 0);
    var hi$7 = this$8.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$5 = ((1 + lo$4) | 0);
    var hi$8 = ((lo$5 === 0) ? ((1 + hi$7) | 0) : hi$7);
    return new $j_java$002elang$002eObject.$c_RTLong(lo$5, hi$8)
  };
  var x$7 = $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField();
  if ((x$7 === x2)) {
    var value$3 = $thiz.Ljava_time_LocalDate__f_day;
    var hi$9 = (value$3 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$3, hi$9)
  };
  var x$9 = $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField();
  if ((x$9 === x2)) {
    var value$4 = $thiz.getDayOfYear__I();
    var hi$10 = (value$4 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$4, hi$10)
  };
  var x$11 = $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField();
  if ((x$11 === x2)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Field too large for an int: " + field))
  };
  var x$13 = $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField();
  if ((x$13 === x2)) {
    var value$5 = $thiz.Ljava_time_LocalDate__f_day;
    var hi$11 = (value$5 >> 31);
    var lo$6 = (((-1) + value$5) | 0);
    var hi$12 = ((lo$6 !== (-1)) ? hi$11 : (((-1) + hi$11) | 0));
    var this$14 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$7 = this$14.divideImpl__I__I__I__I__I(lo$6, hi$12, 7, 0);
    var hi$13 = this$14.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$8 = ((1 + lo$7) | 0);
    var hi$14 = ((lo$8 === 0) ? ((1 + hi$13) | 0) : hi$13);
    return new $j_java$002elang$002eObject.$c_RTLong(lo$8, hi$14)
  };
  var x$15 = $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR__Ljava_time_temporal_ChronoField();
  if ((x$15 === x2)) {
    var value$6 = $thiz.getDayOfYear__I();
    var hi$15 = (value$6 >> 31);
    var lo$9 = (((-1) + value$6) | 0);
    var hi$16 = ((lo$9 !== (-1)) ? hi$15 : (((-1) + hi$15) | 0));
    var this$18 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$10 = this$18.divideImpl__I__I__I__I__I(lo$9, hi$16, 7, 0);
    var hi$17 = this$18.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$11 = ((1 + lo$10) | 0);
    var hi$18 = ((lo$11 === 0) ? ((1 + hi$17) | 0) : hi$17);
    return new $j_java$002elang$002eObject.$c_RTLong(lo$11, hi$18)
  };
  var x$17 = $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField();
  if ((x$17 === x2)) {
    var value$7 = $thiz.Ljava_time_LocalDate__f_month;
    var hi$19 = (value$7 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$7, hi$19)
  };
  var x$19 = $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField();
  if ((x$19 === x2)) {
    throw $j_java$002etime$002eDateTimeException.$ct_Ljava_time_DateTimeException__T__(new $j_java$002etime$002eDateTimeException.$c_Ljava_time_DateTimeException(), ("Field too large for an int: " + field))
  };
  var x$21 = $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField();
  if ((x$21 === x2)) {
    if (($thiz.Ljava_time_LocalDate__f_year >= 1)) {
      var value$8 = $thiz.Ljava_time_LocalDate__f_year;
      var hi$20 = (value$8 >> 31);
      return new $j_java$002elang$002eObject.$c_RTLong(value$8, hi$20)
    } else {
      var value$9 = $thiz.Ljava_time_LocalDate__f_year;
      var hi$21 = (value$9 >> 31);
      var lo$12 = ((1 - value$9) | 0);
      var hi$22 = ((((-2147483648) ^ lo$12) > (-2147483647)) ? (((-1) - hi$21) | 0) : ((-hi$21) | 0));
      return new $j_java$002elang$002eObject.$c_RTLong(lo$12, hi$22)
    }
  };
  var x$23 = $s_Ljava_time_temporal_ChronoField$__YEAR__Ljava_time_temporal_ChronoField();
  if ((x$23 === x2)) {
    var value$10 = $thiz.Ljava_time_LocalDate__f_year;
    var hi$23 = (value$10 >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value$10, hi$23)
  };
  var x$25 = $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField();
  if ((x$25 === x2)) {
    return (($thiz.Ljava_time_LocalDate__f_year >= 1) ? new $j_java$002elang$002eObject.$c_RTLong(1, 0) : $j_java$002elang$002eObject.$L0)
  };
  throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
}
export { $p_Ljava_time_LocalDate__get0__Ljava_time_temporal_TemporalField__J as $p_Ljava_time_LocalDate__get0__Ljava_time_temporal_TemporalField__J };
function $p_Ljava_time_LocalDate__getProlepticMonth__J($thiz) {
  var value = $thiz.Ljava_time_LocalDate__f_year;
  var hi = (value >> 31);
  var b0 = (65535 & value);
  var b1 = ((value >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(12, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(12, b1);
  var lo = ((a0b0 + (a0b1 << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (($j_java$002elang$002eObject.$imul(12, hi) + ((c1part >>> 16) | 0)) | 0);
  var value$1 = (((-1) + $thiz.Ljava_time_LocalDate__f_month) | 0);
  var hi$2 = (value$1 >> 31);
  var lo$1 = ((lo + value$1) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ lo)) ? ((1 + ((hi$1 + hi$2) | 0)) | 0) : ((hi$1 + hi$2) | 0));
  return new $j_java$002elang$002eObject.$c_RTLong(lo$1, hi$3)
}
export { $p_Ljava_time_LocalDate__getProlepticMonth__J as $p_Ljava_time_LocalDate__getProlepticMonth__J };
/** @constructor */
function $c_Ljava_time_LocalDate(year, monthOfYear, dayOfMonth) {
  this.Ljava_time_LocalDate__f_year = 0;
  this.Ljava_time_LocalDate__f_month = 0;
  this.Ljava_time_LocalDate__f_day = 0;
  this.Ljava_time_LocalDate__f_year = year;
  this.Ljava_time_LocalDate__f_month = ((monthOfYear << 16) >> 16);
  this.Ljava_time_LocalDate__f_day = ((dayOfMonth << 16) >> 16)
}
export { $c_Ljava_time_LocalDate as $c_Ljava_time_LocalDate };
$c_Ljava_time_LocalDate.prototype = new $j_java$002elang$002eObject.$h_O();
$c_Ljava_time_LocalDate.prototype.constructor = $c_Ljava_time_LocalDate;
/** @constructor */
function $h_Ljava_time_LocalDate() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalDate as $h_Ljava_time_LocalDate };
$h_Ljava_time_LocalDate.prototype = $c_Ljava_time_LocalDate.prototype;
$c_Ljava_time_LocalDate.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return $f_Ljava_time_chrono_ChronoLocalDate__isSupported__Ljava_time_temporal_TemporalField__Z(this, field)
});
$c_Ljava_time_LocalDate.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var f = field;
    if (f.isDateBased__Z()) {
      var x = $s_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH__Ljava_time_temporal_ChronoField();
      if ((x === f)) {
        var $$x1 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
        var value = this.lengthOfMonth__I();
        var hi = (value >> 31);
        return $$x1.of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(value, hi))
      } else {
        var x$3 = $s_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR__Ljava_time_temporal_ChronoField();
        if ((x$3 === f)) {
          var $$x2 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
          var value$1 = this.lengthOfYear__I();
          var hi$1 = (value$1 >> 31);
          return $$x2.of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(value$1, hi$1))
        } else {
          var x$5 = $s_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH__Ljava_time_temporal_ChronoField();
          if ((x$5 === f)) {
            var $$x5 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
            if (($m_Ljava_time_Month$().of__I__Ljava_time_Month(this.Ljava_time_LocalDate__f_month) === $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month())) {
              var $$x4 = $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology();
              var value$2 = this.Ljava_time_LocalDate__f_year;
              var hi$2 = (value$2 >> 31);
              var $$x3 = (!$$x4.isLeapYear__J__Z(new $j_java$002elang$002eObject.$c_RTLong(value$2, hi$2)))
            } else {
              var $$x3 = false
            };
            return $$x5.of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), ($$x3 ? new $j_java$002elang$002eObject.$c_RTLong(4, 0) : new $j_java$002elang$002eObject.$c_RTLong(5, 0)))
          } else {
            var x$7 = $s_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA__Ljava_time_temporal_ChronoField();
            if ((x$7 === f)) {
              if ((this.Ljava_time_LocalDate__f_year <= 0)) {
                var $$x6 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
                var value$3 = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
                var hi$3 = (value$3 >> 31);
                var lo = ((1 + value$3) | 0);
                var hi$4 = ((lo === 0) ? ((1 + hi$3) | 0) : hi$3);
                return $$x6.of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(lo, hi$4))
              } else {
                var $$x7 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
                var value$4 = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
                var hi$5 = (value$4 >> 31);
                return $$x7.of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(value$4, hi$5))
              }
            } else {
              return field.Ljava_time_temporal_ChronoField__f__range
            }
          }
        }
      }
    } else {
      throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
    }
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
});
$c_Ljava_time_LocalDate.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    var this$1 = $p_Ljava_time_LocalDate__get0__Ljava_time_temporal_TemporalField__J(this, field);
    return this$1.RTLong__f_lo
  } else {
    return $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I(this, field)
  }
});
$c_Ljava_time_LocalDate.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    if ((field === $s_Ljava_time_temporal_ChronoField$__EPOCH_DAY__Ljava_time_temporal_ChronoField())) {
      return this.toEpochDay__J()
    };
    if ((field === $s_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH__Ljava_time_temporal_ChronoField())) {
      return $p_Ljava_time_LocalDate__getProlepticMonth__J(this)
    };
    return $p_Ljava_time_LocalDate__get0__Ljava_time_temporal_TemporalField__J(this, field)
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_LocalDate.prototype.getDayOfYear__I = (function() {
  var $$x2 = $m_Ljava_time_Month$().of__I__Ljava_time_Month(this.Ljava_time_LocalDate__f_month);
  var $$x1 = $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology();
  var value = this.Ljava_time_LocalDate__f_year;
  var hi = (value >> 31);
  return (((-1) + (($$x2.firstDayOfYear__Z__I($$x1.isLeapYear__J__Z(new $j_java$002elang$002eObject.$c_RTLong(value, hi))) + this.Ljava_time_LocalDate__f_day) | 0)) | 0)
});
$c_Ljava_time_LocalDate.prototype.getDayOfWeek__Ljava_time_DayOfWeek = (function() {
  var b = this.toEpochDay__J();
  var bhi = b.RTLong__f_hi;
  var lo = ((3 + b.RTLong__f_lo) | 0);
  var hi = ((((-2147483648) ^ lo) < (-2147483645)) ? ((1 + bhi) | 0) : bhi);
  var this$2 = $j_java$002elang$002eMath$0024.$m_jl_Math$().floorMod__J__J__J(new $j_java$002elang$002eObject.$c_RTLong(lo, hi), new $j_java$002elang$002eObject.$c_RTLong(7, 0));
  var dow0 = this$2.RTLong__f_lo;
  return $m_Ljava_time_DayOfWeek$().of__I__Ljava_time_DayOfWeek(((1 + dow0) | 0))
});
$c_Ljava_time_LocalDate.prototype.lengthOfMonth__I = (function() {
  var x3 = this.Ljava_time_LocalDate__f_month;
  switch (x3) {
    case 2: {
      var $$x1 = $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology();
      var value = this.Ljava_time_LocalDate__f_year;
      var hi = (value >> 31);
      if ($$x1.isLeapYear__J__Z(new $j_java$002elang$002eObject.$c_RTLong(value, hi))) {
        return 29
      } else {
        return 28
      };
      break
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      return 30;
      break
    }
    default: {
      return 31
    }
  }
});
$c_Ljava_time_LocalDate.prototype.lengthOfYear__I = (function() {
  var $$x1 = $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology();
  var value = this.Ljava_time_LocalDate__f_year;
  var hi = (value >> 31);
  if ($$x1.isLeapYear__J__Z(new $j_java$002elang$002eObject.$c_RTLong(value, hi))) {
    return 366
  } else {
    return 365
  }
});
$c_Ljava_time_LocalDate.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) ? this : $f_Ljava_time_chrono_ChronoLocalDate__query__Ljava_time_temporal_TemporalQuery__O(this, query))
});
$c_Ljava_time_LocalDate.prototype.toEpochDay__J = (function() {
  var value = this.Ljava_time_LocalDate__f_year;
  var hi = (value >> 31);
  var value$1 = this.Ljava_time_LocalDate__f_month;
  var hi$1 = (value$1 >> 31);
  var total__lo = 0;
  var total__hi = 0;
  var this$3__lo = total__lo;
  var this$3__hi = total__hi;
  var b0 = (65535 & value);
  var b1 = ((value >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(365, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(365, b1);
  var lo = ((a0b0 + (a0b1 << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$2 = (($j_java$002elang$002eObject.$imul(365, hi) + ((c1part >>> 16) | 0)) | 0);
  var alo = this$3__lo;
  var ahi = this$3__hi;
  var lo$1 = ((alo + lo) | 0);
  var hi$3 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + hi$2) | 0)) | 0) : ((ahi + hi$2) | 0));
  var $$x1__lo = lo$1;
  var $$x1__hi = hi$3;
  total__lo = $$x1__lo;
  total__hi = $$x1__hi;
  if ((hi >= 0)) {
    var this$13__lo = total__lo;
    var this$13__hi = total__hi;
    var lo$2 = ((3 + value) | 0);
    var hi$4 = ((((-2147483648) ^ lo$2) < (-2147483645)) ? ((1 + hi) | 0) : hi);
    var this$6 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$3 = this$6.divideImpl__I__I__I__I__I(lo$2, hi$4, 4, 0);
    var hi$5 = this$6.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$4 = ((99 + value) | 0);
    var hi$6 = ((((-2147483648) ^ lo$4) < (-2147483549)) ? ((1 + hi) | 0) : hi);
    var this$8 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$5 = this$8.divideImpl__I__I__I__I__I(lo$4, hi$6, 100, 0);
    var hi$7 = this$8.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$6 = ((lo$3 - lo$5) | 0);
    var hi$8 = ((((-2147483648) ^ lo$6) > ((-2147483648) ^ lo$3)) ? (((-1) + ((hi$5 - hi$7) | 0)) | 0) : ((hi$5 - hi$7) | 0));
    var lo$7 = ((399 + value) | 0);
    var hi$9 = ((((-2147483648) ^ lo$7) < (-2147483249)) ? ((1 + hi) | 0) : hi);
    var this$11 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$8 = this$11.divideImpl__I__I__I__I__I(lo$7, hi$9, 400, 0);
    var hi$10 = this$11.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$9 = ((lo$6 + lo$8) | 0);
    var hi$11 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$6)) ? ((1 + ((hi$8 + hi$10) | 0)) | 0) : ((hi$8 + hi$10) | 0));
    var alo$1 = this$13__lo;
    var ahi$1 = this$13__hi;
    var lo$10 = ((alo$1 + lo$9) | 0);
    var hi$12 = ((((-2147483648) ^ lo$10) < ((-2147483648) ^ alo$1)) ? ((1 + ((ahi$1 + hi$11) | 0)) | 0) : ((ahi$1 + hi$11) | 0));
    var $$x2__lo = lo$10;
    var $$x2__hi = hi$12;
    total__lo = $$x2__lo;
    total__hi = $$x2__hi
  } else {
    var this$20__lo = total__lo;
    var this$20__hi = total__hi;
    var this$15 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$11 = this$15.divideImpl__I__I__I__I__I(value, hi, (-4), (-1));
    var hi$13 = this$15.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var this$16 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$12 = this$16.divideImpl__I__I__I__I__I(value, hi, (-100), (-1));
    var hi$14 = this$16.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$13 = ((lo$11 - lo$12) | 0);
    var hi$15 = ((((-2147483648) ^ lo$13) > ((-2147483648) ^ lo$11)) ? (((-1) + ((hi$13 - hi$14) | 0)) | 0) : ((hi$13 - hi$14) | 0));
    var this$18 = $j_java$002elang$002eObject.$m_RTLong$();
    var lo$14 = this$18.divideImpl__I__I__I__I__I(value, hi, (-400), (-1));
    var hi$16 = this$18.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var lo$15 = ((lo$13 + lo$14) | 0);
    var hi$17 = ((((-2147483648) ^ lo$15) < ((-2147483648) ^ lo$13)) ? ((1 + ((hi$15 + hi$16) | 0)) | 0) : ((hi$15 + hi$16) | 0));
    var alo$2 = this$20__lo;
    var ahi$2 = this$20__hi;
    var lo$16 = ((alo$2 - lo$15) | 0);
    var hi$18 = ((((-2147483648) ^ lo$16) > ((-2147483648) ^ alo$2)) ? (((-1) + ((ahi$2 - hi$17) | 0)) | 0) : ((ahi$2 - hi$17) | 0));
    var $$x3__lo = lo$16;
    var $$x3__hi = hi$18;
    total__lo = $$x3__lo;
    total__hi = $$x3__hi
  };
  var this$24__lo = total__lo;
  var this$24__hi = total__hi;
  var b0$1 = (65535 & value$1);
  var b1$1 = ((value$1 >>> 16) | 0);
  var a0b0$1 = $j_java$002elang$002eObject.$imul(367, b0$1);
  var a0b1$1 = $j_java$002elang$002eObject.$imul(367, b1$1);
  var lo$17 = ((a0b0$1 + (a0b1$1 << 16)) | 0);
  var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
  var hi$19 = (($j_java$002elang$002eObject.$imul(367, hi$1) + ((c1part$1 >>> 16) | 0)) | 0);
  var lo$18 = (((-362) + lo$17) | 0);
  var hi$20 = ((((-2147483648) ^ lo$18) < 2147483286) ? hi$19 : (((-1) + hi$19) | 0));
  var this$23 = $j_java$002elang$002eObject.$m_RTLong$();
  var lo$19 = this$23.divideImpl__I__I__I__I__I(lo$18, hi$20, 12, 0);
  var hi$21 = this$23.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  var alo$3 = this$24__lo;
  var ahi$3 = this$24__hi;
  var lo$20 = ((alo$3 + lo$19) | 0);
  var hi$22 = ((((-2147483648) ^ lo$20) < ((-2147483648) ^ alo$3)) ? ((1 + ((ahi$3 + hi$21) | 0)) | 0) : ((ahi$3 + hi$21) | 0));
  var $$x4__lo = lo$20;
  var $$x4__hi = hi$22;
  total__lo = $$x4__lo;
  total__hi = $$x4__hi;
  var this$27__lo = total__lo;
  var this$27__hi = total__hi;
  var value$2 = (((-1) + this.Ljava_time_LocalDate__f_day) | 0);
  var hi$23 = (value$2 >> 31);
  var alo$4 = this$27__lo;
  var ahi$4 = this$27__hi;
  var lo$21 = ((alo$4 + value$2) | 0);
  var hi$24 = ((((-2147483648) ^ lo$21) < ((-2147483648) ^ alo$4)) ? ((1 + ((ahi$4 + hi$23) | 0)) | 0) : ((ahi$4 + hi$23) | 0));
  var $$x5__lo = lo$21;
  var $$x5__hi = hi$24;
  total__lo = $$x5__lo;
  total__hi = $$x5__hi;
  if (((hi$1 === 0) ? (((-2147483648) ^ value$1) > (-2147483646)) : (hi$1 > 0))) {
    var b__lo = total__lo;
    var b__hi = total__hi;
    var bhi = b__hi;
    var lo$22 = (((-1) + b__lo) | 0);
    var hi$25 = ((lo$22 !== (-1)) ? bhi : (((-1) + bhi) | 0));
    var $$x6__lo = lo$22;
    var $$x6__hi = hi$25;
    total__lo = $$x6__lo;
    total__hi = $$x6__hi;
    var $$x7 = $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology();
    var value$3 = this.Ljava_time_LocalDate__f_year;
    var hi$26 = (value$3 >> 31);
    if ((!$$x7.isLeapYear__J__Z(new $j_java$002elang$002eObject.$c_RTLong(value$3, hi$26)))) {
      var b$1__lo = total__lo;
      var b$1__hi = total__hi;
      var bhi$1 = b$1__hi;
      var lo$23 = (((-1) + b$1__lo) | 0);
      var hi$27 = ((lo$23 !== (-1)) ? bhi$1 : (((-1) + bhi$1) | 0));
      var $$x8__lo = lo$23;
      var $$x8__hi = hi$27;
      total__lo = $$x8__lo;
      total__hi = $$x8__hi
    }
  };
  var this$32__lo = total__lo;
  var this$32__hi = total__hi;
  var b$2 = $m_Ljava_time_LocalDate$().Ljava_time_LocalDate$__f_DAYS_0000_TO_1970;
  var alo$5 = this$32__lo;
  var ahi$5 = this$32__hi;
  var bhi$2 = b$2.RTLong__f_hi;
  var lo$24 = ((alo$5 - b$2.RTLong__f_lo) | 0);
  var hi$28 = ((((-2147483648) ^ lo$24) > ((-2147483648) ^ alo$5)) ? (((-1) + ((ahi$5 - bhi$2) | 0)) | 0) : ((ahi$5 - bhi$2) | 0));
  return new $j_java$002elang$002eObject.$c_RTLong(lo$24, hi$28)
});
$c_Ljava_time_LocalDate.prototype.compareTo0__Ljava_time_LocalDate__I = (function(otherDate) {
  var cmp = ((this.Ljava_time_LocalDate__f_year - otherDate.Ljava_time_LocalDate__f_year) | 0);
  if ((cmp === 0)) {
    cmp = ((this.Ljava_time_LocalDate__f_month - otherDate.Ljava_time_LocalDate__f_month) | 0);
    if ((cmp === 0)) {
      cmp = ((this.Ljava_time_LocalDate__f_day - otherDate.Ljava_time_LocalDate__f_day) | 0)
    }
  };
  return cmp
});
$c_Ljava_time_LocalDate.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_LocalDate)) {
    var otherDate = obj;
    return ((this === otherDate) || (this.compareTo0__Ljava_time_LocalDate__I(otherDate) === 0))
  } else {
    return false
  }
});
$c_Ljava_time_LocalDate.prototype.hashCode__I = (function() {
  var yearValue = this.Ljava_time_LocalDate__f_year;
  var monthValue = this.Ljava_time_LocalDate__f_month;
  var dayValue = this.Ljava_time_LocalDate__f_day;
  return (((-2048) & yearValue) ^ (((((yearValue << 11) + (monthValue << 6)) | 0) + dayValue) | 0))
});
$c_Ljava_time_LocalDate.prototype.toString__T = (function() {
  var yearValue = this.Ljava_time_LocalDate__f_year;
  var monthValue = this.Ljava_time_LocalDate__f_month;
  var dayValue = this.Ljava_time_LocalDate__f_day;
  var absYear = ((yearValue < 0) ? ((-yearValue) | 0) : yearValue);
  var buf = $j_java$002elang$002eObject.$ct_scm_StringBuilder__I__(new $j_java$002elang$002eObject.$c_scm_StringBuilder(), 10);
  if ((absYear < 1000)) {
    if ((yearValue < 0)) {
      buf.append__I__scm_StringBuilder((((-10000) + yearValue) | 0)).deleteCharAt__I__scm_StringBuilder(1)
    } else {
      buf.append__I__scm_StringBuilder(((10000 + yearValue) | 0)).deleteCharAt__I__scm_StringBuilder(0)
    }
  } else {
    if ((yearValue > 9999)) {
      buf.append__C__scm_StringBuilder(43)
    };
    buf.append__I__scm_StringBuilder(yearValue)
  };
  var this$2 = buf.append__T__scm_StringBuilder(((monthValue < 10) ? "-0" : "-")).append__I__scm_StringBuilder(monthValue).append__T__scm_StringBuilder(((dayValue < 10) ? "-0" : "-")).append__I__scm_StringBuilder(dayValue);
  return this$2.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
});
function $isArrayOf_Ljava_time_LocalDate(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_LocalDate)))
}
export { $isArrayOf_Ljava_time_LocalDate as $isArrayOf_Ljava_time_LocalDate };
var $d_Ljava_time_LocalDate = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalDate: 0
}, false, "java.time.LocalDate", {
  Ljava_time_LocalDate: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_Temporal: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_time_chrono_ChronoLocalDate: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_LocalDate as $d_Ljava_time_LocalDate };
$c_Ljava_time_LocalDate.prototype.$classData = $d_Ljava_time_LocalDate;
/** @constructor */
function $c_Ljava_time_LocalDateTime(date, time) {
  this.Ljava_time_LocalDateTime__f_date = null;
  this.Ljava_time_LocalDateTime__f_time = null;
  this.Ljava_time_LocalDateTime__f_date = date;
  this.Ljava_time_LocalDateTime__f_time = time
}
export { $c_Ljava_time_LocalDateTime as $c_Ljava_time_LocalDateTime };
$c_Ljava_time_LocalDateTime.prototype = new $h_Ljava_time_chrono_ChronoLocalDateTime();
$c_Ljava_time_LocalDateTime.prototype.constructor = $c_Ljava_time_LocalDateTime;
/** @constructor */
function $h_Ljava_time_LocalDateTime() {
  /*<skip>*/
}
export { $h_Ljava_time_LocalDateTime as $h_Ljava_time_LocalDateTime };
$h_Ljava_time_LocalDateTime.prototype = $c_Ljava_time_LocalDateTime.prototype;
$c_Ljava_time_LocalDateTime.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field.isDateBased__Z() || field.isTimeBased__Z()) : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_LocalDateTime.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    if (field.isTimeBased__Z()) {
      var this$1 = this.Ljava_time_LocalDateTime__f_time;
      return $f_Ljava_time_temporal_TemporalAccessor__range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(this$1, field)
    } else {
      return this.Ljava_time_LocalDateTime__f_date.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
    }
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
});
$c_Ljava_time_LocalDateTime.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field.isTimeBased__Z() ? this.Ljava_time_LocalDateTime__f_time.get__Ljava_time_temporal_TemporalField__I(field) : this.Ljava_time_LocalDateTime__f_date.get__Ljava_time_temporal_TemporalField__I(field)) : $f_Ljava_time_temporal_TemporalAccessor__get__Ljava_time_temporal_TemporalField__I(this, field))
});
$c_Ljava_time_LocalDateTime.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field.isTimeBased__Z() ? this.Ljava_time_LocalDateTime__f_time.getLong__Ljava_time_temporal_TemporalField__J(field) : this.Ljava_time_LocalDateTime__f_date.getLong__Ljava_time_temporal_TemporalField__J(field)) : this.getLong__Ljava_time_temporal_TemporalField__J(field))
});
$c_Ljava_time_LocalDateTime.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) ? this.Ljava_time_LocalDateTime__f_date : $c_Ljava_time_chrono_ChronoLocalDateTime.prototype.query__Ljava_time_temporal_TemporalQuery__O.call(this, query))
});
$c_Ljava_time_LocalDateTime.prototype.equals__O__Z = (function(obj) {
  if ((obj instanceof $c_Ljava_time_LocalDateTime)) {
    var other = obj;
    if ((this === other)) {
      return true
    } else {
      var x = this.Ljava_time_LocalDateTime__f_date;
      var x$2 = other.Ljava_time_LocalDateTime__f_date;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        var x$3 = this.Ljava_time_LocalDateTime__f_time;
        var x$4 = other.Ljava_time_LocalDateTime__f_time;
        return ((x$3 === null) ? (x$4 === null) : x$3.equals__O__Z(x$4))
      } else {
        return false
      }
    }
  } else {
    return false
  }
});
$c_Ljava_time_LocalDateTime.prototype.hashCode__I = (function() {
  return (this.Ljava_time_LocalDateTime__f_date.hashCode__I() ^ this.Ljava_time_LocalDateTime__f_time.hashCode__I())
});
$c_Ljava_time_LocalDateTime.prototype.toString__T = (function() {
  return ((this.Ljava_time_LocalDateTime__f_date.toString__T() + "T") + this.Ljava_time_LocalDateTime__f_time.toString__T())
});
function $isArrayOf_Ljava_time_LocalDateTime(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_LocalDateTime)))
}
export { $isArrayOf_Ljava_time_LocalDateTime as $isArrayOf_Ljava_time_LocalDateTime };
var $d_Ljava_time_LocalDateTime = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_LocalDateTime: 0
}, false, "java.time.LocalDateTime", {
  Ljava_time_LocalDateTime: 1,
  Ljava_time_chrono_ChronoLocalDateTime: 1,
  O: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_Temporal: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  jl_Comparable: 1,
  s_math_Ordered: 1,
  Ljava_io_Serializable: 1
});
export { $d_Ljava_time_LocalDateTime as $d_Ljava_time_LocalDateTime };
$c_Ljava_time_LocalDateTime.prototype.$classData = $d_Ljava_time_LocalDateTime;
function $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__($thiz, name, ordinal, baseUnit, rangeUnit, _range, _$name, _$ordinal) {
  $thiz.Ljava_time_temporal_ChronoField__f_name = name;
  $thiz.Ljava_time_temporal_ChronoField__f_ordinal = ordinal;
  $thiz.Ljava_time_temporal_ChronoField__f_baseUnit = baseUnit;
  $thiz.Ljava_time_temporal_ChronoField__f_rangeUnit = rangeUnit;
  $thiz.Ljava_time_temporal_ChronoField__f__range = _range;
  $j_java$002elang$002eEnum.$ct_jl_Enum__T__I__($thiz, _$name, _$ordinal);
  return $thiz
}
export { $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__ as $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__ };
/** @constructor */
function $c_Ljava_time_temporal_ChronoField() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false
}
export { $c_Ljava_time_temporal_ChronoField as $c_Ljava_time_temporal_ChronoField };
$c_Ljava_time_temporal_ChronoField.prototype = new $j_java$002elang$002eEnum.$h_jl_Enum();
$c_Ljava_time_temporal_ChronoField.prototype.constructor = $c_Ljava_time_temporal_ChronoField;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField as $h_Ljava_time_temporal_ChronoField };
$h_Ljava_time_temporal_ChronoField.prototype = $c_Ljava_time_temporal_ChronoField.prototype;
$c_Ljava_time_temporal_ChronoField.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Ljava_time_temporal_ChronoField.prototype.isDateBased__Z = (function() {
  return ((this.Ljava_time_temporal_ChronoField__f_ordinal >= $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField().jl_Enum__f__ordinal) && (this.Ljava_time_temporal_ChronoField__f_ordinal <= $s_Ljava_time_temporal_ChronoField$__ERA__Ljava_time_temporal_ChronoField().jl_Enum__f__ordinal))
});
$c_Ljava_time_temporal_ChronoField.prototype.isTimeBased__Z = (function() {
  return (this.Ljava_time_temporal_ChronoField__f_ordinal < $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField().jl_Enum__f__ordinal)
});
$c_Ljava_time_temporal_ChronoField.prototype.toString__T = (function() {
  return this.Ljava_time_temporal_ChronoField__f_name
});
function $isArrayOf_Ljava_time_temporal_ChronoField(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_temporal_ChronoField)))
}
export { $isArrayOf_Ljava_time_temporal_ChronoField as $isArrayOf_Ljava_time_temporal_ChronoField };
var $d_Ljava_time_temporal_ChronoField = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField: 0
}, false, "java.time.temporal.ChronoField", {
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1
});
export { $d_Ljava_time_temporal_ChronoField as $d_Ljava_time_temporal_ChronoField };
$c_Ljava_time_temporal_ChronoField.prototype.$classData = $d_Ljava_time_temporal_ChronoField;
function $ct_Ljava_time_DayOfWeek__T__I__T__I__($thiz, name, ordinal, _$name, _$ordinal) {
  $thiz.Ljava_time_DayOfWeek__f_ordinal = ordinal;
  $j_java$002elang$002eEnum.$ct_jl_Enum__T__I__($thiz, _$name, _$ordinal);
  return $thiz
}
export { $ct_Ljava_time_DayOfWeek__T__I__T__I__ as $ct_Ljava_time_DayOfWeek__T__I__T__I__ };
/** @constructor */
function $c_Ljava_time_DayOfWeek() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0
}
export { $c_Ljava_time_DayOfWeek as $c_Ljava_time_DayOfWeek };
$c_Ljava_time_DayOfWeek.prototype = new $j_java$002elang$002eEnum.$h_jl_Enum();
$c_Ljava_time_DayOfWeek.prototype.constructor = $c_Ljava_time_DayOfWeek;
/** @constructor */
function $h_Ljava_time_DayOfWeek() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek as $h_Ljava_time_DayOfWeek };
$h_Ljava_time_DayOfWeek.prototype = $c_Ljava_time_DayOfWeek.prototype;
$c_Ljava_time_DayOfWeek.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Ljava_time_DayOfWeek.prototype.getValue__I = (function() {
  return ((1 + this.Ljava_time_DayOfWeek__f_ordinal) | 0)
});
$c_Ljava_time_DayOfWeek.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field === $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField()) : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_DayOfWeek.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField())) {
    return field.Ljava_time_temporal_ChronoField__f__range
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
});
$c_Ljava_time_DayOfWeek.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  return ((field === $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField()) ? this.getValue__I() : this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field).checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(this.getLong__Ljava_time_temporal_TemporalField__J(field), field))
});
$c_Ljava_time_DayOfWeek.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK__Ljava_time_temporal_ChronoField())) {
    var value = this.getValue__I();
    var hi = (value >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_DayOfWeek.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery()) ? $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit() : (((((((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) || (query === $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery())) ? null : query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this)))
});
var $d_Ljava_time_DayOfWeek = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek: 0
}, false, "java.time.DayOfWeek", {
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1
});
export { $d_Ljava_time_DayOfWeek as $d_Ljava_time_DayOfWeek };
$c_Ljava_time_DayOfWeek.prototype.$classData = $d_Ljava_time_DayOfWeek;
function $ct_Ljava_time_Month__T__I__T__I__($thiz, name, ordinal, _$name, _$ordinal) {
  $thiz.Ljava_time_Month__f_ordinal = ordinal;
  $j_java$002elang$002eEnum.$ct_jl_Enum__T__I__($thiz, _$name, _$ordinal);
  return $thiz
}
export { $ct_Ljava_time_Month__T__I__T__I__ as $ct_Ljava_time_Month__T__I__T__I__ };
/** @constructor */
function $c_Ljava_time_Month() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0
}
export { $c_Ljava_time_Month as $c_Ljava_time_Month };
$c_Ljava_time_Month.prototype = new $j_java$002elang$002eEnum.$h_jl_Enum();
$c_Ljava_time_Month.prototype.constructor = $c_Ljava_time_Month;
/** @constructor */
function $h_Ljava_time_Month() {
  /*<skip>*/
}
export { $h_Ljava_time_Month as $h_Ljava_time_Month };
$h_Ljava_time_Month.prototype = $c_Ljava_time_Month.prototype;
$c_Ljava_time_Month.prototype.productIterator__sc_Iterator = (function() {
  return new $j_scala$002eProduct$0024$0024anon$00241.$c_s_Product$$anon$1(this)
});
$c_Ljava_time_Month.prototype.getValue__I = (function() {
  return ((1 + this.Ljava_time_Month__f_ordinal) | 0)
});
$c_Ljava_time_Month.prototype.isSupported__Ljava_time_temporal_TemporalField__Z = (function(field) {
  return ((field instanceof $c_Ljava_time_temporal_ChronoField) ? (field === $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField()) : ((field !== null) && this.isSupported__Ljava_time_temporal_TemporalField__Z(field)))
});
$c_Ljava_time_Month.prototype.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField())) {
    return field.Ljava_time_temporal_ChronoField__f__range
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field)
  }
});
$c_Ljava_time_Month.prototype.get__Ljava_time_temporal_TemporalField__I = (function(field) {
  return ((field === $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField()) ? this.getValue__I() : this.range__Ljava_time_temporal_TemporalField__Ljava_time_temporal_ValueRange(field).checkValidIntValue__J__Ljava_time_temporal_TemporalField__I(this.getLong__Ljava_time_temporal_TemporalField__J(field), field))
});
$c_Ljava_time_Month.prototype.getLong__Ljava_time_temporal_TemporalField__J = (function(field) {
  if ((field === $s_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR__Ljava_time_temporal_ChronoField())) {
    var value = this.getValue__I();
    var hi = (value >> 31);
    return new $j_java$002elang$002eObject.$c_RTLong(value, hi)
  } else if ((field instanceof $c_Ljava_time_temporal_ChronoField)) {
    throw new $j_java$002etime$002etemporal$002eUnsupportedTemporalTypeException.$c_Ljava_time_temporal_UnsupportedTemporalTypeException(("Unsupported field: " + field))
  } else {
    return this.getLong__Ljava_time_temporal_TemporalField__J(field)
  }
});
$c_Ljava_time_Month.prototype.firstDayOfYear__Z__I = (function(leapYear) {
  var leap = (leapYear ? 1 : 0);
  var x = $s_Ljava_time_Month$__JANUARY__Ljava_time_Month();
  if (((x !== null) && (x === this))) {
    return 1
  };
  var x$3 = $s_Ljava_time_Month$__FEBRUARY__Ljava_time_Month();
  if (((x$3 !== null) && (x$3 === this))) {
    return 32
  };
  var x$5 = $s_Ljava_time_Month$__MARCH__Ljava_time_Month();
  if (((x$5 !== null) && (x$5 === this))) {
    return ((60 + leap) | 0)
  };
  var x$7 = $s_Ljava_time_Month$__APRIL__Ljava_time_Month();
  if (((x$7 !== null) && (x$7 === this))) {
    return ((91 + leap) | 0)
  };
  var x$9 = $s_Ljava_time_Month$__MAY__Ljava_time_Month();
  if (((x$9 !== null) && (x$9 === this))) {
    return ((121 + leap) | 0)
  };
  var x$11 = $s_Ljava_time_Month$__JUNE__Ljava_time_Month();
  if (((x$11 !== null) && (x$11 === this))) {
    return ((152 + leap) | 0)
  };
  var x$13 = $s_Ljava_time_Month$__JULY__Ljava_time_Month();
  if (((x$13 !== null) && (x$13 === this))) {
    return ((182 + leap) | 0)
  };
  var x$15 = $s_Ljava_time_Month$__AUGUST__Ljava_time_Month();
  if (((x$15 !== null) && (x$15 === this))) {
    return ((213 + leap) | 0)
  };
  var x$17 = $s_Ljava_time_Month$__SEPTEMBER__Ljava_time_Month();
  if (((x$17 !== null) && (x$17 === this))) {
    return ((244 + leap) | 0)
  };
  var x$19 = $s_Ljava_time_Month$__OCTOBER__Ljava_time_Month();
  if (((x$19 !== null) && (x$19 === this))) {
    return ((274 + leap) | 0)
  };
  var x$21 = $s_Ljava_time_Month$__NOVEMBER__Ljava_time_Month();
  if (((x$21 !== null) && (x$21 === this))) {
    return ((305 + leap) | 0)
  };
  var x$23 = $s_Ljava_time_Month$__DECEMBER__Ljava_time_Month();
  if (((x$23 !== null) && (x$23 === this))) {
    return ((335 + leap) | 0)
  };
  throw new $j_java$002elang$002eObject.$c_s_MatchError(this)
});
$c_Ljava_time_Month.prototype.query__Ljava_time_temporal_TemporalQuery__O = (function(query) {
  return ((query === $m_Ljava_time_temporal_TemporalQueries$().chronology__Ljava_time_temporal_TemporalQuery()) ? $j_java$002etime$002echrono$002eIsoChronology$0024.$m_Ljava_time_chrono_IsoChronology$().INSTANCE__Ljava_time_chrono_IsoChronology() : ((query === $m_Ljava_time_temporal_TemporalQueries$().precision__Ljava_time_temporal_TemporalQuery()) ? $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit() : ((((((query === $m_Ljava_time_temporal_TemporalQueries$().localDate__Ljava_time_temporal_TemporalQuery()) || (query === $m_Ljava_time_temporal_TemporalQueries$().localTime__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zone__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().zoneId__Ljava_time_temporal_TemporalQuery())) || (query === $m_Ljava_time_temporal_TemporalQueries$().offset__Ljava_time_temporal_TemporalQuery())) ? null : query.queryFrom__Ljava_time_temporal_TemporalAccessor__O(this))))
});
var $d_Ljava_time_Month = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month: 0
}, false, "java.time.Month", {
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1
});
export { $d_Ljava_time_Month as $d_Ljava_time_Month };
$c_Ljava_time_Month.prototype.$classData = $d_Ljava_time_Month;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$1() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "NanoOfSecond", 0, $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(999999999, 0)), "NANO_OF_SECOND", 0)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$1 as $c_Ljava_time_temporal_ChronoField$$anon$1 };
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$1;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$1 as $h_Ljava_time_temporal_ChronoField$$anon$1 };
$h_Ljava_time_temporal_ChronoField$$anon$1.prototype = $c_Ljava_time_temporal_ChronoField$$anon$1.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$1: 0
}, false, "java.time.temporal.ChronoField$$anon$1", {
  Ljava_time_temporal_ChronoField$$anon$1: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$1 as $d_Ljava_time_temporal_ChronoField$$anon$1 };
$c_Ljava_time_temporal_ChronoField$$anon$1.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$1;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$10() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MinuteOfDay", 9, $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(1439, 0)), "MINUTE_OF_DAY", 9)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$10 as $c_Ljava_time_temporal_ChronoField$$anon$10 };
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$10;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$10() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$10 as $h_Ljava_time_temporal_ChronoField$$anon$10 };
$h_Ljava_time_temporal_ChronoField$$anon$10.prototype = $c_Ljava_time_temporal_ChronoField$$anon$10.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$10 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$10: 0
}, false, "java.time.temporal.ChronoField$$anon$10", {
  Ljava_time_temporal_ChronoField$$anon$10: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$10 as $d_Ljava_time_temporal_ChronoField$$anon$10 };
$c_Ljava_time_temporal_ChronoField$$anon$10.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$10;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$11() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "HourOfAmPm", 10, $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(11, 0)), "HOUR_OF_AMPM", 10)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$11 as $c_Ljava_time_temporal_ChronoField$$anon$11 };
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$11;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$11() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$11 as $h_Ljava_time_temporal_ChronoField$$anon$11 };
$h_Ljava_time_temporal_ChronoField$$anon$11.prototype = $c_Ljava_time_temporal_ChronoField$$anon$11.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$11 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$11: 0
}, false, "java.time.temporal.ChronoField$$anon$11", {
  Ljava_time_temporal_ChronoField$$anon$11: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$11 as $d_Ljava_time_temporal_ChronoField$$anon$11 };
$c_Ljava_time_temporal_ChronoField$$anon$11.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$11;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$12() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "ClockHourOfAmPm", 11, $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(12, 0)), "CLOCK_HOUR_OF_AMPM", 11)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$12 as $c_Ljava_time_temporal_ChronoField$$anon$12 };
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$12;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$12() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$12 as $h_Ljava_time_temporal_ChronoField$$anon$12 };
$h_Ljava_time_temporal_ChronoField$$anon$12.prototype = $c_Ljava_time_temporal_ChronoField$$anon$12.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$12 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$12: 0
}, false, "java.time.temporal.ChronoField$$anon$12", {
  Ljava_time_temporal_ChronoField$$anon$12: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$12 as $d_Ljava_time_temporal_ChronoField$$anon$12 };
$c_Ljava_time_temporal_ChronoField$$anon$12.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$12;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$13() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "HourOfDay", 12, $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(23, 0)), "HOUR_OF_DAY", 12)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$13 as $c_Ljava_time_temporal_ChronoField$$anon$13 };
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$13;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$13() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$13 as $h_Ljava_time_temporal_ChronoField$$anon$13 };
$h_Ljava_time_temporal_ChronoField$$anon$13.prototype = $c_Ljava_time_temporal_ChronoField$$anon$13.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$13 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$13: 0
}, false, "java.time.temporal.ChronoField$$anon$13", {
  Ljava_time_temporal_ChronoField$$anon$13: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$13 as $d_Ljava_time_temporal_ChronoField$$anon$13 };
$c_Ljava_time_temporal_ChronoField$$anon$13.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$13;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$14() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "ClockHourOfDay", 13, $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(24, 0)), "CLOCK_HOUR_OF_DAY", 13)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$14 as $c_Ljava_time_temporal_ChronoField$$anon$14 };
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$14;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$14() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$14 as $h_Ljava_time_temporal_ChronoField$$anon$14 };
$h_Ljava_time_temporal_ChronoField$$anon$14.prototype = $c_Ljava_time_temporal_ChronoField$$anon$14.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$14 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$14: 0
}, false, "java.time.temporal.ChronoField$$anon$14", {
  Ljava_time_temporal_ChronoField$$anon$14: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$14 as $d_Ljava_time_temporal_ChronoField$$anon$14 };
$c_Ljava_time_temporal_ChronoField$$anon$14.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$14;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$15() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "AmPmOfDay", 14, $s_Ljava_time_temporal_ChronoUnit$__HALF_DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(1, 0)), "AMPM_OF_DAY", 14)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$15 as $c_Ljava_time_temporal_ChronoField$$anon$15 };
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$15;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$15() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$15 as $h_Ljava_time_temporal_ChronoField$$anon$15 };
$h_Ljava_time_temporal_ChronoField$$anon$15.prototype = $c_Ljava_time_temporal_ChronoField$$anon$15.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$15 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$15: 0
}, false, "java.time.temporal.ChronoField$$anon$15", {
  Ljava_time_temporal_ChronoField$$anon$15: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$15 as $d_Ljava_time_temporal_ChronoField$$anon$15 };
$c_Ljava_time_temporal_ChronoField$$anon$15.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$15;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$16() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "DayOfWeek", 15, $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(7, 0)), "DAY_OF_WEEK", 15)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$16 as $c_Ljava_time_temporal_ChronoField$$anon$16 };
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$16;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$16() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$16 as $h_Ljava_time_temporal_ChronoField$$anon$16 };
$h_Ljava_time_temporal_ChronoField$$anon$16.prototype = $c_Ljava_time_temporal_ChronoField$$anon$16.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$16 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$16: 0
}, false, "java.time.temporal.ChronoField$$anon$16", {
  Ljava_time_temporal_ChronoField$$anon$16: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$16 as $d_Ljava_time_temporal_ChronoField$$anon$16 };
$c_Ljava_time_temporal_ChronoField$$anon$16.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$16;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$17() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "AlignedDayOfWeekInMonth", 16, $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(7, 0)), "ALIGNED_DAY_OF_WEEK_IN_MONTH", 16)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$17 as $c_Ljava_time_temporal_ChronoField$$anon$17 };
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$17;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$17() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$17 as $h_Ljava_time_temporal_ChronoField$$anon$17 };
$h_Ljava_time_temporal_ChronoField$$anon$17.prototype = $c_Ljava_time_temporal_ChronoField$$anon$17.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$17 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$17: 0
}, false, "java.time.temporal.ChronoField$$anon$17", {
  Ljava_time_temporal_ChronoField$$anon$17: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$17 as $d_Ljava_time_temporal_ChronoField$$anon$17 };
$c_Ljava_time_temporal_ChronoField$$anon$17.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$17;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$18() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "AlignedDayOfWeekInYear", 17, $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(7, 0)), "ALIGNED_DAY_OF_WEEK_IN_YEAR", 17)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$18 as $c_Ljava_time_temporal_ChronoField$$anon$18 };
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$18;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$18() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$18 as $h_Ljava_time_temporal_ChronoField$$anon$18 };
$h_Ljava_time_temporal_ChronoField$$anon$18.prototype = $c_Ljava_time_temporal_ChronoField$$anon$18.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$18 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$18: 0
}, false, "java.time.temporal.ChronoField$$anon$18", {
  Ljava_time_temporal_ChronoField$$anon$18: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$18 as $d_Ljava_time_temporal_ChronoField$$anon$18 };
$c_Ljava_time_temporal_ChronoField$$anon$18.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$18;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$19() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x2 = $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit();
  var $$x1 = $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit();
  var this$1 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "DayOfMonth", 18, $$x2, $$x1, this$1.of__J__J__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(28, 0), new $j_java$002elang$002eObject.$c_RTLong(31, 0)), "DAY_OF_MONTH", 18)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$19 as $c_Ljava_time_temporal_ChronoField$$anon$19 };
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$19;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$19() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$19 as $h_Ljava_time_temporal_ChronoField$$anon$19 };
$h_Ljava_time_temporal_ChronoField$$anon$19.prototype = $c_Ljava_time_temporal_ChronoField$$anon$19.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$19 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$19: 0
}, false, "java.time.temporal.ChronoField$$anon$19", {
  Ljava_time_temporal_ChronoField$$anon$19: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$19 as $d_Ljava_time_temporal_ChronoField$$anon$19 };
$c_Ljava_time_temporal_ChronoField$$anon$19.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$19;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$2() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "NanoOfDay", 1, $s_Ljava_time_temporal_ChronoUnit$__NANOS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong((-1857093633), 20116)), "NANO_OF_DAY", 1)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$2 as $c_Ljava_time_temporal_ChronoField$$anon$2 };
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$2;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$2() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$2 as $h_Ljava_time_temporal_ChronoField$$anon$2 };
$h_Ljava_time_temporal_ChronoField$$anon$2.prototype = $c_Ljava_time_temporal_ChronoField$$anon$2.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$2 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$2: 0
}, false, "java.time.temporal.ChronoField$$anon$2", {
  Ljava_time_temporal_ChronoField$$anon$2: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$2 as $d_Ljava_time_temporal_ChronoField$$anon$2 };
$c_Ljava_time_temporal_ChronoField$$anon$2.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$2;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$20() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x2 = $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit();
  var $$x1 = $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit();
  var this$1 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "DayOfYear", 19, $$x2, $$x1, this$1.of__J__J__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(365, 0), new $j_java$002elang$002eObject.$c_RTLong(366, 0)), "DAY_OF_YEAR", 19)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$20 as $c_Ljava_time_temporal_ChronoField$$anon$20 };
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$20;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$20() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$20 as $h_Ljava_time_temporal_ChronoField$$anon$20 };
$h_Ljava_time_temporal_ChronoField$$anon$20.prototype = $c_Ljava_time_temporal_ChronoField$$anon$20.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$20 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$20: 0
}, false, "java.time.temporal.ChronoField$$anon$20", {
  Ljava_time_temporal_ChronoField$$anon$20: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$20 as $d_Ljava_time_temporal_ChronoField$$anon$20 };
$c_Ljava_time_temporal_ChronoField$$anon$20.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$20;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$21() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "EpochDay", 20, $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong((-170999002), (-86)), new $j_java$002elang$002eObject.$c_RTLong(169560311, 85)), "EPOCH_DAY", 20)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$21 as $c_Ljava_time_temporal_ChronoField$$anon$21 };
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$21;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$21() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$21 as $h_Ljava_time_temporal_ChronoField$$anon$21 };
$h_Ljava_time_temporal_ChronoField$$anon$21.prototype = $c_Ljava_time_temporal_ChronoField$$anon$21.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$21 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$21: 0
}, false, "java.time.temporal.ChronoField$$anon$21", {
  Ljava_time_temporal_ChronoField$$anon$21: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$21 as $d_Ljava_time_temporal_ChronoField$$anon$21 };
$c_Ljava_time_temporal_ChronoField$$anon$21.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$21;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$22() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x2 = $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit();
  var $$x1 = $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit();
  var this$1 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "AlignedWeekOfMonth", 21, $$x2, $$x1, this$1.of__J__J__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(4, 0), new $j_java$002elang$002eObject.$c_RTLong(5, 0)), "ALIGNED_WEEK_OF_MONTH", 21)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$22 as $c_Ljava_time_temporal_ChronoField$$anon$22 };
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$22;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$22() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$22 as $h_Ljava_time_temporal_ChronoField$$anon$22 };
$h_Ljava_time_temporal_ChronoField$$anon$22.prototype = $c_Ljava_time_temporal_ChronoField$$anon$22.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$22 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$22: 0
}, false, "java.time.temporal.ChronoField$$anon$22", {
  Ljava_time_temporal_ChronoField$$anon$22: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$22 as $d_Ljava_time_temporal_ChronoField$$anon$22 };
$c_Ljava_time_temporal_ChronoField$$anon$22.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$22;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$23() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "AlignedWeekOfYear", 22, $s_Ljava_time_temporal_ChronoUnit$__WEEKS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(53, 0)), "ALIGNED_WEEK_OF_YEAR", 22)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$23 as $c_Ljava_time_temporal_ChronoField$$anon$23 };
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$23;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$23() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$23 as $h_Ljava_time_temporal_ChronoField$$anon$23 };
$h_Ljava_time_temporal_ChronoField$$anon$23.prototype = $c_Ljava_time_temporal_ChronoField$$anon$23.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$23 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$23: 0
}, false, "java.time.temporal.ChronoField$$anon$23", {
  Ljava_time_temporal_ChronoField$$anon$23: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$23 as $d_Ljava_time_temporal_ChronoField$$anon$23 };
$c_Ljava_time_temporal_ChronoField$$anon$23.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$23;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$24() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MonthOfYear", 23, $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(12, 0)), "MONTH_OF_YEAR", 23)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$24 as $c_Ljava_time_temporal_ChronoField$$anon$24 };
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$24;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$24() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$24 as $h_Ljava_time_temporal_ChronoField$$anon$24 };
$h_Ljava_time_temporal_ChronoField$$anon$24.prototype = $c_Ljava_time_temporal_ChronoField$$anon$24.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$24 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$24: 0
}, false, "java.time.temporal.ChronoField$$anon$24", {
  Ljava_time_temporal_ChronoField$$anon$24: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$24 as $d_Ljava_time_temporal_ChronoField$$anon$24 };
$c_Ljava_time_temporal_ChronoField$$anon$24.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$24;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$25() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x4 = $s_Ljava_time_temporal_ChronoUnit$__MONTHS__Ljava_time_temporal_ChronoUnit();
  var $$x3 = $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit();
  var $$x2 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  var value = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MIN_VALUE__I();
  var hi = (value >> 31);
  var b0 = (65535 & value);
  var b1 = ((value >>> 16) | 0);
  var a0b0 = $j_java$002elang$002eObject.$imul(12, b0);
  var a0b1 = $j_java$002elang$002eObject.$imul(12, b1);
  var lo = ((a0b0 + (a0b1 << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi$1 = (($j_java$002elang$002eObject.$imul(12, hi) + ((c1part >>> 16) | 0)) | 0);
  var $$x1 = new $j_java$002elang$002eObject.$c_RTLong(lo, hi$1);
  var value$1 = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
  var hi$2 = (value$1 >> 31);
  var b0$1 = (65535 & value$1);
  var b1$1 = ((value$1 >>> 16) | 0);
  var a0b0$1 = $j_java$002elang$002eObject.$imul(12, b0$1);
  var a0b1$1 = $j_java$002elang$002eObject.$imul(12, b1$1);
  var lo$1 = ((a0b0$1 + (a0b1$1 << 16)) | 0);
  var c1part$1 = ((((a0b0$1 >>> 16) | 0) + a0b1$1) | 0);
  var hi$3 = (($j_java$002elang$002eObject.$imul(12, hi$2) + ((c1part$1 >>> 16) | 0)) | 0);
  var lo$2 = ((11 + lo$1) | 0);
  var hi$4 = ((((-2147483648) ^ lo$2) < (-2147483637)) ? ((1 + hi$3) | 0) : hi$3);
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "ProlepticMonth", 24, $$x4, $$x3, $$x2.of__J__J__Ljava_time_temporal_ValueRange($$x1, new $j_java$002elang$002eObject.$c_RTLong(lo$2, hi$4)), "PROLEPTIC_MONTH", 24)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$25 as $c_Ljava_time_temporal_ChronoField$$anon$25 };
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$25;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$25() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$25 as $h_Ljava_time_temporal_ChronoField$$anon$25 };
$h_Ljava_time_temporal_ChronoField$$anon$25.prototype = $c_Ljava_time_temporal_ChronoField$$anon$25.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$25 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$25: 0
}, false, "java.time.temporal.ChronoField$$anon$25", {
  Ljava_time_temporal_ChronoField$$anon$25: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$25 as $d_Ljava_time_temporal_ChronoField$$anon$25 };
$c_Ljava_time_temporal_ChronoField$$anon$25.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$25;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$26() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x2 = $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit();
  var $$x1 = $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit();
  var this$4 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  var value = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
  var hi = (value >> 31);
  var value$1 = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
  var hi$1 = (value$1 >> 31);
  var lo = ((1 + value$1) | 0);
  var hi$2 = ((lo === 0) ? ((1 + hi$1) | 0) : hi$1);
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "YearOfEra", 25, $$x2, $$x1, this$4.of__J__J__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(1, 0), new $j_java$002elang$002eObject.$c_RTLong(value, hi), new $j_java$002elang$002eObject.$c_RTLong(lo, hi$2)), "YEAR_OF_ERA", 25)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$26 as $c_Ljava_time_temporal_ChronoField$$anon$26 };
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$26;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$26() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$26 as $h_Ljava_time_temporal_ChronoField$$anon$26 };
$h_Ljava_time_temporal_ChronoField$$anon$26.prototype = $c_Ljava_time_temporal_ChronoField$$anon$26.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$26 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$26: 0
}, false, "java.time.temporal.ChronoField$$anon$26", {
  Ljava_time_temporal_ChronoField$$anon$26: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$26 as $d_Ljava_time_temporal_ChronoField$$anon$26 };
$c_Ljava_time_temporal_ChronoField$$anon$26.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$26;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$27() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  var $$x4 = $s_Ljava_time_temporal_ChronoUnit$__YEARS__Ljava_time_temporal_ChronoUnit();
  var $$x3 = $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit();
  var $$x2 = $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$();
  var value = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MIN_VALUE__I();
  var hi = (value >> 31);
  var $$x1 = new $j_java$002elang$002eObject.$c_RTLong(value, hi);
  var value$1 = $j_java$002etime$002eYear$0024.$m_Ljava_time_Year$().MAX_VALUE__I();
  var hi$1 = (value$1 >> 31);
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "Year", 26, $$x4, $$x3, $$x2.of__J__J__Ljava_time_temporal_ValueRange($$x1, new $j_java$002elang$002eObject.$c_RTLong(value$1, hi$1)), "YEAR", 26)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$27 as $c_Ljava_time_temporal_ChronoField$$anon$27 };
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$27;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$27() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$27 as $h_Ljava_time_temporal_ChronoField$$anon$27 };
$h_Ljava_time_temporal_ChronoField$$anon$27.prototype = $c_Ljava_time_temporal_ChronoField$$anon$27.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$27 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$27: 0
}, false, "java.time.temporal.ChronoField$$anon$27", {
  Ljava_time_temporal_ChronoField$$anon$27: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$27 as $d_Ljava_time_temporal_ChronoField$$anon$27 };
$c_Ljava_time_temporal_ChronoField$$anon$27.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$27;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$28() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "Era", 27, $s_Ljava_time_temporal_ChronoUnit$__ERAS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(1, 0)), "ERA", 27)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$28 as $c_Ljava_time_temporal_ChronoField$$anon$28 };
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$28;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$28() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$28 as $h_Ljava_time_temporal_ChronoField$$anon$28 };
$h_Ljava_time_temporal_ChronoField$$anon$28.prototype = $c_Ljava_time_temporal_ChronoField$$anon$28.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$28 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$28: 0
}, false, "java.time.temporal.ChronoField$$anon$28", {
  Ljava_time_temporal_ChronoField$$anon$28: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$28 as $d_Ljava_time_temporal_ChronoField$$anon$28 };
$c_Ljava_time_temporal_ChronoField$$anon$28.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$28;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$29() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "InstantSeconds", 28, $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong(0, (-2147483648)), new $j_java$002elang$002eObject.$c_RTLong((-1), 2147483647)), "INSTANT_SECONDS", 28)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$29 as $c_Ljava_time_temporal_ChronoField$$anon$29 };
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$29;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$29() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$29 as $h_Ljava_time_temporal_ChronoField$$anon$29 };
$h_Ljava_time_temporal_ChronoField$$anon$29.prototype = $c_Ljava_time_temporal_ChronoField$$anon$29.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$29 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$29: 0
}, false, "java.time.temporal.ChronoField$$anon$29", {
  Ljava_time_temporal_ChronoField$$anon$29: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$29 as $d_Ljava_time_temporal_ChronoField$$anon$29 };
$c_Ljava_time_temporal_ChronoField$$anon$29.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$29;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$3() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MicroOfSecond", 2, $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(999999, 0)), "MICRO_OF_SECOND", 2)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$3 as $c_Ljava_time_temporal_ChronoField$$anon$3 };
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$3;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$3() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$3 as $h_Ljava_time_temporal_ChronoField$$anon$3 };
$h_Ljava_time_temporal_ChronoField$$anon$3.prototype = $c_Ljava_time_temporal_ChronoField$$anon$3.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$3 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$3: 0
}, false, "java.time.temporal.ChronoField$$anon$3", {
  Ljava_time_temporal_ChronoField$$anon$3: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$3 as $d_Ljava_time_temporal_ChronoField$$anon$3 };
$c_Ljava_time_temporal_ChronoField$$anon$3.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$3;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$30() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "OffsetSeconds", 29, $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__FOREVER__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange(new $j_java$002elang$002eObject.$c_RTLong((-64800), (-1)), new $j_java$002elang$002eObject.$c_RTLong(64800, 0)), "OFFSET_SECONDS", 29)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$30 as $c_Ljava_time_temporal_ChronoField$$anon$30 };
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$30;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$30() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$30 as $h_Ljava_time_temporal_ChronoField$$anon$30 };
$h_Ljava_time_temporal_ChronoField$$anon$30.prototype = $c_Ljava_time_temporal_ChronoField$$anon$30.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$30 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$30: 0
}, false, "java.time.temporal.ChronoField$$anon$30", {
  Ljava_time_temporal_ChronoField$$anon$30: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$30 as $d_Ljava_time_temporal_ChronoField$$anon$30 };
$c_Ljava_time_temporal_ChronoField$$anon$30.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$30;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$4() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MicroOfDay", 3, $s_Ljava_time_temporal_ChronoUnit$__MICROS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(500654079, 20)), "MICRO_OF_DAY", 3)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$4 as $c_Ljava_time_temporal_ChronoField$$anon$4 };
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$4;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$4() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$4 as $h_Ljava_time_temporal_ChronoField$$anon$4 };
$h_Ljava_time_temporal_ChronoField$$anon$4.prototype = $c_Ljava_time_temporal_ChronoField$$anon$4.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$4 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$4: 0
}, false, "java.time.temporal.ChronoField$$anon$4", {
  Ljava_time_temporal_ChronoField$$anon$4: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$4 as $d_Ljava_time_temporal_ChronoField$$anon$4 };
$c_Ljava_time_temporal_ChronoField$$anon$4.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$4;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$5() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MilliOfSecond", 4, $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(999, 0)), "MILLI_OF_SECOND", 4)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$5 as $c_Ljava_time_temporal_ChronoField$$anon$5 };
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$5;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$5() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$5 as $h_Ljava_time_temporal_ChronoField$$anon$5 };
$h_Ljava_time_temporal_ChronoField$$anon$5.prototype = $c_Ljava_time_temporal_ChronoField$$anon$5.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$5 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$5: 0
}, false, "java.time.temporal.ChronoField$$anon$5", {
  Ljava_time_temporal_ChronoField$$anon$5: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$5 as $d_Ljava_time_temporal_ChronoField$$anon$5 };
$c_Ljava_time_temporal_ChronoField$$anon$5.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$5;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$6() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MilliOfDay", 5, $s_Ljava_time_temporal_ChronoUnit$__MILLIS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(86399999, 0)), "MILLI_OF_DAY", 5)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$6 as $c_Ljava_time_temporal_ChronoField$$anon$6 };
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$6;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$6() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$6 as $h_Ljava_time_temporal_ChronoField$$anon$6 };
$h_Ljava_time_temporal_ChronoField$$anon$6.prototype = $c_Ljava_time_temporal_ChronoField$$anon$6.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$6 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$6: 0
}, false, "java.time.temporal.ChronoField$$anon$6", {
  Ljava_time_temporal_ChronoField$$anon$6: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$6 as $d_Ljava_time_temporal_ChronoField$$anon$6 };
$c_Ljava_time_temporal_ChronoField$$anon$6.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$6;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$7() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "SecondOfMinute", 6, $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(59, 0)), "SECOND_OF_MINUTE", 6)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$7 as $c_Ljava_time_temporal_ChronoField$$anon$7 };
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$7;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$7() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$7 as $h_Ljava_time_temporal_ChronoField$$anon$7 };
$h_Ljava_time_temporal_ChronoField$$anon$7.prototype = $c_Ljava_time_temporal_ChronoField$$anon$7.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$7 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$7: 0
}, false, "java.time.temporal.ChronoField$$anon$7", {
  Ljava_time_temporal_ChronoField$$anon$7: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$7 as $d_Ljava_time_temporal_ChronoField$$anon$7 };
$c_Ljava_time_temporal_ChronoField$$anon$7.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$7;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$8() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "SecondOfDay", 7, $s_Ljava_time_temporal_ChronoUnit$__SECONDS__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__DAYS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(86399, 0)), "SECOND_OF_DAY", 7)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$8 as $c_Ljava_time_temporal_ChronoField$$anon$8 };
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$8;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$8() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$8 as $h_Ljava_time_temporal_ChronoField$$anon$8 };
$h_Ljava_time_temporal_ChronoField$$anon$8.prototype = $c_Ljava_time_temporal_ChronoField$$anon$8.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$8 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$8: 0
}, false, "java.time.temporal.ChronoField$$anon$8", {
  Ljava_time_temporal_ChronoField$$anon$8: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$8 as $d_Ljava_time_temporal_ChronoField$$anon$8 };
$c_Ljava_time_temporal_ChronoField$$anon$8.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$8;
/** @constructor */
function $c_Ljava_time_temporal_ChronoField$$anon$9() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_name = null;
  this.Ljava_time_temporal_ChronoField__f_ordinal = 0;
  this.Ljava_time_temporal_ChronoField__f_baseUnit = null;
  this.Ljava_time_temporal_ChronoField__f_rangeUnit = null;
  this.Ljava_time_temporal_ChronoField__f__range = null;
  this.Ljava_time_temporal_ChronoField__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoField__f_valuesbitmap$1 = false;
  $ct_Ljava_time_temporal_ChronoField__T__I__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_TemporalUnit__Ljava_time_temporal_ValueRange__T__I__(this, "MinuteOfHour", 8, $s_Ljava_time_temporal_ChronoUnit$__MINUTES__Ljava_time_temporal_ChronoUnit(), $s_Ljava_time_temporal_ChronoUnit$__HOURS__Ljava_time_temporal_ChronoUnit(), $j_java$002etime$002etemporal$002eValueRange$0024.$m_Ljava_time_temporal_ValueRange$().of__J__J__Ljava_time_temporal_ValueRange($j_java$002elang$002eObject.$L0, new $j_java$002elang$002eObject.$c_RTLong(59, 0)), "MINUTE_OF_HOUR", 8)
}
export { $c_Ljava_time_temporal_ChronoField$$anon$9 as $c_Ljava_time_temporal_ChronoField$$anon$9 };
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype = new $h_Ljava_time_temporal_ChronoField();
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype.constructor = $c_Ljava_time_temporal_ChronoField$$anon$9;
/** @constructor */
function $h_Ljava_time_temporal_ChronoField$$anon$9() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoField$$anon$9 as $h_Ljava_time_temporal_ChronoField$$anon$9 };
$h_Ljava_time_temporal_ChronoField$$anon$9.prototype = $c_Ljava_time_temporal_ChronoField$$anon$9.prototype;
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoField$$anon$9 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoField$$anon$9: 0
}, false, "java.time.temporal.ChronoField$$anon$9", {
  Ljava_time_temporal_ChronoField$$anon$9: 1,
  Ljava_time_temporal_ChronoField: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalField: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoField$$anon$9 as $d_Ljava_time_temporal_ChronoField$$anon$9 };
$c_Ljava_time_temporal_ChronoField$$anon$9.prototype.$classData = $d_Ljava_time_temporal_ChronoField$$anon$9;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$1() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Nanos", 0, $m_Ljava_time_Duration$().ofNanos__J__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1, 0)), "NANOS", 0)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$1 as $c_Ljava_time_temporal_ChronoUnit$$anon$1 };
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$1;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$1 as $h_Ljava_time_temporal_ChronoUnit$$anon$1 };
$h_Ljava_time_temporal_ChronoUnit$$anon$1.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$1: 0
}, false, "java.time.temporal.ChronoUnit$$anon$1", {
  Ljava_time_temporal_ChronoUnit$$anon$1: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$1 as $d_Ljava_time_temporal_ChronoUnit$$anon$1 };
$c_Ljava_time_temporal_ChronoUnit$$anon$1.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$1;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$10() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Months", 9, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(2629746, 0), 0), "MONTHS", 9)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$10 as $c_Ljava_time_temporal_ChronoUnit$$anon$10 };
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$10;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$10() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$10 as $h_Ljava_time_temporal_ChronoUnit$$anon$10 };
$h_Ljava_time_temporal_ChronoUnit$$anon$10.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$10 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$10: 0
}, false, "java.time.temporal.ChronoUnit$$anon$10", {
  Ljava_time_temporal_ChronoUnit$$anon$10: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$10 as $d_Ljava_time_temporal_ChronoUnit$$anon$10 };
$c_Ljava_time_temporal_ChronoUnit$$anon$10.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$10;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$11() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Years", 10, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(31556952, 0), 0), "YEARS", 10)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$11 as $c_Ljava_time_temporal_ChronoUnit$$anon$11 };
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$11;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$11() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$11 as $h_Ljava_time_temporal_ChronoUnit$$anon$11 };
$h_Ljava_time_temporal_ChronoUnit$$anon$11.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$11 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$11: 0
}, false, "java.time.temporal.ChronoUnit$$anon$11", {
  Ljava_time_temporal_ChronoUnit$$anon$11: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$11 as $d_Ljava_time_temporal_ChronoUnit$$anon$11 };
$c_Ljava_time_temporal_ChronoUnit$$anon$11.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$11;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$12() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Decades", 11, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(315569520, 0), 0), "DECADES", 11)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$12 as $c_Ljava_time_temporal_ChronoUnit$$anon$12 };
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$12;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$12() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$12 as $h_Ljava_time_temporal_ChronoUnit$$anon$12 };
$h_Ljava_time_temporal_ChronoUnit$$anon$12.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$12 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$12: 0
}, false, "java.time.temporal.ChronoUnit$$anon$12", {
  Ljava_time_temporal_ChronoUnit$$anon$12: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$12 as $d_Ljava_time_temporal_ChronoUnit$$anon$12 };
$c_Ljava_time_temporal_ChronoUnit$$anon$12.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$12;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$13() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Centuries", 12, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong((-1139272096), 0), 0), "CENTURIES", 12)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$13 as $c_Ljava_time_temporal_ChronoUnit$$anon$13 };
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$13;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$13() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$13 as $h_Ljava_time_temporal_ChronoUnit$$anon$13 };
$h_Ljava_time_temporal_ChronoUnit$$anon$13.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$13 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$13: 0
}, false, "java.time.temporal.ChronoUnit$$anon$13", {
  Ljava_time_temporal_ChronoUnit$$anon$13: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$13 as $d_Ljava_time_temporal_ChronoUnit$$anon$13 };
$c_Ljava_time_temporal_ChronoUnit$$anon$13.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$13;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$14() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Millenia", 13, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1492180928, 7), 0), "MILLENNIA", 13)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$14 as $c_Ljava_time_temporal_ChronoUnit$$anon$14 };
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$14;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$14() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$14 as $h_Ljava_time_temporal_ChronoUnit$$anon$14 };
$h_Ljava_time_temporal_ChronoUnit$$anon$14.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$14 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$14: 0
}, false, "java.time.temporal.ChronoUnit$$anon$14", {
  Ljava_time_temporal_ChronoUnit$$anon$14: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$14 as $d_Ljava_time_temporal_ChronoUnit$$anon$14 };
$c_Ljava_time_temporal_ChronoUnit$$anon$14.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$14;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$15() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Eras", 14, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1915187200, 7347425), 0), "ERAS", 14)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$15 as $c_Ljava_time_temporal_ChronoUnit$$anon$15 };
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$15;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$15() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$15 as $h_Ljava_time_temporal_ChronoUnit$$anon$15 };
$h_Ljava_time_temporal_ChronoUnit$$anon$15.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$15 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$15: 0
}, false, "java.time.temporal.ChronoUnit$$anon$15", {
  Ljava_time_temporal_ChronoUnit$$anon$15: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$15 as $d_Ljava_time_temporal_ChronoUnit$$anon$15 };
$c_Ljava_time_temporal_ChronoUnit$$anon$15.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$15;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$16() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Forever", 15, $m_Ljava_time_Duration$().ofSeconds__J__J__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong((-1), 2147483647), new $j_java$002elang$002eObject.$c_RTLong(999999999, 0)), "FOREVER", 15)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$16 as $c_Ljava_time_temporal_ChronoUnit$$anon$16 };
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$16;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$16() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$16 as $h_Ljava_time_temporal_ChronoUnit$$anon$16 };
$h_Ljava_time_temporal_ChronoUnit$$anon$16.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$16 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$16: 0
}, false, "java.time.temporal.ChronoUnit$$anon$16", {
  Ljava_time_temporal_ChronoUnit$$anon$16: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$16 as $d_Ljava_time_temporal_ChronoUnit$$anon$16 };
$c_Ljava_time_temporal_ChronoUnit$$anon$16.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$16;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$2() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Micros", 1, $m_Ljava_time_Duration$().ofNanos__J__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1000, 0)), "MICROS", 1)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$2 as $c_Ljava_time_temporal_ChronoUnit$$anon$2 };
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$2;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$2() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$2 as $h_Ljava_time_temporal_ChronoUnit$$anon$2 };
$h_Ljava_time_temporal_ChronoUnit$$anon$2.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$2 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$2: 0
}, false, "java.time.temporal.ChronoUnit$$anon$2", {
  Ljava_time_temporal_ChronoUnit$$anon$2: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$2 as $d_Ljava_time_temporal_ChronoUnit$$anon$2 };
$c_Ljava_time_temporal_ChronoUnit$$anon$2.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$2;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$3() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Millis", 2, $m_Ljava_time_Duration$().ofNanos__J__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1000000, 0)), "MILLIS", 2)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$3 as $c_Ljava_time_temporal_ChronoUnit$$anon$3 };
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$3;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$3() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$3 as $h_Ljava_time_temporal_ChronoUnit$$anon$3 };
$h_Ljava_time_temporal_ChronoUnit$$anon$3.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$3 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$3: 0
}, false, "java.time.temporal.ChronoUnit$$anon$3", {
  Ljava_time_temporal_ChronoUnit$$anon$3: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$3 as $d_Ljava_time_temporal_ChronoUnit$$anon$3 };
$c_Ljava_time_temporal_ChronoUnit$$anon$3.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$3;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$4() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Seconds", 3, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(1, 0), 0), "SECONDS", 3)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$4 as $c_Ljava_time_temporal_ChronoUnit$$anon$4 };
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$4;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$4() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$4 as $h_Ljava_time_temporal_ChronoUnit$$anon$4 };
$h_Ljava_time_temporal_ChronoUnit$$anon$4.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$4 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$4: 0
}, false, "java.time.temporal.ChronoUnit$$anon$4", {
  Ljava_time_temporal_ChronoUnit$$anon$4: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$4 as $d_Ljava_time_temporal_ChronoUnit$$anon$4 };
$c_Ljava_time_temporal_ChronoUnit$$anon$4.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$4;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$5() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Minutes", 4, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(60, 0), 0), "MINUTES", 4)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$5 as $c_Ljava_time_temporal_ChronoUnit$$anon$5 };
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$5;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$5() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$5 as $h_Ljava_time_temporal_ChronoUnit$$anon$5 };
$h_Ljava_time_temporal_ChronoUnit$$anon$5.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$5 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$5: 0
}, false, "java.time.temporal.ChronoUnit$$anon$5", {
  Ljava_time_temporal_ChronoUnit$$anon$5: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$5 as $d_Ljava_time_temporal_ChronoUnit$$anon$5 };
$c_Ljava_time_temporal_ChronoUnit$$anon$5.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$5;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$6() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Hours", 5, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(3600, 0), 0), "HOURS", 5)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$6 as $c_Ljava_time_temporal_ChronoUnit$$anon$6 };
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$6;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$6() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$6 as $h_Ljava_time_temporal_ChronoUnit$$anon$6 };
$h_Ljava_time_temporal_ChronoUnit$$anon$6.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$6 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$6: 0
}, false, "java.time.temporal.ChronoUnit$$anon$6", {
  Ljava_time_temporal_ChronoUnit$$anon$6: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$6 as $d_Ljava_time_temporal_ChronoUnit$$anon$6 };
$c_Ljava_time_temporal_ChronoUnit$$anon$6.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$6;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$7() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "HalfDays", 6, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(43200, 0), 0), "HALF_DAYS", 6)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$7 as $c_Ljava_time_temporal_ChronoUnit$$anon$7 };
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$7;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$7() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$7 as $h_Ljava_time_temporal_ChronoUnit$$anon$7 };
$h_Ljava_time_temporal_ChronoUnit$$anon$7.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$7 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$7: 0
}, false, "java.time.temporal.ChronoUnit$$anon$7", {
  Ljava_time_temporal_ChronoUnit$$anon$7: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$7 as $d_Ljava_time_temporal_ChronoUnit$$anon$7 };
$c_Ljava_time_temporal_ChronoUnit$$anon$7.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$7;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$8() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Days", 7, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(86400, 0), 0), "DAYS", 7)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$8 as $c_Ljava_time_temporal_ChronoUnit$$anon$8 };
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$8;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$8() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$8 as $h_Ljava_time_temporal_ChronoUnit$$anon$8 };
$h_Ljava_time_temporal_ChronoUnit$$anon$8.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$8 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$8: 0
}, false, "java.time.temporal.ChronoUnit$$anon$8", {
  Ljava_time_temporal_ChronoUnit$$anon$8: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$8 as $d_Ljava_time_temporal_ChronoUnit$$anon$8 };
$c_Ljava_time_temporal_ChronoUnit$$anon$8.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$8;
/** @constructor */
function $c_Ljava_time_temporal_ChronoUnit$$anon$9() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_temporal_ChronoUnit__f_name = null;
  this.Ljava_time_temporal_ChronoUnit__f_duration = null;
  this.Ljava_time_temporal_ChronoUnit__f_values$lzy1 = null;
  this.Ljava_time_temporal_ChronoUnit__f_valuesbitmap$1 = false;
  var this$1 = $m_Ljava_time_Duration$();
  $j_java$002etime$002etemporal$002eChronoUnit.$ct_Ljava_time_temporal_ChronoUnit__T__I__Ljava_time_Duration__T__I__(this, "Weeks", 8, this$1.java$time$Duration$$$create__J__I__Ljava_time_Duration(new $j_java$002elang$002eObject.$c_RTLong(604800, 0), 0), "WEEKS", 8)
}
export { $c_Ljava_time_temporal_ChronoUnit$$anon$9 as $c_Ljava_time_temporal_ChronoUnit$$anon$9 };
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype = new $j_java$002etime$002etemporal$002eChronoUnit.$h_Ljava_time_temporal_ChronoUnit();
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype.constructor = $c_Ljava_time_temporal_ChronoUnit$$anon$9;
/** @constructor */
function $h_Ljava_time_temporal_ChronoUnit$$anon$9() {
  /*<skip>*/
}
export { $h_Ljava_time_temporal_ChronoUnit$$anon$9 as $h_Ljava_time_temporal_ChronoUnit$$anon$9 };
$h_Ljava_time_temporal_ChronoUnit$$anon$9.prototype = $c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype;
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_temporal_ChronoUnit$$anon$9 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_temporal_ChronoUnit$$anon$9: 0
}, false, "java.time.temporal.ChronoUnit$$anon$9", {
  Ljava_time_temporal_ChronoUnit$$anon$9: 1,
  Ljava_time_temporal_ChronoUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalUnit: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_temporal_ChronoUnit$$anon$9 as $d_Ljava_time_temporal_ChronoUnit$$anon$9 };
$c_Ljava_time_temporal_ChronoUnit$$anon$9.prototype.$classData = $d_Ljava_time_temporal_ChronoUnit$$anon$9;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$1() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "MONDAY", 0, "MONDAY", 0)
}
export { $c_Ljava_time_DayOfWeek$$anon$1 as $c_Ljava_time_DayOfWeek$$anon$1 };
$c_Ljava_time_DayOfWeek$$anon$1.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$1.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$1;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$1 as $h_Ljava_time_DayOfWeek$$anon$1 };
$h_Ljava_time_DayOfWeek$$anon$1.prototype = $c_Ljava_time_DayOfWeek$$anon$1.prototype;
$c_Ljava_time_DayOfWeek$$anon$1.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$1.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$1.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$1: 0
}, false, "java.time.DayOfWeek$$anon$1", {
  Ljava_time_DayOfWeek$$anon$1: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$1 as $d_Ljava_time_DayOfWeek$$anon$1 };
$c_Ljava_time_DayOfWeek$$anon$1.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$1;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$2() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "TUESDAY", 1, "TUESDAY", 1)
}
export { $c_Ljava_time_DayOfWeek$$anon$2 as $c_Ljava_time_DayOfWeek$$anon$2 };
$c_Ljava_time_DayOfWeek$$anon$2.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$2.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$2;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$2() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$2 as $h_Ljava_time_DayOfWeek$$anon$2 };
$h_Ljava_time_DayOfWeek$$anon$2.prototype = $c_Ljava_time_DayOfWeek$$anon$2.prototype;
$c_Ljava_time_DayOfWeek$$anon$2.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$2.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$2.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$2 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$2: 0
}, false, "java.time.DayOfWeek$$anon$2", {
  Ljava_time_DayOfWeek$$anon$2: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$2 as $d_Ljava_time_DayOfWeek$$anon$2 };
$c_Ljava_time_DayOfWeek$$anon$2.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$2;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$3() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "WEDNESDAY", 2, "WEDNESDAY", 2)
}
export { $c_Ljava_time_DayOfWeek$$anon$3 as $c_Ljava_time_DayOfWeek$$anon$3 };
$c_Ljava_time_DayOfWeek$$anon$3.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$3.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$3;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$3() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$3 as $h_Ljava_time_DayOfWeek$$anon$3 };
$h_Ljava_time_DayOfWeek$$anon$3.prototype = $c_Ljava_time_DayOfWeek$$anon$3.prototype;
$c_Ljava_time_DayOfWeek$$anon$3.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$3.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$3.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$3 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$3: 0
}, false, "java.time.DayOfWeek$$anon$3", {
  Ljava_time_DayOfWeek$$anon$3: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$3 as $d_Ljava_time_DayOfWeek$$anon$3 };
$c_Ljava_time_DayOfWeek$$anon$3.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$3;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$4() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "THURSDAY", 3, "THURSDAY", 3)
}
export { $c_Ljava_time_DayOfWeek$$anon$4 as $c_Ljava_time_DayOfWeek$$anon$4 };
$c_Ljava_time_DayOfWeek$$anon$4.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$4.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$4;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$4() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$4 as $h_Ljava_time_DayOfWeek$$anon$4 };
$h_Ljava_time_DayOfWeek$$anon$4.prototype = $c_Ljava_time_DayOfWeek$$anon$4.prototype;
$c_Ljava_time_DayOfWeek$$anon$4.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$4.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$4.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$4 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$4: 0
}, false, "java.time.DayOfWeek$$anon$4", {
  Ljava_time_DayOfWeek$$anon$4: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$4 as $d_Ljava_time_DayOfWeek$$anon$4 };
$c_Ljava_time_DayOfWeek$$anon$4.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$4;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$5() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "FRIDAY", 4, "FRIDAY", 4)
}
export { $c_Ljava_time_DayOfWeek$$anon$5 as $c_Ljava_time_DayOfWeek$$anon$5 };
$c_Ljava_time_DayOfWeek$$anon$5.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$5.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$5;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$5() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$5 as $h_Ljava_time_DayOfWeek$$anon$5 };
$h_Ljava_time_DayOfWeek$$anon$5.prototype = $c_Ljava_time_DayOfWeek$$anon$5.prototype;
$c_Ljava_time_DayOfWeek$$anon$5.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$5.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$5.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$5 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$5: 0
}, false, "java.time.DayOfWeek$$anon$5", {
  Ljava_time_DayOfWeek$$anon$5: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$5 as $d_Ljava_time_DayOfWeek$$anon$5 };
$c_Ljava_time_DayOfWeek$$anon$5.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$5;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$6() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "SATURDAY", 5, "SATURDAY", 5)
}
export { $c_Ljava_time_DayOfWeek$$anon$6 as $c_Ljava_time_DayOfWeek$$anon$6 };
$c_Ljava_time_DayOfWeek$$anon$6.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$6.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$6;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$6() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$6 as $h_Ljava_time_DayOfWeek$$anon$6 };
$h_Ljava_time_DayOfWeek$$anon$6.prototype = $c_Ljava_time_DayOfWeek$$anon$6.prototype;
$c_Ljava_time_DayOfWeek$$anon$6.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$6.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$6.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$6 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$6: 0
}, false, "java.time.DayOfWeek$$anon$6", {
  Ljava_time_DayOfWeek$$anon$6: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$6 as $d_Ljava_time_DayOfWeek$$anon$6 };
$c_Ljava_time_DayOfWeek$$anon$6.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$6;
/** @constructor */
function $c_Ljava_time_DayOfWeek$$anon$7() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_DayOfWeek__f_ordinal = 0;
  $ct_Ljava_time_DayOfWeek__T__I__T__I__(this, "SUNDAY", 6, "SUNDAY", 6)
}
export { $c_Ljava_time_DayOfWeek$$anon$7 as $c_Ljava_time_DayOfWeek$$anon$7 };
$c_Ljava_time_DayOfWeek$$anon$7.prototype = new $h_Ljava_time_DayOfWeek();
$c_Ljava_time_DayOfWeek$$anon$7.prototype.constructor = $c_Ljava_time_DayOfWeek$$anon$7;
/** @constructor */
function $h_Ljava_time_DayOfWeek$$anon$7() {
  /*<skip>*/
}
export { $h_Ljava_time_DayOfWeek$$anon$7 as $h_Ljava_time_DayOfWeek$$anon$7 };
$h_Ljava_time_DayOfWeek$$anon$7.prototype = $c_Ljava_time_DayOfWeek$$anon$7.prototype;
$c_Ljava_time_DayOfWeek$$anon$7.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_DayOfWeek$$anon$7.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_DayOfWeek$$anon$7.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_DayOfWeek$$anon$7 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_DayOfWeek$$anon$7: 0
}, false, "java.time.DayOfWeek$$anon$7", {
  Ljava_time_DayOfWeek$$anon$7: 1,
  Ljava_time_DayOfWeek: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_DayOfWeek$$anon$7 as $d_Ljava_time_DayOfWeek$$anon$7 };
$c_Ljava_time_DayOfWeek$$anon$7.prototype.$classData = $d_Ljava_time_DayOfWeek$$anon$7;
/** @constructor */
function $c_Ljava_time_Month$$anon$1() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "JANUARY", 0, "JANUARY", 0)
}
export { $c_Ljava_time_Month$$anon$1 as $c_Ljava_time_Month$$anon$1 };
$c_Ljava_time_Month$$anon$1.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$1.prototype.constructor = $c_Ljava_time_Month$$anon$1;
/** @constructor */
function $h_Ljava_time_Month$$anon$1() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$1 as $h_Ljava_time_Month$$anon$1 };
$h_Ljava_time_Month$$anon$1.prototype = $c_Ljava_time_Month$$anon$1.prototype;
$c_Ljava_time_Month$$anon$1.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$1.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$1.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$1 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$1: 0
}, false, "java.time.Month$$anon$1", {
  Ljava_time_Month$$anon$1: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$1 as $d_Ljava_time_Month$$anon$1 };
$c_Ljava_time_Month$$anon$1.prototype.$classData = $d_Ljava_time_Month$$anon$1;
/** @constructor */
function $c_Ljava_time_Month$$anon$10() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "OCTOBER", 9, "OCTOBER", 9)
}
export { $c_Ljava_time_Month$$anon$10 as $c_Ljava_time_Month$$anon$10 };
$c_Ljava_time_Month$$anon$10.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$10.prototype.constructor = $c_Ljava_time_Month$$anon$10;
/** @constructor */
function $h_Ljava_time_Month$$anon$10() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$10 as $h_Ljava_time_Month$$anon$10 };
$h_Ljava_time_Month$$anon$10.prototype = $c_Ljava_time_Month$$anon$10.prototype;
$c_Ljava_time_Month$$anon$10.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$10.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$10.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$10 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$10: 0
}, false, "java.time.Month$$anon$10", {
  Ljava_time_Month$$anon$10: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$10 as $d_Ljava_time_Month$$anon$10 };
$c_Ljava_time_Month$$anon$10.prototype.$classData = $d_Ljava_time_Month$$anon$10;
/** @constructor */
function $c_Ljava_time_Month$$anon$11() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "NOVEMBER", 10, "NOVEMBER", 10)
}
export { $c_Ljava_time_Month$$anon$11 as $c_Ljava_time_Month$$anon$11 };
$c_Ljava_time_Month$$anon$11.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$11.prototype.constructor = $c_Ljava_time_Month$$anon$11;
/** @constructor */
function $h_Ljava_time_Month$$anon$11() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$11 as $h_Ljava_time_Month$$anon$11 };
$h_Ljava_time_Month$$anon$11.prototype = $c_Ljava_time_Month$$anon$11.prototype;
$c_Ljava_time_Month$$anon$11.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$11.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$11.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$11 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$11: 0
}, false, "java.time.Month$$anon$11", {
  Ljava_time_Month$$anon$11: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$11 as $d_Ljava_time_Month$$anon$11 };
$c_Ljava_time_Month$$anon$11.prototype.$classData = $d_Ljava_time_Month$$anon$11;
/** @constructor */
function $c_Ljava_time_Month$$anon$12() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "DECEMBER", 11, "DECEMBER", 11)
}
export { $c_Ljava_time_Month$$anon$12 as $c_Ljava_time_Month$$anon$12 };
$c_Ljava_time_Month$$anon$12.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$12.prototype.constructor = $c_Ljava_time_Month$$anon$12;
/** @constructor */
function $h_Ljava_time_Month$$anon$12() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$12 as $h_Ljava_time_Month$$anon$12 };
$h_Ljava_time_Month$$anon$12.prototype = $c_Ljava_time_Month$$anon$12.prototype;
$c_Ljava_time_Month$$anon$12.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$12.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$12.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$12 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$12: 0
}, false, "java.time.Month$$anon$12", {
  Ljava_time_Month$$anon$12: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$12 as $d_Ljava_time_Month$$anon$12 };
$c_Ljava_time_Month$$anon$12.prototype.$classData = $d_Ljava_time_Month$$anon$12;
/** @constructor */
function $c_Ljava_time_Month$$anon$2() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "FEBRUARY", 1, "FEBRUARY", 1)
}
export { $c_Ljava_time_Month$$anon$2 as $c_Ljava_time_Month$$anon$2 };
$c_Ljava_time_Month$$anon$2.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$2.prototype.constructor = $c_Ljava_time_Month$$anon$2;
/** @constructor */
function $h_Ljava_time_Month$$anon$2() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$2 as $h_Ljava_time_Month$$anon$2 };
$h_Ljava_time_Month$$anon$2.prototype = $c_Ljava_time_Month$$anon$2.prototype;
$c_Ljava_time_Month$$anon$2.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$2.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$2.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$2 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$2: 0
}, false, "java.time.Month$$anon$2", {
  Ljava_time_Month$$anon$2: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$2 as $d_Ljava_time_Month$$anon$2 };
$c_Ljava_time_Month$$anon$2.prototype.$classData = $d_Ljava_time_Month$$anon$2;
/** @constructor */
function $c_Ljava_time_Month$$anon$3() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "MARCH", 2, "MARCH", 2)
}
export { $c_Ljava_time_Month$$anon$3 as $c_Ljava_time_Month$$anon$3 };
$c_Ljava_time_Month$$anon$3.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$3.prototype.constructor = $c_Ljava_time_Month$$anon$3;
/** @constructor */
function $h_Ljava_time_Month$$anon$3() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$3 as $h_Ljava_time_Month$$anon$3 };
$h_Ljava_time_Month$$anon$3.prototype = $c_Ljava_time_Month$$anon$3.prototype;
$c_Ljava_time_Month$$anon$3.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$3.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$3.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$3 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$3: 0
}, false, "java.time.Month$$anon$3", {
  Ljava_time_Month$$anon$3: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$3 as $d_Ljava_time_Month$$anon$3 };
$c_Ljava_time_Month$$anon$3.prototype.$classData = $d_Ljava_time_Month$$anon$3;
/** @constructor */
function $c_Ljava_time_Month$$anon$4() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "APRIL", 3, "APRIL", 3)
}
export { $c_Ljava_time_Month$$anon$4 as $c_Ljava_time_Month$$anon$4 };
$c_Ljava_time_Month$$anon$4.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$4.prototype.constructor = $c_Ljava_time_Month$$anon$4;
/** @constructor */
function $h_Ljava_time_Month$$anon$4() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$4 as $h_Ljava_time_Month$$anon$4 };
$h_Ljava_time_Month$$anon$4.prototype = $c_Ljava_time_Month$$anon$4.prototype;
$c_Ljava_time_Month$$anon$4.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$4.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$4.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$4 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$4: 0
}, false, "java.time.Month$$anon$4", {
  Ljava_time_Month$$anon$4: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$4 as $d_Ljava_time_Month$$anon$4 };
$c_Ljava_time_Month$$anon$4.prototype.$classData = $d_Ljava_time_Month$$anon$4;
/** @constructor */
function $c_Ljava_time_Month$$anon$5() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "MAY", 4, "MAY", 4)
}
export { $c_Ljava_time_Month$$anon$5 as $c_Ljava_time_Month$$anon$5 };
$c_Ljava_time_Month$$anon$5.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$5.prototype.constructor = $c_Ljava_time_Month$$anon$5;
/** @constructor */
function $h_Ljava_time_Month$$anon$5() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$5 as $h_Ljava_time_Month$$anon$5 };
$h_Ljava_time_Month$$anon$5.prototype = $c_Ljava_time_Month$$anon$5.prototype;
$c_Ljava_time_Month$$anon$5.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$5.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$5.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$5 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$5: 0
}, false, "java.time.Month$$anon$5", {
  Ljava_time_Month$$anon$5: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$5 as $d_Ljava_time_Month$$anon$5 };
$c_Ljava_time_Month$$anon$5.prototype.$classData = $d_Ljava_time_Month$$anon$5;
/** @constructor */
function $c_Ljava_time_Month$$anon$6() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "JUNE", 5, "JUNE", 5)
}
export { $c_Ljava_time_Month$$anon$6 as $c_Ljava_time_Month$$anon$6 };
$c_Ljava_time_Month$$anon$6.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$6.prototype.constructor = $c_Ljava_time_Month$$anon$6;
/** @constructor */
function $h_Ljava_time_Month$$anon$6() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$6 as $h_Ljava_time_Month$$anon$6 };
$h_Ljava_time_Month$$anon$6.prototype = $c_Ljava_time_Month$$anon$6.prototype;
$c_Ljava_time_Month$$anon$6.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$6.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$6.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$6 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$6: 0
}, false, "java.time.Month$$anon$6", {
  Ljava_time_Month$$anon$6: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$6 as $d_Ljava_time_Month$$anon$6 };
$c_Ljava_time_Month$$anon$6.prototype.$classData = $d_Ljava_time_Month$$anon$6;
/** @constructor */
function $c_Ljava_time_Month$$anon$7() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "JULY", 6, "JULY", 6)
}
export { $c_Ljava_time_Month$$anon$7 as $c_Ljava_time_Month$$anon$7 };
$c_Ljava_time_Month$$anon$7.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$7.prototype.constructor = $c_Ljava_time_Month$$anon$7;
/** @constructor */
function $h_Ljava_time_Month$$anon$7() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$7 as $h_Ljava_time_Month$$anon$7 };
$h_Ljava_time_Month$$anon$7.prototype = $c_Ljava_time_Month$$anon$7.prototype;
$c_Ljava_time_Month$$anon$7.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$7.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$7.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$7 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$7: 0
}, false, "java.time.Month$$anon$7", {
  Ljava_time_Month$$anon$7: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$7 as $d_Ljava_time_Month$$anon$7 };
$c_Ljava_time_Month$$anon$7.prototype.$classData = $d_Ljava_time_Month$$anon$7;
/** @constructor */
function $c_Ljava_time_Month$$anon$8() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "AUGUST", 7, "AUGUST", 7)
}
export { $c_Ljava_time_Month$$anon$8 as $c_Ljava_time_Month$$anon$8 };
$c_Ljava_time_Month$$anon$8.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$8.prototype.constructor = $c_Ljava_time_Month$$anon$8;
/** @constructor */
function $h_Ljava_time_Month$$anon$8() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$8 as $h_Ljava_time_Month$$anon$8 };
$h_Ljava_time_Month$$anon$8.prototype = $c_Ljava_time_Month$$anon$8.prototype;
$c_Ljava_time_Month$$anon$8.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$8.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$8.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$8 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$8: 0
}, false, "java.time.Month$$anon$8", {
  Ljava_time_Month$$anon$8: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$8 as $d_Ljava_time_Month$$anon$8 };
$c_Ljava_time_Month$$anon$8.prototype.$classData = $d_Ljava_time_Month$$anon$8;
/** @constructor */
function $c_Ljava_time_Month$$anon$9() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  this.Ljava_time_Month__f_ordinal = 0;
  $ct_Ljava_time_Month__T__I__T__I__(this, "SEPTEMBER", 8, "SEPTEMBER", 8)
}
export { $c_Ljava_time_Month$$anon$9 as $c_Ljava_time_Month$$anon$9 };
$c_Ljava_time_Month$$anon$9.prototype = new $h_Ljava_time_Month();
$c_Ljava_time_Month$$anon$9.prototype.constructor = $c_Ljava_time_Month$$anon$9;
/** @constructor */
function $h_Ljava_time_Month$$anon$9() {
  /*<skip>*/
}
export { $h_Ljava_time_Month$$anon$9 as $h_Ljava_time_Month$$anon$9 };
$h_Ljava_time_Month$$anon$9.prototype = $c_Ljava_time_Month$$anon$9.prototype;
$c_Ljava_time_Month$$anon$9.prototype.productArity__I = (function() {
  return 0
});
$c_Ljava_time_Month$$anon$9.prototype.productElement__I__O = (function(n) {
  return $j_scala$002eruntime$002eEnumValue.$f_sr_EnumValue__productElement__I__O(this, n)
});
$c_Ljava_time_Month$$anon$9.prototype.productPrefix__T = (function() {
  return this.jl_Enum__f__name
});
var $d_Ljava_time_Month$$anon$9 = new $j_java$002elang$002eObject.$TypeData().initClass({
  Ljava_time_Month$$anon$9: 0
}, false, "java.time.Month$$anon$9", {
  Ljava_time_Month$$anon$9: 1,
  Ljava_time_Month: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1,
  Ljava_time_temporal_TemporalAccessor: 1,
  Ljava_time_temporal_TemporalAdjuster: 1,
  s_Equals: 1,
  s_Product: 1,
  s_reflect_Enum: 1,
  sr_EnumValue: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
export { $d_Ljava_time_Month$$anon$9 as $d_Ljava_time_Month$$anon$9 };
$c_Ljava_time_Month$$anon$9.prototype.$classData = $d_Ljava_time_Month$$anon$9;
var $t_Ljava_time_DayOfWeek$__MONDAY = null;
function $u_Ljava_time_DayOfWeek$__MONDAY(x) {
  $t_Ljava_time_DayOfWeek$__MONDAY = x
}
export { $t_Ljava_time_DayOfWeek$__MONDAY as $t_Ljava_time_DayOfWeek$__MONDAY, $u_Ljava_time_DayOfWeek$__MONDAY as $u_Ljava_time_DayOfWeek$__MONDAY };
var $t_Ljava_time_DayOfWeek$__TUESDAY = null;
function $u_Ljava_time_DayOfWeek$__TUESDAY(x) {
  $t_Ljava_time_DayOfWeek$__TUESDAY = x
}
export { $t_Ljava_time_DayOfWeek$__TUESDAY as $t_Ljava_time_DayOfWeek$__TUESDAY, $u_Ljava_time_DayOfWeek$__TUESDAY as $u_Ljava_time_DayOfWeek$__TUESDAY };
var $t_Ljava_time_DayOfWeek$__WEDNESDAY = null;
function $u_Ljava_time_DayOfWeek$__WEDNESDAY(x) {
  $t_Ljava_time_DayOfWeek$__WEDNESDAY = x
}
export { $t_Ljava_time_DayOfWeek$__WEDNESDAY as $t_Ljava_time_DayOfWeek$__WEDNESDAY, $u_Ljava_time_DayOfWeek$__WEDNESDAY as $u_Ljava_time_DayOfWeek$__WEDNESDAY };
var $t_Ljava_time_DayOfWeek$__THURSDAY = null;
function $u_Ljava_time_DayOfWeek$__THURSDAY(x) {
  $t_Ljava_time_DayOfWeek$__THURSDAY = x
}
export { $t_Ljava_time_DayOfWeek$__THURSDAY as $t_Ljava_time_DayOfWeek$__THURSDAY, $u_Ljava_time_DayOfWeek$__THURSDAY as $u_Ljava_time_DayOfWeek$__THURSDAY };
var $t_Ljava_time_DayOfWeek$__FRIDAY = null;
function $u_Ljava_time_DayOfWeek$__FRIDAY(x) {
  $t_Ljava_time_DayOfWeek$__FRIDAY = x
}
export { $t_Ljava_time_DayOfWeek$__FRIDAY as $t_Ljava_time_DayOfWeek$__FRIDAY, $u_Ljava_time_DayOfWeek$__FRIDAY as $u_Ljava_time_DayOfWeek$__FRIDAY };
var $t_Ljava_time_DayOfWeek$__SATURDAY = null;
function $u_Ljava_time_DayOfWeek$__SATURDAY(x) {
  $t_Ljava_time_DayOfWeek$__SATURDAY = x
}
export { $t_Ljava_time_DayOfWeek$__SATURDAY as $t_Ljava_time_DayOfWeek$__SATURDAY, $u_Ljava_time_DayOfWeek$__SATURDAY as $u_Ljava_time_DayOfWeek$__SATURDAY };
var $t_Ljava_time_DayOfWeek$__SUNDAY = null;
function $u_Ljava_time_DayOfWeek$__SUNDAY(x) {
  $t_Ljava_time_DayOfWeek$__SUNDAY = x
}
export { $t_Ljava_time_DayOfWeek$__SUNDAY as $t_Ljava_time_DayOfWeek$__SUNDAY, $u_Ljava_time_DayOfWeek$__SUNDAY as $u_Ljava_time_DayOfWeek$__SUNDAY };
var $t_Ljava_time_Month$__JANUARY = null;
function $u_Ljava_time_Month$__JANUARY(x) {
  $t_Ljava_time_Month$__JANUARY = x
}
export { $t_Ljava_time_Month$__JANUARY as $t_Ljava_time_Month$__JANUARY, $u_Ljava_time_Month$__JANUARY as $u_Ljava_time_Month$__JANUARY };
var $t_Ljava_time_Month$__FEBRUARY = null;
function $u_Ljava_time_Month$__FEBRUARY(x) {
  $t_Ljava_time_Month$__FEBRUARY = x
}
export { $t_Ljava_time_Month$__FEBRUARY as $t_Ljava_time_Month$__FEBRUARY, $u_Ljava_time_Month$__FEBRUARY as $u_Ljava_time_Month$__FEBRUARY };
var $t_Ljava_time_Month$__MARCH = null;
function $u_Ljava_time_Month$__MARCH(x) {
  $t_Ljava_time_Month$__MARCH = x
}
export { $t_Ljava_time_Month$__MARCH as $t_Ljava_time_Month$__MARCH, $u_Ljava_time_Month$__MARCH as $u_Ljava_time_Month$__MARCH };
var $t_Ljava_time_Month$__APRIL = null;
function $u_Ljava_time_Month$__APRIL(x) {
  $t_Ljava_time_Month$__APRIL = x
}
export { $t_Ljava_time_Month$__APRIL as $t_Ljava_time_Month$__APRIL, $u_Ljava_time_Month$__APRIL as $u_Ljava_time_Month$__APRIL };
var $t_Ljava_time_Month$__MAY = null;
function $u_Ljava_time_Month$__MAY(x) {
  $t_Ljava_time_Month$__MAY = x
}
export { $t_Ljava_time_Month$__MAY as $t_Ljava_time_Month$__MAY, $u_Ljava_time_Month$__MAY as $u_Ljava_time_Month$__MAY };
var $t_Ljava_time_Month$__JUNE = null;
function $u_Ljava_time_Month$__JUNE(x) {
  $t_Ljava_time_Month$__JUNE = x
}
export { $t_Ljava_time_Month$__JUNE as $t_Ljava_time_Month$__JUNE, $u_Ljava_time_Month$__JUNE as $u_Ljava_time_Month$__JUNE };
var $t_Ljava_time_Month$__JULY = null;
function $u_Ljava_time_Month$__JULY(x) {
  $t_Ljava_time_Month$__JULY = x
}
export { $t_Ljava_time_Month$__JULY as $t_Ljava_time_Month$__JULY, $u_Ljava_time_Month$__JULY as $u_Ljava_time_Month$__JULY };
var $t_Ljava_time_Month$__AUGUST = null;
function $u_Ljava_time_Month$__AUGUST(x) {
  $t_Ljava_time_Month$__AUGUST = x
}
export { $t_Ljava_time_Month$__AUGUST as $t_Ljava_time_Month$__AUGUST, $u_Ljava_time_Month$__AUGUST as $u_Ljava_time_Month$__AUGUST };
var $t_Ljava_time_Month$__SEPTEMBER = null;
function $u_Ljava_time_Month$__SEPTEMBER(x) {
  $t_Ljava_time_Month$__SEPTEMBER = x
}
export { $t_Ljava_time_Month$__SEPTEMBER as $t_Ljava_time_Month$__SEPTEMBER, $u_Ljava_time_Month$__SEPTEMBER as $u_Ljava_time_Month$__SEPTEMBER };
var $t_Ljava_time_Month$__OCTOBER = null;
function $u_Ljava_time_Month$__OCTOBER(x) {
  $t_Ljava_time_Month$__OCTOBER = x
}
export { $t_Ljava_time_Month$__OCTOBER as $t_Ljava_time_Month$__OCTOBER, $u_Ljava_time_Month$__OCTOBER as $u_Ljava_time_Month$__OCTOBER };
var $t_Ljava_time_Month$__NOVEMBER = null;
function $u_Ljava_time_Month$__NOVEMBER(x) {
  $t_Ljava_time_Month$__NOVEMBER = x
}
export { $t_Ljava_time_Month$__NOVEMBER as $t_Ljava_time_Month$__NOVEMBER, $u_Ljava_time_Month$__NOVEMBER as $u_Ljava_time_Month$__NOVEMBER };
var $t_Ljava_time_Month$__DECEMBER = null;
function $u_Ljava_time_Month$__DECEMBER(x) {
  $t_Ljava_time_Month$__DECEMBER = x
}
export { $t_Ljava_time_Month$__DECEMBER as $t_Ljava_time_Month$__DECEMBER, $u_Ljava_time_Month$__DECEMBER as $u_Ljava_time_Month$__DECEMBER };
var $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND = null;
function $u_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND(x) {
  $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND = x
}
export { $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND as $t_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND, $u_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND as $u_Ljava_time_temporal_ChronoField$__NANO_OF_SECOND };
var $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__NANO_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY as $t_Ljava_time_temporal_ChronoField$__NANO_OF_DAY, $u_Ljava_time_temporal_ChronoField$__NANO_OF_DAY as $u_Ljava_time_temporal_ChronoField$__NANO_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND = null;
function $u_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND(x) {
  $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND = x
}
export { $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND as $t_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND, $u_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND as $u_Ljava_time_temporal_ChronoField$__MICRO_OF_SECOND };
var $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY as $t_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY, $u_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY as $u_Ljava_time_temporal_ChronoField$__MICRO_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND = null;
function $u_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND(x) {
  $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND = x
}
export { $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND as $t_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND, $u_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND as $u_Ljava_time_temporal_ChronoField$__MILLI_OF_SECOND };
var $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY as $t_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY, $u_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY as $u_Ljava_time_temporal_ChronoField$__MILLI_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE = null;
function $u_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE(x) {
  $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE = x
}
export { $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE as $t_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE, $u_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE as $u_Ljava_time_temporal_ChronoField$__SECOND_OF_MINUTE };
var $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY as $t_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY, $u_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY as $u_Ljava_time_temporal_ChronoField$__SECOND_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR = null;
function $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR(x) {
  $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR = x
}
export { $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR as $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR, $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR as $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_HOUR };
var $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY as $t_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY, $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY as $u_Ljava_time_temporal_ChronoField$__MINUTE_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM = null;
function $u_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM(x) {
  $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM = x
}
export { $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM as $t_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM, $u_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM as $u_Ljava_time_temporal_ChronoField$__HOUR_OF_AMPM };
var $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM = null;
function $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM(x) {
  $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM = x
}
export { $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM as $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM, $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM as $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_AMPM };
var $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY as $t_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY, $u_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY as $u_Ljava_time_temporal_ChronoField$__HOUR_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY as $t_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY, $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY as $u_Ljava_time_temporal_ChronoField$__CLOCK_HOUR_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY as $t_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY, $u_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY as $u_Ljava_time_temporal_ChronoField$__AMPM_OF_DAY };
var $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK = null;
function $u_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK(x) {
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK = x
}
export { $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK as $t_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK, $u_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK as $u_Ljava_time_temporal_ChronoField$__DAY_OF_WEEK };
var $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH = null;
function $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH(x) {
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH = x
}
export { $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH as $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH, $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH as $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_MONTH };
var $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR = null;
function $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR(x) {
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR = x
}
export { $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR as $t_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR, $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR as $u_Ljava_time_temporal_ChronoField$__ALIGNED_DAY_OF_WEEK_IN_YEAR };
var $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH = null;
function $u_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH(x) {
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH = x
}
export { $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH as $t_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH, $u_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH as $u_Ljava_time_temporal_ChronoField$__DAY_OF_MONTH };
var $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR = null;
function $u_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR(x) {
  $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR = x
}
export { $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR as $t_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR, $u_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR as $u_Ljava_time_temporal_ChronoField$__DAY_OF_YEAR };
var $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY = null;
function $u_Ljava_time_temporal_ChronoField$__EPOCH_DAY(x) {
  $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY = x
}
export { $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY as $t_Ljava_time_temporal_ChronoField$__EPOCH_DAY, $u_Ljava_time_temporal_ChronoField$__EPOCH_DAY as $u_Ljava_time_temporal_ChronoField$__EPOCH_DAY };
var $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH = null;
function $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH(x) {
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH = x
}
export { $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH as $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH, $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH as $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_MONTH };
var $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR = null;
function $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR(x) {
  $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR = x
}
export { $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR as $t_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR, $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR as $u_Ljava_time_temporal_ChronoField$__ALIGNED_WEEK_OF_YEAR };
var $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR = null;
function $u_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR(x) {
  $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR = x
}
export { $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR as $t_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR, $u_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR as $u_Ljava_time_temporal_ChronoField$__MONTH_OF_YEAR };
var $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH = null;
function $u_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH(x) {
  $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH = x
}
export { $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH as $t_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH, $u_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH as $u_Ljava_time_temporal_ChronoField$__PROLEPTIC_MONTH };
var $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA = null;
function $u_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA(x) {
  $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA = x
}
export { $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA as $t_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA, $u_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA as $u_Ljava_time_temporal_ChronoField$__YEAR_OF_ERA };
var $t_Ljava_time_temporal_ChronoField$__YEAR = null;
function $u_Ljava_time_temporal_ChronoField$__YEAR(x) {
  $t_Ljava_time_temporal_ChronoField$__YEAR = x
}
export { $t_Ljava_time_temporal_ChronoField$__YEAR as $t_Ljava_time_temporal_ChronoField$__YEAR, $u_Ljava_time_temporal_ChronoField$__YEAR as $u_Ljava_time_temporal_ChronoField$__YEAR };
var $t_Ljava_time_temporal_ChronoField$__ERA = null;
function $u_Ljava_time_temporal_ChronoField$__ERA(x) {
  $t_Ljava_time_temporal_ChronoField$__ERA = x
}
export { $t_Ljava_time_temporal_ChronoField$__ERA as $t_Ljava_time_temporal_ChronoField$__ERA, $u_Ljava_time_temporal_ChronoField$__ERA as $u_Ljava_time_temporal_ChronoField$__ERA };
var $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS = null;
function $u_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS(x) {
  $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS = x
}
export { $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS as $t_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS, $u_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS as $u_Ljava_time_temporal_ChronoField$__INSTANT_SECONDS };
var $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS = null;
function $u_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS(x) {
  $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS = x
}
export { $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS as $t_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS, $u_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS as $u_Ljava_time_temporal_ChronoField$__OFFSET_SECONDS };
var $t_Ljava_time_temporal_ChronoUnit$__NANOS = null;
function $u_Ljava_time_temporal_ChronoUnit$__NANOS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__NANOS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__NANOS as $t_Ljava_time_temporal_ChronoUnit$__NANOS, $u_Ljava_time_temporal_ChronoUnit$__NANOS as $u_Ljava_time_temporal_ChronoUnit$__NANOS };
var $t_Ljava_time_temporal_ChronoUnit$__MICROS = null;
function $u_Ljava_time_temporal_ChronoUnit$__MICROS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__MICROS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__MICROS as $t_Ljava_time_temporal_ChronoUnit$__MICROS, $u_Ljava_time_temporal_ChronoUnit$__MICROS as $u_Ljava_time_temporal_ChronoUnit$__MICROS };
var $t_Ljava_time_temporal_ChronoUnit$__MILLIS = null;
function $u_Ljava_time_temporal_ChronoUnit$__MILLIS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__MILLIS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__MILLIS as $t_Ljava_time_temporal_ChronoUnit$__MILLIS, $u_Ljava_time_temporal_ChronoUnit$__MILLIS as $u_Ljava_time_temporal_ChronoUnit$__MILLIS };
var $t_Ljava_time_temporal_ChronoUnit$__SECONDS = null;
function $u_Ljava_time_temporal_ChronoUnit$__SECONDS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__SECONDS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__SECONDS as $t_Ljava_time_temporal_ChronoUnit$__SECONDS, $u_Ljava_time_temporal_ChronoUnit$__SECONDS as $u_Ljava_time_temporal_ChronoUnit$__SECONDS };
var $t_Ljava_time_temporal_ChronoUnit$__MINUTES = null;
function $u_Ljava_time_temporal_ChronoUnit$__MINUTES(x) {
  $t_Ljava_time_temporal_ChronoUnit$__MINUTES = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__MINUTES as $t_Ljava_time_temporal_ChronoUnit$__MINUTES, $u_Ljava_time_temporal_ChronoUnit$__MINUTES as $u_Ljava_time_temporal_ChronoUnit$__MINUTES };
var $t_Ljava_time_temporal_ChronoUnit$__HOURS = null;
function $u_Ljava_time_temporal_ChronoUnit$__HOURS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__HOURS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__HOURS as $t_Ljava_time_temporal_ChronoUnit$__HOURS, $u_Ljava_time_temporal_ChronoUnit$__HOURS as $u_Ljava_time_temporal_ChronoUnit$__HOURS };
var $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS = null;
function $u_Ljava_time_temporal_ChronoUnit$__HALF_DAYS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS as $t_Ljava_time_temporal_ChronoUnit$__HALF_DAYS, $u_Ljava_time_temporal_ChronoUnit$__HALF_DAYS as $u_Ljava_time_temporal_ChronoUnit$__HALF_DAYS };
var $t_Ljava_time_temporal_ChronoUnit$__DAYS = null;
function $u_Ljava_time_temporal_ChronoUnit$__DAYS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__DAYS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__DAYS as $t_Ljava_time_temporal_ChronoUnit$__DAYS, $u_Ljava_time_temporal_ChronoUnit$__DAYS as $u_Ljava_time_temporal_ChronoUnit$__DAYS };
var $t_Ljava_time_temporal_ChronoUnit$__WEEKS = null;
function $u_Ljava_time_temporal_ChronoUnit$__WEEKS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__WEEKS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__WEEKS as $t_Ljava_time_temporal_ChronoUnit$__WEEKS, $u_Ljava_time_temporal_ChronoUnit$__WEEKS as $u_Ljava_time_temporal_ChronoUnit$__WEEKS };
var $t_Ljava_time_temporal_ChronoUnit$__MONTHS = null;
function $u_Ljava_time_temporal_ChronoUnit$__MONTHS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__MONTHS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__MONTHS as $t_Ljava_time_temporal_ChronoUnit$__MONTHS, $u_Ljava_time_temporal_ChronoUnit$__MONTHS as $u_Ljava_time_temporal_ChronoUnit$__MONTHS };
var $t_Ljava_time_temporal_ChronoUnit$__YEARS = null;
function $u_Ljava_time_temporal_ChronoUnit$__YEARS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__YEARS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__YEARS as $t_Ljava_time_temporal_ChronoUnit$__YEARS, $u_Ljava_time_temporal_ChronoUnit$__YEARS as $u_Ljava_time_temporal_ChronoUnit$__YEARS };
var $t_Ljava_time_temporal_ChronoUnit$__DECADES = null;
function $u_Ljava_time_temporal_ChronoUnit$__DECADES(x) {
  $t_Ljava_time_temporal_ChronoUnit$__DECADES = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__DECADES as $t_Ljava_time_temporal_ChronoUnit$__DECADES, $u_Ljava_time_temporal_ChronoUnit$__DECADES as $u_Ljava_time_temporal_ChronoUnit$__DECADES };
var $t_Ljava_time_temporal_ChronoUnit$__CENTURIES = null;
function $u_Ljava_time_temporal_ChronoUnit$__CENTURIES(x) {
  $t_Ljava_time_temporal_ChronoUnit$__CENTURIES = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__CENTURIES as $t_Ljava_time_temporal_ChronoUnit$__CENTURIES, $u_Ljava_time_temporal_ChronoUnit$__CENTURIES as $u_Ljava_time_temporal_ChronoUnit$__CENTURIES };
var $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA = null;
function $u_Ljava_time_temporal_ChronoUnit$__MILLENNIA(x) {
  $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA as $t_Ljava_time_temporal_ChronoUnit$__MILLENNIA, $u_Ljava_time_temporal_ChronoUnit$__MILLENNIA as $u_Ljava_time_temporal_ChronoUnit$__MILLENNIA };
var $t_Ljava_time_temporal_ChronoUnit$__ERAS = null;
function $u_Ljava_time_temporal_ChronoUnit$__ERAS(x) {
  $t_Ljava_time_temporal_ChronoUnit$__ERAS = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__ERAS as $t_Ljava_time_temporal_ChronoUnit$__ERAS, $u_Ljava_time_temporal_ChronoUnit$__ERAS as $u_Ljava_time_temporal_ChronoUnit$__ERAS };
var $t_Ljava_time_temporal_ChronoUnit$__FOREVER = null;
function $u_Ljava_time_temporal_ChronoUnit$__FOREVER(x) {
  $t_Ljava_time_temporal_ChronoUnit$__FOREVER = x
}
export { $t_Ljava_time_temporal_ChronoUnit$__FOREVER as $t_Ljava_time_temporal_ChronoUnit$__FOREVER, $u_Ljava_time_temporal_ChronoUnit$__FOREVER as $u_Ljava_time_temporal_ChronoUnit$__FOREVER };
//# sourceMappingURL=java.time.DayOfWeek.js.map
