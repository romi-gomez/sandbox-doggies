<template>
  <div class="background">
    <div class="background__overlay"></div>
    <div class="background__floating-image --1"></div>
    <div class="background__floating-image --2"></div>
    <div class="background__floating-image --3"></div>
    <div class="background__floating-image --4"></div>
    <div class="background__floating-image --5"></div>
  </div>
</template>

<script>
export default {
  name: 'DoggiesBackground',
}
</script>

<style lang="scss">
@keyframes pulse {
  0% {
    transform: scale(1) translate(0);
  }

  50% {
    transform: scale(1.01) translate(0, 5%);
  }
}

.background {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: grid;
  background-image: url('~assets/images/bg-header-avatar.webp');
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-items: center;
  overflow: hidden;

  &__floating-image {
    width: 100%;
    display: flex;
    background-size: contain;
    background-repeat: no-repeat;

    &.--1 {
      background-image: url('~assets/images/leaf-1.avif');
      opacity: 0.8;
      animation: 6s ease-in-out infinite pulse;
      grid-column-start: 1;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 3;
      margin-top: -40%;
    }

    &.--2 {
      background-image: url('~assets/images/leaf-2.avif');
      opacity: 0.4;
      animation: 8s ease-in-out infinite pulse;
      grid-column-start: 3;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 5;
    }

    &.--3 {
      background-image: url('~assets/images/leaf-3.avif');
      opacity: 0.6;
      animation: 10s ease-in-out infinite pulse;
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 5;
      grid-row-end: 7;
      margin-top: -10%;
    }

    &.--4 {
      background-image: url('~assets/images/leaf-4.avif');
      opacity: .9;
      z-index:1;
      animation: 6s ease-in-out infinite pulse;
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 2;
      grid-row-end: 7;
      margin-right: -80%;
    }

    &.--5 {
      background-image: url('~assets/images/leaf-5.avif');
      opacity: 0.5;
      animation: 8s ease-in-out infinite pulse;
      grid-column-start: 5;
      grid-column-end: 8;
      grid-row-start: 5;
      grid-row-end: 7;
    }
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(18, 16, 14);
    background: radial-gradient(
      circle,
      rgba(18, 16, 14, 0) 10%,
      rgba(18, 16, 14, 1) 100%
    );
  }
}
</style>
