import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Blank;
declare namespace Blank {
    const Parameter: typeof BlankParameter;
    const Object: typeof BlankObject;
    type Argument = BlankArgument;
}
export declare function BlankParameter(valid: boolean, value: string, subject?: string): string;
export declare type BlankArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function BlankObject({ valid, value, subject, }: BlankArgument): string;
