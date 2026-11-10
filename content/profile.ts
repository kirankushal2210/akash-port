/**
 * Single source of truth for every word and contact detail on the site.
 *
 * Sources:
 * - "Website_Profile_Content_British_English.docx"
 * - Official visiting card and campaign poster supplied by the site owner
 */

/* ------------------------------------------------------------------ */
/* Identity & Public Office                                            */
/* ------------------------------------------------------------------ */

export const NAME = "Akash Kolluru";
export const NAME_FIRST = "Akash";
export const NAME_LAST = "Kolluru";
export const NAME_TE = "ఆకాశ్ కొల్లూరు";
export const MONOGRAM = "AK";

export const CONTACT_EMAIL = "akash.kolluru@gmail.com";
export const CONTACT_PHONE = "+91 8886592089";

export const PUBLIC_OFFICE = {
  party: "Telangana Rakshana Sena (TRS)",
  partyShort: "TRS",
  candidacy: "MLC Graduates Candidate",
  constituency: "Hyderabad – Ranga Reddy – Mahabubnagar",
  pill: "Telangana Rakshana Sena · MLC Graduates Candidate",
} as const;

/** Production URL, used for canonical links and social previews. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3400");

export const NAME_IS_PLACEHOLDER = NAME.startsWith("[");

/* ------------------------------------------------------------------ */
/* Social & Media Channels — from the official visiting card           */
/* ------------------------------------------------------------------ */

export type SocialChannel = {
  label: string;
  handle: string;
  /** Direct profile URL where unambiguously verified; optional otherwise. */
  href?: string;
};

export const socials: readonly SocialChannel[] = [
  {
    label: "Instagram",
    handle: "/akashkolluru",
    href: "https://www.instagram.com/akashkolluru/",
  },
  {
    label: "YouTube",
    handle: "/AkashKolluruTRS",
    href: "https://www.youtube.com/@AkashKolluruTRS",
  },
  {
    label: "X",
    handle: "/akash_kolluru",
    href: "https://x.com/akash_kolluru",
  },
  {
    label: "Facebook",
    handle: "/Akash Kolluru",
  },
  {
    label: "LinkedIn",
    handle: "/Akash Kolluru",
  },
];

/* ------------------------------------------------------------------ */
/* Identity — source: title block & supplied card/poster               */
/* ------------------------------------------------------------------ */

export const roles = [
  "Investigative journalist",
  "Strategic communications leader",
  "Orator",
  "MLC Graduates Candidate (TRS)",
] as const;

export const metaDescription =
  "Akash Kolluru — investigative journalist, strategic communications leader, champion orator and Telangana Rakshana Sena (TRS) MLC Graduates Candidate for Hyderabad – Ranga Reddy – Mahabubnagar. Formerly Senior Editor & Head of South at Dailyhunt Media Group, with reporting for Republic TV, India Today and CNN News18.";

/* Source: Executive Summary */
export const standfirst =
  "A reporting career across India's top three national broadcast news networks, editorial leadership at Dailyhunt Media Group in the South, a championship record at the podium — and public representation as TRS MLC Graduates Candidate.";

/* Source: Executive Summary; High-Impact Investigations; Oratory */
export const figures = [
  {
    value: "19",
    unit: "years, 6 months",
    caption: "Age on entering national broadcast media",
  },
  {
    value: "3",
    unit: "national networks",
    caption: "Republic TV, India Today and CNN News18",
  },
  {
    value: "15+",
    unit: "investigations",
    caption: "Led at national level",
  },
  {
    value: "2,500+",
    unit: "speakers",
    caption: "The field at the 2017 Master Orator Championship, which he won",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Profile — source: Executive Summary                                 */
/* ------------------------------------------------------------------ */

export const profile = {
  lead: "He stepped into national broadcast media at nineteen years and six months old. Since 2017 he has been the only journalist from Telangana to operate out of the national media ecosystem of the NCR.",
  body: [
    "His career joins two kinds of work that seldom sit together: ground reporting from conflict zones and natural disasters, and deep investigative journalism. That work has directly influenced public policy, legal precedents and national discourse.",
    "Beyond journalism he is a University Gold Medallist in Political Science, Mass Communication and English Literature, and the winner of the Master Orator Championship from a field of more than 2,500 speakers across South India. Bringing investigative rigour to strategic narrative architecture, public advisory and democratic representation, he is contesting as the Telangana Rakshana Sena (TRS) MLC Graduates Candidate for Hyderabad – Ranga Reddy – Mahabubnagar.",
  ],
  callout:
    "Investigative rigour on the record, strategic clarity in public life, and direct representation for graduates across Hyderabad, Ranga Reddy and Mahabubnagar.",
};

/* Source: Core Pillars of Expertise */
export const disciplines = [
  {
    title: "Investigative and exposé journalism",
    text: "Breaking high-level corruption networks, paper leaks and systemic malpractice, with evidence gathered to a legal standard.",
  },
  {
    title: "Ground-zero and crisis reporting",
    text: "Battlefront and disaster reporting on the ground, capturing human and geopolitical realities in real time and under extreme risk.",
  },
  {
    title: "Strategic communications and public advisory",
    text: "National-level narrative architecture, media strategy and executive positioning for high-profile public offices and leadership.",
  },
  {
    title: "Keynote oratory and leadership mentorship",
    text: "Keynote speeches, lectures and masterclasses at premier universities and international forums.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Newsrooms & Public Life                                             */
/* ------------------------------------------------------------------ */

export type CareerPost = {
  organisation: string;
  role: string;
  note: string;
  period?: string;
  points: readonly string[];
};

export const newsrooms: readonly CareerPost[] = [
  {
    organisation: "Telangana Rakshana Sena (TRS)",
    role: "MLC Graduates Candidate — Hyderabad, Ranga Reddy & Mahabubnagar",
    note: "Public Life & Representation",
    points: [
      "Representing the Hyderabad – Ranga Reddy – Mahabubnagar Graduates' constituency with a platform rooted in institutional accountability, youth opportunity and graduate welfare.",
      "Bringing frontline investigative discipline and clear public advocacy to policy dialogue across Telangana.",
    ],
  },
  {
    organisation: "Dailyhunt Media Group",
    role: "Senior Editor & Head of South",
    note: "Former post",
    points: [
      "Spearheaded content strategy, editorial direction and regional expansion across Southern India for one of India's largest digital media conglomerates.",
      "Led cross-functional editorial teams to deliver high-engagement news coverage and innovations in digital broadcast.",
    ],
  },
  {
    organisation: "Republic TV, India Today, CNN News18",
    role: "Senior Investigative Journalist, Anchor and Correspondent",
    note: "NCR Desk and Regional Desk",
    points: [
      "Operated out of the national newsrooms of the NCR as a prime-time voice and ground investigator across national security, politics and civic exposés.",
      "Anchored high-intensity news bulletins, led special investigative feature broadcasts and coordinated live field operations across multi-state elections.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Investigations — source: High-Impact Investigations & Legal         */
/* Precedents                                                          */
/* ------------------------------------------------------------------ */

export type InvestigationCase = {
  marker: string;
  title: string;
  text: string;
  href?: string;
};

export const investigations: {
  intro: string;
  subjects: readonly string[];
  cases: readonly InvestigationCase[];
} = {
  intro:
    "More than fifteen national-level investigations, each a landmark exposé. Their subjects:",
  subjects: [
    "International drug syndicates",
    "Cross-border citizenship rackets",
    "Systemic police corruption",
    "Institutional negligence",
    "Kickback nexuses between underground pathology labs and doctors",
  ],
  cases: [
    {
      marker: "2018",
      title: "The CBSE paper leak",
      text: "He uncovered and broke the national story of how the national board examinations had been compromised. The exposé triggered nationwide administrative reform and oversight.",
    },
    {
      marker: "On the record",
      title: "Cited before the Supreme Court of India",
      text: "His investigative reporting and evidence packages were formally cited in sworn affidavits before the Supreme Court by premier federal investigative bodies, including the Central Bureau of Investigation. The result was legal prosecution and convictions.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Field — source: Ground, Election & Conflict Coverage                */
/* ------------------------------------------------------------------ */

export const field = [
  {
    group: "Conflict and war zones",
    entries: [
      {
        place: "Israel–Gaza frontier",
        text: "Reported live from the front lines during intense military hostilities, delivering real-time tactical and humanitarian coverage under risk of active fire.",
      },
      {
        place: "Ram Rahim riots",
        text: "Positioned at ground zero during severe civil unrest, reporting from the front line amid violent mobs and security curfews.",
      },
    ],
  },
  {
    group: "Elections and political operations",
    entries: [
      {
        place: "Lok Sabha and State Assembly elections",
        text: "Extensive live coverage of national elections and high-stakes State Assembly elections across Southern and Central India.",
      },
      {
        place: "Eagleton Resorts, Karnataka, 2018",
        text: "Exclusive, high-risk access to key political strongholds and resort hubs during critical government-formation battles.",
      },
    ],
  },
  {
    group: "Disasters and human crisis",
    entries: [
      {
        place: "Kerala floods and the Kavalapara landslide",
        text: "Waded through floodwaters and mudslides to bring immediate national attention to rescue operations and relief for victims.",
      },
      {
        place: "Chennai water crisis",
        text: "Tracked the collapse of urban infrastructure on the ground, exposing acute municipal failures in water management.",
      },
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Podium — source: Literary, Oratory & Academic Engagements           */
/* ------------------------------------------------------------------ */

export const podium = {
  title: {
    marker: "2017",
    heading: "Master Orator Champion",
    text: "Winner of the Master Orator Championship hosted by Toastmasters International, ahead of more than 2,500 competing speakers from across South India.",
  },
  keynote: {
    heading: "A keynote before world champions",
    text: "He represented India on an international platform, delivering a keynote address alongside the World Champion of Public Speaking, Dhananjay Hettiarachchi.",
  },
  lecturesIntro:
    "Invited as a guest lecturer, media critic and keynote panellist at:",
  institutions: [
    "Christ University, Bengaluru",
    "St. Francis College for Women",
    "Bhavan's Vivekananda College",
    "St. Ann's College",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Education — source: Academic Credentials                            */
/* ------------------------------------------------------------------ */

export const education = [
  {
    institution: "Osmania University",
    award:
      "Bachelor of Arts, triple major in Political Science, Mass Communication and English Literature",
    distinction: "Gold Medallist",
  },
  {
    institution: "The Hyderabad Public School, Begumpet",
    award: "ISC, Class XII. Science stream with MPC and Economics",
    distinction: null,
  },
  {
    institution: "Gitanjali Devshala",
    award: "ICSE, Class X",
    distinction: null,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Contact & Navigation                                                */
/* ------------------------------------------------------------------ */

export const enquiries = [
  { label: "Speaking invitations", subject: "Speaking invitation" },
  { label: "Media requests", subject: "Media request" },
  { label: "Advisory and collaborations", subject: "Advisory enquiry" },
  {
    label: "MLC Constituency & Public Representation",
    subject: "MLC Graduates Constituency representation",
  },
] as const;

export const sections = [
  { id: "profile", label: "Profile" },
  { id: "newsrooms", label: "Career" },
  { id: "investigations", label: "Investigations" },
  { id: "field", label: "Field" },
  { id: "podium", label: "Podium" },
  { id: "contact", label: "Contact" },
] as const;
