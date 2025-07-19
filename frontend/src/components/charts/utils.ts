export const DEFAULT_CHART_COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7c7c",
    "#8dd1e1",
    "#d084d0",
    "#ffb347",
    "#87ceeb",
    "#dda0dd",
    "#98fb98",
    "#f0e68c",
    "#ff6347",
    "#40e0d0",
    "#ee82ee",
    "#90ee90",
];

export const getColorForIndex = (index: number) => {
    return DEFAULT_CHART_COLORS[index % DEFAULT_CHART_COLORS.length];
};

export type ChartType = "bar" | "multi-bar" | "pie";
