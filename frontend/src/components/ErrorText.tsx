import type React from "react";

interface ErrorTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function ErrorText({ children, className }: ErrorTextProps) {
    return (
        <div
            className={`p-(--container-padding-mobile) bg-danger-bg w-fit rounded-(--container-border-radius) ${className}`}
        >
            <p className="text-white font-bold">{children}</p>
        </div>
    );
}
