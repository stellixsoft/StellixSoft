export type CaseStudyStat = { value: string; label: string };

export type CaseStudyFact = { label: string; value: string };

export type CaseStudyProblemCard = {
  title: string;
  items: string[];
};

export type CaseStudyApproachPhase = {
  phase: string;
  months?: string;
  title: string;
  items: string[];
};

export type CaseStudyFeature = {
  title: string;
  items: string[];
  icon?: "clock" | "document" | "nav" | "bolt";
};

export type CaseStudyOutcomeCard = {
  title: string;
  icon?: "chip" | "chart" | "users";
  items: string[];
};

export type CaseStudySuccessReason = {
  title: string;
  body: string;
};

export type CaseStudyLifecycleStep = {
  title: string;
  body: string;
};

export type CaseStudyContent = {
  /** When true, skip the trailing global CTAPilot (facing already covers it) */
  omitCtaPilot?: boolean;
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    stats: CaseStudyStat[];
    industry: string;
    techStack: string[];
  };
  client: {
    headingLine1: string;
    headingLine2?: string;
    paragraphs: string[];
    /** Optional pull-quote under the client paragraphs */
    quote?: string;
    facts: CaseStudyFact[];
  };
  problem: {
    heading: string;
    cards: CaseStudyProblemCard[];
    /** Optional third-card style callout (previous attempts / strategic note) */
    callout?: {
      title: string;
      body: string;
      footer?: string;
    };
  };
  approach: {
    heading: string;
    description: string;
    phases: CaseStudyApproachPhase[];
  };
  architecture: {
    label?: string;
    heading?: string;
    description?: string;
    stackItems: { label: string; detail: string }[];
    imageSrc: string;
    imageAlt: string;
  };
  features: {
    label?: string;
    heading: string;
    items: CaseStudyFeature[];
  };
  /** Optional second features strip (icon cards) after testimonial */
  highlightFeatures?: {
    heading: string;
    items: CaseStudyFeature[];
  };
  /** Optional horizontal workflow strip (e.g. audit status flow) */
  workflow?: {
    steps: { title: string; description: string }[];
    highlights: { title: string; description: string }[];
  };
  outcomes: {
    /** stacked = stats grid then detail cards (logistics mockup); split = side-by-side */
    layout?: "split" | "stacked";
    headingLine1: string;
    headingLine2?: string;
    description?: string;
    stats: CaseStudyStat[];
    detailCards: CaseStudyOutcomeCard[];
  };
  testimonial: {
    quote: string;
    role: string;
    companyLine1: string;
    companyLine2?: string;
    avatarSrc: string;
    /** Default right column — why succeeded */
    reasons?: CaseStudySuccessReason[];
    /** Alternate right column — process / lifecycle cards */
    lifecycle?: {
      label: string;
      steps: CaseStudyLifecycleStep[];
    };
    /** Alternate right column — role-labeled vertical timeline */
    processTimeline?: {
      label?: string;
      steps: {
        role: string;
        roleColor: string;
        title: string;
        body: string;
      }[];
    };
  };
  facing: {
    label?: string;
    headingLine1: string;
    headingLine2?: string;
    description: string;
    whatYouGet: string[];
    notReadyYet?: string;
    nextSlotLabel: string;
    teamLabel: string;
  };
};
