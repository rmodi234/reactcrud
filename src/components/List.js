import React from "react";
import Table from "react-bootstrap/Table";

import ListData from "./ListData";
function List(props) {
   const data = props.info
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Details</th>
          <th>Type</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
          {data.map((daa,index)=><ListData key={index} daa={daa} />)}
      </tbody>
    </Table>
  );
}
export default List;
