/* =====================================================================
   SETTINGS FOR THE COUNTRY OFFICE ANNUAL REQUIREMENTS FORM
   Fill in the values between the quotes " ". Do not delete quotes or commas.
   While LAYER_URL is empty, the form runs in demo mode.
   ===================================================================== */
window.COAR_CONFIG = {

  // 1. Your organisation's ArcGIS Online address (from your browser's address bar when signed in)
  PORTAL_URL: "https://yourorg.maps.arcgis.com",

  // 2. Client ID of the sign-in app you registered in ArcGIS Online (Phase 4)
  CLIENT_ID: "",

  // 3. Address of the main survey layer, ending in /FeatureServer/0 (Phase 2)
  LAYER_URL: "",

  // 4. Address of each country office's view, ending in /FeatureServer/0 (Phase 3)
  //    Leave a country empty ("") until its view exists.
  COUNTRY_LAYER_URLS: {
    "afghanistan":             "",   // Afghanistan
    "angola":                  "",   // Angola
    "bosnia_and_herzegovina":  "",   // Bosnia and Herzegovina
    "cambodia":                "",   // Cambodia
    "colombia":                "",   // Colombia
    "ecuador":                 "",   // Ecuador
    "ethiopia":                "",   // Ethiopia
    "iraq":                    "",   // Iraq
    "kosovo":                  "",   // Kosovo
    "lao_pdr":                 "",   // Lao PDR
    "lebanon":                 "",   // Lebanon
    "mozambique":              "",   // Mozambique
    "myanmar":                 "",   // Myanmar
    "palestine":               "",   // Palestine
    "peru":                    "",   // Peru
    "rwanda":                  "",   // Rwanda
    "south_sudan":             "",   // South Sudan
    "sudan":                   "",   // Sudan
    "syria":                   "",   // Syria
    "thailand":                "",   // Thailand
    "ukraine":                 "",   // Ukraine
    "vietnam":                 "",   // Vietnam
    "yemen":                   "",   // Yemen
    "zimbabwe":                "",   // Zimbabwe
  },

  // 5. The assessment year the form shows first
  DEFAULT_YEAR: "2026",

  // 6. Roles allowed to submit to HQ (leave as it is)
  SUBMIT_ROLES: ["country_director"]
};
