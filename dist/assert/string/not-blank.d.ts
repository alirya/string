import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default NotBlank;
declare namespace NotBlank {
    const Parameter: typeof NotBlankParameter;
    const Object: typeof NotBlankObject;
    type Argument = NotBlankArgument;
}
export declare function NotBlankParameter(value: string, valid: boolean, subject?: string): string;
export declare type NotBlankArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function NotBlankObject({ valid, value, subject, }: NotBlankArgument): string;
