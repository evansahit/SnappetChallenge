import H1 from "../components/H1";
import Chart from "../components/charts/Chart";
import useClassProgressPerSubject from "../hooks/useClassProgressPerSubject";
import useClassProgressPerLearningObjective from "../hooks/useClassProgressPerLearningObjective";
import useProgressPerStudent from "../hooks/useProgressPerStudent";
import useStudentCountPerSubject from "../hooks/useStudentCountPerSubject";
import useExerciseCountPerSubject from "../hooks/useExerciseCountPerSubject";
import useExerciseCountPerDomain from "../hooks/useExerciseCountPerDomain";
import ParagraphText from "../components/ParagraphText";
import H2 from "../components/H2";
import ChartGroup from "../components/charts/ChartGroup";
import usePerformancePerSubject from "../hooks/usePerformancePerSubject";

export default function DashboardPage() {
    const classProgressPerSubject = useClassProgressPerSubject();
    const classProgressPerLearningObjective =
        useClassProgressPerLearningObjective();
    const progressPerStudent = useProgressPerStudent();
    const studentCountPerSubject = useStudentCountPerSubject();
    const exerciseCountPerSubject = useExerciseCountPerSubject();
    const exerciseCountPerDomain = useExerciseCountPerDomain();
    const performancePerSubject = usePerformancePerSubject();

    return (
        <div>
            <H1>Dashboard</H1>
            <ParagraphText>
                Hier zie je verschillende visualizaties die laten zien hoe jouw
                klas er vandaag voor staat.
            </ParagraphText>
            <br />
            <ParagraphText>
                De volgende visualizaties zijn voor vandaag:{" "}
                <span className="text-primary font-bold">24-03-2015</span> tot{" "}
                <span className="text-primary font-bold">11:30</span>.
            </ParagraphText>

            <div className="my-[1rem] w-full h-[1px] border border-primary opacity-25"></div>

            <div className="flex flex-col gap-[1rem]">
                <div>
                    <H2>Klassikale voortgang</H2>
                    <ParagraphText>
                        Hier is voortgang gemeten door verschillende
                        psychometrische modellen die rekening houden met de
                        moeilijkheid van de opgave, of de opgave al eerder door
                        deze leerling is gemaakt, etc.
                    </ParagraphText>
                </div>

                <ChartGroup>
                    <Chart
                        title="Klassikale voortgang"
                        chartType={"bar"}
                        xAxisDataKey="column"
                        chartDataKey="progressSum"
                        name="Voortgang"
                        {...classProgressPerSubject}
                    />
                    <Chart
                        title="Klassikale voortgang per leerdoel"
                        chartType={"bar"}
                        xAxisDataKey="column"
                        chartDataKey="progressSum"
                        name="Voortgang"
                        {...classProgressPerLearningObjective}
                    />
                    <Chart
                        title="Voortgang per student"
                        chartType={"bar"}
                        xAxisDataKey="column"
                        chartDataKey="progressSum"
                        name="Voortgang"
                        {...progressPerStudent}
                    />
                </ChartGroup>

                <div>
                    <H2>Activiteiten per vak</H2>
                    <ParagraphText>
                        Hier worden verschillende inzichten per vak getoond,
                        zoals hoeveel oefeningen er gemaakt zijn per vak.
                    </ParagraphText>
                </div>
                <ChartGroup>
                    <Chart
                        title="Aantal studenten gewerkt aan elk vak"
                        chartType={"bar"}
                        xAxisDataKey="subject"
                        chartDataKey="studentCount"
                        name="Aantal studenten"
                        {...studentCountPerSubject}
                    />
                    <Chart
                        title="Aantal oefeningen gemaakt per vak"
                        chartType={"pie"}
                        chartDataKey="exerciseCount"
                        nameKey="subject"
                        name="Aantal oefeningen"
                        {...exerciseCountPerSubject}
                    />
                    <Chart
                        title="Aantal oefeningen gemaakt per domein"
                        chartType={"pie"}
                        chartDataKey="exerciseCount"
                        nameKey="domain"
                        name="Aantal oefeningen"
                        {...exerciseCountPerDomain}
                    />
                    <Chart
                        title="Prestaties per vak"
                        chartType={"multi-bar"}
                        xAxisDataKey="subject"
                        chartDataKey={["correctCount", "errorCount"]}
                        name={["Aantal goed", "Aantal fout"]}
                        {...performancePerSubject}
                    />
                </ChartGroup>
            </div>
        </div>
    );
}
