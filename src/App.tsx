import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
const App = (): JSX.Element => {
  return (
    <div className="app__container">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
