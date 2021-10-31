import Separator from "./separator/separator";
import String from "./string/string";
declare namespace Truncate {
    const Parameter: typeof TruncateParameter;
    const Object: typeof TruncateObject;
    type Argument = TruncateArgument;
}
export declare function TruncateParameter(value: string, length: number, omission?: string, separator?: RegExp | string): string;
export declare type TruncateArgument = String & {
    length: number;
} & Partial<Separator> & {
    omission?: string;
};
/**
 * wrapper for {@see truncate}
 *
 * @param string
 * @param length
 * @param omission
 * @default "..."
 *
 * @param separator
 */
export declare function TruncateObject({ value, length, omission, separator }: TruncateArgument): string;
export default Truncate;
