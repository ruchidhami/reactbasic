import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: props.users.firstName,
      lastName: props.users.lastName,
      age: props.users.age,
      homeLink: "New Link"
    };
  }

  clickMe() {
    this.setState({
      age: this.state.age + 3,
      firstName: "Barsha"
    });
  }

  clickOther() {
    console.log('other clickable!');
    this.lastName = "khadka"
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {
    return (
      <div>
        <p>
          This is home page!
        </p>
        <p>Your Name is :{this.state.firstName} {this.state.lastName} age is :{this.state.age}</p>
        <div>

          <ul>
            Hobbies:
            {this.props.users.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
          </ul>
          {this.props.children}
          <hr/>
          <button onClick={this.clickMe.bind(this)} className="btn btn-primary">Click me!</button>
          <hr/>
          <button onClick={() => this.clickOther()} className="btn btn-primary">Click other!
          </button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
          <hr/>
          <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header
          </button>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  users: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
  greet: React.PropTypes.func
};