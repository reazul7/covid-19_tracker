import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    // console.log(fetchedCountries);

    return (
        <div className="container pt-4">
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {
                        fetchedCountries.map((country, i) => <option value={country} key={i}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;