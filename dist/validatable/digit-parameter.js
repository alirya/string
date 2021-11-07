import DigitParameters from "./digit-parameters";
export default function DigitParameter({ value, // : ValueType,
message, // : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
 }) {
    return DigitParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=digit-parameter.js.map