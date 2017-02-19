import React from 'react';
import {connect} from 'react-redux';


export class Temp extends React.Component {
  constructor() {
    super()
    this.props = this.props.bind(this)
  }

  render() {
    return (
      <div className="temp_box">
        <p>{this.props.tempStatus}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tempStatus: state.quizReducer.tempText
});

export default connect(mapStateToProps)(Temp);
