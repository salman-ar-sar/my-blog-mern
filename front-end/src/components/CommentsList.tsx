export interface Comment {
  username: string;
  text: string;
}

const CommentsList = ({ comments }: { comments: Comment[] }) => (
  <>
    {comments.map((comment, key) => (
      <div className="comment" key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
