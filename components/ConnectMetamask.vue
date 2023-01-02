

<template>
  <div class="connect-container">
    <Button class="connect__button" button-text="Connect to Metamask!" @click="$emit('connect')" />
  </div>
</template>

<script>

export default {
  name: 'ConnectMetamask',
}
</script>

<style lang="scss" scoped>

.connect-container{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__button{

  }
}

</style>
