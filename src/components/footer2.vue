<template>
    <footer>
        <p>Copyright BLAB BLAB ALB</p>
        <p>{{ name }}</p>
        <p>L: {{ $t('language') }}</p>
    </footer>
</template>

<script>
export default {
    name: 'footer2',
    props: {
        name: {
            required: true
        }
    }
    // Your component's logic goes here
}
</script>

<style scoped>
/* Your component's styles go here */
</style>