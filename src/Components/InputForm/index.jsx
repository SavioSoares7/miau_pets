import { InputContainer } from "./style";

export function InputForm({ placeholder, type }) {
  return <InputContainer type={type} placeholder={placeholder} required />;
}
