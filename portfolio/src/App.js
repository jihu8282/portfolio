import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import About from './components/AboutPage';
import Footer from './components/Footer';
import KakaoPage from './components/KakaoPage';
import ScrappyPage from './components/ScrappyPage';
import DaybreakPage from './components/DaybreakPage';
import InteractiveProjectsPage from './components/InteractiveProjectsPage';
function App() {
  return (
    <Router>

      <Navigation />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/daybreak" element={<DaybreakPage />} />
        <Route path="/scrappy" element={<ScrappyPage />} />
        <Route path="/interactive" element={<InteractiveProjectsPage />} />
        <Route path="/kakao" element={<KakaoPage />} />
        <Route path="/" element={<HomePage />} />


      </Routes>

      <Footer />

    </Router>
  );
}


export default App;
