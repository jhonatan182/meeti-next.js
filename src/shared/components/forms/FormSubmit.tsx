import { InputHTMLAttributes } from "react";

import clsx from "clsx";

type FormSubmitProps = InputHTMLAttributes<HTMLInputElement>;

export default function FormSubmit({ ...props }: FormSubmitProps) {
  const { className, ...rest } = props;

  return (
    <input
      type="submit"
      {...rest}
      className={clsx(
        "bg-pink-600 w-full p-2 uppercase font-black text-white cursor-pointer mt-5",
        className,
      )}
    />
  );
}
