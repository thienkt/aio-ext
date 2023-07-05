<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>

<template>
  <Switch v-model="enabled">
    <button
      id="toggle-theme"
      class="flex rounded-full md:mr-0 relative"
    >
      <i-mdi-weather-night
        v-if="enabled"
        class="text-gray-400 w-6 h-8"
      />
      <i-mdi-white-balance-sunny
        v-else
        class="text-gray-400 w-6 h-8"
      />
    </button>
  </Switch>
</template>

<style scoped></style>
