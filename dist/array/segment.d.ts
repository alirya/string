import String from "../string/string";
import Separator from "../separator/separator";
/**
 * split {@param string} to its each segment marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Segment('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export default function Segment({ value, separator }: String & Separator): string[];
