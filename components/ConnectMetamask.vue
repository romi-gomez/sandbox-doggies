<template>
  <div class="connect">
    <Button v-if="!$store.state.isConnected" class="__button" button-text="Connect to Metamask to search a Doggy" @click="$emit('connect')" />
    <AccountConnected v-if="$store.state.isConnected" />
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

  .__button{
    margin-top:2em;
  }
}

</style>
