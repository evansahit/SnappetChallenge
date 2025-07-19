import type React from "react";

interface ChartGroupProps {
    children: React.ReactNode;
}

export default function ChartGroup({ children }: ChartGroupProps) {
    return (
        <div className="flex flex-col gap-[1rem] xl:flex-row xl:flex-wrap xl:justify-evenly min-[1425px]:justify-between! xl:gap-[1rem]">
            {children}
        </div>
    );
}
