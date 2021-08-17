import { match } from "react-router-dom";
import ArticleList from "../components/ArticlesList";
import articles, { Article } from "../data/ArticleContent";
import PageNotFound from "./PageNotFound";

interface Params {
  name: string;
}

const ArticlePage = ({ match }: { match: match<Params> }): JSX.Element => {
  const name = match.params.name;

  const article: Article | undefined = articles.find(
    (article) => article.name === name
  );

  if (!article) {
    return <PageNotFound />;
  }

  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content.map((para, key) => (
        <p key={key}>{para}</p>
      ))}

      <h2>Other Articles:</h2>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
