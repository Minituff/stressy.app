import NavBar from './components/NavBar';
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TermsPage } from './pages/TermsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        
        <NavBar></NavBar>
        
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        
        <Footer></Footer>

      </HashRouter>

    </div>
  );
}

export default App;
