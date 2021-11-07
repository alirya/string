import Truncate from "../../truncate";
export default function EmptyParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('empty', 'string');
    if (!valid && value.length) {
        strings[3] = 'string,';
        strings.push('actual', `"${Truncate.Parameters(value, 8)}"`);
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=empty-parameters.js.map