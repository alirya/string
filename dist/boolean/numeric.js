import Match from "./match";
/**
 * check if {@param source} is numeric
 *
 * @param source
 */
export default function Numeric(source) {
    return Match.Parameter(source, /^[-+]*\d*(\.\d*)?$/i);
}
//# sourceMappingURL=numeric.js.map