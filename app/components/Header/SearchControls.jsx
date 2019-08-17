import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(2),
  },
  searchBar: {
    flexGrow: 1,
    paddingRight: theme.spacing(4),
  },
  dropdown: {
    width: 150,
  },
}));

const SearchControls = () => {
  const classes = useStyles();
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

export default SearchControls;
