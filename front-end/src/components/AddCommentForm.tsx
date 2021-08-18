import React, { useState } from "react";
import { ArticleInfo } from "../data/ArticleContent";

interface Props {
  articleName: string;
  setArticleInfo: React.Dispatch<React.SetStateAction<ArticleInfo>>;
}

const AddCommentForm = ({ articleName, setArticleInfo }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          cols={50}
          rows={4}
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
