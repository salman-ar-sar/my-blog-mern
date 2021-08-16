import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
      </div>
    </Router>
  );
}

export default App;
