import String from "./string/string";
import Prefix from "./prefix/prefix";
export default function TrimSuffix({ string, prefix }: String & Partial<Prefix>): string;
