/* Epistemic / Lawsec — lightweight i18n engine.
   English lives in the HTML as data-i18n="key". German is provided below.
   On load: snapshot English, detect language (saved choice > browser), apply.
   Toggle: any .lang-toggle with <span data-lang="en|de"> children. */
(function () {
	"use strict";

	var STORAGE_KEY = "epi_lang";

	var DE = {
		/* ---------- shared ---------- */
		"common.book": "Termin buchen <span class=\"arrow\">→</span>",

		/* ================= HOME ================= */
		"h.nav.services": "Leistungen",
		"h.nav.who": "Für wen",
		"h.nav.approach": "Ansatz",
		"h.nav.process": "Prozess",
		"h.nav.careers": "Karriere",
		"h.nav.book": "Termin buchen",
		"h.intro.eyebrow": "KI-Strategie · Agenten · Automatisierung",
		"h.intro.scroll": "Scrollen",
		"h.hero.eyebrow": "KI-Strategie · Agenten · Automatisierung",
		"h.hero.h1": "Bringen Sie KI <span class=\"ink-accent\">überall</span> in Ihrem Unternehmen zum Einsatz.",
		"h.hero.lead": "Epistemic hilft Fachleuten und Unternehmen, KI von einem Schlagwort in funktionierende Systeme zu verwandeln — Strategie, maßgeschneiderte Agenten, Automatisierung und die Integrationen, die alles zum Laufen bringen. Wir analysieren Ihre realen Abläufe, bauen mit Schutzmechanismen und bleiben an Bord, damit alles zuverlässig läuft.",
		"h.hero.cta1": "Termin buchen <span class=\"arrow\">→</span>",
		"h.hero.cta2": "Leistungen entdecken",
		"h.hero.s1l": "durchgängige KI-Fähigkeiten — von der Strategie bis zum laufenden Betrieb",
		"h.hero.s2l": "Agenten, die keine Anfrage und keine Nachricht außerhalb der Geschäftszeiten verpassen",
		"h.hero.s3n": "Wochen",
		"h.hero.s3l": "statt Quartale — fokussierte Umsetzung bis zum ersten funktionierenden System",
		"h.marquee.label": "Passt zu Ihrem Tech-Stack",

		"h.serv.index": "01 — Leistungen",
		"h.serv.title": "Ein vollständiges Toolkit für die Arbeit mit KI.",
		"h.serv.intro": "Ob Sie eine Strategie, einen einzelnen präzisen Agenten oder ein Automatisierungs-Rückgrat über Teams hinweg brauchen — wir decken den gesamten Weg ab, inklusive der unscheinbaren Integrations- und Betriebsarbeit, die KI wirklich wirksam macht.",
		"h.serv.1h": "KI-Strategie & Beratung",
		"h.serv.1p": "Identifizieren Sie die wirkungsvollsten Ansatzpunkte, beziffern Sie den Nutzen und erstellen Sie eine Roadmap, die Ihr Team auch umsetzen kann.",
		"h.serv.1t1": "Roadmap", "h.serv.1t2": "Use-Case-Analyse", "h.serv.1t3": "ROI-Modell",
		"h.serv.2h": "Maßgeschneiderte KI-Agenten & Copiloten",
		"h.serv.2p": "Speziell entwickelte Assistenten, die antworten, formulieren, qualifizieren und handeln — fundiert auf Ihren Daten und mit Mensch-im-Prozess-Schutzmechanismen.",
		"h.serv.2t1": "Assistenten", "h.serv.2t2": "Copiloten", "h.serv.2t3": "Schutzmechanismen",
		"h.serv.3h": "Workflow- & Prozessautomatisierung",
		"h.serv.3p": "Beseitigen Sie die wiederkehrende Verwaltungsarbeit zwischen Ihren Tools — Weiterleitung, Nachfassen, Dateneingabe und Freigaben laufen automatisch.",
		"h.serv.3t1": "Weiterleitung", "h.serv.3t2": "Freigaben", "h.serv.3t3": "Keine Doppeleingabe",
		"h.serv.4h": "Dokumentenintelligenz",
		"h.serv.4p": "Erfassen, extrahieren, prüfen, klassifizieren und fassen Sie unstrukturierte Dokumente zu sauberem, strukturiertem und verlässlichem Output zusammen.",
		"h.serv.4t1": "Extraktion", "h.serv.4t2": "Prüfung", "h.serv.4t3": "Zusammenfassungen",
		"h.serv.5h": "Daten, RAG & Wissenssysteme",
		"h.serv.5p": "Verwandeln Sie verstreutes Wissen in ein Retrieval-System, das Ihre Agenten zitieren können — aktuell, korrekt und zugriffsgesteuert.",
		"h.serv.5t1": "RAG", "h.serv.5t2": "Suche", "h.serv.5t3": "Quellenangaben",
		"h.serv.6h": "Systemintegration",
		"h.serv.6p": "Verbinden Sie KI mit den Tools, die Sie bereits nutzen — CRM, ERP, E-Mail, CMS und Datenbanken — mit sauberen, strukturierten Übergaben.",
		"h.serv.6t1": "CRM/ERP", "h.serv.6t2": "APIs", "h.serv.6t3": "Webhooks",
		"h.serv.7h": "KI-Schulung & Team-Enablement",
		"h.serv.7p": "Praxisnahe, rollenspezifische Schulungen und Playbooks, damit Ihre Mitarbeitenden KI sicher und souverän jeden Tag nutzen.",
		"h.serv.7t1": "Workshops", "h.serv.7t2": "Playbooks", "h.serv.7t3": "Richtlinien",
		"h.serv.8h": "Verwalteter KI-Betrieb",
		"h.serv.8p": "Wir verschwinden nicht zum Launch — Monitoring, Evaluierung, QA und Iteration halten die Systeme unter realer Last zuverlässig.",
		"h.serv.8t1": "Monitoring", "h.serv.8t2": "Evaluierungen", "h.serv.8t3": "Iteration",

		"h.ind.index": "02 — Für wen",
		"h.ind.title": "Gemacht für die Menschen, die die Arbeit machen.",
		"h.ind.intro": "Von Einzel-Fachleuten, die in Verwaltungsarbeit versinken, bis zu Enterprise-Teams, die Abläufe standardisieren — wir holen Sie dort ab, wo Sie stehen, und wachsen mit Ihnen.",
		"h.ind.a1h": "Fachleute & Einzelexpert:innen",
		"h.ind.a1p": "Gewinnen Sie Stunden zurück aus Posteingang-Triage, Erstaufnahme, Terminierung und Papierkram — und konzentrieren Sie sich auf abrechenbare Arbeit mit hohem Urteilsanteil.",
		"h.ind.a2h": "Kleine & mittlere Unternehmen",
		"h.ind.a2p": "Mehr Kapazität ohne mehr Personal — automatisieren Sie den operativen Kitt, der jedes Team unbemerkt ausbremst.",
		"h.ind.a3h": "Enterprise-Teams",
		"h.ind.a3p": "Standardisieren Sie Prozesse mit hohem Volumen durch nachvollziehbare, abgesicherte KI, die Ihre Sicherheits- und Compliance-Anforderungen erfüllt.",
		"h.ind.label": "Branchen",
		"h.ind.c1": "Recht", "h.ind.c2": "Finanzen", "h.ind.c3": "Immobilien", "h.ind.c4": "Gesundheitswesen",
		"h.ind.c5": "Dienstleistungen", "h.ind.c6": "Operations", "h.ind.c7": "Versicherung", "h.ind.c8": "Recruiting",

		"h.app.index": "03 — Ansatz",
		"h.app.title": "Rigoros, messbar und auf Dauer gebaut.",
		"h.app.intro": "Wir heißen aus gutem Grund Epistemic: Uns interessiert, was tatsächlich wahr ist. Keine Demos, die in der Produktion auseinanderfallen — nur Systeme, die auf Evidenz und Ihren realen Rahmenbedingungen beruhen.",
		"h.app.1h": "Ergebnis zuerst",
		"h.app.1p": "Wir beginnen mit der Kennzahl, die Sie bewegen wollen — Zeit, Kosten, Durchsatz — nicht mit der Technologie, die wir einsetzen wollen.",
		"h.app.2h": "Abgesichert durch Design",
		"h.app.2p": "Mensch-im-Prozess, Validierung und klare Eskalationswege, damit Automatisierung sicher und vertrauenswürdig bleibt.",
		"h.app.3h": "Gemessen, nicht angenommen",
		"h.app.3p": "Evaluierungen und Monitoring belegen, dass das System funktioniert — und belegen es weiter, wenn sich Eingaben ändern.",
		"h.app.4h": "Geführt von den Gründer:innen",
		"h.app.4p": "Erfahrene, praktische Betreuung vom ersten Gespräch bis zur Produktion. Sie wissen immer, wer verantwortlich ist.",

		"h.proc.index": "04 — Prozess",
		"h.proc.title": "Fünf Schritte von der Idee zum zuverlässigen System.",
		"h.proc.intro": "Ein fokussiertes Engagement mit engen Feedback-Schleifen. Sie sehen früh und regelmäßig funktionierende Software — keine monatelange Stille vor der großen Enthüllung.",
		"h.proc.1h": "Entdecken", "h.proc.1p": "Wir identifizieren, wo Zeit und Geld verloren gehen, und einigen uns auf die wichtigsten Ergebnisse.", "h.proc.1t": "Woche 1",
		"h.proc.2h": "Abbilden", "h.proc.2p": "Wir dokumentieren den realen Ablauf — Abhängigkeiten, Sonderfälle und Freigabelogik — bevor wir etwas bauen.", "h.proc.2t": "Woche 1–2",
		"h.proc.3h": "Bauen", "h.proc.3p": "Wir entwerfen den Agenten- und Automatisierungs-Stack mit Validierungsregeln und genau den Outputs, die Sie brauchen.", "h.proc.3t": "Woche 2–4",
		"h.proc.4h": "Integrieren", "h.proc.4p": "Wir binden alles in Ihre bestehenden Tools ein, sodass Ergebnisse dort ankommen, wo die Arbeit passiert — ohne Copy-Paste.", "h.proc.4t": "Woche 4–5",
		"h.proc.5h": "Betreiben & iterieren", "h.proc.5p": "Wir gehen live, überwachen und verfeinern, bis das System unter realer Last verlässlich ist — und halten es scharf.", "h.proc.5t": "Laufend",

		"h.out.index": "05 — Ergebnisse",
		"h.out.title": "Was sich ändert, wenn KI die Fleißarbeit übernimmt.",
		"h.out.intro": "Es geht nicht um Neuheit, sondern um messbare Entlastung. Hier spüren Teams den Unterschied zuerst.",
		"h.out.1h": "Stunden pro Woche zurückgewonnen", "h.out.1p": "Wiederkehrende Triage, Dateneingabe und Nachfassen laufen automatisch und schaffen Raum für Arbeit mit Urteilsvermögen.",
		"h.out.2h": "Geringere Kosten pro Vorgang", "h.out.2p": "Reduzieren Sie manuellen Aufwand und Gemeinkosten, ohne Personal aufzubauen, wenn das Volumen wächst.",
		"h.out.3h": "Höherer Durchsatz", "h.out.3p": "Arbeit läuft durch Freigaben und Übergaben, ohne in einem Posteingang hängenzubleiben.",
		"h.out.4h": "Stärkere Compliance", "h.out.4p": "Standardisierte Ein- und Ausgaben und nachvollziehbare Protokolle machen Audits und Prüfungen mühelos.",
		"h.out.5h": "Schnellere Entscheidungen", "h.out.5p": "Saubere Zusammenfassungen und strukturierte Daten bringen den richtigen Kontext schneller vor Entscheider.",
		"h.out.6h": "Bessere Klientenerfahrung", "h.out.6p": "Sofortige, konsistente, professionelle Antworten — auch außerhalb der Geschäftszeiten und über alle Kanäle.",

		"h.ls.badge": "<span class=\"dot\"></span> Unser Produkt · Lawsec",
		"h.ls.h2": "Schluss mit „Gibt es ein Update zu meinem Fall?“",
		"h.ls.p": "Lawsec hält Mandanten über den Stand ihres Falls auf dem Laufenden, beantwortet ihre Fragen und eskaliert die komplexen Angelegenheiten an Sie — rund um die Uhr, in der Sprache Ihrer Mandanten, auf den Kanälen, die sie ohnehin nutzen. Ihr Team wiederholt keine Updates mehr und kommt zurück zur juristischen Arbeit.",
		"h.ls.cta": "Lawsec entdecken <span class=\"arrow\">→</span>",
		"h.ls.b1": "Hallo, gibt es ein Update zu meinem Fall?",
		"h.ls.b2": "Ja — Ihr Antrag wurde am Dienstag angenommen und Ihr Termin ist für den 14. März angesetzt. Ich melde mich, sobald sich etwas ändert. ✅",
		"h.ls.b3": "Muss ich etwas vorbereiten?",
		"h.ls.b4": "Nur einen Lichtbildausweis. Ich habe Ihnen die vollständige Checkliste per E-Mail geschickt. 📄",

		"h.faq.index": "06 — FAQ",
		"h.faq.title": "Fragen, beantwortet.",
		"h.faq.intro": "Noch etwas unklar? Buchen Sie ein Gespräch und wir besprechen Ihre konkrete Situation.",
		"h.faq.q1": "Wie laufen Projekte ab? <span class=\"icon\">+</span>",
		"h.faq.a1": "Die meisten starten mit einem kurzen Erstgespräch und einem ersten Build mit festem Umfang, sodass Sie in wenigen Wochen ein funktionierendes System sehen. Danach wechseln viele Kunden in einen verwalteten Plan, in dem wir die Systeme über die Zeit überwachen und verbessern.",
		"h.faq.q2": "Wie gehen Sie mit Datensicherheit und Datenschutz um? <span class=\"icon\">+</span>",
		"h.faq.a2": "Wir gestalten nach dem Least-Privilege-Prinzip, halten sensible Daten möglichst in Ihren kontrollierten Umgebungen und dokumentieren Datenflüsse. Gern arbeiten wir innerhalb Ihrer Sicherheits-, Aufbewahrungs- und Compliance-Anforderungen.",
		"h.faq.q3": "Wie schnell sehen wir etwas Funktionierendes? <span class=\"icon\">+</span>",
		"h.faq.a3": "Ein fokussiertes erstes System steht typischerweise in wenigen Wochen statt Quartalen. Wir fassen den ersten Build bewusst eng, damit Sie schnell ein echtes, nutzbares Ergebnis erhalten — und bauen dann auf bewährtem Fundament aus.",
		"h.faq.q4": "Was kostet das? <span class=\"icon\">+</span>",
		"h.faq.a4": "Das hängt vom Umfang ab, aber wir arbeiten mit klaren Festpreisen für definierte Builds und transparenten Plänen für den laufenden Betrieb. Keine Überraschungsrechnungen — Sie geben den Umfang frei, bevor wir bauen.",
		"h.faq.q5": "Welche Tools und Modelle nutzen Sie? <span class=\"icon\">+</span>",
		"h.faq.a5": "Wir sind modell- und anbieterunabhängig. Wir wählen das richtige Modell und die richtigen Tools für die Aufgabe — OpenAI, Anthropic, Azure, AWS sowie Automatisierungsplattformen wie Zapier oder Make — und integrieren mit den Systemen, die Sie bereits nutzen.",
		"h.faq.q6": "Bauen Sie nur Agenten oder auch Strategie? <span class=\"icon\">+</span>",
		"h.faq.a6": "Beides. Manche Kunden wollen Beratung und eine Roadmap, andere wollen, dass wir Systeme bauen und betreiben. Wir können überall in diesem Spektrum starten und in den Rest hineinwachsen.",

		"h.cta.eyebrow": "Sprechen wir",
		"h.cta.h2": "Bereit, KI an die Arbeit zu schicken?",
		"h.cta.p": "Sagen Sie uns, wo Ihr Team Zeit verliert. Wir bilden es ab, bauen es, integrieren es und halten es am Laufen.",
		"h.cta.b1": "Schreiben Sie uns",
		"h.cta.b2": "Lawsec ansehen",

		"h.car.index": "07 — Karriere",
		"h.car.h2": "Bauen Sie die Systeme, die Menschen ihre Zeit zurückgeben.",
		"h.car.p": "Wir stellen Menschen ein, denen rigorose Technik, saubere Umsetzung und messbare Ergebnisse wichtig sind.",
		"h.car.b1": "Offene Stellen ansehen <span class=\"arrow\">→</span>",
		"h.car.b2": "Team kontaktieren",

		"h.foot.nav": "Navigation",
		"h.foot.company": "Unternehmen",
		"h.foot.focus": "Schwerpunkte",
		"h.foot.contact": "Kontakt",
		"h.foot.privacy": "Datenschutz",
		"h.foot.terms": "Nutzungsbedingungen",
		"h.foot.f1": "KI-Strategie", "h.foot.f2": "Agenten & Copiloten", "h.foot.f3": "Dokumenten-Workflows", "h.foot.f4": "Verwalteter KI-Betrieb",
		"h.foot.rights": "© <span id=\"year\">2026</span> Epistemic LLC. Alle Rechte vorbehalten.",
		"h.cookie.text": "Diese Website verwendet keine Tracking-Cookies. Ihre Privatsphäre ist uns wichtig.",
		"h.cookie.btn": "Verstanden",
		"h.cal.title": "Termin buchen",
		"h.cal.text": "Zur Terminbuchung nutzen wir Calendly. Beim Laden wird eine Verbindung zu Calendly (USA) hergestellt und es können personenbezogene Daten übertragen werden. Mehr dazu in unserer <a href=\"datenschutz.html\">Datenschutzerklärung</a>.",
		"h.cal.btn": "Calendly laden",

		/* ================= LAWSEC ================= */
		"l.by": "von <a href=\"index.html\">Epistemic</a>",
		"l.demo": "Demo buchen",
		"l.hero.eyebrow": "WhatsApp & E-Mail · KI-Anwaltssekretär",
		"l.hero.h1": "Ihr KI-Anwaltssekretär, auf <span class=\"wa-accent\">WhatsApp</span>.",
		"l.hero.lead": "Lawsec hält Ihre Mandanten über den Stand ihres Falls auf dem Laufenden, beantwortet ihre Fragen, erfasst die Mandantenanfragen und reicht die komplexen Angelegenheiten an Sie weiter.",
		"l.hero.cta1": "Demo buchen <span class=\"arrow\">→</span>",
		"l.hero.cta2": "So funktioniert’s",
		"l.hero.m1": "<span class=\"tick\">✓</span> Live-Fallupdates",
		"l.hero.m2": "<span class=\"tick\">✓</span> WhatsApp + E-Mail",
		"l.hero.m3": "<span class=\"tick\">✓</span> Umfassende Steuerungskompetenz",
		"l.phone.sub": "online · Anwaltssekretär",
		"l.phone.input": "Nachricht schreiben…",

		"l.how.index": "01 — So funktioniert’s",
		"l.how.title": "Von der ersten Nachricht bis zum bestätigten Termin.",
		"l.how.intro": "Lawsec ist auf den Kanälen präsent, die Ihre Mandanten ohnehin nutzen, versteht ihr Anliegen und zieht Sie nur hinzu, wenn es wirklich darauf ankommt.",
		"l.how.1h": "Mandant meldet sich", "l.how.1p": "Ein Interessent oder Mandant schreibt Ihrer Kanzlei auf WhatsApp oder per E-Mail — zu jeder Tageszeit.",
		"l.how.2h": "Lawsec teilt den aktuellen Stand", "l.how.2p": "Lawsec antwortet sofort mit dem aktuellen Stand der Sache — nächste Termine, Einreichungen und Offenes — fundiert auf Ihren Kanzleidaten.",
		"l.how.3h": "Erteilt Fallupdates", "l.how.3p": "Es beantwortet die Fragen Ihrer Mandate und hält diese auf den aktuellen Stand.",
		"l.how.4h": "Umfassende Kontrolle durch Sie", "l.how.4p": "Alles Komplexe oder Sensible wird mit einer sauberen, strukturierten Zusammenfassung an die richtige Person übergeben.",

		"l.cap.index": "02 — Fähigkeiten",
		"l.cap.title": "Ein Sekretär, der nie Feierabend macht.",
		"l.cap.intro": "Alles, was eine großartige Sekretär bei der Routinearbeit leistet — sofort, konsistent und zu jeder Stunde.",
		"l.cap.1h": "Erstaufnahme rund um die Uhr", "l.cap.1p": "Erfassen Sie jede Anfrage im Moment ihres Eingangs — keine verpassten Nachrichten, keine Lücken außerhalb der Geschäftszeiten.",
		"l.cap.2h": "Sofortige FAQ-Antworten", "l.cap.2p": "Honorare, Ablauf, Fristen, benötigte Unterlagen — sofort und korrekt beantwortet.",
		"l.cap.3h": "Live-Fallstatus", "l.cap.3p": "Gibt Mandanten auf Anfrage den aktuellen Stand ihrer Sache, sodass Ihr Team keine Updates mehr wiederholt.",
		"l.cap.4h": "Terminvereinbarung", "l.cap.4p": "Bucht Beratungen direkt in Ihren Kalender und sendet Bestätigungen.",
		"l.cap.5h": "Erfassung von Mandat & Details", "l.cap.5p": "Erfasst Namen, Kontakte und Falldetails in einem sauberen, strukturierten Format.",
		"l.cap.6h": "Mehrsprachige Antworten", "l.cap.6p": "Antwortet in der Sprache Ihrer Mandanten, damit niemand an einer Barriere abgewiesen wird.",
		"l.cap.7h": "WhatsApp + E-Mail", "l.cap.7p": "Ein Assistent über beide Kanäle, mit konsistenten Antworten überall.",
		"l.cap.8h": "Vertrauliches Audit-Protokoll", "l.cap.8p": "Jede Konversation wird protokolliert und ist für Compliance und Prüfung nachvollziehbar.",
		"l.cap.9h": "Schutzmechanismen für Übergabe", "l.cap.9p": "Kennt seine Grenzen und eskaliert sensible Angelegenheiten mit Kontext an die richtige Person.",

		"l.why.index": "03 — Warum Kanzleien es nutzen",
		"l.why.title": "Sparen Sie administrative Zeit.",
		"l.why.intro": "Halten Sie İhre Verfügbarkeit für İhre Mandanten hoch. Lawsec schließt diese Lücke.",
		"l.why.1h": "Keinen Mandanten verpassen", "l.why.1p": "Jede Anfrage erhält eine sofortige, professionelle Antwort.",
		"l.why.2h": "Abdeckung außerhalb der Geschäftszeiten", "l.why.2p": "Abende, Wochenenden, Feiertage — Lawsec ist im Dienst, wenn Ihr Büro es nicht ist. Lawsec entlastet Ihr Büro zu den Geschäftszeiten.",
		"l.why.3h": "Konsistenter, professioneller Ton", "l.why.3p": "Jeder Mandant erhält eine Antwort, im Stil Ihrer Kanzlei.",
		"l.why.4h": "Kein Hinterherlaufen bei Updates", "l.why.4p": "Mandanten rufen und mailen weniger wegen Updates — Lawsec übernimmt das, sodass Anwälte zur abrechenbaren Arbeit zurückkehren.",

		"l.ch.index": "04 — Kanäle",
		"l.ch.title": "Da, wo Ihre Mandanten ohnehin sind.",
		"l.ch.intro": "Keine neuen Apps, die Mandanten installieren müssen. Lawsec trifft sie auf den Kanälen, die sie täglich nutzen.",
		"l.ch.1h": "WhatsApp", "l.ch.1p": "Echtzeit-Gespräche dort, wo sich Mandanten am wohlsten fühlen — kurze Fragen, Erstaufnahme und Terminbuchung, alles im Chat.",
		"l.ch.2h": "E-Mail", "l.ch.2p": "Längere Anfragen mit derselben Intelligenz bearbeitet — formulierte, strukturierte Antworten und sauberes Nachfassen.",

		"l.ex.index": "05 — Was Lawsec beantworten kann",
		"l.ex.title": "Die Fragen, die Mandanten wirklich stellen.",
		"l.ex.intro": "Lawsec beantwortet die routinemäßigen, wiederkehrenden Fragen sofort — und eskaliert den Rest.",
		"l.ex.q1": "„Gibt es ein Update zu meinem Fall?“",
		"l.ex.q2": "„Hat das Gericht schon auf unsere Einreichung reagiert?“",
		"l.ex.q3": "„Wann ist mein nächster Termin?“",
		"l.ex.q4": "„Wie ist der Stand meines Antrags?“",
		"l.ex.q5": "„Welche Unterlagen muss ich noch senden?“",
		"l.ex.q6": "„Wie lange bis zum nächsten Schritt?“",
		"l.ex.q7": "„Kann mich heute jemand zurückrufen?“",
		"l.ex.q8": "„Was waren die Ergebnisse der letzten Woche?“",

		"l.faq.index": "06 — FAQ",
		"l.faq.title": "Gute Fragen.",
		"l.faq.intro": "Das, was Kanzleien uns vor dem Start am häufigsten fragen.",
		"l.faq.q1": "Werden Mandantendaten vertraulich und sicher behandelt? <span class=\"icon\">+</span>",
		"l.faq.a1": "Ja. Konversationen werden mit Blick auf Vertraulichkeit behandelt, der Zugriff ist beschränkt und jede Interaktion wird zur Nachvollziehbarkeit protokolliert. Wir konfigurieren die Datenverarbeitung und -aufbewahrung passend zu den Pflichten Ihrer Kanzlei.",
		"l.faq.q2": "Gibt Lawsec Rechtsberatung? <span class=\"icon\">+</span>",
		"l.faq.a2": "Nein. Lawsec handelt als Sekretär — es beantwortet informative und verfahrensbezogene Fragen, erfasst die Erstaufnahme und terminiert. Alles, was juristisches Urteilsvermögen erfordert, wird mit klaren Hinweisen an die Mandanten an eine qualifizierte Person Ihrer Kanzlei eskaliert.",
		"l.faq.q3": "Wie lange dauert die Einrichtung? <span class=\"icon\">+</span>",
		"l.faq.a3": "Die meisten Kanzleien sind innerhalb von ein paar Wochen live. Wir konfigurieren Lawsec mit den Informationen, dem Ton, den FAQs und dem Buchungsablauf Ihrer Kanzlei und testen gründlich vor dem Go-live.",
		"l.faq.q4": "Welche Sprachen werden unterstützt? <span class=\"icon\">+</span>",
		"l.faq.a4": "Lawsec kann in mehreren Sprachen kommunizieren und automatisch in der Sprache Ihrer Mandanten antworten, sodass Sie eine breitere Mandantschaft ohne zusätzliches Personal bedienen können.",
		"l.faq.q5": "Wie ist die Preisgestaltung? <span class=\"icon\">+</span>",
		"l.faq.a5": "Der Preis richtet sich nach Volumen und Kanälen Ihrer Kanzlei. Buchen Sie eine Demo und wir stellen einen klaren, transparenten Plan zusammen — keine Überraschungen.",
		"l.faq.q6": "Was passiert mit komplexen Angelegenheiten? <span class=\"icon\">+</span>",
		"l.faq.a6": "Lawsec erkennt, wenn etwas sensibel oder außerhalb des Rahmens liegt, und übergibt es mit einer strukturierten Zusammenfassung an die richtige Person Ihrer Kanzlei, damit nichts durchrutscht.",

		"l.cta.h2": "Verlieren Sie keine Mandanten mehr durch eine verpasste Nachricht.",
		"l.cta.p": "Erleben Sie in einer 30-minütigen, auf Ihre Kanzlei zugeschnittenen Demo, wie Lawsec antwortet, qualifiziert und bucht.",
		"l.cta.b1": "Demo buchen <span class=\"arrow\">→</span>",
		"l.cta.b2": "Zurück zu Epistemic",
		"l.cta.disc": "Lawsec ist ein Produkt der Epistemic LLC. Es leistet administrative Unterstützung, keine Rechtsberatung.",
		"l.foot.by": "von <a href=\"index.html\" style=\"border-bottom:1px solid var(--line-strong);\">Epistemic</a>",
		"l.foot.l1": "Epistemic Startseite", "l.foot.l2": "So funktioniert’s", "l.foot.l3": "Fähigkeiten", "l.foot.l4": "Demo buchen", "l.foot.l5": "Datenschutz", "l.foot.l6": "Nutzungsbedingungen",
		"l.foot.note": "© <span id=\"year\">2026</span> Epistemic LLC · Lawsec ist ein Produkt der Epistemic LLC · 30 N Gould St, STE R, Sheridan, WY 82801, USA",

		/* ================= CAREERS ================= */
		"c.nav.work": "Mit uns arbeiten",
		"c.eyebrow": "Karriere",
		"c.h1": "Bauen Sie die Systeme, die Menschen ihre Zeit zurückgeben.",
		"c.lead": "Wir bauen KI-Automatisierung für dokumenten- und prozesslastige Arbeit. Wenn Ihnen Präzision, verlässliche Umsetzung und messbare Ergebnisse wichtig sind, sollten wir reden.",
		"c.r1.h2": "Junior KI-Entwickler:in", "c.r1.tag": "Entwicklung",
		"c.r1.meta": "Schwerpunkt: Workflow-Automatisierung, Dokumentenverarbeitung, interne Tools",
		"c.r1.p": "Sie arbeiten Seite an Seite mit erfahrenen Entwickler:innen an der Umsetzung KI-gestützter Workflow-Automatisierung. Diese Rolle ist ideal für jemanden, der neugierig und detailorientiert ist und produktionsreife Systeme ausliefern möchte.",
		"c.r1.s1h": "Aufgaben",
		"c.r1.s1l1": "KI-Workflow-Komponenten unter Anleitung umsetzen und testen.",
		"c.r1.s1l2": "Skripte zur Datenextraktion, -validierung und Automatisierung für dokumentenlastige Abläufe bauen.",
		"c.r1.s1l3": "Bei Evaluierung, QA und Monitoring der Automatisierungsergebnisse unterstützen.",
		"c.r1.s1l4": "Zu internen Tools und Workflow-Dashboards beitragen.",
		"c.r1.s2h": "Was wir suchen",
		"c.r1.s2l1": "Sicherheit mit Python oder JavaScript und grundlegende API-Nutzung.",
		"c.r1.s2l2": "Interesse an KI-Systemen, Automatisierung und praxisnaher Technik.",
		"c.r1.s2l3": "Hohe Sorgfalt und eine Vorliebe für sauberen, lesbaren Code.",
		"c.r1.s2l4": "Fähigkeit, Fortschritte klar zu kommunizieren und gute Fragen zu stellen.",
		"c.r1.s3h": "Von Vorteil",
		"c.r1.s3l1": "Erfahrung mit Dokumenten-Parsing, OCR oder Datenpipelines.",
		"c.r1.s3l2": "Vertrautheit mit Automatisierungstools, Workflows oder RPA-Konzepten.",
		"c.r1.apply": "Für diese Stelle bewerben",
		"c.r1.note": "Fügen Sie einen Lebenslauf und eine kurze Notiz zu Ihrem Interesse bei.",
		"c.r2.h2": "Marketing-Praktikant:in", "c.r2.tag": "Go-to-Market",
		"c.r2.meta": "Schwerpunkt: B2B-Positionierung, Outbound-Kampagnen und Content-Unterstützung",
		"c.r2.p": "Sie unterstützen die Go-to-Market-Umsetzung für ein Premium-B2B-Automatisierungsstudio. Diese Rolle eignet sich am besten für jemanden, der organisiert und sprachlich präzise ist und lernen möchte, wie technische Dienstleister wachsen.",
		"c.r2.s1h": "Aufgaben",
		"c.r2.s1l1": "Outreach-Botschaften für relevante Fachteams entwerfen und verfeinern.",
		"c.r2.s1l2": "Content für Website, Briefings und fallstudienartige Materialien unterstützen.",
		"c.r2.s1l3": "Kampagnenlisten koordinieren und einfaches Performance-Tracking organisieren.",
		"c.r2.s1l4": "Bei Terminierung, Nachfassen und leichter Marktforschung unterstützen.",
		"c.r2.s2h": "Was wir suchen",
		"c.r2.s2l1": "Klare, prägnante Schreibfähigkeit und Sicherheit mit strukturierten Botschaften.",
		"c.r2.s2l2": "Interesse an B2B-Dienstleistungen, Automatisierung und modernen Abläufen.",
		"c.r2.s2l3": "Ausgeprägte Organisationsfähigkeit und Sorgfalt.",
		"c.r2.s2l4": "Bereitschaft zu lernen und schnell auf Feedback zu reagieren.",
		"c.r2.s3h": "Von Vorteil",
		"c.r2.s3l1": "Erfahrung mit CRM-Tools, E-Mail-Outreach oder Analytics-Dashboards.",
		"c.r2.s3l2": "Grundkenntnisse in B2B-SaaS oder professionellen Dienstleistungen.",
		"c.r2.apply": "Für diese Stelle bewerben",
		"c.r2.note": "Fügen Sie einen Lebenslauf und eine Schreibprobe oder einen Portfolio-Link bei.",
		"c.foot.back": "← Zurück zur Startseite",

		/* ================= PRIVACY ================= */
		"p.eyebrow": "Rechtliches",
		"p.h1": "Datenschutzerklärung",
		"p.product": "<strong>Produkt:</strong> Lawsec, ein Produkt der Epistemic LLC",
		"p.eff": "<strong>Gültig ab:</strong> 4. Juni 2026",
		"p.h2_1": "1. Einleitung",
		"p.p1": "Willkommen bei Lawsec. Wir respektieren Ihre Privatsphäre und verpflichten uns, sie durch die Einhaltung dieser Richtlinie zu schützen. Diese Datenschutzerklärung beschreibt die Arten von Informationen, die wir von Ihnen erfassen oder die Sie bereitstellen, wenn Sie das Produkt Lawsec nutzen, sowie unsere Praktiken zur Erfassung, Nutzung, Pflege, zum Schutz und zur Offenlegung dieser Informationen.",
		"p.h2_2": "2. Informationen, die wir erfassen",
		"p.p2": "Wir erfassen verschiedene Arten von Informationen von und über Nutzer von Lawsec, darunter:",
		"p.li2_1": "<strong>Personenbezogene Daten:</strong> Informationen, durch die Sie persönlich identifiziert werden können, wie Name, E-Mail-Adresse oder Telefonnummer.",
		"p.li2_2": "<strong>Nicht personenbezogene Daten:</strong> Informationen über Sie, die Sie nicht individuell identifizieren, wie Nutzungsdetails, IP-Adressen und nicht kontospezifische technische Daten.",
		"p.h2_3": "3. Wie wir Ihre Informationen nutzen",
		"p.p3": "Wir nutzen die von Ihnen erfassten oder bereitgestellten Informationen, einschließlich personenbezogener Daten:",
		"p.li3_1": "Um Ihnen Lawsec sowie dessen Inhalte und Dienste bereitzustellen.",
		"p.li3_2": "Um Ihnen Mitteilungen zu Ihrem Konto oder Abonnement zu senden.",
		"p.li3_3": "Um unsere Pflichten zu erfüllen und unsere Rechte aus zwischen Ihnen und uns geschlossenen Verträgen durchzusetzen.",
		"p.li3_4": "Um Sie über Änderungen an Lawsec oder über angebotene Produkte oder Dienste zu informieren.",
		"p.h2_4": "4. Datensicherheit",
		"p.p4": "Wir haben Maßnahmen umgesetzt, die Ihre personenbezogenen Daten vor versehentlichem Verlust sowie vor unbefugtem Zugriff, Nutzung, Änderung und Offenlegung schützen sollen. Die Übertragung von Informationen über das Internet ist jedoch nicht vollständig sicher. Obwohl wir unser Bestes tun, um Ihre personenbezogenen Daten zu schützen, können wir die Sicherheit der an Lawsec übermittelten Daten nicht garantieren.",
		"p.h2_5": "5. Änderungen unserer Datenschutzerklärung",
		"p.p5": "Es ist unsere Richtlinie, Änderungen unserer Datenschutzerklärung auf dieser Seite zu veröffentlichen. Wenn wir wesentliche Änderungen daran vornehmen, wie wir mit den personenbezogenen Daten unserer Nutzer umgehen, informieren wir Sie per E-Mail an die in Ihrem Konto angegebene primäre E-Mail-Adresse oder durch einen Hinweis im Produkt.",
		"p.h2_6": "6. Kontaktinformationen",
		"p.p6": "Für Fragen oder Anmerkungen zu dieser Datenschutzerklärung und unseren Datenschutzpraktiken kontaktieren Sie uns unter: <a href=\"mailto:privacy@epistemic.llc\">privacy@epistemic.llc</a>.",
		"p.foot.note": "© 2026 Epistemic LLC · Lawsec ist ein Produkt der Epistemic LLC",
		"p.foot.l2": "Nutzungsbedingungen", "p.foot.l3": "Epistemic Startseite",

		/* ================= TERMS ================= */
		"t.eyebrow": "Rechtliches",
		"t.h1": "Nutzungsbedingungen",
		"t.product": "<strong>Produkt:</strong> Lawsec, ein Produkt der Epistemic LLC",
		"t.eff": "<strong>Gültig ab:</strong> 4. Juni 2026",
		"t.h2_1": "1. Annahme der Nutzungsbedingungen",
		"t.p1a": "Diese Nutzungsbedingungen werden zwischen Ihnen und der Epistemic LLC („Epistemic“) geschlossen. Die folgenden Bedingungen regeln Ihren Zugang zu und Ihre Nutzung von Lawsec, einschließlich aller Inhalte, Funktionen und Dienste, die über Lawsec angeboten werden.",
		"t.p1b": "Durch die Nutzung des Produkts akzeptieren Sie diese Nutzungsbedingungen und erklären sich damit einverstanden, an sie gebunden zu sein. Wenn Sie diesen Nutzungsbedingungen nicht zustimmen möchten, dürfen Sie Lawsec nicht aufrufen oder nutzen.",
		"t.h2_2": "2. Änderungen der Nutzungsbedingungen",
		"t.p2": "Wir können diese Nutzungsbedingungen von Zeit zu Zeit nach eigenem Ermessen überarbeiten und aktualisieren. Alle Änderungen treten mit ihrer Veröffentlichung sofort in Kraft und gelten für jeden danach erfolgenden Zugang zu und jede Nutzung von Lawsec. Ihre fortgesetzte Nutzung des Produkts nach Veröffentlichung überarbeiteter Nutzungsbedingungen bedeutet, dass Sie die Änderungen akzeptieren.",
		"t.h2_3": "3. Zugang zum Produkt und Kontosicherheit",
		"t.p3": "Wir behalten uns das Recht vor, dieses Produkt sowie alle Dienste oder Materialien, die wir auf Lawsec bereitstellen, nach eigenem Ermessen ohne Vorankündigung zurückzuziehen oder zu ändern. Wir haften nicht, wenn Lawsec aus irgendeinem Grund ganz oder teilweise zu irgendeinem Zeitpunkt oder für einen bestimmten Zeitraum nicht verfügbar ist. Sie sind dafür verantwortlich, die Vertraulichkeit Ihrer Zugangsdaten zu wahren und für alle Aktivitäten unter Ihrem Konto.",
		"t.h2_4": "4. Art des Dienstes",
		"t.p4": "Lawsec leistet administrative und sekretarielle Unterstützung, einschließlich der Beantwortung routinemäßiger Anfragen, der Erfassung von Erstaufnahmen und der Terminvereinbarung. Lawsec bietet keine Rechtsberatung, begründet kein Mandatsverhältnis und ersetzt nicht das Urteil einer qualifizierten Rechtsfachkraft. Angelegenheiten, die juristisches Urteilsvermögen erfordern, werden an die zuständige Kanzlei eskaliert.",
		"t.h2_5": "5. Rechte an geistigem Eigentum",
		"t.p5": "Das Produkt und seine gesamten Inhalte, Funktionen und Funktionalitäten (einschließlich, aber nicht beschränkt auf alle Informationen, Software, Texte, Anzeigen, Bilder, Videos und Audio sowie deren Gestaltung, Auswahl und Anordnung) sind Eigentum der Epistemic LLC, ihrer Lizenzgeber oder anderer Anbieter solchen Materials und durch internationale Urheber-, Marken-, Patent-, Geschäftsgeheimnis- und sonstige Gesetze zum Schutz geistigen Eigentums geschützt.",
		"t.h2_6": "6. Unzulässige Nutzung",
		"t.p6": "Sie dürfen Lawsec ausschließlich für rechtmäßige Zwecke und gemäß diesen Nutzungsbedingungen verwenden. Sie verpflichten sich, das Produkt nicht zu nutzen:",
		"t.li6_1": "in einer Weise, die geltendes Bundes-, Landes-, lokales oder internationales Recht oder Vorschriften verletzt.",
		"t.li6_2": "zum Zweck der Ausbeutung oder Schädigung Minderjähriger in irgendeiner Weise.",
		"t.li6_3": "um Werbe- oder Verkaufsmaterial zu übertragen oder dessen Versand zu veranlassen, einschließlich „Junk-Mail“, „Kettenbriefen“, „Spam“ oder ähnlichen Aufforderungen.",
		"t.li6_4": "um sich als Epistemic, als Lawsec-Mitarbeiter:in, als andere Nutzer:in oder als andere Person oder Einrichtung auszugeben oder dies zu versuchen.",
		"t.h2_7": "7. Gewährleistungsausschluss",
		"t.p7": "Ihre Nutzung von Lawsec, dessen Inhalten und aller über das Produkt bezogenen Dienste oder Artikel erfolgt auf eigenes Risiko. Das Produkt wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung.",
		"t.h2_8": "8. Haftungsbeschränkung",
		"t.p8": "Soweit gesetzlich zulässig, haften die Epistemic LLC, ihre verbundenen Unternehmen oder deren Lizenzgeber, Dienstleister, Mitarbeitende, Vertreter, leitende Angestellte oder Direktoren in keinem Fall für Schäden jeglicher Art, unter jeglicher Rechtstheorie, die sich aus oder im Zusammenhang mit Ihrer Nutzung oder der Unmöglichkeit der Nutzung von Lawsec ergeben.",
		"t.h2_9": "9. Kontaktinformationen",
		"t.p9": "Alle Rückmeldungen, Kommentare, Anfragen für technischen Support und sonstige Mitteilungen zu Lawsec sind zu richten an: <a href=\"mailto:support@epistemic.llc\">support@epistemic.llc</a>.",
		"t.foot.note": "© 2026 Epistemic LLC · Lawsec ist ein Produkt der Epistemic LLC",
		"t.foot.l2": "Datenschutz", "t.foot.l3": "Epistemic Startseite",

		/* ---------- shared footer labels ---------- */
		"foot.ds": "Datenschutz",
		"foot.lawsecpriv": "Lawsec-Datenschutz",

		/* ================= LAWSEC — compliance band ================= */
		"l.comp.index": "Compliance",
		"l.comp.title": "Gebaut für deutschen Datenschutz.",
		"l.comp.intro": "Für deutsche Kanzleien entwickelt — DSGVO-konform, in Deutschland gehostet und mit in der EU betriebenen KI-Modellen.",
		"l.comp.1h": "DSGVO-konform", "l.comp.1p": "Von Grund auf nach der DSGVO (GDPR) gestaltet.",
		"l.comp.2h": "AVV / DPA", "l.comp.2p": "Wir schließen mit jeder Kanzlei einen Auftragsverarbeitungsvertrag (AVV / DPA).",
		"l.comp.3h": "DSFA-Unterstützung", "l.comp.3p": "Wir unterstützen Ihre Datenschutz-Folgenabschätzung (DSFA / DPIA) mit Dokumentation.",
		"l.comp.4h": "In Deutschland gehostet", "l.comp.4p": "Infrastruktur in Deutschland und der EU gehostet.",
		"l.comp.5h": "KI-Modelle aus der EU", "l.comp.5p": "Betrieben mit in der EU gehosteten KI-Modellen — Ihre Daten bleiben in Europa.",
		"l.comp.6h": "Vertraulich by Design", "l.comp.6p": "Verschlüsselt, zugriffsgesteuert und vollständig auditierbar.",

		/* ================= IMPRESSUM ================= */
		"im.eyebrow": "Rechtliches",
		"im.h1": "Impressum",
		"im.intro": "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
		"im.provider.h": "Diensteanbieter",
		"im.rep.h": "Vertreten durch",
		"im.rep.v": "Atlas Berk Polat",
		"im.contact.h": "Kontakt",
		"im.contact.phone": "Telefon: <a href=\"tel:+4915146280693\">+49 1514 6280693</a>",
		"im.reg.h": "Registereintrag",
		"im.reg.v": "Eingetragen als Limited Liability Company in Wyoming, USA. Das Unternehmen ist nicht im deutschen Handelsregister eingetragen.",
		"im.vat.h": "Umsatzsteuer-Identifikationsnummer",
		"im.vat.v": "USt-IdNr. gemäß § 27 a Umsatzsteuergesetz: nicht zutreffend.",
		"im.resp.h": "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
		"im.resp.v": "Atlas Berk Polat<br>30 N Gould St, STE R, Sheridan, WY 82801, USA",
		"im.odr.h": "EU-Streitschlichtung",
		"im.odr.v": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href=\"https://ec.europa.eu/consumers/odr/\" target=\"_blank\" rel=\"noopener\">https://ec.europa.eu/consumers/odr/</a>. Unsere E-Mail-Adresse finden Sie oben.",
		"im.cons.h": "Verbraucherstreitbeilegung",
		"im.cons.v": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
		"im.liab.h": "Haftung für Inhalte",
		"im.liab.v": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
		"im.links.h": "Haftung für Links",
		"im.links.v": "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
		"im.copy.h": "Urheberrecht",
		"im.copy.v": "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.",
		"im.foot.note": "© 2026 Epistemic LLC",

		/* ================= DATENSCHUTZ (website) ================= */
		"ds.eyebrow": "Rechtliches",
		"ds.h1": "Datenschutzerklärung",
		"ds.sub": "Diese Datenschutzerklärung gilt für die Website epistemic.llc. Die Datenschutzerklärung des Produkts Lawsec finden Sie auf einer separaten Seite.",
		"ds.eff": "Stand: 4. Juni 2026",
		"ds.s1h": "1. Verantwortlicher",
		"ds.s1p": "Verantwortlich für die Datenverarbeitung auf dieser Website ist die Epistemic LLC, 30 N Gould St, STE R, Sheridan, WY 82801, USA, E-Mail: <a href=\"mailto:privacy@epistemic.llc\">privacy@epistemic.llc</a>.",
		"ds.s2h": "2. Welche Daten wir verarbeiten",
		"ds.s2p": "Beim Besuch dieser Website verarbeitet unser Hosting-Provider technisch notwendige Server-Logdaten (z. B. IP-Adresse, Datum und Uhrzeit, abgerufene Seite, Browsertyp). Diese Daten sind zur sicheren Bereitstellung der Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO).",
		"ds.s3h": "3. Cookies",
		"ds.s3p": "Diese Website verwendet keine Tracking-Cookies. Es werden keine Analyse- oder Werbe-Cookies gesetzt.",
		"ds.s4h": "4. Dienste von Drittanbietern",
		"ds.s4p": "Diese Website lädt Schriftarten von Google Fonts und eine Terminbuchungs-Funktion von Calendly. Dabei können Daten (u. a. Ihre IP-Adresse) an diese Anbieter übertragen werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen finden Sie in den Datenschutzerklärungen von Google und Calendly.",
		"ds.s5h": "5. Hosting",
		"ds.s5p": "Die Website wird bei einem Dienstleister gehostet, der Daten in unserem Auftrag verarbeitet (Auftragsverarbeitung gemäß Art. 28 DSGVO).",
		"ds.s6h": "6. Ihre Rechte",
		"ds.s6p": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO). Wenden Sie sich hierzu an privacy@epistemic.llc.",
		"ds.s7h": "7. Beschwerderecht",
		"ds.s7p": "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.",
		"ds.s8h": "8. Kontakt",
		"ds.s8p": "Bei Fragen zum Datenschutz erreichen Sie uns unter <a href=\"mailto:privacy@epistemic.llc\">privacy@epistemic.llc</a>.",
		"ds.foot.note": "© 2026 Epistemic LLC"
	};

	var snap = new WeakMap();
	var snapped = false;

	function detect() {
		var saved = null;
		try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
		if (saved === "de" || saved === "en") return saved;
		var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
		return nav.indexOf("de") === 0 ? "de" : "en";
	}

	var lang = detect();

	function snapshot() {
		var els = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < els.length; i++) snap.set(els[i], els[i].innerHTML);
		snapped = true;
	}

	function apply(l) {
		if (!snapped) snapshot();
		var els = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < els.length; i++) {
			var el = els[i];
			var key = el.getAttribute("data-i18n");
			if (l === "de" && DE[key] != null) el.innerHTML = DE[key];
			else if (snap.has(el)) el.innerHTML = snap.get(el);
		}
		document.documentElement.setAttribute("lang", l);
		updateToggles(l);
		document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: l } }));
	}

	function updateToggles(l) {
		var spans = document.querySelectorAll(".lang-toggle [data-lang]");
		for (var i = 0; i < spans.length; i++) {
			spans[i].classList.toggle("is-active", spans[i].getAttribute("data-lang") === l);
		}
	}

	function setLang(l) {
		lang = l;
		try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
		apply(l);
	}

	window.EpiI18n = {
		setLang: setLang,
		apply: function () { apply(lang); },
		get lang() { return lang; }
	};

	function init() {
		snapshot();
		var spans = document.querySelectorAll(".lang-toggle [data-lang]");
		for (var i = 0; i < spans.length; i++) {
			(function (span) {
				span.addEventListener("click", function (e) {
					e.preventDefault();
					setLang(span.getAttribute("data-lang"));
				});
			})(spans[i]);
		}
		apply(lang);
	}

	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
	else init();
})();
