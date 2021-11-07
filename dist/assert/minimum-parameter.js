import MinimumParameters from "./minimum-parameters";
export default function MinimumParameter(value, { minimum, inclusive, converter, error }) {
    //
    // let guard = (value : string, minimum : number, inclusive : boolean) => {
    //     return Guard(value, minimum, inclusive, converter);
    // }
    return MinimumParameters(value, minimum, inclusive, converter, error ? (value, minimum, inclusive) => error({ value, minimum, inclusive }) : error);
}
//# sourceMappingURL=minimum-parameter.js.map