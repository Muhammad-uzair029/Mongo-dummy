import express from 'express';
import * as core from 'express-serve-static-core';
import * as studentController from "../controller/student.controller"
const router = express.Router();
export function routes(): core.Router{
    
    router.route('/api/v1/student').post(studentController.createStudent)
    router.route('/api/v1/student').post(studentController.getAllStudents)
    
    return router
}
