import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
import Hero from './components/Hero/Hero';
import Deadlines from './components/Deadlines/Deadlines';
import CollegeInfo from './components/CollegeInfo/CollegeInfo';
import AboutDepartment from './components/AboutDepartment/AboutDepartment';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Committee from './pages/Committee/Committee';
import Venue from './pages/Venue/Venue';
import KeyDates from './pages/KeyDates/KeyDates';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Submission from './pages/Submission/Submission';
import Publication from './pages/Publication/Publication';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import Brochure from './pages/Brochure/Brochure';
import './App.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #about), scroll to that element
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, scroll to the absolute top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Trigger on path or hash changes

  return null;
};

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <ScrollReveal><Deadlines /></ScrollReveal>
    <ScrollReveal><CollegeInfo /></ScrollReveal>
    <ScrollReveal><AboutDepartment /></ScrollReveal>
    <ScrollReveal><About /></ScrollReveal>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/key-dates" element={<KeyDates />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brochure" element={<Brochure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

