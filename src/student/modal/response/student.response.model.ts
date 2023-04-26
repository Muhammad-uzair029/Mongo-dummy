import {CourseResponse} from "../../../course/modal/response/course.response";

export  interface studentResponse{
    name :string,
    email: string,
    courses: CourseResponse,
    studentId: string,
    homeAddress: string,
    designation: string,
    GredeId: string
    createdAt: Date;
}
