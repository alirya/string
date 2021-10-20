import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type Argument = Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export default function String({ valid, value, subject, conversion }: Argument): string;
