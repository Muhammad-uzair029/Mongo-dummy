import express           from "express";
import {createStudent}   from "../modal/request/student.request.model";
import {Students}        from "../modal/student.mongoose.schema";
import {studentResponse} from "../modal/response/student.response.model";

export async function createStudent(student: createStudent, res: express.Response): Promise<express.Response> {
    try {
        const newStudent = {
            name: student.name,
            email: student.email,
            studentId: student.studentId,
            homeAddress: student.homeAddress,
            designation: student.designation,
            GredeId: student.GredeId
        }
        
        const createdStudent = await Students.create({newStudent})
        return res.status(200).json(createdStudent)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function getAllStudents(student: createStudent, res: express.Response): Promise<express.Response> {
    try {
        const students: studentResponse[] = await Students.find({}).populate({
            path: 'courses.id',
        })
        return res.status(200).json(students)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function updateStudent(studentId: string, updatedName: string, res: express.Response): Promise<express.Response> {
    try {
        const student = await Students.updateOne({_id: studentId}, {$set: {name: updatedName}})
        return res.status(200).json(student)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}
export async function changeStudentStatus(studentId: string, updatedStatus: boolean, res: express.Response): Promise<express.Response> {
    try {
        const student = await Students.updateOne({_id: studentId}, {$set: {isActive: updatedStatus}})
        return res.status(200).json(student)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}

export async function deleteAluminiStudents(studentId: string, updatedStatus: boolean, res: express.Response): Promise<express.Response> {
    try {
        const student = await Students.updateOne({_id: studentId}, {$set: {isActive: updatedStatus}})
        return res.status(200).json(student)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}
