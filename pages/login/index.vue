<template>
  <main id="Login">
    <section id="LoginWrapper" class="max-width sm">
      <h1>Login</h1>
      <p class="description">Connect with your oAuth account.</p>
      <section id="LoginForm" class="form-group">
        <div class="login-buttons">
          <button class="button large" @click="signInWithGithub">
            <Icon name="grommet-icons:github" size="2rem" />
            Login with GitHub
          </button>
          <!-- <button class="button large">
            <Icon name="grommet-icons:google" size="2rem" />
            Login with Google
          </button> -->
        </div>
        <p class="or-select">Or</p>
        <form class="magic-link-form" @submit.prevent="signInWithMagicLink">
          <div v-if="notification == ''">
              <p class="description">Access the app via magic link with just your email.</p>
              <div class="form-group">
                  <div class="form-input">
                      <label for="email">Your email address</label>
                      <input class="inputField" type="email" placeholder="you@home.com" v-model="email" />
                  </div>
              </div>
              <input type="submit" class="button primary" @click="reset" :value="loading ? 'Sending magic link' : 'Send magic link'" :disabled="loading" />
          </div>
          <div v-if="errorbox">
              <p class="notification error">{{ errorbox }}</p>
          </div>
          <div v-if="!notification == ''">
              <p class="notification success">{{ notification }}</p>
          </div>
        </form>
      </section>
    </section>
    <section id="LoginImage"></section>
  </main>
</template>

<script setup>

definePageMeta({
  middleware: ["auth"],
})

const loading = ref(false);
const notification = ref('');
const errorbox = ref('');
const email = ref('');

const supabase = useSupabaseClient();

const user = useSupabaseUser();

const reset = () => {
    errorbox.value = ""
    notification.value = ""
}

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth(
    { provider: 'github', 
      options: {
        redirectTo: 'http://localhost:3000/confirm',
      },
     })
}

const signInWithMagicLink = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithOtp({ 
          email: email.value,
          options: {
            redirectTo: '/confirm',
          } })
        if (error) throw error
        notification.value = "Check your email for the magic link"
    } catch (error) {
        errorbox.value = error.error_description || error.message
        console.log('Error:', error)
    } finally {
        loading.value = false
    }
}

</script>

<style scoped lang="scss">
  
@use 'assets/variables' as *;

#Login {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

#LoginWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 65vw;
}

#LoginForm {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
  margin: $spacing-md 0;
  
  .login-buttons {
    display: flex;
    gap: $spacing-xs;

    button {
      width: 100%;
    }
  }
}

#LoginImage {
  background-color: $brand;
  // background-image: url('/assets/login-image.jpg');
  background-size: cover;
  background-position: center;
  width: 35vw;
}

</style>