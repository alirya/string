import GreaterParameter from "@dikac/t-number/boolean/greater"
import Function from "@dikac/t-function/function"
import Value from "@dikac/t-value/value";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import Minimum from "@dikac/t-number/minimum/minimum";


export default function Minimum(
    object : Value<string> & Minimum & Inclusive & {converter : Function<[string], number>},
) : boolean {

    return GreaterParameter(object.converter(object.value), object.minimum, object.inclusive)
}
