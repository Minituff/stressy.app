import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}

export default App;
