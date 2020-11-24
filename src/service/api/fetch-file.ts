import AbsApi from '../abs-api'
import {Handler} from '../../@types/custom-type'
import fs from 'fs'

/**
 * @author hgd
 * @date 2020/11/22
 */
export default class FetchFile extends AbsApi {

  /**
   * 获取所有文件
   */
  api(): [string, string] {
    return ['post', '/file/fetch']
  }

  handler(): Handler {
    return async (ctx, next) => {
      const buffer = fs.readFileSync(ctx.request.body.filePath)
      ctx.response.status = 200
      ctx.response.body = buffer.toString()
    }
  }

}
