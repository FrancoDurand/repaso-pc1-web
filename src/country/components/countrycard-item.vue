<template>
    <pv-card>
        <template #title>
            {{ $t('name') }}: {{ country.country_name }}
        </template>
        <template #content>
            <p>Iso:{{ country.iso_3166 }}</p>
            <p>{{ $t('total') }}: {{ country.total_holidays }}</p>
            <p>{{ $t('total2') }}: {{ country.supported_languages }}</p>
            <p>UUID: {{ country.uuid }}</p>
            <p>{{ $t('flag') }}: {{ country.flag_unicode }}</p>
        </template>
    </pv-card>
</template>

<script>
import { Country } from '../model/country';

export default {
    name: 'countrycard_item',
    props: {
        country: {
            type: Country,
            required: true
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