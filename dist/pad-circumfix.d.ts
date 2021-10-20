import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
/**
 * @see pad
 */
export default function PadCircumfix({ string, length, circumfix }: String & Circumfix & {
    length: number;
}): string;
