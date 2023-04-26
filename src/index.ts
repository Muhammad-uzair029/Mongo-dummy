import {connectMongoDB}   from "./config/mongodb";
import morgan             from 'morgan';
import cors               from 'cors';
import * as studentRoutes from '../src/student/route/student.route'
import express            from "express";
import {BASE_PATH}        from "./utils/constant";

const app = express(); //Instantiate an express app, the main work horse of this server
const port = 5000;       //Save the port number where your server will be listening

connectMongoDB()
app.listen(port, () => {
    console.log(`auth Service app listening at http://localhost:${port}`);
})
app.use(express.json());
app.use(cors({origin: true}));
app.use(
    morgan(function (tokens, req: express.Request, res) {
        return [
            tokens.method(req, res),
            '-',
            tokens.url(req, res),
            '-',
            'Query:',
            JSON.stringify(req.query),
            '-',
            'Body',
            JSON.stringify(req.body),
            '-',
            'Params',
            JSON.stringify(req.params),
            '-',
            'Status:',
            tokens.status(req, res),
            '-',
            'Response Time:',
            tokens['response-time'](req, res),
            'ms',
        ].join(' ');
    })
);

app.use(BASE_PATH, studentRoutes.routes())

