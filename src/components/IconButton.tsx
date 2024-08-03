interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({ iconPath, onClick, alt }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} width={18} height={18} />
    </button>
  );
}
