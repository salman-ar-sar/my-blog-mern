import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import ArticleList from "../components/ArticlesList";
import articles, { Article, ArticleInfo } from "../data/ArticleContent";
import PageNotFound from "./PageNotFound";

interface Params {
  name: string;
}

const ArticlePage = ({ match }: { match: match<Params> }): JSX.Element => {
  const name = match.params.name;

  const article: Article | undefined = articles.find(
    (article) => article.name === name
  );

  const [articleInfo, setArticleInfo] = useState<ArticleInfo>({
    upvotes: 0,
    comments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);

      const body = await result.json();

      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <PageNotFound />;
  }

  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <>
      <h1>{article?.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article?.content.map((para, key) => (
        <p key={key}>{para}</p>
      ))}

      <h2>Other Articles:</h2>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
