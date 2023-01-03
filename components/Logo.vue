<template>
  <div class="logo-container">
    <a :href="url" target="_blank">
      <img :style="imageStyle" :src="require(`~/assets/images/${logo}`)" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'LogoContainer',
  props: {
    logo: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '/',
    },
    size: {
      type: String,
      default: '300',
    },
  },
  computed: {
    imageStyle() {
      return `max-width:${this.size}px`
    },
  },
}
</script>

<style lang="scss">
.logo-container {
  padding: 1em;
  text-align: center;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
}
</style>
