import { Encrypt } from '@/utils/secret.js'
import { getOssSecret } from '@/api/upload.js'
const COS = require('cos-wx-sdk-v5')

const uploadToOss = async ({type, fileName, onProgress, onSuccess}) => {
  const { data } = await getOssSecret()
  const { SecretId, SecretKey } = data
  const cos = new COS({
    SecretId,
    SecretKey
  })
  const fileNameTmp = Encrypt(fileName)
  cos.postObject({
    Bucket: 'sr-1300007333',
    Region: 'ap-chengdu',
    Key: `${type}/${fileNameTmp}`,
    FilePath: fileName,
    onProgress: function (info) {
      return onProgress && onProgress(info)
    }
  }, function (err, data) {
    console.log(err || data)
    if (!err) {
      // 加速域名
      return onSuccess && onSuccess(fileNameTmp, data)
    }
  })
}

export default uploadToOss
