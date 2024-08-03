interface TagButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
  isChecked: boolean;
}

export default function TagButton({ onClick, children, isChecked }: TagButtonProps) {
  const buttonStyle = isChecked ? "bg-white text-primary" : "bg-dark-opacity text-white";
  return (
    <button
      className={`
        rounded-tag-button 
        px-[10px] 
        border 
        border-white 
        h-[33px] 
        text-sm        
        font-medium
        ${buttonStyle}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
