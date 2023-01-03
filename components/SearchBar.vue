<template>
  <div class="search-bar">
    <TextInput @enterPressed="sendIdForSearch()"/>
    <Button class="search-bar__button" :button-text="setButtonText" @click="sendIdForSearch()"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
    setButtonText() {
      return this.$store.state.currentTokenId !== '' && this.$store.state.currentTokenId.length === 4 ? 'Show this Doggy' : 'Show me any Doggy'
    },
  },
  methods: {
    sendIdForSearch(){
      this.$emit('search')
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  width: 70%;
  margin: 3em auto;

  &__button {
    margin-top: 1em;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    grid-template-columns: 8fr 4fr;
    grid-template-rows: 1fr;
    width:80%;

    &__button {
      margin-top: 0;
      margin-left: 1em;
    }
  }
}
</style>
