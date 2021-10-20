import String from "./string/string";
import Suffix from "./suffix/suffix";
/**
 * @see padEnd
 */
export default function PadSuffix({ string, length, suffix }: String & Suffix & {
    length: number;
}): string;
