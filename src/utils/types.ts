// 获取列表payload类型
export interface GetEoyData {
  userid: string
  area: number
}

// 列表项类型
export interface EoyItem {
  id: number
  image: string
  is_zan: number
  name: string
  zan: number
}

// 获取列表res类型
export interface EoyRes {
  data: EoyItem[]
  title: string
  title_pc: string
}