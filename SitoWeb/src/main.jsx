import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

// Pagine principali
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Team from './pages/Team/Team.jsx';
import Contatti from './pages/Contatti/Contatti.jsx';

// Pagine per mailing e pagamento
import EmailConferma from './pages/EmailConferma/EmailConferma.jsx';

// Shop
import Shop from './pages/Shop/Shop.jsx';
import Purchase from './pages/Shop/Purchase/Purchase.jsx';

// Adotta
import Adotta from './pages/Adotta/Adotta.jsx';
import Livello from './pages/Adotta/Livello.jsx';
import Personalizza from './pages/Adotta/Personalizza.jsx';
import Riepilogo from './pages/Adotta/Riepilogo.jsx';
import Certificato from './pages/Adotta/Certificato.jsx';

// Esperienze
import Esperienze from './pages/Esperienze/Esperienze.jsx';
import PrenotaEsperienze from './pages/Esperienze/PrenotaEsperienze.jsx';

// Componente per navigazione
import ScrollToTop from './components/ScrollToTop.jsx';
import './index.css';
import Faq from './pages/FAQ/Faq.jsx';
import Errore from './pages/Errore/Errore.jsx';


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        
        <Route path="shop" element={<Shop />} />
        <Route path="purchase" element={<Purchase />} />
        
        <Route path="adotta" element={<Adotta />}>
          <Route index element={<Livello />} />
          <Route path="personalizza" element={<Personalizza />} />
          <Route path="riepilogo" element={<Riepilogo />} />
          <Route path="certificato" element={<Certificato />} />
        </Route>

        
        <Route path="esperienze" element={<Esperienze />} />
        <Route path="prenota-esperienze" element={<PrenotaEsperienze />} />
        
        <Route path="team" element={<Team />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="email-conferma" element={<EmailConferma />} />

        <Route path="faq" element={<Faq />} />

        <Route path="errore" element={<Errore />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

