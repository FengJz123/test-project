import fetch from '../utils/request'
import { GetEoyData, EoyRes } from '../utils/types'

// 获取人员列表
export const getRoy = (data: GetEoyData) => {
  return fetch.post<EoyRes>('/getEoyList', data)
}