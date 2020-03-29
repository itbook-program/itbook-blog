<template>
  <div class="live-container">
     <live-pusher
     url="rtmp://62174.livepush.myqcloud.com/live/cdsrtest?txSecret=74bcf2635466a3fd354cae90828d6689&txTime=5D8648FF" 
     mode="SD"
     mirror
     autopush 
     @statechange="statechange"
     @netstatus="netstatus"
     style="width: 100%; height: 225px;" />
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    statechange (e) {
      console.log('live-pusher code:', e.detail.code)
    },
    netstatus (e) {
      console.log('触发', e)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variable.scss';
</style>
