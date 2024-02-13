import { InputElement } from "./Input.style";

interface InputProps {
    type: string;
    placeholder: string;
    id: string;
}

function Input({ type, placeholder, id }: InputProps) {
    return (
        <InputElement
            type={type}
            placeholder={placeholder}
            id={id}
        />
    );
}

export default Input;
