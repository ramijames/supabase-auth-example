<template>
  <main class="max-width lg">
    <section id="UserDetails">
      <h1>Hello!</h1>
      <p>You are logged in with the email address, <i>{{ user.email }}</i>.</p>
      <table>
        <tr v-if="user.user_metadata.full_name">
          <td>Display Name:</td>
          <td>{{ user.user_metadata.full_name }}</td>
        </tr>
        <tr v-if="user.app_metadata.provider == 'github'">
          <td>Github Avatar:</td>
          <td><img :src="user.user_metadata.avatar_url" class="github-avatar" alt="Avatar" /></td>
        </tr>
      </table>
    </section>
  </main>
</template>

<script setup>

definePageMeta({
  layout: 'default'
});

const user = useSupabaseUser()

</script>

<style scoped lang="scss">

@use 'assets/variables' as *;

#UserDetails {
  padding: $spacing-lg;

  .github-avatar {
    width: 72px;
    border-radius: $br-md;
    border: $border;
  }
}


</style>