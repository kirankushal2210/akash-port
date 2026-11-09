import { Masthead } from "@/components/Masthead";
import { PhotoSlot } from "@/components/PhotoSlot";
import {
  CONTACT_EMAIL,
  NAME,
  disciplines,
  education,
  enquiries,
  field,
  figures,
  investigations,
  newsrooms,
  podium,
  profile,
  roles,
  standfirst,
} from "@/content/profile";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Masthead />

      <main id="main">
        {/* ---------------------------------------------------------- */}
        {/* Hero                                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="hero wrap" id="top" aria-labelledby="hero-name">
          <p className="label hero__roles">
            {roles.map((role, i) => (
              <span key={role}>
                {i > 0 ? <span aria-hidden="true"> / </span> : null}
                {role}
              </span>
            ))}
          </p>
          <h1 className="hero__name" id="hero-name">
            {NAME}
          </h1>

          <div className="hero__lower">
            <div className="hero__text">
              <p className="hero__standfirst">{standfirst}</p>
              <dl className="figures">
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
            <PhotoSlot
              brief="Portrait of the subject. A calm, direct, editorial frame."
              preload
            />
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Profile                                                     */}
        {/* ---------------------------------------------------------- */}
        <section className="section wrap" id="profile" aria-labelledby="profile-h">
          <header className="section__head">
            <h2 className="label" id="profile-h">
              Profile
            </h2>
          </header>
          <div className="section__body">
            <p className="lead reveal">{profile.lead}</p>
            <div className="prose reveal">
              {profile.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h3 className="label subhead">Four disciplines</h3>
            <ol className="disciplines">
              {disciplines.map((d) => (
                <li className="reveal" key={d.title}>
                  <h4>{d.title}</h4>
                  <p>{d.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Newsrooms                                                   */}
        {/* ---------------------------------------------------------- */}
        <section
          className="section wrap"
          id="newsrooms"
          aria-labelledby="newsrooms-h"
        >
          <header className="section__head">
            <h2 className="label" id="newsrooms-h">
              Newsrooms
            </h2>
          </header>
          <div className="section__body">
            {newsrooms.map((n) => (
              <article className="post reveal" key={n.organisation}>
                <h3 className="title">{n.organisation}</h3>
                <p className="post__role">
                  {n.role}
                  <span className="post__note">{n.note}</span>
                </p>
                <div className="prose">
                  {n.points.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Investigations                                              */}
        {/* ---------------------------------------------------------- */}
        <section
          className="section wrap"
          id="investigations"
          aria-labelledby="investigations-h"
        >
          <header className="section__head">
            <h2 className="label" id="investigations-h">
              Investigations
            </h2>
          </header>
          <div className="section__body">
            <div className="ledger reveal">
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
                <article className="case reveal" key={c.title}>
                  <p className="label label--accent">{c.marker}</p>
                  <h3 className="title">{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Field — the one dark passage                                */}
        {/* ---------------------------------------------------------- */}
        <section className="field" id="field" aria-labelledby="field-h">
          <div className="wrap">
            <header className="field__head">
              <p className="label label--accent">Field</p>
              <h2 className="field__title" id="field-h">
                From ground zero
              </h2>
            </header>

            <PhotoSlot
              ratio="wide"
              brief="A photograph from the field: a front line, a flood, an election night."
            />

            {field.map((g) => (
              <div className="dispatches" key={g.group}>
                <h3 className="label dispatches__group">{g.group}</h3>
                <ul>
                  {g.entries.map((e) => (
                    <li className="dispatch reveal" key={e.place}>
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
        {/* Podium                                                      */}
        {/* ---------------------------------------------------------- */}
        <section className="section wrap" id="podium" aria-labelledby="podium-h">
          <header className="section__head">
            <h2 className="label" id="podium-h">
              Podium
            </h2>
          </header>
          <div className="section__body">
            <article className="champion reveal">
              <p className="label label--accent">{podium.title.marker}</p>
              <h3 className="champion__heading">{podium.title.heading}</h3>
              <p className="lead lead--tight">{podium.title.text}</p>
            </article>

            <div className="cases">
              <article className="case reveal">
                <h3 className="title">{podium.keynote.heading}</h3>
                <p>{podium.keynote.text}</p>
              </article>
              <article className="case reveal">
                <h3 className="title">Lecture halls</h3>
                <p>{podium.lecturesIntro}</p>
                <ul className="plain">
                  {podium.institutions.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            </div>

            <h3 className="label subhead" id="education">
              Education
            </h3>
            <ul className="education">
              {education.map((e) => (
                <li className="reveal" key={e.institution}>
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
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Contact                                                     */}
        {/* ---------------------------------------------------------- */}
        <section className="contact wrap" id="contact" aria-labelledby="contact-h">
          <p className="label">Contact</p>
          <h2 className="contact__title" id="contact-h">
            For speaking invitations, media requests and advisory work.
          </h2>

          {CONTACT_EMAIL ? (
            <ul className="enquiries">
              {enquiries.map((q) => (
                <li key={q.label}>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(q.subject)}`}
                  >
                    <span>{q.label}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <ul className="enquiries enquiries--pending">
                {enquiries.map((q) => (
                  <li key={q.label}>
                    <span>{q.label}</span>
                  </li>
                ))}
              </ul>
              <p className="pending">
                [Contact email to be supplied. Set CONTACT_EMAIL in
                content/profile.ts and these become links.]
              </p>
            </>
          )}
        </section>
      </main>

      <footer className="footer wrap">
        <p>
          © {NAME}
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
