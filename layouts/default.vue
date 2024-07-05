<template>
    <div>
        <div class="hidden md:block lg:block xl:block 2xl:block">
            <Navbar />
        </div>

        <div class="md:hidden lg:hidden xl:hidden 2xl:hidden">
            <Menubar />
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainLayout'
}
</script>

<style scoped>
/* Your custom styles for the layout */
.content {
    padding: 20px;
}
</style>