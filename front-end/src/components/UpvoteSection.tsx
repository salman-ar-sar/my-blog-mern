import { ReactElement } from "react";
import { ArticleInfo } from "../data/ArticleContent";

interface Props {
  articleName: string;
  upvotes: number;
  setArticleInfo: React.Dispatch<React.SetStateAction<ArticleInfo>>;
}

export const UpvoteSection = ({
  articleName,
  upvotes,
  setArticleInfo,
}: Props): ReactElement => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div id="upvotes-section">
      <button onClick={upvoteArticle}>Add Upvote</button>
      <p>This post has been upvoted {upvotes} times</p>
    </div>
  );
};
