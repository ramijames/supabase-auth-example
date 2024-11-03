<template>
  <main>
    Hello {{ user?.email }}
  </main>
</template>

<script setup>

const user = useSupabaseUser()

definePageMeta({
  middleware: 'auth'
});

</script>