import String from '../string/string';
import Separator from '../separator/separator';
import AlphanumericParameters from './segment-parameters';

export type AlphanumericArgument = String & Separator;

/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export default function AlphanumericParameter({
    string,
    separator
} : AlphanumericArgument) : string[] {

    return AlphanumericParameters(string, separator);
}

