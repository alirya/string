import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Empty;
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Object: typeof EmptyObject;
    type Argument = EmptyArgument;
}
export declare function EmptyParameter(value: string, valid: boolean, subject?: string): string;
export declare type EmptyArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function EmptyObject({ valid, value, subject, }: EmptyArgument): string;
