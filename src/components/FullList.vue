<template>
  <div class="full-list">
    <ListTitle/>
    <ListHeader/>
    <ListWrapper/>
  </div>
</template>

<script>
import ListHeader from './ListHeader.vue'
import ListWrapper from './ListWrapper.vue'
import ListTitle from '@/components/ListTitle.vue'
export default {
  components: { ListHeader, ListTitle, ListWrapper },
  name: 'FullList'
}
</script>

<style scoped>
  .full-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>