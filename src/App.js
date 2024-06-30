import "./App.css";
import Navbar from "./components/navigation/navbar";
import Hero from "./components/startseite/hero";
import NavbarB from "./components/navigation/navbarB";
import Hauptbereich from "./components/startseite/hauptbereich";
import Lebenslauf from "./components/startseite/lebenslauf";
import Kenntnisse from "./components/startseite/kenntnisse";
import Projekte from "./components/startseite/projekte";
import Unterlagen from './components/startseite/unterlagen';
import Kontakt from './components/startseite/kontakt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarB />
      <Hero />
      <div className="hauptbereich">
        <Hauptbereich />
        <Lebenslauf />
        <Kenntnisse />
        <Projekte />
        <Unterlagen />
        <Kontakt  />
      </div>
    </div>
  );
}

export default App;
