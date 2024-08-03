type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface PrimaryButtonProps {
  theme: PrimaryButtonTheme;
  children?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";

const themeMap: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  children,
  onClick,
  theme,
  isDisabled,
}: PrimaryButtonProps) {
  return (
    <button
      className={`
        w-full h-[59px] 
        rounded-primary-button 
        ${themeMap[theme]} 
        ${disabledStyle}
      `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
