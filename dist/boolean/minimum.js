import MinimumParameter from "./minimum-parameter";
import MinimumParameters from "./minimum-parameters";
/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
var Minimum;
(function (Minimum) {
    Minimum.Parameter = MinimumParameter;
    Minimum.Parameters = MinimumParameters;
})(Minimum || (Minimum = {}));
export default Minimum;
//# sourceMappingURL=minimum.js.map