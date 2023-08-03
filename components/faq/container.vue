<script setup lang="ts">
import { ref, computed } from 'vue';

const opened = ref(false);

defineProps<{
  question: string,
  answer: string,
}>()
</script>
<template>
  <div class="rounded-lg filter backdrop-blur-3xl bg-white/5 p-4 transition ease-in-out delay-150 resize-none">
    <div @click="opened = !opened" class="flex flex-row justify-between hover:cursor-pointer">
      <h4 class="text-2xl">{{ question }}</h4>
      <svg class="w-5" fill="#FFFFFF" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      </svg>
    </div>
    <div v-if="opened" class="mt-2">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>