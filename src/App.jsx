import houseLogo from "./assets/house.png";
import "./App.css";
import MortgageForm from "./components/MortgageForm";
import ResultsSummary from "./components/ResultsSummary";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={houseLogo} alt="house" />
        </div>
        <div>
          <h1>Mortgage Calculator</h1>
        </div>
        <MortgageForm />
        <ResultsSummary />
      </section>
    </>
  );
}

export default App;
