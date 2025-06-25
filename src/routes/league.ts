import express from "express";
import { getLeaguesByCountry } from "../controllers/league";

const routerLeague = express.Router();
routerLeague.get('/', getLeaguesByCountry);

export default routerLeague


