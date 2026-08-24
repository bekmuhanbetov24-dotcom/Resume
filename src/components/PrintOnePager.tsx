import { createPortal } from "react-dom";
import { useLocale } from "../locale";

export function PrintOnePager() {
  const { t } = useLocale();
  const { profile, stats, experience, cases, skillTags, education, contact, ui } = t;

  const content = (
    <article className="print-only print-resume" aria-hidden>
      <header className="print-resume-header">
        <h1>{profile.nameShort}</h1>
        <p className="print-role">
          {profile.role} · {profile.location}
        </p>
        <p className="print-sub">{profile.roleSub}</p>
        <p className="print-contact">
          {contact.map((c) => c.label).join(" · ")}
        </p>
        <p className="print-meta">{profile.languages}</p>
      </header>

      <section>
        <h2>{ui.printSummary}</h2>
        <p>{profile.summary}</p>
        <ul className="print-inline-list">
          {profile.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <dl className="print-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>
                {s.value}
                {s.hint ? ` (${s.hint})` : ""}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>{ui.expTitle}</h2>
        {experience.map((job) => (
          <div key={job.period + job.role} className="print-block">
            <p className="print-period">{job.period}</p>
            <h3>
              {job.role} — {job.company}
            </h3>
            <p>{job.description}</p>
            {job.highlights.length > 0 && (
              <ul>
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2>{ui.casesTitle}</h2>
        {cases.map((item) => (
          <div key={item.id} className="print-block">
            <h3>{item.title}</h3>
            <p>
              <strong>{ui.caseResult}:</strong> {item.result}
            </p>
            <p>
              <strong>{ui.caseRole}:</strong> {item.contribution}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2>{ui.eduTitle}</h2>
        <ul>
          {education.map((e) => (
            <li key={e.period + e.title}>
              {e.period} — {e.title}, {e.note}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{ui.printSkills}</h2>
        <p className="print-skills">{skillTags.join(" · ")}</p>
      </section>
    </article>
  );

  return createPortal(content, document.body);
}
