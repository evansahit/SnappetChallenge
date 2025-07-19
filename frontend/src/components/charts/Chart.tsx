import type {
    ExerciseCountForDomain,
    ExerciseCountForSubject,
    PerformanceForSubject,
    ProgressSumForColumn,
    StudentCountForSubject,
} from "../../types";
import {
    ResponsiveContainer,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
    Cell,
    Pie,
    PieChart,
} from "recharts";
import { getColorForIndex, type ChartType } from "./utils";
import ErrorText from "../ErrorText";
import LoadingSpinner from "../LoadingSpinner";
import H2 from "../H2";

interface ChartProps {
    title: string;
    chartType: ChartType;
    xAxisDataKey?: string;
    chartDataKey: string | string[];
    name: string | string[];
    nameKey?: string;
    isLoading: boolean;
    error: string;
    data:
        | ProgressSumForColumn[]
        | StudentCountForSubject[]
        | ExerciseCountForSubject[]
        | ExerciseCountForDomain[]
        | PerformanceForSubject[]
        | undefined;
    className?: string;
}

export default function ClassProgressPerSubjectChart({
    title,
    chartType,
    xAxisDataKey,
    chartDataKey,
    name,
    nameKey,
    isLoading,
    error,
    data,
    className,
}: ChartProps) {
    let chart;
    switch (chartType) {
        case "bar": {
            chart = (
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisDataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey={chartDataKey as string}
                        name={name as string}
                        fill="var(--color-primary)"
                    />
                </BarChart>
            );
            break;
        }
        case "multi-bar":
            chart = (
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisDataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey={chartDataKey[0]}
                        name={name[0]}
                        fill="green"
                    />
                    <Bar dataKey={chartDataKey[1]} name={name[1]} fill="red" />
                </BarChart>
            );
            break;
        case "pie": {
            chart = (
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={chartDataKey as string}
                        nameKey={nameKey}
                        name={name as string}
                        cx="50%"
                        cy="50%"
                        label
                    >
                        {data &&
                            data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={getColorForIndex(index)}
                                />
                            ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            );
            break;
        }
        default:
            chart = <div>Niet-ondersteund grafiektype.</div>;
    }

    return (
        <div
            className={`xl:flex-auto basis-1/4 xl:basis-1/3 p-(--container-padding-mobile) rounded-(--container-border-radius) bg-chart-bg border border-primary shadow-sm transition duration-300 hover:shadow-lg ${className}`}
        >
            <H2 className="text-center mb-[1rem] text-base! md:text-xl!">
                {title}
            </H2>

            <div className="relative w-full aspect-[4/3] max-h-[500px]">
                {(isLoading || error) && (
                    <div className="absolute inset-0 z-10 flex justify-center items-center backdrop-blur-sm">
                        {isLoading && <LoadingSpinner />}
                        {error && <ErrorText>{error}</ErrorText>}
                    </div>
                )}

                {data && (
                    <div className="w-full h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            {chart}
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
}
