import { useState } from "react";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

export default function App() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        iconPath="/vite.svg"
        iconAlt="delete"
        placeholder="이메일을 입력해주세요"
        isError={error}
        errorMessage="이메일 형식이 올바르지 않습니다."
        onIconClick={() => setValue("")}
        id="email"
      />
      <div className="mb-4" />
      <button onClick={() => setError(!error)}>Toggle Error</button>
    </div>
  );
}
