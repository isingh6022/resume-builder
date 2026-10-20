import "./App.css";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import SplitView from "./components/SplitView";

function App() {
  return (
    <main>
      <Header />
      <Summary />
      <SplitView>
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
    </main>
  );
}

export default App;
