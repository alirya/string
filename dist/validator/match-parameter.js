import MatchParameters from "./match-parameters";
export default function MatchParameter({ pattern, message }) {
    return MatchParameters(pattern, (value, valid, pattern) => message({ value, valid, pattern }));
}
//# sourceMappingURL=match-parameter.js.map