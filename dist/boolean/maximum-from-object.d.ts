import Function from "@dikac/t-function/function";
import Value from "@dikac/t-value/value";
import Maximum from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function MaximumFromObject(object: Value<string> & Maximum & Inclusive & {
    converter: Function<[string], number>;
}): boolean;
