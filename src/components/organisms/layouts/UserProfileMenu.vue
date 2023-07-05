<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <MenuButton
      class="flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
    >
      <img
        class="h-8 w-8 rounded-full"
        src="~/src/assets/images/logo.png"
        alt="user avatar"
      />
      <span class="ml-2 hidden text-left xl:block">
        <span class="block font-medium text-gray-400">Tran Khac Thien</span>
        <span class="-mt-1 block text-sm font-medium text-gray-500">
          Admin
        </span>
      </span>
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="{ 'bg-gray-400': active }"
            >
              <i-mdi-account class="mr-2 h-5 w-5" />
              Profile
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="{ 'bg-gray-400': active }"
            >
              <i-mdi-gear class="mr-2 h-5 w-5" />
              Account details
            </button>
          </MenuItem>
        </div>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="{ 'bg-gray-400': active }"
            >
              <i-mdi-crosshairs-question class="mr-2 h-5 w-5" />
              Coming soon ...
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="{ 'bg-gray-400': active }"
            >
              <i-mdi-crosshairs-question class="mr-2 h-5 w-5" />
              Coming soon ...
            </button>
          </MenuItem>
        </div>

        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="flex w-full items-center rounded-md px-2 py-2 text-sm"
              :class="{ 'bg-gray-400': active }"
            >
              <i-mdi-crosshairs-question class="mr-2 h-5 w-5" />
              Coming soon ...
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
