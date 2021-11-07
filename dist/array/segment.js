import AlphanumericParameter from "./segment-parameter";
import AlphanumericParameters from "./segment-parameters";
/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
var Alphanumeric;
(function (Alphanumeric) {
    Alphanumeric.Parameter = AlphanumericParameter;
    Alphanumeric.Parameters = AlphanumericParameters;
})(Alphanumeric || (Alphanumeric = {}));
export default Alphanumeric;
//# sourceMappingURL=segment.js.map