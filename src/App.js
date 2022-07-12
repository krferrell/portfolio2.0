import "./App.css";
import { Home, Layout } from "./components";
import logo from "./utils/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="K F II" />
      <Home />
      <Layout />
    </div>
  );
}

export default App;
