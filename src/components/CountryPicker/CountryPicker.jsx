import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const withStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));

const useStyle = makeStyles((theme) => ({
    FormControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);


    return (
        
        <FormControl variant="outlined" color="primary"className={classes.FormControl}>
            <MenuItem>
                <Select labelId="demo-simple-select-outlined-label" native
                    defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </Select>
            </MenuItem>
        </FormControl>
        

    )
}

export default CountryPicker;