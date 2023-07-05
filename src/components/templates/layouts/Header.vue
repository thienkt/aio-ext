<script setup lang="ts">
import ThemeToggle from '~/components/organisms/layouts/ThemeToggle.vue'
</script>

<template>
  <header>
    <nav
      class="border-gray-200 bg-gray-900 px-2.5 py-2.5 shadow-sm dark:bg-slate-800 sm:px-4 block print:hidden"
    >
      <div
        class="container mx-0 flex max-w-full flex-wrap items-center lg:mx-auto"
      >
        <div
          class="order-2 w-full items-center justify-between md:order-1 md:ml-5 md:flex md:w-auto active hidden"
        >
          <router-link
            to="/"
            class="flex w-full items-center border-b border-gray-800 py-2 px-3 text-white font-medium md:border-0 md:p-0"
          >
            <i-mdi-artstation class="w-6 h-8" />
            <i-mdi-transit-connection class="w-6 h-8" />
            <i-mdi-earth class="w-6 h-8 mr-1" />
          </router-link>
        </div>
        <div class="order-1 ml-auto flex items-center md:order-2">
          <div class="relative mr-2 hidden lg:mr-4 lg:block">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
              <i-mdi-magnify class="text-gray-400 w-6 h-8" />
            </div>
            <input
              id="email-adress-icon"
              type="text"
              class="block w-full rounded-lg border border-gray-700 bg-gray-900 p-2 pl-10 text-gray-300 outline-none focus:border-gray-700 focus:ring-gray-700 dark:bg-slate-800 sm:text-sm"
              placeholder="Search..."
            />
          </div>
          <div class="flex item-center mr-2 lg:mr-4">
            <theme-toggle />
          </div>
          <div class="flex items-center mr-2 lg:mr-4">
            <notification-menu />
          </div>
          <user-profile-menu />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
