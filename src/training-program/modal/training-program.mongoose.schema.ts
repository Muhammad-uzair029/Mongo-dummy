import mongoose, {Schema} from "mongoose";
import {StudentTrainingProgramStatus} from "./training-program-status.enum.model";

const studentTrainingSchema = new mongoose.Schema({
    status: { type: String, required: true, enum: StudentTrainingProgramStatus },
    locked: { type: Boolean },
});

const studentWorkWeekSchema = new mongoose.Schema({
    workWeekId: { type: String, required: true },
    status: { type: String, required: true, enum: StudentTrainingProgramStatus },
    trainings: { type: [studentTrainingSchema] },
});

const studentTrainingProgramLevelSchema = new mongoose.Schema({
    trainingProgramLevelId: { type: String, required: true },
    status: { type: String, required: true, enum: StudentTrainingProgramStatus },
    weeks: { type: [studentWorkWeekSchema] },
});

    const TrainingProgramSchema = new mongoose.Schema(
    {
        title:  { type: String, required: true},
        description:  { type: String, required: true},
        userId: { type: String, required: true },
        trainingProgramId: { type: String, required: true },
        locked: { type: Boolean, required: true },
        isPremium: { type: Boolean, required: true },
        levels: { type: [studentTrainingProgramLevelSchema], required: true },
        status: { type: String, required: true, enum: StudentTrainingProgramStatus },
        createdAt: { type: Date, required: true },
    },
);

TrainingProgramSchema.index({ title: 1 });

const TrainingProgram = mongoose.model('trainings', TrainingProgramSchema);
export { TrainingProgram };
