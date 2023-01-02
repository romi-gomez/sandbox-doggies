<template>
  <div class="doggie-container">
  </div>
</template>

<script>
export default {
  name: 'NftInfoContainer',
  mounted(){
    console.log(this.$store.state.currentTokenData)
  }
}
</script>

<style lang="scss">

</style>
