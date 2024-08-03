export interface LabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
