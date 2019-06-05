import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
class ListData extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.daa,
      name:'',
      details:'',
      type:'',
      tmp_id:'',
      tmp_name:'',
      tmp_details:'',
      tmp_type:'',
      status:false
    };
    
  }
  handelDelete = event =>{
    event.preventDefault();
   
    const id = event.target.value;
    fetch("http://127.0.0.1:8000/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    }).then(res =>console.log(res));
  }
  handelSingledata=(event)=>{
    event.preventDefault();
    const id = event.target.id;
    this.setState({status:true,tmp_id:id})
    fetch("http://127.0.0.1:8000/api/singledetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
      })
    }).then(res =>res.json())
      .then(res=>{
            this.setState({'name':res.data[0].name,'details':res.data[0].details,'type':res.data[0].type})
      })

  }
 handelClose=(e)=> {
    window.location.reload();
  }
  updatesubmit=(e)=>{
      e.preventDefault();
      // console.log(this.refs.name.value);
      const id =this.state.tmp_id;
      const name=this.state.tmp_name;
      const details=this.state.tmp_details;
      const type=this.state.tmp_type;
      fetch("http://127.0.0.1:8000/api/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id,
          name:name,
          details:details,
          type:type
        })}).then(res=>console.log(res))
  }
  handelname  = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    this.setState({tmp_name: e.target.value});
  }
  handeldetails  = (e) =>{
    e.preventDefault();
    this.setState({tmp_details: e.target.value});
  }
  handeltype  = (e) =>{
    e.preventDefault();
    this.setState({tmp_type: e.target.value});
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.state.data.id}</td> 
          <td>{this.state.data.name}</td>
          <td>{this.state.data.details}</td>
          <td>{this.state.data.type}</td>
          <td>{this.state.data.image}</td>
          <td>
            <button onClick={this.handelSingledata}  value="true" id={this.state.data.id}>
              Edit
            </button>
          </td>
          <td>
            <button onClick={this.handelDelete} value={this.state.data.id}>
              Delete
            </button>
          </td>
        </tr>
        <Modal show={this.state.status}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.updatesubmit}>
            <input placeholder="name" onChange={this.handelname} value={this.state.name} />
            <br />
            <br />
            <input placeholder="details" onChange={this.handeldetails}  value={this.state.details} />
            <br />
            <br />
            <input placeholder="type"  onChange={this.handeltype} value={this.state.type}/>
            <br />
            <br />
            <input type="submit" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handelClose} value="false" variant="secondary">
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      </React.Fragment>
    );
  }
}
export default ListData;
