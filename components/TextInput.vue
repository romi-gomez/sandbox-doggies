<template>
  <input
    id="doggyIdInput"
    class="input-text"
    type="text"
    name="DoggyId"
    v-model="getInputValue"
    placeholder="Enter a doggy ID or press the button to get a random one"
  />
</template>

<script>
export default {
  name: 'TextInput',
  computed: {
    getInputValue: {
      get() {
        return this.$store.state.currentTokenId !== 0 ? this.$store.state.currentTokenId : ''
      },
      set(newValue) {
        this.$store.commit('setCurrentTokenId', newValue)
      }
    }
  }
}
</script>

<style lang="scss">
.input-text {
  border: none;
  box-shadow: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  background: $primary;
  color: $accent;
  font-size: 1.5em;

  &:focus-visible {
    outline: 2px solid $accent;
  }
}
</style>
