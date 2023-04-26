import {studentResponse} from "../../../student/modal/response/student.response.model";
import {Schema}          from "mongoose";

export interface CourseResponse{
    courseId: string,
    title : string,
    description: string,
    instructor: string[],
    students: {type: [Schema.Types.ObjectId]},
    createdAt: Date
}
