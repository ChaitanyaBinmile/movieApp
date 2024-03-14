interface LanguageInterface {
    HOME: string;
    FAVOURITES: string;
    TRENDING: string;
    COMING_SOON: string;
    COMMUNITY: string;
    SOCIAL: string;
    SETTINGS: string;
    LOG_OUT: string;
  }
  

const lang: Record<string,LanguageInterface> = {
  'en' : {
    HOME: "Home",
    FAVOURITES: "Favourites",
    TRENDING: "Trending",
    COMING_SOON: "Coming soon",
    COMMUNITY: "Community",
    SOCIAL: "Social",
    SETTINGS: "Settings",
    LOG_OUT: "Log Out"
  },

  'hindi': {
    HOME: "होम",
    FAVOURITES: "पसंद",
    TRENDING: "ट्रेंडिंग",
    COMING_SOON: "जल्द आ रहै है",
    COMMUNITY: "समुदाय",
    SOCIAL: "समाज",
    SETTINGS: "सेटिंग",
    LOG_OUT: "लॉग आउट"




  },
};
export default lang;
