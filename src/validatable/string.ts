import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function String<MessageT, Argument>(
    value : Argument,
    message : (result:Readonly<Value<Argument> & Validatable>)=>MessageT
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>> {

    return <Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>> Callback(value, StringGuard, message);
}
