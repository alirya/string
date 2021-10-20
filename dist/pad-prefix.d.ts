import String from "./string/string";
import Prefix from "./prefix/prefix";
/**
 * @see padStart
 */
export default function PadSuffix({ string, length, prefix }: String & Prefix & {
    length: number;
}): string;
