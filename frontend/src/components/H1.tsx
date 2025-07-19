import type React from "react";

interface H1Props {
    children?: React.ReactNode;
    className?: string;
}

export default function H1({ children, className }: H1Props) {
    return (
        <h1 className={`text-3xl font-bold md:text-4xl m-0 p-0 ${className}`}>
            {children}
        </h1>
    );
}
