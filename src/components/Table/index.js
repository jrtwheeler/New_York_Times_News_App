import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Source</th>
          <th scope="col">Abstract</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      {props.results.map(result => (
        <tbody>
          <tr>
            <td>{result.source}</td>
            <td>{result.abstract}</td>
            <td><a href={result.web_url} target="_blank">{result.headline.main}</a></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;