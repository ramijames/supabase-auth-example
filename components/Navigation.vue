<template>
  <nav class="max-width lg">
    <section>
      <span class="logo">Supabase Auth Example</span>
    </section>
    <section>
      <button type="button" class="clear" @click="signOut">Log Out</button>
    </section>
  </nav>
</template>

<script setup>

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
  navigateTo('/login')
}

</script>

<style scoped lang="scss">

@use 'assets/variables' as *;

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $spacing-sm $spacing-md;
  background: rgba($brand, 1);
  border-radius: $br-xxl;
  color: $white;
  position: sticky;
  top: $spacing-md;
}

</style>