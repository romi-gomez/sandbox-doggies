<template>
  <div :style="setStyle" class="account-container">
    <img :src="require(`~/assets/images/metamask-logo.png`)" alt="metamask logo">
    <p class="account-number">You are connected to the account: <span>{{$store.state.connectedAccount}} </span></p>
  </div>
</template>

<script>
export default {
  name:'connectedAccount',
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
  .account-container{
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

    img {
      height:50%;
      justify-self: flex-end;
    }

  .account-number{
    justify-self: flex-end;
    span{
      color:$accent;
    }
  }

  }

</style>
