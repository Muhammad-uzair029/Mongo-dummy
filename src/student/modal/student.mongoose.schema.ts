import mongoose, {Schema} from "mongoose";
import {CourseSchema}     from "../../course/modal/course.mongoos.schema";

export const StudentSchema= new mongoose.Schema({
    name : { type: String, required: true},
    email: { type: String, required: true},
    courses: {type: [Schema.Types.ObjectId]},
    studentCampusId:  { type: String, required: true},
    homeAddress:  { type: String, required: true},
    designation:  { type: String, required: true},
    GradeId:  { type: String, required: true},
    isActive: {type: Boolean, required:true},
    createdAt: { type: Date, required: true }
})

StudentSchema.index({ studentCampusId: 1 });

const Students = mongoose.model('students', StudentSchema);
export { Students };
