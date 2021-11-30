import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import './Results.css';

const Results = () => {
  const searchQuery = useSelector(state => state.query.query);
  const searchResults = useSelector(state => state.searchResults.searchResults);

  return (
    <div className="page-content__results">
      <h2>Search for: {searchQuery}</h2>
      {searchResults.length > 0 && searchResults.map(game => <GameCard game={game} />)}
    </div>
  );
};

export default Results;
