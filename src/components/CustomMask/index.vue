<template>
  <div class="mask-container" @touchmove.prevent @click="clickMaskHandle($event)">
    <slot>
      <div></div>
    </slot>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickMaskHandle (ev) {
      // TODO 临时解决方案
      const {target: { dataset: { eventid } }} = ev
      if (eventid && eventid === '0') {
        this.$emit('clickMask')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mask-container{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, .2);
}
</style>
