import String from "./string/string";
import Suffix from "./suffix/suffix";
/**
 * append {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function SuffixCharacter({ string, suffix }: String & Suffix): string;
