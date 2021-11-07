import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
export declare type PadCircumfixArgument = String & Circumfix & {
    length: number;
};
export default function PadCircumfixObject({ value, length, circumfix }: PadCircumfixArgument): string;
