import type React from "react";

interface ParagraphTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function ParagraphText({
    children,
    className,
}: ParagraphTextProps) {
    return <p className={`text-md md:text-xl ${className}`}>{children}</p>;
}
