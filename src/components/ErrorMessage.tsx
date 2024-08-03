interface ErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="text-xs text-error">{children}</p>;
}
