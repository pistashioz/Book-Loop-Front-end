<template>
    <div>  
      <div id="crud-modal" tabindex="-1" aria-hidden="true" class="modal-overlay fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto ...">
        <div class="relative p-2 w-full max-w-sm max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Person
              </h3>
              <button @click="$emit('close-modal')" type="button" class="close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="deleteRoles" class="p-4 md:p-5">
              <div class="grid gap-3 mb-4 grid-cols-1">
                <select v-model = 'role'
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option value="all">Author</option>
                            <option value="narrator">Narrator</option>
                            <option value="translator">Translator</option>
                        </select>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Remove Roles
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { removeRole } from '~/composables/api/adminService'; 
  import { defineEmits } from 'vue';
  const role = ref('')
  const selectedOptions = ref([]);
  const personName = ref('');
  const props = defineProps({
    personId: Number,
  });
  const emit = defineEmits(['update-successful','close-modal']);




const deleteRoles = async() => {
  try{
    console.log(role.value)
    const response = await removeRole(props.personId, role.value)
    console.log(response)
    if (response) {
            emit('update-successful', { personId: props.personId, role: role.value });
            emit('close-modal')
        }     
    } catch (error) {
    console.error('Error creating person:', error);
    }
  }

  </script>
  