import Suffix from "./suffix/suffix";
import String from "./string/string";
export declare type TrimSuffixArgument = String & Partial<Suffix>;
export default function TrimSuffixParameter({ value, suffix }: TrimSuffixArgument): string;
