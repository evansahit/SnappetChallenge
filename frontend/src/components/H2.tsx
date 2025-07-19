import type React from "react";

interface H2Props {
    children?: React.ReactNode;
    className?: string;
}

export default function H2({ children, className }: H2Props) {
    return (
        <h2 className={`text-xl font-bold m-0 p-0 md:text-2xl ${className}`}>
            {children}
        </h2>
    );
}
