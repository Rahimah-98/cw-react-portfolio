import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { Feedback } from './sections/Feedback';
import { Skills } from './sections/Skills';

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
