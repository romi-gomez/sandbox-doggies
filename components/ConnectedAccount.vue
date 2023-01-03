<template>
  <div :style="setStyle" class="connected-account">
    <img class="connected-account__wallet-logo" :src="require(`~/assets/images/metamask-logo.png`)" alt="metamask logo">
    <p class="connected-account__address">You are connected to the account: <span> {{$store.state.connectedAccount}} </span></p>
  </div>
</template>

<script>
export default {
  name:'ConnectedAccount',
  data: () => {
    return {
      isMounted: false
    }
  },
  computed: {
    setStyle(){
      return this.isMounted ? "transform: translateY(60px);" : ""
    }
  },
  mounted(){
    this.isMounted = true
  }
  }
</script>

<style lang="scss" scoped>

  .connected-account{
    width:100%;
    position: absolute;
    display:flex;
    top:0;
    left:0;
    height:50px;
    align-items:center;
    justify-content: space-between;
    padding:0 1em;
    background: $primary;
    color:white;
    font-weight:700;
    margin-top:-60px;

    &__wallet-logo {
      height: 50%;
      justify-self: flex-end;
      margin-right: .5em;
    }

    &__address{
      justify-self: flex-end;
      font-size:.65em;

      span{
        color:$accent;
      }
    }
  }

</style>
