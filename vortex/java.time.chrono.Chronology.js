'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
function $f_Ljava_time_chrono_Chronology__equals__O__Z($thiz, obj) {
  if ($is_Ljava_time_chrono_Chronology(obj)) {
    var other = obj;
    return (($thiz === other) || ($j_java$002elang$002eObject.$f_T__compareTo__T__I("ISO", "ISO") === 0))
  } else {
    return false
  }
}
export { $f_Ljava_time_chrono_Chronology__equals__O__Z as $f_Ljava_time_chrono_Chronology__equals__O__Z };
function $f_Ljava_time_chrono_Chronology__hashCode__I($thiz) {
  var this$1 = $j_java$002elang$002eObject.$objectGetClass($thiz);
  return ($j_java$002elang$002eObject.$systemIdentityHashCode(this$1) ^ $j_java$002elang$002eObject.$f_T__hashCode__I("ISO"))
}
export { $f_Ljava_time_chrono_Chronology__hashCode__I as $f_Ljava_time_chrono_Chronology__hashCode__I };
function $is_Ljava_time_chrono_Chronology(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Ljava_time_chrono_Chronology)))
}
export { $is_Ljava_time_chrono_Chronology as $is_Ljava_time_chrono_Chronology };
function $isArrayOf_Ljava_time_chrono_Chronology(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_time_chrono_Chronology)))
}
export { $isArrayOf_Ljava_time_chrono_Chronology as $isArrayOf_Ljava_time_chrono_Chronology };
//# sourceMappingURL=java.time.chrono.Chronology.js.map
