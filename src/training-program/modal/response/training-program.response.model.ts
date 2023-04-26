export interface ITrainingProgram {
    _id: any;
    createdAt: Date;
    description: string;
    isPremium: boolean;
    levels: Level[];
    status: string;
    title: string;
}
interface Level {
    weeks: Week[];
    voided: boolean;
    title: string;
    _id: string;
}
interface Week {
    title: string;
    trainings: { id: string; locked: boolean }[];
    voided: boolean;
}
