import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const AnecdoteFilter = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(setFilter(query));
  };

  const handleClear = (e) => {
    setQuery('');
    dispatch(setFilter(''));
  };

  return (
    <div>
      Filter: <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default AnecdoteFilter;
