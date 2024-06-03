<!-- components/Sidebar.vue -->
<template>
    <aside id="default-sidebar" class="fixed top-1/3 left-1/4 z-40 w-64 h-fit transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full border border-gray-400 rounded-xl px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <ul class="space-y-2 font-medium">
          <li v-for="(item, index) in menuItems" :key="index">
            <a
              href="#"
              @click.prevent="selectItem(index)"
              @mouseover="hoverItem(index)"
              @mouseleave="hoverItem(null)"
              :class="[
                'flex items-center p-2 rounded-lg group transition-all duration-200 ease-in-out',
                selectedItem === index && !hoveredItem ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white' : '',
                hoveredItem === index ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
              ]"
            >
              <svg
                :class="[
                  'w-6 h-6',
                  selectedItem === index && !hoveredItem ? 'text-gray-900 dark:text-white' : '',
                  hoveredItem === index ? 'text-gray-900 dark:text-white' : 'text-gray-300'
                ]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                :innerHTML="item.icon"
              ></svg>
              <span class="ms-3">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // Menu items with SVG icons and labels
  const menuItems = [
    {
      label: 'Profile Details',
      icon: `<path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>`
    },
    {
      label: 'Account Settings',
      icon: `<path fill-rule="evenodd" d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>`
    },
    {
      label: 'Notifications',
      icon: `<path fill-rule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clip-rule="evenodd"/>`
    },
    {
      label: 'Privacy Settings',
      icon: `<path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>`
    }
  ];
  
  // State to manage the selected item and hovered item
  const selectedItem = ref(0);
  const hoveredItem = ref(null);
  
  // Function to select an item
  const selectItem = (index) => {
    selectedItem.value = index;
  };
  
  // Function to manage hover state
  const hoverItem = (index) => {
    hoveredItem.value = index;
  };
  
  // Use mousemove event to detect the mouse position and determine hover state
  const handleMouseMove = (event) => {
    const sidebar = document.getElementById('default-sidebar');
    if (!sidebar.contains(event.target)) {
      // If mouse is not inside the sidebar, reset hovered item
      hoveredItem.value = null;
      return;
    }
  
    // Calculate the position of the mouse within the sidebar
    const rect = sidebar.getBoundingClientRect();
    const y = event.clientY - rect.top;
  
    // Determine the index of the hovered item based on mouse position
    const itemHeight = 48; // Adjust this value if item height is different
    const index = Math.floor(y / itemHeight);
    if (index >= 0 && index < menuItems.length) {
      hoveredItem.value = index;
    } else {
      hoveredItem.value = null;
    }
  };
  
  // Add and remove event listeners for mousemove
  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', handleMouseMove);
  });
  </script>
  