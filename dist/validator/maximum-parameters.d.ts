import Validator from "@dikac/t-validator/simple";
import MaximumValidatable from "../validatable/maximum";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export declare type MaximumArgumentMessage<MessageType> = Dynamic.Parameters<string, MessageType, [maximum: number, inclusive: boolean, converter: (string: string) => number]>;
export default function MaximumParameters(maximum: number, inclusive: boolean): Validator<string, string, MaximumValidatable.Type<string, string>>;
export default function MaximumParameters<MessageType>(maximum: number, inclusive: boolean, message: MaximumArgumentMessage<MessageType>, converter?: (value: string) => number): Validator<string, string, MaximumValidatable.Type<string, MessageType>>;
export default function MaximumParameters<MessageType>(maximum: number, inclusive: boolean, message: MaximumArgumentMessage<MessageType>, converter: (value: string) => number): Validator<string, string, MaximumValidatable.Type<string, MessageType>>;
export default function MaximumParameters(maximum: number, inclusive: boolean, message: undefined, converter?: (value: string) => number): Validator<string, string, MaximumValidatable.Type<string, string>>;
