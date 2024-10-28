import { ReactNode } from "react";

interface TestProps {
   children: ReactNode;
   className?: string;
}

export default function ({ children, className = "" }: TestProps) {
   return <h1 className={`font-ZenDots ${className}`}>{children}</h1>;
}
