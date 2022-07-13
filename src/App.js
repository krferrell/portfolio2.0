import "./App.css";
import { AboutMe, Home, Layout, Skills } from "./components";
import logo from "./utils/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="K F II" />
      <Home />
      <Layout AboutMe={<AboutMe />} Skills={<Skills />} />
    </div>
  );
}

export default App;
