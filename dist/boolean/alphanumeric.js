import Match from "./match";
export default function Alphanumeric(source) {
    return Match.Parameter(source, /^[0-9a-z]*$/i);
}
//# sourceMappingURL=alphanumeric.js.map