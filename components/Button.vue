<template>
  <button class="button-container" type="button">{{ buttonText }}</button>
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
  background-color: $black;
  color: $accent;
  border: none;
  padding: 0.5em;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: 600;
  transition: all ease-in 0.2s;

  &:hover {
    cursor: pointer;
    background-color: $accent-darker;
    color: $primary;
  }

  &:active {
    font-size: 1.25em;
    font-weight: 800;
  }
}
</style>
