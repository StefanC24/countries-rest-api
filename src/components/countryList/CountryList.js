// import CountryCard from "../Country card/CountryCard"
import React from 'react'
import axios from 'axios'
import Country from '../countryCard/Country';
import './CountryList.css'

function CountryList(){

    const [countries, setCountries] = React.useState();

    React.useEffect(() => {
        fetchCoutries()
    }, []);

    function fetchCoutries(){
        axios.get('https://restcountries.com/v3.1/all')
        .then(response => setCountries(response.data))
    };

    return(
        <div className='countries-container'>
            {countries?.map(item => <Country {...item}/>)}
        </div>
    );
}
export default CountryList