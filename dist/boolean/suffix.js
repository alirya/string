import { endsWith } from "lodash";
/**
 * @see startsWith
 * @param string
 * @param suffix
 */
export default function Suffix({ value, suffix }) {
    return endsWith(value, suffix);
}
//# sourceMappingURL=suffix.js.map