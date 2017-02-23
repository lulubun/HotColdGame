import React from 'react';
import {connect} from 'react-redux';


export class OldGuesses extends React.Component {
  render() {
    return (
      <div className="old_guesses_box">
        {this.props.oldGuesses}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  oldGuesses: state.guesses.oldGuesses
});

export default connect(mapStateToProps)(OldGuesses);
