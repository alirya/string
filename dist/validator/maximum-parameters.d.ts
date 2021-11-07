import Validator from "@dikac/t-validator/validator";
import MaximumValidatable from "../validatable/maximum";
export declare type MaximumArgumentMessage<MessageType> = (value: string, valid: boolean, maximum: number, inclusive: boolean) => MessageType;
export default function MaximumParameters(maximum: number, inclusive: boolean): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;
export default function MaximumParameters<MessageType>(maximum: number, inclusive: boolean, message: MaximumArgumentMessage<MessageType>, converter?: (value: string) => number): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;
export default function MaximumParameters<MessageType>(maximum: number, inclusive: boolean, message: MaximumArgumentMessage<MessageType>, converter: (value: string) => number): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;
export default function MaximumParameters(maximum: number, inclusive: boolean, message: undefined, converter?: (value: string) => number): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;
