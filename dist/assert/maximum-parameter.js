import MaximumParameters from "./maximum-parameters";
export default function MaximumParameter(value, { maximum, inclusive, converter, error }) {
    //
    // let guard = (value : string, maximum : number, inclusive : boolean) => {
    //     return Guard(value, maximum, inclusive, converter);
    // }
    return MaximumParameters(value, maximum, inclusive, converter, error ? (value, maximum, inclusive) => error({ value, maximum, inclusive }) : error);
}
//# sourceMappingURL=maximum-parameter.js.map