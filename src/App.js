import React from "react";
// import logo from './logo.svg';
// import './App.css';
//components imports
import Header from "./components/Header";
import List from "./components/List";
import Forms from "./components/Form";
// import Example from "./components/Test"
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/alltask")
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    const listdata = Object.values(this.state.data);

    return (
      <Router>
        <Header />
        <Route path="/#/list/" component={()=><List info={listdata}/>} />
        <Route path="/#/form/" component={Forms} />
      </Router>
    );
  }
}

export default App;
