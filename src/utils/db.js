import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('bin-data')
const db = low(adapter)

db
  .defaults({
    app: {
      canvasPanel: { width: 1920, height: 1080 }, // 全局面包的宽高
      backgroundColor: '#0d2a42', // 背景颜色
      gridStep: 8 // 栅格间距
    },
    database: {}
  })
  .write()

export default db
