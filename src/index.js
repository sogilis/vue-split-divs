import SplitDivs from './split-divs/index.vue'

export default SplitDivs

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('split-divs', SplitDivs)
}
