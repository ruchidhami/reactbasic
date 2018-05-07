import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onGreet() {
    alert('Hey! I am here.')
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  render() {
    var user = {
      firstName: "ruchi",
      lastName: "dhami",
      hobbies: ['playing', 'travelling', 'dancing'],
      age: 12
    };


    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home users={user} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)}>
              <p>Passes the html paragraph.</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));