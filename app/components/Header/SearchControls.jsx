import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from 'mdi-material-ui/Magnify';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: theme.spacing(0, 4),
    height: topHeight => topHeight,
    borderBottom: `1px solid ${theme.palette.common.gray}`,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'flex-end',
    flexGrow: 1,
    height: '100%',
    padding: theme.spacing(0, 4, 3, 0),
    borderRight: `1px solid ${theme.palette.common.gray}`,
  },
  dropdown: {
    width: 150,
    margin: theme.spacing(0, 0, 3, 4),
  },
}));

const SearchControls = (props) => {
  const { topHeight } = props;
  const classes = useStyles(topHeight);
  const [searchText, setSearch] = useState('');
  const [sortBy, setSort] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <TextField
          fullWidth
          value={searchText}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <FormControl className={classes.dropdown}>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sortBy}
          onChange={event => setSort(event.target.value)}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="test">Test</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

SearchControls.propTypes = {
  topHeight: PropTypes.number.isRequired,
};

export default SearchControls;
