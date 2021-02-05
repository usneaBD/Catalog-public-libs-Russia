<template>
  <div class="list-wrapper" id="list-wrapper">
    <div class="list-row" v-for="(item, index) in srcData"
      :key="item.id" :item="item" 
      @click="showDescr(item.id)"
      title="Нажмите для просмотра описания">
      <div class="row-left" :class="{'signal-sort':isName}">{{ item.name }}</div>
      <div class="row-right" :class="{'signal-sort':isReg}">{{ item.address }}</div>
      <div v-html="srcDescr[index].description" v-if="descr == item.id"></div>
    </div>
    <ScrollMarker :options="scrollOptions" @intersect="changeData"/>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import ScrollMarker from '@/components/ScrollMarker.vue'

export default {
  name: 'ListWrapper',
  props: ["item"],
  data() {
    return {
      descr: '',
      scrollOptions: {
        root: this.ListWrapper,
        rootMargin: '150px',
        threshold: 0
      }
    }
  },
  components: {
    ScrollMarker
  },
  computed: {
    ...mapState([
        'srcData',
        'srcArrs',
        'srcDescr',
        'step',
        'lenSrcData',
        'isName',
        'isReg',
        'descrItem',
    ]),
  },
  methods: {
    ...mapMutations([
      'setData',
      'setLenSrcData',
      'toggleStatus',
      'setDescrItem',
    ]),
    changeData() {
      this.setLenSrcData(this.step);
      this.setData(this.lenSrcData);
    },
    showDescr(str) {
        for(let i = 0; i < this.srcDescr.length; i++) {
          if(this.srcDescr[i].id == str) {
          this.setDescrItem(this.srcDescr[i]);
          // console.log('el is ', this.srcDescr[i]);
          // console.log('gallery is ', this.srcDescr[i].gallery);
          this.$router.push({name: 'description'});
          break;
          }
        }
    }
  },
}
</script>