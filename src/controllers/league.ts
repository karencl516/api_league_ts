import { Request, Response, NextFunction } from 'express';
import { getListLeagueByCountryService } from '../service/league';
import { getListLeagueTvRigths } from '../service/league';
import { getListLeagueName } from '../service/league';



export const getLeaguesByCountry = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const country = req.query['country'] ?? '';
        const listLeagues = getListLeagueByCountryService(country);
        res.status(200).json({ listLeagues: listLeagues })
    } catch (e) {
        next(e);
        res.status(500).json({ error: "Country does not match" })
    }
}

export const getTvRightsByLeague = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const id_league = req.query['id_league'] ?? ''; 
        const listTvRights = getListLeagueTvRigths(id_league.toString())
        res.status(200).json({listTvRights: listTvRights})

    } catch (e){
        next(e);
        res.status(500).json({error:"error"})
    } 
}

export const getLeaguesByName = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const league = req.query['league'] ?? '';
        const listLeagueName = getListLeagueName(league.toString());
        res.status(200).json({listLeagueName: listLeagueName})
    } catch (e){
        next(e);
        res.status(500).json({error:"error"})
    }

}