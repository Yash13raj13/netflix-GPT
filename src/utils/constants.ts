export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAInDsLeGa7ZFGe_O9_fuObwCHCuS6LU56AUy273tLBCitX7GOf9LTVPInuAnbi9An7m55Lpq46azOd72p4z83o.png?r=bd8";
export const BG_IMG = "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// ADD THIS EXPORT
export const gptApiKey = import.meta.env.VITE_GEMINI_KEY;