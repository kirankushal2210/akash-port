/**
 * Single source of truth for every word on the site.
 *
 * Source: "Website_Profile_Content_British_English.docx". The document has no
 * page numbers, so each block below cites the document heading it came from.
 * Nothing here is invented: where the document is silent, the value is a
 * clearly marked placeholder (see PLACEHOLDERS).
 */

/* ------------------------------------------------------------------ */
/* PLACEHOLDERS — replace these before launch                          */
/* ------------------------------------------------------------------ */

/** Supplied by the site owner; the document never states the subject's name. */
export const NAME = "Akash";

/** No contact details are in the document. Leave empty to show a notice. */
export const CONTACT_EMAIL = "";

/** Production URL, used for canonical links and social previews. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3400";

export const NAME_IS_PLACEHOLDER = NAME.startsWith("[");

/* ------------------------------------------------------------------ */
/* Identity — source: title block                                      */
/* ------------------------------------------------------------------ */

export const roles = [
  "Investigative journalist",
  "Strategic communications leader",
  "Orator",
] as const;

export const metaDescription =
  "Investigative journalist, strategic communications leader and champion orator. Formerly Senior Editor & Head of South at Dailyhunt Media Group, with reporting for Republic TV, India Today and CNN News18.";

/* Source: Executive Summary */
export const standfirst =
  "A reporting career across India's top three national broadcast news networks, the editorial leadership of Dailyhunt Media Group in the South, and a championship record at the podium.";

/* Source: Executive Summary; High-Impact Investigations; Oratory */
export const figures = [
  {
    value: "19",
    unit: "years, 6 months",
    caption: "His age on entering national broadcast media",
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
    "Beyond journalism he is a University Gold Medallist in Political Science, Mass Communication and English Literature, and the winner of the Master Orator Championship from a field of more than 2,500 speakers across South India. He now brings investigative rigour to strategic narrative architecture and public advisory.",
  ],
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
/* Newsrooms — source: Professional Experience & Career Milestones     */
/* The document gives no start or end dates for either post.           */
/* ------------------------------------------------------------------ */

export const newsrooms = [
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
] as const;

/* ------------------------------------------------------------------ */
/* Investigations — source: High-Impact Investigations & Legal         */
/* Precedents                                                          */
/* ------------------------------------------------------------------ */

export const investigations = {
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
} as const;

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
    award: "Bachelor of Arts, triple major in Political Science, Mass Communication and English Literature",
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
/* Contact — enquiry types follow the document's pillars. No address   */
/* is given in the document.                                           */
/* ------------------------------------------------------------------ */

export const enquiries = [
  { label: "Speaking invitations", subject: "Speaking invitation" },
  { label: "Media requests", subject: "Media request" },
  { label: "Advisory and collaborations", subject: "Advisory enquiry" },
] as const;

export const sections = [
  { id: "profile", label: "Profile" },
  { id: "newsrooms", label: "Newsrooms" },
  { id: "investigations", label: "Investigations" },
  { id: "field", label: "Field" },
  { id: "podium", label: "Podium" },
  { id: "contact", label: "Contact" },
] as const;
