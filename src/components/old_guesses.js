import React from 'react';
import {connect} from 'react-redux';


export class OldGuesses extends React.Component {
  render() {
    return (
      <div className="old_guesses_box">
      <h4>{this.props.guesses}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  guesses: state.quizReducer.oldGuesses
});

export default connect(mapStateToProps)(OldGuesses);
