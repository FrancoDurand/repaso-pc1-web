import axios from 'axios';

const POTO = import.meta.env.VITE_API_KEY2;

const http = axios.create({
    baseURL: 'https://calendarific.com/api/v2'
});


export class CountryApiService {
    apiKey = POTO;

    getCountries() {
        //console.log(http.get(`countries?api_key=${this.apiKey}`))
        return http.get(`countries?api_key=${this.apiKey}`);
    }
}