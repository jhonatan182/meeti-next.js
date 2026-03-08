import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export default function Heading({ children, level = 1, className }: Props) {
  const Tag: React.ElementType = `h${level}`;

  const sizeClasses: Record<number, string> = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  return (
    <Tag
      className={clsx(
        "uppercase font-black text-center",
        sizeClasses[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
