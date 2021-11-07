import TrimSuffixParameter, { TrimSuffixArgument } from "./trim-suffix-parameter";
declare namespace TrimSuffix {
    const Parameters: (string: string, suffix?: string | undefined) => string;
    const Parameter: typeof TrimSuffixParameter;
    type Argument = TrimSuffixArgument;
}
export default TrimSuffix;
