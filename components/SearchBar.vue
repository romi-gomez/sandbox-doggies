<template>
  <div class="search-bar">
    <TextInput />
    <Button class="search-bar__button" :button-text="setButtonText"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
  },
  data: () => {
    return {
      isSearching: false
    }
  },
  computed:{
    setButtonText(){
      return this.isSearching ? "Show this Doggy" : "Show me any Doggy"
    }
  }
}
</script>

<style lang='scss'>
  .search-bar{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width:70%;
    margin: 3em auto;

    &__button{
      margin-top:1em;
    }

    @media screen and (min-width: $breakpoint-desktop) {
      grid-template-columns: 8fr 4fr;
      grid-template-rows: 1fr;
      width:80%;

    &__button{
      margin-top:0;
      margin-left: 1em;
    }
    }
  }

</style>
