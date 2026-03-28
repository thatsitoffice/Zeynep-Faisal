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
  /** Wie auf Planity / Google Business */
  addressLine: "Cranger Str. 316, 45891 Gelsenkirchen",
  openingHours: "Mo–Fr 8:30–18:00 · Sa 8:30–16:00 · So geschlossen",
  /** Für Preisseite & strukturierte Anzeige (Planity-Stand) */
  openingHoursLines: [
    { day: "Montag", hours: "08:30 – 18:00" },
    { day: "Dienstag", hours: "08:30 – 18:00" },
    { day: "Mittwoch", hours: "08:30 – 18:00" },
    { day: "Donnerstag", hours: "08:30 – 18:00" },
    { day: "Freitag", hours: "08:30 – 18:00" },
    { day: "Samstag", hours: "08:30 – 16:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ] as const,
  paymentMethods:
    "Bar, EC-Karte, Visa, Mastercard, Apple Pay, Google Pay — Zahlung vor Ort wie bei Planity angegeben.",
} as const;
