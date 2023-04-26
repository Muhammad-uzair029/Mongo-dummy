import mongoose from "mongoose";
import {StudentSchema} from "../../student/modal/student.mongoose.schema";

export const CourseSchema: any= new mongoose.Schema({
    courseId: { type: String, required: true},
    title : { type: String, required: true},
    description: { type: String, required: true},
    instructor: {type: [String]},
    students: { type: [StudentSchema]},
    createdAt: { type: Date, required: true }
})
const Courses= mongoose.model('courses', CourseSchema)
export { Courses}
