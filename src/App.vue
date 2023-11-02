<template>
  <!-- <Index :father="father" :msg="msg" @getChild="getChild"/> -->
  <div style="font-size: 3vw;">{{ count }}</div>
  <div class="eoy-list">
    <Son v-for="item of eoyList?.data" :key="item.id" :eoyItem="item" @countJia="countJia"/>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import Index from './pages/Index.vue'

// const father = ref<string>('这是父组件给的')
// let msg = ref('我是msg')

// let getChild = (content: number, thing: string) => {
//   console.log('子组件给了我'+content+'块钱, 用于买'+thing)
// }


import { onMounted, ref } from 'vue';
// import { VoteItem } from './types/index'
import Son from './pages/Son.vue'
import { getRoy } from './api/index'
import { EoyRes } from './utils/types'

// let list = ref<VoteItem[]>([
//   {
//     id: 1,
//     name: '小丽',
//     voteNum: 123
//   },
//   {
//     id: 2,
//     name: '小帅',
//     voteNum: 120
//   },
//   {
//     id: 3,
//     name: '小王',
//     voteNum: 200
//   }
// ])
let eoyList = ref<EoyRes>()
let count = ref<number>(1)


// 获取数据
const getData = async () => {
  let res = await getRoy({
    userid: 'nuyoah',
    area: 8
  })
  if(res.code == 200) {
    eoyList.value = res.data
  } else {
    console.log(res.msg)
  }
}
const countJia = (val: number) => {
  count.value += val
}

onMounted(getData)


</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.eoy-list {
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
