import clsx from "clsx";
import { FormHTMLAttributes } from "react";

type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export default function Form({ children, ...props }: FormProps) {
  const { className, ...rest } = props;

  return (
    <form className={clsx("mt-10 space-y-3", className)} {...rest}>
      {children}
    </form>
  );
}
