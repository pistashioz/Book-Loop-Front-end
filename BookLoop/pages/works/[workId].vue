<template>
    <div>
        <h1>Word Details for {{ workId }}</h1>

    </div>
</template>

<script setup>
const { workId } = useRoute().params
definePageMeta({
    layout: 'works'
})
</script>

<style lang="scss" scoped>

</style>