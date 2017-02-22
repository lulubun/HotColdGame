import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class EnterGuess extends React.Component {
  render() {
    return (
      <div className="enter_guess_box">
        <form onSubmit={(event) => {
          event.preventDefault();
          const guessInput = event.target.guessBox.value;
          this.props.addGuesses(guessInput);
          const abValNum = Math.abs(this.props.mysteryNum - guessInput);
          let tempMessage = '';
          if (abValNum === 0) {
            this.props.restartAll()
          }
          else if (abValNum <= 5) {
            tempMessage = 'HOT!!'
            this.props.newMessage(tempMessage)

          }
          else if (abValNum <= 10) {
            tempMessage = 'Kind of hot...'
            this.props.newMessage(tempMessage)
          }
          else if (abValNum <= 15) {
            tempMessage = 'Warm'
            this.props.newMessage(tempMessage)

          }
          else {
            tempMessage = 'Cold!'
            this.props.newMessage(tempMessage)
          }
          event.target.guessBox.value = '';
        }}>
          <input type="text" name="guessBox"></input>
          <button type="submit">
            Guess!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
    mysteryNum: state.quiz.answer
});

const mapDispatchToProps = (dispatch) => ({
  newMessage: (tempMessage) => dispatch(actions.displayTemp(tempMessage)),

  addGuesses: (guess) => dispatch(actions.storeGuesses(guess)),

  restartAll: () => dispatch(actions.newGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(EnterGuess);
