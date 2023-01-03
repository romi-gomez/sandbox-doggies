<template>
  <div>
    <p class="input-label">Enter a 4 digits ID (or leave it empty for a random search) </p>
    <input
      id="doggyIdInput"
      class="input-text"
      type="text"
      name="doggyIdInput"
      v-model="getInputValue"
      placeholder="XXXX"
      @keydown.enter="$emit('enterPressed')"
    />
  </div>
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
  .input-label{
    color:$accent;
    font-weight:700;
    width:100%;
    background:$accent;
    color:$primary;
    padding:.25em 1em;
  }

  .input-text {
    width:100%;
    border: none;
    box-shadow: none;
    border-radius: 0 0 0.5em 0.5em;
    padding: 0.5em 1em;
    background: $primary;
    color: $accent;
    font-size: 1.25em;

    &:focus-visible {
      outline: 2px solid $accent;
    }
}
</style>
