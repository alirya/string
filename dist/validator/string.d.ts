import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
export declare function StringObject(): Validator<unknown, string, Readonly<Instance<unknown, string>>>;
export declare function StringObject<MessageType>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType): Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;
export declare function StringVoid(): Validator<unknown, string, Readonly<Instance<unknown, string>>>;
export declare function StringParameter(): Validator<unknown, string, Readonly<Instance<unknown, string>>>;
export declare function StringParameter<MessageType>(message: (value: unknown, valid: boolean) => MessageType): Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;
declare namespace String {
    const Parameter: typeof StringParameter;
    const Object: typeof StringObject;
    const Void: typeof StringVoid;
}
export default String;
