import type { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInput = ({
  id,
  label,
  name,
  placeholder,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  error: string;
}) => (
  <div className="mb-4 flex w-full flex-col space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} name={name} placeholder={placeholder} type={type} className={error ? "border-red-500" : ""} />
    {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
  </div>
);

export { FormInput };
