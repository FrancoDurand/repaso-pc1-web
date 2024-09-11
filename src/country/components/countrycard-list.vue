<template>
    <div>

    </div>
</template>

<script>
import countrycard_item from './countrycard-item.vue'
import { CountryApiService } from '../service/country-api';

export default {
    name: 'countrycard-list',
    components: { countrycard_item },
    data() {
        return {
            countries: [],
            contryApi: new CountryApiService()
        }
    },
    created() {
        this.contryApi.getContries()
            .then(response => {
                this.countries = response.data.countries.map(country => new Source(country));
            })
            .catch(e => alert("Error"));
    }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>