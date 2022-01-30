import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestPage } from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}

export default App;
