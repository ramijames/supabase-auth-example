<template>
  <main>
    Hello {{ user?.email }}
    <button type="button" @click="signOut">Log Out</button>
  </main>
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