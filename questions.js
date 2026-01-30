const chapters = {
    "kapitel4": {
        title: "Kapitel 4 - Kontext der Organisation",
        questions: [
            {q: "Was versteht die ISO 9001 unter dem Kontext der Organisation?", topic: "Kontext", answers: [
                {text: "Die internen und externen Themen, die den Zweck und die strategische Ausrichtung beeinflussen", correct: true, feedback: "Richtig!"},
                {text: "Die Marktposition der Organisation", correct: false, feedback: "FALSCH: Marktposition ist nur EIN Teilaspekt des externen Kontexts."},
                {text: "Die wirtschaftliche Lage des Unternehmens", correct: false, feedback: "FALSCH: Wirtschaftliche Lage greift zu kurz - Kontext umfasst viel mehr (Kultur, Technologie, Recht etc.)"},
                {text: "Die Faktoren, die die Faehigkeit beeinflussen, beabsichtigte Ergebnisse zu erzielen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche internen Themen koennen im Sinne von Kapitel 4.1 relevant sein?", topic: "Kontext", answers: [
                {text: "Unternehmenskultur", correct: true, feedback: "Richtig!"},
                {text: "Organisationsstruktur", correct: true, feedback: "Richtig!"},
                {text: "Gesetzliche Anforderungen", correct: false, feedback: "FALSCH: Gesetzliche Anforderungen kommen von AUSSEN (Behoerden, Staat) und sind daher EXTERNE Themen!"},
                {text: "Verfuegbare Ressourcen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche externen Themen koennen den Kontext der Organisation beeinflussen?", topic: "Kontext", answers: [
                {text: "Technologische Entwicklungen", correct: true, feedback: "Richtig!"},
                {text: "Gesetzliche und behoerdliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Mitarbeiterqualifikationen", correct: false, feedback: "FALSCH: Mitarbeiterqualifikationen sind INTERN - die eigenen MA gehoeren zur Organisation!"},
                {text: "Markt- und Wettbewerbsbedingungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was fordert die ISO 9001 in Bezug auf den Kontext der Organisation?", topic: "Kontext", answers: [
                {text: "Der Kontext muss bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Der Kontext muss dokumentiert sein", correct: false, feedback: "FALSCH: Dokumentation ist NICHT explizit gefordert - die Norm sagt nur 'bestimmen'."},
                {text: "Der Kontext muss ueberwacht und ueberprueft werden", correct: true, feedback: "Richtig!"},
                {text: "Der Kontext muss jaehrlich aktualisiert werden", correct: false, feedback: "FALSCH: 'Jaehrlich' ist eine Erfindung - die Norm nennt keine festen Intervalle!"}
            ]},
            {q: "Was versteht die ISO 9001 unter interessierten Parteien?", topic: "Interessierte Parteien", answers: [
                {text: "Organisationen oder Personen, die Entscheidungen der Organisation beeinflussen koennen", correct: true, feedback: "Richtig!"},
                {text: "Organisationen oder Personen, die von Entscheidungen der Organisation betroffen sind", correct: true, feedback: "Richtig!"},
                {text: "Ausschliesslich Kunden und Lieferanten", correct: false, feedback: "FALSCH: 'Ausschliesslich' ist zu eng! Auch Behoerden, Mitarbeiter, Eigentuemer etc. koennen interessierte Parteien sein."},
                {text: "Organisationen oder Personen mit relevanten Anforderungen an das QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Anforderungen an interessierte Parteien sind normkonform?", topic: "Interessierte Parteien", answers: [
                {text: "Relevante interessierte Parteien muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Alle interessierten Parteien muessen beruecksichtigt werden", correct: false, feedback: "FALSCH: Die Norm sagt 'RELEVANTE', nicht 'ALLE'!"},
                {text: "Anforderungen relevanter interessierter Parteien muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen muessen regelmaessig ueberprueft werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche interessierten Parteien sind typischerweise relevant?", topic: "Interessierte Parteien", answers: [
                {text: "Kunden", correct: true, feedback: "Richtig!"},
                {text: "Lieferanten", correct: true, feedback: "Richtig!"},
                {text: "Gesetzgeber und Behoerden", correct: true, feedback: "Richtig!"},
                {text: "Wettbewerber", correct: false, feedback: "FALSCH: Wettbewerber haben normalerweise keine direkten Anforderungen an das QMS."}
            ]},
            {q: "Was fordert Kapitel 4.2 im Hinblick auf Anforderungen interessierter Parteien?", topic: "Interessierte Parteien", answers: [
                {text: "Relevante Anforderungen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Alle Anforderungen muessen erfuellt werden", correct: false, feedback: "FALSCH: Nur RELEVANTE Anforderungen erfuellen!"},
                {text: "Anforderungen muessen ueberwacht und ueberprueft werden", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen muessen dokumentiert sein", correct: false, feedback: "FALSCH: Dokumentation ist nicht explizit gefordert."}
            ]},
            {q: "Was beschreibt der Anwendungsbereich des Qualitaetsmanagementsystems?", topic: "Anwendungsbereich", answers: [
                {text: "Die Grenzen und Anwendbarkeit des QMS", correct: true, feedback: "Richtig!"},
                {text: "Die organisatorische Aufbauorganisation", correct: false, feedback: "FALSCH: Aufbauorganisation ist kein Bestandteil des Anwendungsbereichs."},
                {text: "Die Produkte und Dienstleistungen der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Die Standorte der Organisation", correct: false, feedback: "FALSCH: Standorte gehoeren nur dazu, wenn sie im Anwendungsbereich enthalten sind."}
            ]},
            {q: "Welche Aussagen zum Anwendungsbereich des QMS sind richtig?", topic: "Anwendungsbereich", answers: [
                {text: "Der Anwendungsbereich muss als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen der Norm duerfen ausgeschlossen werden", correct: true, feedback: "Richtig!"},
                {text: "Ausschluesse duerfen die Konformitaet von Produkten und Dienstleistungen nicht beeintraechtigen", correct: true, feedback: "Richtig!"},
                {text: "Der Anwendungsbereich muss exakt der Normstruktur folgen", correct: false, feedback: "FALSCH: Die Organisation kann den Anwendungsbereich FREI strukturieren!"}
            ]},
            {q: "Welche Normanforderungen duerfen ausgeschlossen werden?", topic: "Anwendungsbereich", answers: [
                {text: "Anforderungen aus Kapitel 4", correct: false, feedback: "FALSCH: Kapitel 4, 5 und 6 duerfen NIEMALS ausgeschlossen werden!"},
                {text: "Anforderungen, die aufgrund der Art der Produkte und Dienstleistungen nicht anwendbar sind", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen, deren Ausschluss begruendet ist", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen, die die Konformitaet nicht beeinflussen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was fordert ISO 9001 Kapitel 4.4 in Bezug auf Prozesse?", topic: "Prozesse", answers: [
                {text: "Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Wechselwirkungen der Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse muessen dokumentiert werden", correct: false, feedback: "FALSCH: Die Norm fordert NICHT, dass alle Prozesse dokumentiert werden! Nur 'soweit erforderlich'."},
                {text: "Kriterien und Methoden zur Prozesssteuerung muessen festgelegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Elemente gehoeren zur Bestimmung von Prozessen?", topic: "Prozesse", answers: [
                {text: "Eingaben und Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Reihenfolge und Wechselwirkungen", correct: true, feedback: "Richtig!"},
                {text: "Verantwortlichkeiten und Befugnisse", correct: true, feedback: "Richtig!"},
                {text: "Detaillierte Arbeitsanweisungen", correct: false, feedback: "FALSCH: 'Detaillierte' Arbeitsanweisungen sind NICHT gefordert."}
            ]},
            {q: "Was fordert die Norm hinsichtlich der Prozessueberwachung?", topic: "Prozesse", answers: [
                {text: "Prozesse muessen ueberwacht werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse muessen gemessen werden", correct: true, feedback: "Richtig!"},
                {text: "Geeignete Methoden muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Alle Prozesse muessen permanent gemessen werden", correct: false, feedback: "FALSCH: 'Permanent' und 'alle' steht NICHT in der Norm!"}
            ]},
            {q: "Welche Anforderungen gelten fuer Ressourcen im Rahmen der Prozesse?", topic: "Prozesse", answers: [
                {text: "Erforderliche Ressourcen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Ressourcen muessen dokumentiert werden", correct: false, feedback: "FALSCH: Dokumentation nicht pauschal gefordert."},
                {text: "Ressourcen muessen bereitgestellt werden", correct: true, feedback: "Richtig!"},
                {text: "Ressourcen muessen jaehrlich ueberprueft werden", correct: false, feedback: "FALSCH: 'Jaehrlich' ist erfunden - die Norm nennt keine festen Zeitintervalle!"}
            ]},
            {q: "Welche Rolle spielen Risiken und Chancen im Prozessansatz?", topic: "Prozesse", answers: [
                {text: "Risiken und Chancen muessen im Zusammenhang mit Prozessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Risiken muessen vollstaendig dokumentiert werden", correct: false, feedback: "FALSCH: 'Vollstaendig dokumentieren' fordert die Norm NICHT."},
                {text: "Massnahmen zum Umgang mit Risiken und Chancen muessen geplant werden", correct: true, feedback: "Richtig!"},
                {text: "Risiken ersetzen die Prozessueberwachung", correct: false, feedback: "FALSCH: Risiken ERGAENZEN die Ueberwachung, sie ersetzen sie nicht!"}
            ]},
            {q: "Welche Aussagen zur Aufrechterhaltung des QMS sind richtig?", topic: "Prozesse", answers: [
                {text: "Das QMS muss eingefuehrt werden", correct: true, feedback: "Richtig!"},
                {text: "Das QMS muss aufrechterhalten werden", correct: true, feedback: "Richtig!"},
                {text: "Das QMS muss fortlaufend verbessert werden", correct: true, feedback: "Richtig!"},
                {text: "Das QMS muss zertifiziert sein", correct: false, feedback: "FALSCH: Zertifizierung ist FREIWILLIG! Die Norm fordert ein funktionierendes QMS, keine Zertifizierung."}
            ]},
            {q: "Was bedeutet Wirksamkeit im Sinne des QMS?", topic: "Prozesse", answers: [
                {text: "Erreichen der beabsichtigten Ergebnisse", correct: true, feedback: "Richtig! Das ist die ISO 9000 Definition."},
                {text: "Einhaltung aller internen Regelungen", correct: false, feedback: "FALSCH: Regelungen einhalten ist Konformitaet, nicht Wirksamkeit."},
                {text: "Konformitaet mit Kundenanforderungen", correct: false, feedback: "FALSCH: Kundenkonformitaet ist ein Teilziel."},
                {text: "Wirtschaftlicher Erfolg der Organisation", correct: false, feedback: "FALSCH: Wirtschaftserfolg ist Effizienz, nicht Wirksamkeit."}
            ]},
            {q: "Welche Aussagen zur Dokumentation in Kapitel 4 sind richtig?", topic: "Dokumentation", answers: [
                {text: "Der Anwendungsbereich muss dokumentiert sein", correct: true, feedback: "Richtig!"},
                {text: "Prozesse muessen dokumentiert sein", correct: false, feedback: "FALSCH: NICHT alle Prozesse dokumentieren - nur soweit erforderlich."},
                {text: "Informationen zur Prozesssteuerung muessen verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert ein QM-Handbuch", correct: false, feedback: "FALSCH: QM-Handbuch ist seit 2015 NICHT mehr gefordert!"}
            ]},
            {q: "Welche Zielsetzung verfolgt Kapitel 4 der ISO 9001 hauptsaechlich?", topic: "Kontext", answers: [
                {text: "Verstaendnis des organisatorischen Umfelds", correct: true, feedback: "Richtig!"},
                {text: "Festlegung der Fuehrungsverantwortung", correct: false, feedback: "FALSCH: Fuehrung wird in Kapitel 5 behandelt, nicht Kapitel 4."},
                {text: "Aufbau einer stabilen Grundlage fuer das QMS", correct: true, feedback: "Richtig!"},
                {text: "Erfuellung aller Kundenanforderungen", correct: false, feedback: "FALSCH: Kundenanforderungen werden in Kapitel 8 behandelt."}
            ]},
            {q: "Welche Aussagen zur regelmaessigen Ueberpruefung des Kontextes sind richtig?", topic: "Kontext", answers: [
                {text: "Der Kontext muss regelmaessig ueberwacht werden", correct: true, feedback: "Richtig!"},
                {text: "Der Kontext muss regelmaessig ueberprueft werden", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert eine jaehrliche Kontextanalyse", correct: false, feedback: "FALSCH: 'Jaehrlich' steht NIRGENDS in der Norm!"},
                {text: "Aenderungen des Kontextes koennen Auswirkungen auf das QMS haben", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Beziehung besteht zwischen Kontext und Risiken/Chancen?", topic: "Kontext", answers: [
                {text: "Der Kontext liefert Eingaben zur Bestimmung von Risiken und Chancen", correct: true, feedback: "Richtig!"},
                {text: "Risiken und Chancen sind unabhaengig vom Kontext zu betrachten", correct: false, feedback: "FALSCH: Sie sind eng verknuepft! Aus dem Kontext ERGEBEN sich Risiken."},
                {text: "Aenderungen im Kontext koennen neue Risiken oder Chancen erzeugen", correct: true, feedback: "Richtig!"},
                {text: "Risiken ersetzen die Kontextanalyse", correct: false, feedback: "FALSCH: Beide sind noetig, keins ersetzt das andere."}
            ]},
            {q: "Welche Aussagen zur Bestimmung interessierter Parteien sind normkonform?", topic: "Interessierte Parteien", answers: [
                {text: "Die Organisation bestimmt selbst, welche Parteien relevant sind", correct: true, feedback: "Richtig!"},
                {text: "Alle Stakeholder muessen beruecksichtigt werden", correct: false, feedback: "FALSCH: Nur RELEVANTE, nicht alle!"},
                {text: "Relevanz ergibt sich aus Einfluss auf die Faehigkeit, konforme Produkte bereitzustellen", correct: true, feedback: "Richtig!"},
                {text: "Interessierte Parteien sind identisch mit Kunden", correct: false, feedback: "FALSCH: Kunden sind nur EINE von vielen interessierten Parteien."}
            ]},
            {q: "Welche Informationen zum Anwendungsbereich muessen enthalten sein?", topic: "Anwendungsbereich", answers: [
                {text: "Die Grenzen des QMS", correct: true, feedback: "Richtig!"},
                {text: "Die Anwendbarkeit des QMS", correct: true, feedback: "Richtig!"},
                {text: "Begruendungen fuer nicht anwendbare Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Eine detaillierte Beschreibung aller Prozesse", correct: false, feedback: "FALSCH: Der Anwendungsbereich nennt nur WAS enthalten ist, nicht WIE die Prozesse funktionieren."}
            ]},
            {q: "Welche Aussagen zu dokumentierten Informationen in Kapitel 4 sind richtig?", topic: "Dokumentation", answers: [
                {text: "Der Anwendungsbereich muss als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "Die Prozesslandschaft muss zwingend dokumentiert sein", correct: false, feedback: "FALSCH: 'Zwingend' ist falsch - die Form ist frei waehlbar."},
                {text: "Informationen zur Prozesssteuerung muessen verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert ein Qualitaetsmanagementhandbuch", correct: false, feedback: "FALSCH: QM-Handbuch wurde 2015 aus der Norm GESTRICHEN!"}
            ]},
            {q: "Welche Analysemethode ist zur Bestimmung externer Themen nach Kapitel 4.1 geeignet?", topic: "Kontext", answers: [
                {text: "PESTEL-Analyse (Political, Economic, Social, Technological, Environmental, Legal)", correct: true, feedback: "Richtig!"},
                {text: "SWOT-Analyse", correct: true, feedback: "Richtig!"},
                {text: "Organigramm-Analyse", correct: false, feedback: "FALSCH: Ein Organigramm zeigt nur die INTERNE Struktur, nicht externe Themen!"},
                {text: "Stakeholder-Analyse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Faktoren werden in einer SWOT-Analyse betrachtet?", topic: "Kontext", answers: [
                {text: "Staerken (Strengths) - intern", correct: true, feedback: "Richtig!"},
                {text: "Schwaechen (Weaknesses) - intern", correct: true, feedback: "Richtig!"},
                {text: "Chancen (Opportunities) - extern", correct: true, feedback: "Richtig!"},
                {text: "Risiken (Threats) - extern", correct: true, feedback: "Richtig! ALLE 4 sind korrekt!"}
            ]},
            {q: "Was ist ein Turtle-Diagramm?", topic: "Prozesse", answers: [
                {text: "Eine Methode zur Prozessvisualisierung", correct: true, feedback: "Richtig!"},
                {text: "Ein Werkzeug zur Darstellung von Prozesselementen (Eingaben, Ausgaben, Ressourcen, Methoden, Kennzahlen, Verantwortliche)", correct: true, feedback: "Richtig!"},
                {text: "Ein Ersatz fuer die Prozesslandkarte", correct: false, feedback: "FALSCH: Turtle ERGAENZT die Prozesslandkarte, ersetzt sie aber nicht."},
                {text: "Eine Methode zur Auditplanung", correct: false, feedback: "FALSCH: Primaer fuer Prozessanalyse, nicht Audits."}
            ]},
            {q: "Was bedeutet dokumentierte Information aufrechterhalten im Sinne der ISO 9001?", topic: "Dokumentation", answers: [
                {text: "Dokumente aktuell halten (Vorgabedokumente wie Anweisungen, Richtlinien)", correct: true, feedback: "Richtig! 'Aufrechterhalten' = Vorgaben aktuell halten."},
                {text: "Dokumente archivieren", correct: false, feedback: "FALSCH: Das ist 'AUFBEWAHREN', nicht aufrechterhalten!"},
                {text: "Nachweise aufbewahren", correct: false, feedback: "FALSCH: Das ist 'AUFBEWAHREN'!"},
                {text: "Dokumente an Mitarbeiter verteilen", correct: false, feedback: "FALSCH: Das ist keine Normdefinition."}
            ]},
            {q: "Was bedeutet dokumentierte Information aufbewahren im Sinne der ISO 9001?", topic: "Dokumentation", answers: [
                {text: "Dokumente aktuell halten", correct: false, feedback: "FALSCH: Das ist 'AUFRECHTERHALTEN'!"},
                {text: "Nachweise/Aufzeichnungen archivieren (z.B. Pruefprotokolle, Auditberichte)", correct: true, feedback: "Richtig! 'Aufbewahren' = Nachweise archivieren."},
                {text: "Vorgabedokumente erstellen", correct: false, feedback: "FALSCH: Das ist keine Normdefinition fuer diesen Begriff."},
                {text: "Dokumente vor unbefugtem Zugriff schuetzen", correct: false, feedback: "FALSCH: Das ist keine Normdefinition fuer diesen Begriff."}
            ]},
            {q: "Welche Prozessarten werden im QMS typischerweise unterschieden?", topic: "Prozesse", answers: [
                {text: "Fuehrungsprozesse (Managementprozesse)", correct: true, feedback: "Richtig!"},
                {text: "Kernprozesse (Wertschoepfungsprozesse)", correct: true, feedback: "Richtig!"},
                {text: "Unterstuetzungsprozesse (Stuetzprozesse)", correct: true, feedback: "Richtig!"},
                {text: "Kontrollprozesse", correct: false, feedback: "FALSCH: 'Kontrollprozesse' ist keine gaengige Kategorie!"}
            ]},
            {q: "Was zeigt eine Prozesslandkarte?", topic: "Prozesse", answers: [
                {text: "Die Uebersicht aller Prozesse der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Die Wechselwirkungen zwischen den Prozessen", correct: true, feedback: "Richtig!"},
                {text: "Detaillierte Arbeitsanweisungen fuer jeden Prozess", correct: false, feedback: "FALSCH: Die Prozesslandkarte zeigt die UEBERSICHT, nicht die Details!"},
                {text: "Die Zuordnung zu Fuehrungs-, Kern- und Unterstuetzungsprozessen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Kennzahlen sind zur Prozessbewertung nach ISO 9001 geeignet?", topic: "Prozesse", answers: [
                {text: "Durchlaufzeit eines Prozesses", correct: true, feedback: "Richtig!"},
                {text: "Fehlerquote / Ausschussrate", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig!"},
                {text: "Boersenkurs des Unternehmens", correct: false, feedback: "FALSCH: Der Boersenkurs ist KEINE Prozesskennzahl!"}
            ]},
            {q: "Welche interessierten Parteien hat typischerweise ein produzierendes Unternehmen?", topic: "Interessierte Parteien", answers: [
                {text: "Kunden und Endverbraucher", correct: true, feedback: "Richtig!"},
                {text: "Lieferanten und externe Dienstleister", correct: true, feedback: "Richtig!"},
                {text: "Mitarbeiter und Gewerkschaften", correct: true, feedback: "Richtig!"},
                {text: "Behoerden (Gewerbeaufsicht, Umweltamt) und Gesetzgeber", correct: true, feedback: "Richtig! ALLE sind interessierte Parteien."}
            ]},
            {q: "Was ist die High Level Structure (HLS)?", topic: "Kontext", answers: [
                {text: "Eine einheitliche Grundstruktur fuer alle ISO-Managementsystemnormen", correct: true, feedback: "Richtig!"},
                {text: "Die Kapitelstruktur 1-10, die ISO 9001, 14001, 45001 etc. gemeinsam haben", correct: true, feedback: "Richtig!"},
                {text: "Eine Vorgabe nur fuer die ISO 9001", correct: false, feedback: "FALSCH: Die HLS gilt fuer ALLE ISO-Managementsystemnormen!"},
                {text: "Sie erleichtert die Integration mehrerer Managementsysteme", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "kapitel5": {
        title: "Kapitel 5 - Fuehrung",
        questions: [
            {q: "Wer traegt die Gesamtverantwortung fuer die Wirksamkeit des QMS?", topic: "Fuehrung", answers: [
                {text: "Der Qualitaetsmanagementbeauftragte", correct: false, feedback: "FALSCH: Der QMB unterstuetzt nur, traegt aber nicht die Gesamtverantwortung!"},
                {text: "Die oberste Leitung", correct: true, feedback: "Richtig!"},
                {text: "Die Qualitaetsabteilung", correct: false, feedback: "FALSCH: Die Q-Abteilung ist ausfuehrend, nicht verantwortlich."},
                {text: "Jeder einzelne Mitarbeiter", correct: false, feedback: "FALSCH: MA tragen Teilverantwortung, aber nicht die GESAMT-Verantwortung."}
            ]},
            {q: "Welche Aufgaben hat die oberste Leitung bezueglich des QMS?", topic: "Fuehrung", answers: [
                {text: "Rechenschaftspflicht fuer die Wirksamkeit des QMS uebernehmen", correct: true, feedback: "Richtig!"},
                {text: "Die Qualitaetspolitik festlegen", correct: true, feedback: "Richtig!"},
                {text: "Alle internen Audits persoenlich durchfuehren", correct: false, feedback: "FALSCH: Die oberste Leitung muss Audits NICHT selbst durchfuehren!"},
                {text: "Die Verfuegbarkeit der erforderlichen Ressourcen sicherstellen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet Rechenschaftspflicht der obersten Leitung?", topic: "Fuehrung", answers: [
                {text: "Sie muss das QMS selbst dokumentieren", correct: false, feedback: "FALSCH: Dokumentieren koennen andere - aber die VERANTWORTUNG bleibt oben!"},
                {text: "Sie traegt die Verantwortung fuer die Ergebnisse des QMS", correct: true, feedback: "Richtig!"},
                {text: "Sie kann die Verantwortung nicht delegieren", correct: true, feedback: "Richtig!"},
                {text: "Sie muss bei Audits persoenlich anwesend sein", correct: false, feedback: "FALSCH: Persoenliche Anwesenheit bei Audits ist NICHT gefordert."}
            ]},
            {q: "Die oberste Leitung muss sicherstellen, dass das QMS...", topic: "Fuehrung", answers: [
                {text: "in die Geschaeftsprozesse integriert wird", correct: true, feedback: "Richtig!"},
                {text: "als separate Einheit neben dem Tagesgeschaeft existiert", correct: false, feedback: "FALSCH: Das QMS soll INTEGRIERT sein, nicht separat!"},
                {text: "die beabsichtigten Ergebnisse erreicht", correct: true, feedback: "Richtig!"},
                {text: "von einem externen Berater gesteuert wird", correct: false, feedback: "FALSCH: Die Steuerung liegt INTERN bei der obersten Leitung."}
            ]},
            {q: "Was muss die oberste Leitung in Bezug auf Personen im QMS tun?", topic: "Fuehrung", answers: [
                {text: "Personen anleiten und unterstuetzen", correct: true, feedback: "Richtig!"},
                {text: "Alle Mitarbeiter selbst schulen", correct: false, feedback: "FALSCH: Die oberste Leitung muss NICHT selbst schulen!"},
                {text: "Personen zu Beitraegen zur Wirksamkeit des QMS anregen", correct: true, feedback: "Richtig!"},
                {text: "Die Verbesserung foerdern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie soll die oberste Leitung andere Fuehrungskraefte unterstuetzen?", topic: "Fuehrung", answers: [
                {text: "Deren Fuehrungsrolle in deren Verantwortungsbereichen unterstuetzen", correct: true, feedback: "Richtig!"},
                {text: "Alle Entscheidungen fuer sie treffen", correct: false, feedback: "FALSCH: Fuehrungskraefte sollen EIGENE Entscheidungen treffen!"},
                {text: "Ihnen keine eigene Verantwortung uebertragen", correct: false, feedback: "FALSCH: Verantwortung MUSS delegiert werden!"},
                {text: "Fuehrung als gemeinsame Aufgabe verstehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was fordert die Norm bezueglich Kundenorientierung von der obersten Leitung?", topic: "Fuehrung", answers: [
                {text: "Kundenanforderungen werden ermittelt und erfuellt", correct: true, feedback: "Richtig!"},
                {text: "Nur schriftliche Kundenanforderungen beruecksichtigen", correct: false, feedback: "FALSCH: ALLE Kundenanforderungen zaehlen - auch muendliche, implizite und gesetzliche!"},
                {text: "Risiken und Chancen, die die Konformitaet beeinflussen, werden bestimmt", correct: true, feedback: "Richtig!"},
                {text: "Der Fokus auf Erhoehung der Kundenzufriedenheit wird aufrechterhalten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Anforderungen muessen neben Kundenanforderungen beruecksichtigt werden?", topic: "Fuehrung", answers: [
                {text: "Gesetzliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Behoerdliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen der Wettbewerber", correct: false, feedback: "FALSCH: Wettbewerber stellen keine ANFORDERUNGEN an das Unternehmen!"},
                {text: "Anforderungen, die die Organisation selbst festlegt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kundenorientierung nach ISO 9001:2015 bedeutet...", topic: "Fuehrung", answers: [
                {text: "nur die Erfuellung von Kundenanforderungen", correct: false, feedback: "FALSCH: 'Nur erfuellen' reicht nicht - das Ziel ist ERHOEHUNG der Zufriedenheit!"},
                {text: "die Erhoehung der Kundenzufriedenheit als Schwerpunkt", correct: true, feedback: "Richtig!"},
                {text: "ausschliesslich die Bearbeitung von Reklamationen", correct: false, feedback: "FALSCH: Reklamationen sind reaktiv - Kundenorientierung ist PROAKTIV!"},
                {text: "das Verstehen aktueller UND zukuenftiger Kundenbeduerfnisse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer ist verantwortlich fuer die Festlegung der Qualitaetspolitik?", topic: "Qualitaetspolitik", answers: [
                {text: "Der Qualitaetsmanagementbeauftragte", correct: false, feedback: "FALSCH: Der QMB kann unterstuetzen, aber die VERANTWORTUNG liegt bei der obersten Leitung!"},
                {text: "Die oberste Leitung", correct: true, feedback: "Richtig!"},
                {text: "Die Qualitaetsabteilung", correct: false, feedback: "FALSCH: Q-Abteilung ist ausfuehrend."},
                {text: "Ein externer Berater", correct: false, feedback: "FALSCH: Externe koennen beraten, aber nicht verantwortlich sein."}
            ]},
            {q: "Die Qualitaetspolitik muss...", topic: "Qualitaetspolitik", answers: [
                {text: "fuer den Zweck und Kontext der Organisation angemessen sein", correct: true, feedback: "Richtig!"},
                {text: "einen Rahmen zum Festlegen von Qualitaetszielen bieten", correct: true, feedback: "Richtig!"},
                {text: "eine Verpflichtung zur Erfuellung zutreffender Anforderungen enthalten", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich komplett neu geschrieben werden", correct: false, feedback: "FALSCH: Die Q-Politik muss NICHT jaehrlich neu geschrieben werden!"}
            ]},
            {q: "Welche Verpflichtungen muss die Qualitaetspolitik enthalten?", topic: "Qualitaetspolitik", answers: [
                {text: "Verpflichtung zur Erfuellung zutreffender Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Verpflichtung zur fortlaufenden Verbesserung des QMS", correct: true, feedback: "Richtig!"},
                {text: "Verpflichtung zur Gewinnmaximierung", correct: false, feedback: "FALSCH: Gewinnmaximierung ist KEIN Norminhalt!"},
                {text: "Verpflichtung zur Kundenzufriedenheit", correct: false, feedback: "FALSCH: Kundenzufriedenheit ist Ziel, aber keine explizit geforderte VERPFLICHTUNG in der Politik."}
            ]},
            {q: "Was bedeutet 'Rahmen fuer Qualitaetsziele' in der Q-Politik?", topic: "Qualitaetspolitik", answers: [
                {text: "Die Q-Politik gibt die Richtung vor, aus der Q-Ziele abgeleitet werden", correct: true, feedback: "Richtig!"},
                {text: "Die Q-Politik muss alle Q-Ziele konkret benennen", correct: false, feedback: "FALSCH: Die Politik gibt den RAHMEN, nicht die konkreten Ziele!"},
                {text: "Q-Ziele muessen zur Q-Politik passen", correct: true, feedback: "Richtig!"},
                {text: "Die Q-Politik ersetzt die Q-Ziele", correct: false, feedback: "FALSCH: Politik und Ziele sind BEIDE noetig!"}
            ]},
            {q: "Welche Aussagen zur Bekanntmachung der Q-Politik sind richtig?", topic: "Qualitaetspolitik", answers: [
                {text: "Sie muss als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "Sie muss innerhalb der Organisation bekannt gemacht werden", correct: true, feedback: "Richtig!"},
                {text: "Sie muss allen Mitarbeitern als Papierdokument ausgehaendigt werden", correct: false, feedback: "FALSCH: Die FORM ist frei waehlbar! Papier, Intranet, Aushang - alles erlaubt."},
                {text: "Sie muss fuer relevante interessierte Parteien verfuegbar sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Qualitaetspolitik muss verstanden und angewendet werden. Was bedeutet das?", topic: "Qualitaetspolitik", answers: [
                {text: "Mitarbeiter muessen die Q-Politik woertlich auswendig kennen", correct: false, feedback: "FALSCH: Auswendiglernen ist NICHT gefordert - VERSTEHEN ist wichtiger!"},
                {text: "Mitarbeiter muessen wissen, wie sie zur Q-Politik beitragen", correct: true, feedback: "Richtig!"},
                {text: "Die Q-Politik muss im Arbeitsalltag gelebt werden", correct: true, feedback: "Richtig!"},
                {text: "Nur Fuehrungskraefte muessen die Q-Politik kennen", correct: false, feedback: "FALSCH: ALLE relevanten Personen muessen sie kennen!"}
            ]},
            {q: "Wann muss die Qualitaetspolitik ueberprueft werden?", topic: "Qualitaetspolitik", answers: [
                {text: "Einmal jaehrlich verpflichtend", correct: false, feedback: "FALSCH: 'Jaehrlich' steht NICHT in der Norm!"},
                {text: "Bei der Managementbewertung auf fortlaufende Eignung", correct: true, feedback: "Richtig!"},
                {text: "Bei wesentlichen Aenderungen des Kontexts", correct: true, feedback: "Richtig!"},
                {text: "Nur wenn der Zertifizierer es fordert", correct: false, feedback: "FALSCH: Die Organisation entscheidet selbst!"}
            ]},
            {q: "Was fordert die ISO 9001:2015 bezueglich des QMB?", topic: "Verantwortlichkeiten", answers: [
                {text: "Ein QMB muss explizit benannt werden", correct: false, feedback: "FALSCH seit 2015: Der Begriff 'QMB' wurde GESTRICHEN!"},
                {text: "Der QMB muss Mitglied der obersten Leitung sein", correct: false, feedback: "FALSCH: Es gibt keine Vorgabe mehr zur Person."},
                {text: "Die Funktion QMB ist nicht mehr explizit gefordert", correct: true, feedback: "Richtig!"},
                {text: "Die Verantwortlichkeiten muessen dennoch zugewiesen werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Verantwortlichkeiten muessen laut Kapitel 5.3 zugewiesen werden?", topic: "Verantwortlichkeiten", answers: [
                {text: "Sicherstellen, dass das QMS die Anforderungen der Norm erfuellt", correct: true, feedback: "Richtig!"},
                {text: "Sicherstellen, dass Prozesse die beabsichtigten Ergebnisse liefern", correct: true, feedback: "Richtig!"},
                {text: "Berichten ueber die Leistung des QMS an die oberste Leitung", correct: true, feedback: "Richtig!"},
                {text: "Alle Dokumente persoenlich freigeben", correct: false, feedback: "FALSCH: Dokumentenfreigabe kann delegiert werden!"}
            ]},
            {q: "Der GF eines Unternehmens mit 5 Mitarbeitern moechte die QM-Verantwortung selbst uebernehmen. Ist das normkonform?", topic: "Verantwortlichkeiten", answers: [
                {text: "Nein, es muss immer ein separater QMB benannt werden", correct: false, feedback: "FALSCH: Seit 2015 ist kein separater QMB mehr gefordert!"},
                {text: "Ja, das ist zulaessig", correct: true, feedback: "Richtig!"},
                {text: "Nur mit Genehmigung der Zertifizierungsstelle", correct: false, feedback: "FALSCH: Die Organisation entscheidet selbst."},
                {text: "Ja, besonders in kleinen Organisationen ist das ueblich", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Verantwortung und Befugnis?", topic: "Verantwortlichkeiten", answers: [
                {text: "Verantwortung = Pflicht, fuer Ergebnisse einzustehen", correct: true, feedback: "Richtig!"},
                {text: "Befugnis = Recht, Entscheidungen zu treffen", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Verantwortung = MUESSEN, Befugnis = DUERFEN!"},
                {text: "Verantwortung kann ohne Befugnis nicht wahrgenommen werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Verantwortlichkeiten und Befugnisse muessen...", topic: "Verantwortlichkeiten", answers: [
                {text: "von der obersten Leitung zugewiesen werden", correct: true, feedback: "Richtig!"},
                {text: "innerhalb der Organisation bekannt gemacht werden", correct: true, feedback: "Richtig!"},
                {text: "in einem Organigramm dargestellt werden", correct: false, feedback: "FALSCH: Ein Organigramm ist NICHT vorgeschrieben!"},
                {text: "fuer relevante Rollen festgelegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer muss ueber die Leistung des QMS an die oberste Leitung berichten?", topic: "Verantwortlichkeiten", answers: [
                {text: "Nur der externe Auditor", correct: false, feedback: "FALSCH: Externe Auditoren berichten ueber AUDITERGEBNISSE, nicht laufend ueber QMS-Leistung."},
                {text: "Die Person(en), der/denen diese Verantwortung zugewiesen wurde", correct: true, feedback: "Richtig!"},
                {text: "Ausschliesslich der Qualitaetsmanagementbeauftragte", correct: false, feedback: "FALSCH: 'QMB' ist seit 2015 nicht mehr gefordert."},
                {text: "Jeder Mitarbeiter direkt", correct: false, feedback: "FALSCH: Das waere unpraktikabel."}
            ]},
            {q: "Was gehoert zur Foerderung der Kundenorientierung in der gesamten Organisation?", topic: "Fuehrung", answers: [
                {text: "Ist Aufgabe der obersten Leitung", correct: true, feedback: "Richtig!"},
                {text: "Ist nur Aufgabe des Vertriebs", correct: false, feedback: "FALSCH: Kundenorientierung muss in der GESAMTEN Organisation gelebt werden!"},
                {text: "Muss sicherstellen, dass Kundenanforderungen verstanden werden", correct: true, feedback: "Richtig!"},
                {text: "Betrifft alle Ebenen und Bereiche", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die oberste Leitung muss die Bedeutung welcher Aspekte vermitteln?", topic: "Fuehrung", answers: [
                {text: "Eines wirksamen QMS", correct: true, feedback: "Richtig!"},
                {text: "Der Erfuellung von QMS-Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Der Gewinnmaximierung", correct: false, feedback: "FALSCH: Gewinnmaximierung ist KEIN Norminhalt!"},
                {text: "Der Einhaltung gesetzlicher Anforderungen", correct: false, feedback: "FALSCH: Hier fragt die Norm spezifisch nach QMS-Bedeutung."}
            ]},
            {q: "Welche Aussagen zur Fuehrung nach ISO 9001:2015 sind richtig?", topic: "Fuehrung", answers: [
                {text: "Fuehrung ist ein eigener QM-Grundsatz", correct: true, feedback: "Richtig!"},
                {text: "Die oberste Leitung kann alle Aufgaben an den QMB delegieren", correct: false, feedback: "FALSCH: Die RECHENSCHAFTSPFLICHT kann NICHT delegiert werden!"},
                {text: "Fuehrung bedeutet Vorbild sein und Richtung vorgeben", correct: true, feedback: "Richtig!"},
                {text: "Die oberste Leitung muss aktiv eingebunden sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie muss die oberste Leitung den Prozessansatz foerdern?", topic: "Fuehrung", answers: [
                {text: "Indem sie Prozesse und deren Wechselwirkungen versteht", correct: true, feedback: "Richtig!"},
                {text: "Indem sie alle Prozesse selbst dokumentiert", correct: false, feedback: "FALSCH: Die oberste Leitung muss Prozesse NICHT selbst dokumentieren!"},
                {text: "Indem sie prozessorientiertes Denken in der Organisation verankert", correct: true, feedback: "Richtig!"},
                {text: "Indem sie die Prozessverantwortlichen unterstuetzt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'risikobasiertes Denken foerdern' als Fuehrungsaufgabe?", topic: "Fuehrung", answers: [
                {text: "Bewusstsein schaffen, dass Risiken bei allen Entscheidungen beruecksichtigt werden", correct: true, feedback: "Richtig!"},
                {text: "Eine vollstaendige Risikodatenbank aufbauen", correct: false, feedback: "FALSCH: Eine 'vollstaendige Risikodatenbank' fordert die Norm NICHT!"},
                {text: "Chancen als positive Risiken erkennen und nutzen", correct: true, feedback: "Richtig!"},
                {text: "Nur die Risiken betrachten, die der Zertifizierer vorgibt", correct: false, feedback: "FALSCH: Die Organisation bestimmt selbst ihre Risiken!"}
            ]},
            {q: "Was muss bei Aenderungen am QMS sichergestellt werden?", topic: "Fuehrung", answers: [
                {text: "Die Integritaet des QMS wird aufrechterhalten", correct: true, feedback: "Richtig!"},
                {text: "Jede Aenderung muss vom Zertifizierer genehmigt werden", correct: false, feedback: "FALSCH: Der Zertifizierer muss Aenderungen NICHT vorab genehmigen!"},
                {text: "Aenderungen werden geplant und systematisch umgesetzt", correct: true, feedback: "Richtig!"},
                {text: "Das QMS bleibt auch waehrend der Aenderung funktionsfaehig", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Fuehrung ist einer der 7 QM-Grundsaetze. Was bedeutet das konkret?", topic: "Fuehrung", answers: [
                {text: "Fuehrungskraefte schaffen einheitliche Ausrichtung und Zielsetzung", correct: true, feedback: "Richtig!"},
                {text: "Fuehrung ist nur Aufgabe der obersten Leitung", correct: false, feedback: "FALSCH: Fuehrung betrifft ALLE Fuehrungsebenen!"},
                {text: "Fuehrungskraefte schaffen Bedingungen, unter denen MA sich engagieren", correct: true, feedback: "Richtig!"},
                {text: "Fuehrung ist die Basis fuer ein erfolgreiches QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Elemente muss eine normkonforme Qualitaetspolitik MINDESTENS enthalten?", topic: "Qualitaetspolitik", answers: [
                {text: "Angemessenheit fuer Zweck und Kontext der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Konkrete Umsatzziele und Gewinnmargen", correct: false, feedback: "FALSCH: Umsatzziele sind KEINE Normanforderungen!"},
                {text: "Rahmen fuer das Festlegen von Qualitaetszielen", correct: true, feedback: "Richtig!"},
                {text: "Verpflichtung zur Anforderungserfuellung und fortlaufenden Verbesserung", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "kapitel6": {
        title: "Kapitel 6 - Planung",
        questions: [
            {q: "Worauf muss die Organisation bei der Planung des QMS Bezug nehmen?", topic: "Risiken und Chancen", answers: [
                {text: "Auf den Kontext der Organisation (Kapitel 4.1)", correct: true, feedback: "Richtig!"},
                {text: "Auf die interessierten Parteien (Kapitel 4.2)", correct: true, feedback: "Richtig!"},
                {text: "Auf die Gewinnerwartungen der Eigentuemer", correct: false, feedback: "FALSCH: Gewinnerwartungen sind KEIN Norminhalt!"},
                {text: "Auf den Anwendungsbereich des QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Warum muessen Risiken und Chancen bestimmt werden?", topic: "Risiken und Chancen", answers: [
                {text: "Um sicherzustellen, dass das QMS seine beabsichtigten Ergebnisse erreichen kann", correct: true, feedback: "Richtig!"},
                {text: "Um unerwuenschte Auswirkungen zu verhindern oder zu verringern", correct: true, feedback: "Richtig!"},
                {text: "Um eine Risikodatenbank fuer den Zertifizierer zu erstellen", correct: false, feedback: "FALSCH: Eine Risikodatenbank ist NICHT gefordert!"},
                {text: "Um fortlaufende Verbesserung zu erreichen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was versteht die ISO 9001:2015 unter 'Risiko'?", topic: "Risiken und Chancen", answers: [
                {text: "Auswirkung von Ungewissheit", correct: true, feedback: "Richtig!"},
                {text: "Nur negative Abweichungen", correct: false, feedback: "FALSCH: Risiko ist NICHT nur negativ!"},
                {text: "Kann positiv oder negativ sein", correct: true, feedback: "Richtig!"},
                {text: "Immer eine Bedrohung", correct: false, feedback: "FALSCH: Risiko ist NICHT immer eine Bedrohung!"}
            ]},
            {q: "Was ist der Unterschied zwischen Risiko und Chance?", topic: "Risiken und Chancen", answers: [
                {text: "Risiko ist immer negativ, Chance immer positiv", correct: false, feedback: "FALSCH: Risiko ist NICHT immer negativ!"},
                {text: "Chance ist ein positiver Effekt von Ungewissheit", correct: true, feedback: "Richtig!"},
                {text: "Beide sind Auswirkungen von Ungewissheit", correct: true, feedback: "Richtig!"},
                {text: "Die Norm behandelt beides gemeinsam", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Eingaben fliessen in die Bestimmung von Risiken und Chancen ein?", topic: "Risiken und Chancen", answers: [
                {text: "Ergebnisse der Kontextanalyse (4.1)", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen interessierter Parteien (4.2)", correct: true, feedback: "Richtig!"},
                {text: "Historische Verkaufszahlen", correct: false, feedback: "FALSCH: Historische Verkaufszahlen sind KEINE direkte Eingabe!"},
                {text: "Der Anwendungsbereich des QMS (4.3)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Fordert die ISO 9001:2015 ein formelles Risikomanagement?", topic: "Risiken und Chancen", answers: [
                {text: "Ja, nach ISO 31000", correct: false, feedback: "FALSCH: Die ISO 9001 fordert KEIN formelles Risikomanagement nach ISO 31000!"},
                {text: "Nein, nur risikobasiertes Denken", correct: true, feedback: "Richtig!"},
                {text: "Die Methode ist freigestellt", correct: true, feedback: "Richtig!"},
                {text: "Ja, mit dokumentierter Risikomatrix", correct: false, feedback: "FALSCH: KEINE dokumentierte Risikomatrix gefordert!"}
            ]},
            {q: "Welche Massnahmen muessen fuer Risiken und Chancen geplant werden?", topic: "Risiken und Chancen", answers: [
                {text: "Massnahmen zum Umgang mit Risiken und Chancen", correct: true, feedback: "Richtig!"},
                {text: "Integration der Massnahmen in QMS-Prozesse", correct: true, feedback: "Richtig!"},
                {text: "Eliminierung aller Risiken", correct: false, feedback: "FALSCH: Alle Risiken zu ELIMINIEREN ist unrealistisch und NICHT gefordert!"},
                {text: "Bewertung der Wirksamkeit der Massnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Strategien gibt es zum Umgang mit Risiken?", topic: "Risiken und Chancen", answers: [
                {text: "Vermeiden (Risikoquelle beseitigen)", correct: true, feedback: "Richtig!"},
                {text: "Verringern (Wahrscheinlichkeit oder Auswirkung reduzieren)", correct: true, feedback: "Richtig!"},
                {text: "Ignorieren (Risiko nicht beachten)", correct: false, feedback: "FALSCH: Ignorieren ist KEINE akzeptable Strategie!"},
                {text: "Uebernehmen/Akzeptieren (bewusst eingehen)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie sollen Chancen behandelt werden?", topic: "Risiken und Chancen", answers: [
                {text: "Chancen identifizieren und nutzen", correct: true, feedback: "Richtig!"},
                {text: "Chancen haben im QMS keine Bedeutung", correct: false, feedback: "FALSCH: Chancen sind im QMS SEHR wichtig!"},
                {text: "Neue Produkte/Dienstleistungen entwickeln", correct: true, feedback: "Richtig!"},
                {text: "Neue Maerkte erschliessen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Muessen Risiken und Chancen dokumentiert werden?", topic: "Risiken und Chancen", answers: [
                {text: "Ja, in einer vorgeschriebenen Risikomatrix", correct: false, feedback: "FALSCH: Eine Risikomatrix ist NICHT vorgeschrieben!"},
                {text: "Nein, es gibt keine explizite Dokumentationspflicht", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation entscheidet selbst ueber Art und Umfang", correct: true, feedback: "Richtig!"},
                {text: "Nur fuer Auditzwecke", correct: false, feedback: "FALSCH: Dokumentation dient der Organisation selbst."}
            ]},
            {q: "Wann muessen Risiken und Chancen neu bewertet werden?", topic: "Risiken und Chancen", answers: [
                {text: "Bei Aenderungen des Kontexts", correct: true, feedback: "Richtig!"},
                {text: "Einmal jaehrlich verpflichtend", correct: false, feedback: "FALSCH: 'Jaehrlich' steht NICHT in der Norm!"},
                {text: "Bei Aenderungen an Produkten/Dienstleistungen", correct: true, feedback: "Richtig!"},
                {text: "Im Rahmen der Managementbewertung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Risikobasiertes Denken ersetzt...", topic: "Risiken und Chancen", answers: [
                {text: "die Vorbeugungsmassnahmen der ISO 9001:2008", correct: true, feedback: "Richtig!"},
                {text: "die Korrekturmassnahmen", correct: false, feedback: "FALSCH: Korrekturmassnahmen gibt es weiterhin!"},
                {text: "das interne Audit", correct: false, feedback: "FALSCH: Interne Audits sind weiterhin gefordert!"},
                {text: "nichts, es ist eine neue Ergaenzung", correct: false, feedback: "FALSCH: Es ERSETZT die frueheren 'Vorbeugungsmassnahmen'."}
            ]},
            {q: "Der Begriff 'Vorbeugungsmassnahme' existiert in der ISO 9001:2015...", topic: "Risiken und Chancen", answers: [
                {text: "als eigenes Kapitel", correct: false, feedback: "FALSCH: Es gibt KEIN eigenes Kapitel mehr!"},
                {text: "nicht mehr als eigenstaendiger Begriff", correct: true, feedback: "Richtig!"},
                {text: "wurde durch risikobasiertes Denken ersetzt", correct: true, feedback: "Richtig!"},
                {text: "ist identisch mit Korrekturmassnahme", correct: false, feedback: "FALSCH: Vorbeugung und Korrektur sind NICHT identisch!"}
            ]},
            {q: "Fuer welche Ebenen muessen Qualitaetsziele festgelegt werden?", topic: "Qualitaetsziele", answers: [
                {text: "Fuer relevante Funktionen", correct: true, feedback: "Richtig!"},
                {text: "Fuer relevante Ebenen", correct: true, feedback: "Richtig!"},
                {text: "Fuer relevante Prozesse", correct: true, feedback: "Richtig!"},
                {text: "Nur auf Unternehmensebene", correct: false, feedback: "FALSCH: Q-Ziele nur auf Unternehmensebene reicht NICHT!"}
            ]},
            {q: "Qualitaetsziele muessen im Einklang stehen mit...", topic: "Qualitaetsziele", answers: [
                {text: "der Qualitaetspolitik", correct: true, feedback: "Richtig!"},
                {text: "den Umsatzzielen", correct: false, feedback: "FALSCH: Umsatzziele sind KEIN Norminhalt!"},
                {text: "den Kundenanforderungen", correct: true, feedback: "Richtig!"},
                {text: "den Zielen der Wettbewerber", correct: false, feedback: "FALSCH: Wettbewerberziele sind irrelevant!"}
            ]},
            {q: "Welche Eigenschaften muessen Qualitaetsziele haben?", topic: "Qualitaetsziele", answers: [
                {text: "Messbar", correct: true, feedback: "Richtig!"},
                {text: "Ueberwachbar", correct: true, feedback: "Richtig!"},
                {text: "Allgemein und flexibel formuliert", correct: false, feedback: "FALSCH: Q-Ziele sollen NICHT allgemein sein! Sie muessen MESSBAR und konkret sein!"},
                {text: "Kommuniziert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'messbar' bei Qualitaetszielen?", topic: "Qualitaetsziele", answers: [
                {text: "Es muss eine Kennzahl oder ein Kriterium geben", correct: true, feedback: "Richtig!"},
                {text: "Jedes Ziel braucht einen numerischen Wert", correct: false, feedback: "FALSCH: Nicht JEDES Ziel braucht eine Zahl!"},
                {text: "Der Zielerreichungsgrad muss ueberpruefbar sein", correct: true, feedback: "Richtig!"},
                {text: "Nur quantitative Ziele sind erlaubt", correct: false, feedback: "FALSCH: Auch qualitative Ziele sind erlaubt!"}
            ]},
            {q: "Welche Planungsaspekte sind fuer Qualitaetsziele erforderlich?", topic: "Qualitaetsziele", answers: [
                {text: "Was getan wird", correct: true, feedback: "Richtig!"},
                {text: "Welche Ressourcen benoetigt werden", correct: true, feedback: "Richtig!"},
                {text: "Wer verantwortlich ist", correct: true, feedback: "Richtig!"},
                {text: "Wie die Ergebnisse bewertet werden", correct: true, feedback: "Richtig! ALLE sind korrekt!"}
            ]},
            {q: "Wann muessen Qualitaetsziele aktualisiert werden?", topic: "Qualitaetsziele", answers: [
                {text: "Bei Aenderungen der Qualitaetspolitik", correct: true, feedback: "Richtig!"},
                {text: "Jaehrlich zum Jahreswechsel", correct: false, feedback: "FALSCH: 'Jaehrlich zum Jahreswechsel' steht NICHT in der Norm!"},
                {text: "Bei Aenderungen des Kontexts", correct: true, feedback: "Richtig!"},
                {text: "Bei Bedarf (wenn zutreffend)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Muessen Qualitaetsziele dokumentiert werden?", topic: "Qualitaetsziele", answers: [
                {text: "Ja, als dokumentierte Information aufrechterhalten", correct: true, feedback: "Richtig!"},
                {text: "Nein, muendliche Vereinbarungen reichen", correct: false, feedback: "FALSCH: Muendliche Vereinbarungen reichen NICHT!"},
                {text: "Die Norm fordert explizit Dokumentation", correct: true, feedback: "Richtig!"},
                {text: "Nur wenn der Zertifizierer es verlangt", correct: false, feedback: "FALSCH: Es ist Normforderung!"}
            ]},
            {q: "Was ist das SMART-Prinzip fuer Ziele?", topic: "Qualitaetsziele", answers: [
                {text: "Spezifisch, Messbar, Akzeptiert/Attraktiv, Realistisch, Terminiert", correct: true, feedback: "Richtig!"},
                {text: "Eine Normforderung der ISO 9001", correct: false, feedback: "FALSCH: SMART ist KEINE explizite Normforderung!"},
                {text: "Ein bewaehrtes Hilfsmittel zur Zielformulierung", correct: true, feedback: "Richtig!"},
                {text: "Bedeutet, dass alle Ziele digital erfasst werden", correct: false, feedback: "FALSCH: SMART hat nichts mit digitaler Erfassung zu tun."}
            ]},
            {q: "Ein Qualitaetsziel lautet: 'Wir wollen besser werden'. Ist das normkonform?", topic: "Qualitaetsziele", answers: [
                {text: "Ja, es drueckt Verbesserungswillen aus", correct: false, feedback: "FALSCH: Der Wille allein reicht NICHT!"},
                {text: "Nein, es ist nicht messbar", correct: true, feedback: "Richtig!"},
                {text: "Nein, es fehlt ein konkreter Bezug", correct: true, feedback: "Richtig!"},
                {text: "Ja, wenn die Mitarbeiter es verstehen", correct: false, feedback: "FALSCH: Das Ziel muss MESSBAR sein!"}
            ]},
            {q: "Welches ist ein normkonformes Qualitaetsziel?", topic: "Qualitaetsziele", answers: [
                {text: "'Kundenzufriedenheit steigern'", correct: false, feedback: "FALSCH: Nicht messbar - um wieviel, bis wann?"},
                {text: "'Reklamationsquote bis 31.12. um 10% senken'", correct: true, feedback: "Richtig!"},
                {text: "'Wir wollen die Besten sein'", correct: false, feedback: "FALSCH: 'Die Besten' ist nicht messbar!"},
                {text: "'Liefertreue auf 98% bis Q2 erhoehen'", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei geplanten Aenderungen am QMS beruecksichtigt werden?", topic: "Aenderungsplanung", answers: [
                {text: "Der Zweck der Aenderung und moegliche Konsequenzen", correct: true, feedback: "Richtig!"},
                {text: "Die Integritaet des QMS", correct: true, feedback: "Richtig!"},
                {text: "Die Genehmigung durch den Zertifizierer", correct: false, feedback: "FALSCH: Der Zertifizierer muss NICHT vorab genehmigen!"},
                {text: "Die Verfuegbarkeit von Ressourcen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aspekte muessen bei QMS-Aenderungen geplant werden?", topic: "Aenderungsplanung", answers: [
                {text: "Zweck der Aenderung", correct: true, feedback: "Richtig!"},
                {text: "Moegliche Konsequenzen", correct: true, feedback: "Richtig!"},
                {text: "Zuweisung von Verantwortlichkeiten", correct: true, feedback: "Richtig!"},
                {text: "Automatische Information des TUeV", correct: false, feedback: "FALSCH: Den TUeV automatisch zu informieren ist NICHT gefordert!"}
            ]},
            {q: "Was bedeutet 'Integritaet des QMS' bei Aenderungen?", topic: "Aenderungsplanung", answers: [
                {text: "Das QMS bleibt als Ganzes funktionsfaehig", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen duerfen das System nicht beschaedigen", correct: true, feedback: "Richtig!"},
                {text: "Wechselwirkungen zwischen Prozessen werden beruecksichtigt", correct: true, feedback: "Richtig!"},
                {text: "Das QMS wird nach jeder Aenderung neu zertifiziert", correct: false, feedback: "FALSCH: Neuzertifizierung ist NICHT noetig!"}
            ]},
            {q: "Wer ist fuer die Planung von Aenderungen verantwortlich?", topic: "Aenderungsplanung", answers: [
                {text: "Die oberste Leitung traegt die Gesamtverantwortung", correct: true, feedback: "Richtig!"},
                {text: "Der Zertifizierer plant alle Aenderungen", correct: false, feedback: "FALSCH: Der Zertifizierer plant KEINE Aenderungen!"},
                {text: "Die Organisation selbst", correct: true, feedback: "Richtig!"},
                {text: "Die jeweils zustaendigen Verantwortlichen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind typische Ausloeser fuer QMS-Aenderungen?", topic: "Aenderungsplanung", answers: [
                {text: "Neue gesetzliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Ergebnisse von Audits", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen im Kontext der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Wunsch des Wettbewerbs", correct: false, feedback: "FALSCH: Der Wettbewerb hat keinen Einfluss auf das QMS!"}
            ]},
            {q: "Wie haengen Risiken/Chancen und Qualitaetsziele zusammen?", topic: "Risiken und Chancen", answers: [
                {text: "Q-Ziele koennen Massnahmen zu Risiken/Chancen sein", correct: true, feedback: "Richtig!"},
                {text: "Sie sind voellig unabhaengig voneinander", correct: false, feedback: "FALSCH: Sie sind eng verknuepft!"},
                {text: "Risiken koennen die Erreichung von Q-Zielen gefaehrden", correct: true, feedback: "Richtig!"},
                {text: "Chancen koennen zu neuen Q-Zielen fuehren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die ISO 9001:2015 fordert einen 'risikobasierten Ansatz'. Was bedeutet das?", topic: "Risiken und Chancen", answers: [
                {text: "Risiken werden bei allen Entscheidungen beruecksichtigt", correct: true, feedback: "Richtig!"},
                {text: "Ein zertifiziertes Risikomanagementsystem ist Pflicht", correct: false, feedback: "FALSCH: Ein zertifiziertes Risikomanagementsystem ist NICHT Pflicht!"},
                {text: "Praevention statt Reaktion", correct: true, feedback: "Richtig!"},
                {text: "Risiken sind im gesamten QMS zu betrachten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist eine Risikomatrix?", topic: "Risiken und Chancen", answers: [
                {text: "Ein von der ISO 9001 gefordertes Dokument", correct: false, feedback: "FALSCH: Die Risikomatrix ist NICHT von der Norm gefordert!"},
                {text: "Ein Werkzeug zur Visualisierung von Risiken", correct: true, feedback: "Richtig!"},
                {text: "Stellt Eintrittswahrscheinlichkeit und Auswirkung dar", correct: true, feedback: "Richtig!"},
                {text: "Eine moegliche, aber nicht vorgeschriebene Methode", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Unternehmen hat keine dokumentierten Risiken. Ist das ein Auditfehler?", topic: "Risiken und Chancen", answers: [
                {text: "Ja, immer", correct: false, feedback: "FALSCH: Keine Dokumentation ist NICHT automatisch ein Fehler!"},
                {text: "Nein, wenn risikobasiertes Denken nachweisbar gelebt wird", correct: true, feedback: "Richtig!"},
                {text: "Dokumentation ist nicht explizit gefordert", correct: true, feedback: "Richtig!"},
                {text: "Ja, der Zertifizierer verlangt Dokumente", correct: false, feedback: "FALSCH: Der Auditor prueft das Verstaendnis und die Umsetzung."}
            ]},
            {q: "Was ist der Unterschied zwischen Qualitaetspolitik und Qualitaetszielen?", topic: "Qualitaetsziele", answers: [
                {text: "Die Politik gibt die Richtung vor, Ziele sind konkret und messbar", correct: true, feedback: "Richtig!"},
                {text: "Politik und Ziele sind identisch", correct: false, feedback: "FALSCH: Sie sind NICHT identisch!"},
                {text: "Ziele werden aus der Politik abgeleitet", correct: true, feedback: "Richtig!"},
                {text: "Die Politik ist abstrakt, Ziele sind operativ", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Produktionsunternehmen identifiziert das Risiko 'Lieferantenausfall'. Welche Massnahmen waeren geeignet?", topic: "Risiken und Chancen", answers: [
                {text: "Zweiten Lieferanten qualifizieren", correct: true, feedback: "Richtig!"},
                {text: "Sicherheitsbestand erhoehen", correct: true, feedback: "Richtig!"},
                {text: "Risiko ignorieren und hoffen", correct: false, feedback: "FALSCH: Ignorieren ist KEINE Strategie!"},
                {text: "Versicherung abschliessen (Uebertragen)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zum Zusammenhang zwischen Kap. 4 und Kap. 6 sind richtig?", topic: "Risiken und Chancen", answers: [
                {text: "Die Kontextanalyse (4.1) liefert Eingaben fuer Risiken/Chancen (6.1)", correct: true, feedback: "Richtig!"},
                {text: "Interessierte Parteien (4.2) sind eine Quelle fuer Risiken/Chancen", correct: true, feedback: "Richtig!"},
                {text: "Kap. 4 und Kap. 6 sind voellig unabhaengig", correct: false, feedback: "FALSCH: Die Planung MUSS auf dem Kontext aufbauen!"},
                {text: "Der Anwendungsbereich (4.3) beeinflusst, welche Risiken relevant sind", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'Massnahmen muessen proportional zu moeglichen Auswirkungen sein'?", topic: "Risiken und Chancen", answers: [
                {text: "Hohe Risiken erfordern umfangreichere Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Jedes Risiko braucht die gleiche Massnahme", correct: false, feedback: "FALSCH: Die Norm fordert Proportionalitaet!"},
                {text: "Der Aufwand muss im Verhaeltnis zum Nutzen stehen", correct: true, feedback: "Richtig!"},
                {text: "Kleine Risiken koennen mit einfachen Massnahmen behandelt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Warum muessen Q-Ziele fuer die Konformitaet von Produkten/DL relevant sein?", topic: "Qualitaetsziele", answers: [
                {text: "Damit die Ziele einen Bezug zur Kernaufgabe des QMS haben", correct: true, feedback: "Richtig!"},
                {text: "Q-Ziele duerfen auch reine Finanzziele sein", correct: false, feedback: "FALSCH: Reine Finanzziele sind KEINE Q-Ziele!"},
                {text: "Nur so tragen sie zur Kundenzufriedenheit bei", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert diesen Zusammenhang explizit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Unternehmen erkennt die Chance 'Neue Technologie am Markt'. Wie sollte es reagieren?", topic: "Risiken und Chancen", answers: [
                {text: "Pruefen, ob die Technologie Prozesse verbessern kann", correct: true, feedback: "Richtig!"},
                {text: "Abwarten, bis Wettbewerber sie nutzen", correct: false, feedback: "FALSCH: Abwarten ist KEINE proaktive Chancennutzung!"},
                {text: "Pilotprojekt starten, um Nutzen zu evaluieren", correct: true, feedback: "Richtig!"},
                {text: "Die Chance als Q-Ziel formulieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie haengt der PDCA-Zyklus mit Risiken und Chancen zusammen?", topic: "Verbesserung", answers: [
                {text: "PLAN: Risiken/Chancen identifizieren und Massnahmen planen", correct: true, feedback: "Richtig!"},
                {text: "DO: Massnahmen umsetzen", correct: true, feedback: "Richtig!"},
                {text: "CHECK: Wirksamkeit der Massnahmen bewerten", correct: true, feedback: "Richtig!"},
                {text: "ACT: Bei Bedarf nachsteuern", correct: true, feedback: "Richtig! ALLE sind korrekt!"}
            ]},
            {q: "Was bedeutet 'Kaskadierung' von Qualitaetszielen?", topic: "Qualitaetsziele", answers: [
                {text: "Unternehmensziele werden auf Abteilungen heruntergebrochen", correct: true, feedback: "Richtig!"},
                {text: "Jede Ebene hat eigene Ziele, die zu den uebergeordneten beitragen", correct: true, feedback: "Richtig!"},
                {text: "Alle Ebenen haben identische Ziele", correct: false, feedback: "FALSCH: Die Ziele sind NICHT identisch auf allen Ebenen!"},
                {text: "Ziele werden von oben nach unten konsistent abgeleitet", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "kapitel7": {
        title: "Kapitel 7 - Unterstuetzung",
        questions: [
            {q: "Was muss die Organisation hinsichtlich Ressourcen bestimmen und bereitstellen?", topic: "Ressourcen", answers: [
                {text: "Ressourcen fuer Einfuehrung, Aufrechterhaltung und Verbesserung des QMS", correct: true, feedback: "Richtig!"},
                {text: "Nur finanzielle Ressourcen", correct: false, feedback: "FALSCH: Die Norm spricht NICHT nur von finanziellen Ressourcen! Ressourcen umfassen: Personen, Infrastruktur, Prozessumgebung, Messmittel, Wissen etc."},
                {text: "Ressourcen unter Beruecksichtigung vorhandener interner Ressourcen", correct: true, feedback: "Richtig!"},
                {text: "Ressourcen unter Beruecksichtigung extern zu beziehender Ressourcen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Bei der Ressourcenplanung muss die Organisation beruecksichtigen...", topic: "Ressourcen", answers: [
                {text: "die Faehigkeiten und Grenzen vorhandener interner Ressourcen", correct: true, feedback: "Richtig!"},
                {text: "nur die Kosten", correct: false, feedback: "FALSCH: Kosten sind wichtig, aber die Norm fokussiert auf FAEHIGKEITEN und GRENZEN!"},
                {text: "was von externen Anbietern bezogen werden muss", correct: true, feedback: "Richtig!"},
                {text: "die Wuensche der Mitarbeiter", correct: false, feedback: "FALSCH: Mitarbeiterwuensche sind kein Norminhalt - relevant ist die Eignung der Ressourcen."}
            ]},
            {q: "Was fordert die Norm bezueglich Personen?", topic: "Ressourcen", answers: [
                {text: "Bestimmung der erforderlichen Personen", correct: true, feedback: "Richtig!"},
                {text: "Bereitstellung der erforderlichen Personen", correct: true, feedback: "Richtig!"},
                {text: "Mindestens 10 Mitarbeiter", correct: false, feedback: "FALSCH: Die Norm nennt KEINE Mindestanzahl! Auch ein Ein-Personen-Unternehmen kann zertifiziert werden."},
                {text: "Personen fuer wirksame Umsetzung und Steuerung der Prozesse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was gehoert zur Infrastruktur im Sinne der ISO 9001?", topic: "Ressourcen", answers: [
                {text: "Gebaeude und zugehoerige Versorgungseinrichtungen", correct: true, feedback: "Richtig!"},
                {text: "Ausruestung (Hardware, Software)", correct: true, feedback: "Richtig!"},
                {text: "Transportmittel", correct: true, feedback: "Richtig!"},
                {text: "Organisationskultur", correct: false, feedback: "FALSCH: Organisationskultur ist KEINE Infrastruktur! Infrastruktur = physische/technische Einrichtungen."}
            ]},
            {q: "Die Infrastruktur muss...", topic: "Ressourcen", answers: [
                {text: "bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "bereitgestellt werden", correct: true, feedback: "Richtig!"},
                {text: "instand gehalten werden", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich komplett erneuert werden", correct: false, feedback: "FALSCH: Jaehrliche Erneuerung ist NICHT gefordert! Die Infrastruktur muss funktionsfaehig sein."}
            ]},
            {q: "Was versteht die Norm unter 'Prozessumgebung'?", topic: "Ressourcen", answers: [
                {text: "Die Umgebung, die fuer die Durchfuehrung von Prozessen erforderlich ist", correct: true, feedback: "Richtig!"},
                {text: "Nur die Raumtemperatur", correct: false, feedback: "FALSCH: Temperatur ist nur EIN Faktor! Prozessumgebung umfasst auch Licht, Hygiene, Laerm, Ergonomie etc."},
                {text: "Kombination aus menschlichen und physikalischen Faktoren", correct: true, feedback: "Richtig!"},
                {text: "Die IT-Systemlandschaft", correct: false, feedback: "FALSCH: IT-Systeme gehoeren zur Infrastruktur (7.1.3), nicht zur Prozessumgebung."}
            ]},
            {q: "Welche Faktoren koennen zur Prozessumgebung gehoeren?", topic: "Ressourcen", answers: [
                {text: "Soziale Faktoren (z.B. stressfrei, konfliktarm)", correct: true, feedback: "Richtig!"},
                {text: "Psychologische Faktoren (z.B. Motivation)", correct: true, feedback: "Richtig!"},
                {text: "Physikalische Faktoren (z.B. Temperatur, Licht, Hygiene)", correct: true, feedback: "Richtig!"},
                {text: "Finanzielle Faktoren (z.B. Gehalt)", correct: false, feedback: "FALSCH: Gehalt ist KEIN Teil der Prozessumgebung!"}
            ]},
            {q: "Wann sind Ressourcen zur Ueberwachung und Messung erforderlich?", topic: "Messmittel", answers: [
                {text: "Immer", correct: false, feedback: "FALSCH: NICHT immer - nur wenn Messung zur Konformitaetsverifizierung noetig ist!"},
                {text: "Wenn Ueberwachung/Messung zur Verifizierung der Konformitaet eingesetzt wird", correct: true, feedback: "Richtig!"},
                {text: "Nur bei Serienproduktion", correct: false, feedback: "FALSCH: Gilt fuer alle Organisationen, nicht nur Serienproduktion."},
                {text: "Um die Gueltigkeit der Ergebnisse sicherzustellen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bezueglich Messmittel sichergestellt werden?", topic: "Messmittel", answers: [
                {text: "Eignung fuer die Art der Ueberwachung/Messung", correct: true, feedback: "Richtig!"},
                {text: "Alle Messmittel muessen extern kalibriert werden", correct: false, feedback: "FALSCH: NICHT alle Messmittel muessen EXTERN kalibriert werden! Interne Kalibrierung ist zulaessig."},
                {text: "Instandhaltung zur Eignung", correct: true, feedback: "Richtig!"},
                {text: "Dokumentierte Information als Nachweis der Eignung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'metrologische Rueckfuehrbarkeit'?", topic: "Messmittel", answers: [
                {text: "Messergebnisse sind auf nationale/internationale Normale zurueckfuehrbar", correct: true, feedback: "Richtig!"},
                {text: "Man kann nachvollziehen, wer gemessen hat", correct: false, feedback: "FALSCH: Das ist Dokumentation, nicht Rueckfuehrbarkeit!"},
                {text: "Die Kalibrierung erfolgt durch eine ununterbrochene Kette von Vergleichen", correct: true, feedback: "Richtig!"},
                {text: "Jedes Messmittel muss beim Hersteller kalibriert werden", correct: false, feedback: "FALSCH: Nicht beim HERSTELLER - bei einem akkreditierten Labor oder mit rueckfuehrbaren Normalen."}
            ]},
            {q: "Wann ist metrologische Rueckfuehrbarkeit gefordert?", topic: "Messmittel", answers: [
                {text: "Immer fuer alle Messmittel", correct: false, feedback: "FALSCH: NICHT immer fuer alle! Nur wenn es eine Anforderung ist oder als wesentlich angesehen wird."},
                {text: "Wenn es eine Anforderung ist (gesetzlich, vom Kunden, von der Organisation)", correct: true, feedback: "Richtig!"},
                {text: "Wenn sie als wesentlich angesehen wird", correct: true, feedback: "Richtig!"},
                {text: "Nur bei sicherheitsrelevanten Messungen", correct: false, feedback: "FALSCH: Nicht nur bei sicherheitsrelevanten - die Organisation entscheidet."}
            ]},
            {q: "Was muss bei Messmitteln dokumentiert werden?", topic: "Messmittel", answers: [
                {text: "Nachweis der Eignung fuer den Verwendungszweck", correct: true, feedback: "Richtig!"},
                {text: "Kalibrierungs- oder Verifizierungsstatus", correct: true, feedback: "Richtig!"},
                {text: "Das Herstellerlogo", correct: false, feedback: "FALSCH: Das Herstellerlogo ist KEIN Dokumentationsinhalt!"},
                {text: "Schutz vor Verstellung oder Beschaedigung", correct: false, feedback: "FALSCH: Schutz ist eine Handlung, keine dokumentierte Information."}
            ]},
            {q: "Ein Messmittel wird als 'nicht konform' erkannt. Was muss geprueft werden?", topic: "Messmittel", answers: [
                {text: "Ob fruehere Messergebnisse ungueltig sind", correct: true, feedback: "Richtig!"},
                {text: "Ob Korrekturmassnahmen erforderlich sind", correct: true, feedback: "Richtig!"},
                {text: "Das Messmittel muss sofort entsorgt werden", correct: false, feedback: "FALSCH: Sofortige Entsorgung ist NICHT gefordert! Das Messmittel kann repariert oder neu kalibriert werden."},
                {text: "Ob betroffene Produkte zurueckgerufen werden muessen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist 'Wissen der Organisation' im Sinne der ISO 9001:2015?", topic: "Wissen", answers: [
                {text: "Wissen, das fuer die Durchfuehrung der Prozesse erforderlich ist", correct: true, feedback: "Richtig!"},
                {text: "Nur dokumentierte Verfahrensanweisungen", correct: false, feedback: "FALSCH: Wissen ist NICHT nur in Dokumenten! Es umfasst auch Erfahrungswissen, Know-how, implizites Wissen."},
                {text: "Wissen, das fuer die Konformitaet von Produkten/Dienstleistungen erforderlich ist", correct: true, feedback: "Richtig!"},
                {text: "Wissen, das auf Erfahrung basiert", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Quellen fuer organisationales Wissen nennt die Norm?", topic: "Wissen", answers: [
                {text: "Interne Quellen (z.B. Erfahrung, Lessons Learned)", correct: true, feedback: "Richtig!"},
                {text: "Externe Quellen (z.B. Normen, Konferenzen, Kunden)", correct: true, feedback: "Richtig!"},
                {text: "Nur Fachliteratur", correct: false, feedback: "FALSCH: Fachliteratur ist nur EINE externe Quelle!"},
                {text: "Geistiges Eigentum der Organisation", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss mit dem Wissen der Organisation geschehen?", topic: "Wissen", answers: [
                {text: "Es muss bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Es muss aufrechterhalten werden", correct: true, feedback: "Richtig!"},
                {text: "Es muss in erforderlichem Umfang verfuegbar gemacht werden", correct: true, feedback: "Richtig!"},
                {text: "Es muss vollstaendig in einem Wiki dokumentiert werden", correct: false, feedback: "FALSCH: Ein Wiki ist NICHT vorgeschrieben! Die Form der Wissensspeicherung ist freigestellt."}
            ]},
            {q: "Warum ist 'Wissen der Organisation' ein neues Thema in der ISO 9001:2015?", topic: "Wissen", answers: [
                {text: "Um Wissensverlust bei Personalwechsel zu verhindern", correct: true, feedback: "Richtig!"},
                {text: "Weil die alte Norm es vergessen hatte", correct: false, feedback: "FALSCH: Es wurde nicht 'vergessen' - es ist eine NEUE Anforderung als Reaktion auf den demographischen Wandel."},
                {text: "Um veraendertem Bedarf und Trends zu begegnen", correct: true, feedback: "Richtig!"},
                {text: "Um Wissensmanagement zu foerdern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist Kompetenz im Sinne der ISO 9001?", topic: "Kompetenz", answers: [
                {text: "Die Faehigkeit, Wissen und Fertigkeiten anzuwenden", correct: true, feedback: "Richtig!"},
                {text: "Nur formale Ausbildung", correct: false, feedback: "FALSCH: Kompetenz ist MEHR als formale Ausbildung! Sie kann durch Ausbildung, Schulung, Erfahrung erworben werden."},
                {text: "Um beabsichtigte Ergebnisse zu erzielen", correct: true, feedback: "Richtig!"},
                {text: "Gleichbedeutend mit Berufserfahrung", correct: false, feedback: "FALSCH: Berufserfahrung allein reicht nicht - man muss auch ANWENDEN koennen."}
            ]},
            {q: "Fuer wen muss die Kompetenz sichergestellt werden?", topic: "Kompetenz", answers: [
                {text: "Fuer Personen unter Aufsicht der Organisation, die die QMS-Leistung beeinflussen", correct: true, feedback: "Richtig!"},
                {text: "Nur fuer fest angestellte Mitarbeiter", correct: false, feedback: "FALSCH: NICHT nur Festangestellte! Auch Zeitarbeiter, Praktikanten, externe Dienstleister unter Aufsicht."},
                {text: "Fuer alle Personen, die taetig sind", correct: false, feedback: "FALSCH: Nicht ALLE Personen - nur die, deren Taetigkeit die QMS-Leistung beeinflusst."},
                {text: "Fuer externe Dienstleister, die unter Aufsicht arbeiten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie kann Kompetenz erworben werden?", topic: "Kompetenz", answers: [
                {text: "Durch Ausbildung", correct: true, feedback: "Richtig!"},
                {text: "Durch Schulung", correct: true, feedback: "Richtig!"},
                {text: "Durch Erfahrung", correct: true, feedback: "Richtig!"},
                {text: "Nur durch Universitaetsstudium", correct: false, feedback: "FALSCH: Ein Universitaetsstudium ist NICHT zwingend! Die Norm akzeptiert verschiedene Wege."}
            ]},
            {q: "Welche Massnahmen koennen ergriffen werden, wenn Kompetenz fehlt?", topic: "Kompetenz", answers: [
                {text: "Schulung der vorhandenen Personen", correct: true, feedback: "Richtig!"},
                {text: "Mentoring oder Coaching", correct: true, feedback: "Richtig!"},
                {text: "Neuzuweisung (andere Aufgaben)", correct: true, feedback: "Richtig!"},
                {text: "Einstellung oder Beauftragung kompetenter Personen", correct: true, feedback: "Richtig! ALLE sind moeglich!"}
            ]},
            {q: "Muss die Wirksamkeit von Kompetenz-Massnahmen bewertet werden?", topic: "Kompetenz", answers: [
                {text: "Nein, nur die Durchfuehrung zaehlt", correct: false, feedback: "FALSCH: Durchfuehrung allein reicht NICHT! Man muss pruefen, ob die Schulung GEWIRKT hat."},
                {text: "Ja, die Norm fordert die Bewertung der Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "Nur wenn der Zertifizierer es verlangt", correct: false, feedback: "FALSCH: Es ist Normforderung, nicht Zertifiziererwunsch."},
                {text: "Ja, um sicherzustellen, dass die Massnahme den gewuenschten Erfolg bringt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierten Informationen sind fuer Kompetenz gefordert?", topic: "Kompetenz", answers: [
                {text: "Nachweise der Kompetenz als dokumentierte Information aufbewahren", correct: true, feedback: "Richtig!"},
                {text: "Alle Schulungszertifikate muessen 10 Jahre aufbewahrt werden", correct: false, feedback: "FALSCH: 10 Jahre Aufbewahrung ist NICHT vorgeschrieben!"},
                {text: "Kompetenzmatrix ist vorgeschrieben", correct: false, feedback: "FALSCH: Eine Kompetenzmatrix ist hilfreich, aber NICHT vorgeschrieben."},
                {text: "Nachweise koennen Zeugnisse, Zertifikate, Beurteilungen etc. sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wofuer muessen Personen ein Bewusstsein haben?", topic: "Bewusstsein", answers: [
                {text: "Fuer die Qualitaetspolitik", correct: true, feedback: "Richtig!"},
                {text: "Fuer relevante Qualitaetsziele", correct: true, feedback: "Richtig!"},
                {text: "Fuer ihren Beitrag zur Wirksamkeit des QMS", correct: true, feedback: "Richtig!"},
                {text: "Fuer alle internen Prozesse im Detail", correct: false, feedback: "FALSCH: Nicht ALLE Prozesse im Detail! Mitarbeiter muessen wissen, wie SIE zur Qualitaet beitragen."}
            ]},
            {q: "Mitarbeiter muessen sich bewusst sein ueber...", topic: "Bewusstsein", answers: [
                {text: "die Vorteile einer verbesserten Leistung", correct: true, feedback: "Richtig!"},
                {text: "die Folgen einer Nichterfuellung von QMS-Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "die Gehaelter ihrer Kollegen", correct: false, feedback: "FALSCH: Gehaelter sind KEIN QMS-Thema!"},
                {text: "ihren persoenlichen Beitrag zum QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Kompetenz und Bewusstsein?", topic: "Bewusstsein", answers: [
                {text: "Kompetenz = Faehigkeit (Koennen)", correct: true, feedback: "Richtig!"},
                {text: "Bewusstsein = Verstehen der Bedeutung (Wollen/Verstehen)", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch! Kompetenz = KOENNEN, Bewusstsein = VERSTEHEN."},
                {text: "Kompetenz ohne Bewusstsein fuehrt zu Fehlern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei der internen und externen Kommunikation festgelegt werden?", topic: "Kommunikation", answers: [
                {text: "Worueber kommuniziert wird", correct: true, feedback: "Richtig!"},
                {text: "Wann kommuniziert wird", correct: true, feedback: "Richtig!"},
                {text: "Mit wem kommuniziert wird", correct: true, feedback: "Richtig!"},
                {text: "Wie oft taegliche Meetings stattfinden", correct: false, feedback: "FALSCH: Die Haeufigkeit von Meetings ist NICHT vorgeschrieben!"}
            ]},
            {q: "Welche Aspekte gehoeren zur Kommunikationsplanung nach ISO 9001?", topic: "Kommunikation", answers: [
                {text: "Worueber (Inhalt)", correct: true, feedback: "Richtig!"},
                {text: "Wann (Zeitpunkt)", correct: true, feedback: "Richtig!"},
                {text: "Mit wem (Zielgruppe)", correct: true, feedback: "Richtig!"},
                {text: "Wie (Methode) und Wer (Verantwortlicher)", correct: true, feedback: "Richtig! ALLE sind gefordert."}
            ]},
            {q: "Was ersetzt der Begriff 'dokumentierte Information' in der ISO 9001:2015?", topic: "Dokumentation", answers: [
                {text: "Dokumente und Aufzeichnungen", correct: true, feedback: "Richtig!"},
                {text: "QM-Handbuch", correct: false, feedback: "FALSCH: QM-Handbuch ist ein Beispiel, aber NICHT das, was ersetzt wurde!"},
                {text: "Verfahrensanweisungen", correct: false, feedback: "FALSCH: Verfahrensanweisungen sind ein Beispiel, nicht der ersetzte Begriff."},
                {text: "Qualitaetspolitik", correct: false, feedback: "FALSCH: Die Q-Politik ist weiterhin ein eigenstaendiger Begriff."}
            ]},
            {q: "Welche dokumentierte Information fordert die Norm?", topic: "Dokumentation", answers: [
                {text: "Von der Norm geforderte dokumentierte Information", correct: true, feedback: "Richtig!"},
                {text: "Von der Organisation als notwendig erachtete dokumentierte Information", correct: true, feedback: "Richtig!"},
                {text: "Ein QM-Handbuch", correct: false, feedback: "FALSCH: Ein QM-Handbuch ist seit 2015 NICHT mehr gefordert!"},
                {text: "Mindestens 50 Verfahrensanweisungen", correct: false, feedback: "FALSCH: Es gibt KEINE Mindestzahl an Verfahrensanweisungen!"}
            ]},
            {q: "Was bedeutet 'dokumentierte Information aufrechterhalten'?", topic: "Dokumentation", answers: [
                {text: "Vorgabedokumente aktuell halten", correct: true, feedback: "Richtig!"},
                {text: "Dokumente archivieren", correct: false, feedback: "FALSCH: Das ist 'AUFBEWAHREN', nicht 'aufrechterhalten'!"},
                {text: "Betrifft z.B. Verfahrensanweisungen, Arbeitsanweisungen, Q-Politik", correct: true, feedback: "Richtig!"},
                {text: "Nachweise aufbewahren", correct: false, feedback: "FALSCH: Das ist 'AUFBEWAHREN'!"}
            ]},
            {q: "Was bedeutet 'dokumentierte Information aufbewahren'?", topic: "Dokumentation", answers: [
                {text: "Nachweisdokumente archivieren", correct: true, feedback: "Richtig!"},
                {text: "Dokumente aktuell halten", correct: false, feedback: "FALSCH: Das ist 'AUFRECHTERHALTEN'!"},
                {text: "Betrifft z.B. Pruefprotokolle, Auditberichte, Schulungsnachweise", correct: true, feedback: "Richtig!"},
                {text: "Vorgabedokumente erstellen", correct: false, feedback: "FALSCH: Das ist keine Normdefinition fuer diesen Begriff."}
            ]},
            {q: "Welche Anforderungen gelten fuer das Erstellen und Aktualisieren dokumentierter Information?", topic: "Dokumentation", answers: [
                {text: "Angemessene Kennzeichnung und Beschreibung", correct: true, feedback: "Richtig!"},
                {text: "Angemessenes Format und Medium", correct: true, feedback: "Richtig!"},
                {text: "Alle Dokumente muessen als PDF vorliegen", correct: false, feedback: "FALSCH: PDF ist NICHT vorgeschrieben! Das Format ist frei waehlbar."},
                {text: "Pruefung und Genehmigung auf Eignung und Angemessenheit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei der Lenkung dokumentierter Information sichergestellt werden?", topic: "Dokumentation", answers: [
                {text: "Verfuegbarkeit und Eignung am Ort der Verwendung", correct: true, feedback: "Richtig!"},
                {text: "Angemessener Schutz", correct: true, feedback: "Richtig!"},
                {text: "Alle Dokumente muessen passwortgeschuetzt sein", correct: false, feedback: "FALSCH: Passwortschutz ist NICHT vorgeschrieben!"},
                {text: "Verteilung, Zugriff, Auffindung und Verwendung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aktivitaeten gehoeren zur Lenkung dokumentierter Information?", topic: "Dokumentation", answers: [
                {text: "Verteilung und Zugriff", correct: true, feedback: "Richtig!"},
                {text: "Ablage und Aufbewahrung", correct: true, feedback: "Richtig!"},
                {text: "Schutz (z.B. vor Verlust der Vertraulichkeit)", correct: true, feedback: "Richtig!"},
                {text: "Aufbewahrungsfristen und Vernichtung", correct: true, feedback: "Richtig! ALLE sind gefordert."}
            ]},
            {q: "Wie muss mit dokumentierter Information externen Ursprungs umgegangen werden?", topic: "Dokumentation", answers: [
                {text: "Sie muss gekennzeichnet werden", correct: true, feedback: "Richtig!"},
                {text: "Sie ist von der Lenkung ausgenommen", correct: false, feedback: "FALSCH: Externe Dokumente sind NICHT ausgenommen!"},
                {text: "Ihre Lenkung muss gesteuert werden", correct: true, feedback: "Richtig!"},
                {text: "Sie darf nicht im QMS verwendet werden", correct: false, feedback: "FALSCH: Sie duerfen verwendet werden - Normen, Kundenspezifikationen sind externe Dokumente!"}
            ]},
            {q: "Ein Mitarbeiter findet eine veraltete Arbeitsanweisung am Arbeitsplatz. Was ist das Problem?", topic: "Dokumentation", answers: [
                {text: "Die Lenkung dokumentierter Information funktioniert nicht", correct: true, feedback: "Richtig!"},
                {text: "Es ist kein Problem, Hauptsache er arbeitet", correct: false, feedback: "FALSCH: Es IST ein Problem! Veraltete Dokumente koennen zu Fehlern fuehren."},
                {text: "Veraltete Dokumente koennen zu Fehlern fuehren", correct: true, feedback: "Richtig!"},
                {text: "Es fehlt der Schutz vor unbeabsichtigter Verwendung ungueltiger Dokumente", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Unternehmen hat erfahrene Mitarbeiter, die bald in Rente gehen. Welches Normkapitel ist relevant?", topic: "Wissen", answers: [
                {text: "7.1.6 Wissen der Organisation", correct: true, feedback: "Richtig!"},
                {text: "7.2 Kompetenz", correct: true, feedback: "Richtig!"},
                {text: "Kein Kapitel, das ist kein QMS-Thema", correct: false, feedback: "FALSCH: Wissensverlust ist SEHR WOHL ein QMS-Thema!"},
                {text: "Massnahmen gegen Wissensverlust sollten geplant werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Kalibrierung und Verifizierung von Messmitteln?", topic: "Messmittel", answers: [
                {text: "Kalibrierung bestimmt die Abweichung zum Normal", correct: true, feedback: "Richtig!"},
                {text: "Verifizierung prueft, ob Anforderungen erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Kalibrierung kann eine Justierung beinhalten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zur Schulungsplanung sind richtig?", topic: "Kompetenz", answers: [
                {text: "Schulungsbedarf muss ermittelt werden", correct: true, feedback: "Richtig!"},
                {text: "Alle Mitarbeiter muessen jaehrlich geschult werden", correct: false, feedback: "FALSCH: 'Jaehrlich' ist NICHT vorgeschrieben!"},
                {text: "Die Wirksamkeit der Schulung muss bewertet werden", correct: true, feedback: "Richtig!"},
                {text: "Schulungsnachweise muessen aufbewahrt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Handwerker arbeitet seit 20 Jahren ohne formale Ausbildung. Ist er kompetent im Sinne der Norm?", topic: "Kompetenz", answers: [
                {text: "Nein, er braucht ein Zertifikat", correct: false, feedback: "FALSCH: Ein Zertifikat ist NICHT zwingend! Die Norm akzeptiert Erfahrung als Kompetenznachweis."},
                {text: "Ja, wenn er die Faehigkeit hat, die Anforderungen zu erfuellen", correct: true, feedback: "Richtig!"},
                {text: "Kompetenz kann durch Erfahrung erworben werden", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation muss seine Kompetenz bewerten und nachweisen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Infrastruktur kann fuer ein Softwareunternehmen relevant sein?", topic: "Ressourcen", answers: [
                {text: "Server und Netzwerk", correct: true, feedback: "Richtig!"},
                {text: "Entwicklungswerkzeuge (IDEs, Compiler)", correct: true, feedback: "Richtig!"},
                {text: "Kuehlschmiede", correct: false, feedback: "FALSCH: Eine Kuehlschmiede ist fuer ein Softwareunternehmen NICHT relevant!"},
                {text: "Bueroarbeitsplaetze", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist bei der Prozessumgebung eines Reinraums zu beachten?", topic: "Ressourcen", answers: [
                {text: "Temperatur und Luftfeuchtigkeit", correct: true, feedback: "Richtig!"},
                {text: "Partikelanzahl", correct: true, feedback: "Richtig!"},
                {text: "Zugangskontrollen", correct: true, feedback: "Richtig!"},
                {text: "Die Wandfarbe nach Geschmack der Mitarbeiter", correct: false, feedback: "FALSCH: Wandfarbe nach Geschmack ist KEIN Prozessumgebungsfaktor!"}
            ]},
            {q: "Welche Dokumente sind typische Beispiele fuer 'aufrechterhalten'?", topic: "Dokumentation", answers: [
                {text: "Qualitaetspolitik", correct: true, feedback: "Richtig!"},
                {text: "Pruefprotokoll", correct: false, feedback: "FALSCH: Pruefprotokolle sind NACHWEISE - sie werden AUFBEWAHRT!"},
                {text: "Verfahrensanweisungen", correct: true, feedback: "Richtig!"},
                {text: "Auditbericht", correct: false, feedback: "FALSCH: Auditberichte sind NACHWEISE - sie werden AUFBEWAHRT!"}
            ]},
            {q: "Welche Dokumente sind typische Beispiele fuer 'aufbewahren'?", topic: "Dokumentation", answers: [
                {text: "Arbeitsanweisung", correct: false, feedback: "FALSCH: Eine Arbeitsanweisung ist ein Vorgabedokument - sie wird AUFRECHTERHALTEN!"},
                {text: "Kalibrierprotokoll", correct: true, feedback: "Richtig!"},
                {text: "Schulungsnachweis", correct: true, feedback: "Richtig!"},
                {text: "Reklamationsbericht", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss die Organisation tun, wenn sich der Wissensbedarf aendert?", topic: "Wissen", answers: [
                {text: "Pruefen, wie zusaetzliches Wissen erworben werden kann", correct: true, feedback: "Richtig!"},
                {text: "Nichts, vorhandenes Wissen reicht immer", correct: false, feedback: "FALSCH: Vorhandenes Wissen reicht NICHT immer!"},
                {text: "Externe Quellen nutzen (Schulungen, Konferenzen, Experten)", correct: true, feedback: "Richtig!"},
                {text: "Wissen durch Einstellung neuer Mitarbeiter beschaffen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'Ueberwachung von Aenderungen' bei dokumentierter Information?", topic: "Dokumentation", answers: [
                {text: "Aenderungen muessen nachvollziehbar sein (Versionshistorie)", correct: true, feedback: "Richtig!"},
                {text: "Jede Aenderung muss vom GF genehmigt werden", correct: false, feedback: "FALSCH: NICHT jede Aenderung muss vom GF genehmigt werden! Die Genehmigung kann delegiert werden."},
                {text: "Der aktuelle Revisionsstand muss erkennbar sein", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen gegenueber der Vorgaengerversion sollten identifizierbar sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was gehoert zur Informations- und Kommunikationstechnologie (IKT) als Infrastruktur?", topic: "Ressourcen", answers: [
                {text: "Hardware (Server, PCs, Netzwerkkomponenten)", correct: true, feedback: "Richtig!"},
                {text: "Software (ERP, CAD, Office)", correct: true, feedback: "Richtig!"},
                {text: "Kommunikationssysteme (E-Mail, Telefon)", correct: true, feedback: "Richtig!"},
                {text: "Die Faehigkeiten der IT-Mitarbeiter", correct: false, feedback: "FALSCH: Faehigkeiten der Mitarbeiter sind KOMPETENZ (7.2), nicht Infrastruktur!"}
            ]},
            {q: "Wie wird die Lesbarkeit dokumentierter Information langfristig sichergestellt?", topic: "Dokumentation", answers: [
                {text: "Durch geeignete Speichermedien und -formate", correct: true, feedback: "Richtig!"},
                {text: "Durch regelmaessige Migration auf aktuelle Systeme", correct: true, feedback: "Richtig!"},
                {text: "Lesbarkeit ist kein Thema der Norm", correct: false, feedback: "FALSCH: Lesbarkeit IST ein Thema! Die Norm fordert Schutz vor 'Verlust der Lesbarkeit'."},
                {text: "Durch Schutz vor Verfall (z.B. bei Papier) oder Datenverlust", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer ist fuer die Kompetenz von externen Mitarbeitern (z.B. Zeitarbeiter, Subunternehmer) verantwortlich?", topic: "Kompetenz", answers: [
                {text: "Nur der externe Dienstleister selbst", correct: false, feedback: "FALSCH: NICHT nur der Dienstleister! Die Organisation traegt Mitverantwortung fuer Personen unter ihrer Aufsicht."},
                {text: "Die Organisation, wenn sie unter deren Aufsicht taetig sind", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation muss die Kompetenz sicherstellen oder verifizieren", correct: true, feedback: "Richtig!"},
                {text: "Externe sind von den Kompetenzanforderungen ausgenommen", correct: false, feedback: "FALSCH: Externe sind NICHT ausgenommen - ihre Arbeit beeinflusst die Qualitaet genauso!"}
            ]}
        ]
    },
    "kapitel8": {
        title: "Kapitel 8 - Betrieb",
        questions: [
            {q: "Was muss die Organisation fuer die Produktrealisierung planen und steuern?", topic: "Produktion", answers: [
                {text: "Prozesse zur Erfuellung der Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Nur die Endkontrolle", correct: false, feedback: "FALSCH: Nur Endkontrolle reicht NICHT! Die Norm fordert Planung und Steuerung des GESAMTEN Realisierungsprozesses."},
                {text: "Massnahmen zum Umgang mit Risiken und Chancen (aus Kap. 6)", correct: true, feedback: "Richtig!"},
                {text: "Prozesse zur Bereitstellung von Produkten und Dienstleistungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die betriebliche Planung muss welche Aspekte festlegen?", topic: "Produktion", answers: [
                {text: "Anforderungen an Produkte und Dienstleistungen", correct: true, feedback: "Richtig!"},
                {text: "Kriterien fuer Prozesse und Abnahme", correct: true, feedback: "Richtig!"},
                {text: "Die Gehaelter der Produktionsmitarbeiter", correct: false, feedback: "FALSCH: Gehaelter sind KEIN Bestandteil der betrieblichen Planung nach ISO 9001!"},
                {text: "Erforderliche Ressourcen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ausgegliederte Prozesse muessen...", topic: "Externe Anbieter", answers: [
                {text: "nicht gesteuert werden, da extern", correct: false, feedback: "FALSCH: Ausgegliederte Prozesse muessen SEHR WOHL gesteuert werden!"},
                {text: "gesteuert werden gemaess Kapitel 8.4", correct: true, feedback: "Richtig!"},
                {text: "in den Anwendungsbereich des QMS einbezogen sein", correct: true, feedback: "Richtig!"},
                {text: "vollstaendig intern durchgefuehrt werden", correct: false, feedback: "FALSCH: Sie duerfen extern sein, aber die STEUERUNG bleibt bei der Organisation."}
            ]},
            {q: "Was muss bei geplanten Aenderungen an der Produktion beachtet werden?", topic: "Produktion", answers: [
                {text: "Aenderungen muessen gesteuert werden", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen koennen ohne Pruefung umgesetzt werden", correct: false, feedback: "FALSCH: Aenderungen OHNE Pruefung sind riskant!"},
                {text: "Folgen unbeabsichtigter Aenderungen muessen bewertet werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen zur Minderung negativer Auswirkungen ergreifen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was gehoert zur Kommunikation mit Kunden?", topic: "Kundenanforderungen", answers: [
                {text: "Informationen ueber Produkte und Dienstleistungen", correct: true, feedback: "Richtig!"},
                {text: "Anfragen, Vertraege, Auftragsbearbeitung", correct: true, feedback: "Richtig!"},
                {text: "Nur schriftliche Kommunikation", correct: false, feedback: "FALSCH: NICHT nur schriftlich! Kundenkommunikation kann muendlich, telefonisch, per E-Mail etc. erfolgen."},
                {text: "Rueckmeldungen einschliesslich Reklamationen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aspekte gehoeren zur Kundenkommunikation nach ISO 9001?", topic: "Kundenanforderungen", answers: [
                {text: "Umgang mit Kundeneigentum", correct: true, feedback: "Richtig!"},
                {text: "Notfallmassnahmen (wenn zutreffend)", correct: true, feedback: "Richtig!"},
                {text: "Private Gespraeche mit Kunden", correct: false, feedback: "FALSCH: Private Gespraeche sind KEIN Norminhalt!"},
                {text: "Spezifische Anforderungen an Massnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Anforderungen an Produkte/DL muessen bestimmt werden?", topic: "Kundenanforderungen", answers: [
                {text: "Vom Kunden festgelegte Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Nicht vom Kunden angegebene, aber notwendige Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Nur muendlich geaeusserte Wuensche", correct: false, feedback: "FALSCH: Nicht NUR muendliche! Alle Anforderungen zaehlen."},
                {text: "Gesetzliche und behoerdliche Anforderungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind 'nicht angegebene, aber notwendige' Anforderungen?", topic: "Kundenanforderungen", answers: [
                {text: "Anforderungen, die der Kunde als selbstverstaendlich voraussetzt", correct: true, feedback: "Richtig!"},
                {text: "Nur was im Vertrag steht", correct: false, feedback: "FALSCH: Es geht um MEHR als den Vertrag!"},
                {text: "Zum Beispiel: Ein Auto muss bremsen koennen", correct: true, feedback: "Richtig!"},
                {text: "Implizite Anforderungen aus dem Verwendungszweck", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann muss die Ueberpruefung der Anforderungen erfolgen?", topic: "Kundenanforderungen", answers: [
                {text: "Vor der Zusage zur Lieferung", correct: true, feedback: "Richtig!"},
                {text: "Nach der Lieferung", correct: false, feedback: "FALSCH: NACH der Lieferung ist zu spaet!"},
                {text: "Vor Abgabe eines Angebots", correct: true, feedback: "Richtig!"},
                {text: "Vor Annahme eines Auftrags", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei der Ueberpruefung der Anforderungen sichergestellt werden?", topic: "Kundenanforderungen", answers: [
                {text: "Anforderungen sind vollstaendig definiert", correct: true, feedback: "Richtig!"},
                {text: "Abweichungen zum Angebot sind geklaert", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation kann die Anforderungen erfuellen", correct: true, feedback: "Richtig!"},
                {text: "Der Kunde hat immer Recht", correct: false, feedback: "FALSCH: 'Kunde hat immer Recht' ist KEIN Norminhalt!"}
            ]},
            {q: "Muss die Ueberpruefung der Anforderungen dokumentiert werden?", topic: "Kundenanforderungen", answers: [
                {text: "Ja, die Ergebnisse muessen als dokumentierte Information aufbewahrt werden", correct: true, feedback: "Richtig!"},
                {text: "Nein, muendliche Absprachen reichen", correct: false, feedback: "FALSCH: Muendliche Absprachen allein reichen NICHT!"},
                {text: "Nur bei Sonderanfertigungen", correct: false, feedback: "FALSCH: Gilt fuer ALLE Auftraege!"},
                {text: "Auch neue oder geaenderte Anforderungen muessen dokumentiert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei Aenderungen an Anforderungen geschehen?", topic: "Kundenanforderungen", answers: [
                {text: "Dokumentierte Information muss geaendert werden", correct: true, feedback: "Richtig!"},
                {text: "Betroffene Personen muessen informiert werden", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen koennen ignoriert werden", correct: false, feedback: "FALSCH: Aenderungen duerfen NICHT ignoriert werden!"},
                {text: "Relevante Dokumente muessen angepasst werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann darf das Kapitel 8.3 (Entwicklung) ausgeschlossen werden?", topic: "Entwicklung", answers: [
                {text: "Immer, wenn das Unternehmen es wuenscht", correct: false, feedback: "FALSCH: Ein Ausschluss nach Wunsch ist NICHT erlaubt!"},
                {text: "Nur wenn die Organisation keine eigene Entwicklung durchfuehrt", correct: true, feedback: "Richtig!"},
                {text: "Der Ausschluss muss begruendet werden", correct: true, feedback: "Richtig!"},
                {text: "Wenn Kunden die Entwicklung vorgeben", correct: false, feedback: "FALSCH: Auch bei Kundenvorgaben kann eigene Entwicklung noetig sein."}
            ]},
            {q: "Was ist der Unterschied zwischen Entwicklung und Konstruktion?", topic: "Entwicklung", answers: [
                {text: "Die Norm unterscheidet nicht - beides faellt unter 8.3", correct: true, feedback: "Richtig!"},
                {text: "Konstruktion ist ein Teil der Entwicklung", correct: true, feedback: "Richtig!"},
                {text: "Entwicklung umfasst auch Dienstleistungsentwicklung", correct: true, feedback: "Richtig!"},
                {text: "Konstruktion betrifft nur mechanische Teile", correct: false, feedback: "FALSCH: Konstruktion ist NICHT auf mechanische Teile beschraenkt!"}
            ]},
            {q: "Was muss bei der Entwicklungsplanung beruecksichtigt werden?", topic: "Entwicklung", answers: [
                {text: "Art, Dauer und Komplexitaet der Entwicklung", correct: true, feedback: "Richtig!"},
                {text: "Erforderliche Phasen und Pruefungen", correct: true, feedback: "Richtig!"},
                {text: "Nur das Endprodukt", correct: false, feedback: "FALSCH: Nicht nur das Endprodukt zaehlt!"},
                {text: "Verantwortlichkeiten und Befugnisse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Entwicklungseingaben muessen bestimmt werden?", topic: "Entwicklung", answers: [
                {text: "Funktions- und Leistungsanforderungen", correct: true, feedback: "Richtig!"},
                {text: "Gesetzliche und behoerdliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Die Lieblingsfarbe des Entwicklers", correct: false, feedback: "FALSCH: Persoenliche Vorlieben sind KEINE Entwicklungseingaben!"},
                {text: "Informationen aus frueheren Entwicklungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Entwicklungseingaben muessen...", topic: "Entwicklung", answers: [
                {text: "fuer den Entwicklungszweck angemessen sein", correct: true, feedback: "Richtig!"},
                {text: "vollstaendig und eindeutig sein", correct: true, feedback: "Richtig!"},
                {text: "muendlich besprochen werden, dann reicht das", correct: false, feedback: "FALSCH: Muendliche Besprechung reicht NICHT!"},
                {text: "widerspruchsfrei sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss waehrend der Entwicklung durchgefuehrt werden?", topic: "Entwicklung", answers: [
                {text: "Entwicklungsbewertungen (Reviews)", correct: true, feedback: "Richtig!"},
                {text: "Verifizierung", correct: true, feedback: "Richtig!"},
                {text: "Validierung", correct: true, feedback: "Richtig!"},
                {text: "Nur eine Endkontrolle", correct: false, feedback: "FALSCH: Nur Endkontrolle reicht NICHT!"}
            ]},
            {q: "Was ist der Unterschied zwischen Verifizierung und Validierung?", topic: "Entwicklung", answers: [
                {text: "Verifizierung: Wurde richtig gebaut? (Eingaben erfuellt?)", correct: true, feedback: "Richtig!"},
                {text: "Validierung: Wurde das Richtige gebaut? (Verwendungszweck erfuellt?)", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Validierung erfolgt oft beim/mit dem Kunden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muessen Entwicklungsergebnisse erfuellen?", topic: "Entwicklung", answers: [
                {text: "Die Anforderungen aus den Entwicklungseingaben", correct: true, feedback: "Richtig!"},
                {text: "Sie muessen fuer nachfolgende Prozesse geeignet sein", correct: true, feedback: "Richtig!"},
                {text: "Sie muessen vom Entwickler unterschrieben sein", correct: false, feedback: "FALSCH: Unterschrift des Entwicklers ist NICHT explizit gefordert!"},
                {text: "Anforderungen an Ueberwachung, Messung und Abnahmekriterien enthalten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Entwicklungsergebnisse muessen welche Eigenschaften haben?", topic: "Entwicklung", answers: [
                {text: "Merkmale fuer sichere und bestimmungsgemaesse Verwendung festlegen", correct: true, feedback: "Richtig!"},
                {text: "Moeglichst allgemein formuliert sein", correct: false, feedback: "FALSCH: Entwicklungsergebnisse sollen NICHT allgemein sein!"},
                {text: "Fuer Produktion/Dienstleistungserbringung geeignet sein", correct: true, feedback: "Richtig!"},
                {text: "Pruef- und Abnahmekriterien enthalten oder darauf verweisen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann muessen Entwicklungsaenderungen gesteuert werden?", topic: "Entwicklung", answers: [
                {text: "Nur bei grossen Aenderungen", correct: false, feedback: "FALSCH: NICHT nur bei grossen Aenderungen! ALLE Aenderungen muessen gesteuert werden."},
                {text: "Bei allen Aenderungen waehrend oder nach der Entwicklung", correct: true, feedback: "Richtig!"},
                {text: "Um nachteilige Auswirkungen zu verhindern", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen muessen bewertet, verifiziert und validiert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer die Entwicklung gefordert?", topic: "Entwicklung", answers: [
                {text: "Entwicklungseingaben", correct: true, feedback: "Richtig!"},
                {text: "Ergebnisse von Reviews, Verifizierung, Validierung", correct: true, feedback: "Richtig!"},
                {text: "Alle E-Mails des Entwicklungsteams", correct: false, feedback: "FALSCH: ALLE E-Mails aufzubewahren ist NICHT gefordert!"},
                {text: "Entwicklungsaenderungen und Genehmigungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann gelten die Anforderungen an externe Anbieter (8.4)?", topic: "Externe Anbieter", answers: [
                {text: "Nur bei Materiallieferanten", correct: false, feedback: "FALSCH: Nicht NUR Materiallieferanten! 8.4 gilt fuer alle externen Anbieter."},
                {text: "Bei Produkten/DL von externen Anbietern fuer eigene Produkte/DL", correct: true, feedback: "Richtig!"},
                {text: "Bei Prozessen, die an externe Anbieter ausgegliedert werden", correct: true, feedback: "Richtig!"},
                {text: "Bei Produkten/DL, die direkt an Kunden geliefert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss fuer externe Anbieter festgelegt werden?", topic: "Externe Anbieter", answers: [
                {text: "Kriterien fuer Auswahl und Bewertung", correct: true, feedback: "Richtig!"},
                {text: "Kriterien fuer Leistungsueberwachung", correct: true, feedback: "Richtig!"},
                {text: "Der guenstigste Preis als einziges Kriterium", correct: false, feedback: "FALSCH: Der Preis allein ist NICHT ausreichend!"},
                {text: "Kriterien fuer Neubewertung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist eine Lieferantenbewertung?", answers: [
                {text: "Einmalige Pruefung vor der ersten Bestellung", correct: false, feedback: "FALSCH: NICHT nur einmalig! Die Norm fordert Auswahl, Ueberwachung UND Neubewertung."},
                {text: "Regelmaessige Bewertung der Lieferantenleistung", correct: true, feedback: "Richtig!"},
                {text: "Nur die Wareneingangspruefung", correct: false, feedback: "FALSCH: Wareneingangspruefung ist nur ein Teil."},
                {text: "Bewertung nach Kriterien wie Qualitaet, Termintreue, Reaktion", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bestimmt Art und Umfang der Steuerung externer Anbieter?", answers: [
                {text: "Die moegliche Auswirkung auf die Konformitaet", correct: true, feedback: "Richtig!"},
                {text: "Immer maximale Kontrolle", correct: false, feedback: "FALSCH: NICHT immer maximale Kontrolle! Die Steuerung muss ANGEMESSEN sein."},
                {text: "Die Wirksamkeit der Steuerung durch den externen Anbieter", correct: true, feedback: "Richtig!"},
                {text: "Die Bedeutung des zugekauften Produkts/der DL", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Massnahmen zur Steuerung externer Anbieter sind moeglich?", answers: [
                {text: "Wareneingangspruefung", correct: true, feedback: "Richtig!"},
                {text: "Lieferantenaudits", correct: true, feedback: "Richtig!"},
                {text: "Keine Pruefung, da der Lieferant verantwortlich ist", correct: false, feedback: "FALSCH: 'Keine Pruefung' ist NICHT akzeptabel!"},
                {text: "Ueberwachung der Lieferantenleistung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss externen Anbietern mitgeteilt werden?", answers: [
                {text: "Anforderungen an Produkte/DL/Prozesse", correct: true, feedback: "Richtig!"},
                {text: "Anforderungen an Kompetenz und Qualifikation", correct: true, feedback: "Richtig!"},
                {text: "Das komplette QM-Handbuch der Organisation", correct: false, feedback: "FALSCH: Das KOMPLETTE QM-Handbuch ist NICHT noetig!"},
                {text: "Anforderungen an Verifizierung/Validierung durch die Organisation", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann kann auf Wareneingangspruefung verzichtet werden?", answers: [
                {text: "Nie, sie ist immer Pflicht", correct: false, feedback: "FALSCH: Wareneingangspruefung ist NICHT immer Pflicht!"},
                {text: "Wenn der Lieferant nachweislich zuverlaessig ist", correct: true, feedback: "Richtig!"},
                {text: "Bei entsprechender Risikobetrachtung", correct: true, feedback: "Richtig!"},
                {text: "Wenn der Lieferant zertifiziert ist und regelmaessig auditiert wird", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist ein ausgelagerter Prozess?", answers: [
                {text: "Ein Prozess, den die Organisation selbst durchfuehren koennte", correct: true, feedback: "Richtig!"},
                {text: "Jeder Zukauf von Material", correct: false, feedback: "FALSCH: Nicht JEDER Zukauf ist ein ausgelagerter Prozess!"},
                {text: "Ein Prozess, der von einem externen Anbieter durchgefuehrt wird", correct: true, feedback: "Richtig!"},
                {text: "Ein Prozess, der im Anwendungsbereich des QMS liegt, aber extern erfolgt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind 'beherrschte Bedingungen' fuer die Produktion/DL-Erbringung?", answers: [
                {text: "Verfuegbarkeit dokumentierter Information zu Merkmalen und Ergebnissen", correct: true, feedback: "Richtig!"},
                {text: "Verfuegbarkeit geeigneter Ressourcen zur Ueberwachung/Messung", correct: true, feedback: "Richtig!"},
                {text: "Spontane Produktion ohne Vorgaben", correct: false, feedback: "FALSCH: Spontane Produktion ohne Vorgaben ist NICHT beherrscht!"},
                {text: "Einsatz geeigneter Infrastruktur und Prozessumgebung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche weiteren beherrschten Bedingungen fordert die Norm?", answers: [
                {text: "Einsatz kompetenter Personen", correct: true, feedback: "Richtig!"},
                {text: "Validierung von Prozessen, deren Ergebnis nicht verifiziert werden kann", correct: true, feedback: "Richtig!"},
                {text: "Arbeiten nach Gefuehl und Erfahrung ohne Dokumentation", correct: false, feedback: "FALSCH: 'Nach Gefuehl' ist NICHT beherrscht!"},
                {text: "Massnahmen zur Verhinderung menschlicher Fehler", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind 'spezielle Prozesse' (Prozessvalidierung)?", answers: [
                {text: "Prozesse, deren Ergebnis erst beim Kunden sichtbar wird", correct: true, feedback: "Richtig!"},
                {text: "Prozesse, bei denen das Ergebnis nicht durch Messung verifiziert werden kann", correct: true, feedback: "Richtig!"},
                {text: "Alle Produktionsprozesse", correct: false, feedback: "FALSCH: NICHT alle Produktionsprozesse!"},
                {text: "Beispiele: Schweissen, Kleben, Loeten, Sterilisieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann ist Kennzeichnung von Produkten erforderlich?", answers: [
                {text: "Immer bei allen Produkten", correct: false, feedback: "FALSCH: NICHT immer bei allen! Die Organisation entscheidet basierend auf Anforderungen."},
                {text: "Wenn es notwendig ist, die Konformitaet sicherzustellen", correct: true, feedback: "Richtig!"},
                {text: "Um den Status bezueglich Ueberwachung/Messung zu erkennen", correct: true, feedback: "Richtig!"},
                {text: "Wenn Rueckverfolgbarkeit gefordert ist", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann ist Rueckverfolgbarkeit gefordert?", answers: [
                {text: "Immer", correct: false, feedback: "FALSCH: NICHT immer! Rueckverfolgbarkeit ist nur gefordert, wenn es eine Anforderung gibt."},
                {text: "Wenn es eine Anforderung ist (Kunde, Gesetz, Organisation)", correct: true, feedback: "Richtig!"},
                {text: "Nur bei Lebensmitteln und Medizinprodukten", correct: false, feedback: "FALSCH: Nicht nur bei Lebensmitteln/Medizin!"},
                {text: "Wenn die Organisation es als notwendig erachtet", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist Kundeneigentum im Sinne der Norm?", answers: [
                {text: "Nur Material, das der Kunde beistellt", correct: false, feedback: "FALSCH: NICHT nur Material! Kundeneigentum umfasst auch Werkzeuge, geistiges Eigentum und personenbezogene Daten."},
                {text: "Material, Bauteile oder Werkzeuge des Kunden", correct: true, feedback: "Richtig!"},
                {text: "Geistiges Eigentum (Zeichnungen, Spezifikationen)", correct: true, feedback: "Richtig!"},
                {text: "Personenbezogene Daten des Kunden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss mit Kundeneigentum geschehen?", answers: [
                {text: "Kennzeichnen", correct: true, feedback: "Richtig!"},
                {text: "Schuetzen", correct: true, feedback: "Richtig!"},
                {text: "Kann beliebig verwendet werden", correct: false, feedback: "FALSCH: Kundeneigentum kann NICHT beliebig verwendet werden!"},
                {text: "Bei Verlust oder Beschaedigung dem Kunden berichten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'Erhaltung' von Produkten?", answers: [
                {text: "Schutz waehrend Produktion und Lieferung", correct: true, feedback: "Richtig!"},
                {text: "Kennzeichnung, Handhabung, Verpackung", correct: true, feedback: "Richtig!"},
                {text: "Produkte muessen ewig halten", correct: false, feedback: "FALSCH: 'Ewig halten' ist NICHT gemeint!"},
                {text: "Lagerung und Transport", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind Taetigkeiten nach der Lieferung?", answers: [
                {text: "Garantieleistungen", correct: true, feedback: "Richtig!"},
                {text: "Wartung und Instandhaltung", correct: true, feedback: "Richtig!"},
                {text: "Nur wenn vertraglich vereinbart", correct: false, feedback: "FALSCH: Nicht NUR wenn vertraglich vereinbart! Auch gesetzliche Anforderungen gehoeren dazu."},
                {text: "Entsorgung und Recycling", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aspekte muessen bei Taetigkeiten nach Lieferung beruecksichtigt werden?", answers: [
                {text: "Gesetzliche und behoerdliche Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Moegliche unerwuenschte Folgen der Produkte/DL", correct: true, feedback: "Richtig!"},
                {text: "Nur die Wuensche des Vertriebs", correct: false, feedback: "FALSCH: Vertriebswuensche allein sind NICHT massgeblich!"},
                {text: "Kundenrueckmeldungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei Aenderungen in der Produktion/DL-Erbringung getan werden?", answers: [
                {text: "Aenderungen ueberpruefen und steuern", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen koennen ohne Pruefung umgesetzt werden", correct: false, feedback: "FALSCH: Aenderungen OHNE Pruefung sind riskant!"},
                {text: "Ergebnisse dokumentieren (Wer hat genehmigt? Welche Massnahmen?)", correct: true, feedback: "Richtig!"},
                {text: "Sicherstellen, dass Konformitaet erhalten bleibt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann muessen Produkte/DL freigegeben werden?", answers: [
                {text: "Nach Abschluss aller geplanten Pruefungen", correct: true, feedback: "Richtig!"},
                {text: "Automatisch nach der Produktion", correct: false, feedback: "FALSCH: NICHT automatisch! Die Freigabe erfordert eine aktive Entscheidung."},
                {text: "Wenn die Anforderungen erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "Vor Lieferung an den Kunden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist zur Freigabe erforderlich?", answers: [
                {text: "Nachweis der Erfuellung der Abnahmekriterien", correct: true, feedback: "Richtig!"},
                {text: "Rueckverfolgbarkeit zur freigebenden Person", correct: true, feedback: "Richtig!"},
                {text: "Nur ein muendliches OK", correct: false, feedback: "FALSCH: Ein muendliches OK reicht NICHT!"},
                {text: "Dokumentation der durchgefuehrten Pruefungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist eine Sonderfreigabe?", answers: [
                {text: "Freigabe eines Produkts, das nicht alle Anforderungen erfuellt", correct: true, feedback: "Richtig!"},
                {text: "Die normale Freigabe nach Pruefung", correct: false, feedback: "FALSCH: Sonderfreigabe ist NICHT die normale Freigabe!"},
                {text: "Muss vom Kunden oder zustaendiger Stelle genehmigt werden", correct: true, feedback: "Richtig!"},
                {text: "Auch Abweichgenehmigung oder Konzession genannt", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer darf eine Sonderfreigabe erteilen?", answers: [
                {text: "Jeder Mitarbeiter", correct: false, feedback: "FALSCH: NICHT jeder Mitarbeiter! Sonderfreigaben erfordern besondere Befugnis."},
                {text: "Der Kunde (wenn das Produkt an ihn geht)", correct: true, feedback: "Richtig!"},
                {text: "Eine zustaendige Stelle innerhalb der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Die befugte Person gemaess Festlegung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss mit nichtkonformen Produkten/DL-Ergebnissen geschehen?", answers: [
                {text: "Sie muessen gekennzeichnet werden", correct: true, feedback: "Richtig!"},
                {text: "Sie muessen gesteuert werden", correct: true, feedback: "Richtig!"},
                {text: "Sie koennen einfach weiterverarbeitet werden", correct: false, feedback: "FALSCH: Einfache Weiterverarbeitung ist NICHT erlaubt!"},
                {text: "Unbeabsichtigte Verwendung oder Lieferung muss verhindert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Moeglichkeiten gibt es im Umgang mit nichtkonformen Produkten?", answers: [
                {text: "Korrektur (Nacharbeit)", correct: true, feedback: "Richtig!"},
                {text: "Aussonderung, Sperrung, Rueckgabe, Lieferstopp", correct: true, feedback: "Richtig!"},
                {text: "Immer verschrotten", correct: false, feedback: "FALSCH: NICHT immer verschrotten! Es gibt mehrere Optionen."},
                {text: "Sonderfreigabe (Kunden informieren)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist bei Korrektur (Nacharbeit) zu beachten?", answers: [
                {text: "Nach der Korrektur ist erneute Verifizierung erforderlich", correct: true, feedback: "Richtig!"},
                {text: "Nachgearbeitete Produkte sind automatisch konform", correct: false, feedback: "FALSCH: NICHT automatisch konform! Nach Nacharbeit muss GEPRUEFT werden."},
                {text: "Die Konformitaet muss erneut nachgewiesen werden", correct: true, feedback: "Richtig!"},
                {text: "Nur die korrigierten Merkmale werden geprueft", correct: false, feedback: "FALSCH: Manchmal muss mehr geprueft werden, wenn Wechselwirkungen moeglich sind."}
            ]},
            {q: "Was muss bei nichtkonformen Ergebnissen dokumentiert werden?", answers: [
                {text: "Die Nichtkonformitaet selbst", correct: true, feedback: "Richtig!"},
                {text: "Die ergriffenen Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Nur bei Kundenbeschwerden", correct: false, feedback: "FALSCH: NICHT nur bei Kundenbeschwerden! Jede Nichtkonformitaet muss dokumentiert werden."},
                {text: "Erhaltene Sonderfreigaben", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Korrektur und Korrekturmassnahme?", answers: [
                {text: "Korrektur beseitigt die Nichtkonformitaet (Symptom)", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahme beseitigt die Ursache", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Korrektur: Produkt reparieren. Korrekturmassnahme: Prozess verbessern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Kunde aendert seinen Auftrag nach Produktionsbeginn. Was ist zu tun?", answers: [
                {text: "Aenderung ablehnen, da Produktion laeuft", correct: false, feedback: "FALSCH: Aenderungen pauschal abzulehnen ist KEINE gute Praxis!"},
                {text: "Machbarkeit pruefen und Aenderung dokumentieren", correct: true, feedback: "Richtig!"},
                {text: "Betroffene Bereiche informieren", correct: true, feedback: "Richtig!"},
                {text: "Auswirkungen auf Kosten, Termine, Qualitaet bewerten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Lieferant liefert wiederholt mangelhafte Ware. Welche Massnahmen sind moeglich?", answers: [
                {text: "Verstaerkte Wareneingangspruefung", correct: true, feedback: "Richtig!"},
                {text: "Lieferantenaudit durchfuehren", correct: true, feedback: "Richtig!"},
                {text: "Nichts, der Lieferant ist autonom", correct: false, feedback: "FALSCH: Die Organisation muss handeln!"},
                {text: "Lieferantenentwicklung oder Lieferantenwechsel", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist ein Produktionslenkungsplan (Control Plan)?", answers: [
                {text: "Ein von der ISO 9001 gefordertes Dokument", correct: false, feedback: "FALSCH: Ein Control Plan ist NICHT explizit von ISO 9001 gefordert!"},
                {text: "Ein Hilfsmittel zur Planung von Pruefungen und Kontrollen", correct: true, feedback: "Richtig!"},
                {text: "Beschreibt was, wie, wann und womit geprueft wird", correct: true, feedback: "Richtig!"},
                {text: "Besonders in der Automobilindustrie verbreitet", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Medizinprodukt muss rueckverfolgbar sein. Welche Informationen sind typisch?", answers: [
                {text: "Chargennummer/Seriennummer", correct: true, feedback: "Richtig!"},
                {text: "Verwendete Materialien und Lieferanten", correct: true, feedback: "Richtig!"},
                {text: "Nur das Produktionsdatum", correct: false, feedback: "FALSCH: Nur das Datum reicht NICHT fuer volle Rueckverfolgbarkeit!"},
                {text: "Beteiligte Mitarbeiter und Maschinen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche eigenen Anforderungen kann die Organisation an Produkte/DL stellen?", answers: [
                {text: "Anforderungen, die ueber Kundenwuensche hinausgehen", correct: true, feedback: "Richtig!"},
                {text: "Keine, nur Kundenanforderungen zaehlen", correct: false, feedback: "FALSCH: Die Norm erlaubt ausdruecklich EIGENE Anforderungen!"},
                {text: "Qualitaetsstandards, die das Unternehmen sich selbst setzt", correct: true, feedback: "Richtig!"},
                {text: "Markenversprechen oder Unternehmensphilosophie", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie muessen Schnittstellen zwischen Entwicklungsbeteiligten gesteuert werden?", answers: [
                {text: "Gar nicht, jeder arbeitet autonom", correct: false, feedback: "FALSCH: Autonomes Arbeiten ohne Abstimmung fuehrt zu Fehlern!"},
                {text: "Durch klare Kommunikationsregeln", correct: true, feedback: "Richtig!"},
                {text: "Durch Definition von Verantwortlichkeiten an den Schnittstellen", correct: true, feedback: "Richtig!"},
                {text: "Durch regelmaessigen Informationsaustausch", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann sollten Kunden oder Anwender in die Entwicklung einbezogen werden?", answers: [
                {text: "Nie, Entwicklung ist intern", correct: false, feedback: "FALSCH: Kundeneinbeziehung kann SEHR wichtig sein!"},
                {text: "Bei der Validierung (Erfuellt es den Verwendungszweck?)", correct: true, feedback: "Richtig!"},
                {text: "Wenn ihre Einbeziehung fuer erfolgreiche Entwicklung noetig ist", correct: true, feedback: "Richtig!"},
                {text: "Bei der Definition der Anforderungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Warum muessen 'moegliche Folgen von Fehlern' als Entwicklungseingabe beruecksichtigt werden?", answers: [
                {text: "Um kritische Merkmale zu identifizieren", correct: true, feedback: "Richtig!"},
                {text: "Das ist keine Normforderung", correct: false, feedback: "FALSCH: Es IST eine Normforderung in 8.3.3 e)!"},
                {text: "Um Risiken frueh zu erkennen und zu minimieren", correct: true, feedback: "Richtig!"},
                {text: "Um angemessene Pruefungen und Sicherheitsmerkmale zu planen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer Lieferantenbewertungen gefordert?", answers: [
                {text: "Ergebnisse der Bewertungen muessen aufbewahrt werden", correct: true, feedback: "Richtig!"},
                {text: "Keine, muendliche Einschaetzung reicht", correct: false, feedback: "FALSCH: Muendliche Einschaetzung reicht NICHT!"},
                {text: "Ergebnisse der Leistungsueberwachung", correct: true, feedback: "Richtig!"},
                {text: "Ergebnisse der Neubewertungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'Wechselwirkungen mit der Organisation' bei externen Anbietern?", answers: [
                {text: "Der Lieferant arbeitet voellig unabhaengig", correct: false, feedback: "FALSCH: Voellig unabhaengig waere KEINE Wechselwirkung!"},
                {text: "Steuerung der Zusammenarbeit und Kommunikation", correct: true, feedback: "Richtig!"},
                {text: "Abstimmung bei Prozessen, die ineinandergreifen", correct: true, feedback: "Richtig!"},
                {text: "Z.B. gemeinsame Qualitaetspruefungen oder Freigabeprozesse", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "kapitel9": {
        title: "Kapitel 9 - Bewertung der Leistung",
        questions: [
            {q: "Was muss die Organisation bezueglich Ueberwachung und Messung bestimmen?", answers: [
                {text: "Was ueberwacht und gemessen werden muss", correct: true, feedback: "Richtig!"},
                {text: "Welche Methoden anzuwenden sind", correct: true, feedback: "Richtig!"},
                {text: "Nur die Endpruefung am Produkt", correct: false, feedback: "FALSCH: NICHT nur Endpruefung! Die Norm fordert Ueberwachung des gesamten QMS."},
                {text: "Wann ueberwacht und gemessen werden muss", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann muessen Ergebnisse der Ueberwachung und Messung bewertet werden?", answers: [
                {text: "Nur am Jahresende", correct: false, feedback: "FALSCH: Nicht NUR am Jahresende! Die Organisation legt die Intervalle selbst fest."},
                {text: "Die Organisation muss festlegen, wann bewertet wird", correct: true, feedback: "Richtig!"},
                {text: "Die Ergebnisse muessen analysiert und bewertet werden", correct: true, feedback: "Richtig!"},
                {text: "Nie, nur Daten sammeln reicht", correct: false, feedback: "FALSCH: Daten sammeln allein ist wertlos - sie muessen BEWERTET werden!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer Ueberwachung/Messung gefordert?", answers: [
                {text: "Nachweise der Ergebnisse muessen aufbewahrt werden", correct: true, feedback: "Richtig!"},
                {text: "Keine Dokumentation erforderlich", correct: false, feedback: "FALSCH: Dokumentation IST erforderlich!"},
                {text: "Die Ergebnisse dienen als Nachweis fuer Leistung und Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "Nur bei Reklamationen dokumentieren", correct: false, feedback: "FALSCH: Nicht nur bei Reklamationen!"}
            ]},
            {q: "Was muss bezueglich Kundenzufriedenheit ueberwacht werden?", answers: [
                {text: "Die Wahrnehmung der Kunden", correct: true, feedback: "Richtig!"},
                {text: "Der Grad, zu dem Erwartungen erfuellt wurden", correct: true, feedback: "Richtig!"},
                {text: "Nur schriftliche Beschwerden", correct: false, feedback: "FALSCH: NICHT nur schriftliche Beschwerden!"},
                {text: "Ob Kundenbeduerfnisse und -erwartungen erfuellt wurden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Methoden zur Ermittlung der Kundenzufriedenheit nennt die Norm als Beispiele?", answers: [
                {text: "Kundenbefragungen", correct: true, feedback: "Richtig!"},
                {text: "Rueckmeldungen zu Produkten/DL", correct: true, feedback: "Richtig!"},
                {text: "Nur persoenliche Gespraeche", correct: false, feedback: "FALSCH: NICHT nur persoenliche Gespraeche!"},
                {text: "Analyse von Marktanteilen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche weiteren Methoden zur Kundenzufriedenheitsermittlung sind moeglich?", answers: [
                {text: "Analyse von Garantieanspruechen", correct: true, feedback: "Richtig!"},
                {text: "Treffen mit Kunden", correct: true, feedback: "Richtig!"},
                {text: "Telepathie", correct: false, feedback: "FALSCH: Telepathie ist keine anerkannte Methode!"},
                {text: "Haendlerberichte", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ist ein jaehrlicher Kundenzufriedenheitsfragebogen ausreichend?", answers: [
                {text: "Ja, das reicht immer", correct: false, feedback: "FALSCH: Ein Fragebogen reicht NICHT immer!"},
                {text: "Nicht unbedingt, es kommt auf die Branche und Kundenbeziehung an", correct: true, feedback: "Richtig!"},
                {text: "Die Methoden muessen zur Organisation passen", correct: true, feedback: "Richtig!"},
                {text: "Andere Methoden koennen ergaenzend oder alternativ genutzt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei der Analyse und Bewertung betrachtet werden?", answers: [
                {text: "Konformitaet von Produkten und Dienstleistungen", correct: true, feedback: "Richtig!"},
                {text: "Grad der Kundenzufriedenheit", correct: true, feedback: "Richtig!"},
                {text: "Nur negative Ergebnisse", correct: false, feedback: "FALSCH: NICHT nur negative Ergebnisse!"},
                {text: "Leistung und Wirksamkeit des QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche weiteren Aspekte muessen analysiert werden?", answers: [
                {text: "Ob die Planung wirksam umgesetzt wurde", correct: true, feedback: "Richtig!"},
                {text: "Wirksamkeit der Massnahmen zu Risiken/Chancen", correct: true, feedback: "Richtig!"},
                {text: "Das Privatvermoegen der Geschaeftsfuehrung", correct: false, feedback: "FALSCH: Das Privatvermoegen ist KEIN QMS-Thema!"},
                {text: "Leistung externer Anbieter", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist das Ziel der Analyse und Bewertung?", answers: [
                {text: "Verbesserungsbedarf erkennen", correct: true, feedback: "Richtig!"},
                {text: "Nur Fehler dokumentieren", correct: false, feedback: "FALSCH: Nicht NUR Fehler dokumentieren!"},
                {text: "Eignung und Wirksamkeit des QMS bewerten", correct: true, feedback: "Richtig!"},
                {text: "Grundlage fuer Entscheidungen schaffen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "In welchen Abstaenden muessen interne Audits durchgefuehrt werden?", answers: [
                {text: "Genau einmal pro Jahr", correct: false, feedback: "FALSCH: 'Einmal pro Jahr' ist NICHT vorgeschrieben!"},
                {text: "In geplanten Abstaenden", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation legt die Intervalle selbst fest", correct: true, feedback: "Richtig!"},
                {text: "Nur wenn der Zertifizierer es fordert", correct: false, feedback: "FALSCH: Der Zertifizierer gibt das nicht vor."}
            ]},
            {q: "Was muss das interne Audit pruefen?", answers: [
                {text: "Ob das QMS die eigenen Anforderungen der Organisation erfuellt", correct: true, feedback: "Richtig!"},
                {text: "Ob das QMS die Anforderungen der ISO 9001 erfuellt", correct: true, feedback: "Richtig!"},
                {text: "Nur ob Dokumente vorhanden sind", correct: false, feedback: "FALSCH: Nicht NUR Dokumente pruefen!"},
                {text: "Ob das QMS wirksam verwirklicht und aufrechterhalten wird", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei der Auditplanung beruecksichtigt werden?", answers: [
                {text: "Bedeutung der betroffenen Prozesse", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen mit Einfluss auf die Organisation", correct: true, feedback: "Richtig!"},
                {text: "Alle Bereiche gleich oft auditieren", correct: false, feedback: "FALSCH: NICHT alle Bereiche gleich oft! Kritische Prozesse sollten haeufiger auditiert werden."},
                {text: "Ergebnisse frueherer Audits", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was gehoert zu einem Auditprogramm?", answers: [
                {text: "Festlegung von Auditkriterien und Umfang", correct: true, feedback: "Richtig!"},
                {text: "Auswahl der Auditoren", correct: true, feedback: "Richtig!"},
                {text: "Beliebige Durchfuehrung ohne Plan", correct: false, feedback: "FALSCH: Beliebige Durchfuehrung ist NICHT akzeptabel!"},
                {text: "Sicherstellung der Objektivitaet und Unparteilichkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer darf interne Audits durchfuehren?", answers: [
                {text: "Nur externe Zertifizierer", correct: false, feedback: "FALSCH: Interne Audits werden INTERN durchgefuehrt!"},
                {text: "Interne Mitarbeiter mit Auditorenkompetenz", correct: true, feedback: "Richtig!"},
                {text: "Auditoren muessen unabhaengig vom auditierten Bereich sein", correct: true, feedback: "Richtig!"},
                {text: "Der Bereichsleiter seinen eigenen Bereich", correct: false, feedback: "FALSCH: Man darf seinen EIGENEN Bereich NICHT auditieren!"}
            ]},
            {q: "Was bedeutet 'Objektivitaet und Unparteilichkeit' bei Auditoren?", answers: [
                {text: "Der Auditor darf keine persoenlichen Interessen haben", correct: true, feedback: "Richtig!"},
                {text: "Der Auditor darf seinen eigenen Arbeitsbereich auditieren", correct: false, feedback: "FALSCH: EIGENEN Bereich auditieren ist NICHT objektiv!"},
                {text: "Der Auditor muss unabhaengig vom auditierten Bereich sein", correct: true, feedback: "Richtig!"},
                {text: "Der Auditor bewertet sachlich anhand von Kriterien", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss nach einem internen Audit geschehen?", answers: [
                {text: "Ergebnisse an relevantes Management berichten", correct: true, feedback: "Richtig!"},
                {text: "Nichts, das Audit ist abgeschlossen", correct: false, feedback: "FALSCH: Nach dem Audit ist NICHT Schluss!"},
                {text: "Erforderliche Korrekturen und Korrekturmassnahmen durchfuehren", correct: true, feedback: "Richtig!"},
                {text: "Ergebnisse dokumentieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer Audits gefordert?", answers: [
                {text: "Nachweis der Umsetzung des Auditprogramms", correct: true, feedback: "Richtig!"},
                {text: "Keine, muendliche Berichte reichen", correct: false, feedback: "FALSCH: Muendliche Berichte reichen NICHT!"},
                {text: "Auditergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Auditberichte", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Auditfeststellung und Auditergebnis?", answers: [
                {text: "Feststellung = Einzelbeobachtung", correct: true, feedback: "Richtig!"},
                {text: "Ergebnis = Gesamtbewertung des Audits", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Feststellungen koennen positiv oder negativ sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist eine Nichtkonformitaet im Audit?", answers: [
                {text: "Nichterfuellung einer Anforderung", correct: true, feedback: "Richtig!"},
                {text: "Jede kleine Verbesserungsmoeglichkeit", correct: false, feedback: "FALSCH: Nicht JEDE Verbesserungsmoeglichkeit ist eine Nichtkonformitaet!"},
                {text: "Abweichung von Norm, Vorgaben oder Kundenanforderungen", correct: true, feedback: "Richtig!"},
                {text: "Kann durch objektiven Nachweis belegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer fuehrt die Managementbewertung durch?", answers: [
                {text: "Der Qualitaetsbeauftragte allein", correct: false, feedback: "FALSCH: Der QMB kann vorbereiten, aber die BEWERTUNG macht die oberste Leitung!"},
                {text: "Die oberste Leitung", correct: true, feedback: "Richtig!"},
                {text: "Ein externes Beratungsunternehmen", correct: false, feedback: "FALSCH: Externe koennen unterstuetzen, aber nicht die Verantwortung uebernehmen."},
                {text: "Kann an das mittlere Management delegiert werden", correct: false, feedback: "FALSCH: NICHT delegierbar - ist Fuehrungsaufgabe!"}
            ]},
            {q: "In welchen Abstaenden muss die Managementbewertung stattfinden?", answers: [
                {text: "Genau einmal pro Jahr", correct: false, feedback: "FALSCH: 'Einmal pro Jahr' steht NICHT in der Norm!"},
                {text: "In geplanten Abstaenden", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation legt die Intervalle fest", correct: true, feedback: "Richtig!"},
                {text: "Nur vor Zertifizierungsaudits", correct: false, feedback: "FALSCH: NICHT nur vor Audits!"}
            ]},
            {q: "Was ist der Zweck der Managementbewertung?", answers: [
                {text: "Sicherstellen der fortdauernden Eignung des QMS", correct: true, feedback: "Richtig!"},
                {text: "Nur Fehler auflisten", correct: false, feedback: "FALSCH: NICHT nur Fehler auflisten! Die Managementbewertung ist STRATEGISCH."},
                {text: "Sicherstellen der Angemessenheit und Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "Strategische Ausrichtung mit dem QMS abstimmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Eingaben muss die Managementbewertung beruecksichtigen?", answers: [
                {text: "Status von Massnahmen frueherer Managementbewertungen", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen bei externen/internen Themen", correct: true, feedback: "Richtig!"},
                {text: "Das Wetter am Bewertungstag", correct: false, feedback: "FALSCH: Das Wetter ist KEIN Eingabethema!"},
                {text: "Informationen ueber die QMS-Leistung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche QMS-Leistungsinformationen sind Eingaben der Managementbewertung?", answers: [
                {text: "Kundenzufriedenheit und Rueckmeldungen interessierter Parteien", correct: true, feedback: "Richtig!"},
                {text: "Erreichung der Qualitaetsziele", correct: true, feedback: "Richtig!"},
                {text: "Nur positive Ergebnisse", correct: false, feedback: "FALSCH: NICHT nur positive Ergebnisse!"},
                {text: "Prozessleistung und Produktkonformitaet", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche weiteren Eingaben fordert die Norm fuer die Managementbewertung?", answers: [
                {text: "Ergebnisse von Audits", correct: true, feedback: "Richtig!"},
                {text: "Leistung externer Anbieter", correct: true, feedback: "Richtig!"},
                {text: "Das Jahreshoroskop", correct: false, feedback: "FALSCH: Das Jahreshoroskop ist KEIN Norminhalt!"},
                {text: "Nichtkonformitaeten und Korrekturmassnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Eingaben zu Risiken und Verbesserung sind gefordert?", answers: [
                {text: "Wirksamkeit der Massnahmen zu Risiken und Chancen", correct: true, feedback: "Richtig!"},
                {text: "Moeglichkeiten zur Verbesserung", correct: true, feedback: "Richtig!"},
                {text: "Angemessenheit der Ressourcen", correct: true, feedback: "Richtig!"},
                {text: "Risiken werden in der Managementbewertung nicht betrachtet", correct: false, feedback: "FALSCH: Risiken werden SEHR WOHL betrachtet!"}
            ]},
            {q: "Was muessen die Ergebnisse der Managementbewertung enthalten?", answers: [
                {text: "Entscheidungen zu Verbesserungsmoeglichkeiten", correct: true, feedback: "Richtig!"},
                {text: "Nur eine Zusammenfassung fuer den Zertifizierer", correct: false, feedback: "FALSCH: Die Managementbewertung ist NICHT fuer den Zertifizierer!"},
                {text: "Entscheidungen zu Aenderungsbedarf am QMS", correct: true, feedback: "Richtig!"},
                {text: "Ressourcenbedarf", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Muessen die Ergebnisse der Managementbewertung dokumentiert werden?", answers: [
                {text: "Nein, muendliche Absprachen reichen", correct: false, feedback: "FALSCH: Muendlich reicht NICHT!"},
                {text: "Ja, als dokumentierte Information aufbewahren", correct: true, feedback: "Richtig!"},
                {text: "Nur die Teilnehmerliste", correct: false, feedback: "FALSCH: Nur Teilnehmerliste reicht NICHT!"},
                {text: "Die Norm fordert den Nachweis der Ergebnisse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Unternehmen fuehrt die Managementbewertung nur muendlich durch. Ist das normkonform?", answers: [
                {text: "Ja, die Form ist freigestellt", correct: false, feedback: "FALSCH: Die Form ist NICHT voellig frei!"},
                {text: "Nein, dokumentierte Information ist gefordert", correct: true, feedback: "Richtig!"},
                {text: "Die Ergebnisse muessen nachvollziehbar sein", correct: true, feedback: "Richtig!"},
                {text: "Muendliche Besprechung ist ok, aber Dokumentation der Ergebnisse ist Pflicht", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie haengen internes Audit und Managementbewertung zusammen?", answers: [
                {text: "Auditergebnisse sind Eingabe fuer die Managementbewertung", correct: true, feedback: "Richtig!"},
                {text: "Sie sind voellig unabhaengig", correct: false, feedback: "FALSCH: Sie sind NICHT unabhaengig!"},
                {text: "Die Managementbewertung bewertet die Wirksamkeit des Auditprogramms", correct: true, feedback: "Richtig!"},
                {text: "Beide sind Teil des 'Check' im PDCA-Zyklus", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist ein Auditprogramm?", answers: [
                {text: "Ein einzelner Auditbericht", correct: false, feedback: "FALSCH: Das Auditprogramm ist NICHT ein einzelner Bericht!"},
                {text: "Die Gesamtheit aller geplanten Audits fuer einen Zeitraum", correct: true, feedback: "Richtig!"},
                {text: "Enthaelt Ziele, Umfang, Ressourcen, Zeitplan", correct: true, feedback: "Richtig!"},
                {text: "Beruecksichtigt Risiken und Prioritaeten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wer ist fuer das Auditprogramm verantwortlich?", answers: [
                {text: "Jeder Auditor selbst", correct: false, feedback: "FALSCH: Nicht jeder Auditor selbst - es braucht eine KOORDINATION!"},
                {text: "Die oberste Leitung muss es genehmigen", correct: true, feedback: "Richtig!"},
                {text: "Eine benannte verantwortliche Person", correct: true, feedback: "Richtig!"},
                {text: "Der externe Zertifizierer", correct: false, feedback: "FALSCH: Der Zertifizierer macht das EXTERNE Audit, nicht das interne Programm."}
            ]},
            {q: "Was ist der Unterschied zwischen internem Audit und Zertifizierungsaudit?", answers: [
                {text: "Internes Audit wird von der Organisation selbst durchgefuehrt", correct: true, feedback: "Richtig!"},
                {text: "Zertifizierungsaudit wird von einer externen Stelle durchgefuehrt", correct: true, feedback: "Richtig!"},
                {text: "Beide haben den gleichen Zweck", correct: false, feedback: "FALSCH: Der Zweck ist NICHT gleich!"},
                {text: "Internes Audit dient der eigenen Verbesserung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie oft sollte ein vollstaendiger Auditzyklus alle QMS-Bereiche abdecken?", answers: [
                {text: "Die Norm schreibt keinen festen Zyklus vor", correct: true, feedback: "Richtig!"},
                {text: "Typischerweise innerhalb von 1-3 Jahren", correct: true, feedback: "Richtig!"},
                {text: "Jeder Bereich muss monatlich auditiert werden", correct: false, feedback: "FALSCH: Monatlich ist NICHT gefordert!"},
                {text: "Die Organisation legt den Zyklus risikobasiert fest", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was sind typische Kennzahlen zur QMS-Leistungsbewertung?", answers: [
                {text: "Reklamationsquote", correct: true, feedback: "Richtig!"},
                {text: "Liefertreue", correct: true, feedback: "Richtig!"},
                {text: "Das Alter der Mitarbeiter", correct: false, feedback: "FALSCH: Das Alter der Mitarbeiter ist KEINE QMS-Kennzahl!"},
                {text: "Ausschussquote", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Auditor findet eine Abweichung. Was ist korrekt?", answers: [
                {text: "Er dokumentiert die Feststellung mit objektivem Nachweis", correct: true, feedback: "Richtig!"},
                {text: "Er korrigiert den Fehler selbst", correct: false, feedback: "FALSCH: Der Auditor korrigiert NICHT selbst!"},
                {text: "Er bespricht die Feststellung mit dem Auditierten", correct: true, feedback: "Richtig!"},
                {text: "Er fordert Massnahmen vom Verantwortlichen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist ein Auditkriterium?", answers: [
                {text: "Die Referenz, gegen die geprueft wird", correct: true, feedback: "Richtig!"},
                {text: "Die persoenliche Meinung des Auditors", correct: false, feedback: "FALSCH: Die persoenliche Meinung ist KEIN Kriterium!"},
                {text: "Z.B. die ISO 9001, interne Vorgaben, Kundenanforderungen", correct: true, feedback: "Richtig!"},
                {text: "Muss vor dem Audit festgelegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Kompetenzen braucht ein interner Auditor?", answers: [
                {text: "Kenntnis der ISO 9001", correct: true, feedback: "Richtig!"},
                {text: "Audittechniken (Fragetechniken, Dokumentation)", correct: true, feedback: "Richtig!"},
                {text: "Muss ein externes Auditorzertifikat haben", correct: false, feedback: "FALSCH: Ein EXTERNES Zertifikat ist NICHT gefordert!"},
                {text: "Kenntnis der zu auditierenden Prozesse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was passiert, wenn die Managementbewertung Ressourcenmangel feststellt?", answers: [
                {text: "Nichts, es ist nur eine Feststellung", correct: false, feedback: "FALSCH: Es bleibt NICHT bei der Feststellung!"},
                {text: "Die oberste Leitung muss entscheiden, ob Ressourcen bereitgestellt werden", correct: true, feedback: "Richtig!"},
                {text: "Das Ergebnis 'Ressourcenbedarf' muss dokumentiert werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen zur Ressourcenbeschaffung sollten festgelegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was bedeutet 'Informationen einholen, ueberwachen und ueberpruefen' bei Kundenzufriedenheit?", answers: [
                {text: "Einholen: Daten aktiv sammeln (Befragungen, Feedback)", correct: true, feedback: "Richtig!"},
                {text: "Ueberwachen: Daten kontinuierlich beobachten und auswerten", correct: true, feedback: "Richtig!"},
                {text: "Eine einmalige Befragung reicht aus", correct: false, feedback: "FALSCH: Einmalig reicht NICHT!"},
                {text: "Ueberpruefen: Bewerten, ob Massnahmen zur Verbesserung noetig sind", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Ueberwachungs- und Messergebnisse sind Eingabe der Managementbewertung?", answers: [
                {text: "Ergebnisse der Prozessueberwachung", correct: true, feedback: "Richtig!"},
                {text: "Nur die Ergebnisse externer Audits", correct: false, feedback: "FALSCH: NICHT nur externe Audits!"},
                {text: "Ergebnisse der Produktpruefungen", correct: true, feedback: "Richtig!"},
                {text: "Alle relevanten Messergebnisse zur QMS-Leistung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Rolle spielen Trends bei der Analyse und Bewertung?", answers: [
                {text: "Trends zeigen Entwicklungen ueber die Zeit", correct: true, feedback: "Richtig!"},
                {text: "Trends sind unwichtig, nur Einzelwerte zaehlen", correct: false, feedback: "FALSCH: Trends sind SEHR wichtig!"},
                {text: "Negative Trends erfordern fruehzeitige Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Positive Trends zeigen Wirksamkeit von Verbesserungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Duerfen interne Audits ohne Vorankuendigung durchgefuehrt werden?", answers: [
                {text: "Nein, Audits muessen immer angekuendigt werden", correct: false, feedback: "FALSCH: Ankuendigung ist NICHT vorgeschrieben!"},
                {text: "Ja, die Norm schreibt keine Ankuendigung vor", correct: true, feedback: "Richtig!"},
                {text: "Unangekuendigte Audits koennen sinnvoll sein (z.B. bei Verdacht)", correct: true, feedback: "Richtig!"},
                {text: "Die Organisation legt selbst fest, wie Audits angekuendigt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kann die Managementbewertung auf mehrere Termine aufgeteilt werden?", answers: [
                {text: "Nein, sie muss an einem Tag stattfinden", correct: false, feedback: "FALSCH: Die Norm fordert KEINEN Einzeltermin!"},
                {text: "Ja, wenn alle Eingaben im Zyklus behandelt werden", correct: true, feedback: "Richtig!"},
                {text: "Manche Themen koennen in regelmaessigen Meetings behandelt werden", correct: true, feedback: "Richtig!"},
                {text: "Die Gesamtbewertung muss aber zusammengefuehrt werden", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "kapitel10": {
        title: "Kapitel 10 - Verbesserung",
        questions: [
            {q: "Was muss die Organisation bezueglich Verbesserung tun?", answers: [
                {text: "Verbesserungsmoeglichkeiten bestimmen und auswaehlen", correct: true, feedback: "Richtig!"},
                {text: "Nur auf Beschwerden reagieren", correct: false, feedback: "FALSCH: NICHT nur auf Beschwerden reagieren! Verbesserung ist PROAKTIV - Chancen suchen, nicht nur Probleme loesen."},
                {text: "Notwendige Massnahmen ergreifen, um Kundenanforderungen zu erfuellen", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit erhoehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aspekte umfasst die Verbesserung nach ISO 9001?", answers: [
                {text: "Produkte und Dienstleistungen verbessern", correct: true, feedback: "Richtig!"},
                {text: "Unerwuenschte Auswirkungen korrigieren, verhindern, verringern", correct: true, feedback: "Richtig!"},
                {text: "Nur Kostensenkung", correct: false, feedback: "FALSCH: Verbesserung ist NICHT nur Kostensenkung! Es geht um Qualitaet, Kundenzufriedenheit, Prozessleistung, Wirksamkeit."},
                {text: "Leistung und Wirksamkeit des QMS verbessern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Beispiele fuer Verbesserung nennt die Norm?", answers: [
                {text: "Korrektur", correct: true, feedback: "Richtig!"},
                {text: "Fortlaufende Verbesserung (KVP)", correct: true, feedback: "Richtig!"},
                {text: "Nur radikale Innovationen", correct: false, feedback: "FALSCH: NICHT nur radikale Innovationen! Die Norm nennt verschiedene Verbesserungsarten: kleine Schritte (KVP), Korrekturen, aber AUCH grosse Spruenge."},
                {text: "Sprunghafte Aenderung, Innovation, Reorganisation", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss bei einer Nichtkonformitaet (einschliesslich Reklamationen) geschehen?", answers: [
                {text: "Darauf reagieren und Massnahmen zur Steuerung ergreifen", correct: true, feedback: "Richtig!"},
                {text: "Die Nichtkonformitaet ignorieren", correct: false, feedback: "FALSCH: Ignorieren ist KEINE Option! Jede Nichtkonformitaet erfordert Reaktion."},
                {text: "Massnahmen zur Korrektur ergreifen", correct: true, feedback: "Richtig!"},
                {text: "Mit den Folgen und Auswirkungen umgehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der erste Schritt nach Erkennen einer Nichtkonformitaet?", answers: [
                {text: "Sofort die Ursache analysieren", correct: false, feedback: "FALSCH: Ursachenanalyse kommt SPAETER! Zuerst muss der akute Fehler korrigiert werden."},
                {text: "Darauf reagieren und korrigieren (Fehler beseitigen)", correct: true, feedback: "Richtig!"},
                {text: "Einen Bericht schreiben", correct: false, feedback: "FALSCH: Der Bericht kommt spaeter - zuerst handeln!"},
                {text: "Die Auswirkungen begrenzen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss nach der Korrektur einer Nichtkonformitaet getan werden?", answers: [
                {text: "Die Notwendigkeit von Korrekturmassnahmen bewerten", correct: true, feedback: "Richtig!"},
                {text: "Die Nichtkonformitaet ueberpruefen (Ursachenanalyse)", correct: true, feedback: "Richtig!"},
                {text: "Nichts, mit der Korrektur ist alles erledigt", correct: false, feedback: "FALSCH: Mit der Korrektur ist NICHT alles erledigt! Die URSACHE muss analysiert werden."},
                {text: "Pruefen, ob aehnliche Nichtkonformitaeten existieren koennten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Korrektur und Korrekturmassnahme?", answers: [
                {text: "Korrektur beseitigt den Fehler (Symptom)", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahme beseitigt die Ursache", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch! Korrektur = Fehler reparieren, Korrekturmassnahme = Ursache beseitigen."},
                {text: "Korrekturmassnahme verhindert Wiederholung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was gehoert zur Ursachenanalyse bei Nichtkonformitaeten?", answers: [
                {text: "Die Nichtkonformitaet ueberpruefen", correct: true, feedback: "Richtig!"},
                {text: "Die Ursachen bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Raten, was die Ursache sein koennte", correct: false, feedback: "FALSCH: RATEN ist keine Ursachenanalyse! Es braucht systematische Methoden."},
                {text: "Pruefen, ob aehnliche Nichtkonformitaeten existieren oder auftreten koennten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Methoden zur Ursachenanalyse gibt es?", answers: [
                {text: "5-Why-Methode (5x Warum fragen)", correct: true, feedback: "Richtig!"},
                {text: "Ishikawa-Diagramm (Fischgraete)", correct: true, feedback: "Richtig!"},
                {text: "Wuerfeln", correct: false, feedback: "FALSCH: Wuerfeln ist KEINE anerkannte Methode! Ursachenanalyse erfordert systematische Werkzeuge."},
                {text: "Fehlerbaumanalyse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wann sind Korrekturmassnahmen erforderlich?", answers: [
                {text: "Bei jeder Nichtkonformitaet automatisch", correct: false, feedback: "FALSCH: NICHT automatisch bei jeder NK! Manchmal reicht Korrektur, wenn es ein Einzelfall ist."},
                {text: "Wenn die Ursachenanalyse zeigt, dass Wiederholung moeglich ist", correct: true, feedback: "Richtig!"},
                {text: "Proportional zur Auswirkung der Nichtkonformitaet", correct: true, feedback: "Richtig!"},
                {text: "Nur bei Kundenreklamationen", correct: false, feedback: "FALSCH: Nicht NUR bei Reklamationen - auch interne NK koennen Korrekturmassnahmen erfordern."}
            ]},
            {q: "Was bedeutet 'Korrekturmassnahmen muessen den Auswirkungen angemessen sein'?", answers: [
                {text: "Kleine Fehler erfordern kleine Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Der Aufwand muss im Verhaeltnis zum Risiko stehen", correct: true, feedback: "Richtig!"},
                {text: "Jeder Fehler erfordert die gleiche Massnahme", correct: false, feedback: "FALSCH: NICHT jeder Fehler braucht die gleiche Massnahme!"},
                {text: "Kritische Fehler erfordern umfangreichere Massnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss nach Umsetzung einer Korrekturmassnahme getan werden?", answers: [
                {text: "Die Wirksamkeit der Korrekturmassnahme ueberpruefen", correct: true, feedback: "Richtig!"},
                {text: "Nichts, die Massnahme wirkt automatisch", correct: false, feedback: "FALSCH: Massnahmen wirken NICHT automatisch! Man muss PRUEFEN, ob die Ursache beseitigt wurde."},
                {text: "Dokumentieren, ob die Massnahme erfolgreich war", correct: true, feedback: "Richtig!"},
                {text: "Bei Unwirksamkeit: neue Massnahme festlegen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Muessen Risiken und Chancen bei Korrekturmassnahmen aktualisiert werden?", answers: [
                {text: "Nein, Risiken haben damit nichts zu tun", correct: false, feedback: "FALSCH: Risiken HABEN damit zu tun! Eine Nichtkonformitaet kann ein bisher unbekanntes Risiko aufzeigen."},
                {text: "Ja, falls erforderlich", correct: true, feedback: "Richtig!"},
                {text: "Neue Erkenntnisse koennen neue Risiken aufzeigen", correct: true, feedback: "Richtig!"},
                {text: "Wirksame Massnahmen koennen Risiken reduzieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Muessen Aenderungen am QMS aufgrund von Korrekturmassnahmen vorgenommen werden?", answers: [
                {text: "Nie, das QMS bleibt unveraendert", correct: false, feedback: "FALSCH: Das QMS kann und muss sich AENDERN, wenn Korrekturmassnahmen das erfordern!"},
                {text: "Falls erforderlich, ja", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahmen koennen Prozessaenderungen erfordern", correct: true, feedback: "Richtig!"},
                {text: "Dokumentierte Verfahren muessen ggf. angepasst werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer Nichtkonformitaeten gefordert?", answers: [
                {text: "Art der Nichtkonformitaet", correct: true, feedback: "Richtig!"},
                {text: "Ergriffene Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Nur muendliche Mitteilung an den Vorgesetzten", correct: false, feedback: "FALSCH: Muendliche Mitteilung reicht NICHT! Nichtkonformitaeten muessen dokumentiert werden."},
                {text: "Ergebnisse von Korrekturmassnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Eine Reklamation trifft ein. Was muss getan werden?", answers: [
                {text: "Die Reklamation ist eine Nichtkonformitaet", correct: true, feedback: "Richtig!"},
                {text: "Zunaechst den Kunden zufriedenstellen (Korrektur)", correct: true, feedback: "Richtig!"},
                {text: "Die Reklamation ignorieren, wenn der Kunde uebertreibt", correct: false, feedback: "FALSCH: Reklamationen NIEMALS ignorieren! Jede Reklamation ist eine Chance zur Verbesserung."},
                {text: "Ursache analysieren und Wiederholung verhindern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist fortlaufende Verbesserung?", answers: [
                {text: "Einmalige Verbesserungsprojekte", correct: false, feedback: "FALSCH: NICHT nur einmalige Projekte! Fortlaufend bedeutet: immer wieder, kontinuierlich, dauerhaft."},
                {text: "Wiederkehrende Taetigkeit zur Leistungssteigerung", correct: true, feedback: "Richtig!"},
                {text: "Kontinuierlicher Verbesserungsprozess (KVP)", correct: true, feedback: "Richtig!"},
                {text: "Staendiges Streben nach Verbesserung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was muss die Organisation bezueglich fortlaufender Verbesserung tun?", answers: [
                {text: "Eignung, Angemessenheit und Wirksamkeit des QMS verbessern", correct: true, feedback: "Richtig!"},
                {text: "Nur verbessern, wenn Kunden es fordern", correct: false, feedback: "FALSCH: NICHT nur wenn Kunden es fordern! Verbesserung ist Selbstverpflichtung der Organisation."},
                {text: "Ergebnisse der Analyse und Bewertung beruecksichtigen", correct: true, feedback: "Richtig!"},
                {text: "Ergebnisse der Managementbewertung beruecksichtigen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Eingaben dienen der fortlaufenden Verbesserung?", answers: [
                {text: "Ergebnisse der Datenanalyse (9.1.3)", correct: true, feedback: "Richtig!"},
                {text: "Auditergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Zufaellige Ideen ohne Datengrundlage", correct: false, feedback: "FALSCH: Zufaellige Ideen sind keine systematische Grundlage! Verbesserung basiert auf DATEN."},
                {text: "Ergebnisse der Managementbewertung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der PDCA-Zyklus?", answers: [
                {text: "Plan-Do-Check-Act", correct: true, feedback: "Richtig!"},
                {text: "Ein einmaliger Durchlauf", correct: false, feedback: "FALSCH: PDCA ist KEIN einmaliger Durchlauf! Der Zyklus dreht sich immer weiter."},
                {text: "Planen-Umsetzen-Pruefen-Handeln", correct: true, feedback: "Richtig!"},
                {text: "Grundlage fuer fortlaufende Verbesserung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche QM-Grundsaetze unterstuetzen die Verbesserung?", answers: [
                {text: "Verbesserung ist selbst ein QM-Grundsatz", correct: true, feedback: "Richtig!"},
                {text: "Faktengestuetzte Entscheidungsfindung", correct: true, feedback: "Richtig!"},
                {text: "Kundenorientierung", correct: true, feedback: "Richtig!"},
                {text: "Keiner, Verbesserung ist unabhaengig", correct: false, feedback: "FALSCH: Verbesserung ist NICHT unabhaengig! Sie ist einer der 7 QM-Grundsaetze."}
            ]},
            {q: "Ein Mitarbeiter hat eine Verbesserungsidee. Wie sollte die Organisation damit umgehen?", answers: [
                {text: "Ideen ignorieren, nur Fuehrungskraefte haben gute Ideen", correct: false, feedback: "FALSCH: Mitarbeiterideen sind WERTVOLL! Sie kennen die Prozesse am besten."},
                {text: "Ein System zur Erfassung und Bewertung von Ideen haben", correct: true, feedback: "Richtig!"},
                {text: "Mitarbeiter zur Einreichung von Verbesserungsvorschlaegen ermutigen", correct: true, feedback: "Richtig!"},
                {text: "Gute Ideen umsetzen und Feedback geben", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Korrekturmassnahme und Verbesserung?", answers: [
                {text: "Korrekturmassnahme reagiert auf einen Fehler", correct: true, feedback: "Richtig!"},
                {text: "Verbesserung ist proaktiv (ohne vorherigen Fehler)", correct: true, feedback: "Richtig!"},
                {text: "Beide sind identisch", correct: false, feedback: "FALSCH: Sie sind NICHT identisch! Korrekturmassnahme = REAKTIV, Verbesserung = PROAKTIV."},
                {text: "Korrekturmassnahme: Problem loesen. Verbesserung: besser werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zur fortlaufenden Verbesserung sind richtig?", answers: [
                {text: "Kleine Schritte sind genauso wichtig wie grosse Spruenge", correct: true, feedback: "Richtig!"},
                {text: "Verbesserung ist nur Aufgabe der Qualitaetsabteilung", correct: false, feedback: "FALSCH: Verbesserung ist NICHT nur Q-Abteilungssache! Jeder Mitarbeiter kann beitragen."},
                {text: "Jeder Mitarbeiter kann zur Verbesserung beitragen", correct: true, feedback: "Richtig!"},
                {text: "Verbesserung ist ein QM-Grundsatz der ISO 9000", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie haengen die Kapitel 9 und 10 zusammen?", answers: [
                {text: "Kapitel 9 liefert Daten, Kapitel 10 nutzt sie zur Verbesserung", correct: true, feedback: "Richtig!"},
                {text: "Sie sind voellig unabhaengig", correct: false, feedback: "FALSCH: Sie sind NICHT unabhaengig! Kap. 9 (Check) liefert Erkenntnisse, Kap. 10 (Act) setzt Verbesserungen um."},
                {text: "Analyse (9.1.3) zeigt Verbesserungsbedarf (10)", correct: true, feedback: "Richtig!"},
                {text: "Managementbewertung (9.3) fuehrt zu Verbesserungsentscheidungen (10)", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Sofortmassnahme und Korrekturmassnahme?", answers: [
                {text: "Sofortmassnahme = schnelle Reaktion zur Schadensbegrenzung", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahme = nachhaltige Beseitigung der Ursache", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch! Sofortmassnahme = SCHNELL handeln, Korrekturmassnahme = URSACHE beseitigen."},
                {text: "Sofortmassnahme: Produkt retten. Korrekturmassnahme: Prozess verbessern", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist ein 8D-Report?", answers: [
                {text: "Eine strukturierte Methode zur Problemloesung in 8 Schritten", correct: true, feedback: "Richtig!"},
                {text: "Ein von der ISO 9001 vorgeschriebenes Dokument", correct: false, feedback: "FALSCH: Der 8D-Report ist NICHT von ISO 9001 vorgeschrieben! Er ist eine bewaehrte METHODE."},
                {text: "Enthaelt: Team bilden, Problem beschreiben, Sofortmassnahme, Ursache, Korrekturmassnahme, Wirksamkeit, Vorbeugung, Abschluss", correct: true, feedback: "Richtig!"},
                {text: "Besonders in der Automobilindustrie verbreitet", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Wie helfen Fehlersammelliste und Paretoanalyse bei der Verbesserung?", answers: [
                {text: "Fehlersammelliste erfasst systematisch alle Fehler", correct: true, feedback: "Richtig!"},
                {text: "Paretoanalyse zeigt: 80% der Probleme kommen von 20% der Ursachen", correct: true, feedback: "Richtig!"},
                {text: "Man sollte alle Fehler gleichzeitig bearbeiten", correct: false, feedback: "FALSCH: NICHT alle gleichzeitig! Das Pareto-Prinzip hilft zu PRIORISIEREN."},
                {text: "Priorisierung: Zuerst die haeufigsten/teuersten Fehler angehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist Benchmarking als Verbesserungsmethode?", answers: [
                {text: "Vergleich mit den Besten der Branche", correct: true, feedback: "Richtig!"},
                {text: "Nur interne Vergleiche zwischen Abteilungen", correct: false, feedback: "FALSCH: Nicht NUR interne Vergleiche! Der groesste Nutzen liegt im EXTERNEN Vergleich."},
                {text: "Lernen von Best Practices anderer Organisationen", correct: true, feedback: "Richtig!"},
                {text: "Identifikation von Verbesserungspotenzialen durch Vergleich", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist der Unterschied zwischen Kaizen und Innovation?", answers: [
                {text: "Kaizen = viele kleine Verbesserungsschritte", correct: true, feedback: "Richtig!"},
                {text: "Innovation = grosse sprunghafte Veraenderung", correct: true, feedback: "Richtig!"},
                {text: "Beide Ansaetze schliessen sich aus", correct: false, feedback: "FALSCH: Sie schliessen sich NICHT aus! Kaizen und Innovation ergaenzen sich."},
                {text: "Ein gutes QMS nutzt BEIDE Ansaetze", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "pruefungsblock1": {
        title: "Pruefungsblock 1 - TUeV-Niveau Simulation",
        questions: [
            {q: "Die Organisation muss die interessierten Parteien bestimmen, die fuer das QMS relevant sind. Welche Aussage ist normativ KORREKT?", answers: [
                {text: "Alle interessierten Parteien muessen beruecksichtigt werden", correct: false, feedback: "FALSCH: Nicht ALLE, nur die RELEVANTEN! Die Norm sagt 'relevant fuer das QMS'."},
                {text: "Nur die RELEVANTEN interessierten Parteien muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Interessierte Parteien sind ausschliesslich Kunden und Lieferanten", correct: false, feedback: "FALSCH: Auch Behoerden, Mitarbeiter, Gesellschaft etc. koennen relevant sein."},
                {text: "Die Anforderungen relevanter interessierter Parteien muessen bestimmt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Der Anwendungsbereich des QMS muss als dokumentierte Information verfuegbar sein. Welche Anforderung ist dabei NICHT zutreffend?", answers: [
                {text: "Die Produkte und Dienstleistungen muessen genannt werden", correct: false, feedback: "FALSCH: Das IST eine Normforderung!"},
                {text: "Begruendungen fuer nicht anwendbare Anforderungen muessen enthalten sein", correct: false, feedback: "FALSCH: Das IST eine Normforderung!"},
                {text: "Die Anzahl der Mitarbeiter muss dokumentiert sein", correct: true, feedback: "Richtig! Die Mitarbeiterzahl ist KEINE Normforderung fuer den Anwendungsbereich!"},
                {text: "Der Anwendungsbereich muss die Grenzen des QMS beschreiben", correct: false, feedback: "FALSCH: Das IST eine Normforderung!"}
            ]},
            {q: "Kapitel 4.4 fordert, dass die Organisation ihr QMS einschliesslich der Prozesse festlegen muss. Welche Aussagen sind normativ korrekt?", answers: [
                {text: "Die Abfolge und Wechselwirkung der Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Fuer jeden Prozess muss ein eigenes Dokument erstellt werden", correct: false, feedback: "FALSCH: Die Norm fordert KEIN eigenes Dokument pro Prozess! Die Dokumentationsform ist freigestellt."},
                {text: "Kriterien und Methoden zur Sicherstellung der Wirksamkeit muessen festgelegt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozessverantwortlichkeiten und Befugnisse muessen zugewiesen werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Bei der Bestimmung des Kontexts muss die Organisation externe Themen ueberwachen und ueberpruefen. Welches ist ein EXTERNES Thema?", answers: [
                {text: "Kompetenz der Mitarbeiter", correct: false, feedback: "FALSCH: Kompetenz der Mitarbeiter ist ein INTERNES Thema!"},
                {text: "Technologischer Wandel in der Branche", correct: true, feedback: "Richtig!"},
                {text: "Organisationskultur", correct: false, feedback: "FALSCH: Organisationskultur ist ein INTERNES Thema!"},
                {text: "Interne Kommunikationswege", correct: false, feedback: "FALSCH: Interne Kommunikationswege sind ein INTERNES Thema!"}
            ]},
            {q: "Die dokumentierte Information zum Anwendungsbereich muss aufrechterhalten werden. Was bedeutet 'aufrechterhalten' normativ?", answers: [
                {text: "Als Nachweis archivieren", correct: false, feedback: "FALSCH: Das ist 'AUFBEWAHREN', nicht aufrechterhalten!"},
                {text: "Aktuell halten und bei Bedarf anpassen", correct: true, feedback: "Richtig!"},
                {text: "Mindestens 10 Jahre aufbewahren", correct: false, feedback: "FALSCH: 10 Jahre ist keine Normforderung."},
                {text: "Vorgabedokumente pflegen und aktualisieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die oberste Leitung muss Rechenschaftspflicht fuer die Wirksamkeit des QMS uebernehmen. Was bedeutet das normativ?", answers: [
                {text: "Die Verantwortung kann vollstaendig an den QMB delegiert werden", correct: false, feedback: "FALSCH: Rechenschaftspflicht kann NICHT delegiert werden! Aufgaben ja, Verantwortung nein."},
                {text: "Die oberste Leitung bleibt verantwortlich, auch wenn Aufgaben delegiert werden", correct: true, feedback: "Richtig!"},
                {text: "Die oberste Leitung muss alle Audits persoenlich durchfuehren", correct: false, feedback: "FALSCH: Persoenliche Audit-Durchfuehrung ist nicht gefordert."},
                {text: "Die Rechenschaftspflicht ist nicht delegierbar", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Qualitaetspolitik muss bestimmte Anforderungen erfuellen. Welche Aussage ist NICHT korrekt?", answers: [
                {text: "Sie muss als dokumentierte Information verfuegbar sein", correct: false, feedback: "FALSCH: Das IST korrekt - sie muss dokumentiert sein!"},
                {text: "Sie muss jaehrlich komplett neu erstellt werden", correct: true, feedback: "Richtig! Jaehrliche Neuerstellung ist NICHT gefordert! Die Q-Politik wird bei Bedarf angepasst."},
                {text: "Sie muss eine Verpflichtung zur fortlaufenden Verbesserung enthalten", correct: false, feedback: "FALSCH: Das IST korrekt - sie muss diese Verpflichtung enthalten!"},
                {text: "Sie muss fuer interessierte Parteien verfuegbar sein", correct: false, feedback: "FALSCH: Das IST korrekt - sie muss verfuegbar sein!"}
            ]},
            {q: "Kapitel 5.3 fordert die Zuweisung von Verantwortlichkeiten und Befugnissen. Welche Aussage zur Rolle des QMB ist normativ korrekt?", answers: [
                {text: "Der QMB muss Mitglied der obersten Leitung sein", correct: false, feedback: "FALSCH: Keine Vorgabe mehr zur Person!"},
                {text: "Die Benennung eines QMB ist seit ISO 9001:2015 nicht mehr explizit gefordert", correct: true, feedback: "Richtig!"},
                {text: "Die Verantwortlichkeiten des frueheren QMB muessen dennoch zugewiesen werden", correct: true, feedback: "Richtig!"},
                {text: "Ein externer Berater kann dauerhaft als QMB fungieren", correct: false, feedback: "FALSCH: Die Organisation muss die Verantwortung INTERN wahrnehmen."}
            ]},
            {q: "Die oberste Leitung muss die Kundenorientierung foerdern. In welchem Kapitel wird die MESSUNG der Kundenzufriedenheit gefordert?", answers: [
                {text: "Kapitel 5.1.2", correct: false, feedback: "FALSCH: Kap. 5.1.2 fordert FOERDERUNG der Kundenorientierung (Fuehrungsaufgabe)."},
                {text: "Kapitel 7.2", correct: false, feedback: "FALSCH: Kap. 7.2 ist Kompetenz."},
                {text: "Kapitel 9.1.2", correct: true, feedback: "Richtig!"},
                {text: "Kapitel 10.1", correct: false, feedback: "FALSCH: Kap. 10.1 ist Verbesserung."}
            ]},
            {q: "Welche Verpflichtungen muss die Qualitaetspolitik laut Norm MINDESTENS enthalten?", answers: [
                {text: "Verpflichtung zur Erfuellung zutreffender Anforderungen", correct: true, feedback: "Richtig!"},
                {text: "Verpflichtung zur fortlaufenden Verbesserung des QMS", correct: true, feedback: "Richtig!"},
                {text: "Verpflichtung zur Gewinnmaximierung", correct: false, feedback: "FALSCH: Gewinnmaximierung ist KEIN Norminhalt!"},
                {text: "Verpflichtung zur Zertifizierung", correct: false, feedback: "FALSCH: Zertifizierung ist FREIWILLIG, keine Normforderung."}
            ]},
            {q: "Die Norm fordert die Bestimmung von Risiken und Chancen. Welche Aussage ist normativ KORREKT?", answers: [
                {text: "Ein formelles Risikomanagement nach ISO 31000 ist Pflicht", correct: false, feedback: "FALSCH: ISO 31000 ist NICHT Pflicht!"},
                {text: "Eine dokumentierte Risikomatrix ist zwingend erforderlich", correct: false, feedback: "FALSCH: Keine Risikomatrix vorgeschrieben!"},
                {text: "Die Methode zur Risikobetrachtung ist freigestellt", correct: true, feedback: "Richtig!"},
                {text: "Risikobasiertes Denken ersetzt die frueheren Vorbeugungsmassnahmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Qualitaetsziele muessen bestimmte Eigenschaften haben. Welche Eigenschaft ist NICHT normativ gefordert?", answers: [
                {text: "Messbar", correct: false, feedback: "FALSCH: Messbar IST gefordert!"},
                {text: "Ueberwacht", correct: false, feedback: "FALSCH: Ueberwacht IST gefordert!"},
                {text: "Jaehrlich neu festgelegt", correct: true, feedback: "Richtig! 'Jaehrlich' steht NICHT in der Norm! Q-Ziele werden bei Bedarf aktualisiert."},
                {text: "Im Einklang mit der Qualitaetspolitik", correct: false, feedback: "FALSCH: Das IST gefordert!"}
            ]},
            {q: "Fuer Qualitaetsziele muss die Planung bestimmte Aspekte umfassen. Welche sind normativ gefordert?", answers: [
                {text: "Was getan wird", correct: true, feedback: "Richtig!"},
                {text: "Wer verantwortlich ist", correct: true, feedback: "Richtig!"},
                {text: "Welche Ressourcen erforderlich sind", correct: true, feedback: "Richtig!"},
                {text: "Wie die Ergebnisse bewertet werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein Risiko wird definiert als 'Auswirkung von Ungewissheit'. Welche Aussage ist normativ korrekt?", answers: [
                {text: "Risiko kann nur negative Auswirkungen haben", correct: false, feedback: "FALSCH: Risiko ist NICHT nur negativ!"},
                {text: "Risiko kann positiv oder negativ sein", correct: true, feedback: "Richtig!"},
                {text: "Positive Auswirkungen werden als Chancen bezeichnet", correct: true, feedback: "Richtig!"},
                {text: "Risiken und Chancen werden getrennt in unterschiedlichen Kapiteln behandelt", correct: false, feedback: "FALSCH: Risiken und Chancen werden GEMEINSAM in Kap. 6.1 behandelt."}
            ]},
            {q: "Bei geplanten Aenderungen am QMS muss die Organisation bestimmte Aspekte beruecksichtigen. Welcher gehoert NICHT dazu?", answers: [
                {text: "Zweck der Aenderung", correct: false, feedback: "FALSCH: Zweck IST zu beruecksichtigen!"},
                {text: "Moegliche Konsequenzen", correct: false, feedback: "FALSCH: Konsequenzen SIND zu beruecksichtigen!"},
                {text: "Vorab-Genehmigung durch die Zertifizierungsstelle", correct: true, feedback: "Richtig! Der Zertifizierer muss Aenderungen NICHT vorab genehmigen!"},
                {text: "Verfuegbarkeit von Ressourcen", correct: false, feedback: "FALSCH: Ressourcen SIND zu beruecksichtigen!"}
            ]},
            {q: "Die dokumentierte Information ueber Qualitaetsziele muss...", answers: [
                {text: "aufrechterhalten werden", correct: true, feedback: "Richtig!"},
                {text: "aufbewahrt werden", correct: false, feedback: "FALSCH: Q-Ziele werden AUFRECHTERHALTEN (Vorgabe), nicht aufbewahrt (Nachweis)!"},
                {text: "monatlich aktualisiert werden", correct: false, feedback: "FALSCH: Monatlich ist keine Normforderung."},
                {text: "vom Zertifizierer freigegeben werden", correct: false, feedback: "FALSCH: Der Zertifizierer gibt Q-Ziele nicht frei."}
            ]},
            {q: "Die Norm fordert die Bestimmung und Bereitstellung von Ressourcen. Welche gehoeren NICHT zu den in Kapitel 7.1 genannten Ressourcenarten?", answers: [
                {text: "Personen", correct: false, feedback: "FALSCH: Personen SIND in Kap. 7.1 genannt!"},
                {text: "Finanzielle Mittel", correct: true, feedback: "Richtig! Finanzielle Mittel werden in Kap. 7.1 NICHT explizit genannt!"},
                {text: "Infrastruktur", correct: false, feedback: "FALSCH: Infrastruktur IST in Kap. 7.1 genannt!"},
                {text: "Wissen der Organisation", correct: false, feedback: "FALSCH: Wissen der Organisation IST in Kap. 7.1 genannt!"}
            ]},
            {q: "Metrologische Rueckfuehrbarkeit von Messmitteln ist gefordert, wenn...", answers: [
                {text: "es immer fuer alle Messmittel gilt", correct: false, feedback: "FALSCH: NICHT immer fuer alle!"},
                {text: "es eine Anforderung ist", correct: true, feedback: "Richtig!"},
                {text: "es als wesentlich fuer das Vertrauen in Messergebnisse angesehen wird", correct: true, feedback: "Richtig!"},
                {text: "der Zertifizierer es verlangt", correct: false, feedback: "FALSCH: Der Zertifizierer bestimmt nicht die Anforderungen."}
            ]},
            {q: "Wissen der Organisation (7.1.6) ist eine neue Anforderung seit ISO 9001:2015. Welche Aussage ist NICHT korrekt?", answers: [
                {text: "Wissen muss bestimmt werden", correct: false, feedback: "FALSCH: Das IST korrekt - Wissen muss bestimmt werden!"},
                {text: "Wissen muss vollstaendig in einem Wiki dokumentiert werden", correct: true, feedback: "Richtig! Ein Wiki ist NICHT vorgeschrieben! Die Dokumentationsform ist freigestellt."},
                {text: "Wissen muss aufrechterhalten werden", correct: false, feedback: "FALSCH: Das IST korrekt - Wissen muss aufrechterhalten werden!"},
                {text: "Bei Aenderungsbedarf muss zusaetzliches Wissen erworben werden", correct: false, feedback: "FALSCH: Das IST korrekt!"}
            ]},
            {q: "Kompetenz kann durch verschiedene Wege erworben werden. Welche nennt die Norm?", answers: [
                {text: "Ausbildung", correct: true, feedback: "Richtig!"},
                {text: "Schulung", correct: true, feedback: "Richtig!"},
                {text: "Nur Universitaetsstudium", correct: false, feedback: "FALSCH: Universitaetsstudium ist NICHT zwingend! Die Norm akzeptiert alle Wege gleichwertig."},
                {text: "Erfahrung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Das Bewusstsein der Mitarbeiter (7.3) muss sich auf bestimmte Aspekte erstrecken. Welcher gehoert NICHT dazu?", answers: [
                {text: "Die Qualitaetspolitik", correct: false, feedback: "FALSCH: Qualitaetspolitik GEHOERT dazu!"},
                {text: "Relevante Qualitaetsziele", correct: false, feedback: "FALSCH: Qualitaetsziele GEHOEREN dazu!"},
                {text: "Die Gehaelter der Kollegen", correct: true, feedback: "Richtig! Gehaelter sind KEIN QMS-Thema!"},
                {text: "Die Folgen bei Nichterfuellung von QMS-Anforderungen", correct: false, feedback: "FALSCH: Folgen GEHOEREN dazu!"}
            ]},
            {q: "Der Begriff 'dokumentierte Information' ersetzt in der ISO 9001:2015...", answers: [
                {text: "nur den Begriff 'Dokumente'", correct: false, feedback: "FALSCH: Unvollstaendig!"},
                {text: "nur den Begriff 'Aufzeichnungen'", correct: false, feedback: "FALSCH: Unvollstaendig!"},
                {text: "die Begriffe 'Dokumente' und 'Aufzeichnungen'", correct: true, feedback: "Richtig!"},
                {text: "den Begriff 'QM-Handbuch'", correct: false, feedback: "FALSCH: QM-Handbuch ist keine Begriffskategorie."}
            ]},
            {q: "Dokumentierte Information muss 'aufbewahrt' werden. Welche Dokumente fallen typischerweise darunter?", answers: [
                {text: "Arbeitsanweisungen", correct: false, feedback: "FALSCH: Arbeitsanweisungen sind VORGABEN - sie werden AUFRECHTERHALTEN, nicht aufbewahrt!"},
                {text: "Kalibrierprotokolle", correct: true, feedback: "Richtig!"},
                {text: "Schulungsnachweise", correct: true, feedback: "Richtig!"},
                {text: "Auditberichte", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Kommunikation (7.4) muss bestimmte Aspekte festlegen. Welche sind normativ gefordert?", answers: [
                {text: "Worueber kommuniziert wird", correct: true, feedback: "Richtig!"},
                {text: "Wann kommuniziert wird", correct: true, feedback: "Richtig!"},
                {text: "Die Anzahl der taeglichen Meetings", correct: false, feedback: "FALSCH: Meeting-Frequenz ist NICHT vorgeschrieben!"},
                {text: "Wer kommuniziert", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Ueberpruefung der Anforderungen an Produkte/DL muss VOR welchem Zeitpunkt erfolgen?", answers: [
                {text: "Nach der Lieferung", correct: false, feedback: "FALSCH: Nach der Lieferung ist zu SPAET!"},
                {text: "Vor der Zusage zur Lieferung", correct: true, feedback: "Richtig!"},
                {text: "Vor Abgabe eines Angebots", correct: true, feedback: "Richtig!"},
                {text: "Vor Annahme eines Auftrags", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Das Kapitel 8.3 (Entwicklung) darf ausgeschlossen werden, wenn...", answers: [
                {text: "das Unternehmen es wuenscht", correct: false, feedback: "FALSCH: Wunsch allein reicht nicht!"},
                {text: "die Organisation keine eigene Entwicklung durchfuehrt", correct: true, feedback: "Richtig!"},
                {text: "der Ausschluss die Konformitaet nicht beeintraechtigt", correct: true, feedback: "Richtig!"},
                {text: "der Zertifizierer es genehmigt", correct: false, feedback: "FALSCH: Der Zertifizierer genehmigt keine Ausschluesse - er prueft nur deren Begruendung."}
            ]},
            {q: "Was ist der normative Unterschied zwischen Verifizierung und Validierung?", answers: [
                {text: "Verifizierung: Wurden die Eingabeanforderungen erfuellt?", correct: true, feedback: "Richtig!"},
                {text: "Validierung: Erfuellt das Ergebnis den Verwendungszweck?", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Validierung erfolgt oft beim oder mit dem Kunden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Externe Anbieter muessen nach Kapitel 8.4 gesteuert werden. Welche Aussage ist NICHT korrekt?", answers: [
                {text: "Kriterien fuer Auswahl und Bewertung muessen festgelegt werden", correct: false, feedback: "FALSCH: Das IST korrekt - Kriterien muessen festgelegt werden!"},
                {text: "Der guenstigste Preis ist das einzige Auswahlkriterium", correct: true, feedback: "Richtig! Preis allein ist KEIN ausreichendes Kriterium!"},
                {text: "Die Leistung externer Anbieter muss ueberwacht werden", correct: false, feedback: "FALSCH: Das IST korrekt - Leistung muss ueberwacht werden!"},
                {text: "Ergebnisse der Bewertung muessen dokumentiert werden", correct: false, feedback: "FALSCH: Das IST korrekt - Ergebnisse muessen dokumentiert werden!"}
            ]},
            {q: "Kundeneigentum nach 8.5.3 umfasst...", answers: [
                {text: "nur Material, das der Kunde beistellt", correct: false, feedback: "FALSCH: NICHT nur Material! Kundeneigentum umfasst auch geistiges Eigentum und Daten."},
                {text: "geistiges Eigentum des Kunden", correct: true, feedback: "Richtig!"},
                {text: "personenbezogene Daten", correct: true, feedback: "Richtig!"},
                {text: "Werkzeuge des Kunden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Rueckverfolgbarkeit ist normativ gefordert, wenn...", answers: [
                {text: "es immer bei allen Produkten gilt", correct: false, feedback: "FALSCH: NICHT immer bei allen!"},
                {text: "es eine Kundenanforderung ist", correct: true, feedback: "Richtig!"},
                {text: "es eine gesetzliche Anforderung ist", correct: true, feedback: "Richtig!"},
                {text: "die Organisation es als notwendig erachtet", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur Freigabe von Produkten (8.6) ist normativ korrekt?", answers: [
                {text: "Freigabe erfolgt automatisch nach Produktionsende", correct: false, feedback: "FALSCH: Freigabe ist NICHT automatisch! Sie erfordert eine aktive Entscheidung."},
                {text: "Freigabe erfordert Nachweis der Erfuellung der Abnahmekriterien", correct: true, feedback: "Richtig!"},
                {text: "Die freigebende Person muss rueckverfolgbar sein", correct: true, feedback: "Richtig!"},
                {text: "Eine Sonderfreigabe erfordert Genehmigung durch befugte Stelle", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Bei nichtkonformen Ergebnissen (8.7) muss die Organisation...", answers: [
                {text: "diese kennzeichnen und steuern", correct: true, feedback: "Richtig!"},
                {text: "unbeabsichtigte Verwendung verhindern", correct: true, feedback: "Richtig!"},
                {text: "diese sofort verschrotten", correct: false, feedback: "FALSCH: Sofortige Verschrottung ist NICHT gefordert! Es gibt mehrere Optionen."},
                {text: "dokumentierte Information aufbewahren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein 'spezieller Prozess' (Prozessvalidierung nach 8.5.1) ist ein Prozess, dessen...", answers: [
                {text: "Ergebnis durch nachfolgende Ueberwachung/Messung nicht verifiziert werden kann", correct: true, feedback: "Richtig!"},
                {text: "Ergebnis erst beim Kunden sichtbar wird", correct: true, feedback: "Richtig!"},
                {text: "Durchfuehrung besonders teuer ist", correct: false, feedback: "FALSCH: Kosten sind KEIN Kriterium!"},
                {text: "Beispiele: Schweissen, Loeten, Sterilisieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Bei Entwicklungsaenderungen (8.3.6) muessen diese...", answers: [
                {text: "gekennzeichnet werden", correct: true, feedback: "Richtig!"},
                {text: "bewertet, verifiziert und validiert werden", correct: true, feedback: "Richtig!"},
                {text: "automatisch genehmigt werden", correct: false, feedback: "FALSCH: NICHT automatisch! Aenderungen erfordern Bewertung und Genehmigung VOR der Umsetzung."},
                {text: "genehmigt werden, bevor sie umgesetzt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Interne Audits muessen in 'geplanten Abstaenden' durchgefuehrt werden. Welche Aussage ist normativ korrekt?", answers: [
                {text: "Die Norm schreibt jaehrliche Audits vor", correct: false, feedback: "FALSCH: 'Jaehrlich' steht NICHT in der Norm!"},
                {text: "Die Organisation legt die Intervalle selbst fest", correct: true, feedback: "Richtig!"},
                {text: "Kritische Bereiche koennen haeufiger auditiert werden", correct: true, feedback: "Richtig!"},
                {text: "Alle Bereiche muessen gleich oft auditiert werden", correct: false, feedback: "FALSCH: Nicht alle Bereiche gleich oft - kritische Prozesse sollten haeufiger geprueft werden."}
            ]},
            {q: "Ein Auditor darf seinen eigenen Arbeitsbereich auditieren. Diese Aussage ist...", answers: [
                {text: "korrekt, wenn er kompetent ist", correct: false, feedback: "FALSCH: Kompetenz aendert nichts daran!"},
                {text: "falsch, da Objektivitaet und Unparteilichkeit gefordert sind", correct: true, feedback: "Richtig!"},
                {text: "korrekt bei kleinen Unternehmen", correct: false, feedback: "FALSCH: Unternehmensgroesse aendert nichts daran!"},
                {text: "falsch, da man eigene Fehler nicht objektiv sieht", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Managementbewertung muss durch wen durchgefuehrt werden?", answers: [
                {text: "Den Qualitaetsbeauftragten", correct: false, feedback: "FALSCH: Der QMB kann vorbereiten, aber nicht durchfuehren!"},
                {text: "Die oberste Leitung", correct: true, feedback: "Richtig!"},
                {text: "Das mittlere Management (delegierbar)", correct: false, feedback: "FALSCH: Die Managementbewertung kann NICHT delegiert werden!"},
                {text: "Einen externen Berater", correct: false, feedback: "FALSCH: Die Managementbewertung ist Aufgabe der OBERSTEN LEITUNG!"}
            ]},
            {q: "Welche sind Eingaben fuer die Managementbewertung nach Kapitel 9.3.2?", answers: [
                {text: "Status von Massnahmen frueherer Managementbewertungen", correct: true, feedback: "Richtig!"},
                {text: "Auditergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Das Jahreshoroskop", correct: false, feedback: "FALSCH: Das Horoskop ist KEIN Norminhalt!"},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Die Ergebnisse der Managementbewertung muessen Entscheidungen zu welchen Aspekten enthalten?", answers: [
                {text: "Verbesserungsmoeglichkeiten", correct: true, feedback: "Richtig!"},
                {text: "Aenderungsbedarf am QMS", correct: true, feedback: "Richtig!"},
                {text: "Ressourcenbedarf", correct: true, feedback: "Richtig!"},
                {text: "Kuendigung von Mitarbeitern", correct: false, feedback: "FALSCH: Personalentscheidungen wie Kuendigungen sind KEIN Norminhalt!"}
            ]},
            {q: "Muessen die Ergebnisse der Managementbewertung dokumentiert werden?", answers: [
                {text: "Nein, muendliche Absprachen reichen", correct: false, feedback: "FALSCH: Muendlich reicht NICHT!"},
                {text: "Ja, als dokumentierte Information aufbewahren", correct: true, feedback: "Richtig!"},
                {text: "Nur die Teilnehmerliste", correct: false, feedback: "FALSCH: Nur Teilnehmerliste reicht nicht - die ERGEBNISSE muessen dokumentiert sein."},
                {text: "Die Norm fordert den Nachweis der Ergebnisse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Was ist eine Nichtkonformitaet im Sinne des internen Audits?", answers: [
                {text: "Jede Verbesserungsmoeglichkeit", correct: false, feedback: "FALSCH: Nicht JEDE Verbesserungsmoeglichkeit ist eine NK!"},
                {text: "Nichterfuellung einer Anforderung", correct: true, feedback: "Richtig!"},
                {text: "Eine durch objektiven Nachweis belegbare Abweichung", correct: true, feedback: "Richtig!"},
                {text: "Eine persoenliche Meinung des Auditors", correct: false, feedback: "FALSCH: Persoenliche Meinung ist kein Kriterium - es braucht objektiven NACHWEIS."}
            ]},
            {q: "Was ist der normative Unterschied zwischen Korrektur und Korrekturmassnahme?", answers: [
                {text: "Korrektur beseitigt den Fehler (Symptom)", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahme beseitigt die Ursache", correct: true, feedback: "Richtig!"},
                {text: "Beide Begriffe sind identisch", correct: false, feedback: "FALSCH: Die Begriffe sind NICHT identisch!"},
                {text: "Korrekturmassnahme verhindert Wiederholung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Nach Umsetzung einer Korrekturmassnahme muss die Organisation...", answers: [
                {text: "nichts weiter tun", correct: false, feedback: "FALSCH: Es ist NICHT erledigt nach Umsetzung! Man muss pruefen, ob die Massnahme WIRKT."},
                {text: "die Wirksamkeit der Massnahme ueberpruefen", correct: true, feedback: "Richtig!"},
                {text: "dokumentieren, ob die Massnahme erfolgreich war", correct: true, feedback: "Richtig!"},
                {text: "ggf. Risiken und Chancen aktualisieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Fortlaufende Verbesserung (10.3) bedeutet normativ...", answers: [
                {text: "einmalige Verbesserungsprojekte", correct: false, feedback: "FALSCH: Nicht EINMALIG - fortlaufend bedeutet WIEDERKEHREND!"},
                {text: "wiederkehrende Taetigkeit zur Leistungssteigerung", correct: true, feedback: "Richtig!"},
                {text: "Verbesserung nur bei Kundenbeschwerden", correct: false, feedback: "FALSCH: Nicht nur bei Beschwerden - Verbesserung ist PROAKTIV!"},
                {text: "Beruecksichtigung der Ergebnisse aus Analyse und Managementbewertung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche dokumentierte Information ist fuer Nichtkonformitaeten und Korrekturmassnahmen nach 10.2.2 gefordert?", answers: [
                {text: "Art der Nichtkonformitaet", correct: true, feedback: "Richtig!"},
                {text: "Ergriffene Massnahmen", correct: true, feedback: "Richtig!"},
                {text: "Alle E-Mails zum Thema", correct: false, feedback: "FALSCH: ALLE E-Mails aufzubewahren ist NICHT gefordert!"},
                {text: "Ergebnisse von Korrekturmassnahmen", correct: true, feedback: "Richtig!"}
            ]}
        ]
    },
    "pruefungsblock2": {
        title: "Pruefungsblock 2 - TUeV-Niveau Simulation (45 Fragen)",
        questions: [
            {q: "Ein Unternehmen hat interne und externe Themen bestimmt, beruecksichtigt diese jedoch nicht bei der Festlegung von Qualitaetszielen. Wie ist dies normativ zu bewerten?", topic: "Kontext", answers: [
                {text: "Konform, da Qualitaetsziele unabhaengig vom Kontext festgelegt werden duerfen", correct: false, feedback: "FALSCH: Der Kontext liefert wichtige Eingaben!"},
                {text: "Nicht konform, da der Kontext Eingaben fuer weitere Normforderungen liefert", correct: true, feedback: "Richtig!"},
                {text: "Konform, sofern die Prozesse wirksam sind", correct: false, feedback: "FALSCH: Wirksamkeit allein macht fehlende Kontextberuecksichtigung nicht konform."},
                {text: "Nicht konform, da der Kontext jaehrlich aktualisiert werden muss", correct: false, feedback: "FALSCH: 'Jaehrlich' steht NICHT in der Norm!"}
            ]},
            {q: "Welche Aussage zur Bestimmung interessierter Parteien ist normativ korrekt?", topic: "Interessierte Parteien", answers: [
                {text: "Alle Stakeholder sind als interessierte Parteien zu beruecksichtigen", correct: false, feedback: "FALSCH: Nur RELEVANTE interessierte Parteien!"},
                {text: "Relevanz ergibt sich aus dem Einfluss auf die Faehigkeit, konforme Produkte bereitzustellen", correct: true, feedback: "Richtig!"},
                {text: "Relevante Anforderungen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Interessierte Parteien sind ausschliesslich externe Parteien", correct: false, feedback: "FALSCH: Auch INTERNE Parteien wie Mitarbeiter koennen relevant sein!"}
            ]},
            {q: "Der Anwendungsbereich eines QMS schliesst Entwicklungstaetigkeiten aus. Welche Bedingung muss erfuellt sein?", topic: "Anwendungsbereich", answers: [
                {text: "Der Ausschluss ist begruendet", correct: true, feedback: "Richtig!"},
                {text: "Die Produkt- und Dienstleistungskonformitaet wird nicht beeintraechtigt", correct: true, feedback: "Richtig!"},
                {text: "Der Ausschluss ist vom Zertifizierer freigegeben", correct: false, feedback: "FALSCH: Der Zertifizierer GENEHMIGT keine Ausschluesse!"},
                {text: "Der Ausschluss ist dokumentiert", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Forderung ergibt sich unmittelbar aus ISO 9001, Kapitel 4.4?", topic: "Prozesse", answers: [
                {text: "Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse muessen vollstaendig dokumentiert werden", correct: false, feedback: "FALSCH: NICHT vollstaendig - nur soweit erforderlich!"},
                {text: "Wechselwirkungen zwischen Prozessen sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Jeder Prozess muss gemessen werden", correct: false, feedback: "FALSCH: Nicht JEDER Prozess muss gemessen werden!"}
            ]},
            {q: "Im Rahmen des Prozessansatzes verlangt die Norm unter anderem, dass ...", topic: "Prozesse", answers: [
                {text: "Kriterien und Methoden zur Steuerung festgelegt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse isoliert betrachtet werden", correct: false, feedback: "FALSCH: Prozesse sollen NICHT isoliert betrachtet werden - Wechselwirkungen sind wichtig!"},
                {text: "Risiken und Chancen beruecksichtigt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozessbeschreibungen verpflichtend dokumentiert sind", correct: false, feedback: "FALSCH: NICHT verpflichtend dokumentiert!"}
            ]},
            {q: "Welche Aussage zur Verantwortung der obersten Leitung ist normativ korrekt?", topic: "Fuehrung", answers: [
                {text: "Verantwortung fuer die Wirksamkeit des QMS kann delegiert werden", correct: false, feedback: "FALSCH: RECHENSCHAFTSPFLICHT kann NICHT delegiert werden!"},
                {text: "Operative Taetigkeiten duerfen delegiert werden", correct: true, feedback: "Richtig!"},
                {text: "Mit Benennung eines QMB entfaellt die Verantwortung", correct: false, feedback: "FALSCH: Die Verantwortung bleibt bei der obersten Leitung!"},
                {text: "Interne Audits sind durch die oberste Leitung durchzufuehren", correct: false, feedback: "FALSCH: Die oberste Leitung muss NICHT selbst auditieren!"}
            ]},
            {q: "Die Qualitaetspolitik muss ...", topic: "Qualitaetspolitik", answers: [
                {text: "zur strategischen Ausrichtung der Organisation passen", correct: true, feedback: "Richtig!"},
                {text: "als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich neu formuliert werden", correct: false, feedback: "FALSCH: NICHT jaehrlich neu formuliert!"},
                {text: "kommuniziert und verstanden werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur Kundenorientierung ist normkonform?", topic: "Fuehrung", answers: [
                {text: "Kundenanforderungen muessen bestimmt und erfuellt werden", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist ausschliesslich Aufgabe des Vertriebs", correct: false, feedback: "FALSCH: Kundenorientierung betrifft die GESAMTE Organisation!"},
                {text: "Risiken und Chancen in Bezug auf Produkte sind zu beruecksichtigen", correct: true, feedback: "Richtig!"},
                {text: "Kundenorientierung ist optional", correct: false, feedback: "FALSCH: Kundenorientierung ist ein QM-Grundsatz und Normforderung!"}
            ]},
            {q: "Welche Aussage zu Risiken und Chancen ist normativ korrekt?", topic: "Risiken und Chancen", answers: [
                {text: "Risiken und Chancen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Alle Risiken muessen dokumentiert werden", correct: false, feedback: "FALSCH: Keine pauschale Dokumentationspflicht!"},
                {text: "Massnahmen zum Umgang mit Risiken und Chancen sind zu planen", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert ein formales Risikomanagementsystem", correct: false, feedback: "FALSCH: Kein formales Risikomanagementsystem gefordert!"}
            ]},
            {q: "Qualitaetsziele muessen ...", topic: "Qualitaetsziele", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig!"},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich geaendert werden", correct: false, feedback: "FALSCH: NICHT jaehrlich geaendert!"},
                {text: "mit der Qualitaetspolitik uebereinstimmen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Ressource ist explizit in ISO 9001 genannt?", topic: "Ressourcen", answers: [
                {text: "Personen", correct: true, feedback: "Richtig!"},
                {text: "Infrastruktur", correct: true, feedback: "Richtig!"},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Unternehmenskultur", correct: false, feedback: "FALSCH: Unternehmenskultur ist NICHT explizit als Ressource genannt!"}
            ]},
            {q: "Im Zusammenhang mit Kompetenz fordert die Norm, dass ...", topic: "Kompetenz", answers: [
                {text: "erforderliche Kompetenzen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen zur Kompetenzentwicklung ergriffen werden", correct: true, feedback: "Richtig!"},
                {text: "die Wirksamkeit dieser Massnahmen bewertet wird", correct: true, feedback: "Richtig!"},
                {text: "jede Schulung dokumentiert wird", correct: false, feedback: "FALSCH: NICHT jede Schulung - nur geeignete Nachweise!"}
            ]},
            {q: "Welche Aussage zur dokumentierten Information ist NICHT korrekt?", topic: "Dokumentation", answers: [
                {text: "Dokumentierte Information muss gelenkt werden", correct: false, feedback: "FALSCH: Das IST korrekt - dokumentierte Information muss gelenkt werden!"},
                {text: "Die Norm fordert eine feste Dokumentationsstruktur", correct: true, feedback: "Richtig! Die Norm fordert KEINE feste Dokumentationsstruktur!"},
                {text: "Dokumentierte Information muss geschuetzt werden", correct: false, feedback: "FALSCH: Das IST korrekt - sie muss geschuetzt werden!"},
                {text: "Dokumentierte Information muss verfuegbar sein", correct: false, feedback: "FALSCH: Das IST korrekt - sie muss verfuegbar sein!"}
            ]},
            {q: "Welche Taetigkeiten sind Kapitel 8 'Betrieb' zuzuordnen?", topic: "Betriebliche Planung", answers: [
                {text: "Planung der Leistungserbringung", correct: true, feedback: "Richtig!"},
                {text: "Managementbewertung", correct: false, feedback: "FALSCH: Managementbewertung ist Kapitel 9!"},
                {text: "Lenkung externer Anbieter", correct: true, feedback: "Richtig!"},
                {text: "Kennzeichnung und Rueckverfolgbarkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein externer Anbieter wird eingesetzt. Welche Forderung ist normkonform?", topic: "Externe Anbieter", answers: [
                {text: "Art und Ausmass der Lenkung sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Der Anbieter muss zertifiziert sein", correct: false, feedback: "FALSCH: Zertifizierung ist NICHT gefordert!"},
                {text: "Anforderungen muessen kommuniziert werden", correct: true, feedback: "Richtig!"},
                {text: "Die Verantwortung geht auf den Anbieter ueber", correct: false, feedback: "FALSCH: Die Verantwortung BLEIBT bei der Organisation!"}
            ]},
            {q: "Welche Aussage zur Ueberwachung und Messung ist korrekt?", topic: "Ueberwachung", answers: [
                {text: "Alle Prozesse muessen gemessen werden", correct: false, feedback: "FALSCH: NICHT alle Prozesse!"},
                {text: "Die Organisation bestimmt, was ueberwacht wird", correct: true, feedback: "Richtig!"},
                {text: "Geeignete Methoden sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist zu bewerten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Interne Audits ...", topic: "Internes Audit", answers: [
                {text: "sind geplant durchzufuehren", correct: true, feedback: "Richtig!"},
                {text: "muessen unabhaengig durchgefuehrt werden", correct: true, feedback: "Richtig!"},
                {text: "sind freiwillig", correct: false, feedback: "FALSCH: Interne Audits sind NICHT freiwillig!"},
                {text: "liefern Informationen zur Wirksamkeit des QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Inhalte gehoeren zu den Eingaben der Managementbewertung?", topic: "Managementbewertung", answers: [
                {text: "Ergebnisse interner Audits", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen interner und externer Themen", correct: true, feedback: "Richtig!"},
                {text: "Einzelgespraeche mit Mitarbeitenden", correct: false, feedback: "FALSCH: Einzelgespraeche sind KEINE explizite Normforderung!"}
            ]},
            {q: "Was bedeutet 'Wirksamkeit' im Sinne der ISO 9001?", topic: "Prozesse", answers: [
                {text: "Einhaltung dokumentierter Vorgaben", correct: false, feedback: "FALSCH: Das ist Konformitaet, nicht Wirksamkeit!"},
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Wirtschaftlicher Erfolg", correct: false, feedback: "FALSCH: Das ist Effizienz!"},
                {text: "Konformitaet mit gesetzlichen Anforderungen", correct: false, feedback: "FALSCH: Das ist Compliance!"}
            ]},
            {q: "Eine Nichtkonformitaet liegt vor, wenn ...", topic: "Nichtkonformitaet", answers: [
                {text: "eine Anforderung nicht erfuellt ist", correct: true, feedback: "Richtig!"},
                {text: "ein Kunde unzufrieden ist", correct: false, feedback: "FALSCH: Unzufriedenheit bedeutet nicht automatisch Nichtkonformitaet!"},
                {text: "normative Anforderungen nicht erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "interne Ziele verfehlt werden", correct: false, feedback: "FALSCH: Zielverfehlung ist nicht unbedingt eine Nichtkonformitaet!"}
            ]},
            {q: "Welche Aussage zu Korrekturmassnahmen ist normativ korrekt?", topic: "Korrekturmassnahmen", answers: [
                {text: "Ursachen muessen ermittelt werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen ersetzen Vorbeugungsmassnahmen", correct: false, feedback: "FALSCH: Risikobasiertes Denken ersetzt Vorbeugungsmassnahmen, nicht Korrekturmassnahmen!"},
                {text: "Wirksamkeit der Massnahmen ist zu bewerten", correct: true, feedback: "Richtig!"},
                {text: "Jede Massnahme ist genehmigungspflichtig", correct: false, feedback: "FALSCH: Keine pauschale Genehmigungspflicht!"}
            ]},
            {q: "Verbesserung im Sinne der ISO 9001 bedeutet ...", topic: "Verbesserung", answers: [
                {text: "fortlaufende Erhoehung der Leistungsfaehigkeit des QMS", correct: true, feedback: "Richtig!"},
                {text: "ausschliesslich Reaktion auf Abweichungen", correct: false, feedback: "FALSCH: Verbesserung ist PROAKTIV!"},
                {text: "optionale Taetigkeit", correct: false, feedback: "FALSCH: Verbesserung ist VERPFLICHTEND!"},
                {text: "Aufgabe der Qualitaetsabteilung", correct: false, feedback: "FALSCH: Verbesserung ist Aufgabe ALLER!"}
            ]},
            {q: "Welche Aussage zur internen Kommunikation ist normkonform?", topic: "Kommunikation", answers: [
                {text: "Relevante Kommunikationsinhalte sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation ist nicht erforderlich", correct: false, feedback: "FALSCH: Kommunikation IST erforderlich!"},
                {text: "Verantwortlichkeiten sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation ist nur schriftlich zulaessig", correct: false, feedback: "FALSCH: Die Form ist NICHT vorgeschrieben!"}
            ]},
            {q: "Das Wissen der Organisation ...", topic: "Wissen", answers: [
                {text: "ist zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "ist zu erhalten", correct: true, feedback: "Richtig!"},
                {text: "muss jederzeit dokumentiert sein", correct: false, feedback: "FALSCH: NICHT jederzeit vollstaendig dokumentiert!"},
                {text: "muss bei Bedarf verfuegbar sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kennzeichnung und Rueckverfolgbarkeit sind umzusetzen, wenn ...", topic: "Kennzeichnung", answers: [
                {text: "Anforderungen dies verlangen", correct: true, feedback: "Richtig!"},
                {text: "die Konformitaet von Produkten betroffen ist", correct: true, feedback: "Richtig!"},
                {text: "Rueckverfolgbarkeit immer gefordert ist", correct: false, feedback: "FALSCH: NICHT immer gefordert!"},
                {text: "gesetzliche oder vertragliche Vorgaben bestehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Eigentum von Kunden oder externen Anbietern ist ...", topic: "Kennzeichnung", answers: [
                {text: "zu identifizieren", correct: true, feedback: "Richtig!"},
                {text: "zu schuetzen", correct: true, feedback: "Richtig!"},
                {text: "bei Verlust oder Beschaedigung zu melden", correct: true, feedback: "Richtig!"},
                {text: "Teil des Eigentums der Organisation", correct: false, feedback: "FALSCH: Es bleibt Eigentum des Kunden/Anbieters!"}
            ]},
            {q: "Eine Freigabe von Produkten oder Dienstleistungen setzt voraus, dass ...", topic: "Freigabe", answers: [
                {text: "Anforderungen erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "befugte Personen freigeben", correct: true, feedback: "Richtig!"},
                {text: "die Freigabe dokumentiert ist", correct: true, feedback: "Richtig!"},
                {text: "Pruefungen optional sind", correct: false, feedback: "FALSCH: Pruefungen sind NICHT optional!"}
            ]},
            {q: "Nichtkonforme Outputs muessen ...", topic: "Nichtkonformitaet", answers: [
                {text: "gelenkt werden", correct: true, feedback: "Richtig!"},
                {text: "eindeutig gekennzeichnet sein", correct: true, feedback: "Richtig!"},
                {text: "freigegeben werden", correct: false, feedback: "FALSCH: Nichtkonformes wird NICHT einfach freigegeben!"},
                {text: "korrigiert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur Aufbewahrung dokumentierter Information ist korrekt?", topic: "Dokumentation", answers: [
                {text: "Aufbewahrungsfristen sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Dokumente duerfen unbegrenzt geaendert werden", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor Verlust ist sicherzustellen", correct: true, feedback: "Richtig!"},
                {text: "Aufzeichnungen sind identisch mit Dokumenten", correct: false, feedback: "FALSCH: Aufzeichnungen (aufbewahren) und Dokumente (aufrechterhalten) sind unterschiedlich!"}
            ]},
            {q: "Welche Rolle spielt der PDCA-Zyklus im QMS?", topic: "Prozesse", answers: [
                {text: "Er unterstuetzt den Prozessansatz", correct: true, feedback: "Richtig!"},
                {text: "Er foerdert kontinuierliche Verbesserung", correct: true, feedback: "Richtig!"},
                {text: "Er ersetzt das QMS", correct: false, feedback: "FALSCH: PDCA ersetzt NICHT das QMS!"},
                {text: "Er gilt nur fuer Kapitel 8", correct: false, feedback: "FALSCH: PDCA gilt fuer das GESAMTE QMS!"}
            ]},
            {q: "Welche Aussage zur Bewertung der Leistung ist korrekt?", topic: "Analyse", answers: [
                {text: "Sie umfasst Ueberwachung, Messung, Analyse und Bewertung", correct: true, feedback: "Richtig!"},
                {text: "Sie ersetzt interne Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "Sie dient als Grundlage fuer Entscheidungen", correct: true, feedback: "Richtig!"},
                {text: "Sie ist ausschliesslich Aufgabe der Geschaeftsfuehrung", correct: false, feedback: "FALSCH: NICHT ausschliesslich!"}
            ]},
            {q: "Ein Prozess wird geaendert. Was fordert die Norm?", topic: "Aenderungsplanung", answers: [
                {text: "Aenderungen sind zu planen", correct: true, feedback: "Richtig!"},
                {text: "Risiken im Zusammenhang mit Aenderungen sind zu beruecksichtigen", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen muessen genehmigt werden", correct: false, feedback: "FALSCH: Nicht pauschal - kommt auf die Prozessvorgaben an!"},
                {text: "Aenderungen muessen dokumentiert sein", correct: false, feedback: "FALSCH: Nicht pauschal gefordert!"}
            ]},
            {q: "Welche Aussage zu Rollen, Verantwortlichkeiten und Befugnissen ist korrekt?", topic: "Verantwortlichkeiten", answers: [
                {text: "Sie sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Sie sind bekannt zu machen", correct: true, feedback: "Richtig!"},
                {text: "Sie duerfen nur der Leitung bekannt sein", correct: false, feedback: "FALSCH: Sie muessen KOMMUNIZIERT werden!"},
                {text: "Sie muessen regelmaessig wechseln", correct: false, feedback: "FALSCH: Kein regelmaessiger Wechsel gefordert!"}
            ]},
            {q: "Welche Aussage zur kundenbezogenen Kommunikation ist richtig?", topic: "Kundenanforderungen", answers: [
                {text: "Sie ist festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Sie ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Sie beschraenkt sich auf Reklamationen", correct: false, feedback: "FALSCH: NICHT nur Reklamationen!"},
                {text: "Sie ist Aufgabe des Marketings", correct: false, feedback: "FALSCH: NICHT nur Marketing!"}
            ]},
            {q: "Ein Audit stellt Abweichungen fest. Welche Schritte sind normkonform?", topic: "Internes Audit", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig!"},
                {text: "Festlegung von Korrekturmassnahmen", correct: true, feedback: "Richtig!"},
                {text: "Sanktionierung von Verantwortlichen", correct: false, feedback: "FALSCH: Sanktionierung ist KEIN Norminhalt!"},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur kontinuierlichen Verbesserung ist korrekt?", topic: "Verbesserung", answers: [
                {text: "Sie ist Bestandteil des QMS", correct: true, feedback: "Richtig!"},
                {text: "Sie ist einmalig durchzufuehren", correct: false, feedback: "FALSCH: KONTINUIERLICH bedeutet fortlaufend!"},
                {text: "Sie ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Sie beschraenkt sich auf Prozesse", correct: false, feedback: "FALSCH: Sie betrifft das GESAMTE QMS!"}
            ]},
            {q: "Welche Aussagen zu extern bereitgestellten Prozessen sind richtig?", topic: "Externe Anbieter", answers: [
                {text: "Sie sind zu lenken", correct: true, feedback: "Richtig!"},
                {text: "Verantwortung verbleibt bei der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Normverantwortung geht auf den Anbieter ueber", correct: false, feedback: "FALSCH: Verantwortung BLEIBT bei der Organisation!"},
                {text: "Anforderungen sind festzulegen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur Dokumentation des Anwendungsbereichs ist korrekt?", topic: "Anwendungsbereich", answers: [
                {text: "Der Anwendungsbereich ist als dokumentierte Information verfuegbar", correct: true, feedback: "Richtig!"},
                {text: "Er darf nicht veraendert werden", correct: false, feedback: "FALSCH: Er DARF bei Bedarf angepasst werden!"},
                {text: "Er ersetzt ein QM-Handbuch", correct: false, feedback: "FALSCH: Er ERSETZT kein QM-Handbuch!"},
                {text: "Er muss alle Kapitel enthalten", correct: false, feedback: "FALSCH: Ausschluesse sind moeglich!"}
            ]},
            {q: "Welche Aussage zur HLS-Struktur ist korrekt?", topic: "Kontext", answers: [
                {text: "Sie dient der Harmonisierung von Managementsystemnormen", correct: true, feedback: "Richtig!"},
                {text: "Sie ist nur fuer ISO 9001 relevant", correct: false, feedback: "FALSCH: Sie gilt fuer ALLE ISO-Managementsystemnormen!"},
                {text: "Sie schreibt Norminhalte vor", correct: false, feedback: "FALSCH: Sie gibt die STRUKTUR vor!"},
                {text: "Sie beeinflusst Ausschluesse", correct: false, feedback: "FALSCH: Sie hat keinen Einfluss auf Ausschluesse!"}
            ]},
            {q: "Welche Aussage zur Bewertung externer Anbieter ist normkonform?", topic: "Externe Anbieter", answers: [
                {text: "Kriterien fuer die Bewertung sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Anbieter sind jaehrlich zu auditieren", correct: false, feedback: "FALSCH: NICHT jaehrlich gefordert!"},
                {text: "Bewertung ist optional", correct: false, feedback: "FALSCH: Bewertung ist NICHT optional!"},
                {text: "Ergebnisse sind zu beruecksichtigen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage beschreibt die Zielsetzung der ISO 9001 zutreffend?", topic: "Kontext", answers: [
                {text: "Erhoehung der Kundenzufriedenheit durch ein wirksames QMS", correct: true, feedback: "Richtig!"},
                {text: "Einfuehrung eines einheitlichen QM-Handbuchs", correct: false, feedback: "FALSCH: QM-Handbuch ist NICHT mehr gefordert!"},
                {text: "Erfuellung aller gesetzlichen Anforderungen", correct: false, feedback: "FALSCH: ISO 9001 ist eine QUALITAETSNORM, keine Rechtsnorm!"},
                {text: "Standardisierung aller Prozesse", correct: false, feedback: "FALSCH: NICHT Standardisierung aller Prozesse!"}
            ]},
            {q: "Welche Aussagen zur Prozesswirksamkeit sind korrekt?", topic: "Prozesse", answers: [
                {text: "Wirksamkeit beschreibt das Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Wirksamkeit ist identisch mit Konformitaet", correct: false, feedback: "FALSCH: Wirksamkeit und Konformitaet sind NICHT identisch!"},
                {text: "Wirksamkeit ist zu bewerten", correct: true, feedback: "Richtig!"},
                {text: "Wirksamkeit ersetzt Ueberwachung", correct: false, feedback: "FALSCH: Wirksamkeit ERSETZT nicht Ueberwachung!"}
            ]},
            {q: "Welche Aussage zur Dokumentenlenkung ist korrekt?", topic: "Dokumentation", answers: [
                {text: "Aenderungen muessen gelenkt werden", correct: true, feedback: "Richtig!"},
                {text: "Dokumente duerfen frei geaendert werden", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor unbeabsichtigter Verwendung ist sicherzustellen", correct: true, feedback: "Richtig!"},
                {text: "Dokumente sind unbegrenzt aufzubewahren", correct: false, feedback: "FALSCH: Die Organisation legt Aufbewahrungsfristen fest!"}
            ]},
            {q: "Welche Aussagen zur Managementbewertung sind richtig?", topic: "Managementbewertung", answers: [
                {text: "Sie ist geplant durchzufuehren", correct: true, feedback: "Richtig!"},
                {text: "Sie bewertet die fortdauernde Eignung des QMS", correct: true, feedback: "Richtig!"},
                {text: "Sie ersetzt interne Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "Sie liefert Eingaben fuer Verbesserungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage trifft normativ zu?", topic: "Kundenzufriedenheit", answers: [
                {text: "Kundenzufriedenheit ist ein Leistungsindikator", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist identisch mit Kundenorientierung", correct: false, feedback: "FALSCH: Kundenzufriedenheit und Kundenorientierung sind NICHT identisch!"},
                {text: "Kundenzufriedenheit ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Kundenzufriedenheit ersetzt die Prozessueberwachung", correct: false, feedback: "FALSCH: Sie ERSETZT nicht die Prozessueberwachung!"}
            ]}
        ]
    },
    "pruefungsblock3": {
        title: "Pruefungsblock 3 - TUeV-Niveau +10% Schwierigkeit",
        questions: [
            {q: "Ein Unternehmen hat den Kontext bestimmt. Aenderungen externer Themen werden nur dann beruecksichtigt, wenn Abweichungen im Audit auftreten. Wie ist dies normativ zu bewerten?", topic: "Kontext", answers: [
                {text: "Konform, da Audits die Wirksamkeit bestaetigen", correct: false, feedback: "FALSCH: Audits allein reichen nicht - der Kontext muss UNABHAENGIG ueberwacht werden!"},
                {text: "Nicht konform, da Kontext unabhaengig von Auditergebnissen zu ueberwachen ist", correct: true, feedback: "Richtig!"},
                {text: "Konform, sofern keine Risiken identifiziert wurden", correct: false, feedback: "FALSCH: Kontext-Ueberwachung ist IMMER erforderlich!"},
                {text: "Nicht konform, da ein fester Ueberpruefungszyklus vorgeschrieben ist", correct: false, feedback: "FALSCH: Kein FESTER Zyklus vorgeschrieben - aber regelmaessige Ueberpruefung ist noetig!"}
            ]},
            {q: "Welche Aussage zur Bestimmung relevanter interessierter Parteien trifft zu?", topic: "Interessierte Parteien", answers: [
                {text: "Relevanz ergibt sich aus Einfluss auf die Faehigkeit, konforme Produkte bereitzustellen", correct: true, feedback: "Richtig!"},
                {text: "Alle Stakeholder sind als relevant einzustufen", correct: false, feedback: "FALSCH: Nur RELEVANTE interessierte Parteien!"},
                {text: "Relevante Anforderungen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Relevanz ist ausschliesslich gesetzlich definiert", correct: false, feedback: "FALSCH: Die Organisation bestimmt selbst die Relevanz!"}
            ]},
            {q: "Der Anwendungsbereich schliesst Entwicklung aus. Welche Kombination ist normativ erforderlich?", topic: "Anwendungsbereich", answers: [
                {text: "Begruendung des Ausschlusses", correct: true, feedback: "Richtig!"},
                {text: "Nachweis, dass Produktkonformitaet nicht beeintraechtigt wird", correct: true, feedback: "Richtig!"},
                {text: "Freigabe durch die Zertifizierungsstelle", correct: false, feedback: "FALSCH: Der Zertifizierer GENEHMIGT keine Ausschluesse!"},
                {text: "Dokumentierte Information zum Anwendungsbereich", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen ergeben sich unmittelbar aus ISO 9001, Kapitel 4.4?", topic: "Prozesse", answers: [
                {text: "Prozesse sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Wechselwirkungen sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Jeder Prozess ist messbar zu machen", correct: false, feedback: "FALSCH: Nicht JEDER Prozess muss messbar sein!"},
                {text: "Kriterien und Methoden zur Steuerung sind festzulegen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Im Prozessansatz fordert die Norm unter anderem, dass ...", topic: "Prozesse", answers: [
                {text: "Risiken und Chancen beruecksichtigt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse unabhaengig voneinander gesteuert werden", correct: false, feedback: "FALSCH: Prozesse sind NICHT unabhaengig - Wechselwirkungen sind wichtig!"},
                {text: "erforderliche Ressourcen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozessbeschreibungen verpflichtend dokumentiert sind", correct: false, feedback: "FALSCH: NICHT verpflichtend dokumentiert!"}
            ]},
            {q: "Die oberste Leitung delegiert operative QM-Aufgaben. Welche Aussage ist korrekt?", topic: "Fuehrung", answers: [
                {text: "Verantwortung fuer Wirksamkeit bleibt bei der obersten Leitung", correct: true, feedback: "Richtig!"},
                {text: "Verantwortung kann vollstaendig delegiert werden", correct: false, feedback: "FALSCH: RECHENSCHAFTSPFLICHT kann NICHT delegiert werden!"},
                {text: "Mit Benennung eines QMB entfaellt die Leitungsverantwortung", correct: false, feedback: "FALSCH: Die Verantwortung bleibt IMMER bei der obersten Leitung!"},
                {text: "Audits sind zwingend durch die Leitung durchzufuehren", correct: false, feedback: "FALSCH: Die Leitung muss NICHT selbst auditieren!"}
            ]},
            {q: "Welche Anforderungen an die Qualitaetspolitik sind normativ zutreffend?", topic: "Qualitaetspolitik", answers: [
                {text: "Sie passt zur strategischen Ausrichtung", correct: true, feedback: "Richtig!"},
                {text: "Sie ist als dokumentierte Information verfuegbar", correct: true, feedback: "Richtig!"},
                {text: "Sie ist jaehrlich zu aktualisieren", correct: false, feedback: "FALSCH: NICHT jaehrlich - nur bei Bedarf!"},
                {text: "Sie ist zu kommunizieren und verstanden zu machen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zur Kundenorientierung sind korrekt?", topic: "Fuehrung", answers: [
                {text: "Kundenanforderungen sind zu bestimmen und zu erfuellen", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist allein Aufgabe des Vertriebs", correct: false, feedback: "FALSCH: Kundenorientierung betrifft die GESAMTE Organisation!"},
                {text: "Risiken und Chancen im Hinblick auf Produkte sind zu beruecksichtigen", correct: true, feedback: "Richtig!"},
                {text: "Kundenorientierung ersetzt Prozessueberwachung", correct: false, feedback: "FALSCH: Sie ERSETZT nicht die Prozessueberwachung!"}
            ]},
            {q: "Welche Aussagen zu Risiken und Chancen treffen zu?", topic: "Risiken und Chancen", answers: [
                {text: "Risiken und Chancen sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Die Norm fordert eine formale Risikomethode", correct: false, feedback: "FALSCH: Keine formale Methode gefordert!"},
                {text: "Massnahmen sind zu planen", correct: true, feedback: "Richtig!"},
                {text: "Alle Risiken sind zu dokumentieren", correct: false, feedback: "FALSCH: Keine pauschale Dokumentationspflicht!"}
            ]},
            {q: "Qualitaetsziele muessen ...", topic: "Qualitaetsziele", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig!"},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig!"},
                {text: "mit der Qualitaetspolitik uebereinstimmen", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich angepasst werden", correct: false, feedback: "FALSCH: NICHT jaehrlich - nur bei Bedarf!"}
            ]},
            {q: "Welche Ressourcen nennt ISO 9001 explizit?", topic: "Ressourcen", answers: [
                {text: "Personen", correct: true, feedback: "Richtig!"},
                {text: "Infrastruktur", correct: true, feedback: "Richtig!"},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Motivation der Mitarbeitenden", correct: false, feedback: "FALSCH: Motivation ist NICHT explizit als Ressource genannt!"}
            ]},
            {q: "Im Kontext von Kompetenz fordert die Norm, dass ...", topic: "Kompetenz", answers: [
                {text: "erforderliche Kompetenzen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen zur Kompetenzentwicklung umgesetzt werden", correct: true, feedback: "Richtig!"},
                {text: "Wirksamkeit der Massnahmen bewertet wird", correct: true, feedback: "Richtig!"},
                {text: "jede Schulungsmassnahme dokumentiert ist", correct: false, feedback: "FALSCH: NICHT jede Schulung - nur geeignete Nachweise!"}
            ]},
            {q: "Welche Aussage zur dokumentierten Information ist NICHT normkonform?", topic: "Dokumentation", answers: [
                {text: "Dokumentierte Information ist zu lenken", correct: false, feedback: "FALSCH: Das IST normkonform - sie muss gelenkt werden!"},
                {text: "Eine feste Dokumentationsstruktur ist vorgeschrieben", correct: true, feedback: "Richtig! Eine feste Struktur ist NICHT vorgeschrieben!"},
                {text: "Schutz vor unbeabsichtigter Aenderung ist sicherzustellen", correct: false, feedback: "FALSCH: Das IST normkonform!"},
                {text: "Verfuegbarkeit und Eignung sind sicherzustellen", correct: false, feedback: "FALSCH: Das IST normkonform!"}
            ]},
            {q: "Welche Taetigkeiten sind Kapitel 8 zuzuordnen?", topic: "Betriebliche Planung", answers: [
                {text: "Planung der Leistungserbringung", correct: true, feedback: "Richtig!"},
                {text: "Managementbewertung", correct: false, feedback: "FALSCH: Managementbewertung ist Kapitel 9!"},
                {text: "Lenkung externer Anbieter", correct: true, feedback: "Richtig!"},
                {text: "Kennzeichnung und Rueckverfolgbarkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ein externer Anbieter wird genutzt. Welche Aussagen sind normkonform?", topic: "Externe Anbieter", answers: [
                {text: "Art und Umfang der Lenkung sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Der Anbieter muss zertifiziert sein", correct: false, feedback: "FALSCH: Zertifizierung ist NICHT gefordert!"},
                {text: "Anforderungen sind zu kommunizieren", correct: true, feedback: "Richtig!"},
                {text: "Verantwortung geht auf den Anbieter ueber", correct: false, feedback: "FALSCH: Verantwortung BLEIBT bei der Organisation!"}
            ]},
            {q: "Welche Aussagen zur Ueberwachung und Messung sind korrekt?", topic: "Ueberwachung", answers: [
                {text: "Alle Prozesse muessen gemessen werden", correct: false, feedback: "FALSCH: NICHT alle Prozesse!"},
                {text: "Die Organisation legt fest, was ueberwacht wird", correct: true, feedback: "Richtig!"},
                {text: "Geeignete Methoden sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist zu bewerten", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Interne Audits ...", topic: "Internes Audit", answers: [
                {text: "sind geplant durchzufuehren", correct: true, feedback: "Richtig!"},
                {text: "muessen unabhaengig erfolgen", correct: true, feedback: "Richtig!"},
                {text: "sind optional bei kleinen Organisationen", correct: false, feedback: "FALSCH: Interne Audits sind NICHT optional!"},
                {text: "liefern Informationen zur Wirksamkeit des QMS", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Inhalte gehoeren zu den Eingaben der Managementbewertung?", topic: "Managementbewertung", answers: [
                {text: "Ergebnisse interner Audits", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen interner und externer Themen", correct: true, feedback: "Richtig!"},
                {text: "Personalgespraeche", correct: false, feedback: "FALSCH: Personalgespraeche sind KEINE explizite Normforderung!"}
            ]},
            {q: "Was beschreibt 'Wirksamkeit' im Sinne der ISO 9001?", topic: "Prozesse", answers: [
                {text: "Einhaltung interner Vorgaben", correct: false, feedback: "FALSCH: Das ist Konformitaet!"},
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Wirtschaftlicher Erfolg", correct: false, feedback: "FALSCH: Das ist Effizienz!"},
                {text: "Gesetzeskonformitaet", correct: false, feedback: "FALSCH: Das ist Compliance!"}
            ]},
            {q: "Eine Nichtkonformitaet liegt vor, wenn ...", topic: "Nichtkonformitaet", answers: [
                {text: "eine Anforderung nicht erfuellt ist", correct: true, feedback: "Richtig!"},
                {text: "ein Kunde unzufrieden ist", correct: false, feedback: "FALSCH: Unzufriedenheit bedeutet nicht automatisch Nichtkonformitaet!"},
                {text: "eine normative Forderung nicht erfuellt ist", correct: true, feedback: "Richtig!"},
                {text: "ein internes Ziel verfehlt wird", correct: false, feedback: "FALSCH: Zielverfehlung ist nicht unbedingt eine Nichtkonformitaet!"}
            ]},
            {q: "Welche Aussagen zu Korrekturmassnahmen sind korrekt?", topic: "Korrekturmassnahmen", answers: [
                {text: "Ursachen sind zu ermitteln", correct: true, feedback: "Richtig!"},
                {text: "Sie ersetzen Vorbeugungsmassnahmen", correct: false, feedback: "FALSCH: Risikobasiertes Denken ersetzt Vorbeugungsmassnahmen!"},
                {text: "Wirksamkeit ist zu bewerten", correct: true, feedback: "Richtig!"},
                {text: "Jede Massnahme bedarf externer Freigabe", correct: false, feedback: "FALSCH: Keine externe Freigabe erforderlich!"}
            ]},
            {q: "Verbesserung im Sinne der ISO 9001 bedeutet ...", topic: "Verbesserung", answers: [
                {text: "fortlaufende Erhoehung der Leistungsfaehigkeit des QMS", correct: true, feedback: "Richtig!"},
                {text: "ausschliessliche Reaktion auf Abweichungen", correct: false, feedback: "FALSCH: Verbesserung ist PROAKTIV!"},
                {text: "optionale Aktivitaet", correct: false, feedback: "FALSCH: Verbesserung ist VERPFLICHTEND!"},
                {text: "Aufgabe der Qualitaetsabteilung", correct: false, feedback: "FALSCH: Verbesserung ist Aufgabe ALLER!"}
            ]},
            {q: "Welche Aussagen zur internen Kommunikation sind normativ zutreffend?", topic: "Kommunikation", answers: [
                {text: "Relevante Inhalte sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation ist entbehrlich", correct: false, feedback: "FALSCH: Kommunikation ist NICHT entbehrlich!"},
                {text: "Verantwortlichkeiten sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation ist nur schriftlich zulaessig", correct: false, feedback: "FALSCH: Die Form ist NICHT vorgeschrieben!"}
            ]},
            {q: "Das Wissen der Organisation ...", topic: "Wissen", answers: [
                {text: "ist zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "ist zu erhalten", correct: true, feedback: "Richtig!"},
                {text: "muss vollstaendig dokumentiert sein", correct: false, feedback: "FALSCH: NICHT vollstaendig dokumentiert!"},
                {text: "muss bei Bedarf verfuegbar sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kennzeichnung und Rueckverfolgbarkeit sind umzusetzen, wenn ...", topic: "Kennzeichnung", answers: [
                {text: "Anforderungen dies verlangen", correct: true, feedback: "Richtig!"},
                {text: "die Produktkonformitaet betroffen ist", correct: true, feedback: "Richtig!"},
                {text: "Rueckverfolgbarkeit immer gefordert ist", correct: false, feedback: "FALSCH: NICHT immer gefordert!"},
                {text: "vertragliche oder gesetzliche Vorgaben bestehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Eigentum von Kunden oder externen Anbietern ist ...", topic: "Kennzeichnung", answers: [
                {text: "zu identifizieren", correct: true, feedback: "Richtig!"},
                {text: "zu schuetzen", correct: true, feedback: "Richtig!"},
                {text: "bei Verlust oder Beschaedigung zu melden", correct: true, feedback: "Richtig!"},
                {text: "Eigentum der Organisation", correct: false, feedback: "FALSCH: Es bleibt Eigentum des Kunden/Anbieters!"}
            ]},
            {q: "Eine Produktfreigabe setzt voraus, dass ...", topic: "Freigabe", answers: [
                {text: "Anforderungen erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "befugte Personen freigeben", correct: true, feedback: "Richtig!"},
                {text: "die Freigabe dokumentiert ist", correct: true, feedback: "Richtig!"},
                {text: "Pruefungen entfallen duerfen", correct: false, feedback: "FALSCH: Pruefungen duerfen NICHT entfallen!"}
            ]},
            {q: "Nichtkonforme Outputs muessen ...", topic: "Nichtkonformitaet", answers: [
                {text: "gelenkt werden", correct: true, feedback: "Richtig!"},
                {text: "gekennzeichnet sein", correct: true, feedback: "Richtig!"},
                {text: "freigegeben werden", correct: false, feedback: "FALSCH: Nichtkonformes wird NICHT einfach freigegeben!"},
                {text: "korrigiert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zur Aufbewahrung dokumentierter Information sind korrekt?", topic: "Dokumentation", answers: [
                {text: "Aufbewahrungsfristen sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Dokumente sind unbegrenzt aenderbar", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor Verlust ist sicherzustellen", correct: true, feedback: "Richtig!"},
                {text: "Dokumente und Aufzeichnungen sind identisch", correct: false, feedback: "FALSCH: Dokumente (aufrechterhalten) und Aufzeichnungen (aufbewahren) sind unterschiedlich!"}
            ]},
            {q: "Welche Rolle spielt der PDCA-Zyklus?", topic: "Prozesse", answers: [
                {text: "Unterstuetzung des Prozessansatzes", correct: true, feedback: "Richtig!"},
                {text: "Foerderung kontinuierlicher Verbesserung", correct: true, feedback: "Richtig!"},
                {text: "Ersatz des QMS", correct: false, feedback: "FALSCH: PDCA ERSETZT nicht das QMS!"},
                {text: "Beschraenkung auf Kapitel 8", correct: false, feedback: "FALSCH: PDCA gilt fuer das GESAMTE QMS!"}
            ]},
            {q: "Welche Aussagen zur Bewertung der Leistung sind korrekt?", topic: "Analyse", answers: [
                {text: "Sie umfasst Ueberwachung, Messung, Analyse und Bewertung", correct: true, feedback: "Richtig!"},
                {text: "Sie ersetzt interne Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "Sie dient als Entscheidungsgrundlage", correct: true, feedback: "Richtig!"},
                {text: "Sie ist allein Aufgabe der Geschaeftsfuehrung", correct: false, feedback: "FALSCH: NICHT allein Aufgabe der GF!"}
            ]},
            {q: "Ein Prozess wird geaendert. Was fordert die Norm?", topic: "Aenderungsplanung", answers: [
                {text: "Planung der Aenderungen", correct: true, feedback: "Richtig!"},
                {text: "Beruecksichtigung der Risiken", correct: true, feedback: "Richtig!"},
                {text: "Externe Genehmigung", correct: false, feedback: "FALSCH: Keine externe Genehmigung erforderlich!"},
                {text: "Zwingende Dokumentation jeder Aenderung", correct: false, feedback: "FALSCH: Nicht JEDE Aenderung muss dokumentiert werden!"}
            ]},
            {q: "Welche Aussagen zu Rollen, Verantwortlichkeiten und Befugnissen sind korrekt?", topic: "Verantwortlichkeiten", answers: [
                {text: "Sie sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Sie sind bekannt zu machen", correct: true, feedback: "Richtig!"},
                {text: "Sie bleiben ausschliesslich bei der Leitung", correct: false, feedback: "FALSCH: Sie werden DELEGIERT!"},
                {text: "Sie wechseln turnusmaessig", correct: false, feedback: "FALSCH: Kein turnusmaessiger Wechsel gefordert!"}
            ]},
            {q: "Welche Aussage zur kundenbezogenen Kommunikation ist korrekt?", topic: "Kundenanforderungen", answers: [
                {text: "Sie ist festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Sie ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Sie beschraenkt sich auf Reklamationen", correct: false, feedback: "FALSCH: NICHT nur Reklamationen!"},
                {text: "Sie ist Aufgabe des Marketings", correct: false, feedback: "FALSCH: NICHT nur Marketing!"}
            ]},
            {q: "Ein Audit stellt Abweichungen fest. Welche Schritte sind normkonform?", topic: "Internes Audit", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig!"},
                {text: "Festlegung von Korrekturmassnahmen", correct: true, feedback: "Richtig!"},
                {text: "Sanktionierung Verantwortlicher", correct: false, feedback: "FALSCH: Sanktionierung ist KEIN Norminhalt!"},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zur kontinuierlichen Verbesserung ist korrekt?", topic: "Verbesserung", answers: [
                {text: "Sie ist Bestandteil des QMS", correct: true, feedback: "Richtig!"},
                {text: "Sie ist einmalig", correct: false, feedback: "FALSCH: KONTINUIERLICH bedeutet fortlaufend!"},
                {text: "Sie ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Sie beschraenkt sich auf Prozesse", correct: false, feedback: "FALSCH: Sie betrifft das GESAMTE QMS!"}
            ]},
            {q: "Welche Aussagen zu extern bereitgestellten Prozessen sind richtig?", topic: "Externe Anbieter", answers: [
                {text: "Sie sind zu lenken", correct: true, feedback: "Richtig!"},
                {text: "Verantwortung verbleibt bei der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Normverantwortung geht auf den Anbieter ueber", correct: false, feedback: "FALSCH: Verantwortung BLEIBT bei der Organisation!"},
                {text: "Anforderungen sind festzulegen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage zum Anwendungsbereich ist korrekt?", topic: "Anwendungsbereich", answers: [
                {text: "Er ist als dokumentierte Information verfuegbar", correct: true, feedback: "Richtig!"},
                {text: "Er ist unver aenderlich", correct: false, feedback: "FALSCH: Er KANN bei Bedarf angepasst werden!"},
                {text: "Er ersetzt ein QM-Handbuch", correct: false, feedback: "FALSCH: Er ERSETZT kein QM-Handbuch!"},
                {text: "Er muss alle Normkapitel enthalten", correct: false, feedback: "FALSCH: Ausschluesse sind moeglich!"}
            ]},
            {q: "Welche Aussage zur HLS-Struktur ist korrekt?", topic: "Kontext", answers: [
                {text: "Harmonisierung von Managementsystemnormen", correct: true, feedback: "Richtig!"},
                {text: "Exklusiv fuer ISO 9001", correct: false, feedback: "FALSCH: HLS gilt fuer ALLE ISO-Managementsystemnormen!"},
                {text: "Vorgabe konkreter Inhalte", correct: false, feedback: "FALSCH: HLS gibt die STRUKTUR vor, nicht konkrete Inhalte!"},
                {text: "Einschraenkung von Ausschluessen", correct: false, feedback: "FALSCH: HLS hat keinen Einfluss auf Ausschluesse!"}
            ]},
            {q: "Welche Aussagen zur Bewertung externer Anbieter sind normkonform?", topic: "Externe Anbieter", answers: [
                {text: "Kriterien sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Jaehrliche Audits sind verpflichtend", correct: false, feedback: "FALSCH: NICHT jaehrlich gefordert!"},
                {text: "Bewertung ist optional", correct: false, feedback: "FALSCH: Bewertung ist NICHT optional!"},
                {text: "Ergebnisse sind zu beruecksichtigen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage beschreibt die Zielsetzung der ISO 9001 zutreffend?", topic: "Kontext", answers: [
                {text: "Erhoehung der Kundenzufriedenheit durch ein wirksames QMS", correct: true, feedback: "Richtig!"},
                {text: "Einfuehrung eines QM-Handbuchs", correct: false, feedback: "FALSCH: QM-Handbuch ist NICHT mehr gefordert!"},
                {text: "Erfuellung aller gesetzlichen Anforderungen", correct: false, feedback: "FALSCH: ISO 9001 ist eine QUALITAETSNORM, keine Rechtsnorm!"},
                {text: "Standardisierung aller Prozesse", correct: false, feedback: "FALSCH: NICHT Standardisierung aller Prozesse!"}
            ]},
            {q: "Welche Aussagen zur Prozesswirksamkeit sind korrekt?", topic: "Prozesse", answers: [
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Gleichbedeutend mit Konformitaet", correct: false, feedback: "FALSCH: Wirksamkeit und Konformitaet sind NICHT identisch!"},
                {text: "Wirksamkeit ist zu bewerten", correct: true, feedback: "Richtig!"},
                {text: "Ersetzt Ueberwachung", correct: false, feedback: "FALSCH: Wirksamkeit ERSETZT nicht Ueberwachung!"}
            ]},
            {q: "Welche Aussage zur Dokumentenlenkung ist korrekt?", topic: "Dokumentation", answers: [
                {text: "Aenderungen sind zu lenken", correct: true, feedback: "Richtig!"},
                {text: "Dokumente duerfen frei geaendert werden", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor unbeabsichtigter Nutzung ist sicherzustellen", correct: true, feedback: "Richtig!"},
                {text: "Dokumente sind unbegrenzt aufzubewahren", correct: false, feedback: "FALSCH: Die Organisation legt Aufbewahrungsfristen fest!"}
            ]},
            {q: "Welche Aussagen zur Managementbewertung sind korrekt?", topic: "Managementbewertung", answers: [
                {text: "Sie ist geplant durchzufuehren", correct: true, feedback: "Richtig!"},
                {text: "Sie bewertet fortdauernde Eignung", correct: true, feedback: "Richtig!"},
                {text: "Sie ersetzt interne Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "Sie liefert Eingaben fuer Verbesserungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage ist normativ korrekt?", topic: "Kundenzufriedenheit", answers: [
                {text: "Kundenzufriedenheit ist ein Leistungsindikator", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit ist identisch mit Kundenorientierung", correct: false, feedback: "FALSCH: Kundenzufriedenheit und Kundenorientierung sind NICHT identisch!"},
                {text: "Kundenzufriedenheit ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Kundenzufriedenheit ersetzt Prozessueberwachung", correct: false, feedback: "FALSCH: Sie ERSETZT nicht die Prozessueberwachung!"}
            ]}
        ]
    },
    "absicherungsblock3": {
        title: "QMB-Absicherungsblock 3 - EXTREM (+20%)",
        questions: [
            {q: "Die Organisation hat interne und externe Themen bestimmt, diese jedoch nicht in der Planung des QMS beruecksichtigt. Auditergebnisse zeigen keine Abweichungen. Wie ist dies normativ zu bewerten?", topic: "Kontext", answers: [
                {text: "Konform, da Auditergebnisse massgeblich sind", correct: false, feedback: "FALSCH: Gemaess TUeV-Unterlagen muss der Kontext in die QMS-Planung einfliessen. Auditergebnisse allein begruenden keine Normkonformitaet."},
                {text: "Nicht konform, da der Kontext Eingaben fuer Planung liefern muss", correct: true, feedback: "Richtig! Laut ISO 9001 Abschnitt 4.1 muessen externe und interne Themen bestimmt und bei der Planung des QMS beruecksichtigt werden."},
                {text: "Konform, sofern Ziele erreicht werden", correct: false, feedback: "FALSCH: Die Zielerreichung ersetzt nicht die Forderung, den Kontext zu beruecksichtigen. Der Kontext liefert wichtige Eingaben fuer die QMS-Planung."},
                {text: "Nicht konform, da eine jaehrliche Kontextanalyse gefordert ist", correct: false, feedback: "FALSCH: Die Norm fordert keine jaehrliche Kontextanalyse. Sie fordert Ueberwachung und Ueberpruefung, aber ohne feste Zeitintervalle."}
            ]},
            {q: "Welche Aussagen zur Relevanz interessierter Parteien sind normativ korrekt?", topic: "Interessierte Parteien", answers: [
                {text: "Die Organisation legt die Relevanz selbst fest", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen legt das Unternehmen selbst fest, welche interessierten Parteien fuer das QM-System relevant sind."},
                {text: "Relevanz ergibt sich aus Einfluss auf konforme Ergebnisse", correct: true, feedback: "Richtig! Relevanz ergibt sich aus dem Einfluss auf die Faehigkeit der Organisation, konforme Produkte und Dienstleistungen bereitzustellen."},
                {text: "Alle Stakeholder sind relevant", correct: false, feedback: "FALSCH: Nicht alle Anspruchsgruppen muessen beruecksichtigt werden. Die Organisation bestimmt, welche Parteien RELEVANT sind (Abschnitt 4.2)."},
                {text: "Relevante Anforderungen sind zu bestimmen", correct: true, feedback: "Richtig! Die Organisation muss die relevanten Anforderungen dieser interessierten Parteien bestimmen (ISO 9001:2015, 4.2)."}
            ]},
            {q: "Ein Ausschluss im Anwendungsbereich ist zulaessig, wenn ...", topic: "Anwendungsbereich", answers: [
                {text: "der Ausschluss begruendet ist", correct: true, feedback: "Richtig! Ausschluesse muessen begruendet werden koennen - die Organisation muss darlegen, warum eine Anforderung nicht anwendbar ist."},
                {text: "Produkt- und Dienstleistungskonformitaet nicht beeintraechtigt wird", correct: true, feedback: "Richtig! Laut ISO 9001 Abschnitt 4.3 duerfen Ausschluesse die Konformitaet von Produkten und Dienstleistungen nicht beeintraechtigen."},
                {text: "der Zertifizierer zustimmt", correct: false, feedback: "FALSCH: Die Zustimmung des Zertifizierers ist keine Normforderung. Die Organisation entscheidet selbst ueber Ausschluesse."},
                {text: "der Anwendungsbereich dokumentiert ist", correct: true, feedback: "Richtig! Der Anwendungsbereich muss als dokumentierte Information verfuegbar sein (ISO 9001:2015, 4.3)."}
            ]},
            {q: "Welche Anforderungen stellt ISO 9001:2015 an Prozesse?", topic: "Prozesse", answers: [
                {text: "Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig! Die Organisation muss die fuer das QMS erforderlichen Prozesse bestimmen (ISO 9001:2015, 4.4)."},
                {text: "Wechselwirkungen muessen bestimmt werden", correct: true, feedback: "Richtig! Reihenfolge und Wechselwirkungen der Prozesse muessen bestimmt werden (Abschnitt 4.4.1)."},
                {text: "Prozesse muessen vollstaendig dokumentiert sein", correct: false, feedback: "FALSCH: Laut TUeV-Unterlagen fordert die Norm NICHT, dass alle Prozesse dokumentiert werden - nur soweit erforderlich."},
                {text: "Kriterien und Methoden zur Steuerung muessen festgelegt werden", correct: true, feedback: "Richtig! Kriterien und Methoden zur Sicherstellung wirksamer Durchfuehrung und Steuerung muessen festgelegt werden."}
            ]},
            {q: "Im Prozessansatz verlangt die Norm, dass ...", topic: "Prozesse", answers: [
                {text: "Verantwortlichkeiten bestimmt werden", correct: true, feedback: "Richtig! Verantwortlichkeiten und Befugnisse fuer Prozesse muessen zugewiesen werden (ISO 9001:2015, 4.4.1)."},
                {text: "Prozesse isoliert optimiert werden", correct: false, feedback: "FALSCH: Der Prozessansatz betrachtet Prozesse im ZUSAMMENHANG und deren Wechselwirkungen - nicht isoliert."},
                {text: "Risiken und Chancen beruecksichtigt werden", correct: true, feedback: "Richtig! Risiken und Chancen muessen im Zusammenhang mit Prozessen bestimmt und behandelt werden."},
                {text: "Arbeitsanweisungen verpflichtend vorliegen", correct: false, feedback: "FALSCH: Die Norm fordert keine verpflichtenden Arbeitsanweisungen. Dokumentation nur soweit erforderlich."}
            ]},
            {q: "Welche Aussagen zur Verantwortung der obersten Leitung sind korrekt?", topic: "Fuehrung", answers: [
                {text: "Verantwortung fuer Wirksamkeit kann nicht delegiert werden", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen traegt die Unternehmensleitung die Gesamtverantwortung fuer das QM-System (Abschnitt 5.1.1)."},
                {text: "Operative Aufgaben duerfen delegiert werden", correct: true, feedback: "Richtig! Operative Aufgaben koennen je nach Organisationsstruktur und Erfordernissen verteilt werden."},
                {text: "Benennung eines QMB uebertraegt Verantwortung", correct: false, feedback: "FALSCH: Die Benennung eines QMB uebertraegt NICHT die Gesamtverantwortung - diese verbleibt bei der obersten Leitung."},
                {text: "Leitung muss Audits selbst durchfuehren", correct: false, feedback: "FALSCH: Die Norm fordert nicht, dass die Leitung Audits selbst durchfuehrt. Audits koennen delegiert werden."}
            ]},
            {q: "Die Qualitaetspolitik ...", topic: "Fuehrung", answers: [
                {text: "passt zur strategischen Ausrichtung", correct: true, feedback: "Richtig! Die Qualitaetspolitik muss fuer den Zweck und Kontext der Organisation angemessen sein und zur strategischen Ausrichtung passen."},
                {text: "ist dokumentierte Information", correct: true, feedback: "Richtig! Die Qualitaetspolitik muss als dokumentierte Information verfuegbar sein (ISO 9001:2015, 5.2.2)."},
                {text: "enthaelt zwingend Qualitaetsziele", correct: false, feedback: "FALSCH: Die Politik gibt den RAHMEN fuer Qualitaetsziele vor, enthaelt sie aber nicht zwingend selbst. Ziele werden in Abschnitt 6.2 separat behandelt."},
                {text: "ist zu kommunizieren und zu verstehen", correct: true, feedback: "Richtig! Die Politik muss in der Organisation bekannt gemacht, verstanden und angewendet werden (Abschnitt 5.2.2)."}
            ]},
            {q: "Welche Aussagen zur Kundenorientierung sind normativ korrekt?", topic: "Kundenorientierung", answers: [
                {text: "Kundenanforderungen sind zu bestimmen", correct: true, feedback: "Richtig! Die Leitung muss sicherstellen, dass Kundenanforderungen ermittelt werden (ISO 9001:2015, 5.1.2)."},
                {text: "Kundenanforderungen sind zu erfuellen", correct: true, feedback: "Richtig! Es muss sichergestellt werden, dass Kundenanforderungen sowie gesetzliche Anforderungen eingehalten werden."},
                {text: "Risiken und Chancen sind zu beruecksichtigen", correct: true, feedback: "Richtig! Risiken und Chancen, die die Konformitaet von Produkten beeinflussen koennen, muessen ermittelt werden."},
                {text: "Kundenorientierung ersetzt Leistungsbewertung", correct: false, feedback: "FALSCH: Kundenorientierung ersetzt NICHT die Leistungsbewertung. Beide sind separate Normforderungen (Kap. 5 und Kap. 9)."}
            ]},
            {q: "Welche Aussagen zu Risiken und Chancen treffen zu?", topic: "Planung", answers: [
                {text: "Risiken und Chancen sind zu bestimmen", correct: true, feedback: "Richtig! Gemaess Abschnitt 6.1 muessen Risiken und Chancen bestimmt werden."},
                {text: "Massnahmen sind zu planen", correct: true, feedback: "Richtig! Die Organisation muss Massnahmen zum Umgang mit Risiken und Chancen planen (Abschnitt 6.1.2)."},
                {text: "Eine Methode wie FMEA ist vorgeschrieben", correct: false, feedback: "FALSCH: Laut TUeV-Unterlagen sind keine formellen Methoden fuer das Risikomanagement erforderlich. FMEA ist nur eine moegliche Methode."},
                {text: "Risiken und Chancen sind Teil der Planung", correct: true, feedback: "Richtig! Die Behandlung von Risiken und Chancen ist Bestandteil der Planung des QMS (Kapitel 6)."}
            ]},
            {q: "Qualitaetsziele muessen ...", topic: "Planung", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig! Qualitaetsziele muessen messbar sein (ISO 9001:2015, 6.2.1)."},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig! Qualitaetsziele muessen ueberwacht werden (Abschnitt 6.2.1)."},
                {text: "mit der Qualitaetspolitik uebereinstimmen", correct: true, feedback: "Richtig! Qualitaetsziele muessen mit der Qualitaetspolitik vereinbar sein (Abschnitt 6.2.1)."},
                {text: "jaehrlich geaendert werden", correct: false, feedback: "FALSCH: Die Norm fordert keine jaehrliche Aenderung der Ziele. Ziele werden bei Bedarf aktualisiert."}
            ]},
            {q: "Welche Ressourcen nennt die Norm explizit?", topic: "Unterstuetzung", answers: [
                {text: "Personen", correct: true, feedback: "Richtig! Personen werden in Abschnitt 7.1.2 explizit genannt."},
                {text: "Infrastruktur", correct: true, feedback: "Richtig! Infrastruktur wird in Abschnitt 7.1.3 explizit genannt."},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig! Wissen der Organisation wird in Abschnitt 7.1.6 explizit genannt - ein neues Thema seit 2015."},
                {text: "Unternehmenskultur", correct: false, feedback: "FALSCH: Unternehmenskultur ist zwar im Kontext (Kap. 4) relevant, wird aber NICHT als Ressource in Kapitel 7 genannt."}
            ]},
            {q: "Kompetenzanforderungen gemaess ISO 9001 beinhalten, dass ...", topic: "Unterstuetzung", answers: [
                {text: "Kompetenzen bestimmt werden", correct: true, feedback: "Richtig! Die Organisation muss die erforderliche Kompetenz bestimmen (ISO 9001:2015, 7.2)."},
                {text: "Massnahmen umgesetzt werden", correct: true, feedback: "Richtig! Massnahmen zum Erwerb der erforderlichen Kompetenz muessen ergriffen werden."},
                {text: "Wirksamkeit bewertet wird", correct: true, feedback: "Richtig! Die Wirksamkeit der ergriffenen Massnahmen muss bewertet werden (Abschnitt 7.2)."},
                {text: "jede Schulung dokumentiert ist", correct: false, feedback: "FALSCH: Die Norm fordert nicht, dass JEDE Schulung dokumentiert wird - nur Nachweise der Kompetenz aufbewahren."}
            ]},
            {q: "Welche Aussage zur dokumentierten Information ist NICHT normkonform?", topic: "Dokumentation", answers: [
                {text: "Dokumentierte Information ist zu lenken", correct: false, feedback: "Diese Aussage IST normkonform - Lenkung ist in Abschnitt 7.5.3 gefordert."},
                {text: "Eine feste Dokumentationsstruktur ist vorgeschrieben", correct: true, feedback: "Richtig erkannt! Diese Aussage ist NICHT normkonform. Die Norm bietet Flexibilitaet - keine feste Struktur vorgeschrieben."},
                {text: "Schutz vor unbeabsichtigter Aenderung ist sicherzustellen", correct: false, feedback: "Diese Aussage IST normkonform - Schutz ist in Abschnitt 7.5.3.2 gefordert."},
                {text: "Dokumentierte Information muss verfuegbar sein", correct: false, feedback: "Diese Aussage IST normkonform - Verfuegbarkeit ist in Abschnitt 7.5.3.1 gefordert."}
            ]},
            {q: "Welche Taetigkeiten gehoeren zu Kapitel 8?", topic: "Betrieb", answers: [
                {text: "Planung der Leistungserbringung", correct: true, feedback: "Richtig! Betriebliche Planung und Steuerung gehoert zu Kapitel 8.1."},
                {text: "Managementbewertung", correct: false, feedback: "FALSCH: Managementbewertung gehoert zu Kapitel 9.3 (Bewertung der Leistung), nicht zu Kapitel 8."},
                {text: "Lenkung externer Anbieter", correct: true, feedback: "Richtig! Steuerung von extern bereitgestellten Prozessen, Produkten und Dienstleistungen gehoert zu Kapitel 8.4."},
                {text: "Kennzeichnung und Rueckverfolgbarkeit", correct: true, feedback: "Richtig! Kennzeichnung und Rueckverfolgbarkeit gehoert zu Kapitel 8.5.2."}
            ]},
            {q: "Welche Aussagen zu extern bereitgestellten Prozessen sind korrekt?", topic: "Externe Anbieter", answers: [
                {text: "Art und Umfang der Lenkung sind festzulegen", correct: true, feedback: "Richtig! Die Organisation muss Art und Umfang der Steuerung festlegen (ISO 9001:2015, 8.4.2)."},
                {text: "Verantwortung verbleibt bei der Organisation", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen verbleibt die Verantwortung fuer externe Prozesse bei der Organisation."},
                {text: "Anbieter muessen zertifiziert sein", correct: false, feedback: "FALSCH: Die Norm fordert KEINE Zertifizierung externer Anbieter. Die Organisation legt eigene Kriterien fest."},
                {text: "Anforderungen sind zu kommunizieren", correct: true, feedback: "Richtig! Informationen und Anforderungen muessen an externe Anbieter kommuniziert werden (Abschnitt 8.4.3)."}
            ]},
            {q: "Ueberwachung und Messung erfordern, dass ...", topic: "Bewertung", answers: [
                {text: "alle Prozesse gemessen werden", correct: false, feedback: "FALSCH: Die Norm fordert nicht, dass ALLE Prozesse gemessen werden. Die Organisation legt fest, was ueberwacht wird."},
                {text: "die Organisation festlegt, was ueberwacht wird", correct: true, feedback: "Richtig! Die Organisation muss bestimmen, was ueberwacht und gemessen werden muss (ISO 9001:2015, 9.1.1)."},
                {text: "geeignete Methoden bestimmt werden", correct: true, feedback: "Richtig! Geeignete Methoden fuer Ueberwachung, Messung, Analyse und Bewertung muessen bestimmt werden."},
                {text: "Kundenzufriedenheit bewertet wird", correct: true, feedback: "Richtig! Die Wahrnehmung des Kunden ueber den Erfuellungsgrad seiner Anforderungen muss ueberwacht werden (Abschnitt 9.1.2)."}
            ]},
            {q: "Interne Audits ...", topic: "Internes Audit", answers: [
                {text: "sind geplant durchzufuehren", correct: true, feedback: "Richtig! Die Organisation muss in geplanten Abstaenden interne Audits durchfuehren (ISO 9001:2015, 9.2.1)."},
                {text: "muessen unabhaengig sein", correct: true, feedback: "Richtig! Auditoren muessen unabhaengig vom auditierten Bereich sein, um Objektivitaet sicherzustellen."},
                {text: "sind freiwillig", correct: false, feedback: "FALSCH: Interne Audits sind eine Normforderung (Abschnitt 9.2) und daher NICHT freiwillig."},
                {text: "liefern Informationen zur Wirksamkeit", correct: true, feedback: "Richtig! Audits liefern Informationen, ob das QMS die Anforderungen erfuellt und wirksam ist."}
            ]},
            {q: "Welche Punkte gehoeren zu Eingaben der Managementbewertung?", topic: "Managementbewertung", answers: [
                {text: "Auditergebnisse", correct: true, feedback: "Richtig! Ergebnisse von Audits sind eine Eingabe der Managementbewertung (ISO 9001:2015, 9.3.2)."},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig! Informationen ueber die Kundenzufriedenheit sind eine Eingabe (Abschnitt 9.3.2)."},
                {text: "Aenderungen interner/externer Themen", correct: true, feedback: "Richtig! Aenderungen bei externen und internen Themen sind Eingaben der Managementbewertung."},
                {text: "Mitarbeiterjahresgespraeche", correct: false, feedback: "FALSCH: Mitarbeiterjahresgespraeche sind KEINE explizit genannte Eingabe der Managementbewertung in Abschnitt 9.3.2."}
            ]},
            {q: "Wirksamkeit bedeutet ...", topic: "Grundlagen", answers: [
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig! Laut ISO 9000:2015 ist Wirksamkeit das Ausmass, in dem geplante Taetigkeiten verwirklicht und geplante Ergebnisse erreicht werden."},
                {text: "Einhaltung interner Vorgaben", correct: false, feedback: "FALSCH: Das beschreibt Konformitaet, nicht Wirksamkeit. Wirksamkeit bezieht sich auf das Erreichen von Ergebnissen."},
                {text: "wirtschaftlichen Erfolg", correct: false, feedback: "FALSCH: Wirtschaftlicher Erfolg bezieht sich auf Effizienz (Verhaeltnis Ergebnis zu Mitteleinsatz), nicht auf Wirksamkeit."},
                {text: "gesetzliche Konformitaet", correct: false, feedback: "FALSCH: Gesetzliche Konformitaet ist ein separates Thema und nicht identisch mit Wirksamkeit."}
            ]},
            {q: "Eine Nichtkonformitaet liegt vor, wenn ...", topic: "Nichtkonformitaet", answers: [
                {text: "eine Anforderung nicht erfuellt ist", correct: true, feedback: "Richtig! Nichtkonformitaet ist die Nichterfuellung einer Anforderung (ISO 9000:2015, 3.6.9)."},
                {text: "ein Kunde unzufrieden ist", correct: false, feedback: "FALSCH: Kundenunzufriedenheit fuehrt nicht automatisch zu einer Nichtkonformitaet im Sinne der Norm."},
                {text: "eine Normforderung nicht erfuellt ist", correct: true, feedback: "Richtig! Die Nichterfuellung einer Normforderung ist eine Nichtkonformitaet."},
                {text: "ein Ziel verfehlt wird", correct: false, feedback: "FALSCH: Zielverfehlung ist nicht automatisch eine Nichtkonformitaet - sie erfordert Analyse, aber ist keine Normabweichung."}
            ]},
            {q: "Korrekturmassnahmen erfordern ...", topic: "Verbesserung", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig! Bei Nichtkonformitaeten muessen die Ursachen ermittelt werden (ISO 9001:2015, 10.2.1)."},
                {text: "Ersatz von Vorbeugungsmassnahmen", correct: false, feedback: "FALSCH: Korrekturmassnahmen ersetzen keine Vorbeugung. Der risikobasierte Ansatz deckt Vorbeugung ab."},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig! Die Wirksamkeit der ergriffenen Korrekturmassnahmen muss bewertet werden (Abschnitt 10.2.1)."},
                {text: "externe Genehmigung", correct: false, feedback: "FALSCH: Die Norm fordert keine externe Genehmigung fuer Korrekturmassnahmen."}
            ]},
            {q: "Verbesserung im Sinne der ISO 9001 bedeutet ...", topic: "Verbesserung", answers: [
                {text: "fortlaufende Leistungssteigerung", correct: true, feedback: "Richtig! Fortlaufende Verbesserung der Eignung, Angemessenheit und Wirksamkeit des QMS ist gefordert (Kapitel 10)."},
                {text: "ausschliesslich Reaktion auf Abweichungen", correct: false, feedback: "FALSCH: Verbesserung ist nicht nur reaktiv. Sie umfasst auch proaktive Massnahmen und Chancennutzung."},
                {text: "optionale Taetigkeit", correct: false, feedback: "FALSCH: Fortlaufende Verbesserung ist eine Normforderung (Abschnitt 10.3) und NICHT optional."},
                {text: "Aufgabe der Qualitaetsabteilung", correct: false, feedback: "FALSCH: Verbesserung ist Aufgabe der gesamten Organisation, nicht nur einer Abteilung."}
            ]},
            {q: "Interne Kommunikation verlangt, dass ...", topic: "Unterstuetzung", answers: [
                {text: "relevante Inhalte festgelegt werden", correct: true, feedback: "Richtig! Die Organisation muss festlegen, worueber kommuniziert wird (ISO 9001:2015, 7.4)."},
                {text: "Kommunikation entbehrlich ist", correct: false, feedback: "FALSCH: Kommunikation ist eine Normforderung und NICHT entbehrlich (Abschnitt 7.4)."},
                {text: "Verantwortlichkeiten bestimmt werden", correct: true, feedback: "Richtig! Wer kommuniziert, muss festgelegt werden (Abschnitt 7.4)."},
                {text: "Kommunikation nur schriftlich erfolgt", correct: false, feedback: "FALSCH: Die Norm schreibt keine bestimmte Form vor. Die Organisation bestimmt, wie kommuniziert wird."}
            ]},
            {q: "Wissen der Organisation ...", topic: "Unterstuetzung", answers: [
                {text: "ist zu bestimmen", correct: true, feedback: "Richtig! Das fuer Prozesse erforderliche Wissen muss bestimmt werden (ISO 9001:2015, 7.1.6)."},
                {text: "ist zu erhalten", correct: true, feedback: "Richtig! Vorhandenes Wissen muss aufrechterhalten werden (Abschnitt 7.1.6)."},
                {text: "muss vollstaendig dokumentiert sein", correct: false, feedback: "FALSCH: Vollstaendige Dokumentation ist NICHT gefordert. Wissen muss verfuegbar, aber nicht komplett dokumentiert sein."},
                {text: "muss verfuegbar sein", correct: true, feedback: "Richtig! Wissen muss in erforderlichem Umfang verfuegbar sein (Abschnitt 7.1.6)."}
            ]},
            {q: "Kennzeichnung und Rueckverfolgbarkeit sind erforderlich, wenn ...", topic: "Betrieb", answers: [
                {text: "Anforderungen bestehen", correct: true, feedback: "Richtig! Wenn Rueckverfolgbarkeit gefordert ist, muss die Organisation Outputs kennzeichnen (ISO 9001:2015, 8.5.2)."},
                {text: "Produktkonformitaet betroffen ist", correct: true, feedback: "Richtig! Kennzeichnung ist erforderlich, um Konformitaet sicherzustellen."},
                {text: "Rueckverfolgbarkeit immer gefordert ist", correct: false, feedback: "FALSCH: Rueckverfolgbarkeit ist NICHT immer gefordert - nur wenn es eine Anforderung ist (Abschnitt 8.5.2)."},
                {text: "vertragliche Vorgaben bestehen", correct: true, feedback: "Richtig! Vertragliche Vorgaben koennen Rueckverfolgbarkeit erfordern."}
            ]},
            {q: "Eigentum externer Parteien ist ...", topic: "Betrieb", answers: [
                {text: "zu identifizieren", correct: true, feedback: "Richtig! Eigentum von Kunden oder externen Anbietern muss identifiziert werden (ISO 9001:2015, 8.5.3)."},
                {text: "zu schuetzen", correct: true, feedback: "Richtig! Das Eigentum muss geschuetzt werden, solange es sich in Obhut der Organisation befindet."},
                {text: "bei Verlust zu melden", correct: true, feedback: "Richtig! Bei Verlust, Beschaedigung oder Unbrauchbarkeit muss dem Eigentuemer berichtet werden."},
                {text: "Eigentum der Organisation", correct: false, feedback: "FALSCH: Das Eigentum VERBLEIBT beim Kunden oder externen Anbieter - es wird nicht Eigentum der Organisation."}
            ]},
            {q: "Produktfreigabe setzt voraus, dass ...", topic: "Betrieb", answers: [
                {text: "Anforderungen erfuellt sind", correct: true, feedback: "Richtig! Die Freigabe darf erst erfolgen, wenn geplante Anforderungen erfuellt sind (ISO 9001:2015, 8.6)."},
                {text: "befugte Personen freigeben", correct: true, feedback: "Richtig! Die freigabeberechtigte Person muss identifizierbar sein (Abschnitt 8.6)."},
                {text: "Freigabe dokumentiert ist", correct: true, feedback: "Richtig! Die Freigabe muss als dokumentierte Information aufbewahrt werden."},
                {text: "Pruefungen entfallen duerfen", correct: false, feedback: "FALSCH: Pruefungen duerfen nicht einfach entfallen, es sei denn, eine befugte Stelle genehmigt dies."}
            ]},
            {q: "Nichtkonforme Outputs muessen ...", topic: "Nichtkonformitaet", answers: [
                {text: "gelenkt werden", correct: true, feedback: "Richtig! Nichtkonforme Outputs muessen gelenkt werden, um unbeabsichtigten Gebrauch zu verhindern (ISO 9001:2015, 8.7)."},
                {text: "gekennzeichnet werden", correct: true, feedback: "Richtig! Kennzeichnung ist Teil der Lenkung nichtkonformer Outputs (Abschnitt 8.7.1)."},
                {text: "freigegeben werden", correct: false, feedback: "FALSCH: Nichtkonforme Outputs werden NICHT einfach freigegeben. Eine Sonderfreigabe erfordert befugte Genehmigung."},
                {text: "korrigiert werden", correct: true, feedback: "Richtig! Korrektur ist eine der Behandlungsmoeglichkeiten fuer nichtkonforme Outputs."}
            ]},
            {q: "Dokumentierte Information erfordert, dass ...", topic: "Dokumentation", answers: [
                {text: "Aufbewahrungsfristen festgelegt sind", correct: true, feedback: "Richtig! Aufbewahrung einschliesslich Aufbewahrungsfristen muss festgelegt werden (ISO 9001:2015, 7.5.3.2)."},
                {text: "Dokumente unbegrenzt geaendert werden duerfen", correct: false, feedback: "FALSCH: Aenderungen muessen gelenkt werden. Unbegrenzte Aenderbarkeit widerspricht der Lenkungsforderung."},
                {text: "Schutz vor Verlust besteht", correct: true, feedback: "Richtig! Schutz vor Verlust der Vertraulichkeit und Integritaet muss sichergestellt werden (Abschnitt 7.5.3.2)."},
                {text: "Dokumente und Aufzeichnungen identisch sind", correct: false, feedback: "FALSCH: Dokumente (aufrechterhalten) und Aufzeichnungen (aufbewahren) haben unterschiedliche Funktionen."}
            ]},
            {q: "Der PDCA-Zyklus ...", topic: "Grundlagen", answers: [
                {text: "unterstuetzt den Prozessansatz", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen kann das QMS als Ganzes mithilfe der PDCA-Methode gelenkt werden."},
                {text: "foerdert Verbesserung", correct: true, feedback: "Richtig! PDCA (Plan-Do-Check-Act) foerdert kontinuierliche Verbesserung durch systematisches Vorgehen."},
                {text: "ersetzt das QMS", correct: false, feedback: "FALSCH: PDCA ist ein WERKZEUG zur Steuerung des QMS, ersetzt es aber nicht."},
                {text: "gilt nur fuer Kapitel 8", correct: false, feedback: "FALSCH: PDCA gilt fuer das GESAMTE QMS, nicht nur fuer den Betrieb (Kapitel 8)."}
            ]},
            {q: "Bewertung der Leistung umfasst ...", topic: "Bewertung", answers: [
                {text: "Ueberwachung, Messung, Analyse, Bewertung", correct: true, feedback: "Richtig! Kapitel 9.1 behandelt Ueberwachung, Messung, Analyse und Bewertung."},
                {text: "Ersatz interner Audits", correct: false, feedback: "FALSCH: Die Leistungsbewertung ERSETZT interne Audits nicht - beide sind separate Anforderungen in Kapitel 9."},
                {text: "Entscheidungsgrundlage", correct: true, feedback: "Richtig! Die Ergebnisse dienen als Grundlage fuer Entscheidungen zur Verbesserung."},
                {text: "alleinige Aufgabe der Leitung", correct: false, feedback: "FALSCH: Bewertung der Leistung ist NICHT allein Aufgabe der Leitung - sie betrifft die gesamte Organisation."}
            ]},
            {q: "Bei Prozessaenderungen fordert die Norm ...", topic: "Planung", answers: [
                {text: "Planung der Aenderung", correct: true, feedback: "Richtig! Aenderungen muessen geplant durchgefuehrt werden (ISO 9001:2015, 6.3)."},
                {text: "Beruecksichtigung von Risiken", correct: true, feedback: "Richtig! Bei der Planung von Aenderungen muessen moegliche Konsequenzen beruecksichtigt werden."},
                {text: "externe Genehmigung", correct: false, feedback: "FALSCH: Die Norm fordert keine externe Genehmigung fuer Prozessaenderungen."},
                {text: "zwingende Dokumentation jeder Aenderung", correct: false, feedback: "FALSCH: Laut TUeV-Unterlagen muss nicht JEDE Aenderung dokumentiert werden - nur soweit erforderlich."}
            ]},
            {q: "Rollen und Verantwortlichkeiten muessen ...", topic: "Fuehrung", answers: [
                {text: "festgelegt werden", correct: true, feedback: "Richtig! Rollen, Verantwortlichkeiten und Befugnisse muessen festgelegt werden (ISO 9001:2015, 5.3)."},
                {text: "bekannt gemacht werden", correct: true, feedback: "Richtig! Verantwortlichkeiten muessen innerhalb der Organisation bekannt gemacht werden."},
                {text: "ausschliesslich bei der Leitung liegen", correct: false, feedback: "FALSCH: Verantwortlichkeiten werden DELEGIERT und liegen nicht ausschliesslich bei der Leitung."},
                {text: "regelmaessig wechseln", correct: false, feedback: "FALSCH: Die Norm fordert keinen regelmaessigen Wechsel von Verantwortlichkeiten."}
            ]},
            {q: "Kundenbezogene Kommunikation ...", topic: "Betrieb", answers: [
                {text: "ist festzulegen", correct: true, feedback: "Richtig! Die Organisation muss die Kommunikation mit Kunden festlegen (ISO 9001:2015, 8.2.1)."},
                {text: "ist optional", correct: false, feedback: "FALSCH: Kundenbezogene Kommunikation ist eine Normforderung und NICHT optional."},
                {text: "beschraenkt sich auf Reklamationen", correct: false, feedback: "FALSCH: Kommunikation umfasst mehr als Reklamationen - auch Anfragen, Vertraege, Aenderungen, Feedback."},
                {text: "ist Aufgabe des Marketings", correct: false, feedback: "FALSCH: Kundenkommunikation ist nicht nur Marketingaufgabe - sie betrifft alle relevanten Bereiche."}
            ]},
            {q: "Nach einem Audit mit Abweichungen sind normkonform ...", topic: "Internes Audit", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig! Bei Abweichungen muessen die Ursachen analysiert werden (ISO 9001:2015, 10.2.1)."},
                {text: "Korrekturmassnahmen", correct: true, feedback: "Richtig! Korrekturmassnahmen muessen festgelegt und umgesetzt werden."},
                {text: "Sanktionen", correct: false, feedback: "FALSCH: Sanktionen sind KEIN Bestandteil der Normforderungen zu Korrekturmassnahmen."},
                {text: "Wirksamkeitsbewertung", correct: true, feedback: "Richtig! Die Wirksamkeit der Korrekturmassnahmen muss bewertet werden."}
            ]},
            {q: "Kontinuierliche Verbesserung ...", topic: "Verbesserung", answers: [
                {text: "ist Bestandteil des QMS", correct: true, feedback: "Richtig! Fortlaufende Verbesserung ist ein wesentlicher Bestandteil des QMS (ISO 9001:2015, 10.3)."},
                {text: "ist einmalig", correct: false, feedback: "FALSCH: KONTINUIERLICH bedeutet fortlaufend, nicht einmalig."},
                {text: "ist optional", correct: false, feedback: "FALSCH: Fortlaufende Verbesserung ist eine Normforderung und NICHT optional."},
                {text: "beschraenkt sich auf Prozesse", correct: false, feedback: "FALSCH: Verbesserung betrifft Eignung, Angemessenheit und Wirksamkeit des GESAMTEN QMS."}
            ]},
            {q: "Extern bereitgestellte Prozesse ...", topic: "Externe Anbieter", answers: [
                {text: "sind zu lenken", correct: true, feedback: "Richtig! Extern bereitgestellte Prozesse, Produkte und Dienstleistungen muessen gesteuert werden (ISO 9001:2015, 8.4)."},
                {text: "bleiben in Verantwortung der Organisation", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen verbleibt die Verantwortung fuer die Konformitaet bei der Organisation."},
                {text: "uebertragen Normverantwortung", correct: false, feedback: "FALSCH: Die Normverantwortung wird NICHT auf externe Anbieter uebertragen - sie bleibt bei der Organisation."},
                {text: "erfordern definierte Anforderungen", correct: true, feedback: "Richtig! Anforderungen an externe Anbieter muessen festgelegt und kommuniziert werden."}
            ]},
            {q: "Der Anwendungsbereich des QMS ...", topic: "Anwendungsbereich", answers: [
                {text: "ist dokumentierte Information", correct: true, feedback: "Richtig! Der Anwendungsbereich muss als dokumentierte Information verfuegbar sein (ISO 9001:2015, 4.3)."},
                {text: "ist unveraenderlich", correct: false, feedback: "FALSCH: Der Anwendungsbereich kann bei Bedarf angepasst werden, er ist nicht unveraenderlich."},
                {text: "ersetzt ein QM-Handbuch", correct: false, feedback: "FALSCH: Der Anwendungsbereich ersetzt kein QM-Handbuch. Ein Handbuch ist seit 2015 nicht mehr gefordert."},
                {text: "muss alle Kapitel enthalten", correct: false, feedback: "FALSCH: Ausschluesse sind moeglich, wenn Anforderungen nicht anwendbar sind (Abschnitt 4.3)."}
            ]},
            {q: "Die HLS-Struktur ...", topic: "Grundlagen", answers: [
                {text: "harmonisiert Managementsystemnormen", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen gewaehrleistet HLS eine identische Struktur fuer alle ISO-Managementsystemnormen."},
                {text: "gilt nur fuer ISO 9001", correct: false, feedback: "FALSCH: HLS gilt fuer ALLE ISO-Managementsystemnormen, nicht nur ISO 9001."},
                {text: "gibt Inhalte vor", correct: false, feedback: "FALSCH: HLS gibt die STRUKTUR vor, nicht konkrete Inhalte. Jede Norm hat ihre spezifischen Anforderungen."},
                {text: "schraenkt Ausschluesse ein", correct: false, feedback: "FALSCH: HLS hat keinen direkten Einfluss auf die Moeglichkeit von Ausschluessen."}
            ]},
            {q: "Bewertung externer Anbieter erfordert ...", topic: "Externe Anbieter", answers: [
                {text: "definierte Kriterien", correct: true, feedback: "Richtig! Kriterien fuer Auswahl, Bewertung und Ueberwachung muessen festgelegt werden (ISO 9001:2015, 8.4.1)."},
                {text: "jaehrliche Audits", correct: false, feedback: "FALSCH: Die Norm schreibt keine jaehrlichen Audits bei Lieferanten vor. Die Organisation legt Art und Umfang fest."},
                {text: "optionale Durchfuehrung", correct: false, feedback: "FALSCH: Die Bewertung externer Anbieter ist eine Normforderung und NICHT optional."},
                {text: "Beruecksichtigung der Ergebnisse", correct: true, feedback: "Richtig! Ergebnisse der Bewertung muessen beruecksichtigt und aufbewahrt werden."}
            ]},
            {q: "Ziel der ISO 9001 ist ...", topic: "Grundlagen", answers: [
                {text: "Kundenzufriedenheit durch wirksames QMS", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen zielt ISO 9001 auf die Erhoehung der Kundenzufriedenheit durch ein wirksames QMS ab."},
                {text: "Einfuehrung eines QM-Handbuchs", correct: false, feedback: "FALSCH: Ein QM-Handbuch ist seit der Revision 2015 NICHT mehr explizit gefordert."},
                {text: "vollstaendige Gesetzeskonformitaet", correct: false, feedback: "FALSCH: ISO 9001 ist eine Qualitaetsnorm, keine Rechtsnorm. Gesetzliche Anforderungen sind zu beruecksichtigen, aber nicht das Hauptziel."},
                {text: "Standardisierung aller Prozesse", correct: false, feedback: "FALSCH: Die Norm fordert nicht die Standardisierung aller Prozesse, sondern deren wirksame Steuerung."}
            ]},
            {q: "Prozesswirksamkeit bedeutet ...", topic: "Prozesse", answers: [
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig! Wirksamkeit ist das Ausmass, in dem geplante Ergebnisse erreicht werden (ISO 9000:2015)."},
                {text: "Identitaet mit Konformitaet", correct: false, feedback: "FALSCH: Wirksamkeit und Konformitaet sind nicht identisch. Konformitaet bezieht sich auf Anforderungserfuellung."},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig! Die Wirksamkeit von Prozessen muss bewertet werden (ISO 9001:2015, 4.4.1)."},
                {text: "Ersatz der Ueberwachung", correct: false, feedback: "FALSCH: Wirksamkeit ersetzt nicht die Ueberwachung. Beide sind komplementaere Anforderungen."}
            ]},
            {q: "Dokumentenlenkung erfordert ...", topic: "Dokumentation", answers: [
                {text: "Lenkung von Aenderungen", correct: true, feedback: "Richtig! Aenderungen an dokumentierter Information muessen gelenkt werden (ISO 9001:2015, 7.5.3)."},
                {text: "freie Aenderbarkeit", correct: false, feedback: "FALSCH: Freie Aenderbarkeit widerspricht der Lenkungsforderung. Aenderungen muessen kontrolliert erfolgen."},
                {text: "Schutz vor unbeabsichtigter Nutzung", correct: true, feedback: "Richtig! Schutz vor unbeabsichtigtem Gebrauch veralteter Informationen ist sicherzustellen (Abschnitt 7.5.3.2)."},
                {text: "unbegrenzte Aufbewahrung", correct: false, feedback: "FALSCH: Die Organisation legt Aufbewahrungsfristen fest - unbegrenzte Aufbewahrung ist nicht gefordert."}
            ]},
            {q: "Managementbewertung ...", topic: "Managementbewertung", answers: [
                {text: "wird geplant durchgefuehrt", correct: true, feedback: "Richtig! Die oberste Leitung muss das QMS in geplanten Abstaenden bewerten (ISO 9001:2015, 9.3.1)."},
                {text: "bewertet Eignung, Angemessenheit, Wirksamkeit", correct: true, feedback: "Richtig! Ziel ist die Bewertung der fortdauernden Eignung, Angemessenheit und Wirksamkeit des QMS."},
                {text: "ersetzt Audits", correct: false, feedback: "FALSCH: Die Managementbewertung ersetzt NICHT interne Audits. Beide sind separate Anforderungen in Kapitel 9."},
                {text: "liefert Verbesserungsinput", correct: true, feedback: "Richtig! Die Ergebnisse muessen Entscheidungen zu Verbesserungsmoeglichkeiten enthalten (Abschnitt 9.3.3)."}
            ]},
            {q: "Welche Aussage ist normativ korrekt?", topic: "Kundenzufriedenheit", answers: [
                {text: "Kundenzufriedenheit ist Leistungsindikator", correct: true, feedback: "Richtig! Kundenzufriedenheit ist ein wichtiger Leistungsindikator, der ueberwacht werden muss (ISO 9001:2015, 9.1.2)."},
                {text: "identisch mit Kundenorientierung", correct: false, feedback: "FALSCH: Kundenzufriedenheit (Ergebnis) und Kundenorientierung (Grundsatz) sind nicht identisch."},
                {text: "optional", correct: false, feedback: "FALSCH: Die Ueberwachung der Kundenzufriedenheit ist eine Normforderung und NICHT optional (Abschnitt 9.1.2)."},
                {text: "Ersatz fuer Prozessueberwachung", correct: false, feedback: "FALSCH: Kundenzufriedenheit ersetzt NICHT die Prozessueberwachung. Beide sind separate Anforderungen."}
            ]}
        ]
    },
    "grundlagen": {
        title: "QM-Grundlagen - Sieben Grundsaetze, Normen & Zertifizierung",
        questions: [
            {q: "Wie viele Grundsaetze des Qualitaetsmanagements definiert die ISO 9000?", topic: "Sieben Grundsaetze", answers: [
                {text: "Sieben Grundsaetze", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen wurden in der ISO 9000 sieben Grundsaetze formuliert, die die wesentlichen Bestandteile eines modernen QM widerspiegeln."},
                {text: "Fuenf Grundsaetze", correct: false, feedback: "FALSCH: Es sind SIEBEN Grundsaetze, nicht fuenf."},
                {text: "Zehn Grundsaetze", correct: false, feedback: "FALSCH: Es sind SIEBEN Grundsaetze, nicht zehn."},
                {text: "Acht Grundsaetze", correct: false, feedback: "FALSCH: Seit der Revision 2015 sind es SIEBEN Grundsaetze (frueher acht)."}
            ]},
            {q: "Welche der folgenden sind Grundsaetze des Qualitaetsmanagements nach ISO 9000?", topic: "Sieben Grundsaetze", answers: [
                {text: "Kundenorientierung", correct: true, feedback: "Richtig! Kundenorientierung ist der erste und wichtigste QM-Grundsatz."},
                {text: "Fuehrung", correct: true, feedback: "Richtig! Fuehrung ist der zweite QM-Grundsatz."},
                {text: "Engagement von Personen", correct: true, feedback: "Richtig! Engagement von Personen ist der dritte QM-Grundsatz."},
                {text: "Kostensenkung", correct: false, feedback: "FALSCH: Kostensenkung ist KEIN QM-Grundsatz nach ISO 9000."}
            ]},
            {q: "Welche weiteren Grundsaetze gehoeren zum QM nach ISO 9000?", topic: "Sieben Grundsaetze", answers: [
                {text: "Prozessorientierter Ansatz", correct: true, feedback: "Richtig! Der prozessorientierte Ansatz ist der vierte QM-Grundsatz."},
                {text: "Verbesserung", correct: true, feedback: "Richtig! Verbesserung ist der fuenfte QM-Grundsatz."},
                {text: "Faktengestuetzte Entscheidungsfindung", correct: true, feedback: "Richtig! Faktengestuetzte Entscheidungsfindung ist der sechste QM-Grundsatz."},
                {text: "Beziehungsmanagement", correct: true, feedback: "Richtig! Beziehungsmanagement ist der siebte QM-Grundsatz. ALLE vier Antworten sind korrekt!"}
            ]},
            {q: "Was bedeutet der QM-Grundsatz 'Kundenorientierung'?", topic: "Sieben Grundsaetze", answers: [
                {text: "Der Hauptschwerpunkt liegt in der Erfuellung der Kundenanforderungen", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen liegt der Hauptschwerpunkt in der Erfuellung der Kundenanforderungen."},
                {text: "Das Bestreben, Kundenerwartungen zu uebertreffen", correct: true, feedback: "Richtig! Kundenorientierung umfasst auch das Bestreben, Kundenerwartungen zu uebertreffen."},
                {text: "Das Gewinnen und Beibehalten von Kundenvertrauen", correct: true, feedback: "Richtig! Nachhaltiger Erfolg wird durch Vertrauen von Kunden und interessierten Parteien erreicht."},
                {text: "Kunden muessen alle Entscheidungen genehmigen", correct: false, feedback: "FALSCH: Kundenorientierung bedeutet NICHT, dass Kunden Entscheidungen genehmigen muessen."}
            ]},
            {q: "Was bedeutet der QM-Grundsatz 'Faktengestuetzte Entscheidungsfindung'?", topic: "Sieben Grundsaetze", answers: [
                {text: "Entscheidungen basieren auf Analyse und Auswertung von Daten", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen fuehren Entscheidungen auf Basis von Datenanalyse eher zu gewuenschten Ergebnissen."},
                {text: "Tatsachen und Datenanalyse fuehren zu groesserer Objektivitaet", correct: true, feedback: "Richtig! Tatsachen, Nachweise und Datenanalyse fuehren zu groesserer Objektivitaet und Vertrauen."},
                {text: "Entscheidungsfindung kann komplex sein und weist Unsicherheit auf", correct: true, feedback: "Richtig! Die TUeV-Unterlagen betonen, dass Entscheidungsfindung immer eine gewisse Unsicherheit aufweist."},
                {text: "Nur quantitative Daten duerfen verwendet werden", correct: false, feedback: "FALSCH: Auch qualitative Informationen koennen fuer Entscheidungen relevant sein."}
            ]},
            {q: "Was bedeutet der QM-Grundsatz 'Beziehungsmanagement'?", topic: "Sieben Grundsaetze", answers: [
                {text: "Organisationen leiten und lenken Beziehungen mit interessierten Parteien", correct: true, feedback: "Richtig! Fuer nachhaltigen Erfolg muessen Beziehungen zu interessierten Parteien gelenkt werden."},
                {text: "Interessierte Parteien beeinflussen die Leistung einer Organisation", correct: true, feedback: "Richtig! Die TUeV-Unterlagen betonen, dass interessierte Parteien die Leistung beeinflussen."},
                {text: "Beziehungsmanagement mit Lieferanten ist besonders wichtig", correct: true, feedback: "Richtig! Beziehungsmanagement mit Lieferanten und Partnernetzwerken ist oftmals von besonderer Bedeutung."},
                {text: "Beziehungsmanagement betrifft nur externe Partner", correct: false, feedback: "FALSCH: Auch interne Parteien wie Mitarbeiter sind Teil des Beziehungsmanagements."}
            ]},
            {q: "Was beschreibt das Kano-Modell?", topic: "Kano-Modell", answers: [
                {text: "Den Zusammenhang zwischen Erfuellungsgrad und Kundenzufriedenheit", correct: true, feedback: "Richtig! Das Kano-Modell nach seinem Entwickler zeigt die Beziehung zwischen Anforderungserfuellung und Zufriedenheit."},
                {text: "Unterschiedliche Arten von Kundenanforderungen", correct: true, feedback: "Richtig! Das Modell unterscheidet Basis-, Leistungs- und Begeisterungsmerkmale."},
                {text: "Die Komplexitaet der Kundenzufriedenheit", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen zeigt das Modell, dass der Zusammenhang zwischen Anforderungserfuellung und Zufriedenheit komplex ist."},
                {text: "Eine Methode zur Kostenkalkulation", correct: false, feedback: "FALSCH: Das Kano-Modell hat NICHTS mit Kostenkalkulation zu tun."}
            ]},
            {q: "Was sind Basismerkmale im Kano-Modell?", topic: "Kano-Modell", answers: [
                {text: "Anforderungen, die bei Nichterfuellung zu Unzufriedenheit fuehren", correct: true, feedback: "Richtig! Werden Basismerkmale nicht erfuellt, entsteht Unzufriedenheit."},
                {text: "Anforderungen, die bei Erfuellung keine Zufriedenheit erzeugen", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen entsteht bei Erfuellung von Basismerkmalen KEINE Zufriedenheit - nur Neutralitaet."},
                {text: "So selbstverstaendlich, dass sie Kunden erst bei Nichterfuellung bewusst werden", correct: true, feedback: "Richtig! Basismerkmale sind Selbstverstaendlichkeiten, die oft erst bei Fehlen auffallen."},
                {text: "Anforderungen, die immer explizit genannt werden", correct: false, feedback: "FALSCH: Basismerkmale werden oft NICHT explizit genannt, weil sie als selbstverstaendlich gelten."}
            ]},
            {q: "Was sind Leistungsmerkmale im Kano-Modell?", topic: "Kano-Modell", answers: [
                {text: "Zusatzleistungen, die der Kunde explizit erfragt", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen beschreiben Leistungsmerkmale Zusatzleistungen, die explizit erfragt werden."},
                {text: "Bei Erfuellung steigt die Zufriedenheit proportional", correct: true, feedback: "Richtig! Je besser Leistungsmerkmale erfuellt werden, desto zufriedener ist der Kunde."},
                {text: "Bei Nichterfuellung schlaegt Zufriedenheit in Unzufriedenheit um", correct: true, feedback: "Richtig! Die TUeV-Unterlagen warnen: Bei Nichterfuellung entsteht schnell Unzufriedenheit."},
                {text: "Werden vom Kunden nie ausgesprochen", correct: false, feedback: "FALSCH: Leistungsmerkmale werden vom Kunden EXPLIZIT erfragt und ausgesprochen."}
            ]},
            {q: "Was sind Begeisterungsmerkmale im Kano-Modell?", topic: "Kano-Modell", answers: [
                {text: "Nicht vorausgesetzte und nicht explizit erfragte Leistungen", correct: true, feedback: "Richtig! Begeisterungsmerkmale sind ueberraschende Zusatzleistungen, die nicht erwartet werden."},
                {text: "Fuehren zu hoechster Kundenzufriedenheit", correct: true, feedback: "Richtig! Diese Merkmale fuehren laut TUeV-Unterlagen in den Bereich groesster Zufriedenheit."},
                {text: "Muessen einen zusaetzlichen Nutzen bringen", correct: true, feedback: "Richtig! Begeisterungsmerkmale muessen fuer den Kunden einen zusaetzlichen Nutzen haben."},
                {text: "Werden mit der Zeit zu Basismerkmalen", correct: true, feedback: "Richtig! ALLE vier sind korrekt! Laut TUeV-Unterlagen tritt ein Gewoehnungseffekt ein."}
            ]},
            {q: "Welche Normen gehoeren zur Normenreihe ISO 9000 ff.?", topic: "Normenreihe", answers: [
                {text: "ISO 9000 - Grundlagen und Begriffe", correct: true, feedback: "Richtig! ISO 9000 beschreibt Grundlagen und Begriffe des Qualitaetsmanagements."},
                {text: "ISO 9001 - Anforderungen an QMS", correct: true, feedback: "Richtig! ISO 9001 enthaelt die Anforderungen an ein Qualitaetsmanagementsystem."},
                {text: "ISO 9004 - Anleitung zum nachhaltigen Erfolg", correct: true, feedback: "Richtig! ISO 9004 gibt Anleitungen zum Erreichen nachhaltigen Erfolgs."},
                {text: "ISO 9005 - Umweltmanagement", correct: false, feedback: "FALSCH: Es gibt keine ISO 9005. Umweltmanagement ist ISO 14001."}
            ]},
            {q: "Welche Norm enthaelt Leitlinien zur Auditierung von Managementsystemen?", topic: "Normenreihe", answers: [
                {text: "ISO 19011", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist ISO 19011 der Leitfaden zur Auditierung von Managementsystemen."},
                {text: "ISO 9001", correct: false, feedback: "FALSCH: ISO 9001 enthaelt die Anforderungen, nicht die Auditleitlinien."},
                {text: "ISO 9004", correct: false, feedback: "FALSCH: ISO 9004 behandelt nachhaltigen Erfolg, nicht Auditierung."},
                {text: "ISO 14001", correct: false, feedback: "FALSCH: ISO 14001 behandelt Umweltmanagement."}
            ]},
            {q: "Was ist der Unterschied zwischen Zertifizierung und Akkreditierung?", topic: "Zertifizierung", answers: [
                {text: "Zertifizierung bestaetigt die Normkonformitaet eines QMS", correct: true, feedback: "Richtig! Bei der Zertifizierung wird geprueft, ob das QMS die Normanforderungen erfuellt."},
                {text: "Akkreditierung bestaetigt die Kompetenz einer Zertifizierungsstelle", correct: true, feedback: "Richtig! Akkreditierung bestaetigt, dass eine Zertifizierungsstelle kompetent ist."},
                {text: "DAkkS ist die nationale Akkreditierungsstelle in Deutschland", correct: true, feedback: "Richtig! Die Deutsche Akkreditierungsstelle (DAkkS) akkreditiert Zertifizierungsstellen."},
                {text: "Zertifizierung und Akkreditierung sind identisch", correct: false, feedback: "FALSCH: Sie sind NICHT identisch - Zertifizierung betrifft Unternehmen, Akkreditierung betrifft Zertifizierer."}
            ]},
            {q: "Welche branchenspezifischen Normen gibt es?", topic: "Branchennormen", answers: [
                {text: "IATF 16949 fuer die Automobilindustrie", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen gibt es branchenspezifische Normen wie IATF 16949."},
                {text: "ISO 13485 fuer Medizinprodukte", correct: true, feedback: "Richtig! ISO 13485 ist die QM-Norm fuer Medizinproduktehersteller."},
                {text: "AS9100 fuer die Luft- und Raumfahrt", correct: true, feedback: "Richtig! AS9100 ist die QM-Norm fuer die Luft- und Raumfahrtindustrie."},
                {text: "Diese Normen ersetzen die ISO 9001 vollstaendig", correct: false, feedback: "FALSCH: Branchenspezifische Normen ERGAENZEN die ISO 9001, ersetzen sie aber nicht."}
            ]},
            {q: "Was ist ein Integriertes Managementsystem (IMS)?", topic: "IMS", answers: [
                {text: "Ein System, das mehrere Managementsysteme zusammenfuehrt", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen werden im IMS verschiedene Managementsysteme integriert."},
                {text: "Kann ISO 9001, ISO 14001 und ISO 45001 kombinieren", correct: true, feedback: "Richtig! Typischerweise werden Qualitaet (9001), Umwelt (14001) und Arbeitsschutz (45001) integriert."},
                {text: "Die High Level Structure (HLS) erleichtert die Integration", correct: true, feedback: "Richtig! Die einheitliche Struktur HLS erleichtert die Integration verschiedener Managementsysteme."},
                {text: "Erfordert separate Dokumentation fuer jedes System", correct: false, feedback: "FALSCH: Ein IMS nutzt gemeinsame Dokumentation und vermeidet Redundanzen."}
            ]},
            {q: "Die High Level Structure (HLS) ...", topic: "HLS", answers: [
                {text: "ist eine einheitliche Grundstruktur fuer ISO-Managementsystem-Normen", correct: true, feedback: "Richtig! Die HLS gibt allen ISO-Managementsystem-Normen die gleiche Kapitelstruktur."},
                {text: "erleichtert die Integration verschiedener Managementsysteme", correct: true, feedback: "Richtig! Durch die einheitliche Struktur lassen sich QMS, UMS und AMS einfacher integrieren."},
                {text: "umfasst 10 Kapitel", correct: true, feedback: "Richtig! Die HLS hat 10 Kapitel (0-10), wobei Kapitel 1-3 einfuehrend sind."},
                {text: "gilt nur fuer ISO 9001", correct: false, feedback: "FALSCH: Die HLS gilt fuer ALLE ISO-Managementsystem-Normen (9001, 14001, 45001, etc.)."}
            ]},
            {q: "Wofuer steht ISO?", topic: "Normenreihe", answers: [
                {text: "International Organization for Standardization", correct: true, feedback: "Richtig! ISO steht fuer International Organization for Standardization."},
                {text: "Internationale Standardisierungsorganisation", correct: true, feedback: "Richtig! Dies ist die deutsche Uebersetzung."},
                {text: "Die ISO hat ihren Sitz in Genf", correct: true, feedback: "Richtig! Die ISO hat ihren Sitz in Genf, Schweiz."},
                {text: "Industrial Standards Organization", correct: false, feedback: "FALSCH: ISO steht NICHT fuer Industrial Standards Organization."}
            ]},
            {q: "Was sind typische Anlaesse fuer die Einfuehrung eines QMS?", topic: "QMS Grundlagen", answers: [
                {text: "Kundenanforderungen", correct: true, feedback: "Richtig! Kunden fordern oft ein zertifiziertes QMS von ihren Lieferanten."},
                {text: "Gesetzliche Anforderungen", correct: true, feedback: "Richtig! In manchen Branchen ist ein QMS gesetzlich vorgeschrieben."},
                {text: "Wettbewerbsvorteile", correct: true, feedback: "Richtig! Ein zertifiziertes QMS kann Wettbewerbsvorteile bieten."},
                {text: "QMS ist immer gesetzlich vorgeschrieben", correct: false, feedback: "FALSCH: Ein QMS nach ISO 9001 ist in den meisten Branchen FREIWILLIG, nicht vorgeschrieben."}
            ]},
            {q: "Genormte Anforderungen bedeuten ...", topic: "QMS Grundlagen", answers: [
                {text: "Die Anforderungen an das QMS sind standardisiert", correct: true, feedback: "Richtig! Die Norm gibt einheitliche Anforderungen vor."},
                {text: "Das QMS selbst ist NICHT genormt", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen: Genormte Anforderungen, aber kein genormtes System."},
                {text: "Jede Organisation kann ihr QMS individuell gestalten", correct: true, feedback: "Richtig! Die Umsetzung ist flexibel und organisationsspezifisch."},
                {text: "Alle QMS muessen identisch aufgebaut sein", correct: false, feedback: "FALSCH: Die ANFORDERUNGEN sind gleich, aber die UMSETZUNG ist individuell."}
            ]}
        ]
    },
    "motivation": {
        title: "Motivation - Maslow & Motivationstheorie",
        questions: [
            {q: "Was beschreibt Maslows Beduerfnispyramide?", topic: "Maslow", answers: [
                {text: "Eine hierarchische Ordnung menschlicher Beduerfnisse", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen stellt die Pyramide eine hierarchische Ordnung der Beduerfnisse dar."},
                {text: "Das naechsthoehere Beduerfnis wird erst relevant, wenn das niedrigere befriedigt ist", correct: true, feedback: "Richtig! Maslow geht davon aus, dass erst nach Befriedigung niedrigerer Beduerfnisse hoehere relevant werden."},
                {text: "Das Verhalten ist durch das niedrigste unbefriedigte Beduerfnis motiviert", correct: true, feedback: "Richtig! Das Verhalten ist immer durch das niedrigste, unbefriedigte Beduerfnis motiviert."},
                {text: "Alle Beduerfnisse sind gleichzeitig aktiv", correct: false, feedback: "FALSCH: Nach Maslow werden Beduerfnisse HIERARCHISCH aktiviert, nicht gleichzeitig."}
            ]},
            {q: "Welche Stufen hat Maslows Beduerfnispyramide (von unten nach oben)?", topic: "Maslow", answers: [
                {text: "Grundbeduerfnisse (physiologisch)", correct: true, feedback: "Richtig! Die unterste Stufe sind Grundbeduerfnisse wie Nahrung, Schlaf, etc."},
                {text: "Sicherheitsbeduerfnisse", correct: true, feedback: "Richtig! Die zweite Stufe sind Sicherheitsbeduerfnisse."},
                {text: "Soziale Beduerfnisse", correct: true, feedback: "Richtig! Die dritte Stufe sind soziale Beduerfnisse (Zugehoerigkeit)."},
                {text: "Gewinnmaximierung", correct: false, feedback: "FALSCH: Gewinnmaximierung ist KEIN Beduerfnis in Maslows Pyramide."}
            ]},
            {q: "Welche weiteren Stufen hat Maslows Pyramide?", topic: "Maslow", answers: [
                {text: "Wertschaetzung (Anerkennung)", correct: true, feedback: "Richtig! Die vierte Stufe ist das Beduerfnis nach Wertschaetzung und Anerkennung."},
                {text: "Selbstverwirklichung", correct: true, feedback: "Richtig! Die Spitze der Pyramide ist Selbstverwirklichung."},
                {text: "Diese Beduerfnisse bauen aufeinander auf", correct: true, feedback: "Richtig! Die Stufen bauen hierarchisch aufeinander auf."},
                {text: "Materielle Beduerfnisse stehen an der Spitze", correct: false, feedback: "FALSCH: Selbstverwirklichung steht an der Spitze, nicht materielle Beduerfnisse."}
            ]},
            {q: "Was ist intrinsische Motivation?", topic: "Motivation", answers: [
                {text: "Motivation aus der Taetigkeit selbst heraus", correct: true, feedback: "Richtig! Intrinsisch motiviert ist eine Handlung, die selbst als zweckmaessig erkannt wird."},
                {text: "Die Handlung wird gewollt, weil sie selbst als sinnvoll erkannt wird", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen wird intrinsisch motivierte Handlung deshalb gewollt, weil sie selbst sinnvoll ist."},
                {text: "Beispiel: Freude an der Arbeit selbst", correct: true, feedback: "Richtig! Wenn jemand arbeitet, weil ihm die Arbeit Freude macht, ist das intrinsische Motivation."},
                {text: "Motivation durch externe Belohnung", correct: false, feedback: "FALSCH: Das ist EXTRINSISCHE Motivation, nicht intrinsische."}
            ]},
            {q: "Was ist extrinsische Motivation?", topic: "Motivation", answers: [
                {text: "Das Motiv zu einer Handlung ist aeusserlich", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist extrinsische Motivation aeusserlich begruendet."},
                {text: "Die Handlung erfolgt um eines aeusseren Zweckes willen", correct: true, feedback: "Richtig! Die Handlung wird ausgefuehrt fuer einen Zweck, der mit der Handlung selbst nichts zu tun hat."},
                {text: "Beispiel: Arbeiten fuer Gehalt oder Belohnung", correct: true, feedback: "Richtig! Wenn jemand nur wegen des Geldes arbeitet, ist das extrinsische Motivation."},
                {text: "Extrinsische Motivation ist langfristig wirksamer", correct: false, feedback: "FALSCH: Intrinsische Motivation gilt oft als nachhaltiger und wirksamer."}
            ]},
            {q: "Welche Bedeutung hat Maslows Theorie fuer das QM?", topic: "Motivation", answers: [
                {text: "Mitarbeiter muessen auf der richtigen Beduerfnisstufe motiviert werden", correct: true, feedback: "Richtig! Es macht keinen Sinn, auf einer Stufe zu motivieren, die aktuell nicht relevant ist."},
                {text: "Vorherige Beduerfnisse muessen befriedigt sein", correct: true, feedback: "Richtig! Die TUeV-Unterlagen betonen: Vorherige Beduerfnisse muessen erfuellt sein, bevor hoehere relevant werden."},
                {text: "Qualitaetsziele muessen fuer Mitarbeiter attraktiv sein", correct: true, feedback: "Richtig! Die Frage ist, ob angestrebte Kundenorientierung fuer Mitarbeiter tatsaechlich attraktiv ist."},
                {text: "Alle Mitarbeiter haben dieselben Beduerfnisse", correct: false, feedback: "FALSCH: Mitarbeiter befinden sich auf UNTERSCHIEDLICHEN Beduerfnisstufen."}
            ]},
            {q: "Fuer die Qualitaetsorientierung der Mitarbeiter ist wichtig, dass ...", topic: "Motivation", answers: [
                {text: "sie sich die Ziele des QMS zu eigen machen", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen: Gelingt es, dass Mitarbeiter die QMS-Ziele als ihre eigenen sehen?"},
                {text: "Kundenorientierung fuer sie attraktiv ist", correct: true, feedback: "Richtig! Die angestrebte Kundenorientierung muss fuer Mitarbeiter attraktiv sein."},
                {text: "Grundbeduerfnisse befriedigt sind", correct: true, feedback: "Richtig! Ohne befriedigte Grundbeduerfnisse fehlt die Basis fuer hoeheres Engagement."},
                {text: "nur extrinsische Anreize verwendet werden", correct: false, feedback: "FALSCH: Intrinsische Motivation ist oft nachhaltiger und sollte gefoeerdert werden."}
            ]},
            {q: "Der QM-Grundsatz 'Engagement von Personen' bedeutet ...", topic: "Motivation", answers: [
                {text: "Kompetente, befaehigte und engagierte Personen sind notwendig", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen braucht eine Organisation kompetente, befaehigte und engagierte Personen."},
                {text: "Sämtliche Personen auf allen Ebenen einbeziehen", correct: true, feedback: "Richtig! Es ist wichtig, alle Personen auf allen Ebenen einzubeziehen."},
                {text: "Anerkennung und Befaehigung von Faehigkeiten", correct: true, feedback: "Richtig! Anerkennung, Befaehigung und Foerderung erleichtern die Einbeziehung zum Erreichen der Qualitaetsziele."},
                {text: "Nur Fuehrungskraefte muessen engagiert sein", correct: false, feedback: "FALSCH: ALLE Personen auf allen Ebenen sollen einbezogen werden, nicht nur Fuehrungskraefte."}
            ]}
        ]
    },
    "audit": {
        title: "Auditierung - Auditarten, ISO 19011 & Zertifizierung",
        questions: [
            {q: "Welche Auditarten werden unterschieden nach dem Auditor?", topic: "Auditarten", answers: [
                {text: "1st party audit (internes Audit)", correct: true, feedback: "Richtig! Beim internen Audit auditiert die Organisation sich selbst."},
                {text: "2nd party audit (Lieferantenaudit)", correct: true, feedback: "Richtig! Beim Lieferantenaudit prueft ein Kunde seinen Lieferanten."},
                {text: "3rd party audit (Zertifizierungsaudit)", correct: true, feedback: "Richtig! Das Zertifizierungsaudit wird von einer unabhaengigen Stelle durchgefuehrt."},
                {text: "4th party audit (Behoerdenaudit)", correct: false, feedback: "FALSCH: Es gibt keine 4th party audits in der gaengigen Terminologie."}
            ]},
            {q: "Welche Auditarten werden nach dem Gegenstand unterschieden?", topic: "Auditarten", answers: [
                {text: "Systemaudit", correct: true, feedback: "Richtig! Das Systemaudit bewertet das gesamte Managementsystem."},
                {text: "Prozessaudit", correct: true, feedback: "Richtig! Das Prozessaudit prueft einzelne Prozesse und Ablaeufe."},
                {text: "Produktaudit", correct: true, feedback: "Richtig! Das Produktaudit prueft, ob Produktmerkmale erreicht werden."},
                {text: "Mitarbeiteraudit", correct: false, feedback: "FALSCH: 'Mitarbeiteraudit' ist keine gaengige Auditart nach ISO-Terminologie."}
            ]},
            {q: "Was ist ein Systemaudit?", topic: "Systemaudit", answers: [
                {text: "Bewertet das gesamte Qualitaetsmanagementsystem", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen bewertet das Systemaudit das gesamte QMS."},
                {text: "Prueft Aufbau- und Ablauforganisation", correct: true, feedback: "Richtig! Das Systemaudit prueft die Aufbau- und Ablauforganisation des Unternehmens."},
                {text: "Ist die anspruchsvollste Form eines Audits", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist das Systemaudit die anspruchsvollste Auditform."},
                {text: "Beschraenkt sich auf die Produktqualitaet", correct: false, feedback: "FALSCH: Das Systemaudit geht UEBER die reine Produktqualitaet hinaus."}
            ]},
            {q: "Was ist ein Prozessaudit?", topic: "Prozessaudit", answers: [
                {text: "Beurteilt Arbeitsbereiche, Taetigkeiten und Ablaeufe", correct: true, feedback: "Richtig! Mit dem Prozessaudit werden Arbeitsbereiche und Ablaeufe begutachtet."},
                {text: "Prueft, ob festgelegte Taetigkeiten zweckmaessig sind", correct: true, feedback: "Richtig! Ein Prozessaudit beurteilt, ob Taetigkeiten zweckmaessig sind und eingehalten werden."},
                {text: "Grundlage sind Prozessbeschreibungen und Arbeitsanweisungen", correct: true, feedback: "Richtig! Die Vorgaben sind in Prozessbeschreibungen und Arbeitsanweisungen geregelt."},
                {text: "Betrifft nur Fertigungsprozesse", correct: false, feedback: "FALSCH: Prozessaudits betreffen ALLE Prozesse, nicht nur Fertigungsprozesse."}
            ]},
            {q: "Was ist ein Produktaudit?", topic: "Produktaudit", answers: [
                {text: "Prueft, ob spezifizierte Produktmerkmale erreicht werden", correct: true, feedback: "Richtig! Das Produktaudit prueft, ob festgelegte Produktmerkmale erreicht werden."},
                {text: "Ist eine nachtraeglich feststellende Ueberpruefung", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist es eine nachtraeglich feststellende Pruefung."},
                {text: "Erfolgt aus Sicht des Auftraggebers, Kunden oder Anwenders", correct: true, feedback: "Richtig! Die Pruefung erfolgt aus der Sicht des Kunden oder Anwenders."},
                {text: "Ersetzt das Systemaudit", correct: false, feedback: "FALSCH: Produktaudit und Systemaudit sind VERSCHIEDENE Auditformen, die sich ergaenzen."}
            ]},
            {q: "Was beschreibt die ISO 19011?", topic: "ISO 19011", answers: [
                {text: "Einen Leitfaden zur Auditierung von Managementsystemen", correct: true, feedback: "Richtig! ISO 19011 ist der Leitfaden zur Auditierung von Managementsystemen."},
                {text: "Grundsaetzliche Auditprinzipien", correct: true, feedback: "Richtig! In der ISO 19011 sind grundsaetzliche Auditprinzipien festgelegt."},
                {text: "Empfehlungen zur Festlegung und Steuerung eines Auditprogramms", correct: true, feedback: "Richtig! Die Norm enthaelt Empfehlungen fuer Auditprogramme."},
                {text: "Verbindliche Anforderungen fuer die Zertifizierung", correct: false, feedback: "FALSCH: ISO 19011 ist ein LEITFADEN, keine verbindliche Anforderungsnorm."}
            ]},
            {q: "Das Auditprogramm nach ISO 19011 umfasst ...", topic: "ISO 19011", answers: [
                {text: "Einen oder mehrere Audits fuer einen spezifischen Zeitraum", correct: true, feedback: "Richtig! Ein Auditprogramm umfasst geplante Audits fuer einen bestimmten Zeitraum."},
                {text: "Anforderungen an die Kompetenz von Auditoren", correct: true, feedback: "Richtig! ISO 19011 beschreibt auch Anforderungen an die Auditorenkompetenz."},
                {text: "Anleitungen zur Durchfuehrung von Audits", correct: true, feedback: "Richtig! Die Norm enthaelt Anleitungen zur Auditdurchfuehrung."},
                {text: "Nur Zertifizierungsaudits", correct: false, feedback: "FALSCH: ISO 19011 deckt 1st und 2nd party audits ab, besonders interne Audits."}
            ]},
            {q: "Der Auditablauf folgt dem Drei-Phasen-Konzept. Welche Phasen sind das?", topic: "Auditablauf", answers: [
                {text: "Vorbereitung", correct: true, feedback: "Richtig! Die erste Phase ist die Auditvorbereitung."},
                {text: "Durchfuehrung", correct: true, feedback: "Richtig! Die zweite Phase ist die Auditdurchfuehrung."},
                {text: "Nachbereitung", correct: true, feedback: "Richtig! Die dritte Phase ist die Auditnachbereitung."},
                {text: "Zertifizierung", correct: false, feedback: "FALSCH: Zertifizierung ist KEINE Phase des Auditablaufs, sondern ein moegliches Ergebnis."}
            ]},
            {q: "Was gehoert zur Auditvorbereitung?", topic: "Auditablauf", answers: [
                {text: "Auditplan erstellen", correct: true, feedback: "Richtig! Die Erstellung des Auditplans ist Teil der Vorbereitung."},
                {text: "Checklisten und Fragenkataloge vorbereiten", correct: true, feedback: "Richtig! Auditfragen und Checklisten werden vorbereitet."},
                {text: "Auditteam festlegen", correct: true, feedback: "Richtig! Das Auditteam muss zusammengestellt werden."},
                {text: "Korrekturmassnahmen umsetzen", correct: false, feedback: "FALSCH: Korrekturmassnahmen gehoeren zur NACHBEREITUNG, nicht zur Vorbereitung."}
            ]},
            {q: "Was gehoert zur Auditnachbereitung?", topic: "Auditablauf", answers: [
                {text: "Auditbericht erstellen", correct: true, feedback: "Richtig! Nach dem Audit wird ein Auditbericht erstellt."},
                {text: "Feststellungen dokumentieren", correct: true, feedback: "Richtig! Alle Feststellungen werden dokumentiert."},
                {text: "Korrekturmassnahmen verfolgen", correct: true, feedback: "Richtig! Korrekturmassnahmen werden verfolgt und deren Wirksamkeit geprueft."},
                {text: "Auditfragen formulieren", correct: false, feedback: "FALSCH: Auditfragen werden in der VORBEREITUNG formuliert, nicht in der Nachbereitung."}
            ]},
            {q: "Welche Phasen hat ein Zertifizierungsverfahren?", topic: "Zertifizierungsphasen", answers: [
                {text: "Audit Stufe 1 (Dokumentenpruefung)", correct: true, feedback: "Richtig! In Stufe 1 wird das Dokumentierte geprueft (Bereitschaftsbewertung)."},
                {text: "Audit Stufe 2 (Vor-Ort-Audit)", correct: true, feedback: "Richtig! In Stufe 2 erfolgt die Vor-Ort-Ueberpruefung der Umsetzung."},
                {text: "Ueberwachungsaudits", correct: true, feedback: "Richtig! Nach der Zertifizierung erfolgen regelmaessige Ueberwachungsaudits."},
                {text: "Vorabgenehmigung durch Behoerden", correct: false, feedback: "FALSCH: Eine Behoerdengenehmigung ist NICHT Teil des Zertifizierungsverfahrens."}
            ]},
            {q: "Was wird im Audit Stufe 1 geprueft?", topic: "Zertifizierungsphasen", answers: [
                {text: "Die QMS-Dokumentation", correct: true, feedback: "Richtig! Stufe 1 prueft die Dokumentation des QMS."},
                {text: "Die Bereitschaft fuer Stufe 2", correct: true, feedback: "Richtig! Es wird geprueft, ob das Unternehmen bereit fuer das Hauptaudit ist."},
                {text: "Ob die Grundvoraussetzungen erfuellt sind", correct: true, feedback: "Richtig! Es wird geprueft, ob die Grundvoraussetzungen fuer Stufe 2 vorliegen."},
                {text: "Nur die Produktqualitaet", correct: false, feedback: "FALSCH: Stufe 1 prueft die DOKUMENTATION, nicht primaer die Produktqualitaet."}
            ]},
            {q: "Wie lange ist ein ISO 9001 Zertifikat gueltig?", topic: "Zertifizierungsphasen", answers: [
                {text: "3 Jahre", correct: true, feedback: "Richtig! Das Zertifikat ist 3 Jahre gueltig."},
                {text: "Jaehrliche Ueberwachungsaudits sind erforderlich", correct: true, feedback: "Richtig! Ueberwachungsaudits finden in der Regel jaehrlich statt."},
                {text: "Nach 3 Jahren erfolgt ein Rezertifizierungsaudit", correct: true, feedback: "Richtig! Zur Verlaengerung ist ein Rezertifizierungsaudit erforderlich."},
                {text: "Unbegrenzt gueltig", correct: false, feedback: "FALSCH: Das Zertifikat ist auf 3 Jahre BEGRENZT und muss erneuert werden."}
            ]},
            {q: "Interne Audits nach ISO 9001 ...", topic: "Internes Audit", answers: [
                {text: "muessen in geplanten Abstaenden durchgefuehrt werden", correct: true, feedback: "Richtig! Interne Audits sind in geplanten Abstaenden durchzufuehren."},
                {text: "pruefen, ob das QMS normkonform ist", correct: true, feedback: "Richtig! Es wird geprueft, ob das QMS die Normanforderungen erfuellt."},
                {text: "pruefen, ob das QMS wirksam eingefuehrt ist", correct: true, feedback: "Richtig! Auch die wirksame Einfuehrung und Aufrechterhaltung wird geprueft."},
                {text: "sind optional, wenn ein Zertifikat vorliegt", correct: false, feedback: "FALSCH: Interne Audits sind NICHT optional - sie sind eine Normforderung (9.2)."}
            ]},
            {q: "Was muss bei internen Audits nach ISO 9001 geplant werden?", topic: "Internes Audit", answers: [
                {text: "Audithaeufigkeit", correct: true, feedback: "Richtig! Die Haeufigkeit der Audits muss geplant werden."},
                {text: "Auditmethoden", correct: true, feedback: "Richtig! Die Methoden fuer die Audits muessen festgelegt werden."},
                {text: "Verantwortlichkeiten und Berichterstattung", correct: true, feedback: "Richtig! Verantwortlichkeiten muessen zugewiesen werden."},
                {text: "Ein externes Auditteam", correct: false, feedback: "FALSCH: Fuer INTERNE Audits sind keine externen Auditoren erforderlich."}
            ]},
            {q: "Auditoren muessen ...", topic: "Auditorkompetenz", answers: [
                {text: "objektiv und unparteilich sein", correct: true, feedback: "Richtig! Objektivitaet und Unparteilichkeit sind wichtige Auditoranforderungen."},
                {text: "unabhaengig vom auditierten Bereich sein", correct: true, feedback: "Richtig! Auditoren duerfen nicht ihre eigene Arbeit auditieren."},
                {text: "ueber ausreichende Kompetenz verfuegen", correct: true, feedback: "Richtig! Auditoren muessen fuer ihre Aufgabe kompetent sein."},
                {text: "externe Berater sein", correct: false, feedback: "FALSCH: Auditoren koennen auch INTERNE Mitarbeiter sein, solange sie unabhaengig sind."}
            ]}
        ]
    },
    "kommunikation": {
        title: "Kommunikation - Vier-Ohren-Modell, Eisberg & Fragetechniken",
        questions: [
            {q: "Das Eisbergmodell der Kommunikation beschreibt ...", topic: "Eisbergmodell", answers: [
                {text: "Sachebene und Beziehungsebene", correct: true, feedback: "Richtig! Das Eisbergmodell unterscheidet Sach- und Beziehungsebene."},
                {text: "Der groesste Teil der Kommunikation ist unsichtbar", correct: true, feedback: "Richtig! Wie beim Eisberg liegt der groesste Teil unter der Oberflaeche."},
                {text: "Emotionale Faktoren beeinflussen die Kommunikation", correct: true, feedback: "Richtig! Unter der Oberflaeche liegen Emotionen, Einstellungen, Wuensche."},
                {text: "Nur die Sachebene ist relevant", correct: false, feedback: "FALSCH: Die Beziehungsebene ist mindestens ebenso wichtig wie die Sachebene."}
            ]},
            {q: "Was gehoert zur Sachebene der Kommunikation?", topic: "Eisbergmodell", answers: [
                {text: "Inhalte und Fakten", correct: true, feedback: "Richtig! Auf der Sachebene werden Inhalte und Fakten ausgetauscht."},
                {text: "Argumente und Zahlen", correct: true, feedback: "Richtig! Zahlen, Daten, Fakten gehoeren zur Sachebene."},
                {text: "Das Thema des Gespraechs", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen bestimmt die Thematik die Sachebene."},
                {text: "Sympathie und Antipathie", correct: false, feedback: "FALSCH: Sympathie/Antipathie gehoeren zur BEZIEHUNGSEBENE, nicht zur Sachebene."}
            ]},
            {q: "Was gehoert zur Beziehungsebene der Kommunikation?", topic: "Eisbergmodell", answers: [
                {text: "Einstellungen und Erwartungen", correct: true, feedback: "Richtig! Persoenliche Einstellungen und Erwartungen gehoeren zur Beziehungsebene."},
                {text: "Sympathie und Antipathie", correct: true, feedback: "Richtig! Sympathie oder Antipathie beeinflussen die Beziehungsebene."},
                {text: "Aengste und Wuensche", correct: true, feedback: "Richtig! Auch Aengste und Wuensche liegen auf der Beziehungsebene."},
                {text: "Produktspezifikationen", correct: false, feedback: "FALSCH: Produktspezifikationen gehoeren zur SACHEBENE, nicht zur Beziehungsebene."}
            ]},
            {q: "Das Vier-Ohren-Modell (Schulz von Thun) beschreibt ...", topic: "Vier-Ohren-Modell", answers: [
                {text: "Jede Nachricht hat vier Komponenten", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen besteht jede Nachricht aus vier Komponenten."},
                {text: "Der Empfaenger hat vier Empfangsantennen", correct: true, feedback: "Richtig! Der Empfaenger hat gewissermassen vier Ohren fuer die vier Seiten."},
                {text: "Sachinhalt, Selbstoffenbarung, Beziehung, Appell", correct: true, feedback: "Richtig! Dies sind die vier Seiten einer Nachricht."},
                {text: "Kommunikation ist immer eindeutig", correct: false, feedback: "FALSCH: Das Modell zeigt gerade, dass Kommunikation MEHRDEUTIG sein kann."}
            ]},
            {q: "Welche Seiten hat eine Nachricht nach dem Vier-Ohren-Modell?", topic: "Vier-Ohren-Modell", answers: [
                {text: "Sachinhalt (Worueber ich informiere)", correct: true, feedback: "Richtig! Der Sachinhalt gibt Informationen ueber den Gespraechsinhalt."},
                {text: "Selbstoffenbarung (Was ich ueber mich preisgebe)", correct: true, feedback: "Richtig! Jede Aussage sagt auch etwas ueber den Sender aus."},
                {text: "Beziehung (Wie ich zu dir stehe)", correct: true, feedback: "Richtig! Die Beziehungsseite zeigt, wie der Sender zum Empfaenger steht."},
                {text: "Appell (Was ich von dir moechte)", correct: true, feedback: "Richtig! ALLE vier sind korrekt! Der Appell zeigt, was der Sender vom Empfaenger will."}
            ]},
            {q: "Was ist verbale Kommunikation?", topic: "Kommunikationsarten", answers: [
                {text: "Sprachliche Kommunikation", correct: true, feedback: "Richtig! Verbal bedeutet sprachlich - gesprochene oder geschriebene Worte."},
                {text: "Kommunikation durch Worte und Symbole", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen sind Symbole wie Worte Zeichen verbaler Kommunikation."},
                {text: "Kann muendlich oder schriftlich erfolgen", correct: true, feedback: "Richtig! Verbale Kommunikation umfasst Sprechen und Schreiben."},
                {text: "Koerperhaltung und Gestik", correct: false, feedback: "FALSCH: Das ist NONVERBALE Kommunikation, nicht verbale."}
            ]},
            {q: "Was ist nonverbale Kommunikation?", topic: "Kommunikationsarten", answers: [
                {text: "Nichtsprachliche Kommunikation", correct: true, feedback: "Richtig! Nonverbal bedeutet nichtsprachlich."},
                {text: "Gestik und Mimik", correct: true, feedback: "Richtig! Gestik und Mimik sind wichtige nonverbale Signale."},
                {text: "Koerpersprache und Haltung", correct: true, feedback: "Richtig! Auch Koerperhaltung kommuniziert nonverbal."},
                {text: "E-Mails und Briefe", correct: false, feedback: "FALSCH: E-Mails und Briefe sind SCHRIFTLICHE, also verbale Kommunikation."}
            ]},
            {q: "Was ist aktives Zuhoeren?", topic: "Aktives Zuhoeren", answers: [
                {text: "Bereitschaft, den Gespraechspartner zu verstehen", correct: true, feedback: "Richtig! Aktives Zuhoeren zeigt die Bereitschaft, den Partner zu verstehen."},
                {text: "Bewusst erkennen, was mitgeteilt werden soll", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen geht es darum, bewusst zu erkennen, was mitgeteilt wird."},
                {text: "Hilft Missverstaendnisse zu vermeiden", correct: true, feedback: "Richtig! Aktives Zuhoeren hilft, Missverstaendnisse zu vermeiden und Konflikte zu klaeren."},
                {text: "Bedeutet, dem anderen ins Wort zu fallen", correct: false, feedback: "FALSCH: Ins-Wort-Fallen ist das GEGENTEIL von aktivem Zuhoeren."}
            ]},
            {q: "Elemente des aktiven Zuhoerens sind ...", topic: "Aktives Zuhoeren", answers: [
                {text: "Kurze Zusammenfassungen (Paraphrasieren)", correct: true, feedback: "Richtig! Paraphrasieren zeigt, dass man den Inhalt verstanden hat."},
                {text: "Zuhoerbestaetigung ('ja', 'ok')", correct: true, feedback: "Richtig! Verbale Signale wie 'ja' oder 'ok' zeigen Aufmerksamkeit."},
                {text: "Blickkontakt und Kopfnicken", correct: true, feedback: "Richtig! Nonverbale Signale wie Nicken bestaetigen das Zuhoeren."},
                {text: "Sofort die eigene Meinung sagen", correct: false, feedback: "FALSCH: Aktives Zuhoeren bedeutet ERST zuhoeren, dann antworten."}
            ]},
            {q: "Welche Fragearten gibt es?", topic: "Fragetechniken", answers: [
                {text: "Offene Fragen (W-Fragen)", correct: true, feedback: "Richtig! Offene Fragen beginnen mit Wer, Was, Wann, Wo, Wie, Warum."},
                {text: "Geschlossene Fragen (Ja/Nein)", correct: true, feedback: "Richtig! Geschlossene Fragen koennen mit Ja oder Nein beantwortet werden."},
                {text: "Beide Fragearten haben ihre Berechtigung", correct: true, feedback: "Richtig! Je nach Situation sind offene oder geschlossene Fragen geeigneter."},
                {text: "Nur offene Fragen sind erlaubt", correct: false, feedback: "FALSCH: Beide Fragearten sind ERLAUBT und nuetzlich."}
            ]},
            {q: "Offene Fragen ...", topic: "Fragetechniken", answers: [
                {text: "beginnen mit W-Woertern (Wer, Was, Wann, Wo, Wie, Warum)", correct: true, feedback: "Richtig! W-Fragen sind typische offene Fragen."},
                {text: "erfordern ausfuehrlichere Antworten", correct: true, feedback: "Richtig! Offene Fragen laden zu laengeren Antworten ein."},
                {text: "sind nuetzlich um Informationen zu sammeln", correct: true, feedback: "Richtig! In Audits helfen offene Fragen, Informationen zu gewinnen."},
                {text: "koennen mit Ja oder Nein beantwortet werden", correct: false, feedback: "FALSCH: Das sind GESCHLOSSENE Fragen, nicht offene."}
            ]},
            {q: "Fuer Auditoren ist wichtig ...", topic: "Kommunikation Audit", answers: [
                {text: "Verbale und nonverbale Kommunikation beachten", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen muessen Auditoren beide Kommunikationsformen beachten."},
                {text: "Die eigene Gestik und Mimik kontrollieren", correct: true, feedback: "Richtig! Die eigene Koerpersprache beeinflusst den Auditerfolg."},
                {text: "Aktives Zuhoeren praktizieren", correct: true, feedback: "Richtig! Aktives Zuhoeren ist eine wichtige Auditorenkompetenz."},
                {text: "Auditierte unter Druck setzen", correct: false, feedback: "FALSCH: Auditoren sollten eine POSITIVE Atmosphaere schaffen, nicht Druck ausueben."}
            ]}
        ]
    },
    "methoden": {
        title: "QM-Methoden - FMEA & 8D-Report",
        questions: [
            {q: "Wofuer steht FMEA?", topic: "FMEA", answers: [
                {text: "Failure Mode and Effect Analysis", correct: true, feedback: "Richtig! FMEA steht fuer Failure Mode and Effect Analysis."},
                {text: "Fehlermoeglichkeits- und Einflussanalyse", correct: true, feedback: "Richtig! Das ist die deutsche Bezeichnung fuer FMEA."},
                {text: "Eine Methode zur Risikoanalyse", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist FMEA ein Hilfsmittel, um Risiken aufzudecken."},
                {text: "Eine Methode zur Kostenkalkulation", correct: false, feedback: "FALSCH: FMEA dient der RISIKOANALYSE, nicht der Kostenkalkulation."}
            ]},
            {q: "Was ist das Hauptziel der FMEA?", topic: "FMEA", answers: [
                {text: "Vorausschauende Fehlervermeidung", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist das Hauptziel der FMEA die vorausschauende Fehlervermeidung."},
                {text: "Systematisches vorbeugendes Planen", correct: true, feedback: "Richtig! Die Vorgehensweise wird als systematisches vorbeugendes Planen bezeichnet."},
                {text: "Potenzielle Fehler und deren Ursachen ermitteln", correct: true, feedback: "Richtig! Potenzielle Fehler und deren Ursachen werden systematisch ermittelt."},
                {text: "Nachtraegliche Fehlerbehebung", correct: false, feedback: "FALSCH: FMEA ist VORBEUGEND, nicht nachtraeglich. Fehlervermeidung statt Behebung."}
            ]},
            {q: "Die FMEA wurde urspruenglich entwickelt von ...", topic: "FMEA", answers: [
                {text: "NASA (US-Raumfahrtbehoerde)", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen wurde die FMEA urspruenglich fuer die NASA entwickelt."},
                {text: "Die Automobilindustrie griff sie spaeter auf", correct: true, feedback: "Richtig! Die Automobilindustrie uebernahm die Methode und fordert sie von Lieferanten."},
                {text: "Wird heute in vielen Branchen eingesetzt", correct: true, feedback: "Richtig! FMEA ist heute branchenuebgreifend verbreitet."},
                {text: "ISO-Organisation", correct: false, feedback: "FALSCH: Die FMEA wurde von der NASA entwickelt, nicht von ISO."}
            ]},
            {q: "Welche FMEA-Arten gibt es?", topic: "FMEA", answers: [
                {text: "Design-FMEA (Produkt-FMEA)", correct: true, feedback: "Richtig! Die Design-FMEA analysiert Produktrisiken."},
                {text: "Prozess-FMEA", correct: true, feedback: "Richtig! Die Prozess-FMEA analysiert Fertigungsprozessrisiken."},
                {text: "Beide analysieren potenzielle Schwachstellen", correct: true, feedback: "Richtig! Beide FMEA-Arten dienen der Schwachstellenanalyse."},
                {text: "Marketing-FMEA", correct: false, feedback: "FALSCH: Es gibt keine 'Marketing-FMEA' als Standardmethode."}
            ]},
            {q: "Die Risikoprioritaetszahl (RPZ) berechnet sich aus ...", topic: "FMEA", answers: [
                {text: "Bedeutung (B)", correct: true, feedback: "Richtig! B steht fuer die Bedeutung/Schwere der Fehlerfolge."},
                {text: "Auftreten (A)", correct: true, feedback: "Richtig! A steht fuer die Auftretenswahrscheinlichkeit."},
                {text: "Entdeckung (E)", correct: true, feedback: "Richtig! E steht fuer die Entdeckungswahrscheinlichkeit."},
                {text: "Kosten (K)", correct: false, feedback: "FALSCH: Kosten sind KEIN Faktor der RPZ. Die Formel ist RPZ = B x A x E."}
            ]},
            {q: "Die RPZ-Formel lautet ...", topic: "FMEA", answers: [
                {text: "RPZ = B x A x E", correct: true, feedback: "Richtig! RPZ = Bedeutung x Auftreten x Entdeckung."},
                {text: "Hohe RPZ zeigt hohes Risiko an", correct: true, feedback: "Richtig! Je hoeher die RPZ, desto hoeher das Risiko."},
                {text: "Massnahmen werden nach RPZ priorisiert", correct: true, feedback: "Richtig! Die RPZ hilft bei der Priorisierung von Massnahmen."},
                {text: "Maximale RPZ ist 100", correct: false, feedback: "FALSCH: Bei Skalen von 1-10 ist die maximale RPZ = 10 x 10 x 10 = 1000."}
            ]},
            {q: "Wann muessen FMEA-Massnahmen ergriffen werden? (nach TUeV)", topic: "FMEA", answers: [
                {text: "Wenn die Bedeutung (B) eines Fehlers >= 5", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen: Massnahmen wenn B >= 5."},
                {text: "Wenn die RPZ >= 100", correct: true, feedback: "Richtig! Oder wenn die RPZ >= 100 ist."},
                {text: "Nach Massnahmen sollte die RPZ um 50% niedriger sein", correct: true, feedback: "Richtig! Die ermittelte RPZ sollte nach Massnahmen um 50% niedriger sein."},
                {text: "Nur bei Bedeutung = 10", correct: false, feedback: "FALSCH: Massnahmen sind NICHT nur bei B=10 erforderlich, sondern schon ab B >= 5."}
            ]},
            {q: "Wofuer steht 8D?", topic: "8D-Report", answers: [
                {text: "8 Disziplinen", correct: true, feedback: "Richtig! 8D beschreibt acht obligatorische Disziplinen bzw. Prozessschritte."},
                {text: "8 Prozessschritte im Rahmen der Fehlerbearbeitung", correct: true, feedback: "Richtig! Der 8D-Report umfasst acht Prozessschritte."},
                {text: "Ein Werkzeug des Beschwerdemanagements", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist der 8D-Report ein Werkzeug des Beschwerdemanagements."},
                {text: "8 Dokumente", correct: false, feedback: "FALSCH: 8D steht fuer 8 DISZIPLINEN, nicht fuer 8 Dokumente."}
            ]},
            {q: "Welche Schritte umfasst der 8D-Report?", topic: "8D-Report", answers: [
                {text: "D1: Teamarbeit - Team zusammenstellen", correct: true, feedback: "Richtig! Im ersten Schritt wird ein Team fuer die Problemloesung zusammengestellt."},
                {text: "D2: Problembeschreibung - Problem definieren", correct: true, feedback: "Richtig! Das Problem muss so genau wie moeglich beschrieben werden."},
                {text: "D3: Schadensbegrenzung - Sofortmassnahmen", correct: true, feedback: "Richtig! Sofortmassnahmen zur Schadensbegrenzung werden eingeleitet."},
                {text: "D1: Kostenanalyse", correct: false, feedback: "FALSCH: D1 ist TEAMARBEIT, nicht Kostenanalyse."}
            ]},
            {q: "Welche weiteren 8D-Schritte gibt es?", topic: "8D-Report", answers: [
                {text: "D4: Ursachenerkennung - Grundursachen identifizieren", correct: true, feedback: "Richtig! Die wahrscheinlichsten Grundursachen werden identifiziert und verifiziert."},
                {text: "D5: Massnahmen waehlen - Loesungen auswaehlen", correct: true, feedback: "Richtig! Das Team ermittelt Massnahmen zur Ursachenbeseitigung."},
                {text: "D6: Massnahmen umsetzen - Implementierung", correct: true, feedback: "Richtig! Die gewaehlten Massnahmen werden umgesetzt."},
                {text: "D4: Zertifizierung", correct: false, feedback: "FALSCH: D4 ist URSACHENERKENNUNG, nicht Zertifizierung."}
            ]},
            {q: "Die letzten 8D-Schritte sind ...", topic: "8D-Report", answers: [
                {text: "D7: Wiederauftreten verhindern - Vorbeugung", correct: true, feedback: "Richtig! Vorbeugungsmassnahmen verhindern zukuenftiges Wiederauftreten."},
                {text: "D8: Abschluss - Erfahrungen verdichten", correct: true, feedback: "Richtig! In der Abschlussphase werden alle Erfahrungen bewertet und verdichtet."},
                {text: "Ziel ist die Ueberwindung der Ursachen einer Nichtkonformitaet", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen ist das Ziel die Ueberwindung der Ursachen."},
                {text: "D7: Feierliche Abnahme", correct: false, feedback: "FALSCH: D7 ist WIEDERAUFTRETEN VERHINDERN, keine feierliche Abnahme."}
            ]},
            {q: "Der 8D-Report wird typischerweise eingesetzt bei ...", topic: "8D-Report", answers: [
                {text: "Kundenreklamationen", correct: true, feedback: "Richtig! Der 8D-Report wird haeufig bei Reklamationen eingesetzt."},
                {text: "Lieferant-Kunden-Kommunikation", correct: true, feedback: "Richtig! Der Report wird zwischen Lieferant und Kunde ausgetauscht."},
                {text: "Systematischer Fehlerbearbeitung", correct: true, feedback: "Richtig! Er dient der systematischen Fehlerbearbeitung."},
                {text: "Nur bei internen Problemen", correct: false, feedback: "FALSCH: Der 8D-Report wird gerade im EXTERNEN Beschwerdemanagement eingesetzt."}
            ]},
            {q: "Bei der Ursachenanalyse (D4) sollte ...", topic: "8D-Report", answers: [
                {text: "Die technische Ursache ermittelt werden", correct: true, feedback: "Richtig! Die technischen Grundursachen werden identifiziert."},
                {text: "Auch die organisatorische Ebene betrachtet werden", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen sollte auch die organisatorische Ebene betrachtet werden."},
                {text: "Ursachen durch Tests und Vergleiche verifiziert werden", correct: true, feedback: "Richtig! Die Ursachen werden durch Pruefungen, Tests und Vergleiche verifiziert."},
                {text: "Nur offensichtliche Fehler betrachtet werden", correct: false, feedback: "FALSCH: Es sollen die GRUNDURSACHEN ermittelt werden, nicht nur Symptome."}
            ]},
            {q: "Bei D5 (Massnahmen waehlen) gilt ...", topic: "8D-Report", answers: [
                {text: "Massnahmen sollen das Problem effektiv loesen", correct: true, feedback: "Richtig! Die Massnahmen sollten das Problem effektiv und effizient loesen."},
                {text: "Keine unerwuenschten Nebenwirkungen", correct: true, feedback: "Richtig! Es sollen keine unerwuenschten Nebenwirkungen entstehen."},
                {text: "Fehlervermeidung vor Fehlerentdeckung", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen sollte Fehlervermeidung, nicht Fehlerentdeckung im Vordergrund stehen."},
                {text: "Immer die teuerste Loesung waehlen", correct: false, feedback: "FALSCH: Nicht die teuerste, sondern die WIRKSAMSTE Loesung waehlen."}
            ]}
        ]
    },
    "betrieb_erweitert": {
        title: "Kapitel 8 Erweiterung - Erhaltung, Taetigkeiten nach Lieferung & Lieferkette",
        questions: [
            {q: "Was umfasst die Erhaltung (8.5.4) von Produkten?", topic: "Erhaltung", answers: [
                {text: "Handhabung", correct: true, feedback: "Richtig! Die richtige Handhabung der Produkte muss sichergestellt werden."},
                {text: "Verpackung", correct: true, feedback: "Richtig! Produkte muessen so verpackt werden, dass die Qualitaet geschuetzt wird."},
                {text: "Lagerung", correct: true, feedback: "Richtig! Die Lagerung muss die Qualitaet bis zur Verwendung erhalten."},
                {text: "Verkaufspreis", correct: false, feedback: "FALSCH: Der Verkaufspreis hat NICHTS mit Erhaltung im Sinne von 8.5.4 zu tun."}
            ]},
            {q: "Welche weiteren Aspekte gehoeren zur Erhaltung?", topic: "Erhaltung", answers: [
                {text: "Transport", correct: true, feedback: "Richtig! Der Transport muss die Produktqualitaet erhalten."},
                {text: "Schutz", correct: true, feedback: "Richtig! Produkte muessen vor qualitaetsmindernden Einwirkungen geschuetzt werden."},
                {text: "Reinhaltung", correct: true, feedback: "Richtig! Die Reinhaltung der Produkte muss sichergestellt werden."},
                {text: "Gewinnmarge", correct: false, feedback: "FALSCH: Gewinnmarge ist KEIN Aspekt der Erhaltung nach 8.5.4."}
            ]},
            {q: "Bei der Verpackung ist zu beachten ...", topic: "Erhaltung", answers: [
                {text: "Schutz vor Beschaedigung", correct: true, feedback: "Richtig! Die Verpackung muss das Produkt vor Beschaedigungen schuetzen."},
                {text: "Eindeutige Kennzeichnung", correct: true, feedback: "Richtig! Verpackungen muessen eindeutig gekennzeichnet sein."},
                {text: "Kundenspezifische Verpackungsvorschriften", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen kann die Verpackung durch Kunden vorgegeben werden."},
                {text: "Nur Einwegverpackungen verwenden", correct: false, feedback: "FALSCH: Die Norm schreibt NICHT vor, nur Einwegverpackungen zu verwenden."}
            ]},
            {q: "Bei der Lagerung ist zu beachten ...", topic: "Erhaltung", answers: [
                {text: "Qualitaet darf nicht beeintraechtigt werden", correct: true, feedback: "Richtig! Die Lagerung darf die Produktqualitaet nicht negativ beeinflussen."},
                {text: "Bei laengerer Lagerzeit regelmaessige Pruefung", correct: true, feedback: "Richtig! Bei laengerer Lagerzeit muss der Zustand regelmaessig geprueft werden."},
                {text: "Schutz vor Umwelteinfluessen (Feuchtigkeit, Temperatur)", correct: true, feedback: "Richtig! Produkte muessen vor schaedlichen Umwelteinfluessen geschuetzt werden."},
                {text: "Nur Kuehllagerung ist zulaessig", correct: false, feedback: "FALSCH: Die Lagerart haengt vom PRODUKT ab, nicht von einer pauschalen Vorschrift."}
            ]},
            {q: "Beim Transport ist zu beachten ...", topic: "Erhaltung", answers: [
                {text: "Sachgemaesser Versand", correct: true, feedback: "Richtig! Ein sachgemaesser Versand muss gewaehrleisten, dass die Qualitaet erhalten bleibt."},
                {text: "Logistikkette des Spediteurs ueberwachen", correct: true, feedback: "Richtig! Auch die Logistik des Spediteurs muss ueberwacht werden."},
                {text: "Gesetzliche Auflagen bei Gefahrgut beachten", correct: true, feedback: "Richtig! Bei Gefahrgut sind gesetzliche Auflagen zu beachten."},
                {text: "Transportart ist immer frei waehlbar", correct: false, feedback: "FALSCH: Je nach Produkt und Vertrag kann die Transportart VORGEGEBEN sein."}
            ]},
            {q: "Was sind Taetigkeiten nach der Lieferung (8.5.5)?", topic: "Taetigkeiten nach Lieferung", answers: [
                {text: "Taetigkeiten aufgrund von Gewaehrleistungsbestimmungen", correct: true, feedback: "Richtig! Gewaehrleistungsleistungen sind Taetigkeiten nach der Lieferung."},
                {text: "Wartung und Instandhaltung", correct: true, feedback: "Richtig! Wartungsleistungen gehoeren zu den Taetigkeiten nach der Lieferung."},
                {text: "Wiederverwertung oder Entsorgung", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen gehoert auch die Entsorgung dazu."},
                {text: "Nur Rechnungsstellung", correct: false, feedback: "FALSCH: Rechnungsstellung ist keine 'Taetigkeit nach der Lieferung' im Normsinne."}
            ]},
            {q: "Anforderungen an Taetigkeiten nach der Lieferung ...", topic: "Taetigkeiten nach Lieferung", answers: [
                {text: "muessen ermittelt werden", correct: true, feedback: "Richtig! Die Organisation muss diese Anforderungen ermitteln."},
                {text: "muessen erfuellt werden", correct: true, feedback: "Richtig! Die ermittelten Anforderungen muessen erfuellt werden."},
                {text: "koennen von Kunden oder Gesetzen stammen", correct: true, feedback: "Richtig! Anforderungen koennen von Kunden oder aus Gesetzen stammen."},
                {text: "sind immer optional", correct: false, feedback: "FALSCH: Diese Anforderungen sind NICHT optional, sondern muessen ermittelt und erfuellt werden."}
            ]},
            {q: "Das Lieferkettensorgfaltspflichtengesetz (LkSG) ...", topic: "Lieferkette", answers: [
                {text: "regelt menschenrechtliche Sorgfaltspflichten", correct: true, feedback: "Richtig! Das LkSG regelt menschenrechtliche und umweltbezogene Sorgfaltspflichten."},
                {text: "gilt fuer Unternehmen mit mehr als 1.000 Mitarbeitern", correct: true, feedback: "Richtig! Das Gesetz gilt fuer Unternehmen mit in der Regel mehr als 1.000 Arbeitnehmern."},
                {text: "erstreckt sich auf die gesamte Lieferkette", correct: true, feedback: "Richtig! Die Verantwortung erstreckt sich auf die gesamte Lieferkette."},
                {text: "betrifft nur auslaendische Unternehmen", correct: false, feedback: "FALSCH: Das Gesetz gilt auch fuer DEUTSCHE Lieferanten und Unternehmen."}
            ]},
            {q: "Das LkSG verbietet unter anderem ...", topic: "Lieferkette", answers: [
                {text: "Kinderarbeit", correct: true, feedback: "Richtig! Verbot der Beschaeftigung von Kindern unter dem Mindestalter."},
                {text: "Zwangsarbeit", correct: true, feedback: "Richtig! Verbot aller Formen der Sklaverei und Zwangsarbeit."},
                {text: "Missachtung des Arbeitsschutzes", correct: true, feedback: "Richtig! Verbot der Missachtung geltender Pflichten des Arbeitsschutzes."},
                {text: "Guenstige Preise", correct: false, feedback: "FALSCH: Guenstige Preise sind NICHT verboten - es geht um Menschenrechte und Umwelt."}
            ]},
            {q: "Die EU CSDDD-Richtlinie (Sorgfaltspflicht Nachhaltigkeit) ...", topic: "Lieferkette", answers: [
                {text: "verpflichtet zur Achtung von Menschenrechten und Umwelt", correct: true, feedback: "Richtig! Die Richtlinie fordert Respekt fuer Menschenrechte und Umwelt."},
                {text: "betrifft die gesamte Wertschoepfungskette", correct: true, feedback: "Richtig! Die Sorgfaltspflicht erstreckt sich auf die gesamte Wertschoepfungskette."},
                {text: "fuehrt einen zivilrechtlichen Haftungstatbestand ein", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen fuehrt die Richtlinie neue Haftungstatbestaende ein."},
                {text: "gilt nur fuer Kleinunternehmen", correct: false, feedback: "FALSCH: Die Richtlinie gilt primaer fuer GROSSE Unternehmen (ab 1.000 MA, 450 Mio. EUR)."}
            ]},
            {q: "Zur Ueberpruefung der Lieferanten-Compliance koennen ...", topic: "Lieferkette", answers: [
                {text: "Lieferantenselbstauskuenfte eingeholt werden", correct: true, feedback: "Richtig! Selbstauskuenfte sind ein Instrument zur Ueberpruefung."},
                {text: "Dokumente angefordert werden", correct: true, feedback: "Richtig! Relevante Dokumente koennen angefordert werden."},
                {text: "Audits vor Ort durchgefuehrt werden", correct: true, feedback: "Richtig! Laut TUeV-Unterlagen sind Audits bei Lieferanten vor Ort moeglich."},
                {text: "Nur muendliche Zusicherungen akzeptiert werden", correct: false, feedback: "FALSCH: Muendliche Zusicherungen reichen NICHT aus - Nachweise sind erforderlich."}
            ]}
        ]
    },
    "pruefungsblock_komplett": {
        title: "Kompletter Pruefungsblock - Alle Themen gemischt",
        questions: [
            {q: "Welche Aussagen sind normativ korrekt?", topic: "Gemischt", answers: [
                {text: "Die sieben QM-Grundsaetze sind in ISO 9000 definiert", correct: true, feedback: "Richtig! Die sieben Grundsaetze sind in ISO 9000 festgelegt."},
                {text: "ISO 9001 enthaelt Anforderungen an ein QMS", correct: true, feedback: "Richtig! ISO 9001 ist die Anforderungsnorm."},
                {text: "ISO 19011 ist der Leitfaden zur Auditierung", correct: true, feedback: "Richtig! ISO 19011 beschreibt die Auditierung von Managementsystemen."},
                {text: "ISO 9001 ersetzt alle anderen Normen", correct: false, feedback: "FALSCH: ISO 9001 ersetzt NICHT andere Normen wie ISO 14001 oder branchenspezifische Normen."}
            ]},
            {q: "Ein Unternehmen fuehrt ein QMS ein. Welche Aussagen sind richtig?", topic: "Gemischt", answers: [
                {text: "Der Kontext der Organisation muss bestimmt werden", correct: true, feedback: "Richtig! Kapitel 4 fordert die Bestimmung des Kontexts."},
                {text: "Die oberste Leitung traegt die Gesamtverantwortung", correct: true, feedback: "Richtig! Die Fuehrung traegt die Verantwortung fuer das QMS (Kapitel 5)."},
                {text: "Risiken und Chancen muessen beruecksichtigt werden", correct: true, feedback: "Richtig! Kapitel 6 fordert den Umgang mit Risiken und Chancen."},
                {text: "Ein QM-Handbuch ist zwingend erforderlich", correct: false, feedback: "FALSCH: Seit ISO 9001:2015 ist ein QM-Handbuch NICHT mehr gefordert."}
            ]},
            {q: "Bei einem internen Audit stellt der Auditor Abweichungen fest. Was ist korrekt?", topic: "Gemischt", answers: [
                {text: "Die Abweichungen muessen dokumentiert werden", correct: true, feedback: "Richtig! Auditfeststellungen muessen dokumentiert werden."},
                {text: "Korrekturmassnahmen muessen eingeleitet werden", correct: true, feedback: "Richtig! Bei Abweichungen sind Korrekturmassnahmen erforderlich."},
                {text: "Die Wirksamkeit der Massnahmen muss geprueft werden", correct: true, feedback: "Richtig! Die Wirksamkeit der Korrekturmassnahmen muss verifiziert werden."},
                {text: "Der Auditor muss die Massnahmen selbst umsetzen", correct: false, feedback: "FALSCH: Der Auditor DOKUMENTIERT, die Umsetzung erfolgt durch die Verantwortlichen."}
            ]},
            {q: "Im Kano-Modell gilt: Welche Aussagen sind richtig?", topic: "Gemischt", answers: [
                {text: "Basismerkmale fuehren bei Erfuellung nicht zu Zufriedenheit", correct: true, feedback: "Richtig! Erfuellte Basismerkmale erzeugen nur Neutralitaet, keine Zufriedenheit."},
                {text: "Leistungsmerkmale werden explizit erfragt", correct: true, feedback: "Richtig! Leistungsmerkmale sind Zusatzleistungen, die Kunden explizit erfragen."},
                {text: "Begeisterungsmerkmale sind unerwartete Zusatzleistungen", correct: true, feedback: "Richtig! Begeisterungsmerkmale ueberraschen den Kunden positiv."},
                {text: "Alle drei Merkmalarten sind gleich wichtig", correct: false, feedback: "FALSCH: Die Merkmalarten haben UNTERSCHIEDLICHE Auswirkungen auf die Zufriedenheit."}
            ]},
            {q: "Ein Zertifizierungsaudit wird durchgefuehrt. Was ist korrekt?", topic: "Gemischt", answers: [
                {text: "Es findet in zwei Stufen statt", correct: true, feedback: "Richtig! Das Zertifizierungsaudit umfasst Stufe 1 und Stufe 2."},
                {text: "Das Zertifikat gilt 3 Jahre", correct: true, feedback: "Richtig! Ein ISO 9001-Zertifikat ist 3 Jahre gueltig."},
                {text: "Jaehrliche Ueberwachungsaudits sind erforderlich", correct: true, feedback: "Richtig! In der Regel finden jaehrliche Ueberwachungsaudits statt."},
                {text: "Nach der Zertifizierung sind keine Audits mehr noetig", correct: false, feedback: "FALSCH: Nach der Zertifizierung sind REGELMAESSIGE Ueberwachungsaudits erforderlich."}
            ]},
            {q: "Ein 8D-Report wird erstellt. In welcher Reihenfolge sind die ersten Schritte?", topic: "Gemischt", answers: [
                {text: "D1: Teamarbeit - Team zusammenstellen", correct: true, feedback: "Richtig! Der erste Schritt ist die Teamzusammenstellung."},
                {text: "D2: Problembeschreibung - Problem definieren", correct: true, feedback: "Richtig! Danach wird das Problem genau beschrieben."},
                {text: "D3: Schadensbegrenzung - Sofortmassnahmen", correct: true, feedback: "Richtig! Dann folgen Sofortmassnahmen zur Schadensbegrenzung."},
                {text: "D1: Zuerst die Ursachen analysieren", correct: false, feedback: "FALSCH: Ursachenanalyse (D4) kommt NACH Teambildung, Problembeschreibung und Schadensbegrenzung."}
            ]},
            {q: "Maslows Beduerfnispyramide zeigt ...", topic: "Gemischt", answers: [
                {text: "Grundbeduerfnisse bilden die Basis", correct: true, feedback: "Richtig! Physiologische Grundbeduerfnisse sind die unterste Stufe."},
                {text: "Selbstverwirklichung steht an der Spitze", correct: true, feedback: "Richtig! Selbstverwirklichung ist das hoechste Beduerfnis."},
                {text: "Niedrigere Beduerfnisse muessen erst befriedigt sein", correct: true, feedback: "Richtig! Hoehere Beduerfnisse werden erst relevant, wenn niedrigere befriedigt sind."},
                {text: "Alle Menschen haben identische Beduerfnisse", correct: false, feedback: "FALSCH: Menschen befinden sich auf UNTERSCHIEDLICHEN Stufen je nach Situation."}
            ]},
            {q: "Bei der FMEA ...", topic: "Gemischt", answers: [
                {text: "wird die RPZ aus B x A x E berechnet", correct: true, feedback: "Richtig! RPZ = Bedeutung x Auftreten x Entdeckung."},
                {text: "ist das Ziel die vorausschauende Fehlervermeidung", correct: true, feedback: "Richtig! FMEA dient der praventiven Fehlervermeidung."},
                {text: "gibt es Design-FMEA und Prozess-FMEA", correct: true, feedback: "Richtig! Dies sind die zwei Hauptarten der FMEA."},
                {text: "muessen alle Fehler mit RPZ < 100 ignoriert werden", correct: false, feedback: "FALSCH: Auch bei B >= 5 sind Massnahmen erforderlich, unabhaengig von der RPZ."}
            ]},
            {q: "Welche Aussagen zur Dokumentation sind richtig?", topic: "Gemischt", answers: [
                {text: "'Aufrechterhalten' bedeutet Vorgaben aktuell halten", correct: true, feedback: "Richtig! Dokumentierte Information aufrechterhalten = Vorgabedokumente aktuell halten."},
                {text: "'Aufbewahren' bedeutet Nachweise archivieren", correct: true, feedback: "Richtig! Dokumentierte Information aufbewahren = Nachweise/Aufzeichnungen archivieren."},
                {text: "Nicht alle Prozesse muessen dokumentiert werden", correct: true, feedback: "Richtig! Die Norm fordert Dokumentation nur 'soweit erforderlich'."},
                {text: "Ein QM-Handbuch ist seit 2015 vorgeschrieben", correct: false, feedback: "FALSCH: Das QM-Handbuch wurde 2015 aus den Anforderungen GESTRICHEN."}
            ]},
            {q: "Das Eisbergmodell der Kommunikation zeigt ...", topic: "Gemischt", answers: [
                {text: "Es gibt eine Sach- und eine Beziehungsebene", correct: true, feedback: "Richtig! Das Modell unterscheidet diese beiden Ebenen."},
                {text: "Der groessere Teil liegt unter der Oberflaeche", correct: true, feedback: "Richtig! Wie beim Eisberg ist der groesste Teil unsichtbar."},
                {text: "Emotionen beeinflussen die Kommunikation stark", correct: true, feedback: "Richtig! Unter der Oberflaeche liegen Emotionen, Aengste, Wuensche."},
                {text: "Nur die Sachebene ist fuer Audits relevant", correct: false, feedback: "FALSCH: In Audits ist auch die Beziehungsebene WICHTIG fuer den Erfolg."}
            ]},
            {q: "Ein Unternehmen hat einen Lieferantenausfall. Welcher QM-Grundsatz ist besonders relevant?", topic: "Gemischt", answers: [
                {text: "Beziehungsmanagement", correct: true, feedback: "Richtig! Beziehungsmanagement mit Lieferanten ist besonders wichtig."},
                {text: "Risikobasiertes Denken (aus Verbesserung)", correct: true, feedback: "Richtig! Risiken wie Lieferantenausfall sollten vorher erkannt werden."},
                {text: "Prozessorientierter Ansatz", correct: true, feedback: "Richtig! Die Beschaffungsprozesse muessen gelenkt werden."},
                {text: "Alle Lieferanten sofort kuendigen", correct: false, feedback: "FALSCH: Das ist KEINE angemessene QM-Massnahme."}
            ]},
            {q: "Internes Audit nach ISO 9001:2015 ...", topic: "Gemischt", answers: [
                {text: "muss in geplanten Abstaenden durchgefuehrt werden", correct: true, feedback: "Richtig! Interne Audits sind in geplanten Abstaenden durchzufuehren."},
                {text: "Auditoren muessen objektiv und unparteilich sein", correct: true, feedback: "Richtig! Objektivitaet und Unparteilichkeit sind Grundanforderungen."},
                {text: "Auditoren duerfen nicht die eigene Arbeit auditieren", correct: true, feedback: "Richtig! Auditoren muessen unabhaengig vom auditierten Bereich sein."},
                {text: "ist nur alle 3 Jahre erforderlich", correct: false, feedback: "FALSCH: Interne Audits sind HAEUFIGER erforderlich, nicht nur alle 3 Jahre."}
            ]},
            {q: "Zur Erhaltung von Produkten (8.5.4) gehoeren ...", topic: "Gemischt", answers: [
                {text: "Handhabung und Kennzeichnung", correct: true, feedback: "Richtig! Richtige Handhabung und Kennzeichnung sind Teil der Erhaltung."},
                {text: "Verpackung und Lagerung", correct: true, feedback: "Richtig! Verpackung und Lagerung gehoeren zur Erhaltung."},
                {text: "Transport und Schutz", correct: true, feedback: "Richtig! Transport und Schutz vor Umwelteinfluessen sind Teil der Erhaltung."},
                {text: "Werbung und Marketing", correct: false, feedback: "FALSCH: Werbung und Marketing haben NICHTS mit Produkterhaltung zu tun."}
            ]},
            {q: "Das Vier-Ohren-Modell beschreibt ...", topic: "Gemischt", answers: [
                {text: "Jede Nachricht hat vier Seiten", correct: true, feedback: "Richtig! Sachinhalt, Selbstoffenbarung, Beziehung, Appell."},
                {text: "Kommunikation kann mehrdeutig sein", correct: true, feedback: "Richtig! Das Modell zeigt, warum Missverstaendnisse entstehen koennen."},
                {text: "Empfaenger haben vier 'Ohren'", correct: true, feedback: "Richtig! Der Empfaenger kann eine Nachricht auf vier verschiedene Arten hoeren."},
                {text: "Nur der Sachinhalt zaehlt", correct: false, feedback: "FALSCH: Alle VIER Seiten der Nachricht sind relevant."}
            ]},
            {q: "Bei Korrekturmassnahmen nach ISO 9001 ...", topic: "Gemischt", answers: [
                {text: "muss die Ursache der Nichtkonformitaet ermittelt werden", correct: true, feedback: "Richtig! Die Ursache muss analysiert werden."},
                {text: "muessen Massnahmen ergriffen werden, damit sie nicht erneut auftritt", correct: true, feedback: "Richtig! Wiederholung muss verhindert werden."},
                {text: "muss die Wirksamkeit der Massnahmen bewertet werden", correct: true, feedback: "Richtig! Die Wirksamkeit der Korrekturmassnahmen muss geprueft werden."},
                {text: "reicht es, den Fehler nur zu beheben", correct: false, feedback: "FALSCH: Fehlerbehebung allein ist KEINE Korrekturmassnahme - die URSACHE muss behoben werden."}
            ]}
        ]
    },
    "pruefung_simulation_1": {
        title: "Pruefungssimulation 1 - Komplette Pruefung (45 Fragen)",
        questions: [
            {q: "1. Wie viele Grundsaetze des Qualitaetsmanagements sind in der ISO 9000 definiert?", topic: "Grundlagen", answers: [
                {text: "Sieben Grundsaetze", correct: true, feedback: "Richtig! Die ISO 9000 definiert sieben QM-Grundsaetze."},
                {text: "Fuenf Grundsaetze", correct: false, feedback: "FALSCH: Es sind SIEBEN Grundsaetze."},
                {text: "Acht Grundsaetze", correct: false, feedback: "FALSCH: Seit 2015 sind es sieben (frueher acht)."},
                {text: "Zehn Grundsaetze", correct: false, feedback: "FALSCH: Es sind SIEBEN Grundsaetze."}
            ]},
            {q: "2. Welche der folgenden sind QM-Grundsaetze nach ISO 9000?", topic: "Grundlagen", answers: [
                {text: "Kundenorientierung", correct: true, feedback: "Richtig! Kundenorientierung ist der erste QM-Grundsatz."},
                {text: "Fuehrung", correct: true, feedback: "Richtig! Fuehrung ist der zweite QM-Grundsatz."},
                {text: "Prozessorientierter Ansatz", correct: true, feedback: "Richtig! Der prozessorientierte Ansatz ist ein QM-Grundsatz."},
                {text: "Gewinnmaximierung", correct: false, feedback: "FALSCH: Gewinnmaximierung ist KEIN QM-Grundsatz."}
            ]},
            {q: "3. Was versteht die ISO 9001 unter dem Kontext der Organisation?", topic: "Kapitel 4", answers: [
                {text: "Interne und externe Themen, die die strategische Ausrichtung beeinflussen", correct: true, feedback: "Richtig! Der Kontext umfasst interne und externe Themen."},
                {text: "Faktoren, die die Faehigkeit beeinflussen, beabsichtigte Ergebnisse zu erzielen", correct: true, feedback: "Richtig! Der Kontext beeinflusst die Zielerreichung."},
                {text: "Nur die Marktposition des Unternehmens", correct: false, feedback: "FALSCH: Marktposition ist nur EIN Teilaspekt."},
                {text: "Ausschliesslich finanzielle Faktoren", correct: false, feedback: "FALSCH: Kontext umfasst viel mehr als nur Finanzen."}
            ]},
            {q: "4. Welche Aussagen zu interessierten Parteien sind normkonform?", topic: "Kapitel 4", answers: [
                {text: "Relevante interessierte Parteien muessen bestimmt werden", correct: true, feedback: "Richtig! Die Organisation muss relevante Parteien bestimmen."},
                {text: "Deren relevante Anforderungen muessen bestimmt werden", correct: true, feedback: "Richtig! Die Anforderungen muessen ermittelt werden."},
                {text: "Anforderungen muessen ueberwacht werden", correct: true, feedback: "Richtig! Regelmaessige Ueberpruefung ist gefordert."},
                {text: "ALLE Stakeholder muessen beruecksichtigt werden", correct: false, feedback: "FALSCH: Nur RELEVANTE Parteien, nicht alle."}
            ]},
            {q: "5. Der Anwendungsbereich des QMS ...", topic: "Kapitel 4", answers: [
                {text: "muss als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig! Der Anwendungsbereich muss dokumentiert sein."},
                {text: "muss Grenzen und Anwendbarkeit beschreiben", correct: true, feedback: "Richtig! Grenzen und Anwendbarkeit sind zu beschreiben."},
                {text: "kann begruendete Ausschluesse enthalten", correct: true, feedback: "Richtig! Begruendete Ausschluesse sind moeglich."},
                {text: "muss exakt der Normstruktur folgen", correct: false, feedback: "FALSCH: Die Struktur ist FREI waehlbar."}
            ]},
            {q: "6. Wer traegt die Gesamtverantwortung fuer die Wirksamkeit des QMS?", topic: "Kapitel 5", answers: [
                {text: "Die oberste Leitung", correct: true, feedback: "Richtig! Die oberste Leitung traegt die Gesamtverantwortung."},
                {text: "Der Qualitaetsbeauftragte", correct: false, feedback: "FALSCH: Der QMB unterstuetzt, traegt aber nicht die Gesamtverantwortung."},
                {text: "Die Qualitaetsabteilung", correct: false, feedback: "FALSCH: Die Abteilung unterstuetzt nur."},
                {text: "Der externe Auditor", correct: false, feedback: "FALSCH: Der Auditor prueft nur."}
            ]},
            {q: "7. Die Qualitaetspolitik muss ...", topic: "Kapitel 5", answers: [
                {text: "fuer den Zweck und Kontext angemessen sein", correct: true, feedback: "Richtig! Die Politik muss zum Kontext passen."},
                {text: "einen Rahmen fuer Qualitaetsziele bieten", correct: true, feedback: "Richtig! Sie gibt den Rahmen fuer Ziele vor."},
                {text: "als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig! Die Politik muss dokumentiert sein."},
                {text: "alle Qualitaetsziele explizit enthalten", correct: false, feedback: "FALSCH: Sie gibt den RAHMEN vor, enthaelt nicht alle Ziele."}
            ]},
            {q: "8. Was fordert die Norm bezueglich Risiken und Chancen?", topic: "Kapitel 6", answers: [
                {text: "Sie muessen bestimmt werden", correct: true, feedback: "Richtig! Risiken und Chancen sind zu bestimmen."},
                {text: "Massnahmen muessen geplant werden", correct: true, feedback: "Richtig! Massnahmen zum Umgang sind zu planen."},
                {text: "Sie sind in QMS-Prozesse zu integrieren", correct: true, feedback: "Richtig! Integration in Prozesse ist gefordert."},
                {text: "Ein formelles Risikomanagement ist vorgeschrieben", correct: false, feedback: "FALSCH: Kein FORMELLES Risikomanagement gefordert."}
            ]},
            {q: "9. Qualitaetsziele muessen ...", topic: "Kapitel 6", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig! Messbarkeit ist gefordert."},
                {text: "mit der Qualitaetspolitik vereinbar sein", correct: true, feedback: "Richtig! Vereinbarkeit mit der Politik ist erforderlich."},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig! Ueberwachung ist gefordert."},
                {text: "jaehrlich geaendert werden", correct: false, feedback: "FALSCH: Keine jaehrliche Aenderung vorgeschrieben."}
            ]},
            {q: "10. Welche Ressourcen nennt die ISO 9001 explizit?", topic: "Kapitel 7", answers: [
                {text: "Personen", correct: true, feedback: "Richtig! Personen sind in 7.1.2 genannt."},
                {text: "Infrastruktur", correct: true, feedback: "Richtig! Infrastruktur ist in 7.1.3 genannt."},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig! Wissen ist in 7.1.6 genannt."},
                {text: "Finanzmittel", correct: false, feedback: "FALSCH: Finanzmittel werden NICHT explizit genannt."}
            ]},
            {q: "11. Was ist Kompetenz im Sinne der ISO 9001?", topic: "Kapitel 7", answers: [
                {text: "Die Faehigkeit, Wissen und Fertigkeiten anzuwenden", correct: true, feedback: "Richtig! Kompetenz = Anwendung von Wissen und Fertigkeiten."},
                {text: "Kann durch Ausbildung erworben werden", correct: true, feedback: "Richtig! Ausbildung ist ein Weg zur Kompetenz."},
                {text: "Kann durch Erfahrung erworben werden", correct: true, feedback: "Richtig! Erfahrung fuehrt auch zu Kompetenz."},
                {text: "Ist identisch mit Schulungsteilnahme", correct: false, feedback: "FALSCH: Schulungsteilnahme allein ist keine Kompetenz."}
            ]},
            {q: "12. 'Dokumentierte Information aufrechterhalten' bedeutet ...", topic: "Kapitel 7", answers: [
                {text: "Vorgabedokumente aktuell halten", correct: true, feedback: "Richtig! Aufrechterhalten = Vorgaben aktuell halten."},
                {text: "z.B. Anweisungen und Richtlinien pflegen", correct: true, feedback: "Richtig! Arbeitsanweisungen sind Beispiele."},
                {text: "Prozessbeschreibungen aktualisieren", correct: true, feedback: "Richtig! Auch Prozessbeschreibungen gehoeren dazu."},
                {text: "Pruefprotokolle archivieren", correct: false, feedback: "FALSCH: Das ist AUFBEWAHREN, nicht aufrechterhalten."}
            ]},
            {q: "13. 'Dokumentierte Information aufbewahren' bedeutet ...", topic: "Kapitel 7", answers: [
                {text: "Nachweise und Aufzeichnungen archivieren", correct: true, feedback: "Richtig! Aufbewahren = Nachweise archivieren."},
                {text: "z.B. Pruefprotokolle aufbewahren", correct: true, feedback: "Richtig! Pruefprotokolle sind Beispiele."},
                {text: "Auditberichte archivieren", correct: true, feedback: "Richtig! Auditberichte werden aufbewahrt."},
                {text: "Arbeitsanweisungen erstellen", correct: false, feedback: "FALSCH: Das gehoert zu AUFRECHTERHALTEN."}
            ]},
            {q: "14. Welche Anforderungen gelten fuer externe Anbieter?", topic: "Kapitel 8", answers: [
                {text: "Art und Umfang der Steuerung festlegen", correct: true, feedback: "Richtig! Steuerungsmassnahmen sind festzulegen."},
                {text: "Kriterien fuer Auswahl und Bewertung festlegen", correct: true, feedback: "Richtig! Auswahlkriterien sind erforderlich."},
                {text: "Anforderungen kommunizieren", correct: true, feedback: "Richtig! Anforderungen muessen kommuniziert werden."},
                {text: "Alle Lieferanten muessen zertifiziert sein", correct: false, feedback: "FALSCH: Zertifizierung ist NICHT gefordert."}
            ]},
            {q: "15. Was umfasst die Erhaltung von Produkten (8.5.4)?", topic: "Kapitel 8", answers: [
                {text: "Kennzeichnung und Handhabung", correct: true, feedback: "Richtig! Kennzeichnung und Handhabung gehoeren dazu."},
                {text: "Verpackung und Lagerung", correct: true, feedback: "Richtig! Verpackung und Lagerung sind Aspekte."},
                {text: "Transport und Schutz", correct: true, feedback: "Richtig! Transport und Schutz gehoeren zur Erhaltung."},
                {text: "Preiskalkulation", correct: false, feedback: "FALSCH: Preiskalkulation hat nichts mit Erhaltung zu tun."}
            ]},
            {q: "16. Interne Audits muessen ...", topic: "Kapitel 9", answers: [
                {text: "in geplanten Abstaenden durchgefuehrt werden", correct: true, feedback: "Richtig! Geplante Abstaende sind gefordert."},
                {text: "Normkonformitaet pruefen", correct: true, feedback: "Richtig! Normkonformitaet wird geprueft."},
                {text: "wirksame Umsetzung pruefen", correct: true, feedback: "Richtig! Wirksamkeit wird geprueft."},
                {text: "nur bei Problemen durchgefuehrt werden", correct: false, feedback: "FALSCH: Sie sind REGELMAESSIG durchzufuehren."}
            ]},
            {q: "17. Die Managementbewertung ...", topic: "Kapitel 9", answers: [
                {text: "wird von der obersten Leitung durchgefuehrt", correct: true, feedback: "Richtig! Die Leitung fuehrt sie durch."},
                {text: "bewertet Eignung, Angemessenheit und Wirksamkeit", correct: true, feedback: "Richtig! Diese drei Aspekte werden bewertet."},
                {text: "liefert Eingaben fuer Verbesserungen", correct: true, feedback: "Richtig! Verbesserungsinput ist ein Ergebnis."},
                {text: "ersetzt interne Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht."}
            ]},
            {q: "18. Bei Nichtkonformitaeten muss die Organisation ...", topic: "Kapitel 10", answers: [
                {text: "reagieren und Massnahmen ergreifen", correct: true, feedback: "Richtig! Reaktion ist erforderlich."},
                {text: "die Ursache ermitteln", correct: true, feedback: "Richtig! Ursachenanalyse ist gefordert."},
                {text: "Korrekturmassnahmen umsetzen", correct: true, feedback: "Richtig! Korrekturmassnahmen sind umzusetzen."},
                {text: "nur dokumentieren ohne Massnahmen", correct: false, feedback: "FALSCH: Massnahmen sind VERPFLICHTEND."}
            ]},
            {q: "19. Das Kano-Modell unterscheidet ...", topic: "Grundlagen", answers: [
                {text: "Basismerkmale", correct: true, feedback: "Richtig! Basismerkmale sind eine Kategorie."},
                {text: "Leistungsmerkmale", correct: true, feedback: "Richtig! Leistungsmerkmale sind eine Kategorie."},
                {text: "Begeisterungsmerkmale", correct: true, feedback: "Richtig! Begeisterungsmerkmale sind die dritte Kategorie."},
                {text: "Kostenmerkmale", correct: false, feedback: "FALSCH: Kostenmerkmale gibt es im Kano-Modell nicht."}
            ]},
            {q: "20. Basismerkmale im Kano-Modell ...", topic: "Grundlagen", answers: [
                {text: "werden vom Kunden als selbstverstaendlich vorausgesetzt", correct: true, feedback: "Richtig! Basismerkmale sind Selbstverstaendlichkeiten."},
                {text: "fuehren bei Nichterfuellung zu Unzufriedenheit", correct: true, feedback: "Richtig! Nichterfuellung erzeugt Unzufriedenheit."},
                {text: "erzeugen bei Erfuellung keine Zufriedenheit", correct: true, feedback: "Richtig! Erfuellung fuehrt nur zu Neutralitaet."},
                {text: "werden immer explizit genannt", correct: false, feedback: "FALSCH: Sie werden oft NICHT explizit genannt."}
            ]},
            {q: "21. Die FMEA dient der ...", topic: "Methoden", answers: [
                {text: "vorausschauenden Fehlervermeidung", correct: true, feedback: "Richtig! Praevention ist das Hauptziel."},
                {text: "systematischen Risikoanalyse", correct: true, feedback: "Richtig! FMEA ist eine Risikoanalysemethode."},
                {text: "Ermittlung potenzieller Fehler", correct: true, feedback: "Richtig! Potenzielle Fehler werden identifiziert."},
                {text: "nachtraeglichen Fehlerbehebung", correct: false, feedback: "FALSCH: FMEA ist VORBEUGEND, nicht nachtraeglich."}
            ]},
            {q: "22. Die Risikoprioritaetszahl (RPZ) berechnet sich aus ...", topic: "Methoden", answers: [
                {text: "Bedeutung (B)", correct: true, feedback: "Richtig! B ist ein Faktor."},
                {text: "Auftreten (A)", correct: true, feedback: "Richtig! A ist ein Faktor."},
                {text: "Entdeckung (E)", correct: true, feedback: "Richtig! E ist ein Faktor. RPZ = B x A x E."},
                {text: "Kosten (K)", correct: false, feedback: "FALSCH: Kosten sind KEIN Faktor der RPZ."}
            ]},
            {q: "23. Der 8D-Report ...", topic: "Methoden", answers: [
                {text: "umfasst 8 Disziplinen/Prozessschritte", correct: true, feedback: "Richtig! 8D = 8 Disziplinen."},
                {text: "ist ein Werkzeug des Beschwerdemanagements", correct: true, feedback: "Richtig! Er wird bei Reklamationen eingesetzt."},
                {text: "wird zwischen Lieferant und Kunde ausgetauscht", correct: true, feedback: "Richtig! Er dient der Kommunikation."},
                {text: "besteht aus 8 Dokumenten", correct: false, feedback: "FALSCH: 8D = 8 DISZIPLINEN, nicht Dokumente."}
            ]},
            {q: "24. Die ersten 8D-Schritte sind ...", topic: "Methoden", answers: [
                {text: "D1: Teamarbeit", correct: true, feedback: "Richtig! Zuerst wird das Team gebildet."},
                {text: "D2: Problembeschreibung", correct: true, feedback: "Richtig! Dann wird das Problem beschrieben."},
                {text: "D3: Schadensbegrenzung", correct: true, feedback: "Richtig! Sofortmassnahmen folgen."},
                {text: "D1: Kostenanalyse", correct: false, feedback: "FALSCH: D1 ist TEAMARBEIT, nicht Kostenanalyse."}
            ]},
            {q: "25. Welche Auditarten gibt es nach dem Auditor?", topic: "Audit", answers: [
                {text: "1st party audit (intern)", correct: true, feedback: "Richtig! Internes Audit durch eigene Organisation."},
                {text: "2nd party audit (Lieferantenaudit)", correct: true, feedback: "Richtig! Audit durch Kunden beim Lieferanten."},
                {text: "3rd party audit (Zertifizierungsaudit)", correct: true, feedback: "Richtig! Audit durch unabhaengige Stelle."},
                {text: "4th party audit", correct: false, feedback: "FALSCH: Es gibt kein 4th party audit."}
            ]},
            {q: "26. Das Systemaudit ...", topic: "Audit", answers: [
                {text: "bewertet das gesamte QMS", correct: true, feedback: "Richtig! Das gesamte System wird bewertet."},
                {text: "prueft Aufbau- und Ablauforganisation", correct: true, feedback: "Richtig! Organisation wird geprueft."},
                {text: "ist die anspruchsvollste Auditform", correct: true, feedback: "Richtig! Es ist am umfassendsten."},
                {text: "prueft nur einzelne Produkte", correct: false, feedback: "FALSCH: Das waere ein PRODUKTaudit."}
            ]},
            {q: "27. ISO 19011 ...", topic: "Audit", answers: [
                {text: "ist der Leitfaden zur Auditierung", correct: true, feedback: "Richtig! ISO 19011 = Auditleitfaden."},
                {text: "enthaelt Auditprinzipien", correct: true, feedback: "Richtig! Grundsaetzliche Prinzipien sind enthalten."},
                {text: "beschreibt Auditorenkompetenz", correct: true, feedback: "Richtig! Anforderungen an Auditoren sind beschrieben."},
                {text: "ist eine Anforderungsnorm wie ISO 9001", correct: false, feedback: "FALSCH: ISO 19011 ist ein LEITFADEN, keine Anforderungsnorm."}
            ]},
            {q: "28. Das Zertifizierungsaudit ...", topic: "Audit", answers: [
                {text: "findet in zwei Stufen statt", correct: true, feedback: "Richtig! Stufe 1 und Stufe 2."},
                {text: "Stufe 1 prueft die Dokumentation", correct: true, feedback: "Richtig! Dokumentenpruefung in Stufe 1."},
                {text: "Stufe 2 ist das Vor-Ort-Audit", correct: true, feedback: "Richtig! Vor-Ort-Pruefung in Stufe 2."},
                {text: "besteht aus drei Stufen", correct: false, feedback: "FALSCH: Es sind ZWEI Stufen."}
            ]},
            {q: "29. Das ISO 9001 Zertifikat ...", topic: "Audit", answers: [
                {text: "ist 3 Jahre gueltig", correct: true, feedback: "Richtig! Gueltigkeit von 3 Jahren."},
                {text: "erfordert jaehrliche Ueberwachungsaudits", correct: true, feedback: "Richtig! Jaehrliche Ueberwachung."},
                {text: "muss durch Rezertifizierung erneuert werden", correct: true, feedback: "Richtig! Rezertifizierung nach 3 Jahren."},
                {text: "gilt unbegrenzt", correct: false, feedback: "FALSCH: Begrenzt auf 3 Jahre."}
            ]},
            {q: "30. Das Eisbergmodell zeigt ...", topic: "Kommunikation", answers: [
                {text: "Sachebene und Beziehungsebene", correct: true, feedback: "Richtig! Zwei Ebenen der Kommunikation."},
                {text: "der groesste Teil liegt unter der Oberflaeche", correct: true, feedback: "Richtig! Wie beim Eisberg."},
                {text: "Emotionen beeinflussen Kommunikation", correct: true, feedback: "Richtig! Emotionale Faktoren sind wichtig."},
                {text: "nur die Sachebene ist relevant", correct: false, feedback: "FALSCH: Beide Ebenen sind relevant."}
            ]},
            {q: "31. Das Vier-Ohren-Modell beschreibt ...", topic: "Kommunikation", answers: [
                {text: "Sachinhalt einer Nachricht", correct: true, feedback: "Richtig! Eine der vier Seiten."},
                {text: "Selbstoffenbarung", correct: true, feedback: "Richtig! Eine der vier Seiten."},
                {text: "Beziehung und Appell", correct: true, feedback: "Richtig! Die weiteren zwei Seiten."},
                {text: "nur sachliche Information", correct: false, feedback: "FALSCH: Alle VIER Seiten sind relevant."}
            ]},
            {q: "32. Aktives Zuhoeren bedeutet ...", topic: "Kommunikation", answers: [
                {text: "Bereitschaft, den Partner zu verstehen", correct: true, feedback: "Richtig! Verstehen wollen ist zentral."},
                {text: "Paraphrasieren des Gehoerten", correct: true, feedback: "Richtig! Zusammenfassen zeigt Verstaendnis."},
                {text: "Blickkontakt und Zuhoerbestaetigung", correct: true, feedback: "Richtig! Nonverbale Signale gehoeren dazu."},
                {text: "dem anderen ins Wort fallen", correct: false, feedback: "FALSCH: Das Gegenteil von aktivem Zuhoeren."}
            ]},
            {q: "33. Maslows Beduerfnispyramide ...", topic: "Motivation", answers: [
                {text: "zeigt eine hierarchische Ordnung von Beduerfnissen", correct: true, feedback: "Richtig! Hierarchische Struktur."},
                {text: "hat Grundbeduerfnisse an der Basis", correct: true, feedback: "Richtig! Physiologische Beduerfnisse unten."},
                {text: "hat Selbstverwirklichung an der Spitze", correct: true, feedback: "Richtig! Hoechste Stufe."},
                {text: "alle Beduerfnisse sind gleichzeitig aktiv", correct: false, feedback: "FALSCH: Hierarchisch aktiviert."}
            ]},
            {q: "34. Intrinsische Motivation ...", topic: "Motivation", answers: [
                {text: "kommt aus der Taetigkeit selbst", correct: true, feedback: "Richtig! Innere Motivation."},
                {text: "die Handlung wird als sinnvoll erkannt", correct: true, feedback: "Richtig! Eigener Sinn wird gesehen."},
                {text: "ist oft nachhaltiger als extrinsische", correct: true, feedback: "Richtig! Langfristig wirksamer."},
                {text: "wird durch Belohnung ausgeloest", correct: false, feedback: "FALSCH: Das ist EXTRINSISCHE Motivation."}
            ]},
            {q: "35. Die High Level Structure (HLS) ...", topic: "Grundlagen", answers: [
                {text: "ist eine einheitliche Grundstruktur", correct: true, feedback: "Richtig! Einheitliche Struktur fuer ISO-Normen."},
                {text: "erleichtert die Integration von Managementsystemen", correct: true, feedback: "Richtig! Integration wird vereinfacht."},
                {text: "umfasst 10 Kapitel", correct: true, feedback: "Richtig! Kapitel 0-10."},
                {text: "gilt nur fuer ISO 9001", correct: false, feedback: "FALSCH: Gilt fuer alle ISO-MS-Normen."}
            ]},
            {q: "36. Der Prozessansatz nach ISO 9001 ...", topic: "Kapitel 4", answers: [
                {text: "betrachtet Prozesse im Zusammenhang", correct: true, feedback: "Richtig! Wechselwirkungen beachten."},
                {text: "erfordert Bestimmung von Eingaben und Ergebnissen", correct: true, feedback: "Richtig! Ein- und Ausgaben definieren."},
                {text: "fordert Festlegung von Verantwortlichkeiten", correct: true, feedback: "Richtig! Verantwortliche benennen."},
                {text: "optimiert Prozesse isoliert", correct: false, feedback: "FALSCH: Im ZUSAMMENHANG, nicht isoliert."}
            ]},
            {q: "37. Ein Unternehmen hat Risiken bestimmt, aber keine Massnahmen geplant. Dies ist ...", topic: "Kapitel 6", answers: [
                {text: "nicht normkonform", correct: true, feedback: "Richtig! Massnahmen sind zu planen."},
                {text: "eine Abweichung gegen Kapitel 6.1", correct: true, feedback: "Richtig! 6.1 fordert Massnahmenplanung."},
                {text: "bei einem Audit feststellbar", correct: true, feedback: "Richtig! Auditoren wuerden das feststellen."},
                {text: "akzeptabel, wenn die Risiken dokumentiert sind", correct: false, feedback: "FALSCH: Dokumentation allein reicht nicht."}
            ]},
            {q: "38. Verantwortlichkeiten und Befugnisse muessen ...", topic: "Kapitel 5", answers: [
                {text: "zugewiesen werden", correct: true, feedback: "Richtig! Zuweisung ist erforderlich."},
                {text: "kommuniziert werden", correct: true, feedback: "Richtig! Kommunikation ist gefordert."},
                {text: "in der Organisation verstanden werden", correct: true, feedback: "Richtig! Verstaendnis ist wichtig."},
                {text: "von einer externen Stelle genehmigt werden", correct: false, feedback: "FALSCH: Keine externe Genehmigung noetig."}
            ]},
            {q: "39. Das Lieferkettensorgfaltspflichtengesetz (LkSG) ...", topic: "Kapitel 8", answers: [
                {text: "regelt menschenrechtliche Sorgfaltspflichten", correct: true, feedback: "Richtig! Menschenrechte in der Lieferkette."},
                {text: "gilt fuer Unternehmen ab 1.000 Mitarbeitern", correct: true, feedback: "Richtig! Ab 1.000 Arbeitnehmer."},
                {text: "erstreckt sich auf die Lieferkette", correct: true, feedback: "Richtig! Gesamte Lieferkette betroffen."},
                {text: "gilt nur im Ausland", correct: false, feedback: "FALSCH: Auch fuer deutsche Unternehmen."}
            ]},
            {q: "40. Taetigkeiten nach der Lieferung (8.5.5) koennen sein ...", topic: "Kapitel 8", answers: [
                {text: "Gewaehrleistungsleistungen", correct: true, feedback: "Richtig! Garantieleistungen gehoeren dazu."},
                {text: "Wartung und Instandhaltung", correct: true, feedback: "Richtig! Service nach der Lieferung."},
                {text: "Wiederverwertung oder Entsorgung", correct: true, feedback: "Richtig! Ende des Lebenszyklus."},
                {text: "nur Rechnungsstellung", correct: false, feedback: "FALSCH: Viel mehr als nur Rechnungen."}
            ]},
            {q: "41. Die Kundenzufriedenheit nach ISO 9001 ...", topic: "Kapitel 9", answers: [
                {text: "muss ueberwacht werden", correct: true, feedback: "Richtig! Ueberwachung ist gefordert."},
                {text: "ist ein Leistungsindikator", correct: true, feedback: "Richtig! Wichtiger KPI."},
                {text: "Methoden zur Ermittlung sind festzulegen", correct: true, feedback: "Richtig! Methoden muessen definiert sein."},
                {text: "ist optional", correct: false, feedback: "FALSCH: Sie ist VERPFLICHTEND."}
            ]},
            {q: "42. Die fortlaufende Verbesserung ...", topic: "Kapitel 10", answers: [
                {text: "ist eine Normforderung", correct: true, feedback: "Richtig! Kapitel 10.3 fordert Verbesserung."},
                {text: "betrifft Eignung, Angemessenheit und Wirksamkeit", correct: true, feedback: "Richtig! Diese drei Aspekte verbessern."},
                {text: "nutzt Auditergebnisse und Datenanalyse", correct: true, feedback: "Richtig! Verschiedene Eingaben nutzen."},
                {text: "ist nur bei Problemen erforderlich", correct: false, feedback: "FALSCH: FORTLAUFEND, nicht nur bei Problemen."}
            ]},
            {q: "43. Ein internes Audit stellt Abweichungen fest. Normkonform ist ...", topic: "Audit", answers: [
                {text: "Dokumentation der Abweichungen", correct: true, feedback: "Richtig! Feststellungen dokumentieren."},
                {text: "Einleitung von Korrekturmassnahmen", correct: true, feedback: "Richtig! Massnahmen ergreifen."},
                {text: "Pruefung der Wirksamkeit der Massnahmen", correct: true, feedback: "Richtig! Wirksamkeit verifizieren."},
                {text: "Ignorieren der Feststellungen", correct: false, feedback: "FALSCH: Massnahmen sind VERPFLICHTEND."}
            ]},
            {q: "44. Wissen der Organisation (7.1.6) ...", topic: "Kapitel 7", answers: [
                {text: "muss bestimmt werden", correct: true, feedback: "Richtig! Wissen ist zu bestimmen."},
                {text: "muss aufrechterhalten werden", correct: true, feedback: "Richtig! Aufrechterhaltung ist gefordert."},
                {text: "muss verfuegbar gemacht werden", correct: true, feedback: "Richtig! Verfuegbarkeit sicherstellen."},
                {text: "ist seit 2015 nicht mehr relevant", correct: false, feedback: "FALSCH: Seit 2015 NEU in der Norm."}
            ]},
            {q: "45. Eine Organisation schliesst Entwicklung (8.3) aus. Dies ist zulaessig, wenn ...", topic: "Kapitel 4", answers: [
                {text: "die Organisation keine Entwicklung durchfuehrt", correct: true, feedback: "Richtig! Wenn nicht anwendbar."},
                {text: "der Ausschluss begruendet ist", correct: true, feedback: "Richtig! Begruendung erforderlich."},
                {text: "Konformitaet nicht beeintraechtigt wird", correct: true, feedback: "Richtig! Produktkonformitaet darf nicht leiden."},
                {text: "der Zertifizierer es anordnet", correct: false, feedback: "FALSCH: Die Organisation entscheidet selbst."}
            ]}
        ]
    },
    "pruefung_simulation_2": {
        title: "Pruefungssimulation 2 - Komplette Pruefung (45 Fragen)",
        questions: [
            {q: "1. Welche Aussage zur ISO 9000 ist korrekt?", topic: "Grundlagen", answers: [
                {text: "Sie enthaelt Begriffe und Grundlagen des QM", correct: true, feedback: "Richtig! ISO 9000 definiert Begriffe."},
                {text: "Sie ist keine Anforderungsnorm", correct: true, feedback: "Richtig! ISO 9001 ist die Anforderungsnorm."},
                {text: "Sie definiert die sieben Grundsaetze des QM", correct: true, feedback: "Richtig! Die Grundsaetze sind darin definiert."},
                {text: "Sie ist Grundlage fuer Zertifizierungen", correct: false, feedback: "FALSCH: ISO 9001 ist die Zertifizierungsgrundlage."}
            ]},
            {q: "2. Der PDCA-Zyklus ...", topic: "Grundlagen", answers: [
                {text: "besteht aus Plan-Do-Check-Act", correct: true, feedback: "Richtig! Die vier Phasen."},
                {text: "ist ein Werkzeug zur fortlaufenden Verbesserung", correct: true, feedback: "Richtig! Kontinuierliche Verbesserung."},
                {text: "ist in der ISO 9001 verankert", correct: true, feedback: "Richtig! Grundprinzip der Norm."},
                {text: "ist nur fuer Produktionsprozesse geeignet", correct: false, feedback: "FALSCH: Fuer ALLE Prozesse anwendbar."}
            ]},
            {q: "3. Die Begeisterungsmerkmale im Kano-Modell ...", topic: "Grundlagen", answers: [
                {text: "werden vom Kunden nicht erwartet", correct: true, feedback: "Richtig! Sie ueberraschen positiv."},
                {text: "fuehren zu hoher Zufriedenheit", correct: true, feedback: "Richtig! Sie begeistern den Kunden."},
                {text: "werden mit der Zeit zu Basismerkmalen", correct: true, feedback: "Richtig! Sie werden selbstverstaendlich."},
                {text: "muessen vertraglich vereinbart sein", correct: false, feedback: "FALSCH: Sie gehen UEBER Vereinbartes hinaus."}
            ]},
            {q: "4. Eine interessierte Partei ist ...", topic: "Kapitel 4", answers: [
                {text: "eine Person oder Organisation mit Interesse an QMS-Entscheidungen", correct: true, feedback: "Richtig! Betroffene oder Beeinflusser."},
                {text: "ein Kunde oder Lieferant", correct: true, feedback: "Richtig! Typische interessierte Parteien."},
                {text: "eine Behoerde mit rechtlichen Anforderungen", correct: true, feedback: "Richtig! Gesetzgeber und Behoerden."},
                {text: "ausschliesslich der Eigentuemer", correct: false, feedback: "FALSCH: AUSSCHLIESSLICH ist falsch - viele Parteien."}
            ]},
            {q: "5. Bei der Festlegung des Anwendungsbereichs ...", topic: "Kapitel 4", answers: [
                {text: "sind externe und interne Themen zu beruecksichtigen", correct: true, feedback: "Richtig! Kontext einbeziehen."},
                {text: "sind Anforderungen interessierter Parteien relevant", correct: true, feedback: "Richtig! Stakeholder-Anforderungen."},
                {text: "sind Produkte und Dienstleistungen zu benennen", correct: true, feedback: "Richtig! Was wird abgedeckt."},
                {text: "muss die gesamte Organisation einbezogen werden", correct: false, feedback: "FALSCH: Ausschluesse sind MOEGLICH."}
            ]},
            {q: "6. Ein Prozess nach ISO 9001 hat ...", topic: "Kapitel 4", answers: [
                {text: "Eingaben und Ergebnisse", correct: true, feedback: "Richtig! Input und Output."},
                {text: "Wechselwirkungen mit anderen Prozessen", correct: true, feedback: "Richtig! Prozesse haengen zusammen."},
                {text: "erforderliche Ressourcen", correct: true, feedback: "Richtig! Personal, Infrastruktur etc."},
                {text: "immer eine schriftliche Arbeitsanweisung", correct: false, feedback: "FALSCH: Nicht IMMER gefordert."}
            ]},
            {q: "7. Die oberste Leitung muss ...", topic: "Kapitel 5", answers: [
                {text: "Rechenschaftspflicht fuer die Wirksamkeit uebernehmen", correct: true, feedback: "Richtig! Verantwortung tragen."},
                {text: "die Qualitaetspolitik festlegen", correct: true, feedback: "Richtig! Politik bestimmen."},
                {text: "Ressourcen bereitstellen", correct: true, feedback: "Richtig! Ressourcen sichern."},
                {text: "operative Taetigkeiten selbst durchfuehren", correct: false, feedback: "FALSCH: Delegieren ist moeglich."}
            ]},
            {q: "8. Die Qualitaetspolitik muss ...", topic: "Kapitel 5", answers: [
                {text: "als dokumentierte Information verfuegbar sein", correct: true, feedback: "Richtig! Dokumentation gefordert."},
                {text: "kommuniziert und verstanden werden", correct: true, feedback: "Richtig! Allen bekannt sein."},
                {text: "fuer interessierte Parteien verfuegbar sein", correct: true, feedback: "Richtig! Bei Bedarf zugaenglich."},
                {text: "jaehrlich komplett neu erstellt werden", correct: false, feedback: "FALSCH: Anpassen ja, komplett neu nein."}
            ]},
            {q: "9. Qualitaetsziele muessen ...", topic: "Kapitel 6", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig! Messbarkeit ist gefordert."},
                {text: "mit der Qualitaetspolitik konsistent sein", correct: true, feedback: "Richtig! Zur Politik passen."},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig! Fortschritt verfolgen."},
                {text: "identisch mit Unternehmenszielen sein", correct: false, feedback: "FALSCH: Konsistent, nicht IDENTISCH."}
            ]},
            {q: "10. Bei der Planung von Aenderungen ...", topic: "Kapitel 6", answers: [
                {text: "ist der Zweck der Aenderung zu beruecksichtigen", correct: true, feedback: "Richtig! Warum die Aenderung."},
                {text: "sind moegliche Auswirkungen zu bedenken", correct: true, feedback: "Richtig! Konsequenzen abschaetzen."},
                {text: "ist die Verfuegbarkeit von Ressourcen zu pruefen", correct: true, feedback: "Richtig! Ressourcen einplanen."},
                {text: "muss jede Aenderung vom Zertifizierer genehmigt werden", correct: false, feedback: "FALSCH: Interne Verantwortung."}
            ]},
            {q: "11. Kompetenz der Personen umfasst ...", topic: "Kapitel 7", answers: [
                {text: "Ausbildung und Schulung", correct: true, feedback: "Richtig! Formale Qualifikation."},
                {text: "Fertigkeiten und Erfahrung", correct: true, feedback: "Richtig! Praktische Faehigkeiten."},
                {text: "Nachweise der Kompetenz aufbewahren", correct: true, feedback: "Richtig! Dokumentation erforderlich."},
                {text: "nur akademische Abschluesse", correct: false, feedback: "FALSCH: Auch Erfahrung zaehlt."}
            ]},
            {q: "12. Das Bewusstsein der Personen bezieht sich auf ...", topic: "Kapitel 7", answers: [
                {text: "die Qualitaetspolitik", correct: true, feedback: "Richtig! Politik kennen."},
                {text: "relevante Qualitaetsziele", correct: true, feedback: "Richtig! Ziele verstehen."},
                {text: "den Beitrag zur QMS-Wirksamkeit", correct: true, feedback: "Richtig! Eigene Rolle kennen."},
                {text: "ausschliesslich Fehlerquoten", correct: false, feedback: "FALSCH: Viel mehr als nur Fehler."}
            ]},
            {q: "13. Dokumentierte Information muss ...", topic: "Kapitel 7", answers: [
                {text: "identifiziert und beschrieben sein", correct: true, feedback: "Richtig! Eindeutig erkennbar."},
                {text: "in geeignetem Format vorliegen", correct: true, feedback: "Richtig! Format angemessen."},
                {text: "auf Eignung geprueft und genehmigt werden", correct: true, feedback: "Richtig! Freigabeprozess."},
                {text: "ausschliesslich in Papierform gefuehrt werden", correct: false, feedback: "FALSCH: Elektronisch ist erlaubt."}
            ]},
            {q: "14. Die Lenkung dokumentierter Information beinhaltet ...", topic: "Kapitel 7", answers: [
                {text: "Verteilung und Zugriff", correct: true, feedback: "Richtig! Verfuegbarkeit sichern."},
                {text: "Ablage und Aufbewahrung", correct: true, feedback: "Richtig! Archivierung regeln."},
                {text: "Schutz vor unbeabsichtigter Aenderung", correct: true, feedback: "Richtig! Integritaet schuetzen."},
                {text: "Vernichtung nach 6 Monaten", correct: false, feedback: "FALSCH: Aufbewahrungsfristen individuell."}
            ]},
            {q: "15. Bei der operativen Planung und Steuerung (8.1) ...", topic: "Kapitel 8", answers: [
                {text: "werden Kriterien fuer Prozesse festgelegt", correct: true, feedback: "Richtig! Prozesskriterien definieren."},
                {text: "wird die Steuerung der Prozesse umgesetzt", correct: true, feedback: "Richtig! Prozesse steuern."},
                {text: "werden dokumentierte Informationen aufbewahrt", correct: true, feedback: "Richtig! Nachweise fuehren."},
                {text: "entfaellt die Ressourcenplanung", correct: false, feedback: "FALSCH: Ressourcen sind einzuplanen."}
            ]},
            {q: "16. Kundenanforderungen muessen ...", topic: "Kapitel 8", answers: [
                {text: "ermittelt werden", correct: true, feedback: "Richtig! Was will der Kunde."},
                {text: "bewertet werden", correct: true, feedback: "Richtig! Machbarkeitspruefung."},
                {text: "bestaetigt werden, bevor sie angenommen werden", correct: true, feedback: "Richtig! Auftragsbestaetigung."},
                {text: "immer muendlich vereinbart werden", correct: false, feedback: "FALSCH: Form ist nicht vorgeschrieben."}
            ]},
            {q: "17. Bei extern bereitgestellten Prozessen ...", topic: "Kapitel 8", answers: [
                {text: "muessen Steuerungsmassnahmen festgelegt werden", correct: true, feedback: "Richtig! Steuerung erforderlich."},
                {text: "sind Kriterien fuer Auswahl und Bewertung anzuwenden", correct: true, feedback: "Richtig! Lieferantenbewertung."},
                {text: "bleibt die Organisation verantwortlich", correct: true, feedback: "Richtig! Verantwortung nicht abgebbar."},
                {text: "entfaellt die Qualitaetspruefung", correct: false, feedback: "FALSCH: Pruefung bleibt wichtig."}
            ]},
            {q: "18. Die Kennzeichnung und Rueckverfolgbarkeit ...", topic: "Kapitel 8", answers: [
                {text: "dient der Identifikation des Produktstatus", correct: true, feedback: "Richtig! Status erkennen."},
                {text: "ermoeglicht Rueckrufaktionen", correct: true, feedback: "Richtig! Bei Fehlern zurueckverfolgen."},
                {text: "ist bei Kundenforderung umzusetzen", correct: true, feedback: "Richtig! Wenn gefordert."},
                {text: "ist immer fuer alle Produkte erforderlich", correct: false, feedback: "FALSCH: Nur wenn anwendbar."}
            ]},
            {q: "19. Eigentum von Kunden oder externen Anbietern ...", topic: "Kapitel 8", answers: [
                {text: "muss identifiziert werden", correct: true, feedback: "Richtig! Kennzeichnen."},
                {text: "muss geschuetzt werden", correct: true, feedback: "Richtig! Schutz gewaehrleisten."},
                {text: "bei Verlust ist der Kunde zu informieren", correct: true, feedback: "Richtig! Meldepflicht."},
                {text: "darf beliebig verwendet werden", correct: false, feedback: "FALSCH: Nur bestimmungsgemaess."}
            ]},
            {q: "20. Die Freigabe von Produkten und Dienstleistungen ...", topic: "Kapitel 8", answers: [
                {text: "erfolgt erst nach Erfuellung der Anforderungen", correct: true, feedback: "Richtig! Alle Pruefungen bestanden."},
                {text: "benoetigt Nachweis der Konformitaet", correct: true, feedback: "Richtig! Dokumentation der Freigabe."},
                {text: "muss rueckverfolgbar zur freigebenden Person sein", correct: true, feedback: "Richtig! Wer hat freigegeben."},
                {text: "kann beliebig vorgezogen werden", correct: false, feedback: "FALSCH: Nur mit Kundengenehmigung."}
            ]},
            {q: "21. Die Steuerung nichtkonformer Ergebnisse ...", topic: "Kapitel 8", answers: [
                {text: "verhindert unbeabsichtigte Verwendung", correct: true, feedback: "Richtig! Sperrung fehlerhafter Teile."},
                {text: "umfasst Kennzeichnung und Absonderung", correct: true, feedback: "Richtig! Trennung von konformen Produkten."},
                {text: "erfordert dokumentierte Information", correct: true, feedback: "Richtig! Nachweise fuehren."},
                {text: "ist nur bei Reklamationen erforderlich", correct: false, feedback: "FALSCH: Bei ALLEN Nichtkonformitaeten."}
            ]},
            {q: "22. Ueberwachung und Messung (9.1) ...", topic: "Kapitel 9", answers: [
                {text: "erfordert Bestimmung von Was, Wann und Wie", correct: true, feedback: "Richtig! Systematische Planung."},
                {text: "dient der Bewertung der Leistung", correct: true, feedback: "Richtig! Performance messen."},
                {text: "liefert Eingaben fuer die Verbesserung", correct: true, feedback: "Richtig! Basis fuer Optimierung."},
                {text: "ist optional bei kleinen Organisationen", correct: false, feedback: "FALSCH: Fuer ALLE verpflichtend."}
            ]},
            {q: "23. Die Analyse und Bewertung umfasst ...", topic: "Kapitel 9", answers: [
                {text: "Konformitaet von Produkten und Dienstleistungen", correct: true, feedback: "Richtig! Erfuellen wir Anforderungen."},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig! Zufriedenheit auswerten."},
                {text: "Wirksamkeit des QMS", correct: true, feedback: "Richtig! Funktioniert das System."},
                {text: "nur finanzielle Kennzahlen", correct: false, feedback: "FALSCH: Viel mehr als nur Finanzen."}
            ]},
            {q: "24. Die Managementbewertung ...", topic: "Kapitel 9", answers: [
                {text: "wird von der obersten Leitung durchgefuehrt", correct: true, feedback: "Richtig! Top-Management."},
                {text: "beruecksichtigt Status von Massnahmen", correct: true, feedback: "Richtig! Was wurde umgesetzt."},
                {text: "fuehrt zu Entscheidungen und Massnahmen", correct: true, feedback: "Richtig! Ergebnisse als Output."},
                {text: "ist alle 5 Jahre durchzufuehren", correct: false, feedback: "FALSCH: In geplanten Abstaenden, meist jaehrlich."}
            ]},
            {q: "25. Eingaben fuer die Managementbewertung sind ...", topic: "Kapitel 9", answers: [
                {text: "Ergebnisse von Audits", correct: true, feedback: "Richtig! Auditfeststellungen."},
                {text: "Rueckmeldungen von Kunden", correct: true, feedback: "Richtig! Kundenfeedback."},
                {text: "Leistung externer Anbieter", correct: true, feedback: "Richtig! Lieferantenbewertung."},
                {text: "Protokolle von Teambuilding-Events", correct: false, feedback: "FALSCH: Nicht relevant fuer QMS."}
            ]},
            {q: "26. Nichtkonformitaet und Korrekturmassnahmen (10.2) ...", topic: "Kapitel 10", answers: [
                {text: "erfordern Reaktion auf die Nichtkonformitaet", correct: true, feedback: "Richtig! Sofortmassnahme."},
                {text: "erfordern Ursachenanalyse", correct: true, feedback: "Richtig! Warum ist es passiert."},
                {text: "pruefen die Wirksamkeit der Massnahmen", correct: true, feedback: "Richtig! Hat es gewirkt."},
                {text: "sind nur bei Kundenreklamationen noetig", correct: false, feedback: "FALSCH: Bei ALLEN Nichtkonformitaeten."}
            ]},
            {q: "27. Die FMEA ...", topic: "FMEA", answers: [
                {text: "ist eine praeventive Methode", correct: true, feedback: "Richtig! Vorbeugend."},
                {text: "bewertet potenzielle Fehler", correct: true, feedback: "Richtig! Moegliche Fehler analysieren."},
                {text: "ermittelt die Risikoprioritaetszahl", correct: true, feedback: "Richtig! RPZ als Kennzahl."},
                {text: "wird nur nach Schadensfaellen angewendet", correct: false, feedback: "FALSCH: PRAEVENTIV, nicht reaktiv."}
            ]},
            {q: "28. Die Risikoprioritaetszahl (RPZ) berechnet sich aus ...", topic: "FMEA", answers: [
                {text: "Bedeutung (B)", correct: true, feedback: "Richtig! Schwere des Fehlers."},
                {text: "Auftretenswahrscheinlichkeit (A)", correct: true, feedback: "Richtig! Wie oft tritt es auf."},
                {text: "Entdeckungswahrscheinlichkeit (E)", correct: true, feedback: "Richtig! Wird der Fehler erkannt."},
                {text: "B + A + E", correct: false, feedback: "FALSCH: Es ist B x A x E (Multiplikation)."}
            ]},
            {q: "29. Der 8D-Report ...", topic: "8D-Report", answers: [
                {text: "hat 8 Disziplinen", correct: true, feedback: "Richtig! D1 bis D8."},
                {text: "beginnt mit der Teambildung", correct: true, feedback: "Richtig! D1: Team zusammenstellen."},
                {text: "endet mit der Wuerdigung des Teams", correct: true, feedback: "Richtig! D8: Erfolg anerkennen."},
                {text: "ist nur fuer Automobilzulieferer", correct: false, feedback: "FALSCH: Branchenuebergreifend anwendbar."}
            ]},
            {q: "30. D3 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "sind Sofortmassnahmen", correct: true, feedback: "Richtig! Containment Actions."},
                {text: "schuetzen den Kunden sofort", correct: true, feedback: "Richtig! Schnelle Abhilfe."},
                {text: "verhindern Ausbreitung des Problems", correct: true, feedback: "Richtig! Eindaemmung."},
                {text: "beseitigen die Ursache dauerhaft", correct: false, feedback: "FALSCH: Das ist D5/D6."}
            ]},
            {q: "31. Ein internes Audit (1st party) ...", topic: "Audit", answers: [
                {text: "wird von der Organisation selbst durchgefuehrt", correct: true, feedback: "Richtig! Eigene Mitarbeiter."},
                {text: "dient der Selbstbewertung", correct: true, feedback: "Richtig! Eigene Leistung pruefen."},
                {text: "ist Anforderung der ISO 9001", correct: true, feedback: "Richtig! Kapitel 9.2."},
                {text: "fuehrt zur Zertifikatserteilung", correct: false, feedback: "FALSCH: Das macht das 3rd party Audit."}
            ]},
            {q: "32. Ein Lieferantenaudit (2nd party) ...", topic: "Audit", answers: [
                {text: "wird beim Lieferanten durchgefuehrt", correct: true, feedback: "Richtig! Externe Pruefung."},
                {text: "bewertet die Lieferantenleistung", correct: true, feedback: "Richtig! Qualitaetsfaehigkeit pruefen."},
                {text: "dient der Lieferantenbewertung", correct: true, feedback: "Richtig! Auswahlkriterium."},
                {text: "ersetzt die Wareneingangspruefung", correct: false, feedback: "FALSCH: Beides ist moeglich."}
            ]},
            {q: "33. Das Zertifizierungsaudit (3rd party) ...", topic: "Audit", answers: [
                {text: "wird von unabhaengiger Stelle durchgefuehrt", correct: true, feedback: "Richtig! Zertifizierungsstelle."},
                {text: "prueft die Konformitaet mit der Norm", correct: true, feedback: "Richtig! Normerfuellung."},
                {text: "hat zwei Stufen (Stage 1 und 2)", correct: true, feedback: "Richtig! Zweistufiges Verfahren."},
                {text: "ist freiwillig fuer alle Organisationen", correct: false, feedback: "FALSCH: Kann Kundenforderung sein."}
            ]},
            {q: "34. Stage 1 des Zertifizierungsaudits ...", topic: "Audit", answers: [
                {text: "prueft die Dokumentation", correct: true, feedback: "Richtig! Dokumentationspruefung."},
                {text: "bewertet die Auditbereitschaft", correct: true, feedback: "Richtig! Ist man bereit fuer Stage 2."},
                {text: "identifiziert potenzielle Problembereiche", correct: true, feedback: "Richtig! Schwachstellen erkennen."},
                {text: "fuehrt bei Erfolg sofort zum Zertifikat", correct: false, feedback: "FALSCH: Erst nach Stage 2."}
            ]},
            {q: "35. Die ISO 19011 ...", topic: "Audit", answers: [
                {text: "ist ein Leitfaden fuer Audits", correct: true, feedback: "Richtig! Audit-Leitfaden."},
                {text: "beschreibt Auditorenkompetenz", correct: true, feedback: "Richtig! Anforderungen an Auditoren."},
                {text: "gilt fuer 1st, 2nd und 3rd party Audits", correct: true, feedback: "Richtig! Alle Auditarten."},
                {text: "ist eine Zertifizierungsnorm", correct: false, feedback: "FALSCH: Leitfaden, keine Zertifizierungsnorm."}
            ]},
            {q: "36. Das Vier-Ohren-Modell nach Schulz von Thun ...", topic: "Kommunikation", answers: [
                {text: "beschreibt vier Seiten einer Nachricht", correct: true, feedback: "Richtig! Vier Aspekte."},
                {text: "umfasst Sachinhalt und Selbstoffenbarung", correct: true, feedback: "Richtig! Zwei der vier Seiten."},
                {text: "umfasst Beziehung und Appell", correct: true, feedback: "Richtig! Die anderen zwei Seiten."},
                {text: "gilt nur fuer schriftliche Kommunikation", correct: false, feedback: "FALSCH: Fuer ALLE Kommunikation."}
            ]},
            {q: "37. Das Eisbergmodell zeigt ...", topic: "Kommunikation", answers: [
                {text: "sichtbare und unsichtbare Kommunikationsanteile", correct: true, feedback: "Richtig! Ober- und Unterflaeche."},
                {text: "dass der groesste Teil unter der Oberflaeche liegt", correct: true, feedback: "Richtig! Wie beim Eisberg."},
                {text: "die Bedeutung von Emotionen", correct: true, feedback: "Richtig! Gefuehle beeinflussen."},
                {text: "dass nur Fakten zaehlen", correct: false, feedback: "FALSCH: Emotionen sind ebenso wichtig."}
            ]},
            {q: "38. Aktives Zuhoeren beinhaltet ...", topic: "Kommunikation", answers: [
                {text: "Paraphrasieren", correct: true, feedback: "Richtig! Zusammenfassen des Gehoerten."},
                {text: "Blickkontakt halten", correct: true, feedback: "Richtig! Nonverbale Aufmerksamkeit."},
                {text: "Empathie zeigen", correct: true, feedback: "Richtig! Einfuehlen."},
                {text: "schnell mit eigener Meinung antworten", correct: false, feedback: "FALSCH: Erst zuhoeren, dann antworten."}
            ]},
            {q: "39. Nach Maslows Beduerfnispyramide ...", topic: "Motivation", answers: [
                {text: "stehen physiologische Beduerfnisse an der Basis", correct: true, feedback: "Richtig! Grundbeduerfnisse."},
                {text: "folgen Sicherheitsbeduerfnisse", correct: true, feedback: "Richtig! Zweite Stufe."},
                {text: "steht Selbstverwirklichung an der Spitze", correct: true, feedback: "Richtig! Hoechste Stufe."},
                {text: "sind alle Stufen gleichzeitig aktiv", correct: false, feedback: "FALSCH: Hierarchische Aktivierung."}
            ]},
            {q: "40. Extrinsische Motivation ...", topic: "Motivation", answers: [
                {text: "kommt von aussen", correct: true, feedback: "Richtig! Externe Anreize."},
                {text: "kann durch Belohnungen entstehen", correct: true, feedback: "Richtig! Praemien, Lob."},
                {text: "kann durch Sanktionen entstehen", correct: true, feedback: "Richtig! Strafen vermeiden."},
                {text: "ist nachhaltiger als intrinsische", correct: false, feedback: "FALSCH: Meist WENIGER nachhaltig."}
            ]},
            {q: "41. Das Lieferkettensorgfaltspflichtengesetz ...", topic: "Kapitel 8", answers: [
                {text: "verpflichtet zu menschenrechtlicher Sorgfalt", correct: true, feedback: "Richtig! Menschenrechte schuetzen."},
                {text: "gilt fuer Unternehmen ab 1.000 Mitarbeitern", correct: true, feedback: "Richtig! Ab 1.000 Arbeitnehmer."},
                {text: "betrifft die gesamte Lieferkette", correct: true, feedback: "Richtig! Vom Rohstoff bis zum Endprodukt."},
                {text: "ist nur eine Empfehlung", correct: false, feedback: "FALSCH: Es ist ein GESETZ."}
            ]},
            {q: "42. Die Infrastruktur nach ISO 9001 umfasst ...", topic: "Kapitel 7", answers: [
                {text: "Gebaeude und zugehoerige Versorgungseinrichtungen", correct: true, feedback: "Richtig! Arbeitsumgebung."},
                {text: "Ausruestung einschliesslich Hard- und Software", correct: true, feedback: "Richtig! IT und Maschinen."},
                {text: "Transportressourcen", correct: true, feedback: "Richtig! Logistik."},
                {text: "ausschliesslich Produktionsmaschinen", correct: false, feedback: "FALSCH: Viel umfassender."}
            ]},
            {q: "43. Das Wissen der Organisation (7.1.6) ...", topic: "Kapitel 7", answers: [
                {text: "ist fuer den Betrieb der Prozesse erforderlich", correct: true, feedback: "Richtig! Prozesswissen."},
                {text: "muss aufrechterhalten werden", correct: true, feedback: "Richtig! Wissen bewahren."},
                {text: "kann aus internen und externen Quellen stammen", correct: true, feedback: "Richtig! Verschiedene Quellen."},
                {text: "ist nur das Wissen der Geschaeftsfuehrung", correct: false, feedback: "FALSCH: Wissen ALLER Ebenen."}
            ]},
            {q: "44. Bei der Entwicklung von Produkten (8.3) ...", topic: "Kapitel 8", answers: [
                {text: "sind Entwicklungseingaben zu bestimmen", correct: true, feedback: "Richtig! Was wird benoetigt."},
                {text: "sind Entwicklungsergebnisse zu verifizieren", correct: true, feedback: "Richtig! Pruefung der Ergebnisse."},
                {text: "sind Entwicklungsaenderungen zu lenken", correct: true, feedback: "Richtig! Aenderungsmanagement."},
                {text: "ist ein separates Entwicklungsteam vorgeschrieben", correct: false, feedback: "FALSCH: Organisation ist frei."}
            ]},
            {q: "45. Ein Systemaudit ...", topic: "Audit", answers: [
                {text: "prueft das gesamte QMS", correct: true, feedback: "Richtig! Ganzheitliche Betrachtung."},
                {text: "bewertet die Wirksamkeit des Systems", correct: true, feedback: "Richtig! Funktioniert es."},
                {text: "kann intern oder extern durchgefuehrt werden", correct: true, feedback: "Richtig! Beide Varianten moeglich."},
                {text: "betrachtet nur einzelne Produkte", correct: false, feedback: "FALSCH: Das waere ein PRODUKTaudit."}
            ]}
        ]
    },
    "pruefung_simulation_3": {
        title: "Pruefungssimulation 3 - Komplette Pruefung (45 Fragen)",
        questions: [
            {q: "1. Die ISO 9001:2015 basiert auf ...", topic: "Grundlagen", answers: [
                {text: "der High Level Structure", correct: true, feedback: "Richtig! HLS als Grundstruktur."},
                {text: "dem PDCA-Zyklus", correct: true, feedback: "Richtig! Plan-Do-Check-Act."},
                {text: "dem risikobasierten Denken", correct: true, feedback: "Richtig! Risiken beruecksichtigen."},
                {text: "einer starren Vorgabe von Dokumenten", correct: false, feedback: "FALSCH: Die Norm ist FLEXIBEL."}
            ]},
            {q: "2. Die sieben Grundsaetze des Qualitaetsmanagements umfassen ...", topic: "Grundlagen", answers: [
                {text: "Kundenorientierung", correct: true, feedback: "Richtig! Der Kunde steht im Mittelpunkt."},
                {text: "Fuehrung", correct: true, feedback: "Richtig! Fuehrungskraefte sind verantwortlich."},
                {text: "Prozessorientierter Ansatz", correct: true, feedback: "Richtig! Prozesse verstehen."},
                {text: "Gewinnmaximierung", correct: false, feedback: "FALSCH: Kein QM-Grundsatz."}
            ]},
            {q: "3. Der Grundsatz 'Beziehungsmanagement' ...", topic: "Grundlagen", answers: [
                {text: "bezieht sich auf interessierte Parteien", correct: true, feedback: "Richtig! Stakeholder einbeziehen."},
                {text: "foerdert nachhaltigen Erfolg", correct: true, feedback: "Richtig! Langfristige Beziehungen."},
                {text: "umfasst Lieferantenbeziehungen", correct: true, feedback: "Richtig! Lieferanten als Partner."},
                {text: "gilt nur fuer Kundenbeziehungen", correct: false, feedback: "FALSCH: ALLE interessierte Parteien."}
            ]},
            {q: "4. Das Kano-Modell unterscheidet ...", topic: "Grundlagen", answers: [
                {text: "Basismerkmale", correct: true, feedback: "Richtig! Selbstverstaendliche Anforderungen."},
                {text: "Leistungsmerkmale", correct: true, feedback: "Richtig! Ausgesprochene Wuensche."},
                {text: "Begeisterungsmerkmale", correct: true, feedback: "Richtig! Ueberraschende Extras."},
                {text: "Kostenmerkmale", correct: false, feedback: "FALSCH: Kein Kano-Begriff."}
            ]},
            {q: "5. Basismerkmale im Kano-Modell ...", topic: "Grundlagen", answers: [
                {text: "werden als selbstverstaendlich vorausgesetzt", correct: true, feedback: "Richtig! Nicht explizit gefordert."},
                {text: "fuehren bei Nichterfuellung zu Unzufriedenheit", correct: true, feedback: "Richtig! Muss sein."},
                {text: "steigern bei Erfuellung nicht die Zufriedenheit", correct: true, feedback: "Richtig! Werden erwartet."},
                {text: "werden vom Kunden explizit gefordert", correct: false, feedback: "FALSCH: Meist nicht ausgesprochen."}
            ]},
            {q: "6. Bei der Bestimmung des Kontexts ...", topic: "Kapitel 4", answers: [
                {text: "sind interne Themen zu beruecksichtigen", correct: true, feedback: "Richtig! Interne Faktoren."},
                {text: "sind externe Themen zu beruecksichtigen", correct: true, feedback: "Richtig! Externe Faktoren."},
                {text: "ist die strategische Ausrichtung relevant", correct: true, feedback: "Richtig! Strategie einbeziehen."},
                {text: "ist nur die finanzielle Situation relevant", correct: false, feedback: "FALSCH: Viel mehr Aspekte."}
            ]},
            {q: "7. Externe Themen koennen sein ...", topic: "Kapitel 4", answers: [
                {text: "rechtliche Anforderungen", correct: true, feedback: "Richtig! Gesetze und Vorschriften."},
                {text: "technologische Entwicklungen", correct: true, feedback: "Richtig! Technischer Fortschritt."},
                {text: "Wettbewerbssituation", correct: true, feedback: "Richtig! Marktsituation."},
                {text: "Mitarbeiterqualifikation", correct: false, feedback: "FALSCH: Das ist INTERN."}
            ]},
            {q: "8. Ausschluesse von Normanforderungen ...", topic: "Kapitel 4", answers: [
                {text: "muessen begruendet werden", correct: true, feedback: "Richtig! Begruendung erforderlich."},
                {text: "duerfen die Konformitaet nicht beeintraechtigen", correct: true, feedback: "Richtig! Produktqualitaet sichern."},
                {text: "sind im Anwendungsbereich anzugeben", correct: true, feedback: "Richtig! Dokumentieren."},
                {text: "sind bei allen Kapiteln moeglich", correct: false, feedback: "FALSCH: Kapitel 4-6 nicht ausschliessbar."}
            ]},
            {q: "9. Die oberste Leitung muss bezueglich Fuehrung ...", topic: "Kapitel 5", answers: [
                {text: "Rechenschaftspflicht fuer QMS-Wirksamkeit uebernehmen", correct: true, feedback: "Richtig! Verantwortung."},
                {text: "Qualitaetspolitik und -ziele festlegen", correct: true, feedback: "Richtig! Richtung vorgeben."},
                {text: "Integration des QMS in Geschaeftsprozesse sicherstellen", correct: true, feedback: "Richtig! QMS einbetten."},
                {text: "alle operativen Taetigkeiten selbst ausfuehren", correct: false, feedback: "FALSCH: Delegation moeglich."}
            ]},
            {q: "10. Kundenorientierung nach Kapitel 5.1.2 bedeutet ...", topic: "Kapitel 5", answers: [
                {text: "Kundenanforderungen zu ermitteln", correct: true, feedback: "Richtig! Was will der Kunde."},
                {text: "Kundenzufriedenheit zu erhoehen", correct: true, feedback: "Richtig! Zufriedenheit steigern."},
                {text: "Risiken zu beruecksichtigen, die Konformitaet beeinflussen", correct: true, feedback: "Richtig! Risiken einbeziehen."},
                {text: "alle Kundenwuensche zu erfuellen", correct: false, feedback: "FALSCH: Nur RELEVANTE Anforderungen."}
            ]},
            {q: "11. Die Qualitaetspolitik muss ...", topic: "Kapitel 5", answers: [
                {text: "fuer den Zweck der Organisation angemessen sein", correct: true, feedback: "Richtig! Passend zur Organisation."},
                {text: "einen Rahmen fuer Qualitaetsziele bieten", correct: true, feedback: "Richtig! Ziele ableiten."},
                {text: "eine Verpflichtung zur fortlaufenden Verbesserung enthalten", correct: true, feedback: "Richtig! KVP verankern."},
                {text: "alle 6 Monate aktualisiert werden", correct: false, feedback: "FALSCH: Keine festen Intervalle."}
            ]},
            {q: "12. Rollen, Verantwortlichkeiten und Befugnisse ...", topic: "Kapitel 5", answers: [
                {text: "muessen zugewiesen werden", correct: true, feedback: "Richtig! Festlegung erforderlich."},
                {text: "muessen kommuniziert werden", correct: true, feedback: "Richtig! Allen bekannt machen."},
                {text: "muessen in der Organisation verstanden werden", correct: true, feedback: "Richtig! Verstaendnis sichern."},
                {text: "duerfen nur von externen Beratern festgelegt werden", correct: false, feedback: "FALSCH: Interne Aufgabe."}
            ]},
            {q: "13. Bei der Bestimmung von Risiken und Chancen ...", topic: "Kapitel 6", answers: [
                {text: "sind erwuenschte Ergebnisse zu beruecksichtigen", correct: true, feedback: "Richtig! Ziele einbeziehen."},
                {text: "sind unererwuenschte Auswirkungen zu verhindern", correct: true, feedback: "Richtig! Risiken minimieren."},
                {text: "ist fortlaufende Verbesserung anzustreben", correct: true, feedback: "Richtig! KVP foerdern."},
                {text: "ist eine vollstaendige Risikoliste vorgeschrieben", correct: false, feedback: "FALSCH: Nicht explizit gefordert."}
            ]},
            {q: "14. Qualitaetsziele muessen fuer relevante ...", topic: "Kapitel 6", answers: [
                {text: "Funktionen festgelegt werden", correct: true, feedback: "Richtig! Bereiche einbeziehen."},
                {text: "Ebenen festgelegt werden", correct: true, feedback: "Richtig! Hierarchie beruecksichtigen."},
                {text: "Prozesse festgelegt werden", correct: true, feedback: "Richtig! Prozessbezogen."},
                {text: "Mitarbeiter individuell festgelegt werden", correct: false, feedback: "FALSCH: Fuer Funktionen/Ebenen/Prozesse."}
            ]},
            {q: "15. Ressourcen nach Kapitel 7.1 umfassen ...", topic: "Kapitel 7", answers: [
                {text: "Personen", correct: true, feedback: "Richtig! Mitarbeiter."},
                {text: "Infrastruktur", correct: true, feedback: "Richtig! Gebaeude, Ausruestung."},
                {text: "Umgebung fuer die Durchfuehrung von Prozessen", correct: true, feedback: "Richtig! Arbeitsumgebung."},
                {text: "ausschliesslich finanzielle Mittel", correct: false, feedback: "FALSCH: Viel mehr als Geld."}
            ]},
            {q: "16. Die Umgebung fuer die Durchfuehrung von Prozessen kann ...", topic: "Kapitel 7", answers: [
                {text: "soziale Faktoren umfassen", correct: true, feedback: "Richtig! Soziales Umfeld."},
                {text: "psychologische Faktoren umfassen", correct: true, feedback: "Richtig! Arbeitsklima."},
                {text: "physikalische Faktoren umfassen", correct: true, feedback: "Richtig! Temperatur, Licht etc."},
                {text: "nur Temperatur und Beleuchtung betreffen", correct: false, feedback: "FALSCH: Auch soziale und psychologische."}
            ]},
            {q: "17. Rueckverfolgbarkeit von Messmitteln ...", topic: "Kapitel 7", answers: [
                {text: "erfordert Kalibrierung oder Verifizierung", correct: true, feedback: "Richtig! Genauigkeit sicherstellen."},
                {text: "erfordert Kennzeichnung des Kalibrierstatus", correct: true, feedback: "Richtig! Status erkennbar."},
                {text: "schuetzt vor Anpassungen, die Ergebnisse ungueltig machen", correct: true, feedback: "Richtig! Manipulation verhindern."},
                {text: "ist nur bei Produktion erforderlich", correct: false, feedback: "FALSCH: Bei ALLEN relevanten Messungen."}
            ]},
            {q: "18. Das Wissen der Organisation ...", topic: "Kapitel 7", answers: [
                {text: "ist spezifisch fuer die Organisation", correct: true, feedback: "Richtig! Organisationseigenes Wissen."},
                {text: "wird aus Erfahrung gewonnen", correct: true, feedback: "Richtig! Praxiswissen."},
                {text: "muss bei veraenderten Anforderungen angepasst werden", correct: true, feedback: "Richtig! Aktualisierung noetig."},
                {text: "umfasst nur technische Informationen", correct: false, feedback: "FALSCH: Auch Prozesswissen etc."}
            ]},
            {q: "19. Externe Kommunikation nach 7.4 ...", topic: "Kapitel 7", answers: [
                {text: "erfordert Festlegung von Was kommuniziert wird", correct: true, feedback: "Richtig! Inhalt bestimmen."},
                {text: "erfordert Festlegung von Wann kommuniziert wird", correct: true, feedback: "Richtig! Zeitpunkt."},
                {text: "erfordert Festlegung von Mit wem kommuniziert wird", correct: true, feedback: "Richtig! Zielgruppe."},
                {text: "ist nur bei Reklamationen noetig", correct: false, feedback: "FALSCH: Generell zu planen."}
            ]},
            {q: "20. Bei der Bewertung von Kundenanforderungen ...", topic: "Kapitel 8", answers: [
                {text: "sind gesetzliche Anforderungen einzubeziehen", correct: true, feedback: "Richtig! Rechtliche Vorgaben."},
                {text: "sind eigene Anforderungen der Organisation einzubeziehen", correct: true, feedback: "Richtig! Interne Standards."},
                {text: "muss die Erfuellbarkeit geprueft werden", correct: true, feedback: "Richtig! Machbarkeit bewerten."},
                {text: "sind nur schriftliche Anforderungen relevant", correct: false, feedback: "FALSCH: Auch muendliche und implizite."}
            ]},
            {q: "21. Die Entwicklungsplanung (8.3.2) beruecksichtigt ...", topic: "Kapitel 8", answers: [
                {text: "Art, Dauer und Komplexitaet", correct: true, feedback: "Richtig! Entwicklungsumfang."},
                {text: "erforderliche Prozessabschnitte", correct: true, feedback: "Richtig! Entwicklungsphasen."},
                {text: "Verantwortlichkeiten und Befugnisse", correct: true, feedback: "Richtig! Zustaendigkeiten."},
                {text: "nur zeitliche Aspekte", correct: false, feedback: "FALSCH: Viele weitere Aspekte."}
            ]},
            {q: "22. Entwicklungseingaben umfassen ...", topic: "Kapitel 8", answers: [
                {text: "funktionale und Leistungsanforderungen", correct: true, feedback: "Richtig! Was muss es koennen."},
                {text: "gesetzliche Anforderungen", correct: true, feedback: "Richtig! Rechtliche Vorgaben."},
                {text: "fruehere Entwicklungstaetigkeiten", correct: true, feedback: "Richtig! Erfahrungen nutzen."},
                {text: "nur Kundenvorgaben", correct: false, feedback: "FALSCH: Auch interne und rechtliche."}
            ]},
            {q: "23. Die Steuerung extern bereitgestellter Prozesse ...", topic: "Kapitel 8", answers: [
                {text: "haengt von der Auswirkung auf die Konformitaet ab", correct: true, feedback: "Richtig! Risikobasiert."},
                {text: "erfordert Kriterien fuer Bewertung und Auswahl", correct: true, feedback: "Richtig! Lieferantenbewertung."},
                {text: "umfasst Pruefungen oder andere Taetigkeiten", correct: true, feedback: "Richtig! Wareneingangspruefung etc."},
                {text: "kann vollstaendig an den Lieferanten uebertragen werden", correct: false, feedback: "FALSCH: Verantwortung bleibt."}
            ]},
            {q: "24. Art und Umfang der Steuerung von Lieferanten ...", topic: "Kapitel 8", answers: [
                {text: "haengt von der Faehigkeit des Lieferanten ab", correct: true, feedback: "Richtig! Lieferantenleistung."},
                {text: "haengt von der Auswirkung auf die Konformitaet ab", correct: true, feedback: "Richtig! Kritikalitaet."},
                {text: "muss festgelegt werden", correct: true, feedback: "Richtig! Definierte Steuerung."},
                {text: "ist bei allen Lieferanten identisch", correct: false, feedback: "FALSCH: Risikobasiert unterschiedlich."}
            ]},
            {q: "25. Produktion und Dienstleistungserbringung unter beherrschten Bedingungen ...", topic: "Kapitel 8", answers: [
                {text: "erfordert dokumentierte Informationen", correct: true, feedback: "Richtig! Arbeitsanweisungen etc."},
                {text: "erfordert geeignete Infrastruktur", correct: true, feedback: "Richtig! Ausruestung."},
                {text: "erfordert kompetentes Personal", correct: true, feedback: "Richtig! Qualifizierte Mitarbeiter."},
                {text: "muss nicht ueberwacht werden", correct: false, feedback: "FALSCH: Ueberwachung ist gefordert."}
            ]},
            {q: "26. Validierung von Prozessen ...", topic: "Kapitel 8", answers: [
                {text: "ist erforderlich, wenn das Ergebnis nicht verifiziert werden kann", correct: true, feedback: "Richtig! Wenn Pruefung nicht moeglich."},
                {text: "erfordert Kriterien fuer Bewertung", correct: true, feedback: "Richtig! Bewertungskriterien."},
                {text: "erfordert Qualifikation der Personen", correct: true, feedback: "Richtig! Kompetente Durchfuehrung."},
                {text: "ist bei allen Prozessen erforderlich", correct: false, feedback: "FALSCH: Nur wenn Verifizierung nicht moeglich."}
            ]},
            {q: "27. Umgang mit nichtkonformen Ergebnissen ...", topic: "Kapitel 8", answers: [
                {text: "kann Korrektur beinhalten", correct: true, feedback: "Richtig! Fehler beheben."},
                {text: "kann Absonderung beinhalten", correct: true, feedback: "Richtig! Trennung."},
                {text: "kann Sonderfreigabe beinhalten", correct: true, feedback: "Richtig! Mit Genehmigung freigeben."},
                {text: "muss immer zur Verschrottung fuehren", correct: false, feedback: "FALSCH: Verschiedene Moeglichkeiten."}
            ]},
            {q: "28. Bei Sonderfreigabe (Abweichungsgenehmigung) ...", topic: "Kapitel 8", answers: [
                {text: "muss eine befugte Person genehmigen", correct: true, feedback: "Richtig! Autorisierung erforderlich."},
                {text: "kann der Kunde einbezogen werden", correct: true, feedback: "Richtig! Falls relevant."},
                {text: "ist die Nichtkonformitaet zu dokumentieren", correct: true, feedback: "Richtig! Nachweis fuehren."},
                {text: "entfaellt jede Dokumentation", correct: false, feedback: "FALSCH: Dokumentation ist Pflicht."}
            ]},
            {q: "29. Die Methoden zur Ermittlung der Kundenzufriedenheit ...", topic: "Kapitel 9", answers: [
                {text: "muessen festgelegt werden", correct: true, feedback: "Richtig! Methode bestimmen."},
                {text: "koennen Umfragen beinhalten", correct: true, feedback: "Richtig! Kundenbefragung."},
                {text: "koennen Reklamationsanalysen beinhalten", correct: true, feedback: "Richtig! Beschwerden auswerten."},
                {text: "sind detailliert in der Norm beschrieben", correct: false, feedback: "FALSCH: Organisation waehlt selbst."}
            ]},
            {q: "30. Das interne Audit muss ...", topic: "Kapitel 9", answers: [
                {text: "in geplanten Abstaenden durchgefuehrt werden", correct: true, feedback: "Richtig! Regelmaessig."},
                {text: "Normkonformitaet pruefen", correct: true, feedback: "Richtig! ISO 9001 Erfuellung."},
                {text: "eigene Anforderungen der Organisation pruefen", correct: true, feedback: "Richtig! Interne Vorgaben."},
                {text: "von externen Auditoren durchgefuehrt werden", correct: false, feedback: "FALSCH: INTERNE Auditoren."}
            ]},
            {q: "31. Das Auditprogramm beruecksichtigt ...", topic: "Kapitel 9", answers: [
                {text: "Wichtigkeit der betreffenden Prozesse", correct: true, feedback: "Richtig! Kritische Prozesse."},
                {text: "Ergebnisse vorheriger Audits", correct: true, feedback: "Richtig! Auditerfahrung."},
                {text: "Aenderungen mit Auswirkung auf die Organisation", correct: true, feedback: "Richtig! Veraenderungen."},
                {text: "nur die Terminplanung", correct: false, feedback: "FALSCH: Viele weitere Faktoren."}
            ]},
            {q: "32. Auditorenauswahl muss ...", topic: "Kapitel 9", answers: [
                {text: "Objektivitaet sicherstellen", correct: true, feedback: "Richtig! Unparteilichkeit."},
                {text: "Unparteilichkeit sicherstellen", correct: true, feedback: "Richtig! Keine Interessenkonflikte."},
                {text: "das Auditieren des eigenen Bereichs vermeiden", correct: true, feedback: "Richtig! Keine Selbstpruefung."},
                {text: "nur externe Auditoren umfassen", correct: false, feedback: "FALSCH: Interne sind gefordert."}
            ]},
            {q: "33. Die Managementbewertung als Eingabe ...", topic: "Kapitel 9", answers: [
                {text: "Status von Massnahmen aus vorherigen Bewertungen", correct: true, feedback: "Richtig! Fortschritt pruefen."},
                {text: "Veraenderungen bei externen und internen Themen", correct: true, feedback: "Richtig! Kontextaenderungen."},
                {text: "Informationen ueber QMS-Leistung", correct: true, feedback: "Richtig! Kennzahlen."},
                {text: "Personalbeurteilungen", correct: false, feedback: "FALSCH: Nicht Teil der Bewertung."}
            ]},
            {q: "34. Ergebnisse der Managementbewertung umfassen ...", topic: "Kapitel 9", answers: [
                {text: "Verbesserungsmoeglichkeiten", correct: true, feedback: "Richtig! KVP-Potenziale."},
                {text: "Aenderungsbedarf am QMS", correct: true, feedback: "Richtig! Was muss angepasst werden."},
                {text: "Ressourcenbedarf", correct: true, feedback: "Richtig! Was wird benoetigt."},
                {text: "detaillierte Arbeitsanweisungen", correct: false, feedback: "FALSCH: Nicht Teil der Ergebnisse."}
            ]},
            {q: "35. Bei Nichtkonformitaet muss die Organisation ...", topic: "Kapitel 10", answers: [
                {text: "darauf reagieren", correct: true, feedback: "Richtig! Sofortmassnahme."},
                {text: "die Ursache bewerten", correct: true, feedback: "Richtig! Ursachenanalyse."},
                {text: "aehnliche Nichtkonformitaeten pruefen", correct: true, feedback: "Richtig! Breitere Analyse."},
                {text: "alle Produkte zurueckrufen", correct: false, feedback: "FALSCH: Nicht immer erforderlich."}
            ]},
            {q: "36. Korrekturmassnahmen muessen ...", topic: "Kapitel 10", answers: [
                {text: "den Auswirkungen angemessen sein", correct: true, feedback: "Richtig! Verhaeltnismaessigkeit."},
                {text: "auf Wirksamkeit geprueft werden", correct: true, feedback: "Richtig! Wirksamkeitspruefung."},
                {text: "bei Bedarf das QMS aendern", correct: true, feedback: "Richtig! Systemanpassung."},
                {text: "immer zu Dokumentationsaenderungen fuehren", correct: false, feedback: "FALSCH: Nicht zwingend."}
            ]},
            {q: "37. D4 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "ist die Ursachenanalyse", correct: true, feedback: "Richtig! Root Cause Analysis."},
                {text: "identifiziert die Grundursache", correct: true, feedback: "Richtig! Warum ist es passiert."},
                {text: "nutzt Methoden wie 5-Why", correct: true, feedback: "Richtig! Analysetechniken."},
                {text: "implementiert Dauermassnahmen", correct: false, feedback: "FALSCH: Das ist D5/D6."}
            ]},
            {q: "38. D5 und D6 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "betreffen Dauermassnahmen", correct: true, feedback: "Richtig! Permanent Corrective Actions."},
                {text: "D5 waehlt Massnahmen aus", correct: true, feedback: "Richtig! Auswahl treffen."},
                {text: "D6 implementiert Massnahmen", correct: true, feedback: "Richtig! Umsetzung."},
                {text: "ersetzen die Sofortmassnahmen nicht", correct: false, feedback: "FALSCH: Sie ERSETZEN D3 nach Verifizierung."}
            ]},
            {q: "39. D7 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "sind Vorbeugungsmassnahmen", correct: true, feedback: "Richtig! Preventive Actions."},
                {text: "verhindern Wiederholung aehnlicher Fehler", correct: true, feedback: "Richtig! Breitere Anwendung."},
                {text: "koennen Systemanpassungen umfassen", correct: true, feedback: "Richtig! Prozessaenderungen."},
                {text: "sind optional", correct: false, feedback: "FALSCH: Wichtiger Bestandteil."}
            ]},
            {q: "40. Ein Prozessaudit ...", topic: "Audit", answers: [
                {text: "prueft einzelne Prozesse", correct: true, feedback: "Richtig! Prozessfokus."},
                {text: "bewertet Prozesswirksamkeit", correct: true, feedback: "Richtig! Funktioniert der Prozess."},
                {text: "kann Teil eines Systemaudits sein", correct: true, feedback: "Richtig! Integration moeglich."},
                {text: "ist identisch mit dem Systemaudit", correct: false, feedback: "FALSCH: Unterschiedlicher Fokus."}
            ]},
            {q: "41. Ein Produktaudit ...", topic: "Audit", answers: [
                {text: "prueft Produkte gegen Spezifikationen", correct: true, feedback: "Richtig! Produktkonformitaet."},
                {text: "kann fertige Produkte betreffen", correct: true, feedback: "Richtig! Endprodukte."},
                {text: "kann Zwischenprodukte betreffen", correct: true, feedback: "Richtig! Halbfertige Produkte."},
                {text: "ersetzt die normale Qualitaetspruefung", correct: false, feedback: "FALSCH: Ergaenzend."}
            ]},
            {q: "42. Stufe 2 des Zertifizierungsaudits ...", topic: "Audit", answers: [
                {text: "ist das Vor-Ort-Audit", correct: true, feedback: "Richtig! Im Unternehmen."},
                {text: "prueft die Implementierung", correct: true, feedback: "Richtig! Ist das QMS umgesetzt."},
                {text: "prueft die Wirksamkeit", correct: true, feedback: "Richtig! Funktioniert es."},
                {text: "basiert nur auf Dokumentation", correct: false, feedback: "FALSCH: Vor-Ort-Pruefung."}
            ]},
            {q: "43. Ueberwachungsaudits ...", topic: "Audit", answers: [
                {text: "finden jaehrlich statt", correct: true, feedback: "Richtig! Einmal pro Jahr."},
                {text: "pruefen die fortlaufende Normkonformitaet", correct: true, feedback: "Richtig! Weiterhin konform."},
                {text: "haben geringeren Umfang als Zertifizierungsaudits", correct: true, feedback: "Richtig! Stichprobenartig."},
                {text: "ersetzen das Rezertifizierungsaudit", correct: false, feedback: "FALSCH: Zusaetzlich zum Rezertifizierungsaudit."}
            ]},
            {q: "44. Die Rezertifizierung ...", topic: "Audit", answers: [
                {text: "findet alle 3 Jahre statt", correct: true, feedback: "Richtig! Nach Zertifikatslaufzeit."},
                {text: "prueft das gesamte QMS", correct: true, feedback: "Richtig! Vollstaendige Pruefung."},
                {text: "erneuert das Zertifikat", correct: true, feedback: "Richtig! Neues Zertifikat."},
                {text: "ist ein verkuerztes Audit", correct: false, feedback: "FALSCH: Umfangreich wie Erstzertifizierung."}
            ]},
            {q: "45. Soziale Beduerfnisse nach Maslow ...", topic: "Motivation", answers: [
                {text: "umfassen Zugehoerigkeit", correct: true, feedback: "Richtig! Teil einer Gruppe sein."},
                {text: "umfassen Liebe und Freundschaft", correct: true, feedback: "Richtig! Zwischenmenschliche Beziehungen."},
                {text: "stehen auf der dritten Stufe", correct: true, feedback: "Richtig! Nach Grund- und Sicherheitsbeduerfnissen."},
                {text: "stehen an der Spitze der Pyramide", correct: false, feedback: "FALSCH: Selbstverwirklichung ist an der Spitze."}
            ]}
        ]
    },
    "pruefung_simulation_4": {
        title: "Pruefungssimulation 4 - Komplette Pruefung (45 Fragen)",
        questions: [
            {q: "1. Die ISO 9001:2015 ersetzt ...", topic: "Grundlagen", answers: [
                {text: "die ISO 9001:2008", correct: true, feedback: "Richtig! Vorheriger Standard."},
                {text: "das QM-Handbuch als Pflichtdokument", correct: true, feedback: "Richtig! Nicht mehr explizit gefordert."},
                {text: "den Begriff 'Beauftragter der obersten Leitung'", correct: true, feedback: "Richtig! Nicht mehr verwendet."},
                {text: "alle anderen Managementnormen", correct: false, feedback: "FALSCH: Ergaenzend zu anderen Normen."}
            ]},
            {q: "2. Der Grundsatz 'Engagement von Personen' ...", topic: "Grundlagen", answers: [
                {text: "betont die Einbeziehung aller Mitarbeiter", correct: true, feedback: "Richtig! Alle mitnehmen."},
                {text: "foerdert Kompetenz und Befaehigung", correct: true, feedback: "Richtig! Mitarbeiter entwickeln."},
                {text: "staerkt die Eigenverantwortung", correct: true, feedback: "Richtig! Verantwortung uebernehmen."},
                {text: "gilt nur fuer Fuehrungskraefte", correct: false, feedback: "FALSCH: ALLE Ebenen."}
            ]},
            {q: "3. Der Grundsatz 'Faktenbezogene Entscheidungsfindung' ...", topic: "Grundlagen", answers: [
                {text: "basiert auf Datenanalyse", correct: true, feedback: "Richtig! Daten nutzen."},
                {text: "beruecksichtigt Ursache-Wirkungs-Beziehungen", correct: true, feedback: "Richtig! Zusammenhaenge verstehen."},
                {text: "nutzt geeignete Methoden", correct: true, feedback: "Richtig! Analysemethoden."},
                {text: "verlaesst sich auf Bauchgefuehl", correct: false, feedback: "FALSCH: FAKTEN, nicht Gefuehl."}
            ]},
            {q: "4. Leistungsmerkmale im Kano-Modell ...", topic: "Grundlagen", answers: [
                {text: "werden vom Kunden explizit gefordert", correct: true, feedback: "Richtig! Ausgesprochene Anforderungen."},
                {text: "fuehren proportional zur Zufriedenheit", correct: true, feedback: "Richtig! Je mehr, desto zufriedener."},
                {text: "sind messbar und vergleichbar", correct: true, feedback: "Richtig! Benchmark-faehig."},
                {text: "werden nicht kommuniziert", correct: false, feedback: "FALSCH: Sie WERDEN ausgesprochen."}
            ]},
            {q: "5. Der Prozessansatz ...", topic: "Grundlagen", answers: [
                {text: "betrachtet Taetigkeiten als zusammenhaengende Prozesse", correct: true, feedback: "Richtig! Prozessdenken."},
                {text: "ermoeglicht konsistente Ergebnisse", correct: true, feedback: "Richtig! Vorhersehbare Ergebnisse."},
                {text: "optimiert die Gesamtleistung", correct: true, feedback: "Richtig! Systemoptimierung."},
                {text: "arbeitet in isolierten Abteilungen", correct: false, feedback: "FALSCH: Uebergreifend."}
            ]},
            {q: "6. Interne Themen des Kontexts koennen sein ...", topic: "Kapitel 4", answers: [
                {text: "Werte und Kultur", correct: true, feedback: "Richtig! Unternehmenskultur."},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig! Know-how."},
                {text: "Leistung der Organisation", correct: true, feedback: "Richtig! Performance."},
                {text: "Wettbewerber", correct: false, feedback: "FALSCH: Wettbewerber sind EXTERN."}
            ]},
            {q: "7. Die Anforderungen interessierter Parteien ...", topic: "Kapitel 4", answers: [
                {text: "muessen bestimmt werden", correct: true, feedback: "Richtig! Ermittlung erforderlich."},
                {text: "muessen ueberwacht werden", correct: true, feedback: "Richtig! Regelmaessige Pruefung."},
                {text: "koennen sich aendern", correct: true, feedback: "Richtig! Dynamisch."},
                {text: "sind immer statisch", correct: false, feedback: "FALSCH: Sie VERAENDERN sich."}
            ]},
            {q: "8. Das QMS muss ...", topic: "Kapitel 4", answers: [
                {text: "eingefuehrt werden", correct: true, feedback: "Richtig! Implementierung."},
                {text: "verwirklicht werden", correct: true, feedback: "Richtig! Umsetzung."},
                {text: "aufrechterhalten und verbessert werden", correct: true, feedback: "Richtig! Pflege und KVP."},
                {text: "extern entwickelt werden", correct: false, feedback: "FALSCH: Intern entwickeln."}
            ]},
            {q: "9. Wechselwirkungen zwischen Prozessen ...", topic: "Kapitel 4", answers: [
                {text: "muessen bestimmt werden", correct: true, feedback: "Richtig! Zusammenhaenge identifizieren."},
                {text: "zeigen Abhaengigkeiten auf", correct: true, feedback: "Richtig! Verbindungen erkennen."},
                {text: "sind fuer das QMS relevant", correct: true, feedback: "Richtig! Systembetrachtung."},
                {text: "duerfen ignoriert werden", correct: false, feedback: "FALSCH: Muessen beruecksichtigt werden."}
            ]},
            {q: "10. Die oberste Leitung zeigt Fuehrung durch ...", topic: "Kapitel 5", answers: [
                {text: "Foerderung des prozessorientierten Ansatzes", correct: true, feedback: "Richtig! Prozessdenken foerdern."},
                {text: "Foerderung des risikobasierten Denkens", correct: true, feedback: "Richtig! Risikobewusstsein."},
                {text: "Unterstuetzung anderer Fuehrungskraefte", correct: true, feedback: "Richtig! Delegation."},
                {text: "Auslagerung aller QM-Aufgaben", correct: false, feedback: "FALSCH: Verantwortung nicht abgebbar."}
            ]},
            {q: "11. Die Qualitaetspolitik enthaelt ...", topic: "Kapitel 5", answers: [
                {text: "Verpflichtung zur Erfuellung von Anforderungen", correct: true, feedback: "Richtig! Anforderungen erfuellen."},
                {text: "Verpflichtung zur fortlaufenden Verbesserung", correct: true, feedback: "Richtig! KVP."},
                {text: "Rahmen fuer Qualitaetsziele", correct: true, feedback: "Richtig! Zielableitung."},
                {text: "detaillierte Arbeitsanweisungen", correct: false, feedback: "FALSCH: Strategische Ebene."}
            ]},
            {q: "12. Verantwortlichkeiten und Befugnisse werden zugewiesen fuer ...", topic: "Kapitel 5", answers: [
                {text: "QMS-Konformitaet sicherstellen", correct: true, feedback: "Richtig! Normerfuellung."},
                {text: "Prozessleistung berichten", correct: true, feedback: "Richtig! Berichterstattung."},
                {text: "Kundenorientierung foerdern", correct: true, feedback: "Richtig! Kundenfokus."},
                {text: "externe Audits durchfuehren", correct: false, feedback: "FALSCH: Externe Aufgabe."}
            ]},
            {q: "13. Massnahmen zum Umgang mit Risiken und Chancen ...", topic: "Kapitel 6", answers: [
                {text: "muessen geplant werden", correct: true, feedback: "Richtig! Planung erforderlich."},
                {text: "muessen umgesetzt werden", correct: true, feedback: "Richtig! Umsetzung."},
                {text: "muessen auf Wirksamkeit bewertet werden", correct: true, feedback: "Richtig! Wirksamkeitspruefung."},
                {text: "sind nur bei kritischen Prozessen noetig", correct: false, feedback: "FALSCH: Systematisch fuer alle."}
            ]},
            {q: "14. Bei der Planung von Qualitaetszielen ist festzulegen ...", topic: "Kapitel 6", answers: [
                {text: "was getan wird", correct: true, feedback: "Richtig! Massnahmen."},
                {text: "welche Ressourcen benoetigt werden", correct: true, feedback: "Richtig! Mittel."},
                {text: "wie Ergebnisse bewertet werden", correct: true, feedback: "Richtig! Erfolgsmessung."},
                {text: "wer das Ziel erreicht haben muss", correct: false, feedback: "FALSCH: WER verantwortlich ist."}
            ]},
            {q: "15. Personen muessen kompetent sein auf Grundlage ...", topic: "Kapitel 7", answers: [
                {text: "angemessener Ausbildung", correct: true, feedback: "Richtig! Formale Qualifikation."},
                {text: "Schulung", correct: true, feedback: "Richtig! Weiterbildung."},
                {text: "Erfahrung", correct: true, feedback: "Richtig! Praxiserfahrung."},
                {text: "Dienstalter", correct: false, feedback: "FALSCH: Kompetenz, nicht Dauer."}
            ]},
            {q: "16. Wenn erforderliche Kompetenz fehlt ...", topic: "Kapitel 7", answers: [
                {text: "muss Schulung erfolgen", correct: true, feedback: "Richtig! Qualifizieren."},
                {text: "kann Mentoring angeboten werden", correct: true, feedback: "Richtig! Begleitung."},
                {text: "kann Personal versetzt werden", correct: true, feedback: "Richtig! Aufgabenwechsel."},
                {text: "ist keine Massnahme erforderlich", correct: false, feedback: "FALSCH: Massnahme ist PFLICHT."}
            ]},
            {q: "17. Dokumentierte Information muss gelenkt werden hinsichtlich ...", topic: "Kapitel 7", answers: [
                {text: "Verteilung und Zugriff", correct: true, feedback: "Richtig! Verfuegbarkeit."},
                {text: "Abruf und Verwendung", correct: true, feedback: "Richtig! Nutzung."},
                {text: "Ablage und Erhaltung", correct: true, feedback: "Richtig! Archivierung."},
                {text: "nur elektronischer Speicherung", correct: false, feedback: "FALSCH: Alle Medien."}
            ]},
            {q: "18. Externe dokumentierte Information ...", topic: "Kapitel 7", answers: [
                {text: "muss identifiziert werden", correct: true, feedback: "Richtig! Kennzeichnung."},
                {text: "muss angemessen gesteuert werden", correct: true, feedback: "Richtig! Lenkung."},
                {text: "kann Kundenspezifikationen umfassen", correct: true, feedback: "Richtig! Kundendokumente."},
                {text: "ist nicht relevant fuer das QMS", correct: false, feedback: "FALSCH: Sehr relevant."}
            ]},
            {q: "19. Bei der Bewertung von Anforderungen ...", topic: "Kapitel 8", answers: [
                {text: "sind Abweichungen zwischen Vertrag und Angebot zu klaeren", correct: true, feedback: "Richtig! Differenzen besprechen."},
                {text: "ist die Faehigkeit zur Erfuellung zu pruefen", correct: true, feedback: "Richtig! Machbarkeit."},
                {text: "muessen Ergebnisse dokumentiert werden", correct: true, feedback: "Richtig! Nachweis."},
                {text: "genuegt eine muendliche Zusage", correct: false, feedback: "FALSCH: Dokumentation gefordert."}
            ]},
            {q: "20. Aenderungen an Anforderungen ...", topic: "Kapitel 8", answers: [
                {text: "muessen kommuniziert werden", correct: true, feedback: "Richtig! Information weitergeben."},
                {text: "erfordern Anpassung dokumentierter Information", correct: true, feedback: "Richtig! Dokumentation aktualisieren."},
                {text: "muessen bewertet werden", correct: true, feedback: "Richtig! Auswirkungen pruefen."},
                {text: "sind nicht zu dokumentieren", correct: false, feedback: "FALSCH: Dokumentation erforderlich."}
            ]},
            {q: "21. Entwicklungsergebnisse muessen ...", topic: "Kapitel 8", answers: [
                {text: "Eingabeanforderungen erfuellen", correct: true, feedback: "Richtig! Anforderungen umsetzen."},
                {text: "fuer nachfolgende Prozesse geeignet sein", correct: true, feedback: "Richtig! Umsetzbarkeit."},
                {text: "Ueberwachungs- und Messkritierien enthalten", correct: true, feedback: "Richtig! Pruefkriterien."},
                {text: "nur muendlich weitergegeben werden", correct: false, feedback: "FALSCH: Dokumentation noetig."}
            ]},
            {q: "22. Entwicklungsaenderungen ...", topic: "Kapitel 8", answers: [
                {text: "muessen identifiziert werden", correct: true, feedback: "Richtig! Erfassen."},
                {text: "muessen geprueft und verifiziert werden", correct: true, feedback: "Richtig! Kontrolle."},
                {text: "benoetigen Genehmigung vor Umsetzung", correct: true, feedback: "Richtig! Freigabe."},
                {text: "duerfen jederzeit ohne Pruefung erfolgen", correct: false, feedback: "FALSCH: Pruefung ist Pflicht."}
            ]},
            {q: "23. Informationen an externe Anbieter umfassen ...", topic: "Kapitel 8", answers: [
                {text: "Anforderungen an Produkte und Dienstleistungen", correct: true, feedback: "Richtig! Was wird erwartet."},
                {text: "Anforderungen an Qualifikation von Personen", correct: true, feedback: "Richtig! Kompetenz."},
                {text: "Interaktion mit dem QMS der Organisation", correct: true, feedback: "Richtig! Schnittstellen."},
                {text: "nur Preisverhandlungen", correct: false, feedback: "FALSCH: Viel mehr Informationen."}
            ]},
            {q: "24. Die Erhaltung von Produkten (8.5.4) ...", topic: "Kapitel 8", answers: [
                {text: "umfasst Kennzeichnung", correct: true, feedback: "Richtig! Identifikation."},
                {text: "umfasst Handhabung", correct: true, feedback: "Richtig! Umgang."},
                {text: "umfasst Verpackung und Lagerung", correct: true, feedback: "Richtig! Schutz."},
                {text: "gilt nur fuer fertige Produkte", correct: false, feedback: "FALSCH: Auch Zwischenprodukte."}
            ]},
            {q: "25. Nach der Lieferung kann erforderlich sein ...", topic: "Kapitel 8", answers: [
                {text: "Gewaehrleistungsleistungen", correct: true, feedback: "Richtig! Garantie."},
                {text: "Wartung und Instandhaltung", correct: true, feedback: "Richtig! Service."},
                {text: "Recycling und Entsorgung", correct: true, feedback: "Richtig! End-of-Life."},
                {text: "keine weiteren Taetigkeiten", correct: false, feedback: "FALSCH: Oft noch Aufgaben."}
            ]},
            {q: "26. Aenderungen an Produktion oder Dienstleistung ...", topic: "Kapitel 8", answers: [
                {text: "muessen bewertet werden", correct: true, feedback: "Richtig! Auswirkungen pruefen."},
                {text: "muessen genehmigt werden", correct: true, feedback: "Richtig! Freigabe."},
                {text: "erfordern Massnahmen zur Konformitaetssicherung", correct: true, feedback: "Richtig! Qualitaet sichern."},
                {text: "duerfen ohne Dokumentation erfolgen", correct: false, feedback: "FALSCH: Dokumentation erforderlich."}
            ]},
            {q: "27. Die FMEA bewertet Fehler nach ...", topic: "FMEA", answers: [
                {text: "Bedeutung fuer den Kunden", correct: true, feedback: "Richtig! Schwere."},
                {text: "Wahrscheinlichkeit des Auftretens", correct: true, feedback: "Richtig! Haeufigkeit."},
                {text: "Wahrscheinlichkeit der Entdeckung", correct: true, feedback: "Richtig! Erkennung."},
                {text: "Kosten der Behebung", correct: false, feedback: "FALSCH: Nicht in RPZ-Berechnung."}
            ]},
            {q: "28. Bei hoher RPZ ...", topic: "FMEA", answers: [
                {text: "sind Massnahmen erforderlich", correct: true, feedback: "Richtig! Handlungsbedarf."},
                {text: "hat die Risikominderung Prioritaet", correct: true, feedback: "Richtig! Vorrang."},
                {text: "wird nach Massnahmen die RPZ neu berechnet", correct: true, feedback: "Richtig! Neuberechnung."},
                {text: "ist keine Aktion noetig", correct: false, feedback: "FALSCH: Massnahmen sind Pflicht."}
            ]},
            {q: "29. D1 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "ist die Teambildung", correct: true, feedback: "Richtig! Team zusammenstellen."},
                {text: "waehlt kompetente Teammitglieder", correct: true, feedback: "Richtig! Richtige Leute."},
                {text: "definiert Rollen im Team", correct: true, feedback: "Richtig! Aufgabenverteilung."},
                {text: "loest das Problem sofort", correct: false, feedback: "FALSCH: Das ist D3."}
            ]},
            {q: "30. D2 im 8D-Report ...", topic: "8D-Report", answers: [
                {text: "beschreibt das Problem", correct: true, feedback: "Richtig! Problembeschreibung."},
                {text: "nutzt W-Fragen (Wer, Was, Wann, Wo)", correct: true, feedback: "Richtig! Systematische Erfassung."},
                {text: "quantifiziert das Problem", correct: true, feedback: "Richtig! Ausmass bestimmen."},
                {text: "implementiert Korrekturmassnahmen", correct: false, feedback: "FALSCH: Das ist D5/D6."}
            ]},
            {q: "31. Der Auditbericht ...", topic: "Audit", answers: [
                {text: "dokumentiert Auditfeststellungen", correct: true, feedback: "Richtig! Ergebnisse festhalten."},
                {text: "enthaelt Auditschlussfolgerungen", correct: true, feedback: "Richtig! Fazit."},
                {text: "wird dem Auditauftraggeber bereitgestellt", correct: true, feedback: "Richtig! Berichterstattung."},
                {text: "bleibt vertraulich gegenueber der auditierten Organisation", correct: false, feedback: "FALSCH: Auditierter erhaelt Bericht."}
            ]},
            {q: "32. Auditfeststellungen koennen sein ...", topic: "Audit", answers: [
                {text: "Konformitaeten", correct: true, feedback: "Richtig! Positive Feststellungen."},
                {text: "Nichtkonformitaeten", correct: true, feedback: "Richtig! Abweichungen."},
                {text: "Verbesserungsmoeglichkeiten", correct: true, feedback: "Richtig! Empfehlungen."},
                {text: "nur Fehler", correct: false, feedback: "FALSCH: Auch positive Aspekte."}
            ]},
            {q: "33. Die Auditorenkompetenz nach ISO 19011 umfasst ...", topic: "Audit", answers: [
                {text: "persoenliches Verhalten", correct: true, feedback: "Richtig! Auftreten."},
                {text: "Wissen und Fertigkeiten", correct: true, feedback: "Richtig! Know-how."},
                {text: "Ausbildung und Erfahrung", correct: true, feedback: "Richtig! Qualifikation."},
                {text: "nur technisches Fachwissen", correct: false, feedback: "FALSCH: Auch Soft Skills."}
            ]},
            {q: "34. Grundsaetze des Auditierens nach ISO 19011 ...", topic: "Audit", answers: [
                {text: "Integritaet", correct: true, feedback: "Richtig! Ehrlichkeit."},
                {text: "Sachliche Darstellung", correct: true, feedback: "Richtig! Objektivitaet."},
                {text: "Vertraulichkeit", correct: true, feedback: "Richtig! Diskretion."},
                {text: "Schnelligkeit", correct: false, feedback: "FALSCH: Kein Auditgrundsatz."}
            ]},
            {q: "35. Akkreditierung bedeutet ...", topic: "Audit", answers: [
                {text: "formelle Anerkennung der Kompetenz", correct: true, feedback: "Richtig! Kompetenzbestaetigung."},
                {text: "Zertifizierungsstellen werden akkreditiert", correct: true, feedback: "Richtig! CB-Anerkennung."},
                {text: "nationale Akkreditierungsstellen sind zustaendig", correct: true, feedback: "Richtig! DAkkS in Deutschland."},
                {text: "ist dasselbe wie Zertifizierung", correct: false, feedback: "FALSCH: Verschiedene Ebenen."}
            ]},
            {q: "36. Nonverbale Kommunikation ...", topic: "Kommunikation", answers: [
                {text: "umfasst Koerpersprache", correct: true, feedback: "Richtig! Gestik, Mimik."},
                {text: "macht einen grossen Teil der Kommunikation aus", correct: true, feedback: "Richtig! Oft ueber 50%."},
                {text: "ist Teil des Eisbergmodells", correct: true, feedback: "Richtig! Unter der Oberflaeche."},
                {text: "ist unwichtig", correct: false, feedback: "FALSCH: Sehr wichtig."}
            ]},
            {q: "37. Ich-Botschaften ...", topic: "Kommunikation", answers: [
                {text: "druecken eigene Gefuehle aus", correct: true, feedback: "Richtig! Persoenliche Perspektive."},
                {text: "vermeiden Schuldzuweisungen", correct: true, feedback: "Richtig! Nicht anklagen."},
                {text: "foerdern konstruktive Kommunikation", correct: true, feedback: "Richtig! Offener Dialog."},
                {text: "beginnen mit 'Du hast...'", correct: false, feedback: "FALSCH: Das sind DU-Botschaften."}
            ]},
            {q: "38. Wertschaetzende Anerkennung ...", topic: "Motivation", answers: [
                {text: "nach Maslow ein Beduerfnis", correct: true, feedback: "Richtig! Vierte Stufe."},
                {text: "foerdert die Motivation", correct: true, feedback: "Richtig! Anerkennung motiviert."},
                {text: "kann durch Lob erfolgen", correct: true, feedback: "Richtig! Wertschaetzung zeigen."},
                {text: "ist unwichtig fuer Mitarbeiter", correct: false, feedback: "FALSCH: Sehr wichtig."}
            ]},
            {q: "39. Selbstverwirklichung nach Maslow ...", topic: "Motivation", answers: [
                {text: "steht an der Spitze der Pyramide", correct: true, feedback: "Richtig! Hoechste Stufe."},
                {text: "ist das Streben nach Entfaltung", correct: true, feedback: "Richtig! Potenzial ausschoepfen."},
                {text: "wird nach Erfuellung niedrigerer Beduerfnisse aktiviert", correct: true, feedback: "Richtig! Hierarchisch."},
                {text: "ist das Grundbeduerfnis", correct: false, feedback: "FALSCH: Physiologische Beduerfnisse sind Grund."}
            ]},
            {q: "40. Das QM-Handbuch ...", topic: "Grundlagen", answers: [
                {text: "ist seit 2015 nicht mehr explizit gefordert", correct: true, feedback: "Richtig! Keine Pflicht mehr."},
                {text: "kann weiterhin verwendet werden", correct: true, feedback: "Richtig! Optional nuetzlich."},
                {text: "wurde durch 'dokumentierte Information' ersetzt", correct: true, feedback: "Richtig! Neuer Begriff."},
                {text: "ist verboten", correct: false, feedback: "FALSCH: Weiterhin erlaubt."}
            ]},
            {q: "41. Der Prozessowner ...", topic: "Kapitel 4", answers: [
                {text: "ist fuer den Prozess verantwortlich", correct: true, feedback: "Richtig! Prozessverantwortung."},
                {text: "ueberwacht die Prozessleistung", correct: true, feedback: "Richtig! Performance verfolgen."},
                {text: "initiiert Verbesserungen", correct: true, feedback: "Richtig! KVP antreiben."},
                {text: "ist immer der Geschaeftsfuehrer", correct: false, feedback: "FALSCH: Auf verschiedenen Ebenen."}
            ]},
            {q: "42. Die Bewertung der QMS-Leistung ...", topic: "Kapitel 9", answers: [
                {text: "nutzt Analyse und Bewertung", correct: true, feedback: "Richtig! Datenauswertung."},
                {text: "nutzt interne Audits", correct: true, feedback: "Richtig! Auditierung."},
                {text: "nutzt die Managementbewertung", correct: true, feedback: "Richtig! Top-Management Review."},
                {text: "erfolgt nur bei Problemen", correct: false, feedback: "FALSCH: Systematisch und regelmaessig."}
            ]},
            {q: "43. Trends bei der Datenanalyse koennen zeigen ...", topic: "Kapitel 9", answers: [
                {text: "Moeglichkeiten fuer Verbesserung", correct: true, feedback: "Richtig! KVP-Potenziale."},
                {text: "Verschlechterung der Leistung", correct: true, feedback: "Richtig! Warnsignale."},
                {text: "Wirksamkeit von Massnahmen", correct: true, feedback: "Richtig! Erfolgskontrolle."},
                {text: "keine nuetzlichen Informationen", correct: false, feedback: "FALSCH: Sehr nuetzlich."}
            ]},
            {q: "44. Die fortlaufende Verbesserung (10.3) ...", topic: "Kapitel 10", answers: [
                {text: "nutzt Analyseergebnisse", correct: true, feedback: "Richtig! Daten verwenden."},
                {text: "nutzt Managementbewertungsergebnisse", correct: true, feedback: "Richtig! Review-Outputs."},
                {text: "verbessert Eignung, Angemessenheit und Wirksamkeit", correct: true, feedback: "Richtig! Die drei Aspekte."},
                {text: "ist optional fuer kleine Organisationen", correct: false, feedback: "FALSCH: Fuer ALLE verpflichtend."}
            ]},
            {q: "45. Die ISO 9004 ...", topic: "Grundlagen", answers: [
                {text: "ist ein Leitfaden fuer nachhaltigen Erfolg", correct: true, feedback: "Richtig! Sustainable Success."},
                {text: "geht ueber ISO 9001 hinaus", correct: true, feedback: "Richtig! Umfassender."},
                {text: "ist keine Zertifizierungsnorm", correct: true, feedback: "Richtig! Nur Leitfaden."},
                {text: "ersetzt die ISO 9001", correct: false, feedback: "FALSCH: Ergaenzt sie."}
            ]}
        ]
    }
};
