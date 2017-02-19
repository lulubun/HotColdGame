import React from 'react';
import {connect} from 'react-redux';


export class GuessCount extends React.Component {

  render() {
    return (
      <div className="guess_count_box">
      <h2>Guess #{this.props.count}!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  count: state.guessCount
});

export default connect(mapStateToProps)(GuessCount);
