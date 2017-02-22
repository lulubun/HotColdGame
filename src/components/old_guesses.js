import React from 'react';
import {connect} from 'react-redux';


export class OldGuesses extends React.Component {
  render() {
    return (
      <div className="old_guesses_box">
        {this.props.eachGuess}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  eachGuess: state.guesses.eachGuess
});

export default connect(mapStateToProps)(OldGuesses);
