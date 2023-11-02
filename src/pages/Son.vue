<template>
  <div class="eoy-item">
    <img :src="eoyItem.image" class="author" @click="jiaCount">
    <div class="name">{{ eoyItem.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { EoyItem } from '../utils/types'

const props = defineProps<{
  eoyItem: EoyItem
}>()
const emit = defineEmits<{
  countJia: [val: number]
  // (e: 'countJia', val: number): void
}>()

const jiaCount = () => {
  emit('countJia', props.eoyItem.id)

  
}

</script>

<style lang="scss" scoped>
.eoy-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 8vw;
  }
  .name {
    font-size: 2vw;
  }
}
</style>