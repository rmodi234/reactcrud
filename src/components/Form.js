import React from "react";
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      details: "",
      type: ""
    };
  }

  //   handleName = event => {
  //     this.setState({
  //       name: event.target.value
  //     });
  //   };
  //   handleDetails = event => {
  //     this.setState({
  //       details: event.target.value
  //     });
  //   };
  //   handleType = event => {
  //     this.setState({
  //       type: event.target.value
  //     });
  //   };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.refs.name.value;
    const details = this.refs.details.value;
    const type = this.refs.type.value;
    fetch("http://127.0.0.1:8000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: name,
        details: details,
        type: type
      })
    }).then(res => {window.location.reload()});
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input ref="name" />
        </label>
        <label>
          Details:
          <input ref="details" />
        </label>
        <label>
          Type:
          <input ref="type" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;
