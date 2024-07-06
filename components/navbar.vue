<template>
  <div>
    <UHorizontalNavigation :links="links">
      <template #default="{ link }">
        <span style="font-size: 1vw;" class="group-hover:text-primary relative" :target="link.target">{{ link.label
          }}</span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>

<script setup lang="ts">

const links = [
  [{
    label: "Achintya Kumar",
    icon: 'i-heroicons-home',
    to: '/',
    target: "_self",
  }],
  [
    {
      label: 'Experience',
      icon: 'i-heroicons-command-line',
      to: '/experience',
      target: "_self"
    },
    {
      label: 'Projects',
      icon: 'i-heroicons-code-bracket',
      to: '/projects',
      target: "_self"
    }, {
      label: 'Education',
      icon: 'i-heroicons-chart-bar',
      to: '/education',
      target: "_self"
    }], [{
      label: 'Github',
      icon: 'i-mdi-github',
      to: 'https://github.com/achintya2000/',
      target: "_blank"
    }, {
      label: 'LinkedIn',
      icon: 'i-mdi-linkedin',
      to: "https://www.linkedin.com/in/achintyakumar/",
      target: "_blank"
    }]
]
</script>