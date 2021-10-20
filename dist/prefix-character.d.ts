import String from "./string/string";
import Prefix from "./prefix/prefix";
/**
 * prepend {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function PrefixCharacter({ string, prefix }: String & Prefix): string;
