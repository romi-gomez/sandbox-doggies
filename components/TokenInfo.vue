<template>
  <div class="token">
    <img class="token__img" :src="$store.state.currentTokenData.image_url" >
    <div class="token__info">
      <p class= "token__info__description">{{$store.state.currentTokenData.description}}</p>
      <ul class="token__info__description__attrs">
        <li v-for="attribute in $store.state.currentTokenData.attributes" :key="attribute.trait_type" :style="attribute.value === '' ? 'display:none' :''" class="token__info__description__attrs__attribute">
          <p class = "token__info__description__attrs__attribute__trait" >{{attribute.value !== '' ? attribute.trait_type : ''}}</p>
          <p class = "token__info__description__attrs__attribute__value" >{{attribute.value}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TokenInfo',
}
</script>

<style lang="scss" scoped>
  .token{
    display:grid;
    width:100%;
    margin:0 auto;
    color: white;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    &__info{
      margin-top:2em;
      background-color:rgba(0,0,0,.5);
      padding: 1em;
      line-height:1.5em;
    }

    &__attrs{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      list-style: none;
      padding:0;
      margin-top:1em;

      &__attribute{
        display: grid;
        grid-template-columns: 2fr 3fr;
        width:90%;
        margin:.5em 0;
        font-size: .8em;
        text-align: left;
        font-weight:700;
        background:$accent;
        color: $primary;

        &__trait{
          background:$primary;
          color: $accent;
          padding:.25em;
          padding-left:1em;
          margin-right:1em;
        }
      }
    }

    @media screen and (min-width: $breakpoint-desktop) {
      width: 100%;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 1fr;

      &__info{
        margin: 0 0 0 1em;
      }
    }
  }
</style>
