# Centro Studi Danza Voghera — Sito statico

Sito statico per GitHub Pages. Nessuna build, nessun framework, nessun CDN esterno, nessun form, nessun cookie di tracciamento.

## Struttura

```
site/
├── index.html            # Homepage (tutto il sito in una pagina)
├── privacy.html          # Informativa privacy essenziale
├── css/style.css
├── js/main.js
├── robots.txt
├── sitemap.xml
├── immagini-insegnanti/  # ← cartella originale, invariata
└── immagini-csd-sito/    # ← cartella originale, invariata
```

## Come pubblicare su GitHub Pages

1. Copia il contenuto di `site/` nella root del repository GitHub.
2. Mantieni le cartelle `immagini-insegnanti/` e `immagini-csd-sito/` come sono.
3. Commit + push. GitHub Pages serve `index.html` come home.

## Cosa raccoglie il sito

**Nulla.** Non ci sono moduli, cookie di profilazione, analytics, font remoti o embed di terze parti. I contatti sono solo email e numero di telefono cliccabili.

L'unico dato tecnico che circola è l'indirizzo IP registrato dal server di GitHub Pages per finalità di sicurezza — gestito da GitHub, non da te. Questo è coperto dalla `privacy.html`.

## Aspetti legali

Per un sito così semplice (vetrina informativa, senza raccolta dati) in Italia serve solo:

- **Privacy policy** (già inclusa, `privacy.html`) — obbligatoria per via delle foto pubblicate e dei log server.
- **Dati identificativi dell'ASD nel footer** — già presenti nella home (denominazione, sede, C.F.).

**Non servono**: cookie banner, cookie policy dedicata, note legali separate, registro dei trattamenti pubblico.

**Cosa devi conservare tu offline** (non sul sito, ma in archivio ASD):
- Liberatorie firmate per le fotografie pubblicate (adulti e genitori di minori).
- Statuto ASD e iscrizione al RUNTS o Registro CONI/Sport e Salute.

Se un domani vorrai aggiungere un modulo di contatto, iscrizioni online o newsletter, ne parliamo — quelle funzionalità richiedono trattamento dati aggiuntivo.

## Contenuti preservati

- 5 schede insegnante integrali.
- Testi introduttivi "La Scuola".
- Lista dei 9 corsi + laboratori/mental coaching.
- 36 foto galleria (`immagini-csd-sito/1.jpg` … `36.jpg`).
- Foto sale, logo, affiliazioni OPES e CIBU, ritratti insegnanti.
- Indirizzo, telefono, email `centrostudidanzavoghera@gmail.com`, link Instagram/Facebook/TikTok.
