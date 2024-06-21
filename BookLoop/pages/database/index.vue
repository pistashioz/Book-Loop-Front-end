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
         

<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
            <button  @click.prevent="changePage('users')" :class="{'text-gray-900': currentPage === 'users'}" ref="defaultOpen" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>Users
            </button>
        </li>
        <li class="me-2">
            <button @click.prevent="changePage('persons')" :class="{'text-gray-900': currentPage === 'persons'}"  class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>Persons
            </button>
        </li>
        <li class="me-2">
            <button @click.prevent="changePage('publishers')" :class="{'text-gray-900': currentPage === 'publishers'}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
                </svg>
                Publishers
            </button>
        </li>
        <li class="me-2">
            <button @click.prevent="changePage('genres')" :class="{'text-gray-900': currentPage === 'genres'}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"/>
                </svg>
                Genres
            </button>
        </li>
    </ul>
</div>

<body class="antialiased font-sans bg-white">
    <div class="container mx-auto px-4 sm:px-8" v-if="currentPage === 'users'">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select @change.prevent="onFilterChange" v-model="filter" 
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
                            <tr v-for="user in users" :key="user.username" >
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
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
                                    <button id="dropdownMenuIconButton"  v-if = "user.deletionScheduleDate == null ||!isThirtyDaysPassed(user.deletionScheduleDate) || user.isActiveStatus == 'suspended' || user.isActiveStatus == 'active'" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </button>       
                                       <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[user.userId]}" class="dropdown-content z-10 bg-white  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
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
    </div>
    <div class="container mx-auto px-4 sm:px-8" v-if="currentPage === 'persons'">
   <div class="py-8">
        <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold leading-tight">Persons</h2>
            <button @click = "showAddPersonModal = true" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Create Person
            </button>
        </div>
            <div class="my-2 flex sm:flex-row flex-col">


                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select @change.prevent="onFilterChange" v-model="filterPersons" 
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option value="all">All</option>
                            <option value="author">Authors</option>
                            <option value="narrator">Narrators</option>
                            <option value="translator">Translators</option>
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
                                    ID
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Works
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Translations
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Audiobooks
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Most Recent Publication
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="person in persons" :key="person.personId" >
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">


                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{person.personId}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">


                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{person.personName}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ person.worksCount }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ person.translationCount }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ person.audiobookCount }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ person.mostRecentPublication }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"  @click="toggleDropdown(person.personId)">
                                    <button id="dropdownMenuIconButton"  data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </button>       
                                        <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[person.personId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                            <li>
                                                                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="openEditPerson(person.personId)">Edit</button>
                                                            </li>
                                                            <li>
                                                                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="openRemoveRole(person.personId)">Remove Role</button>
                                                            </li>
                                                            <li>

                                                                <button class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="deletePerson(person.personId)">Delete</button>
                                                                
                                                            </li>
                                                        </ul>
                                                    </div>  
                                    
                                                  
                                </td>
                            </tr>
                        </tbody>
                        <editPersonModal v-show="showModal" @close-modal="showModal = false" @update-successful="handleUpdate('persons')" :personId="currentPersonId"/>
                        <AddPersonModal v-show = "showAddPersonModal" @close-modal = "showAddPersonModal = false" @update-successful="handleUpdate('persons')" />
                        <RemoveRoleModal  v-show="showRemoveRoleModal" @close-modal="showRemoveRoleModal = false" @update-successful="handleUpdate('persons')" :personId="currentPersonId"/>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of {{totalPersons}} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button 
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                 @click="personsPrevPage">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                 @click="personNextPage">
                                Next
                            </button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="container mx-auto px-4 sm:px-8" v-if="currentPage === 'publishers'">
        <div class="py-8">
            <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold leading-tight">Publishers</h2>
            <button @click = "showAddPublisherModal = true" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Create Publisher
            </button>
        </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
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
                                    ID
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Publications
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Most Recent Publication
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="publisher in publishers" :key="publisher.publisherId" >
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">


                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{publisher.publisherId}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">


                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{publisher.publisherName}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ publisher.publicationCount }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ publisher.mostRecentPublication }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"  @click="toggleDropdown(publisher.publisherId)">
                                    <button id="dropdownMenuIconButton"  data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </button>       
                                        <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[publisher.publisherId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                                            <li>
                                                                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="openEditPublisher(publisher.publisherId)">Edit</button>
                                                            </li>
                                                            <li>
                                                                <button class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="deletePublisher(publisher.publisherId)">Delete</button>
                                                            </li>
                                                        </ul>
                                                    </div>  
                                    
                                                  
                                </td>
                            </tr>
                        </tbody>
                        <AddPublisherModal v-show = "showAddPublisherModal" @close-modal = "showAddPublisherModal = false" @update-successful="handleUpdate('publisher')" />
                        <editPublisherModal v-show="showEditPublisherModal" @close-modal="showEditPublisherModal = false" @update-successful="handleUpdate('publisher')" :publisherId="currentPublisherId"/>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of {{totalPublishers}} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button 
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                 @click="publisherPrevPage">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                 @click="publisherNextPage">
                                Next
                            </button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
    <div class="container mx-auto px-4 sm:px-8" v-if="currentPage === 'genres'">
        <div class="py-8">
            <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold leading-tight">Genres</h2>
            <button @click = "showAddGenreModal = true" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Create Genre
            </button>
        </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
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
                                    ID
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="genre in genres" :key="genre.genreId" >
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">


                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{genre.genreId}}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                         {{ genre.genreName }} 
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"  @click="toggleDropdown(genre.genreId)">
                                    <button id="dropdownMenuIconButton"  data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                                        </svg>
                                    </button>       
                                    <div id="dropdownDots" :class="{'dropdown-content': true, 'show': isShowDropdown[genre.genreId]}" class="dropdown-content z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                            <li>
                                                <button class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="openEditGenre(genre.genreId)">Edit</button>
                                            </li>
                                            <li>

                                                <button class="block px-4 text-red-500 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-semibold" @click="deleteGenre(genre.genreId)">Delete</button>
                                                
                                            </li>
                                        </ul>
                                    </div>            
                                </td>
                            </tr>   
                        </tbody>
                        <AddGenreModal v-show = "showAddGenreModal" @close-modal = "showAddGenreModal = false" @update-successful="handleUpdate('genres')" />
                        <editGenreModal v-show="showEditGenreModal" @close-modal="showEditGenreModal = false" @update-successful="handleUpdate('genres')" :genreId="currentGenreId"/>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 10 of {{totalGenres}} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button 
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                                 @click="genrePrevPage">
                                Prev
                            </button>
                            <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                                 @click="genreNextPage">
                                Next
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
</body>
      </div>
    </div>
  </template>
  
  <script setup>
  import SideBar from '~/components/SideBar.vue';
  import {findAll} from '~/composables/api/userService';
  import editPersonModal from '~/components/UpdatePerson.vue'
  import editPublisherModal from '~/components/UpdatePublisher.vue'
  import AddPersonModal from '~/components/AddPerson.vue'
  import editGenreModal from '~/components/UpdateGenre.vue'
  import AddPublisherModal from '~/components/AddPublisher.vue'
  import AddGenreModal from '~/components/AddGenre.vue'
  import RemoveRoleModal from '~/components/RemovePersonRoles.vue'
  import { toggleSuspension, deleteUser, getUsersForDeletion, getSuspendedUsers, getPersons, removePerson, getPublishers, removePublisher, getGenres, removeGenre } from '~/composables/api/adminService';
  const isShowDropdown = reactive({})
  const props = defineProps({
    user: Object,
    });
  const isLoading = ref(true);
  const currentPersonId = ref(null);
  const currentPublisherId = ref(null)
  const currentGenreId = ref(null)
  const users = ref([]);
  const filter = ref('all')
  const currentPage = ref(null)
  const personCurrentPage = ref(0)
  const totalPages = ref(0)
  const total = ref(0)
  const totalPersons = ref(0)
  const personTotalPages = ref(0)
  const persons = ref([]);
  const filterPersons = ref('all')
  const publishers = ref([])
  const totalPublishers = ref(0)
  const publisherTotalPages = ref(0)
  const publisherCurrentPage = ref(1)
  const genres = ref([]);
  const totalGenres = ref(0);
  const genreTotalPages = ref(0)
  const genreCurrentPage = ref(1)
  const selectedPersonId = ref(null)
  const showModal = ref(false)
  const showEditPublisherModal = ref(false)
  const showEditGenreModal = ref(false)
  const showAddPersonModal = ref(false)
  const showAddPublisherModal = ref(false)
  const showAddGenreModal = ref(false)
  const showRemoveRoleModal  = ref(false)
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const openEditPerson = (personId) => {
  currentPersonId.value = personId;
  showModal.value = true;
};
const openEditPublisher = (publisherId) =>   {
    currentPublisherId.value = publisherId;
    showEditPublisherModal.value = true
}
const openEditGenre = (genreId) =>   {
    currentGenreId.value = genreId;
    showEditGenreModal.value = true
}
const openRemoveRole = (personId) => {
    currentPersonId.value = personId;
    showRemoveRoleModal.value = true;
}

const handleUpdate = async (context) => {
    switch (context) {
        case 'persons':
            await fetchPersons();
            break;
        case 'genres':
            await fetchGenres();
            break;
        case 'publishers':
            await fetchPublishers();
            break;
        default:
            console.error('Invalid context:', context);
            break;
    }
};


const changePage = (page) => {
  currentPage.value = page;

};

const toggleDropdown = async (id) => {
    isShowDropdown[id] = !isShowDropdown[id];
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

const personsPrevPage = async () => {
    console.log(personCurrentPage.value)
    const role = filterPersons.value !== 'all' ? filterPersons.value : '';
    console.log('role: ', role);
  if (personCurrentPage.value > 1) {
    personCurrentPage.value--;
    console.log(personCurrentPage.value)
    try {
          const personData = await getPersons(role, personCurrentPage.value); 
          console.log('Fetched Person Data: ', personData);
          
          if (personData && personData.success) {
              persons.value = personData.persons;
              console.log('Updated persons: ', persons.value);
          } else {
              console.error('Error fetching data:', personData.error);
          }
      } catch (error) {
          console.error('Error in personsPrevPage:', error);
      }
  }
};

const publisherPrevPage = async () => {

  if (publisherCurrentPage.value > 1) {
    publisherCurrentPage.value--;
    console.log(publisherCurrentPage.value)
    try {
          const publisherData = await getPublishers(publisherCurrentPage.value); 
          console.log('Fetched Publisher Data: ', publisherData);
          if (publisherData && publisherData.success) {
              publishers.value = publisherData.publishers;
              console.log('Updated publishers: ', publishers.value);
          } else {
              console.error('Error fetching data:', publisherData.error);
          }
      } catch (error) {
          console.error('Error in publisherPrevPage:', error);
      }
  }
};

const genrePrevPage = async () => {

    if (genreCurrentPage.value > 1) {
    genreCurrentPage.value--;
      console.log( genreCurrentPage.value);
      
      try {
          const genreData = await getGenres(genreCurrentPage.value); 
          console.log('Fetched Genres Data: ', genreData);
          
          if (genreData && genreData.success) {
              genres.value = genreData.genres;
              console.log('Updated genres: ', genres.value);
          } else {
              console.error('Error fetching data:', genreData.error);
          }
      } catch (error) {
          console.error('Error in publisherNextPage:', error);
      }
  }
};

const nextPage = async () => {

if (currentPage.value < totalPages.value) {
  currentPage.value++;
  console.log(currentPage.value)
  const usersData = await findAll(currentPage.value); 
  if (usersData) {
    users.value = usersData.data;
  } else {
    console.error('Error fetching data:', usersData.error);
  }
}
};

const personNextPage = async () => {
  const role = filterPersons.value !== 'all' ? filterPersons.value : '';
  console.log('role: ', role);
  console.log('Current Page (before increment): ', personCurrentPage.value);
  console.log('Total Pages: ', personTotalPages.value);
  
  if (personCurrentPage.value < personTotalPages.value) {
      personCurrentPage.value++;
      console.log('Current Page (after increment): ', personCurrentPage.value);
      
      try {
          const personData = await getPersons(role, personCurrentPage.value); 
          console.log('Fetched Person Data: ', personData);
          
          if (personData && personData.success) {
              persons.value = personData.persons;
              console.log('Updated persons: ', persons.value);
          } else {
              console.error('Error fetching data:', personData.error);
          }
      } catch (error) {
          console.error('Error in personNextPage:', error);
      }
  }
};


const publisherNextPage = async () => {  
  if (publisherCurrentPage.value < publisherTotalPages.value) {
      publisherCurrentPage.value++;
      console.log('Current Page (after increment): ', publisherCurrentPage.value);
      
      try {
          const publisherData = await getPublishers(publisherCurrentPage.value); 
          console.log('Fetched Publisher Data: ', publisherData);
          
          if (publisherData && publisherData.success) {
              publishers.value = publisherData.publishers;
              console.log('Updated publishers: ', publishers.value);
          } else {
              console.error('Error fetching data:', publisherData.error);
          }
      } catch (error) {
          console.error('Error in publisherNextPage:', error);
      }
  }
};

const genreNextPage = async () => {  
  if (genreCurrentPage.value < genreTotalPages.value) {
    genreCurrentPage.value++;
      console.log('Current Page (after increment): ', genreCurrentPage.value);
      
      try {
          const genreData = await getGenres(genreCurrentPage.value); 
          console.log('Fetched Genres Data: ', genreData);
          
          if (genreData && genreData.success) {
              genres.value = genreData.genres;
              console.log('Updated genres: ', genres.value);
          } else {
              console.error('Error fetching data:', genreData.error);
          }
      } catch (error) {
          console.error('Error in publisherNextPage:', error);
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
  const deletionDate = new Date(deletionScheduleDate);
  const diffInMs = deletionDate.getTime() - today.getTime() ;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  if (diffInDays <= 0){
    return true
  }
  else {
    return false
  }
}

const deletePerson = async(personId) => {
    try {
        const response = await removePerson(personId)
        persons.value = persons.value.filter(person => person.personId !== personId);
}
    catch(error){
        console.error("Error deleting person: ", error)
    }
}

const deletePublisher = async(publisherId) => {
    try {
        const response = await removePublisher(publisherId)
        publishers.value = publishers.value.filter(publisher => publisher.publisherId !== publisherId);
}
    catch(error){
        console.error("Error deleting person: ", error)
    }
}

const deleteGenre = async(genreId) => {
    try {
        const response = await removeGenre(genreId)
        genres.value = genres.value.filter(genre => genre.genreId !== genreId);
}
    catch(error){
        console.error("Error deleting person: ", error)
    }
}



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

const fetchPersons = async () => {
    isLoading.value = true;
    try {
        console.log('filterPersons value: ', filterPersons.value);
        const role = filterPersons.value !== 'all' ? filterPersons.value : '';
        console.log('role: ', role);
        
        const personData = await getPersons(role, personCurrentPage.value, 10);
        console.log('Fetched Person Data in fetchPersons:', personData);
        
        if (personData.success) {
            persons.value = personData.persons;
            totalPersons.value = personData.totalItems;
            personTotalPages.value = personData.totalPages;
            personCurrentPage.value = personData.currentPage;
            console.log('Updated persons in fetchPersons: ', persons.value);
        } else {
            console.error('Failed to fetch persons');
        }
    } catch (error) {
        console.error('Error fetching persons', error);
    } finally {
        isLoading.value = false;
    }
};

const fetchPublishers = async () => {
  isLoading.value = true;
  try {
    const publisherData = await getPublishers(publisherCurrentPage.value);
    console.log('Fetched Publisher Data in fetchPublishers:', publisherData);

    if (publisherData.success) {
      publishers.value = publisherData.publishers;
      totalPublishers.value = publisherData.totalItems;
      publisherTotalPages.value = publisherData.totalPages;
      publisherCurrentPage.value = publisherData.currentPage;
      console.log('Updated publishers in fetchPublishers: ', publishers.value);
    } else {
      console.error('Failed to fetch publishers');
    }
  } catch (error) {
    console.error('Error fetching publishers', error);
  } finally {
    isLoading.value = false;
  }
};

const fetchGenres = async () => {
  isLoading.value = true;
  try {
    const genreData = await getGenres(genreCurrentPage.value);
    console.log('Fetched Genre Data in fetchGenres:', genreData);

    if (genreData.success) {
      genres.value = genreData.genres;
      totalGenres.value = genreData.totalItems;
      genreTotalPages.value = genreData.totalPages;
      genreCurrentPage.value = genreData.currentPage;
      console.log('Updated genres in fetchGenres: ', genres.value);
    } else {
      console.error('Failed to fetch genres');
    }
  } catch (error) {
    console.error('Error fetching genres', error);
  } finally {
    isLoading.value = false;
  }
};

const onFilterChange = async (event) => {
  event.preventDefault();
  fetchUsers();
  fetchPersons();
  fetchPublishers();
  fetchGenres();
};

  onMounted(async () => {
    await fetchUsers();
    changePage('users')
    await fetchPersons()
    await fetchPublishers()
    await fetchGenres()
});
// estou a ter um erro no qual quando clico numa das opções da filtragem, faz o reload da pagina, já experimenttei com preventdefault e nada

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
  