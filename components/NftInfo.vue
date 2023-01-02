<template>
  <div class="token-container">
    <h1>{{name}}</h1>
    <img :src="image" >
    <vue-markdown>{{description}}</vue-markdown>
    <ul>
      <li v-for="attribute in attributes" :key="attribute.value">
        <p>{{attribute.trait_type}}</p>
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
  },
  data() {
    return{
      name: this.$store.state.currentTokenData.name,
      image: this.$store.state.currentTokenData.image_url,
      attributes: this.$store.state.currentTokenData.attributes,
      animation:this.$store.state.currentTokenData.animation_url,
      description: this.$store.state.currentTokenData.description,
    }
  },
  mounted(){
    console.log(this.$store.state.currentTokenData)
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
