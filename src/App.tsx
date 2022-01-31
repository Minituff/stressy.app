import NavBar from './components/NavBar';
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestPage } from './pages/TestPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
