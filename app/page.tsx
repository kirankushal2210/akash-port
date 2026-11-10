import Image from "next/image";
import { ContactDesk } from "@/components/ContactDesk";
import { Masthead } from "@/components/Masthead";
import { PhotoSlot } from "@/components/PhotoSlot";
import {
  NAME,
  NAME_TE,
  PUBLIC_OFFICE,
  disciplines,
  education,
  field,
  figures,
  investigations,
  newsrooms,
  podium,
  profile,
  roles,
  sections,
  socials,
  standfirst,
} from "@/content/profile";

export default function Home() {
  return (
    <>
      <div className="trs-watermark" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="trs-top-banner">
        <Image
          src="/trs-header.webp"
          width={1024}
          height={204}
          sizes="(max-width: 68rem) 100vw, 1024px"
          alt="Telangana Rakshana Sena header banner featuring Telangana Thalli, the Martyrs Memorial, Mahatma Jyotirao Phule, Dr. B. R. Ambedkar, Prof. Jayashankar and Smt. Kalvakuntla Kavitha"
          unoptimized
          preload
        />
      </div>

      <Masthead />

      <main id="main">
        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="hero" id="top" aria-labelledby="hero-name">
          <div className="wrap">
            <div className="hero__grid">
              <div className="hero__content">
                <p className="label label--green hero__eyebrow">
                  {PUBLIC_OFFICE.pill}
                </p>

                <h1 className="hero__name" id="hero-name">
                  {NAME}
                </h1>

                <p className="hero__telugu" lang="te">
                  సీనియర్ జర్నలిస్ట్ {NAME_TE}
                </p>

                <p className="label hero__roles">
                  {roles.slice(0, 3).map((role, i) => (
                    <span key={role}>
                      {i > 0 ? <span aria-hidden="true"> / </span> : null}
                      {role}
                    </span>
                  ))}
                </p>

                <p className="hero__standfirst">{standfirst}</p>

                <p className="hero__constituency">
                  Constituency: <strong>{PUBLIC_OFFICE.constituency}</strong>
                </p>

                <div className="hero__actions">
                  <a className="btn btn--primary" href="#contact">
                    Contact Office →
                  </a>
                  <a className="btn btn--secondary" href="#investigations">
                    Investigations &amp; Career
                  </a>
                </div>
              </div>

              <div className="hero__portrait">
                <PhotoSlot
                  src="/portrait.jpg"
                  width={440}
                  height={550}
                  alt={`Portrait of ${NAME}, Senior Journalist and MLC Graduates Candidate (${PUBLIC_OFFICE.partyShort})`}
                  caption={`${NAME} · ${PUBLIC_OFFICE.candidacy} (${PUBLIC_OFFICE.partyShort})`}
                  preload
                />
              </div>
            </div>

            <dl className="figures" aria-label="Career milestones">
              {figures.map((f) => (
                <div className="figures__item" key={f.unit}>
                  <dt>
                    <span className="figures__value">{f.value}</span>
                    <span className="figures__unit">{f.unit}</span>
                  </dt>
                  <dd>{f.caption}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Profile                                                     */}
        {/* ---------------------------------------------------------- */}
        <section
          className="band band--cream"
          id="profile"
          aria-labelledby="profile-h"
        >
          <div className="wrap section">
            <header className="section__head">
              <h2 className="label label--blue" id="profile-h">
                Profile
              </h2>
            </header>
            <div className="section__body">
              <p className="lead">{profile.lead}</p>
              <div className="prose">
                {profile.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <h3 className="label label--blue subhead">Four disciplines</h3>
              <ol className="disciplines">
                {disciplines.map((d) => (
                  <li key={d.title}>
                    <h4>{d.title}</h4>
                    <p>{d.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Career & Public Life                                        */}
        {/* ---------------------------------------------------------- */}
        <section
          className="band band--gold"
          id="newsrooms"
          aria-labelledby="newsrooms-h"
        >
          <div className="wrap section">
            <header className="section__head">
              <h2 className="label label--navy" id="newsrooms-h">
                Career &amp; Public Life
              </h2>
            </header>
            <div className="section__body">
              {newsrooms.map((n) => (
                <article className="post" key={n.organisation}>
                  <p className="label label--blue">{n.note}</p>
                  <h3 className="title">{n.organisation}</h3>
                  <p className="post__role">
                    {n.role}
                    {n.period ? (
                      <span className="post__note">{n.period}</span>
                    ) : null}
                  </p>
                  <div className="prose">
                    {n.points.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Investigations                                              */}
        {/* ---------------------------------------------------------- */}
        <section
          className="band band--cream"
          id="investigations"
          aria-labelledby="investigations-h"
        >
          <div className="wrap section">
            <header className="section__head">
              <h2 className="label label--blue" id="investigations-h">
                Investigations
              </h2>
            </header>
            <div className="section__body">
              <div className="ledger">
                <p className="ledger__figure" aria-hidden="true">
                  15+
                </p>
                <div>
                  <p className="lead lead--tight">{investigations.intro}</p>
                  <ul className="subjects">
                    {investigations.subjects.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="cases">
                {investigations.cases.map((c) => (
                  <article className="case" key={c.title}>
                    <p className="label label--blue">{c.marker}</p>
                    <h3 className="title">{c.title}</h3>
                    <p>{c.text}</p>
                    {c.href ? (
                      <a
                        className="case__link"
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read report →
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Field — deep royal blue passage                             */}
        {/* ---------------------------------------------------------- */}
        <section className="field" id="field" aria-labelledby="field-h">
          <div className="wrap">
            <header className="field__head">
              <p className="label label--gold">Field</p>
              <h2 className="field__title" id="field-h">
                From ground zero
              </h2>
            </header>

            {field.map((g) => (
              <div className="dispatches" key={g.group}>
                <h3 className="label label--gold dispatches__group">
                  {g.group}
                </h3>
                <ul>
                  {g.entries.map((e) => (
                    <li className="dispatch" key={e.place}>
                      <h4 className="dispatch__place">{e.place}</h4>
                      <p>{e.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Podium & Education                                          */}
        {/* ---------------------------------------------------------- */}
        <section
          className="band band--gold"
          id="podium"
          aria-labelledby="podium-h"
        >
          <div className="wrap section">
            <header className="section__head">
              <h2 className="label label--navy" id="podium-h">
                Podium
              </h2>
            </header>
            <div className="section__body">
              <article className="champion">
                <p className="label label--blue">{podium.title.marker}</p>
                <h3 className="champion__heading">{podium.title.heading}</h3>
                <p className="lead lead--tight">{podium.title.text}</p>
              </article>

              <div className="cases">
                <article className="case">
                  <h3 className="title">{podium.keynote.heading}</h3>
                  <p>{podium.keynote.text}</p>
                </article>
                <article className="case">
                  <h3 className="title">Lecture halls</h3>
                  <p>{podium.lecturesIntro}</p>
                  <ul className="plain">
                    {podium.institutions.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </article>
              </div>

              <h3 className="label label--navy subhead" id="education">
                Education
              </h3>
              <ul className="education">
                {education.map((e) => (
                  <li key={e.institution}>
                    <h4>{e.institution}</h4>
                    <p>
                      {e.award}
                      {e.distinction ? (
                        <strong className="distinction">{e.distinction}</strong>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Contact                                                     */}
        {/* ---------------------------------------------------------- */}
        <section
          className="band band--cream contact"
          id="contact"
          aria-labelledby="contact-h"
        >
          <div className="wrap">
            <p className="label label--blue">Contact</p>
            <h2 className="contact__title" id="contact-h">
              Reach the office of {NAME}.
            </h2>
            <p className="contact__intro">
              Speaking invitations, media requests, advisory work, and MLC
              Graduates Constituency representation across{" "}
              {PUBLIC_OFFICE.constituency}.
            </p>
            <ContactDesk />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <div>
            <p className="footer__name">{NAME}</p>
            <p className="footer__te" lang="te">
              {NAME_TE}
            </p>
            <p className="footer__summary">
              {PUBLIC_OFFICE.candidacy} · {PUBLIC_OFFICE.constituency} (
              {PUBLIC_OFFICE.party})
            </p>
          </div>

          <div className="footer__links">
            <nav aria-label="Footer navigation">
              <ul className="footer__nav">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footer__socials">
              {socials
                .filter((s) => s.href)
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="wrap footer__bottom">
          <p>© {NAME}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
