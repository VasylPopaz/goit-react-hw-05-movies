import { useState } from 'react';

import { SearchButton, SearchForm, SearchInput } from 'components';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        required
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};
