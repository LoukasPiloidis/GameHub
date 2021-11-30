import React from 'react';
import { useSelector } from 'react-redux';
import './Results.css';

const Results = () => {
  const searchQuery = useSelector(state => state.query);

  return (
    <div className="page-content__results">
      <h2>Search for: {searchQuery.query}</h2>
    </div>
  );
};

export default Results;
