<template>
  <div class="token-container">
    <h1>{{$store.state.currentTokenData.name}}</h1>
    <img :src="$store.state.currentTokenData.image_url" >
    <vue-markdown>{{$store.state.currentTokenData.description}}</vue-markdown>
    <ul>
      <li v-for="attribute in $store.state.currentTokenData.attributes" :key="attribute.trait_type" :style="attribute.value === '' ? 'display:none' :''">
        <p >{{attribute.value !== '' ? attribute.trait_type : ''}}</p>
        <p>{{attribute.value}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'NftInfoContainer',
  components: {
    VueMarkdown
  }
}
</script>

<style lang="scss" scoped>
  .token-container{
    width:100%;
    height:100%;
    background: $black;
    color:$accent;
  }
</style>
