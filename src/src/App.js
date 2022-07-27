import './App.css';
import Nav from './components/Nav.js';
import About from './components/About.js'
import Skills from './components/Skills.js'
import Project from './components/Project';
import Contact from './components/Contact.js'
import GlobalStyle from './GlobalStyles.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
