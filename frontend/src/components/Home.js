import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Dragon from "./Dragon";
import Generation from "./Generation";
import { logout } from "../actions/account";
import AccountInfo from "./AccountInfo";

class Home extends Component {
  render() {
    return (
      <div>
        <Button className="logout-button" onClick={this.props.logout}>
          Log Out
        </Button>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
        <hr />
        <AccountInfo />
        <hr />
        <Link to="/account-dragons">Account Dragons</Link>

        <br />
        <Link to="/public-dragons">Public Dragons</Link>
      </div>
    );
  }
}

export default connect(null, { logout })(Home);
