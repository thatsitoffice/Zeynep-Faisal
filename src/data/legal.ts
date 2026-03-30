/**
 * Impressum & Datenschutz — vor Livegang von Rechtsanwalt/Steuerberater prüfen und alle
 * Platzhalter in `LEGAL` sowie `SITE` (Telefon, Domain) vollständig ausfüllen.
 */
import { SITE } from "./site";

export const LEGAL = {
  /** Anzeigename wie im Betrieb / auf der Website */
  entityDisplayName: SITE.name,
  streetLine: "Cranger Str. 316",
  postalCode: "45891",
  city: SITE.city,
  country: "Deutschland",
  email: SITE.email,
  phoneDisplay: SITE.phoneDisplay,
  phoneTel: SITE.phoneTel,

  /**
   * Gesetzliche Vertretung (Inhaber:innen / Geschäftsführer:innen) — vollständige Namen eintragen.
   */
  representatives: "Zeynep [Nachname], Faisal [Nachname]",

  /** USt-IdNr. nach § 27a UStG, falls vorhanden (sonst leer lassen) */
  vatId: "" as string,

  /**
   * Zuständige Handwerkskammer / Berufsständische Zuordnung (Friseurhandwerk) — korrekte Kammer eintragen.
   */
  professionalChamber:
    "Mitglied der zuständigen Handwerkskammer (bitte Kammer und Mitgliedsnummer hier eintragen).",

  /** Unternehmensgegenstand in Kurzform */
  businessPurpose: "Friseur- und Barbierleistungen (Meisterbetrieb), einschließlich Beratung und Verkauf zugehöriger Produkte.",

  /**
   * Hosting gemäß Art. 13 / 28 DSGVO — Anbieter Ihrer Website ergänzen (z. B. Netlify, Vercel, IONOS, eigener Server).
   */
  hostingProviderName: "Cloudflare Germany GmbH",
  hostingProviderAddress:
    "c/o Design Offices München Atlas, Rosenheimer Straße 143C (8. OG), 81671 München, Deutschland",
  hostingPrivacyUrl: "https://cloudflare.com/privacy",

  /** Aufsichtsbehörde Datenschutz (NRW) — Standardformulierung */
  supervisoryAuthority:
    "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf, https://www.ldi.nrw.de",

  /** Link EU-Plattform OS (Pflichtnennung bei Verbraucherstreitigkeiten) */
  euOdrUrl: "https://ec.europa.eu/consumers/odr/",
} as const;
