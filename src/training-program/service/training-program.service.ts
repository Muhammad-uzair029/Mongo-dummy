import {TrainingProgramRequest}                               from "../modal/request/training-program.request.model";
import {TrainingProgram}                                      from "../modal/training-program.mongoose.schema";
import {TrainingProgramLevel, TrainingProgramModel, WorkWeek} from "../modal/training-program.model";

export async function createTrainingProgram(trainingProgramRequest: TrainingProgramRequest): Promise<any> {
    try {
        
        const trainingProgramData: TrainingProgramModel = await mapTrainingProgramRequestToModel(trainingProgramRequest);
        
        const trainingProgram = await TrainingProgram.create(trainingProgramData);
        
        return trainingProgram;
    } catch (e: any) {
        console.error('[PlayerTrainingProgramService][updatePlayerTrainingProgram] unable to create Player Training Program', e);
        throw new Error(e.message);
    }
}

/**
 * Map function to convert request to Training program
 *
 * @param trainingProgramRequest training program request
 */
async function mapTrainingProgramRequestToModel(
    trainingProgramRequest: TrainingProgramRequest
): Promise<TrainingProgramModel> {
    try {
        const trainingProgramLevels: TrainingProgramLevel[] = [];
        
        for (let i = 0; i < trainingProgramRequest.levels.length; i++) {
            const weeks: WorkWeek[] = [];
            for (let j = 0; j < trainingProgramRequest.levels[i].weeks.length; j++) {
                const week: WorkWeek = {...trainingProgramRequest.levels[i].weeks[j]};
                weeks.push(week);
            }
            const level: TrainingProgramLevel = {...trainingProgramRequest.levels[i], weeks};
            trainingProgramLevels.push(level);
        }
        const trainingProgram = {
            title: trainingProgramRequest.title,
            description: trainingProgramRequest.description,
            levels: trainingProgramLevels,
            isPremium: trainingProgramRequest.isPremium,
            voided: false,
        };
        return trainingProgram;
    } catch (e: any) {
        console.error('[TrainingProgramService][mapTrainingProgramRequestToModel] unable to map training program', e);
        throw new Error(e.message);
    }
}

