import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import FunctionStatic from '@alirya/validator/message/function/static-parameter';
import NotEmptyParameters, {NotEmptyReturn as NotEmptyParameterReturn} from './not-empty-parameters';

export type NotEmptyArgument<
    ValueType extends string,
    MessageType
    > = Message<FunctionStatic<'', ValueType, false, true, MessageType>> & Value<ValueType>;

export {NotEmptyParameterReturn};

export default function NotEmptyParameter<ValueType extends string, MessageType>({
      value,
      message
  } : NotEmptyArgument<ValueType, MessageType>
) : NotEmptyParameterReturn<ValueType, MessageType> {

    return NotEmptyParameters(value, (value, valid) => message({value, valid}));
}

