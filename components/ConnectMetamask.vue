<template>
  <div class="connect">
    <Button v-if="!$store.state.isConnected" class="connect__button" button-text="Connect to Metamask to search for a Doggy" @click="$emit('connect')" />
    <ConnectedAccount v-if="$store.state.isConnected" class="connect__account"/>
  </div>
</template>

<script>
export default {
  name: 'ConnectMetamask',
}
</script>

<style lang="scss" scoped>

.connect{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__button{
    margin-top:2em;
  }
}

</style>
