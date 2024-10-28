import { ReactNode } from "react";

interface TestProps {
   children: ReactNode;
   className?: string;
}

export default function ({ children, className = "" }: TestProps) {
   return <h1 className={`font-Nunito ${className}`}>{children}</h1>;
}
