<template>
  <button class="button-container" @click="$emit('click')" type="button" >{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'ButtonContainer',
  props: {
    buttonText: {
      type: String,
      default: 'Get any doggy!',
    },
  },
}
</script>

<style lang="scss">
.button-container {
  border-radius: 0.5em;
  background-color: $primary;
  color: $accent;
  border: none;
  padding: 0.5em 1em;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 600;
  transition: all ease-in 0.2s;

  &:hover {
    cursor: pointer;
    background-color: $accent;
    color: $primary;
  }

  &:active {
    font-size: 1.25em;
    font-weight: 700;
  }
}
</style>
