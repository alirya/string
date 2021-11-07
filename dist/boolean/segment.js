import SegmentParameter from "./segment-parameter";
import SegmentParameters from "./segment-parameters";
/**
 * check if {@param compare} is part of {@param root}
 *
 * @param root
 * @param compare
 *
 * @param separator
 * separator each segment
 *
 * @example
 * Segment('root', 'root.parent', '.') : true
 *
 * @example
 * Segment('root', 'root', '.') : true
 *
 * @example
 * Segment('root.parent', 'root', '.') : false
 */
var Segment;
(function (Segment) {
    Segment.Parameter = SegmentParameter;
    Segment.Parameters = SegmentParameters;
})(Segment || (Segment = {}));
export default Segment;
//# sourceMappingURL=segment.js.map