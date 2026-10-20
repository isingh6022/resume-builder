import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import SplitView from './components/SplitView';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Summary />
      <SplitView className="container">
        <>
          <Experience />
          <Projects />
        </>
        <>
          <Skills />
          <Education />
          <Achievements />
        </>
      </SplitView>
      <Footer />
    </main>
  );
}

export default App;
