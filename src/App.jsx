import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Deadlines from './components/Deadlines/Deadlines';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Deadlines />
      <About />
      <Footer />
    </div>
  );
}

export default App;
