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
                {text: "Konform, da Auditergebnisse massgeblich sind", correct: false, feedback: "FALSCH: Auditergebnisse allein sind nicht massgeblich fuer Normkonformitaet!"},
                {text: "Nicht konform, da der Kontext Eingaben fuer Planung liefern muss", correct: true, feedback: "Richtig! Der Kontext muss in die QMS-Planung einfliessen."},
                {text: "Konform, sofern Ziele erreicht werden", correct: false, feedback: "FALSCH: Zielerreichung allein genuegt nicht - der Kontext MUSS beruecksichtigt werden!"},
                {text: "Nicht konform, da eine jaehrliche Kontextanalyse gefordert ist", correct: false, feedback: "FALSCH: Eine JAEHRLICHE Analyse ist NICHT explizit gefordert!"}
            ]},
            {q: "Welche Aussagen zur Relevanz interessierter Parteien sind normativ korrekt?", topic: "Interessierte Parteien", answers: [
                {text: "Die Organisation legt die Relevanz selbst fest", correct: true, feedback: "Richtig! Die Organisation entscheidet selbst ueber Relevanz."},
                {text: "Relevanz ergibt sich aus Einfluss auf konforme Ergebnisse", correct: true, feedback: "Richtig! Einfluss auf Konformitaet ist entscheidend."},
                {text: "Alle Stakeholder sind relevant", correct: false, feedback: "FALSCH: Nur RELEVANTE, nicht ALLE Stakeholder!"},
                {text: "Relevante Anforderungen sind zu bestimmen", correct: true, feedback: "Richtig! Anforderungen relevanter Parteien muessen bestimmt werden."}
            ]},
            {q: "Ein Ausschluss im Anwendungsbereich ist zulaessig, wenn ...", topic: "Anwendungsbereich", answers: [
                {text: "der Ausschluss begruendet ist", correct: true, feedback: "Richtig! Ausschluesse muessen begruendet sein."},
                {text: "Produkt- und Dienstleistungskonformitaet nicht beeintraechtigt wird", correct: true, feedback: "Richtig! Konformitaet darf nicht beeintraechtigt werden."},
                {text: "der Zertifizierer zustimmt", correct: false, feedback: "FALSCH: Die Zustimmung des Zertifizierers ist NICHT Voraussetzung!"},
                {text: "der Anwendungsbereich dokumentiert ist", correct: true, feedback: "Richtig! Der Anwendungsbereich muss dokumentiert sein."}
            ]},
            {q: "Welche Anforderungen stellt ISO 9001:2015 an Prozesse?", topic: "Prozesse", answers: [
                {text: "Prozesse muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Wechselwirkungen muessen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse muessen vollstaendig dokumentiert sein", correct: false, feedback: "FALSCH: VOLLSTAENDIGE Dokumentation ist NICHT gefordert!"},
                {text: "Kriterien und Methoden zur Steuerung muessen festgelegt werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Im Prozessansatz verlangt die Norm, dass ...", topic: "Prozesse", answers: [
                {text: "Verantwortlichkeiten bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Prozesse isoliert optimiert werden", correct: false, feedback: "FALSCH: Prozesse sollen NICHT isoliert, sondern im ZUSAMMENHANG betrachtet werden!"},
                {text: "Risiken und Chancen beruecksichtigt werden", correct: true, feedback: "Richtig!"},
                {text: "Arbeitsanweisungen verpflichtend vorliegen", correct: false, feedback: "FALSCH: Arbeitsanweisungen sind NICHT verpflichtend!"}
            ]},
            {q: "Welche Aussagen zur Verantwortung der obersten Leitung sind korrekt?", topic: "Fuehrung", answers: [
                {text: "Verantwortung fuer Wirksamkeit kann nicht delegiert werden", correct: true, feedback: "Richtig! Die oberste Leitung traegt die Gesamtverantwortung."},
                {text: "Operative Aufgaben duerfen delegiert werden", correct: true, feedback: "Richtig! Operative Aufgaben koennen delegiert werden."},
                {text: "Benennung eines QMB uebertraegt Verantwortung", correct: false, feedback: "FALSCH: Die Gesamtverantwortung BLEIBT bei der obersten Leitung!"},
                {text: "Leitung muss Audits selbst durchfuehren", correct: false, feedback: "FALSCH: Audits muessen NICHT von der Leitung selbst durchgefuehrt werden!"}
            ]},
            {q: "Die Qualitaetspolitik ...", topic: "Fuehrung", answers: [
                {text: "passt zur strategischen Ausrichtung", correct: true, feedback: "Richtig!"},
                {text: "ist dokumentierte Information", correct: true, feedback: "Richtig!"},
                {text: "enthaelt zwingend Qualitaetsziele", correct: false, feedback: "FALSCH: Die Politik enthaelt NICHT zwingend Ziele - diese werden separat festgelegt!"},
                {text: "ist zu kommunizieren und zu verstehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zur Kundenorientierung sind normativ korrekt?", topic: "Kundenorientierung", answers: [
                {text: "Kundenanforderungen sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Kundenanforderungen sind zu erfuellen", correct: true, feedback: "Richtig!"},
                {text: "Risiken und Chancen sind zu beruecksichtigen", correct: true, feedback: "Richtig!"},
                {text: "Kundenorientierung ersetzt Leistungsbewertung", correct: false, feedback: "FALSCH: Kundenorientierung ERSETZT nicht die Leistungsbewertung!"}
            ]},
            {q: "Welche Aussagen zu Risiken und Chancen treffen zu?", topic: "Planung", answers: [
                {text: "Risiken und Chancen sind zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen sind zu planen", correct: true, feedback: "Richtig!"},
                {text: "Eine Methode wie FMEA ist vorgeschrieben", correct: false, feedback: "FALSCH: KEINE bestimmte Methode ist vorgeschrieben!"},
                {text: "Risiken und Chancen sind Teil der Planung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Qualitaetsziele muessen ...", topic: "Planung", answers: [
                {text: "messbar sein", correct: true, feedback: "Richtig!"},
                {text: "ueberwacht werden", correct: true, feedback: "Richtig!"},
                {text: "mit der Qualitaetspolitik uebereinstimmen", correct: true, feedback: "Richtig!"},
                {text: "jaehrlich geaendert werden", correct: false, feedback: "FALSCH: JAEHRLICHE Aenderung ist NICHT gefordert!"}
            ]},
            {q: "Welche Ressourcen nennt die Norm explizit?", topic: "Unterstuetzung", answers: [
                {text: "Personen", correct: true, feedback: "Richtig!"},
                {text: "Infrastruktur", correct: true, feedback: "Richtig!"},
                {text: "Wissen der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Unternehmenskultur", correct: false, feedback: "FALSCH: Unternehmenskultur ist KEINE explizit genannte Ressource!"}
            ]},
            {q: "Kompetenzanforderungen gemaess ISO 9001 beinhalten, dass ...", topic: "Unterstuetzung", answers: [
                {text: "Kompetenzen bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Massnahmen umgesetzt werden", correct: true, feedback: "Richtig!"},
                {text: "Wirksamkeit bewertet wird", correct: true, feedback: "Richtig!"},
                {text: "jede Schulung dokumentiert ist", correct: false, feedback: "FALSCH: Nicht JEDE Schulung muss dokumentiert sein!"}
            ]},
            {q: "Welche Aussage zur dokumentierten Information ist NICHT normkonform?", topic: "Dokumentation", answers: [
                {text: "Dokumentierte Information ist zu lenken", correct: false, feedback: "Diese Aussage IST normkonform!"},
                {text: "Eine feste Dokumentationsstruktur ist vorgeschrieben", correct: true, feedback: "Richtig! Diese Aussage ist NICHT normkonform - keine feste Struktur vorgeschrieben!"},
                {text: "Schutz vor unbeabsichtigter Aenderung ist sicherzustellen", correct: false, feedback: "Diese Aussage IST normkonform!"},
                {text: "Dokumentierte Information muss verfuegbar sein", correct: false, feedback: "Diese Aussage IST normkonform!"}
            ]},
            {q: "Welche Taetigkeiten gehoeren zu Kapitel 8?", topic: "Betrieb", answers: [
                {text: "Planung der Leistungserbringung", correct: true, feedback: "Richtig!"},
                {text: "Managementbewertung", correct: false, feedback: "FALSCH: Managementbewertung gehoert zu Kapitel 9!"},
                {text: "Lenkung externer Anbieter", correct: true, feedback: "Richtig!"},
                {text: "Kennzeichnung und Rueckverfolgbarkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussagen zu extern bereitgestellten Prozessen sind korrekt?", topic: "Externe Anbieter", answers: [
                {text: "Art und Umfang der Lenkung sind festzulegen", correct: true, feedback: "Richtig!"},
                {text: "Verantwortung verbleibt bei der Organisation", correct: true, feedback: "Richtig!"},
                {text: "Anbieter muessen zertifiziert sein", correct: false, feedback: "FALSCH: Zertifizierung ist NICHT gefordert!"},
                {text: "Anforderungen sind zu kommunizieren", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ueberwachung und Messung erfordern, dass ...", topic: "Bewertung", answers: [
                {text: "alle Prozesse gemessen werden", correct: false, feedback: "FALSCH: Nicht ALLE Prozesse muessen gemessen werden!"},
                {text: "die Organisation festlegt, was ueberwacht wird", correct: true, feedback: "Richtig!"},
                {text: "geeignete Methoden bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit bewertet wird", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Interne Audits ...", topic: "Internes Audit", answers: [
                {text: "sind geplant durchzufuehren", correct: true, feedback: "Richtig!"},
                {text: "muessen unabhaengig sein", correct: true, feedback: "Richtig!"},
                {text: "sind freiwillig", correct: false, feedback: "FALSCH: Interne Audits sind NICHT freiwillig!"},
                {text: "liefern Informationen zur Wirksamkeit", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Punkte gehoeren zu Eingaben der Managementbewertung?", topic: "Managementbewertung", answers: [
                {text: "Auditergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Kundenzufriedenheit", correct: true, feedback: "Richtig!"},
                {text: "Aenderungen interner/externer Themen", correct: true, feedback: "Richtig!"},
                {text: "Mitarbeiterjahresgespraeche", correct: false, feedback: "FALSCH: Mitarbeiterjahresgespraeche sind KEINE explizite Eingabe!"}
            ]},
            {q: "Wirksamkeit bedeutet ...", topic: "Grundlagen", answers: [
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig! Das ist die Definition von Wirksamkeit."},
                {text: "Einhaltung interner Vorgaben", correct: false, feedback: "FALSCH: Das ist Konformitaet, nicht Wirksamkeit!"},
                {text: "wirtschaftlichen Erfolg", correct: false, feedback: "FALSCH: Das ist Effizienz, nicht Wirksamkeit!"},
                {text: "gesetzliche Konformitaet", correct: false, feedback: "FALSCH: Gesetzliche Konformitaet ist ein separates Thema!"}
            ]},
            {q: "Eine Nichtkonformitaet liegt vor, wenn ...", topic: "Nichtkonformitaet", answers: [
                {text: "eine Anforderung nicht erfuellt ist", correct: true, feedback: "Richtig! Definition von Nichtkonformitaet."},
                {text: "ein Kunde unzufrieden ist", correct: false, feedback: "FALSCH: Kundenunzufriedenheit ist nicht automatisch eine Nichtkonformitaet!"},
                {text: "eine Normforderung nicht erfuellt ist", correct: true, feedback: "Richtig!"},
                {text: "ein Ziel verfehlt wird", correct: false, feedback: "FALSCH: Zielverfehlung ist nicht automatisch eine Nichtkonformitaet!"}
            ]},
            {q: "Korrekturmassnahmen erfordern ...", topic: "Verbesserung", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig!"},
                {text: "Ersatz von Vorbeugungsmassnahmen", correct: false, feedback: "FALSCH: Korrekturmassnahmen ERSETZEN keine Vorbeugung!"},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "externe Genehmigung", correct: false, feedback: "FALSCH: Keine externe Genehmigung erforderlich!"}
            ]},
            {q: "Verbesserung im Sinne der ISO 9001 bedeutet ...", topic: "Verbesserung", answers: [
                {text: "fortlaufende Leistungssteigerung", correct: true, feedback: "Richtig!"},
                {text: "ausschliesslich Reaktion auf Abweichungen", correct: false, feedback: "FALSCH: Nicht NUR reaktiv!"},
                {text: "optionale Taetigkeit", correct: false, feedback: "FALSCH: Verbesserung ist NICHT optional!"},
                {text: "Aufgabe der Qualitaetsabteilung", correct: false, feedback: "FALSCH: Verbesserung ist Aufgabe ALLER!"}
            ]},
            {q: "Interne Kommunikation verlangt, dass ...", topic: "Unterstuetzung", answers: [
                {text: "relevante Inhalte festgelegt werden", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation entbehrlich ist", correct: false, feedback: "FALSCH: Kommunikation ist NICHT entbehrlich!"},
                {text: "Verantwortlichkeiten bestimmt werden", correct: true, feedback: "Richtig!"},
                {text: "Kommunikation nur schriftlich erfolgt", correct: false, feedback: "FALSCH: Schriftform ist NICHT vorgeschrieben!"}
            ]},
            {q: "Wissen der Organisation ...", topic: "Unterstuetzung", answers: [
                {text: "ist zu bestimmen", correct: true, feedback: "Richtig!"},
                {text: "ist zu erhalten", correct: true, feedback: "Richtig!"},
                {text: "muss vollstaendig dokumentiert sein", correct: false, feedback: "FALSCH: VOLLSTAENDIGE Dokumentation ist NICHT gefordert!"},
                {text: "muss verfuegbar sein", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kennzeichnung und Rueckverfolgbarkeit sind erforderlich, wenn ...", topic: "Betrieb", answers: [
                {text: "Anforderungen bestehen", correct: true, feedback: "Richtig!"},
                {text: "Produktkonformitaet betroffen ist", correct: true, feedback: "Richtig!"},
                {text: "Rueckverfolgbarkeit immer gefordert ist", correct: false, feedback: "FALSCH: Rueckverfolgbarkeit ist NICHT immer gefordert!"},
                {text: "vertragliche Vorgaben bestehen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Eigentum externer Parteien ist ...", topic: "Betrieb", answers: [
                {text: "zu identifizieren", correct: true, feedback: "Richtig!"},
                {text: "zu schuetzen", correct: true, feedback: "Richtig!"},
                {text: "bei Verlust zu melden", correct: true, feedback: "Richtig!"},
                {text: "Eigentum der Organisation", correct: false, feedback: "FALSCH: Es BLEIBT Eigentum der externen Partei!"}
            ]},
            {q: "Produktfreigabe setzt voraus, dass ...", topic: "Betrieb", answers: [
                {text: "Anforderungen erfuellt sind", correct: true, feedback: "Richtig!"},
                {text: "befugte Personen freigeben", correct: true, feedback: "Richtig!"},
                {text: "Freigabe dokumentiert ist", correct: true, feedback: "Richtig!"},
                {text: "Pruefungen entfallen duerfen", correct: false, feedback: "FALSCH: Pruefungen duerfen NICHT einfach entfallen!"}
            ]},
            {q: "Nichtkonforme Outputs muessen ...", topic: "Nichtkonformitaet", answers: [
                {text: "gelenkt werden", correct: true, feedback: "Richtig!"},
                {text: "gekennzeichnet werden", correct: true, feedback: "Richtig!"},
                {text: "freigegeben werden", correct: false, feedback: "FALSCH: Nichtkonformes wird NICHT einfach freigegeben!"},
                {text: "korrigiert werden", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Dokumentierte Information erfordert, dass ...", topic: "Dokumentation", answers: [
                {text: "Aufbewahrungsfristen festgelegt sind", correct: true, feedback: "Richtig!"},
                {text: "Dokumente unbegrenzt geaendert werden duerfen", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor Verlust besteht", correct: true, feedback: "Richtig!"},
                {text: "Dokumente und Aufzeichnungen identisch sind", correct: false, feedback: "FALSCH: Dokumente und Aufzeichnungen sind UNTERSCHIEDLICH!"}
            ]},
            {q: "Der PDCA-Zyklus ...", topic: "Grundlagen", answers: [
                {text: "unterstuetzt den Prozessansatz", correct: true, feedback: "Richtig!"},
                {text: "foerdert Verbesserung", correct: true, feedback: "Richtig!"},
                {text: "ersetzt das QMS", correct: false, feedback: "FALSCH: PDCA ERSETZT nicht das QMS!"},
                {text: "gilt nur fuer Kapitel 8", correct: false, feedback: "FALSCH: PDCA gilt fuer das GESAMTE QMS!"}
            ]},
            {q: "Bewertung der Leistung umfasst ...", topic: "Bewertung", answers: [
                {text: "Ueberwachung, Messung, Analyse, Bewertung", correct: true, feedback: "Richtig!"},
                {text: "Ersatz interner Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "Entscheidungsgrundlage", correct: true, feedback: "Richtig!"},
                {text: "alleinige Aufgabe der Leitung", correct: false, feedback: "FALSCH: NICHT allein Aufgabe der Leitung!"}
            ]},
            {q: "Bei Prozessaenderungen fordert die Norm ...", topic: "Planung", answers: [
                {text: "Planung der Aenderung", correct: true, feedback: "Richtig!"},
                {text: "Beruecksichtigung von Risiken", correct: true, feedback: "Richtig!"},
                {text: "externe Genehmigung", correct: false, feedback: "FALSCH: Keine externe Genehmigung erforderlich!"},
                {text: "zwingende Dokumentation jeder Aenderung", correct: false, feedback: "FALSCH: Nicht JEDE Aenderung muss dokumentiert werden!"}
            ]},
            {q: "Rollen und Verantwortlichkeiten muessen ...", topic: "Fuehrung", answers: [
                {text: "festgelegt werden", correct: true, feedback: "Richtig!"},
                {text: "bekannt gemacht werden", correct: true, feedback: "Richtig!"},
                {text: "ausschliesslich bei der Leitung liegen", correct: false, feedback: "FALSCH: Sie werden DELEGIERT!"},
                {text: "regelmaessig wechseln", correct: false, feedback: "FALSCH: Kein regelmaessiger Wechsel gefordert!"}
            ]},
            {q: "Kundenbezogene Kommunikation ...", topic: "Betrieb", answers: [
                {text: "ist festzulegen", correct: true, feedback: "Richtig!"},
                {text: "ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "beschraenkt sich auf Reklamationen", correct: false, feedback: "FALSCH: NICHT nur Reklamationen!"},
                {text: "ist Aufgabe des Marketings", correct: false, feedback: "FALSCH: NICHT nur Marketing!"}
            ]},
            {q: "Nach einem Audit mit Abweichungen sind normkonform ...", topic: "Internes Audit", answers: [
                {text: "Ursachenanalyse", correct: true, feedback: "Richtig!"},
                {text: "Korrekturmassnahmen", correct: true, feedback: "Richtig!"},
                {text: "Sanktionen", correct: false, feedback: "FALSCH: Sanktionen sind KEIN Norminhalt!"},
                {text: "Wirksamkeitsbewertung", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Kontinuierliche Verbesserung ...", topic: "Verbesserung", answers: [
                {text: "ist Bestandteil des QMS", correct: true, feedback: "Richtig!"},
                {text: "ist einmalig", correct: false, feedback: "FALSCH: KONTINUIERLICH bedeutet fortlaufend!"},
                {text: "ist optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "beschraenkt sich auf Prozesse", correct: false, feedback: "FALSCH: Sie betrifft das GESAMTE QMS!"}
            ]},
            {q: "Extern bereitgestellte Prozesse ...", topic: "Externe Anbieter", answers: [
                {text: "sind zu lenken", correct: true, feedback: "Richtig!"},
                {text: "bleiben in Verantwortung der Organisation", correct: true, feedback: "Richtig!"},
                {text: "uebertragen Normverantwortung", correct: false, feedback: "FALSCH: Verantwortung BLEIBT bei der Organisation!"},
                {text: "erfordern definierte Anforderungen", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Der Anwendungsbereich des QMS ...", topic: "Anwendungsbereich", answers: [
                {text: "ist dokumentierte Information", correct: true, feedback: "Richtig!"},
                {text: "ist unveraenderlich", correct: false, feedback: "FALSCH: Er KANN bei Bedarf angepasst werden!"},
                {text: "ersetzt ein QM-Handbuch", correct: false, feedback: "FALSCH: Er ERSETZT kein QM-Handbuch!"},
                {text: "muss alle Kapitel enthalten", correct: false, feedback: "FALSCH: Ausschluesse sind moeglich!"}
            ]},
            {q: "Die HLS-Struktur ...", topic: "Grundlagen", answers: [
                {text: "harmonisiert Managementsystemnormen", correct: true, feedback: "Richtig!"},
                {text: "gilt nur fuer ISO 9001", correct: false, feedback: "FALSCH: HLS gilt fuer ALLE ISO-Managementsystemnormen!"},
                {text: "gibt Inhalte vor", correct: false, feedback: "FALSCH: HLS gibt die STRUKTUR vor, nicht konkrete Inhalte!"},
                {text: "schraenkt Ausschluesse ein", correct: false, feedback: "FALSCH: HLS hat keinen Einfluss auf Ausschluesse!"}
            ]},
            {q: "Bewertung externer Anbieter erfordert ...", topic: "Externe Anbieter", answers: [
                {text: "definierte Kriterien", correct: true, feedback: "Richtig!"},
                {text: "jaehrliche Audits", correct: false, feedback: "FALSCH: JAEHRLICHE Audits sind NICHT gefordert!"},
                {text: "optionale Durchfuehrung", correct: false, feedback: "FALSCH: Die Bewertung ist NICHT optional!"},
                {text: "Beruecksichtigung der Ergebnisse", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Ziel der ISO 9001 ist ...", topic: "Grundlagen", answers: [
                {text: "Kundenzufriedenheit durch wirksames QMS", correct: true, feedback: "Richtig!"},
                {text: "Einfuehrung eines QM-Handbuchs", correct: false, feedback: "FALSCH: QM-Handbuch ist NICHT mehr gefordert!"},
                {text: "vollstaendige Gesetzeskonformitaet", correct: false, feedback: "FALSCH: ISO 9001 ist eine QUALITAETSNORM, keine Rechtsnorm!"},
                {text: "Standardisierung aller Prozesse", correct: false, feedback: "FALSCH: NICHT Standardisierung aller Prozesse!"}
            ]},
            {q: "Prozesswirksamkeit bedeutet ...", topic: "Prozesse", answers: [
                {text: "Erreichen beabsichtigter Ergebnisse", correct: true, feedback: "Richtig!"},
                {text: "Identitaet mit Konformitaet", correct: false, feedback: "FALSCH: Wirksamkeit und Konformitaet sind NICHT identisch!"},
                {text: "Bewertung der Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "Ersatz der Ueberwachung", correct: false, feedback: "FALSCH: Wirksamkeit ERSETZT nicht Ueberwachung!"}
            ]},
            {q: "Dokumentenlenkung erfordert ...", topic: "Dokumentation", answers: [
                {text: "Lenkung von Aenderungen", correct: true, feedback: "Richtig!"},
                {text: "freie Aenderbarkeit", correct: false, feedback: "FALSCH: Aenderungen muessen GELENKT werden!"},
                {text: "Schutz vor unbeabsichtigter Nutzung", correct: true, feedback: "Richtig!"},
                {text: "unbegrenzte Aufbewahrung", correct: false, feedback: "FALSCH: Die Organisation legt Aufbewahrungsfristen fest!"}
            ]},
            {q: "Managementbewertung ...", topic: "Managementbewertung", answers: [
                {text: "wird geplant durchgefuehrt", correct: true, feedback: "Richtig!"},
                {text: "bewertet Eignung, Angemessenheit, Wirksamkeit", correct: true, feedback: "Richtig!"},
                {text: "ersetzt Audits", correct: false, feedback: "FALSCH: Sie ERSETZT Audits nicht!"},
                {text: "liefert Verbesserungsinput", correct: true, feedback: "Richtig!"}
            ]},
            {q: "Welche Aussage ist normativ korrekt?", topic: "Kundenzufriedenheit", answers: [
                {text: "Kundenzufriedenheit ist Leistungsindikator", correct: true, feedback: "Richtig!"},
                {text: "identisch mit Kundenorientierung", correct: false, feedback: "FALSCH: Kundenzufriedenheit und Kundenorientierung sind NICHT identisch!"},
                {text: "optional", correct: false, feedback: "FALSCH: Sie ist NICHT optional!"},
                {text: "Ersatz fuer Prozessueberwachung", correct: false, feedback: "FALSCH: Sie ERSETZT nicht die Prozessueberwachung!"}
            ]}
        ]
    }
};
