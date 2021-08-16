import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/article" component={Article} exact />
          <Route path="/articles-list" component={ArticleList} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
