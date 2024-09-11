<script setup>
import countrycardList from './country/components/countrycard-list.vue';
import footer2 from './components/footer2.vue';

</script>

<template>
  <div>
    <button @click="$t($i18n.locale = 'en')">EN</button>
    <button @click="$t($i18n.locale = 'es')">ES</button>
  </div>

  <pv-toolbar>
    <template #start>
      {{ $t('title') }}
    </template>
  </pv-toolbar>

  <countrycardList />

  <footer2 name="AAA" />
</template>

<style scoped></style>
