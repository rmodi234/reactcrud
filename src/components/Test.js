import React from 'react';

class Example extends React.Component{
    constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: ""
    };
  }
    render(){
        return(console.log("hello"));
    }
}
export default Example;