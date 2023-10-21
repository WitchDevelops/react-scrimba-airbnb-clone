import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
const App = (): JSX.Element => {
  return (
    <div className="app__container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
