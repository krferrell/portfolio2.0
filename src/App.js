import "./App.css";
import { AboutMe, Home, Layout } from "./components";
import logo from "./utils/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="K F II" />
      <Home />
      <Layout AboutMe={<AboutMe />} />
    </div>
  );
}

export default App;
