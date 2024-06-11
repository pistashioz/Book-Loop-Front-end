<template>
    <div class="secondary-container flex justify-between items-center">
        <div class="description-container flex flex-col gap-y-1">
            <h6 class="text-base font-bold dark:text-white">To create a secure password:</h6>
      <p>
        <ul class="text-sm text-gray-500 dark:text-gray-400 list  space-y-2">
            <li>
                <span class="text-gray-500 dark:text-gray-400">1.</span>
                <span class="text-gray-500 dark:text-gray-400"> When setting up a password, go for something that is not too obvious. It can be a combination of numbers, special characters, capital and lower case letters. The length of the password should be at least 7 characters.</span>
            </li>
            <li>
                <span class="text-gray-500 dark:text-gray-400">2.</span>
                <span class="text-gray-500 dark:text-gray-400"> Don’t use your name or date of birth when setting up a password.</span>
            </li>
            <li>
                <span class="text-gray-500 dark:text-gray-400">3.</span>
                <span class="text-gray-500 dark:text-gray-400"> Memorize your password. Do not keep any record of it, do not tell other people about it. Try to change it regularly.</span>
            </li>
            <li>
                <span class="text-gray-500 dark:text-gray-400">4.</span>
                <span class="text-gray-500 dark:text-gray-400"> Make sure no one can see you entering the password.</span>
            </li>
        </ul>
      </p>

      
      <div class="flex justify-between  gap-x-4 mt-1">
        <input 
          type="text" 
          id="name" 
          class="bg-gray-50 text-gray-900 block flex-1  text-sm border-t-0 border-x-0 border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="New Password"
          >
          <input 
          type="text" 
          id="name" 
          class="bg-gray-50 text-gray-900 block flex-1  text-sm border-t-0 border-x-0 border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Re-enter your new Password"
          >
      </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
/* input#name{
    width: 0.2rem;
}
 */
</style>