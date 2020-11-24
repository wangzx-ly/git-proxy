/**
 * @author hgd
 * @date 2020/11/20
 */
import AbsApi from '../abs-api'
import {Handler} from '../../@types/custom-type'
import fileScan from '../../util/file-scan'

export default class ListFiles extends AbsApi {

  /**
   * 获取所有文件
   */
  api(): [string, string] {
    return ['get', '/files']
  }

  handler(): Handler {
    return async (ctx, next) => {
      const deep = Number.parseInt(ctx.query.deep) || 0
      const exclude = ('node_modules,' + (ctx.query.exclude || '')).split(',')
      const files = await fileScan([ctx.gitLocation], [], exclude, deep)
      ctx.response.status = 200
      ctx.response.body = files
    }
  }

}
