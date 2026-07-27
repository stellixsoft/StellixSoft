import {
  CALENDLY_EVENT_SLUG,
  CALENDLY_URL,
  STELLIX_SOFT_LLC_PHONE_DISPLAY,
  STELLIX_SOFT_LLC_PHONE_TEL,
} from "@/src/lib/constants";
import { LEGAL_CONTACT_EMAIL } from "@/src/lib/legal";
import { absoluteUrl } from "@/src/lib/site-url";

const COMPANY_NAME = "Stellix Soft" as const;
const COMPANY_LINKEDIN_URL = "https://www.linkedin.com/company/stellixsoft" as const;
const HANNAN_CARD_SLUG = "hannan" as const;
const HANNAN_HEADSHOT_FILENAME = "hannan-ahmad-khan-headshot.jpg" as const;
const HANNAN_PROFILE_FILENAME = "hannan-company-profile.pdf" as const;

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export type BusinessCardId = "hannan";

export type BusinessCard = {
  id: BusinessCardId;
  slug: string;
  name: string;
  structuredName: {
    familyName: string;
    givenName: string;
    additionalName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
  };
  title: string;
  company: string;
  positioningStatement: string;
  photo: {
    publicPath: string;
    alt: string;
    fallbackInitials: string;
    hasRealHeadshot: boolean;
    todo: string | null;
    vcardPhotoSourcePath: string | null;
  };
  contact: {
    phoneTel: string;
    phoneDisplay: string;
    whatsappTel: string;
    whatsappDigits: string;
    whatsappPrefill: string;
    email: string;
    personalLinkedInUrl: string;
    websiteUrl: string;
    websiteDisplay: string;
  };
  meeting: {
    url: string;
    eventSlug: string;
  };
  assets: {
    companyProfilePublicPath: string;
    companyProfileFilename: string;
    isPlaceholderProfile: boolean;
  };
  urls: {
    pagePath: string;
    pageUrl: string;
    qrPath: string;
    qrUrl: string;
    vcardPath: string;
    vcardUrl: string;
    ogImagePath: string;
    ogImageUrl: string;
  };
  companyLinkedInUrl: string;
  needs: {
    realHeadshot: boolean;
    personalLinkedIn: boolean;
    directMobile: boolean;
    personalEmail: boolean;
    companyProfilePdf: boolean;
  };
};

export const BUSINESS_CARDS: Record<BusinessCardId, BusinessCard> = {
  hannan: {
    id: "hannan",
    slug: HANNAN_CARD_SLUG,
    name: "Hannan Ahmad Khan",
    structuredName: {
      familyName: "Khan",
      givenName: "Hannan",
      additionalName: "Ahmad",
    },
    title: "Co-Founder & CEO",
    company: COMPANY_NAME,
    positioningStatement:
      "Helping enterprise teams modernize complex software, ship faster, and reduce delivery risk.",
    photo: {
      publicPath: `/assets/images/${HANNAN_HEADSHOT_FILENAME}`,
      alt: "Hannan Ahmad Khan, Co-Founder & CEO of Stellix Soft",
      fallbackInitials: "HA",
      hasRealHeadshot: true,
      todo: null,
      vcardPhotoSourcePath: "hannan-headshot-for-vcard.jpg",
    },
    contact: {
      phoneTel: STELLIX_SOFT_LLC_PHONE_TEL,
      phoneDisplay: STELLIX_SOFT_LLC_PHONE_DISPLAY,
      whatsappTel: "+923365357989",
      whatsappDigits: digitsOnly("+923365357989"),
      whatsappPrefill:
        "Hi Hannan, I just opened your Stellix Soft digital business card and would like to connect.",
      email: "sales@stellixsoft.com",
      personalLinkedInUrl: "https://www.linkedin.com/in/hannan-a-khan/",
      websiteUrl: absoluteUrl("/"),
      websiteDisplay: "stellixsoft.com",
    },
    meeting: {
      url: CALENDLY_URL,
      eventSlug: CALENDLY_EVENT_SLUG,
    },
    assets: {
      companyProfilePublicPath: `/assets/${HANNAN_PROFILE_FILENAME}`,
      companyProfileFilename: HANNAN_PROFILE_FILENAME,
      isPlaceholderProfile: false,
    },
    urls: {
      pagePath: `/${HANNAN_CARD_SLUG}`,
      pageUrl: absoluteUrl(`/${HANNAN_CARD_SLUG}`),
      qrPath: `/${HANNAN_CARD_SLUG}/qr`,
      qrUrl: absoluteUrl(`/${HANNAN_CARD_SLUG}/qr`),
      vcardPath: `/api/vcard/${HANNAN_CARD_SLUG}`,
      vcardUrl: absoluteUrl(`/api/vcard/${HANNAN_CARD_SLUG}`),
      ogImagePath: `/${HANNAN_CARD_SLUG}/opengraph-image`,
      ogImageUrl: absoluteUrl(`/${HANNAN_CARD_SLUG}/opengraph-image`),
    },
    companyLinkedInUrl: COMPANY_LINKEDIN_URL,
    needs: {
      realHeadshot: false,
      personalLinkedIn: false,
      directMobile: false,
      personalEmail: false,
      companyProfilePdf: false,
    },
  },
};

export const HANNAN_BUSINESS_CARD = BUSINESS_CARDS.hannan;
