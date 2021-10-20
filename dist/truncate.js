import { truncate } from "lodash";
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
export default function Truncate({ string, length, omission = "...", separator }) {
    return truncate(string, {
        length: length,
        omission: omission,
        separator: separator
    });
}
//# sourceMappingURL=truncate.js.map