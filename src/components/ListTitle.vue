<template>
  <div class="list-title">
    <div class="list-title-left">
      Список библиотек
    </div>
    <div class="list-ss">
      <div class="list-search">
        <input type="search" name="" id="list-search-box" 
          @input="searchHint" placeholder="Поиск">
      </div>
      <div class="list-sort">
        Сортировать
        <div class="list-sort-box">
          <div class="list-sort-item" 
            @click.stop="sortReg"
            v-show="!srcArrs.sortReg.status">по региону</div>
          <div class="list-sort-item" 
            @click.stop="sortName"
            v-show="!srcArrs.sortName.status">по названию</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'ListTitle',
  computed: {
    ...mapState([
        'srcData',
        'srcArrs',
        'srcDescr',
        'step',
        'lenSrcData',
        'isName',
        'isReg',
        'currentArr',
    ]),
  },
  methods: {
    ...mapMutations([
        'setData',
        'clearLenSrcData',
        'setLenSrcData',
        'toggleIsName',
        'toggleIsReg',
        'toggleStatus',
        'setCurrentArr',
    ]),
    sortReg() {
      this.clearLenSrcData();
      this.setLenSrcData(this.step);
      this.toggleStatus('sortReg');
      this.setData(this.lenSrcData);
      this.toggleIsReg();
    },
    sortName() {
      this.clearLenSrcData();
      this.setLenSrcData(this.step);
      this.toggleStatus('sortName');
      this.setData(this.lenSrcData);
      this.toggleIsName();
    },
    searchHint(e) {
      if(e.target.value.length > 2) {
        this.clearLenSrcData();
        this.setLenSrcData(this.step);
        let reg = new RegExp(e.target.value, 'i');
        let arr = this.srcArrs.sortReg.arr, res = [];
        res = arr.filter(el => el.name.match(reg) || el.address.match(reg));
        this.toggleStatus('search');
        this.setCurrentArr(res);
        this.setData(this.lenSrcData);
      }
    },
  },
}
</script>