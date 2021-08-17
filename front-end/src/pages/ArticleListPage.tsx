import ArticleList from "../components/ArticlesList";
import articles from "../data/ArticleContent";

const ArticleListPage = (): JSX.Element => (
  <>
    <h1>Articles List:</h1>
    <ArticleList articles={articles} />
  </>
);

export default ArticleListPage;
