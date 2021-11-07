import Truncate from "../../truncate";
export default function BlankParameters(valid, value, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('expect');
    }
    strings.push('blank string');
    if (!valid) {
        strings.push(`, actual "${Truncate.Parameters(value, 8)}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=blank-parameters.js.map