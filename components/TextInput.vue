<template>
  <div class="input">
    <p class="input__label">Enter a 4 digits ID <span>(or leave it empty for a random search)</span></p>
    <input
      id="doggyIdInput"
      v-model="getInputValue"
      class="input__text-field"
      type="text"
      name="doggyIdInput"
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

  .input{
    &__label{
      color:$accent;
      font-weight:700;
      width:100%;
      background:$accent;
      color:$primary;
      padding:.25em 1em;

    & span{
      display: block;;
      font-size:.8em;
    }
  }

    &__text-field{
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
  }

</style>
