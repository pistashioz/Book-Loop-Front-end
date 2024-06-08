<template>
    <div class="space-y-6">
      <div v-for="(category, categoryName) in privacyData" :key="categoryName" class="border border-gray-200 rounded-lg p-4">
        <h5 class="text-lg font-bold dark:text-white capitalize">{{ categoryName }}</h5>
        <div v-for="(setting, settingKey) in category" :key="settingKey" class="flex justify-between items-center mb-4">
          <div>
            <h6 class="text-base font-bold dark:text-white">{{ settingKey.replace(/_/g, ' ') }}</h6>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ setting.description }}</p>
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="setting.value">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineExpose } from 'vue';
  
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  });
  
  const privacyData = ref(props.data);
  
  defineExpose({
    getFlattenedData() {
      const flattenedData = {};
      for (const [category, settings] of Object.entries(privacyData.value)) {
        for (const [key, setting] of Object.entries(settings)) {
          flattenedData[key] = setting.value;
        }
      }
      return flattenedData;
    }
  });
  </script>
  
  <style scoped>
  </style>
  