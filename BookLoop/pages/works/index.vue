<template>
    <div>
        <div class="bg-white">
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div v-for="work in works">
                    <h3 class="mt-4 text-sm text-gray-700"><NuxtLink :to="`/works/${work.workId}`">{{ work.originalTitle }}</NuxtLink></h3>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const works = ref([])

const fetchWorks = async () => {
    const { data } = await useFetch('http://127.0.0.1:3360/works')
    if (data.value && data.value.success) {
        works.value = data.value.data
    }
}

onMounted(fetchWorks)
</script>
