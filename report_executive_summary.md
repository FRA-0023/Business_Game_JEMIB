# Report Esecutivo — VinLiber Business Intelligence
**Mattia Lombardo & Francesco Colombini** | JEMIB Milano Bicocca 2026

---

## Contesto e Obiettivo

VinLiber è una cantina focalizzata su viticoltura biologica, produzione etica e valore sociale.
L'analisi ha trasformato due dataset grezzi — un catalogo di **20 vini** con 11 variabili chimiche e **2.000 recensioni** con dati demografici — in una pipeline di Business Intelligence completa, con output pronti per Power BI e Tableau.

L'intero flusso segue quattro fasi sequenziali: **Preprocessing → EDA → Clustering → Export**.

---

## 1. Qualità dei Dati e Preprocessing

Il dataset di partenza si è rivelato in ottime condizioni: nessun duplicato, nessun valore mancante, perfetta coerenza referenziale tra vini e recensioni.

Sono state applicate due misure preventive di robustezza:

- **Winsorizzazione** all'1°–99° percentile per correggere i valori estremi nelle variabili chimiche senza eliminarli, preservando la naturalezza dei profili biologici.
- **Imputazione con la mediana** come salvaguardia procedurale per futuri aggiornamenti del catalogo con misurazioni parziali.

Il dataset unificato (inner join vini × recensioni) conta **2.000 righe × 19 colonne** e costituisce la base di tutte le analisi successive.

---

## 2. Analisi Esplorativa (EDA)

La matrice di correlazione tra le 11 variabili chimiche ha evidenziato tre pattern rilevanti: forte covarianza tra `free.sulfur.dioxide` e `total.sulfur.dioxide` (r = 0.58), correlazione positiva tra `fixed.acidity` e `residual.sugar` (r = 0.68), e relazione inversa attesa tra `alcohol` e `density` (r = −0.23). Nessuna coppia supera la soglia critica di 0.80.

Sul fronte delle valutazioni, i vini con i punteggi più alti sono il **Nerello Mascalese Etna** (7.58), il **Barolo DOCG** (7.37) e la **Ribolla Gialla** (7.30). Lo scarto con i vini in coda supera i 2 punti, suggerendo una gerarchia di gradimento stabile e azionabile per le decisioni di pricing.

---

## 3. Test Statistici e Regressione

I test non parametrici (Kruskal-Wallis) hanno rilevato differenze significative di valutazione sia per **fascia d'età** (p = 0.028) sia per **nazionalità** (p = 0.002), mentre il test di Tukey post-hoc non individua coppie di fasce con differenze nette — le preferenze sfumano gradualmente tra generazioni.

Il modello di **regressione lineare stepwise AIC** ha selezionato 13 predittori su 17, rimuovendo `density`, `pH`, `sesso` e `type` come non informativi. I driver principali della valutazione sono:

| Predittore | Effetto | Lettura |
|---|---|---|
| `volatile.acidity` | −1.53 | Principale driver di insoddisfazione |
| `sulphates` | +2.06 | Proxy della cura produttiva |
| `alcohol` | +0.20 | Struttura apprezzata dal mercato |
| `free.sulfur.dioxide` | +0.008 | Protezione percepita positivamente |
| Nazionalità Francia | −0.22 | Aspettative più selettive |

L'R² aggiustato è 0.249: nella norma per modelli di preferenza sensoriale, dove fattori contestuali non osservabili (abbinamento, occasione) contribuiscono strutturalmente alla varianza residua.

---

## 4. Clustering dei Vini

La selezione del k ottimale ha utilizzato tre criteri (R², Silhouette, Pseudo-F) e la Gap Statistic (metodo Tibshirani), convergendo su **k = 3**.

Il clustering gerarchico Ward.D2 su spazio PCA (5 componenti, ≥ 80% varianza spiegata) ha prodotto tre famiglie di prodotto con identità chimica e di posizionamento distinte:

- **Corposi • Alto alcol** — rossi strutturati, alta mineralità, basso pH. Vini da invecchiamento.
- **Ricchi • Aromatici** — profilo intermedio, residuo zuccherino leggermente più alto. Vini da pasto versatili.
- **Leggeri • Bianchi** — alta concentrazione di SO₂, bassa densità e alcol. Vini da aperitivo.

---

## 5. Clustering dei Consumatori

Il k-means su `età` e `valutazione` (k = 3, Gap Statistic confermata) ha segmentato i 2.000 recensori in tre profili ad alta azionabilità di marketing:

- **Adulti — Alta valutazione** (530 rec., età media 57.6, val. media 7.58) — il segmento a più alto customer equity; candidati al brand ambassador effect.
- **Giovani — Valutazione media** (755 rec., età media 27.5, val. media 6.71) — core target per brand awareness digitale e fidelizzazione precoce.
- **Adulti — Bassa valutazione** (715 rec., età media 57.8, val. media 5.78) — consumatori esigenti; candidati a iniziative di up-education sul metodo biologico.

---

## 6. Analisi Integrata e Output

La **heatmap cluster vino × cluster consumatore** è lo strumento più direttamente azionabile dell'analisi: il segmento *Alta valutazione* premia tutti e tre i cluster di vini (>7.4), mentre i *Giovani* mostrano preferenza marcata per i vini Corposi e Aromatici (6.81–6.83) rispetto ai Bianchi (6.50).

L'**analisi per nazionalità** (non presente nel file principale) ha confermato che i consumatori francesi valutano sistematicamente più in basso tutte le categorie, coerentemente con il coefficiente di regressione (β = −0.22, p = 0.002).

Sono stati esportati tre file UTF-8 pronti per dashboard:

- `export_vini_cluster.csv` — catalogo vini con cluster e coordinate PCA
- `export_recensioni_cluster.csv` — recensioni con cluster consumatore e fascia d'età
- `export_dataset_unificato.csv` — dataset join completo per analisi cross-dimensionali

---

## Prossimi Passi

- Integrare dati di vendita per calcolare il **Customer Lifetime Value** per cluster.
- Applicare **collaborative filtering** per raccomandazioni di acquisto personalizzate.
- Sviluppare la **dashboard interattiva** in Power BI / Tableau dai file esportati.
- Raccogliere ulteriori osservazioni sulla fascia **Anziano** (n = 114, attualmente sottorappresentata) prima di tradurre quei dati in decisioni di posizionamento.

---

*Report sintetico — Analisi completa disponibile nel file `businessgame_full.Rmd`*
