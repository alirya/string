import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type StringArgument = Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export default String;
declare namespace String {
    const Parameter: typeof StringParameter;
    const Object: typeof StringObject;
    type Argument = StringArgument;
}
export declare function StringParameter(value: unknown, valid: boolean, subject?: string, conversion?: (value: unknown) => string): string;
export declare function StringObject({ valid, value, subject, conversion }: StringArgument): string;
