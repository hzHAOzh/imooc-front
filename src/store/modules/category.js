import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

export default {
  namespaced: true, // 开启独立作用域
  state: () => ({
    categorys: [ALL_CATEGORY_ITEM]
  }),
  mutations: {
    setCategorys(state, categorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...categorys]
    }
  },
  actions: {
    async useCategoryData(context) {
      const { categorys } = await getCategory()
      context.commit('setCategorys', categorys)
    }
  }
}
