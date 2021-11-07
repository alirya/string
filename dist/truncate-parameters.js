import { truncate } from "lodash";
export default function TruncateParameters(value, length, omission = '...', separator) {
    return truncate(value, {
        length: length,
        omission: omission,
        separator: separator
    });
}
//# sourceMappingURL=truncate-parameters.js.map