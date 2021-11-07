import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type StringArgument = Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export default function StringParameter({ valid, value, subject, conversion }: StringArgument): string;
