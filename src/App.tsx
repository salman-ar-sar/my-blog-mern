import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/article/:name" component={Article} exact />
          <Route path="/articles-list" component={ArticleList} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
