import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
export declare function NumericObject(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export declare function NumericObject<MessageType>(message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
export declare function NumericVoid<MessageType>(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export declare function NumericParameter(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export declare function NumericParameter<MessageType>(message: (value: string, valid: boolean) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
