import express from "express";
import { getLeaguesByName } from "../controllers/league";

const routerLeagueName = express.Router();
routerLeagueName.get('/', getLeaguesByName);

export default routerLeagueName


