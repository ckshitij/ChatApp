import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import config = require('./config.json');

const app: express.Application = express();
const port: Number = config.serverAttr.serverPort;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true} ));

app.get('/', (request:Request, response:Response) => {
    response.send('API is working');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});