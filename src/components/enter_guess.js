import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class EnterGuess extends React.Component {
  constructor() {
    super()
    //this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    return (
      <div className="enter_guess_box">
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.addGuesses();
          const guessInput = event.target.guessBox.value;
          const abValNum = Math.abs(this.props.mysteryNum - guessInput);
          let tempMessage = '';
          if (abValNum === 0) {
            this.props.restartAll()
          }
          else if (abValNum <= 5) {
            tempMessage = 'HOT!!'
          }
          else if (abValNum <= 10) {
            tempMessage = 'Kind of hot...'
          }
          else if (abValNum <= 15) {
            tempMessage = 'Warmer'
          }
          else {
            tempMessage = 'Cold!'
          }
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
    mysteryNum: state.answer
});

const mapDispatchToProps = (dispatch) => ({
  newMessage: (tempMessage) => dispatch(actions.displayTemp(tempMessage)),

  addGuesses: (guess) => dispatch(actions.storeGuesses(guess)),

  restartAll: () => dispatch(actions.newGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(EnterGuess);
