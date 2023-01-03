<template>
  <div class="account-container">
    <img :src="require(`~/assets/images/metamask-logo.png`)" alt="metamask logo">
    <p class="account-number">You are connected to the account: <span>{{$store.state.connectedAccount}} </span></p>
  </div>
</template>

<script>
export default {
  name:'connectedAccount',
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
    justify-items:center;
    background: $primary;
    color:white;
    font-weight:700;

    img {
      height:50%;
      margin:0 2em;
    }

  .account-number{
    span{
      color:$accent;

    }
  }

  }

</style>
