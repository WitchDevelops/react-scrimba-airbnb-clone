import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
const App = (): JSX.Element => {
  return (
    <div className="app__container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
