const stats = [
  {
    label: "0,04 % d'impayés",
    description:
      "Procédures de facturation éprouvées, transposables dès le mois 1.",
  },
  {
    label: "10 → 80 salariés",
    description:
      "Croissance pérenne obtenue sans turnover grâce à un pilotage RH ciblé.",
  },
  {
    label: "25 ans de terrain",
    description:
      "Direction d'entreprise d'ambulance multi-sites, 30 collaborateurs aujourd'hui.",
  },
];

const pillars = [
  {
    title: "Gouvernance & leadership opérationnel",
    detail:
      "Clarifiez vos rôles, installez un CODIR même restreint, sécurisez chaque décision critique.",
  },
  {
    title: "Process industrialisés",
    detail:
      "Cartographiez vos 7 processus vitaux, éliminez les goulots et automatisez la facturation.",
  },
  {
    title: "Culture data & digital",
    detail:
      "Construisez des dashboards temps réel pour piloter rentabilité, qualité de service et RH.",
  },
];

const program = [
  {
    quarter: "Trimestre 1 · Fondations",
    months: "Mois 1 à 3",
    objective: "Sortir du mode pompier, structurer l'entreprise et préparer la délégation.",
    days: [
      {
        title: "Jour 1 • Diagnostic & Gouvernance",
        bullets: [
          "Audit ciblé : où passe vraiment votre temps de dirigeant",
          "Organigramme fonctionnel adapté à la réalité opérationnelle",
          "Installation de votre CODIR (même à 10 collaborateurs)",
          "Stratégies de délégation pour libérer 30 % de votre agenda",
        ],
      },
      {
        title: "Jour 2 • Process & Facturation",
        bullets: [
          "Méthode 0,04 % d'impayés, scripts et tableaux de suivi inclus",
          "Cartographie des 7 processus clés (mission, règlement, RH, qualité…)",
          "Identification et traitement des goulots d'étranglement prioritaires",
          "Kit de standardisation documentaire prêt à intégrer",
        ],
      },
      {
        title: "Jour 3 • RH & Croissance",
        bullets: [
          "Routine d'onboarding pour réduire la courbe d'apprentissage à 30 jours",
          "Trame de recrutement différenciante pour profils pénuriques",
          "Construction de votre plan de croissance à 3 ans",
          "Architecture d'incitation et fidélisation sans inflation salariale",
        ],
      },
    ],
  },
  {
    quarter: "Trimestre 2 · Digitalisation",
    months: "Mois 4 à 6",
    objective:
      "Industrialiser le pilotage, raccourcir les cycles de décision et fiabiliser la data.",
    days: [
      {
        title: "Jour 4 • Cartographie data & indicateurs",
        bullets: [
          "Définition des KPI rentabilité, qualité de service et conformité",
          "Architecture data minimaliste : outils, rôles, routines de fiabilité",
          "Lecture financière simplifiée pour anticiper les marges à 90 jours",
        ],
      },
      {
        title: "Jour 5 • Outils digitaux & automatisation",
        bullets: [
          "Sélection d'outils adaptés au terrain (planning, facturation, conformité)",
          "Automatisation des flux critiques : factures, relances, RH",
          "Plan de migration progressif sans rupture de service",
        ],
      },
      {
        title: "Jour 6 • Pilotage en temps réel",
        bullets: [
          "Construction de dashboards opérationnels prêts à l'emploi",
          "Rituels CODIR data-driven : agenda, supports, décisions flash",
          "Plan d'action 30 jours pour embarquer les équipes",
        ],
      },
    ],
  },
  {
    quarter: "Trimestre 3 · Excellence opérationnelle",
    months: "Mois 7 à 9",
    objective:
      "Sécuriser la qualité de service, renforcer la marque employeur et préparer l'expansion.",
    days: [
      {
        title: "Jour 7 • Qualité & conformité",
        bullets: [
          "Système qualité en 5 piliers : traçabilité, contrôle, amélioration continue",
          "Gestion proactive des inspections ARS/CPAM",
          "Protocoles incidents & continuité de service",
        ],
      },
      {
        title: "Jour 8 • Expérience collaborateurs",
        bullets: [
          "Parcours collaborateur de 12 mois, du recrutement à la fidélisation",
          "Programme ambassadeurs pour transformer vos équipes en recruteurs",
          "Matrice de compétences et plan de formation interne",
        ],
      },
      {
        title: "Jour 9 • Image & partenariats",
        bullets: [
          "Positionnement différenciant face aux concurrents artisans",
          "Stratégie partenariale avec établissements de santé et collectivités",
          "Kit communication de crise et relations publiques",
        ],
      },
    ],
  },
  {
    quarter: "Trimestre 4 · Expansion & pérennité",
    months: "Mois 10 à 12",
    objective:
      "Préparer la duplication, sécuriser la croissance et ancrer la vision long terme.",
    days: [
      {
        title: "Jour 10 • Business model & finance",
        bullets: [
          "Modèle financier consolidé par ligne de service",
          "Scénarios d'investissement (flotte, bases, digital) et ROI attendu",
          "Stratégies de financement : cash, OPEX, partenaires",
        ],
      },
      {
        title: "Jour 11 • Duplication & multi-sites",
        bullets: [
          "Playbook d'ouverture d'un nouveau site ou d'une base satellite",
          "Gouvernance multi-sites : reporting, visites, culture commune",
          "Check-list juridique et conformité pour croissance externe",
        ],
      },
      {
        title: "Jour 12 • Vision & passage de relais",
        bullets: [
          "Objectifs 3 ans alignés sur votre vision personnelle",
          "Plan de succession : responsabilités, talents, calendrier",
          "Système de pilotage autonome pour maintenir le cap sans vous",
        ],
      },
    ],
  },
];

const bonuses = [
  "Accès à un groupe restreint de 8 à 10 pairs, sélectionnés sur ambitions et valeurs.",
  "Hotline stratégique entre les sessions (48 h max de délai de réponse).",
  "Bibliothèque d'outils prêts à l'emploi : matrices, scripts, tableaux de bord.",
  "Sessions invitées avec experts finance, juridique et data health.",
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f6f9ff] to-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-8 lg:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Mastermind fermé · Dirigeants d&apos;ambulance
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Le Cercle Scale
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              12 journées d&apos;immersion (1 par mois) pour passer de
              l&apos;artisanat à l&apos;entreprise d&apos;ambulance digitale,
              rentable et pilotée par la data.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@lecercle.scale"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Candidater maintenant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#programme"
                className="inline-flex items-center rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-400 hover:text-blue-800"
              >
                Découvrir le programme
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-blue-100 backdrop-blur">
            <h2 className="text-xl font-semibold text-slate-900">
              Votre avantage décisif
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              25 ans à diriger et scaler une entreprise d&apos;ambulance : 30
              salariés pilotés grâce à une gouvernance structurée, 0,04 % de
              factures impayées contre 2 à 5 % dans le secteur, et une croissance
              sans turnover. Le Cercle Scale vous transmet les systèmes qui
              permettent de sortir du mode pompier et de multiplier vos marges
              sans sacrifier la qualité de service.
            </p>
          </div>
        </section>

        <section>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100"
              >
                <p className="text-2xl font-semibold text-blue-700">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3" aria-label="Piliers stratégiques">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg shadow-blue-100"
            >
              <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 ring-8 ring-blue-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-12 w-12 p-3"
                >
                  <path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600">{pillar.detail}</p>
            </article>
          ))}
        </section>

        <section id="programme" className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Programme 12 mois
            </h2>
            <p className="text-base text-slate-600">
              12 rencontres d&apos;une journée, un jeudi par mois, en présentiel.
              Chaque session délivre des outils concrets, un accompagnement en
              petit comité et un plan d&apos;actions personnalisé pour votre
              entreprise.
            </p>
          </div>

          <div className="space-y-12">
            {program.map((module) => (
              <article
                key={module.quarter}
                className="relative overflow-hidden rounded-[2.5rem] bg-white/95 px-6 py-10 shadow-xl shadow-blue-100 md:px-10"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-indigo-500" />
                <div className="space-y-6 md:pl-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
                      {module.months}
                    </span>
                    <p className="text-sm font-medium text-blue-600">
                      {module.quarter}
                    </p>
                  </div>
                  <p className="text-lg font-medium text-slate-800">
                    {module.objective}
                  </p>
                  <div className="grid gap-8 md:grid-cols-3">
                    {module.days.map((day) => (
                      <div key={day.title} className="space-y-4">
                        <h3 className="text-base font-semibold text-slate-900">
                          {day.title}
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                          {day.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Ce que vous obtenez en rejoignant Le Cercle Scale
            </h2>
            <ul className="space-y-4 text-sm text-slate-600">
              {bonuses.map((bonus) => (
                <li key={bonus} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100">
            <h3 className="text-xl font-semibold text-slate-900">
              Modalités d&apos;adhésion
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li>
                Groupe fermé de 8 à 10 dirigeants, sur sélection (entretien de 45
                minutes).
              </li>
              <li>
                12 journées en présentiel (Paris & Lyon), replays et ressources
                disponibles 24/7.
              </li>
              <li>
                Investissement annuel : 7 500 € HT, facilités de paiement en 4
                échéances.
              </li>
              <li>
                Bonus : 3 sessions de mentoring individuel (1 h) pour mettre en
                musique vos plans d&apos;action.
              </li>
            </ul>
            <a
              href="https://cal.com/lecercle-scale/entretien"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Réserver un entretien de sélection
            </a>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 px-10 py-12 text-white shadow-2xl shadow-blue-400/30">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                Prêt à structurer votre entreprise pour la croissance ?
              </h2>
              <p className="text-sm text-slate-200">
                Le Cercle Scale est conçu pour les dirigeants qui veulent
                piloter leurs opérations à la data, attirer les meilleurs
                talents et dégager du temps pour la vision. Les candidatures
                sont ouvertes pour la prochaine cohorte (démarrage T1 2025).
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:contact@lecercle.scale"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-700/40 transition hover:bg-blue-50"
              >
                Candidater
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://cal.com/lecercle-scale/entretien"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Planifier un échange
              </a>
            </div>
          </div>
        </section>

        <footer className="pb-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Le Cercle Scale · Mastermind dirigeants
          d&apos;ambulance.
        </footer>
      </div>
    </main>
  );
}
