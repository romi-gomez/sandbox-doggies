

<template>
  <div class="connect-container">
    <Button class="connect__button" button-text="Connect to Metamask!" @click="connectToMetamask()" />
    <h1>{{$store.connectedAccount}}</h1>
  </div>
</template>

<script>

export default {
  name: 'ConnectMetamask',
  props: {},

  methods: {
    connectToMetamask (){
      console.log('connecting to metamask')

    }
  }
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
