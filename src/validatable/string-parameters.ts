import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import StringGuard from "../boolean/string";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Simple from "@dikac/t-validator/message/function/simple-parameters";

export default function StringParameters<Argument, MessageType>(
    value : Argument,
    message : Simple<unknown, Argument, MessageType>
) : Return<Argument, string, Readonly<Instance<unknown, MessageType>>> {

    return <Return<Argument, string, Readonly<Instance<unknown, MessageType>>>>
        Callback(value, StringGuard, message);
}


