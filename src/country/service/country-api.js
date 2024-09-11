import axios from 'axios';

const POTO = import.meta.env.API_KEY2;

const http = axios.create({
    baseURL: 'https://calendarific.com/api/v2'
});


export class CountryApiService {
    apiKey = POTO;

    getContries() {
        return http.get(`/countries?apiKey=${this.apiKey}`);
        ///countries?api_key=FAxoUfGc2RxFhEFuSu6YF3DJnpToHGhy
    }
}