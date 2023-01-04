<template>
  <div class="token">
    <div class="token__img" :style="setTokenImage" ></div>
    <TokenData class="token__data"/>
    <TokenInfoFooter class="token__footer"/>
  </div>
</template>

<script>

export default {
  name: 'TokenInfo',
  computed : {
    setTokenImage(){
      return `background-image:url('${this.$store.state.currentTokenData.image_url}')`
    }, 
  }
}
</script>

<style lang="scss" scoped>
  .token {
    display:grid;
    width:100%;
    margin:0 auto;
    color: white;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &__img {
      background-position:center;
      background-size:cover;
      min-height:400px;
      background-repeat: no-repeat;
      border-radius:.5em;
    }

  @media screen and (min-width: $breakpoint-desktop) {
    width: 100%;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;

    &__footer{
      grid-column-start:1;
      grid-column-end:3;
    }
  }
}
</style>
