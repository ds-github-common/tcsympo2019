<template>
  <p>Checking Authentication...</p>
</template>
 
<script>
export default {
  async beforeMount() {
    const handleAuth = await this.$auth.handleAuthentication();
  }
}
</script> 
