import { match } from "react-router-dom";

interface Params {
  name: string;
}

const Article = ({ match }: { match: match<Params> }): JSX.Element => {
  const name = match.params.name;

  return (
    <>
      <h1>{name} Article!</h1>
    </>
  );
};

export default Article;
