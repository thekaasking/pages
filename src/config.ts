// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Razo van Berkel";
export const SITE_DESCRIPTION =
  "Nog net niks...";
export const TWITTER_HANDLE = "";
export const MY_NAME = "Razo van Berkel";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
