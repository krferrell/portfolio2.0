import "./App.css";
import { AboutMe, Home, Layout, Skills, Works } from "./components";
import logo from "./utils/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="K F II" />
      <Home />
      <Layout AboutMe={<AboutMe />} Skills={<Skills />} Works={<Works />} />
    </div>
  );
}

export default App;
