import React, { Component } from "react";
import { connect } from "react-redux";
import DragonAvatar from "./DragonAvatar";
import { Button } from "react-bootstrap";
import { fetchDragon } from "../actions/dragon";
import fetchStates from "../reducers/fetchStates";

class Dragon extends Component {
  get DragonView() {
    const { dragon } = this.props;
    if (dragon.status === fetchStates.error) {
      return (
        <div>
          <span class="error">ERROR</span>
          <span>{dragon.message}</span>
        </div>
      );
    }
    return <DragonAvatar dragon={dragon} />;
  }
  render() {
    return (
      <div>
        <Button
          type="button"
          className="btn btn-primary"
          onClick={this.props.fetchDragon}
        >
          New Dragon
        </Button>
        <br />
        {this.DragonView}
      </div>
    );
  }
}

export default connect(
  // mapStateToProps
  ({ dragon }) => {
    return { dragon };
  },
  //mapDispatchToProps
  { fetchDragon }
)(Dragon);
