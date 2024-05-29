import './Counter.scss';
import { Segment } from 'semantic-ui-react';

type CounterProps = {
  counter: number;
};

function Counter({ counter }: CounterProps) {
  return (
    <Segment className="counter-message">
      {counter > 0
        ? `La recherche a donné ${counter} résultats`
        : `La recherche n'a donné aucun résultat`}
    </Segment>
  );
}

export default Counter;
