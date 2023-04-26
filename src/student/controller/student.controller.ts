import express, {Request} from "express";
import * as studentService from "../service/student.service"

export async function createStudent(req: Request, res: express.Response): Promise<express.Response> {
    try {
        const student= req.body.student;
        return await studentService.createStudent(student, res)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}
export async function getAllStudents(req: Request, res: express.Response): Promise<express.Response> {
    try {
        const student= req.body.student;
        return await studentService.getAllStudents(student, res)
    } catch (e: any) {
        return res.status(500).json({message: e.message})
    }
}
