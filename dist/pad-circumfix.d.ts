import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
declare namespace PadCircumfix {
    const Parameter: typeof PadCircumfixParameter;
    const Object: typeof PadCircumfixObject;
    type Argument = PadCircumfixArgument;
}
/**
 * @see pad
 */
export declare function PadCircumfixParameter(value: string, length: number, circumfix: string): string;
export declare type PadCircumfixArgument = String & Circumfix & {
    length: number;
};
export declare function PadCircumfixObject({ value, length, circumfix }: PadCircumfixArgument): string;
export default PadCircumfix;
