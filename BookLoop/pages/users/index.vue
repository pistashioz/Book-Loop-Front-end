<template>
    <div>
      <SideBar/>
      <div class="text-center p-4 sm:ml-64 " v-if="isLoading">
        <div role="status">
          <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else class="bg-white p-4 sm:ml-64">
         
<body class="antialiased font-sans bg-white">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select @change="onFilterChange" v-model="filter" 
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option value="all">All</option>
                            <option value="to_be_deleted">To be deleted</option>
                            <option value="suspended">Suspended</option>
                        </select>
                        
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.username">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                                <img 
                                                v-if="user.profileImage" 
                                                :src="user.profileImage" 
                                                :alt="user.username"
                                                class="w-full h-full rounded-full" 
                                            />
                                            <img 
                                                v-else
                                                src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" 
                                                :alt="user.username"
                                                class="w-full h-full rounded-full" 
                                            />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{user.username}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ formatDate(user.registrationDate) }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span v-if = "user.isActiveStatus === 'active'"
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden 
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Active</span>
                                    </span>
                                    <span v-if = "user.isActiveStatus === 'to be deleted'"
                                        class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden 
                                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                        <span class="relative">To be deleted</span>
                                    </span>
                                    <span v-if = "user.isActiveStatus === 'Inactive'"
                                        class="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                                        <span aria-hidden 
                                            class="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Inactive</span>
                                    </span>
                                    <span v-if = "user.isActiveStatus === 'suspended'"
                                        class="relative inline-block px-3 py-1 font-semibold text-black-900 leading-tight">
                                        <span aria-hidden 
                                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                        <span class="relative">Suspended</span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"  @click="toggleDropdown(user.userId)">
                                    <button id="dropdownMenuIconButton"  v-if = "user.deletionScheduleDate == null || !isThirtyDaysPassed(user.deletionScheduleDate)" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </button>       
                                        <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[user.userId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                            <li>
                                                                <button v-if="user.isActiveStatus === 'to be deleted'" class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="removeUser(user.userId)">Delete</button>
                                                            </li>
                                                            <li>
                                                                <button v-if = "user.isActiveStatus == 'suspended'" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click = "SuspendUser(user)">Unsuspend</button>
                                                                <button v-else-if = "user.isActiveStatus == 'active'" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  @click = "SuspendUser(user)">Suspend</button>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                    
                                                  
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of {{total}} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button 
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                 @click="prevPage">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                 @click="nextPage">
                                Next
                            </button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!--<ModalDeleteUser v-if="showModal" @close-modal="showModal = false" :user="selectedUserId"/> -->
    </div>
</body>
      </div>
    </div>
  </template>
  
  <script setup>
  import SideBar from '~/components/SideBar.vue';
  import {findAll} from '~/composables/api/userService';
  import { toggleSuspension, deleteUser, getUsersForDeletion, getSuspendedUsers } from '~/composables/api/adminService';
  const isShowDropdown = reactive({})
  const props = defineProps({
    user: Object,
    });
  const isLoading = ref(true);
  const users = ref([]);
  const filter = ref('all')
  const currentPage = ref(1)
  const totalPages = ref(0)
  const total = ref(0)
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};


const toggleDropdown = async (userId) => {
    isShowDropdown[userId] = !isShowDropdown[userId];
}
const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    const usersData = await findAll(currentPage.value); // Fetch users for previous page
    if (usersData) {
      users.value = usersData.data;
    } else {
      console.error('Error fetching data:', usersData.error);
    }
  }
};

const SuspendUser = async(user) => {
    try{
        const today = new Date().toISOString().slice(0, 10);

        const suspension = {
            suspensionDate: today,
        };
        const response = await toggleSuspension(user.userId, suspension)
        console.log('API response: ', response)
        if (response) {
            user.isActiveStatus = user.isActiveStatus === 'active' ? 'suspended' : 'active';
    }
    } catch(error){
        console.error("Error suspending/unsuspending user:", error)
    }
}

const removeUser = async(userId) => {
    try {
        const response = await deleteUser(userId)
        console.log('API response: ', response)
        const userToDelete = document.querySelector(`tr[data-user-id="${userId}"]`)
    if (userToDelete) {
      const observer = new MutationObserver(() => {
        if (!userToDelete.parentNode) { // Check if user row is removed
          observer.disconnect()
        }
      })
      observer.observe(userToDelete.parentNode, { childList: true })
      userToDelete.parentNode.removeChild(userToDelete)
    }
}
    catch(error){
        console.error("Error deleting user: ", error)
    }
}
const isThirtyDaysPassed = async (deletionScheduleDate) => {
  const today = new Date();
  console.log('today: ', today)
  const deletionDate = new Date(deletionScheduleDate);
  console.log(deletionDate)
  const diffInMs = deletionDate.getTime() - today.getTime() ;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  console.log(diffInDays)
  if (diffInDays <= 0){
    return true
  }
  else {
    return false
  }
}

const nextPage = async () => {

  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    console.log(currentPage.value)
    const usersData = await findAll(currentPage.value); 
    console.log('userdataaaaa',usersData)
    if (usersData) {
      users.value = usersData.data;
    } else {
      console.error('Error fetching data:', usersData.error);
    }
  }
};

const fetchUsers = async () => {
  isLoading.value = true;
  try {
    let usersData
    if (filter.value === 'all') {
        usersData = await findAll(currentPage);
      console.log(usersData)
    } else if (filter.value === 'to_be_deleted') {
      usersData = await getUsersForDeletion();
    } else if (filter.value === 'suspended') {
      usersData = await getSuspendedUsers();
    }

    if (usersData) {
      total.value = usersData.totalUsers;
      users.value = usersData.data;
      currentPage.value = usersData.currentPage;
      totalPages.value = usersData.totalPages;
    } else {
      console.error('Error fetching data:', usersData.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    isLoading.value = false;
  }
};

const onFilterChange = () => {
  fetchUsers();
};

  onMounted(async () => {
    await fetchUsers();
/*
    try {
    const usersData = await findAll(currentPage);
    console.log('Users data: ', usersData)
    if (usersData){
        total.value = usersData.totalUsers
        console.log(total.value)
        users.value = usersData.data; // Asign eftched users to users variable
        currentPage.value = usersData.currentPage; // Update current page
        totalPages.value = usersData.totalPages; 
        users.value.forEach(user => {
        isShowDropdown[user.userId] = false;
    })
    } else {
        console.error('Error fetching data:', usersData.error);
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  } finally {
    isLoading.value = false;
  }*/
});
  

  </script>
  
  <style>
  .modal-container {
    z-index: 2; 
  }
  .dropdown-content {
    visibility: hidden; 
    opacity: 0; 
    transition: visibility 0s linear 0.3s, opacity 0.3s linear;
    position: absolute; 
}

.dropdown-content.show {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s; 
}
  </style>
  