import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./components/NavBar";
import PageNotFound from "./pages/PageNotFound";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={About} />
            <Route path="/article/:name" component={Article} />
            <Route path="/articles-list" component={ArticleListPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
