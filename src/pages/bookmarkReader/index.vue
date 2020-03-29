<template>
  <div class="bookMark-container">
    <book-marks :marksData="exceptData" />
  </div>
</template>
<script>
import BookMarks from '@/components/CustomBookMarks'
import { getExcept } from '@/api/except'
import { getUser } from '@/utils/auth'

export default {
  components: {
    BookMarks
  },
  data () {
    return {
      exceptData: []
    }
  },
  mounted () {
    getExcept(getUser()).then((resData) => {
      const { code, data: { list } } = resData
      if (code === 0) {
        this.exceptData = list
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.bookMark-container{
  padding: 0 $side-padding;
}
</style>
