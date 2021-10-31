var RemovePrefixCharacter;
(function (RemovePrefixCharacter) {
    RemovePrefixCharacter.Parameter = RemovePrefixCharacterParameter;
    RemovePrefixCharacter.Object = RemovePrefixCharacterObject;
})(RemovePrefixCharacter || (RemovePrefixCharacter = {}));
/**
 * remove {@param prefix} at the start of {@param value}
 */
export function RemovePrefixCharacterParameter(value, prefix) {
    if (!value) {
        return value;
    }
    if (!prefix) {
        return value;
    }
    prefix = prefix[0];
    if (value.slice(0, prefix.length) === prefix) {
        return value.slice(prefix.length);
    }
    return value;
}
export function RemovePrefixCharacterObject({ value, prefix }) {
    return RemovePrefixCharacterParameter(value, prefix);
}
export default RemovePrefixCharacter;
//# sourceMappingURL=remove-prefix.js.map