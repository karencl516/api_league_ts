import List_of_league from '../assets/List_of_league.json';

export interface League {
  idLeague: string;
  idSoccerXML: string | null;
  idAPIfootball: string | null;
  strSport: string;
  strLeague: string;
  strLeagueAlternate: string;
  intDivision: string;
  idCup: string;
  strCurrentSeason: string;
  intFormedYear: string | null;
  dateFirstEvent: string;
  strGender: string;
  strCountry: string;
  strWebsite: string;
  strFacebook: string;
  strInstagram: string | null;
  strTwitter: string;
  strYoutube: string;
  strRSS: string;
  strDescriptionEN?: string | null;
  strDescriptionDE?: string | null;
  strDescriptionFR?: string | null;
  strDescriptionIT?: string | null;
  strDescriptionCN?: string | null;
  strDescriptionJP?: string | null;
  strDescriptionRU?: string | null;
  strDescriptionES?: string | null;
  strDescriptionPT?: string | null;
  strDescriptionSE?: string | null;
  strDescriptionNL?: string | null;
  strDescriptionHU?: string | null;
  strDescriptionNO?: string | null;
  strDescriptionPL?: string | null;
  strDescriptionIL?: string | null;
  strTvRights: string | null;
  strFanart1: string | null;
  strFanart2: string | null;
  strFanart3: string | null;
  strFanart4: string | null;
  strBanner: string | null;
  strBadge: string | null;
  strLogo: string | null;
  strPoster: string | null;
  strTrophy: string | null;
  strNaming: string;
  strComplete: string | null;
  strLocked: string;
}

export interface LeaguesByCountry {
  [country: string]: League[];
}


// Función simple que usa toda la data del JSON
export const getAllLeaguesData = (): LeaguesByCountry => {
  interface LeaguesByCountry {
      [country: string]: League[]; // Clave: país, Valor: array de ligas
    }
  return List_of_league as LeaguesByCountry;
}