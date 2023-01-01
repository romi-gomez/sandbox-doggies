<template>
  <div class="container">
    <Logo class="container__logo" logo="snoop-logo.svg" size="300" />
    <ConnectMetamask class="container__connect" @connect="connectToMetamask()" />
  </div>
</template>

<script>


export default {
  name: 'IndexPage',
  methods: {
    connectToMetamask() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;

    &__logo{

    }

    &__connect{

    }
  }
</style>
