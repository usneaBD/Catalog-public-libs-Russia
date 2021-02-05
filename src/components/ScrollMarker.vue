<template>
  <div id="scroll-marker"></div>
</template>

<script>
export default {
  name: 'ScrollMarker',
  props: ['options'],
  data: () => ({
    observer: null,
  }),
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, options);
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style>
  #scroll-marker {
    height: 100px;
  }
</style>