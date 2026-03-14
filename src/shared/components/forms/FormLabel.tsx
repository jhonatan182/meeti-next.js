import { LabelHTMLAttributes } from "react";

import clsx from "clsx";

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function FormLabel({ children, ...props }: FormLabelProps) {
  const { className, ...rest } = props;

  return (
    <label {...rest} className={clsx("block", className)}>
      {children}
    </label>
  );
}
