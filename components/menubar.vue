<template>
  <div>
    <UHorizontalNavigation :links="miniNavLinks">

    </UHorizontalNavigation>
  </div>
  <div>
    <USlideover v-model="isOpen">
      <UCard class="flex flex-col flex-1"
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Menu
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen = false" />
          </div>
        </template>

        <UVerticalNavigation :links="menulinks">
          <template #default="{ link }">
            <span class="group-hover:text-primary relative">{{ link.label }}</span>
          </template>
        </UVerticalNavigation>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const miniNavLinks = [
  [{
    label: "Achintya Kumar",
    to: '/',
  }],
  [{
    label: "Menu",
    icon: 'i-heroicons-bars-3',
    click: () => {
      isOpen.value = !isOpen.value
    }
  }]
]

const menulinks = [
  [{
    label: "Achintya Kumar",
    icon: 'i-heroicons-home',
    to: '/',
    target: "_self",
    click: () => {
      isOpen.value = !isOpen.value
    }
  }],
  [
    {
      label: 'Experience',
      icon: 'i-heroicons-command-line',
      to: '/experience',
      target: "_self",
      click: () => {
        isOpen.value = !isOpen.value
      }
    },
    {
      label: 'Projects',
      icon: 'i-heroicons-code-bracket',
      to: '/projects',
      target: "_self",
      click: () => {
        isOpen.value = !isOpen.value
      }
    }, {
      label: 'Education',
      icon: 'i-heroicons-chart-bar',
      to: '/education',
      target: "_self",
      click: () => {
        isOpen.value = !isOpen.value
      }
    }], [{
      label: 'Github',
      icon: 'i-mdi-github',
      to: 'https://github.com/achintya2000/',
      target: "_blank",
    }, {
      label: 'LinkedIn',
      icon: 'i-mdi-linkedin',
      target: "_blank"
    }]
]
</script>