<template>
        <div>  
      <div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto ...">
        <div class="relative p-2 w-full max-w-sm max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Create Person
              </h3>
              <button @click="$emit('close-modal')" type="button" class="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="submitForm" class="p-4 md:p-5">
              <div class="grid gap-3 mb-4 grid-cols-1">

                <div class="col-span-3 sm:col-span-1">
                  <label for="personName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input v-model="personName" type="text" name="personName" id="personName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Person's Name" required>
                </div>
                <div class="col-span-3 sm:col-span-1">
                  <label for="personRole" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <MultiSelectDropdown formFieldName = "roles" :options = "roles"  @selectionChanged="handleSelectedRoles" v-model:selectedOptions="selectedOptions" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" aria-placeholder="select genres" />
                </div>
            
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { getRoles, createPerson } from '~/composables/api/adminService'; 
import { defineEmits } from 'vue';
import MultiSelectDropdown from './MultiSelectDropdown.vue'


const personName = ref('');
const roles = ref([])
const selectedOptions = ref([]);
const props = defineProps({
  personId: Number,
});
const emit = defineEmits(['update-successful','close-modal']);

onMounted(async () => {
  try {
    // Fetcht existing genres
    const rolesData = await getRoles();
    console.log('roles data . data',rolesData.data)
    if (rolesData.data.success) {
        console.log(rolesData.data)
      roles.value = rolesData.data.roles.map(role => role.roleName); // Only store genreName
      console.log('roles.value', roles.value)
    } else {
      console.error('Error fetching roles:', rolesData.data.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
});

const handleSelectedRoles = (selectedRoles) => {
  console.log('selected roles', selectedRoles);
  selectedOptions.value = selectedRoles;
};
const submitForm = async () => {
    try {
        console.log('selected options', selectedOptions.value)
        console.log([...selectedOptions.value])
        const response = await createPerson([...selectedOptions.value], personName.value)
        if (response) {
            emit('update-successful');
            emit('close-modal')


        }     
    } catch (error) {
    console.error('Error creating person:', error);
    }
}
</script>
