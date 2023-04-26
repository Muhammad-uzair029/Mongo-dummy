export interface WorkWeek {
    title: string;
    trainings: { id: string; locked: boolean }[];
}
export interface TrainingProgramLevel {
    title: string;
    weeks: WorkWeek[];
}

export interface TrainingProgramModel {
    title: string;
    description: string;
    levels: TrainingProgramLevel[];
    isPremium: boolean;
}
