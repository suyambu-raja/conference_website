import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deadlines from './components/Deadlines/Deadlines';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Committee from './pages/Committee/Committee';
import Keynote from './pages/Keynote/Keynote';
import Venue from './pages/Venue/Venue';
import KeyDates from './pages/KeyDates/KeyDates';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Submission from './pages/Submission/Submission';
import Publication from './pages/Publication/Publication';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import './App.css';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Deadlines />
    <About />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/keynote" element={<Keynote />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/key-dates" element={<KeyDates />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

