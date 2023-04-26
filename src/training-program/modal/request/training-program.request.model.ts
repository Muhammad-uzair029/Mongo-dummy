
export interface TrainingProgramRequest {
    title: string;
    description: string;
    levels: TrainingProgramLevelRequest[];
    video: string;
    isPremium: boolean;
}
export interface TrainingProgramLevelRequest {
    title: string;
    weeks: WorkWeekRequest[];
}
export interface WorkWeekRequest {
    title: string;
    trainings: { id: string; locked: boolean }[];
}
