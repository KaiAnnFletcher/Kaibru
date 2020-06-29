import React from "react";

function ResultList( {children} ) {
  return (
    <ul className="list-group">
        <li className="list-group-item">
          {children}
        </li>
    </ul>
  );
}


export default ResultList;
