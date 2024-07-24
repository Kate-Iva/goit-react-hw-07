import { useId } from 'react';
import classes from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectedNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectedNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const searchID = useId();
  return (
    <div className={classes.searchBox}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input
        id={searchID}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;