<template>
  <div class="article-container">
    <div class="article-attachment">
      <div class="attach-item" v-for="(item, index) in attachData" :key="index">
        <div class="attach-item__header">
          <div class="attach-item__text">{{item.name}}</div>
          <div class="attach-item__text">{{ item.size }} MB</div>
        </div>
        <div v-if="!attachType" class="attach-item__text item-info" @click="delAttachHandle(item)">删除</div>
        <div v-if="attachType" class="attach-item__text item-info" @click="preAttachHandle(item)">预览</div>
        <div v-if="attachType" class="attach-item__text item-info" @click="downAttachHandle(item)">下载</div>
      </div>
    </div>
    <div v-if="!attachType" class="ptf-release__footer">
      <div class="ptf-release__opera">
        <div class="release-opera__submit" @click="chooseHandle">添加附件</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Encrypt } from '@/utils/secret.js'
import event from '@/utils/event'
const COS = require('cos-wx-sdk-v5')
export default {
  data () {
    return {
      attachType: null,
      attachData: [],
      fileType: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf']
    }
  },
  mounted () {
    this.cos = new COS({
      SecretId: 'AKID3FCuNhXbAVbSshzhphK2VifNp0HMPsIS',
      SecretKey: '5AzZuzoM0NZWDerseCYrwlKpBJ7iBPO8'
    })
    const { type, attach } = this.$route.query
    this.attachType = type
    try {
      this.attachData = JSON.parse(attach)
    } catch (error) {
      this.attachData = []
    }
  },
  onUnload () {
    event.$emit('checkAttach', this.attachData)
    this.attachData = []
  },
  methods: {
    delAttachHandle (delItem) {
      this.attachData = this.attachData.filter(function (item) {
        return delItem.fileName !== item.fileName
      })
    },
    /**
     * 预览图片文件
     */
    preAttachHandle (item) {
      wx.previewImage({
        urls: [item.path] // 需要预览的图片http链接列表
      })
    },
    /**
    * 文件下载，判断类型，如果文件类型支持预览，则提示预览信息
    */
    downAttachHandle (item) {
      wx.downloadFile({
        url: item.path,
        success (res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            const { tempFilePath } = res
            if (this.fileType.indexOf(item.type) > 0) {
              wx.openDocument({
                filePath: tempFilePath,
                success: function (res) {
                  console.log('打开文档成功')
                }
              })
            }
          }
        }
      })
    },
    chooseHandle () {
      const _this = this
      wx.chooseMessageFile({
        count: 10,
        type: 'file',
        success (res) {
          const { tempFiles } = res
          // 上传附件到云端
          tempFiles.forEach(item => {
            item.fileName = Encrypt(item.name + item.size + item.time)
            item.size = (item.size / 1000000).toFixed(2)
            _this.saveToCloud(item)
          })
          _this.attachData = tempFiles
        }
      })
    },
    saveToCloud (item) {
      const _this = this
      _this.cos.postObject({
        Bucket: 'sr-1300007333',
        Region: 'ap-chengdu',
        Key: 'attach/' + item.fileName,
        FilePath: item.path,
        onProgress: function (info) {
          const { percent } = info
          _this.onProgress = (percent * 100).toFixed(2) + '%'
        }
      }, function (err, data) {
        console.log(err || data)
        if (!err) {
          // 判断是否上传成功
          // _this.videoUrl = 'https://sr-1300007333.file.myqcloud.com/attach/' + item.fileName
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';
.article-container{
  padding-bottom: 98rpx;
  .article-attachment{
    border-top: 1rpx solid #EBEBEB;
    padding: 0 $side-padding;
    .attach-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120rpx;
      border-bottom: 1rpx solid #EBEBEB;
      .attach-item__image{
        width: 32rpx;
        height: 32rpx;
        margin-right: $side-padding;
      }
      .attach-item__header{
        overflow: hidden;
        flex: 1;
      }
      .attach-item__text{
        font-size: 28rpx;
        font-weight: bold;
        color: #333333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .item-info{
        font-size: 20rpx;
        font-weight: 500;
        color: #999999;
        flex-shrink: 0;
        margin-right: 10rpx;
      }
    }
  }
  .ptf-release__footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    left: 0;
    .ptf-release__opera{
      display: flex;
      height: 97rpx;
      line-height: 97rpx;
      .release-opera__submit{
        flex: 1.5;
        background-color: #00A65D;
        font-size: 30rpx;
        color: #fff;
        &:active{
          opacity: .8;
        }
      }
    }
  }
}
</style>
