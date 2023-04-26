import mongoose, {Schema} from "mongoose";
import {CourseSchema}     from "../../course/modal/course.mongoos.schema";

export const InstructorSchema= new mongoose.Schema({
    name : { type: String, required: true},
    email: { type: String, required: true},
    courses: {type: [Schema.Types.ObjectId]},
    instructorCampusId:  { type: String, required: true},
    homeAddress:  { type: String, required: true},
    designation:  { type: String, required: true},
    students: {type: [Schema.Types.ObjectId]},
    createdAt: { type: Date, required: true }
})
