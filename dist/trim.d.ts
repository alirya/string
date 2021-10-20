import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
/**
 * @see trim
 */
export default function Trim({ string, circumfix }: String & Partial<Circumfix>): string;
