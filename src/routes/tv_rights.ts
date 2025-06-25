import express from "express";
import { getTvRightsByLeague } from "../controllers/league";


const routerTvrights = express.Router();
routerTvrights.get('/', getTvRightsByLeague);


export default routerTvrights