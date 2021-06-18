import React from 'react';
import './CountryPicker.css';
import { NativeSelect, FormControl } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCountries } from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    // console.log(fetchedCountries);

    return (
        <div className="container pt-5">
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
                    {
                        fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;