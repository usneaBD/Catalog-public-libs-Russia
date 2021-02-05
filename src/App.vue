<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapMutations, mapState } from 'vuex'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapMutations([
        'setCurrentArr',
        'setData',
        'setLenSrcData',
        'runUpDataSortName'
    ]),
  },
  computed: {
    ...mapState([
        'srcData',
        'step',
        'lenSrcData',
        'srcArrs'
    ]),
  },
  beforeCreate() {
    this.$store.dispatch('fetchStartData');
    this.$store.dispatch('fetchDescriptions');
  },
}
</script>
<style>
  @import './assets/styles.css';
</style>


