<template>
    <div v-for="country in countries">
        <countrycard_item :country="country" />
    </div>

</template>

<script>
import countrycard_item from './countrycard-item.vue'
import { CountryApiService } from '../service/country-api';
import { Country } from '../model/country';

export default {
    name: 'countrycard-list',
    components: { countrycard_item },
    data() {
        return {
            countries: [],
            countryApi: new CountryApiService()
        }
    },
    created() {
        this.countryApi.getCountries()
            .then(response => {
                this.countries = response.data.response.countries.map(country => new Country(country));
            })
            .catch(e => alert("Error"));
    }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>