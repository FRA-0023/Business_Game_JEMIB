# VinLiber Business Game

Documentazione del progetto di Business Intelligence VinLiber sviluppato per il business game JEMIB Milano Bicocca 2026.

## Panoramica

Il progetto analizza un catalogo di vini e un insieme di recensioni dei consumatori per costruire una pipeline completa di business intelligence. L'obiettivo è trasformare dati grezzi in insight azionabili per il posizionamento del prodotto, la segmentazione dei clienti e l'esportazione verso dashboard.

L'analisi si articola in quattro fasi:

1. Controlli di qualità dei dati e preprocessing.
2. Analisi esplorativa della chimica del vino e del comportamento delle recensioni.
3. Modellazione statistica e clustering di vini e consumatori.
4. Esportazione di dataset puliti e arricchiti per Power BI o Tableau.

## Contenuto della cartella

- `businessgame_full.Rmd` - analisi completa documentata e file sorgente principale.
- `businessgame.Rmd` - versione più sintetica dell'analisi.
- `businessgame_pro_sezione_aggiuntiva.Rmd` - variante pro con sezione aggiuntiva.
- `businessgame_sezione_aggiuntiva_v3.Rmd` - ulteriore variante del documento di progetto.
- `businessgame_full.pdf` - report renderizzato dal file R Markdown completo.
- `Business Game SP 26.pdf` - materiale originale della consegna.
- `VinLiber_QA_Presentazione.docx` e `VinLiber_QA_Presentazione.pdf` - materiale di presentazione.
- `vini.csv` - dataset del catalogo vini.
- `recensioni.csv` - dataset delle recensioni dei consumatori.
- `export_vini_cluster.csv` - vini arricchiti con etichette di cluster e coordinate PCA.
- `export_recensioni_cluster.csv` - recensioni arricchite con cluster dei consumatori e fasce d'età.
- `export_dataset_unificato.csv` - dataset unito pronto per analisi incrociate.
- `report_executive_summary.md` - executive summary sintetico dei risultati.

## Dati

Il progetto utilizza due tabelle di input principali:

- `vini.csv`: 20 vini con 11 variabili chimiche e metadati.
- `recensioni.csv`: 2.000 recensioni con review id, età, genere, nazionalità, wine id e valutazione.

I dataset sono collegati tramite `wine_id`. L'analisi completa mostra che i dati sono in buone condizioni, senza chiavi duplicate e senza collegamenti referenziali mancanti tra vini e recensioni.

## Pipeline di Analisi

### 1. Qualità dei dati e preprocessing

Il flusso di lavoro inizia con la correzione dei tipi, i controlli referenziali e le principali diagnostiche descrittive. Nel report completo, le variabili dei vini vengono anche winsorizzate al 1° e 99° percentile per ridurre l'impatto dei valori estremi preservando le osservazioni originali.

### 2. Analisi esplorativa dei dati

La sezione EDA esamina:

- statistiche riassuntive per vini e recensioni;
- struttura di correlazione tra le variabili chimiche;
- distribuzioni delle valutazioni per vino e per fascia d'età;
- prime evidenze delle relazioni tra chimica e qualità percepita.

### 3. Analisi statistica

Il progetto include:

- test di Kruskal-Wallis sulle valutazioni per fascia d'età e nazionalità;
- diagnostica ANOVA e controlli post-hoc;
- modello di regressione lineare con selezione stepwise AIC;
- controlli di multicollinearità tramite VIF.

### 4. Clustering dei vini

La segmentazione dei vini è costruita sulle 11 variabili chimiche standardizzate. L'analisi confronta diversi criteri per selezionare il numero di cluster e poi applica il clustering gerarchico su uno spazio ridotto con PCA.

L'interpretazione finale raggruppa i vini in tre profili utili per il business:

- Corposi - Alto alcol
- Ricchi - Aromatici
- Leggeri - Bianchi

### 5. Clustering dei consumatori

La segmentazione dei consumatori utilizza età e valutazione. La soluzione finale converge anch'essa su tre segmenti, interpretati come:

- Adulti - Alta valutazione
- Giovani - Valutazione media
- Adulti - Bassa valutazione

### 6. Analisi integrata

La parte finale del progetto incrocia i cluster dei vini con quelli dei consumatori per identificare quali profili di prodotto sono preferiti da ciascun segmento di pubblico. Questo è il principale output business dell'analisi.

## Risultati principali

- Il catalogo dei vini è ben strutturato e adatto ad analisi multivariate.
- Tre famiglie di vini emergono in modo coerente dal clustering e dalla profilazione.
- Il comportamento dei consumatori non è spiegato solo dall'età; le valutazioni differiscono nettamente tra i segmenti.
- La heatmap incrociata tra segmenti è l'output più utile per decisioni di marketing e posizionamento.
- I file CSV esportati sono pronti per essere caricati in strumenti BI.

## Riproducibilità

Per riprodurre il report, apri `businessgame_full.Rmd` in RStudio o in VS Code con supporto R e esegui il rendering con:

```r
rmarkdown::render("businessgame_full.Rmd")
```

## Pacchetti R necessari

L'analisi utilizza i seguenti pacchetti:

- dplyr
- tidyr
- ggplot2
- psych
- corrplot
- cluster
- skimr
- car
- factoextra
- ggrepel
- scales
- knitr
- kableExtra

Se necessario, installali con:

```r
install.packages(c(
  "dplyr", "tidyr", "ggplot2", "psych", "corrplot", "cluster",
  "skimr", "car", "factoextra", "ggrepel", "scales", "knitr", "kableExtra"
))
```

## Flusso di lavoro consigliato

1. Apri il workspace in RStudio o VS Code.
2. Verifica che `vini.csv` e `recensioni.csv` siano nella cartella principale del progetto.
3. Esegui il rendering di `businessgame_full.Rmd`.
4. Usa i file CSV esportati per dashboard o analisi ulteriori.

## Output

Gli artefatti principali generati sono:

- `businessgame_full.pdf` - report completo.
- `export_vini_cluster.csv` - tabella di segmentazione dei vini.
- `export_recensioni_cluster.csv` - tabella di segmentazione dei consumatori.
- `export_dataset_unificato.csv` - dataset integrato.

## Note

- Il progetto è documentato in italiano perché preparato per un contesto accademico e business italiano.
- Se vuoi una versione più leggera del README, l'executive summary in `report_executive_summary.md` è il punto di ingresso più rapido.
- Se vuoi l'analisi tecnica più completa, la fonte di riferimento resta `businessgame_full.Rmd`.