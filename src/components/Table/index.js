import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Date of Birth</th>
        </tr>
      </thead>
      {props.results.map(result => (
        <tbody>
          <tr>
            <td>{result.source}</td>
            <td>{result.abstract}</td>
            <td><a href="result.web_url">{result.abstract}</a></td>
            <td></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;