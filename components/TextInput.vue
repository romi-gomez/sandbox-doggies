
<template>
  <input id="doggyIdInput"  class="input-text" type="text" name="DoggyId" placeholder="Enter a doggy ID or press the button to get a random one">
</template>

<script>
export default {
  name: 'TextInput',
  props: {

  }
}
</script>

<style lang='scss'>
  .input-text{
    border:none;
    box-shadow: none;
    border-radius:.5em;
    padding:.5em 1em;
    background: $primary;
    color:$accent;
    font-size:1.5em;

    &:focus-visible{
      outline: 2px solid $accent;
    }
  }
</style>
