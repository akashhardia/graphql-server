import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection()
  .then(() => {console.log('Connection has been established!')})
  .catch(error => console.log(error));
