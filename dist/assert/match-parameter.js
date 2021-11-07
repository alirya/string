import MatchParameters from "./match-parameters";
export default function MatchParameter(value, 
// pattern : RegExp,
// error : (value:string, pattern:RegExp)=>Error = MatchError,
{ pattern, error, }) {
    MatchParameters(value, pattern, error ? (value, pattern) => error({ value, pattern }) : error);
}
//# sourceMappingURL=match-parameter.js.map