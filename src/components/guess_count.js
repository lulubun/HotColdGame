import React from 'react';
import {connect} from 'react-redux';


export class GuessCount extends React.Component {

  componentDidMount() {
    this.props.dispatch.fetchBestGuessCount()
  }

  render() {
    return (
      <div className="guess_count_box">
      <h2>Guess #{this.props.count}!</h2>
      <h4>Least Number of Guesses Used:{this.props.best}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  count: state.guesses.guessCount,
  best: state.guesses.fewestGuesses
});

export default connect(mapStateToProps)(GuessCount);
