import './App.css';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Hero';
import NavBar from './components/pages/NavBar';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';


function App() {
  return (
    <div>
      <NavBar />
      <main className='bk-main'>
        <Hero />
        <div className='div-skills'>
          <AboutMe />
          <Skills />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
export default App;
