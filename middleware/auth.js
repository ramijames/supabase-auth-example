import { useRoute } from 'vue-router';

export default defineNuxtRouteMiddleware(() => {
  const route = useRoute();
  const magiclink = route.query.magiclink;

  const user = useSupabaseUser()

  if (magiclink === true) {
    return navigateTo("/confirm");
  } else if (user.value) {
    return navigateTo("/secure")
  }
  
})