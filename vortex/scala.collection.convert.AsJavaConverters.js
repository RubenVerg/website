'use strict';
import * as $j_java$002elang$002eObject from "./java.lang.Object.js";
import * as $j_scala$002ecollection$002econvert$002eAsScalaConverters from "./scala.collection.convert.AsScalaConverters.js";
import * as $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024SetWrapper from "./scala.collection.convert.JavaCollectionWrappers$SetWrapper.js";
function $f_sc_convert_AsJavaConverters__asJava__sc_Set__ju_Set($thiz, s) {
  if ((s === null)) {
    return null
  } else if ((s instanceof $j_scala$002ecollection$002econvert$002eAsScalaConverters.$c_sc_convert_JavaCollectionWrappers$JSetWrapper)) {
    var x3 = s;
    var wrapped = x3.sc_convert_JavaCollectionWrappers$JSetWrapper__f_underlying;
    return wrapped
  } else {
    return new $j_scala$002ecollection$002econvert$002eJavaCollectionWrappers$0024SetWrapper.$c_sc_convert_JavaCollectionWrappers$SetWrapper(s)
  }
}
export { $f_sc_convert_AsJavaConverters__asJava__sc_Set__ju_Set as $f_sc_convert_AsJavaConverters__asJava__sc_Set__ju_Set };
//# sourceMappingURL=scala.collection.convert.AsJavaConverters.js.map
