<template>
  <div>
    Index
    {{ father }} {{msg}}
  </div>
  <div>
    {{ objName }}
  </div>
  <div>
    <button @click="handleClick($event)">点击的坐标</button>
  </div>
  <button @click="toParent">传给app</button>
  <img ref="ggBao" src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0602%2Fe17caacaj00qu271l000rc000ht00dkm.jpg&thumbnail=660x2147483647&quality=80&type=jpg" alt="">
  <button @click="setggBao">修改ggbao链接</button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
// defineProps---------------------
// 非ts语法
// defineProps({
//   father: {
//     type: String,
//     required: true,
//     default: '默认'
//   }
// })

// Ts语法   使用 withDefaults绑定默认值     |   使用 '属性?' 代表属性可选, 不写则代表必传
const props = withDefaults(defineProps<{
  father: string,
  msg?: string // 属性可选
}>(), {
  father: '默认值',
  msg: '默认msg'
})

props


// defineEmits   -------------------------
// 非ts语法
// const emit = defineEmits(['getChild'])


// Ts语法
// 写法1  有几个事件就写几个限制, e表示事件名, 后面就是依次  参数名:类型
// const emit = defineEmits<{
//   (e: 'getChild', content: number, thing: string): void
// }>()

// 写法2 简洁写法  3.3+版本
// 事件名作为键, 后面是 参数:类型 列表数组
const emit = defineEmits<{
  getChild: [content: number, thing: string]
}>()

const toParent = () => {
  emit('getChild', 12, '西瓜')
}



// ref ---------------------
type Person = {
  name: string,
  age: number,
  content?: string
}
const obj = ref<Person[]>([
  {
    name: '刘德华',
    age: 18,
    content: '我是刘德华'
  },
  {
    name: '周华健',
    age: 28,
    content: '我是周华健'
  }
])

// reactive  更新数据时 要注意丢失响应式问题


// computed -------------------
// 计算属性 在绝大部分场景都不需要手动指定类型 会自动推导
let objName = computed<string[]>(() => {
  return obj.value.map((item) => item.name)
})


// 获取事件对象的类型
// 方法一:  console.log(e)  控制台打印事件对象
// 方法二:  在template中事件绑定处, 传入$event, 鼠标悬浮上 弹出类型
const handleClick = (e: MouseEvent) => {
  console.log(e)
  console.log(e.pageX, e.pageY)
}


// DOM中的ref
// 指定为 相应元素类型 | null
const ggBao = ref<HTMLImageElement | null>(null)

// 修改src
const setggBao = () => {
  ggBao.value && (ggBao.value.src = 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0602%2Fd4a710aaj00qu271l001bc000ht00ddm.jpg&thumbnail=660x2147483647&quality=80&type=jpg')
}



onMounted(() => {
  // 可选链操作符  ?.
  // 以前写法
  if(ggBao.value) {
    console.log(ggBao.value?.src)
  }
  // 可以让我们不需要确定每个属性是否真的有值, 如果某个环节没有值, 整个表达式返回undefined
  console.log(ggBao.value?.src)


  // 非空断言(慎用)    !.   100%确定有值才能使用, 一旦值为空, 程序会报错
  console.log(ggBao.value!.src)
})



</script>

<style scoped>

</style>