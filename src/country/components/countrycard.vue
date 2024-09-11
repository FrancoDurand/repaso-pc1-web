<template>
    <pv-card>
        <template #title>
            Name: {{ country.country_name }}
        </template>
        <template #content>
            <p>Iso:{{ country.iso_3166 }}</p>
            <p>Total holidays: {{ country.total_holidays }}</p>
            <p>Supported languages: {{ country.supported_languages }}</p>
            <p>UUID: {{ country.uuid }}</p>
            <p>Flag: {{ country.flag_unicode }}</p>
        </template>
    </pv-card>
</template>

<script>
import { Country } from '../model/country';

export default {
    name: 'country-card',
    data() {
        return {
            country: new Country({
                "country_name": "Afghanistan",
                "iso_3166": "AF",
                "total_holidays": 24,
                "supported_languages": 2,
                "uuid": "f0357a3f154bc2ffe2bff55055457068",
                "flag_unicode": "🇦🇫"
            })
            //country: new Country("Afghanistan", "AF", 24, 2, "f0357a3f154bc2ffe2bff55055457068", "🇦🇫") sin llaves en el class
        }
    }
}
</script>

<style scoped>
/* Your component's styles go here */
</style>

<!-- 
header,
title,
subtitle,
content 
footer
-->