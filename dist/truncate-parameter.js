import TruncateParameters from "./truncate-parameters";
/**
 * wrapper for {@see truncate}
 *
 * @param string
 * @param length
 * @param omission
 * @default "..."
 *
 * @param separator
 */
export default function TruncateParameter({ value, length, omission = "...", separator }) {
    return TruncateParameters(value, length, omission, separator);
}
//# sourceMappingURL=truncate-parameter.js.map