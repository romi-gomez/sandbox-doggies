<template>
  <div class="token-footer" v-html="setDescription"></div>
</template>

<script>
import {marked} from 'marked'
export default {
  name: 'TokenInfoFooter',
  computed : {
    setDescription(){
      const html =  marked(this.$store.state.currentTokenData.description)
      return html
    }
  }
}
</script>

<style lang="scss" scoped>

    .token-footer {
        width:100%;
        margin: 0 auto;
        color:$primary;
        background:white;
        padding:1em 1.5em;;
        font-size:.8em;
        border-radius:0.5em;
    }

</style>