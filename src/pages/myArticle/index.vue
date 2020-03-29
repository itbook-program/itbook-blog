<template>
  <div>
    <custom-tabs :tabs="tabs" :activedIndex="0" @checkedItem="checkedItem"></custom-tabs>
    <div class="tab-items">
      <div v-if="tabIndex === 0">
        <public-view :item-data="tabItemData"></public-view>
      </div>
      <div v-else-if="tabIndex === 1">
        <private-view :item-data="tabItemData"></private-view>
      </div>
      <div v-else-if="tabIndex === 2">
        <audit-view :item-data="tabItemData"></audit-view>
      </div>
    </div>
  </div>
</template>
<script>
import CustomTabs from '@/components/CustomTabs'
import publicView from './components/public'
import privateView from './components/private'
import auditView from './components/audit'
import { postArticleByUser } from '@/api/article'
import { getUser } from '@/utils/auth'

export default {
  components: {
    CustomTabs,
    publicView,
    privateView,
    auditView
  },
  data () {
    return {
      tabIndex: 0,
      tabItemData: [],
      tabs: [
        {
          key: 0,
          value: '公开文章'
        }, {
          key: 1,
          value: '私人日记'
        }, {
          key: 2,
          value: '审核列表'
        }
      ]
    }
  },
  mounted () {
    const payload = {
      search: {
        user: getUser(),
        articleType: 0
      },
      pageSize: 10
    }
    this.fetchData(payload)
  },
  methods: {
    fetchData (payload) {
      postArticleByUser(payload).then((resData) => {
        console.log(resData)
        const { data: { list }, code } = resData
        if (code === 0) {
          this.tabItemData = list
        }
      })
    },
    checkedItem (index, items) {
      this.tabIndex = index
      let articleType = 0
      if (index === 1) {
        articleType = -1
      } else if (index === 2) {
        articleType = 1
      }
      const payload = {
        search: {
          user: getUser(),
          articleType
        },
        pageSize: 10
      }
      this.fetchData(payload)
    }
  }
}
</script>
