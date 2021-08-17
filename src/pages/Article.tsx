import { match } from "react-router-dom";

const Article = ({ match }: { match: match<any> }): JSX.Element => {
  const name = match.params.name;

  return (
    <>
      <h1>{name} Article!</h1>
    </>
  );
};

export default Article;
