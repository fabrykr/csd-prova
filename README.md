# Centro Studi Danza Voghera — Sito statico

Sito statico pronto per GitHub Pages. Nessuna build, nessun framework, nessun CDN esterno (conforme GDPR).

## Struttura

```
site/
├── index.html            # Homepage
├── contatti.html         # Modulo di contatto (Web3Forms)
├── privacy.html          # Informativa privacy (art. 13 GDPR)
├── cookie.html           # Cookie policy
├── note-legali.html      # Dati ASD, CF, sede, titolare
├── css/style.css
├── js/main.js
├── robots.txt
├── sitemap.xml
├── immagini-insegnanti/  # ← copia qui la cartella originale
└── immagini-csd-sito/    # ← copia qui la cartella originale
```

## Come pubblicare su GitHub Pages

1. Copia il contenuto di `site/` nella root del tuo repository GitHub.
2. Aggiungi le due cartelle immagini esistenti (`immagini-insegnanti/` e `immagini-csd-sito/`) — restano identiche a prima.
3. Fai commit e push.
4. GitHub Pages servirà `index.html` come home.

## Cosa devi ancora completare

Cerca `[DA COMPILARE]` nei file legali. Sono 4 valori:

1. **Nome e cognome del legale rappresentante** (`privacy.html`, `note-legali.html`)
2. **Numero di iscrizione RUNTS / Registro CONI-Sport e Salute** (`note-legali.html`)
3. **Partita IVA** se presente (`note-legali.html`)
4. **Data di ultimo aggiornamento** dei documenti legali (3 file)

## Modulo di contatto — attivazione

Il modulo usa **Web3Forms** (gratuito, illimitato, nessun account provider richiesto).

1. Vai su https://web3forms.com/
2. Inserisci `asd-centrostudidanza@tiscali.it` → riceverai una **access key** via email.
3. Apri `contatti.html` e sostituisci `INSERISCI-QUI-LA-TUA-ACCESS-KEY` con la tua chiave.
4. Fine. I messaggi arriveranno direttamente sulla casella email.

La access key di Web3Forms è pensata per essere pubblica (non è un segreto), quindi può stare tranquillamente nell'HTML committato su GitHub.

## Modifiche legali già applicate

- ✅ Rimossi tutti i CDN esterni (Google Fonts, Font Awesome) → nessun IP dell'utente inviato a terzi USA.
- ✅ Icone social come SVG inline (nessun font remoto).
- ✅ Font di sistema (Iowan / Palatino / Georgia per il display, sistema per il body) → performance + privacy.
- ✅ Banner cookie informativo (nessuna profilazione → conforme Linee guida Garante 10/6/2021).
- ✅ Informativa privacy completa art. 13 GDPR.
- ✅ Cookie policy dedicata.
- ✅ Note legali con dati ASD, CF, sede, riferimenti a liberatorie foto.
- ✅ Codice Fiscale ASD **95040610180** in ogni footer.
- ✅ Modulo di contatto con validazione, consenso privacy obbligatorio, honeypot anti-spam, fallback errori.
- ✅ Attributi `rel="noopener noreferrer"` sui link `target="_blank"`.
- ✅ `loading="lazy"` su tutte le immagini della galleria e delle sale.
- ✅ Schema.org JSON-LD (`DanceSchool`) per SEO.
- ✅ Meta OpenGraph + robots noindex sulle pagine legali.
- ✅ Skip-link per accessibilità, ARIA landmarks, focus visibile.
- ✅ `sitemap.xml` + `robots.txt`.

## Contenuti preservati

Nessun contenuto originale è stato eliminato:

- Tutte le 5 schede insegnante con testo integrale.
- I 2 paragrafi introduttivi della sezione "La Scuola".
- La lista dei 9 corsi.
- Il paragrafo sui laboratori e mental coaching.
- Le 36 foto della galleria (`immagini-csd-sito/1.jpg` … `36.jpg`).
- Foto delle 2 sale + logo + affiliazioni OPES / CIBU + 5 ritratti insegnanti.
- Indirizzo, email, telefono, link Instagram/Facebook/TikTok.
