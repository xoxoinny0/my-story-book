import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  iconAlt: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  errorMessage: string;
  isError: boolean;
}

export default function DefaultTextField({
  id,
  value,
  errorMessage,
  iconPath,
  onChange,
  onIconClick,
  iconAlt,
  placeholder,
  isError,
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borlderColor = isFocused ? "border-secondary" : value ? "border-primary" : "border-mono300";
  return (
    <div className="text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borlderColor}`}
      >
        <input
          id={id}
          type="text"
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
