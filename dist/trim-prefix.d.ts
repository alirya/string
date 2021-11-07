import TrimPrefixParameter, { TrimPrefixArgument } from "./trim-prefix-parameter";
declare namespace TrimPrefix {
    const Parameters: (string: string, suffix?: string | undefined) => string;
    const Parameter: typeof TrimPrefixParameter;
    type Argument = TrimPrefixArgument;
}
export default TrimPrefix;
