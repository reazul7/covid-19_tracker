import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let chnageableUrl = url;
    if (country){
        chnageableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(chnageableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (err) {
        console.log(err.message);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    }
    catch (err) {
        console.log(err.message);
    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch(err){
        console.log(err.message);
    }
}