/**
 * Zentrale Inhalte & URLs — hier pflegen, dann überall konsistent nutzen.
 * Buchungslink Planity (öffentlich).
 */
export const SITE = {
  name: "New Style by Zeynep & Faisal",
  tagline: "Meisterbetrieb",
  city: "Gelsenkirchen",
  region: "Ruhrgebiet",
  bookingUrl:
    "https://www.planity.com/de-DE/new-style-by-zeynep-faisal-meisterbetrieb-45891-gelsenkirchen",
  /** Echte Domain eintragen, wenn live — auch in astro.config.mjs `site` setzen */
  canonicalBase: "https://new-style-gelsenkirchen.example.com",
  email: "kontakt@new-style-gelsenkirchen.de",
  phoneDisplay: "0209 · … · …",
  phoneTel: "+49209…",
  addressLine: "Musterstraße 1, 45891 Gelsenkirchen",
  openingHours: "Di–Sa 9:00–18:00 · Mo nach Vereinbarung",
} as const;
