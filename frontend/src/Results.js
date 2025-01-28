import React from "react";
import { useLocation } from "react-router-dom";
import "./Results.css"; // Import your custom CSS for styling

const Results = () => {
  // Use the useLocation hook to get the data passed from the Search component
  const location = useLocation();
  const { arr, search } = location.state || {}; // Access arr from location state

  return (
    <div className="results">
      <div className="spacer"></div>
      <p className="resultPara">Results for "{search}":</p>
      <div className="results-container">
        {/* Display the arr data here */}
        <div className="img-container">
          <ul>
            {arr && arr.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Results;
