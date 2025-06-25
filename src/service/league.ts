import { getAllLeaguesData } from '../models/league';

interface LeaguesByCountryAnswer {
    country: string,
    leagues: LeagueInfo []
}

interface LeagueInfo {
    name? : string,
    id? : string
}

interface allTvRight {
    league: string,
    tvRights: string[]
}

interface tvRightCountry{
    [country: string]: allTvRight | null
}

interface namesLeagues {
    league: string[]
}

interface nameLeaguesCountry {
    [country: string]:  namesLeagues | null
}

const getListLeagueByCountryService = (country: any) => {
    const leagues_by_country: LeaguesByCountryAnswer = {
        country : country ,
        leagues : []
    }
    const data = getAllLeaguesData();
    for (const league of data[country]){
        const info_league : LeagueInfo ={
            name : league["strLeague"],
            id : league["idLeague"]
        }
        leagues_by_country.leagues.push(info_league)
    }    
    // console.log("data",data[country]);
    return leagues_by_country;
}

const getListLeagueTvRigths = (id_league: string) => {
    const data = getAllLeaguesData()
    const countryKeys: string[] = Object.keys(data)
    let objTvRigthsLeague: tvRightCountry = {};
    for (const country of countryKeys){
        let objTvRights : allTvRight| null = null;
        for (const league of data[country]){
            if(league['idLeague'] === id_league ){
                const splitTvrights: string[] = league['strTvRights'] ? league['strTvRights'].split('\r\n') : [];
                objTvRights ={
                    league: league['strLeague'],
                    tvRights: splitTvrights
                }
                objTvRigthsLeague[country] = objTvRights;
            }   
        }
    }
    return objTvRigthsLeague
    
}

const cleanText = (text: string) => {
    return text.toLowerCase().replace(/\s/g, "")// regex
}

const getListLeagueName = (league: string) =>{
    const data = getAllLeaguesData()
    const countryKeys: string[] = Object.keys(data)
    let objLeagueNameCountry: nameLeaguesCountry = {}
    for (const country of countryKeys){
        let objLeagueName: namesLeagues = {
            league :[]
        }
        for (const leagues of data[country]){
            let cleanLeague: string = cleanText(leagues['strLeague'])
            let clenaLeagueParam: string = cleanText(league)
            if (cleanLeague.includes(clenaLeagueParam)){
                objLeagueName.league.push(leagues['strLeague'])
                
            }
        }
        objLeagueNameCountry[country] = objLeagueName
    }
    return objLeagueNameCountry
}

export {
    getListLeagueByCountryService,
    getListLeagueTvRigths,
    getListLeagueName
}