import NodeInfo from '../nodeInfo'

const testMap = new NodeInfo({
  id: 'node-test', // 唯一标识
  type: 'transform-block', // 类型
  innerHTML: '拖拽区块' // 描述
})

const canvasMaps = {
  state: {
    canvasMap: [testMap] // 画布中的组件，默认插入一个用于调试可动态添加，暂时写死，后期用lowdb缓存
  },
  mutations: {
    ADD_CANVAS_MAP: (state, nodeInfo) => {
      state.canvasMap.push(nodeInfo)
    }
  },
  actions: {
    AddCanvasMap: ({ commit }, nodeInfo) => {
      commit('ADD_CANVAS_MAP', nodeInfo)
    }
  }
}
export default canvasMaps
