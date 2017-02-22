import React from 'react';
import {connect} from 'react-redux';

export class Temp extends React.Component {
  render() {

    return (
      <div className="temp_box">
        <p>{this.props.tempStatus}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tempStatus: state.quiz.tempText
});

export default connect(mapStateToProps)(Temp);
