import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function FormInput(props: FormInputProps) {
  const { className, ...rest } = props;

  return (
    <input
      {...rest}
      className={clsx("border border-slate-200 w-full p-2", className)}
    />
  );
}
