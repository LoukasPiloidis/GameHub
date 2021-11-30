import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../slices/slice';
import './SearchForm.css';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      setSearchQuery(query)
    );
    e.target.reset();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <button type="submit" className="search-bar__submit-button">
        <FontAwesomeIcon icon={faSearch} className="submit-button__icon" />
      </button>
      <input type="text" className="search-bar__input-field" placeholder="Search game..." onChange={handleChange} />
    </form>
  );
};

export default SearchForm;
