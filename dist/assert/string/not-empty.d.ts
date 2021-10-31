import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default NotEmpty;
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Object: typeof NotEmptyObject;
    type Argument = NotEmptyArgument;
}
export declare function NotEmptyParameter(value: string, valid: boolean, subject?: string): string;
export declare type NotEmptyArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function NotEmptyObject({ valid, value, subject, }: NotEmptyArgument): string;
