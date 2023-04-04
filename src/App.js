import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';


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
