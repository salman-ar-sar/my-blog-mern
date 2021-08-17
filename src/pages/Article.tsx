import { match } from "react-router-dom";
import articles, { Article } from "../data/ArticleContent";

interface Params {
  name: string;
}

const ArticlePage = ({ match }: { match: match<Params> }): JSX.Element => {
  const name = match.params.name;

  const article: Article | undefined = articles.find(
    (article) => article.name === name
  );

  if (!article) {
    return <h1>No article found!</h1>;
  }

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content.map((para, key) => (
        <p key={key}>{para}</p>
      ))}
    </>
  );
};

export default ArticlePage;
