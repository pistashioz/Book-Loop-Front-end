import { VueDraggableNext } from 'vue-draggable-next';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('draggable', VueDraggableNext);
});
